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

    const multiGridBackpacks = [
      "5f5e46b96bdad616ad46d613", // Eberlestock F4 Terminator load bearing backpack Tiger Stripe
      "5c0e805e86f774683f3dd637", // 3V Gear Paratus 3-Day Operators Tactical backpack
      "6034d2d697633951dc245ea6", // Eberlestock G2 Gunslinger II backpack Dry Earth
      "5d5d940f86f7742797262046", //Oakley Mechanism heavy duty backpack Black
    ];

    let s = 0;

    for (const item of inventory) {
      items[item.itemID]._props.GridLayoutName = "";

      for (let g = 0; g < item.grid.length; g++, s++) {
        const gridProps = items[item.itemID]._props.Grids[s]._props;
        Object.assign(gridProps, {
          cellsH: item.grid[g].horizontal,
          cellsV: item.grid[g].vertical,
        });

        if (item.removeFilters) {
          gridProps.filters = [];
        }
      }
      s = 0;
    }

    multiGridBackpacks.forEach((id) => items[id]._props.Grids.splice(1));
  }
}

module.exports = { mod: new ConfigurableInventories() };
