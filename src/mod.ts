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

        const loadJsoncFile = (filename: string) =>
            jsonc.parse(
                vfs.readFile(path.resolve(__dirname, `../config/${filename}.jsonc`))
            );

        // Load configurations for different item categories
        const [backpacks, cases, plateCarriers, pockets, rigs, secureContainers] = [
            "backpacks",
            "cases",
            "plateCarriers",
            "pockets",
            "rigs",
            "secureContainers"
        ].map(loadJsoncFile);

        // Process and update item properties based on configurations
        const processItems = (itemsList: any[]) => 
        {
            itemsList.forEach((item) => 
            {
                const { _props } = items.find((i) => i._id === item.itemID) || {};
                if (_props) 
                {
                    _props.GridLayoutName = _props.RigLayoutName = item.layout;

                    // Update grid properties
                    item.grid.forEach(({ horizontal, vertical }, g) => 
                    {
                        const gridProps = _props.Grids[g]._props;
                        Object.assign(gridProps, {
                            cellsH: horizontal,
                            cellsV: vertical,
                            filters: item.removeFilters ? [] : gridProps.filters
                        });
                    });

                    // Remove grids if layout is empty (for backpacks)
                    if (item.layout === "" && itemsList === backpacks) 
                    {
                        _props.Grids.splice(1);
                    }
                }
            });
        };

        // Process items for each category
        processItems([
            ...backpacks,
            ...cases,
            ...plateCarriers,
            ...pockets,
            ...rigs,
            ...secureContainers
        ]);
    }
}

module.exports = { mod: new ConfigurableInventories() };
