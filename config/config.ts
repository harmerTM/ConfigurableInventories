const inventory = [
  // Backpacks
  {
    name: "6Sh118 raid backpack",
    itemID: "5df8a4d786f77412672a1e3b",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 16 }],
  },
  {
    name: "LBT-2670 Slim Field Med Pack",
    itemID: "5e4abc6786f77406812bd572",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 16 }],
  },
  {
    name: "Mystery Ranch Blackjack 50 backpack Multicam",
    itemID: "5c0e774286f77468413cc5b2",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 14 }],
  },
  {
    name: "Eberlestock F4 Terminator load bearing backpack Tiger Stripe",
    itemID: "5f5e46b96bdad616ad46d613",
    layout: "", // Default: "f4_term"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 6, vertical: 13 },
      // Slot 2
      { horizontal: -1, vertical: 0 },
      // Slot 3
      { horizontal: -1, vertical: 0 },
    ],
  },
  {
    name: "SSO Attack 2 raid backpack",
    itemID: "5ab8ebf186f7742d8b372e80",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 12 }],
  },
  {
    name: "Tasmanian Tiger Trooper 35 backpack",
    itemID: "639346cc1c8f182ad90c8972",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 12 }],
  },
  {
    name: "Pilgrim tourist backpack",
    itemID: "59e763f286f7742ee57895da",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 12 }],
  },
  {
    name: "Santas Bag",
    itemID: "61b9e1aaef9a1b5d6a79899a",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 12 }],
  },
  {
    name: "3V Gear Paratus 3-Day Operators Tactical backpack",
    itemID: "5c0e805e86f774683f3dd637",
    layout: "", // Default: "Paratus"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 6, vertical: 12 },
      // Slot 2
      { horizontal: -1, vertical: 0 },
      // Slot 3
      { horizontal: -1, vertical: 0 },
      // Slot 4
      { horizontal: -1, vertical: 0 },
    ],
  },
  {
    name: "Eberlestock G2 Gunslinger II backpack Dry Earth",
    itemID: "6034d2d697633951dc245ea6",
    layout: "", // Default: "gunslinger1"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 6, vertical: 12 },
      // Slot 2
      { horizontal: -1, vertical: 0 },
      // Slot 3
      { horizontal: -1, vertical: 0 },
    ],
  },
  {
    name: "Oakley Mechanism heavy duty backpack Black",
    itemID: "5d5d940f86f7742797262046",
    layout: "", // Default: "oakley"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 6, vertical: 11 },
      // Slot 2
      { horizontal: -1, vertical: 0 },
      // Slot 3
      { horizontal: -1, vertical: 0 },
      // Slot 4
      { horizontal: -1, vertical: 0 },
      // Slot 5
      { horizontal: -1, vertical: 0 },
    ],
  },
  {
    name: "ANA Tactical Beta 2 Battle backpack",
    itemID: "5b44c6ae86f7742d1627baea",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 10 }],
  },
  {
    name: "Gruppa 99 T30 Backpack",
    itemID: "628e1ffc83ec92260c0f437f",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 10 }],
  },
  {
    name: "Gruppa 99 T30 Backpack (Multicam)",
    itemID: "62a1b7fbc30cfa1d366af586",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 10 }],
  },
  {
    name: "Eberlestock F5 Switchblade backpack Dry Earth",
    itemID: "5f5e467b0bc58666c37e7821",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 10 }],
  },
  {
    name: "Camelbak TriZip assault backpack",
    itemID: "545cdae64bdc2d39198b4568",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 10 }],
  },
  {
    name: "LBT-1476A 3Day Pack Woodland",
    itemID: "618cfae774bb2d036a049e7c",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 9 }],
  },
  {
    name: "Gruppa 99 T20 backpack",
    itemID: "618bb76513f5097c8d5aa2d5",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 9 }],
  },
  {
    name: "Gruppa 99 T20 backpack Black",
    itemID: "618bb76513f5097c8d5aa2d5",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 9 }],
  },
  {
    name: "Gruppa 99 T20 backpack Multicam",
    itemID: "619cf0335771dd3c390269ae",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 9 }],
  },
  {
    name: "Hazard 4 Drawbridge backpack Coyote Tan",
    itemID: "60a272cc93ef783291411d8e",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 9 }],
  },
  {
    name: "Hazard 4 Takedown sling backpack Black",
    itemID: "6034d103ca006d2dca39b3f0",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 8 }],
  },
  {
    name: "Hazard 4 Takedown sling backpack Multicam",
    itemID: "6038d614d10cbf667352dd44",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 8 }],
  },
  {
    name: "Hazard 4 Pillbox backpack",
    itemID: "60a2828e8689911a226117f9",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 7 }],
  },
  {
    name: "Scav backpack",
    itemID: "56e335e4d2720b6c058b456d",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 7 }],
  },
  {
    name: "WARTECH Berkut BB102 backpack",
    itemID: "5ca20d5986f774331e7c9602",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 7 }],
  },
  {
    name: "LBT-8005A Day Pack backpack",
    itemID: "5e9dcf5986f7746c417435b3",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 7 }],
  },
  {
    name: "Sanitars bag",
    itemID: "5e997f0b86f7741ac73993e2",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 6 }],
  },
  {
    name: "Flyye MBSS backpack",
    itemID: "544a5cde4bdc2d39388b456b",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 6 }],
  },
  {
    name: "Mystery Ranch NICE COMM 3 BVS frame system",
    itemID: "628bc7fb408e2b2e9c0801b1",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 5 }],
  },
  {
    name: "Duffle bag",
    itemID: "56e33634d2720bd8058b456b",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 4 }],
  },
  {
    name: "LolKek 3F Transfer tourist backpack",
    itemID: "5f5e45cc5021ce62144be7aa",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 4 }],
  },
  {
    name: "Transformer Bag",
    itemID: "56e33680d2720be2748b4576",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 3 }],
  },
  {
    name: "VKBO army bag",
    itemID: "5ab8ee7786f7742d8f33f0b9",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 4, vertical: 4 }],
  },
  {
    name: "Tactical sling bag",
    itemID: "5ab8f04f86f774585f4237d8",
    layout: "",
    removeFilters: false,
    grid: [{ horizontal: 4, vertical: 3 }],
  },
  // Containers & Cases
  {
    name: "Lucky Scav Junk box",
    itemID: "5b7c710788a4506dec015957",
    removeFilters: false,
    grid: [{ horizontal: 20, vertical: 16 }],
  },
  {
    name: "T H I C C item case",
    itemID: "5c0a840b86f7742ffa4f2482",
    removeFilters: false,
    grid: [{ horizontal: 20, vertical: 16 }],
  },
  {
    name: "Dogtag case",
    itemID: "5c093e3486f77430cb02e593",
    removeFilters: false,
    grid: [{ horizontal: 14, vertical: 14 }],
  },
  {
    name: "T H I C C Weapon case",
    itemID: "5b6d9ce188a4501afc1b2b25",
    removeFilters: false,
    grid: [{ horizontal: 13, vertical: 13 }],
  },
  {
    name: "Item case",
    itemID: "59fb042886f7746c5005a7b2",
    removeFilters: false,
    grid: [{ horizontal: 11, vertical: 11 }],
  },
  {
    name: "Grenade case",
    itemID: "5e2af55f86f7746d4159f07c",
    removeFilters: false,
    grid: [{ horizontal: 11, vertical: 11 }],
  },
  {
    name: "Mr. Holodilnick thermal bag",
    itemID: "5c093db286f7740a1b2617e3",
    removeFilters: false,
    grid: [{ horizontal: 11, vertical: 11 }],
  },
  {
    name: "Weapon case",
    itemID: "59fb023c86f7746d0d4b423c",
    removeFilters: false,
    grid: [{ horizontal: 10, vertical: 10 }],
  },
  {
    name: "Medicine case",
    itemID: "5aafbcd986f7745e590fff23",
    removeFilters: false,
    grid: [{ horizontal: 10, vertical: 10 }],
  },
  {
    name: "Magazine case",
    itemID: "5c127c4486f7745625356c13",
    removeFilters: false,
    grid: [{ horizontal: 10, vertical: 10 }],
  },
  {
    name: "Ammunition case",
    itemID: "5aafbde786f774389d0cbc0f",
    removeFilters: false,
    grid: [{ horizontal: 10, vertical: 10 }],
  },
  {
    name: "Money case",
    itemID: "5aafbde786f774389d0cbc0f",
    removeFilters: false,
    grid: [{ horizontal: 10, vertical: 10 }],
  },
  {
    name: "S I C C organizational pouch",
    itemID: "5d235bb686f77443f4331278",
    removeFilters: false,
    grid: [{ horizontal: 7, vertical: 7 }],
  },
  {
    name: "Documents Case",
    itemID: "590c60fc86f77412b13fddcf",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 6 }],
  },
  {
    name: "Key tool",
    itemID: "59fafd4b86f7745ca07e1232",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 6 }],
  },
  {
    name: "Pistol case",
    itemID: "567143bf4bdc2d1a0f8b4567",
    removeFilters: false,
    grid: [{ horizontal: 5, vertical: 5 }],
  },
  {
    name: "Injector case",
    itemID: "619cbf7d23893217ec30b689",
    removeFilters: false,
    grid: [{ horizontal: 4, vertical: 4 }],
  },
  {
    name: "Keycard holder case",
    itemID: "619cbf9e0a7c3a1a2731940a",
    removeFilters: false,
    grid: [{ horizontal: 4, vertical: 4 }],
  },
  {
    name: "Gingy keychain",
    itemID: "619cbf9e0a7c3a1a2731940a",
    removeFilters: false,
    grid: [{ horizontal: 3, vertical: 3 }],
  },
  {
    name: "Simple wallet",
    itemID: "5783c43d2459774bbe137486",
    removeFilters: false,
    grid: [{ horizontal: 3, vertical: 3 }],
  },
  {
    name: "WZ Wallet",
    itemID: "60b0f6c058e0b0481a09ad11",
    removeFilters: false,
    grid: [{ horizontal: 3, vertical: 3 }],
  },
  // Plate Carriers
  {
    name: "Ars Arma A18 Skanda plate carrier",
    itemID: "5d5d87f786f77427997cfaef",
    layout: "A18", // Default: "A18"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 2 },
      // Slot 8
      { horizontal: 1, vertical: 2 },
      // Slot 9
      { horizontal: 1, vertical: 2 },
      // Slot 10
      { horizontal: 1, vertical: 2 },
      // Slot 11
      { horizontal: 1, vertical: 1 },
      // Slot 12
      { horizontal: 1, vertical: 1 },
      // Slot 13
      { horizontal: 1, vertical: 1 },
      // Slot 14
      { horizontal: 1, vertical: 1 },
      // Slot 15
      { horizontal: 1, vertical: 1 },
    ],
  },
  // Pockets
  {
    name: "Карманы 1 на 4 со спец слотами",
    itemID: "627a4e6b255f7527fb05a0f6",
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 1 },
      // Slot 3
      { horizontal: 1, vertical: 1 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
    ],
  },
  // Rigs
  {
    name: "Belt-A + Belt-B gear rig",
    itemID: "5c0e6a1586f77404597b4965",
    layout: "Beltab", // Default: "Beltab"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 1 },
      // Slot 8
      { horizontal: 1, vertical: 1 },
      // Slot 9
      { horizontal: 1, vertical: 1 },
      // Slot 10
      { horizontal: 1, vertical: 1 },
      // Slot 11
      { horizontal: 1, vertical: 1 },
      // Slot 12
      { horizontal: 1, vertical: 1 },
      // Slot 13
      { horizontal: 1, vertical: 1 },
      // Slot 14
      { horizontal: 1, vertical: 1 },
      // Slot 15
      { horizontal: 1, vertical: 1 },
      // Slot 16
      { horizontal: 1, vertical: 1 },
      // Slot 17
      { horizontal: 1, vertical: 1 },
      // Slot 18
      { horizontal: 1, vertical: 1 },
      // Slot 19
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "Velocity Systems MPPV Multi-Purpose Patrol Vest",
    itemID: "5df8a42886f77412640e2e75",
    layout: "mppv", // Default: "mppv"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 2 },
      // Slot 8
      { horizontal: 1, vertical: 2 },
      // Slot 9
      { horizontal: 1, vertical: 1 },
      // Slot 10
      { horizontal: 1, vertical: 1 },
      // Slot 11
      { horizontal: 1, vertical: 2 },
      // Slot 12
      { horizontal: 1, vertical: 2 },
      // Slot 13
      { horizontal: 1, vertical: 1 },
      // Slot 14
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "ANA Tactical Alpha chest rig",
    itemID: "592c2d1a86f7746dbe2af32a",
    layout: "ANA Tactical", // Default: "ANA Tactical"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 3 },
      // Slot 4
      { horizontal: 1, vertical: 3 },
      // Slot 5
      { horizontal: 1, vertical: 3 },
      // Slot 6
      { horizontal: 1, vertical: 3 },
      // Slot 7
      { horizontal: 2, vertical: 2 },
    ],
  },
  {
    name: 'Azimut SS "Zhuk" chest harness (Black)',
    itemID: "603648ff5a45383c122086ac",
    layout: "azimut1", // Default: "azimut1"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 2 },
      // Slot 8
      { horizontal: 1, vertical: 2 },
      // Slot 9
      { horizontal: 1, vertical: 2 },
      // Slot 10
      { horizontal: 1, vertical: 2 },
    ],
  },
  {
    name: 'Azimut SS "Zhuk" chest harness (SURPAT)',
    itemID: "6040dd4ddcf9592f401632d2",
    layout: "azimut1", // Default: "azimut1"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 2 },
      // Slot 8
      { horizontal: 1, vertical: 2 },
      // Slot 9
      { horizontal: 1, vertical: 2 },
      // Slot 10
      { horizontal: 1, vertical: 2 },
    ],
  },
  {
    name: "BlackRock chest rig",
    itemID: "5648a69d4bdc2ded0b8b457b",
    layout: "blackrock", // Default: "blackrock"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 2, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 1 },
      // Slot 7
      { horizontal: 1, vertical: 1 },
      // Slot 8
      { horizontal: 1, vertical: 1 },
      // Slot 9
      { horizontal: 1, vertical: 1 },
      // Slot 10
      { horizontal: 1, vertical: 2 },
      // Slot 11
      { horizontal: 1, vertical: 2 },
    ],
  },
  {
    name: "WARTECH MK3 TV-104 chest rig",
    itemID: "5ab8dab586f77441cd04f2a2",
    layout: "Wartech MK3", // Default: "Wartech MK3"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 2 },
      // Slot 8
      { horizontal: 1, vertical: 2 },
      // Slot 9
      { horizontal: 1, vertical: 1 },
      // Slot 10
      { horizontal: 1, vertical: 1 },
      // Slot 11
      { horizontal: 2, vertical: 1 },
    ],
  },
  {
    name: "LBT-1961A Load Bearing Chest Rig",
    itemID: "5e9db13186f7742f845ee9d3",
    layout: "Bearing", // Default: "Bearing"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 2, vertical: 2 },
      // Slot 2
      { horizontal: 2, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 1 },
      // Slot 8
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "LBT-1961A Load Bearing Chest Rig (Goons Edition)",
    itemID: "628baf0b967de16aab5a4f36",
    layout: "Bearing", // Default: "Bearing"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 2, vertical: 2 },
      // Slot 2
      { horizontal: 2, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 1 },
      // Slot 8
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "Stich Profi Chest Rig MK2 (Assault, A-TACS FG)",
    itemID: "60a621c49c197e4e8c4455e6",
    layout: "sprofi_mk2", // Default: "sprofi_mk2"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 1 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 1 },
      // Slot 6
      { horizontal: 1, vertical: 1 },
      // Slot 7
      { horizontal: 1, vertical: 1 },
      // Slot 8
      { horizontal: 1, vertical: 2 },
      // Slot 9
      { horizontal: 1, vertical: 2 },
      // Slot 10
      { horizontal: 1, vertical: 2 },
      // Slot 11
      { horizontal: 1, vertical: 1 },
      // Slot 12
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "Stich Profi Chest Rig MK2 (Recon, A-TACS FG)",
    itemID: "60a6220e953894617404b00a",
    layout: "sprofi_mk2_smg", // Default: "sprofi_mk2_smg"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 1 },
      // Slot 6
      { horizontal: 1, vertical: 1 },
      // Slot 7
      { horizontal: 1, vertical: 1 },
      // Slot 8
      { horizontal: 1, vertical: 1 },
      // Slot 9
      { horizontal: 1, vertical: 1 },
      // Slot 10
      { horizontal: 1, vertical: 2 },
      // Slot 11
      { horizontal: 1, vertical: 2 },
      // Slot 12
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "Gear Craft GC-BSS-MK1 chest rig",
    itemID: "5fd4c60f875c30179f5d04c2",
    layout: "D3crx", // Default: "D3crx"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 1 },
      // Slot 8
      { horizontal: 1, vertical: 1 },
      // Slot 9
      { horizontal: 1, vertical: 1 },
      // Slot 10
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "BlackHawk! Commando chest harness (Black)",
    itemID: "5c0e9f2c86f77432297fe0a3",
    layout: "Commando", // Default: "Commando"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 2 },
      // Slot 8
      { horizontal: 1, vertical: 2 },
    ],
  },
  {
    name: "BlackHawk! Commando chest harness (Desert Tan)",
    itemID: "5b44c8ea86f7742d1627baf1",
    layout: "Commando", // Default: "Commando"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 2 },
      // Slot 8
      { horizontal: 1, vertical: 2 },
    ],
  },
  {
    name: "Haley Strategic D3CRX Chest Harness",
    itemID: "5d5d85c586f774279a21cbdb",
    layout: "D3crx", // Default: "D3crx"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 1 },
      // Slot 8
      { horizontal: 1, vertical: 1 },
      // Slot 9
      { horizontal: 1, vertical: 1 },
      // Slot 10
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "Direct Action Thunderbolt compact chest rig",
    itemID: "5f5f41f56760b4138443b352",
    layout: "Thunder_compl", // Default: "Thunder_compl"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 2 },
      // Slot 8
      { horizontal: 1, vertical: 1 },
      // Slot 9
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "Dynaforce Triton M43-A chest harness",
    itemID: "5ca20abf86f77418567a43f2",
    layout: "Commando", // Default: "Commando"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 2 },
      // Slot 8
      { horizontal: 1, vertical: 2 },
    ],
  },
  {
    name: "Umka M33-SET1 hunter vest",
    itemID: "6034cf5fffd42c541047f72e",
    layout: "umka_m33", // Default: "umka_m33"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 2, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 1 },
      // Slot 7
      { horizontal: 1, vertical: 1 },
      // Slot 8
      { horizontal: 1, vertical: 1 },
      // Slot 9
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "Splav Tarzan M22 chest rig",
    itemID: "5e4abfed86f77406a2713cf7",
    layout: "Tarzan", // Default: "Tarzan"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 1 },
      // Slot 6
      { horizontal: 1, vertical: 1 },
      // Slot 7
      { horizontal: 1, vertical: 1 },
      // Slot 8
      { horizontal: 1, vertical: 1 },
      // Slot 9
      { horizontal: 1, vertical: 1 },
      // Slot 10
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: 'Azimut SS "Khamelion" chest harness (Olive)',
    itemID: "63611865ba5b90db0c0399d1",
    layout: "6h112", // Default: "6h112"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 1 },
      // Slot 2
      { horizontal: 1, vertical: 1 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 1 },
      // Slot 8
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "UMTBS 6sh112 Scout-Sniper",
    itemID: "5929a2a086f7744f4b234d43",
    layout: "6h112", // Default: "6h112"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 1 },
      // Slot 2
      { horizontal: 1, vertical: 1 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 1 },
      // Slot 8
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "CSA chest rig",
    itemID: "6034d0230ca681766b6a0fb5",
    layout: "mil_tac", // Default: "mil_tac"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 3 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 3 },
    ],
  },
  {
    name: "Type 56 Chicom chest harness",
    itemID: "64be7110bf597ba84a0a41ea",
    layout: "chicom", // Default: "chicom"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 1 },
      // Slot 2
      { horizontal: 1, vertical: 1 },
      // Slot 3
      { horizontal: 1, vertical: 1 },
      // Slot 4
      { horizontal: 1, vertical: 1 },
      // Slot 5
      { horizontal: 1, vertical: 2 },
      // Slot 6
      { horizontal: 1, vertical: 2 },
      // Slot 7
      { horizontal: 1, vertical: 2 },
    ],
  },
  {
    name: "WARTECH TV-109 + TV-106 chest rig",
    itemID: "59e7643b86f7742cbf2c109a",
    layout: "Wartech Rig", // Default: "Wartech Rig"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 2, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 1 },
      // Slot 5
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "DIY IDEA chest rig",
    itemID: "5fd4c4fa16cac650092f6771",
    layout: "bank_robber", // Default: "bank_robber"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
    ],
  },
  {
    name: "Spiritus Systems Bank Robber chest rig",
    itemID: "5e4abc1f86f774069619fbaa",
    layout: "bank_robber", // Default: "bank_robber"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 2 },
    ],
  },
  {
    name: "SOE Micro Rig",
    itemID: "5d5d8ca986f7742798716522",
    layout: "Micro", // Default: "Micro"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 2, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
    ],
  },
  {
    name: "Scav Vest",
    itemID: "572b7adb24597762ae139821",
    layout: "Wild Wild Vest", // Default: "Wild Wild Vest"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 1 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "Security vest",
    itemID: "5fd4c5477a8d854fa0105061",
    layout: "Wild Wild Vest", // Default: "Wild Wild Vest"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 1 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
      // Slot 4
      { horizontal: 1, vertical: 1 },
    ],
  },
  {
    name: "Zulu Nylon Gear M4 Reduced Signature Chest Rig",
    itemID: "64be7095047e826eae02b0c1",
    layout: "zulu", // Default: "zulu"
    removeFilters: false,
    grid: [
      // Slot 1
      { horizontal: 1, vertical: 2 },
      // Slot 2
      { horizontal: 1, vertical: 2 },
      // Slot 3
      { horizontal: 1, vertical: 2 },
    ],
  },
  // Secure containers
  {
    name: "Secure container Kappa",
    itemID: "5c093ca986f7740a1867ab12",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 4 }],
  },
  {
    name: "Secure container Gamma",
    itemID: "5857a8bc2459772bad15db29",
    removeFilters: false,
    grid: [{ horizontal: 6, vertical: 3 }],
  },
  {
    name: "Secure container Epsilon",
    itemID: "59db794186f77448bc595262",
    removeFilters: false,
    grid: [{ horizontal: 4, vertical: 4 }],
  },
  {
    name: "Secure container Beta",
    itemID: "5857a8b324597729ab0a0e7d",
    removeFilters: false,
    grid: [{ horizontal: 4, vertical: 3 }],
  },
  {
    name: "Secure container Alpha",
    itemID: "544a11ac4bdc2d470e8b456a",
    removeFilters: false,
    grid: [{ horizontal: 4, vertical: 2 }],
  },
  {
    name: "Waist pouch",
    itemID: "5732ee6a24597719ae0c0281",
    removeFilters: false,
    grid: [{ horizontal: 2, vertical: 2 }],
  },
];

module.exports = { inventory };
