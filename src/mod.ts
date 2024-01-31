import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { VFS } from "@spt-aki/utils/VFS";
import { jsonc } from "jsonc";
import path from "path";

class ConfigurableInventories implements IPostDBLoadMod 
{
    public postDBLoad(container: DependencyContainer): void 
    {
        const vfs = container.resolve<VFS>("VFS");
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const tables: IDatabaseTables = databaseServer.getTables();
        const items = Object.values(tables.templates.items);
        const randomID = (): string => `${Math.random().toString(36).substring(2, 10)}-${Date.now().toString(36)}`;

        const loadJsoncFile = (filename: string) =>
            jsonc.parse(
                vfs.readFile(path.resolve(__dirname, `../config/${filename}.jsonc`))
            );

        const processItems = (itemsList: any[]) => 
        {
            itemsList.forEach((item) => 
            {
                const { _props } = items.find((i) => i._id === item.itemID) || {};
                if (_props) 
                {
                    _props.GridLayoutName = _props.RigLayoutName = item.layout;
                    item.grid.forEach(({ horizontal, vertical }, g) => 
                    {

                        if (!_props.Grids[g]) 
                        {
                            _props.Grids[g] = {
                                _id: randomID(),
                                _name: g + 1,
                                _parent: item.itemID,
                                _props: {
                                    cellsH: 1,
                                    cellsV: 1,
                                    filters: [],
                                    minCount: 0,
                                    maxCount: 0,
                                    maxWeight: 0,
                                    isSortingTable: false
                                },
                                _proto: "55d329c24bdc2d892f8b4567"
                            };
                        }

                        const gridProps = _props.Grids[g]._props;
                        Object.assign(gridProps, {
                            cellsH: horizontal,
                            cellsV: vertical,
                            filters: item.removeFilters ? [] : gridProps.filters
                        });
                    });
                    if (item.layout === "") 
                    {
                        _props.Grids = _props.Grids.filter((grid: { _props: { cellsH: number } }) => grid._props.cellsH !== -1);
                        _props.Grids = _props.Grids.filter((grid: { _props: { cellsV: number } }) => grid._props.cellsV !== -1);
                    }
                }
            });
        };

        const categoriesConfig = loadJsoncFile("inventoriesEnabled");
        const categories = ["backpacks", "cases", "plateCarriers", "pockets", "rigs", "secureContainers"];
        const enabledCategories = categories.filter(category => categoriesConfig[category]);
        const inventory = enabledCategories.map(loadJsoncFile).flat();
        processItems(inventory);
    }
}

module.exports = { mod: new ConfigurableInventories() };