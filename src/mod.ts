import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

//Pull in config
import { inventory } from "../config/config.ts";

class ConfigurableInventories implements IPostDBLoadMod {
  public postDBLoad(container: DependencyContainer): void {
    const databaseServer = container.resolve("DatabaseServer");
    const tables = databaseServer.getTables();
    const items = tables.templates.items;

    let s = 0;

    for (const item of inventory) {
      const { _props } = items[item.itemID];

      _props.GridLayoutName = _props.RigLayoutName = item.layout;

      for (let g = 0; g < item.grid.length; g++, s++) {
        const gridProps = _props.Grids[s]._props;

        Object.assign(gridProps, {
          cellsH: item.grid[g].horizontal,
          cellsV: item.grid[g].vertical,
          filters: item.removeFilters ? [] : gridProps.filters,
        });
      }

      /* i need to figure out a way to split it because of rigs!
      if (item.layout == "") {
        _props.Grids.splice(1)
      }
      */
      s = 0;
    }
  }
}

module.exports = { mod: new ConfigurableInventories() };
