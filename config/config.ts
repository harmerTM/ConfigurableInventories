// Inventory will be overlapped if horizontal is higher than 6!

const inventory = [
  // Backpacks
  {
    name: "6Sh118 raid backpack",
    itemID: "5df8a4d786f77412672a1e3b",
    grid: [
      {
        horizontal: 6,
        vertical: 16,
      },
    ],
    removeFilters: true,
  },
  {
    name: "LBT-2670 Slim Field Med Pack",
    itemID: "5e4abc6786f77406812bd572",
    grid: [
      {
        horizontal: 6,
        vertical: 16,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Mystery Ranch Blackjack 50 backpack Multicam",
    itemID: "5c0e774286f77468413cc5b2",
    grid: [
      {
        horizontal: 6,
        vertical: 14,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Eberlestock F4 Terminator load bearing backpack Tiger Stripe",
    itemID: "5f5e46b96bdad616ad46d613",
    grid: [
      {
        horizontal: 6,
        vertical: 13,
      },
    ],
    removeFilters: true,
  },
  {
    name: "SSO Attack 2 raid backpack",
    itemID: "5ab8ebf186f7742d8b372e80",
    grid: [
      {
        horizontal: 6,
        vertical: 12,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Tasmanian Tiger Trooper 35 backpack",
    itemID: "639346cc1c8f182ad90c8972",
    grid: [
      {
        horizontal: 6,
        vertical: 12,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Pilgrim tourist backpack",
    itemID: "59e763f286f7742ee57895da",
    grid: [
      {
        horizontal: 6,
        vertical: 12,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Santas Bag",
    itemID: "61b9e1aaef9a1b5d6a79899a",
    grid: [
      {
        horizontal: 6,
        vertical: 12,
      },
    ],
    removeFilters: true,
  },
  {
    name: "3V Gear Paratus 3-Day Operators Tactical backpack",
    itemID: "5c0e805e86f774683f3dd637",
    grid: [
      {
        horizontal: 6,
        vertical: 12,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Eberlestock G2 Gunslinger II backpack Dry Earth",
    itemID: "6034d2d697633951dc245ea6",
    grid: [
      {
        horizontal: 6,
        vertical: 12,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Oakley Mechanism heavy duty backpack Black",
    itemID: "5d5d940f86f7742797262046",
    grid: [
      {
        horizontal: 6,
        vertical: 11,
      },
    ],
    removeFilters: true,
  },
  {
    name: "ANA Tactical Beta 2 Battle backpack",
    itemID: "5b44c6ae86f7742d1627baea",
    grid: [
      {
        horizontal: 6,
        vertical: 10,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Gruppa 99 T30 Backpack",
    itemID: "628e1ffc83ec92260c0f437f",
    grid: [
      {
        horizontal: 6,
        vertical: 10,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Gruppa 99 T30 Backpack (Multicam)",
    itemID: "62a1b7fbc30cfa1d366af586",
    grid: [
      {
        horizontal: 6,
        vertical: 10,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Eberlestock F5 Switchblade backpack Dry Earth",
    itemID: "5f5e467b0bc58666c37e7821",
    grid: [
      {
        horizontal: 6,
        vertical: 10,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Camelbak TriZip assault backpack",
    itemID: "545cdae64bdc2d39198b4568",
    grid: [
      {
        horizontal: 6,
        vertical: 10,
      },
    ],
    removeFilters: true,
  },
  {
    name: "LBT-1476A 3Day Pack Woodland",
    itemID: "618cfae774bb2d036a049e7c",
    grid: [
      {
        horizontal: 6,
        vertical: 9,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Gruppa 99 T20 backpack",
    itemID: "618bb76513f5097c8d5aa2d5",
    grid: [
      {
        horizontal: 6,
        vertical: 9,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Gruppa 99 T20 backpack Black",
    itemID: "618bb76513f5097c8d5aa2d5",
    grid: [
      {
        horizontal: 6,
        vertical: 9,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Gruppa 99 T20 backpack Multicam",
    itemID: "619cf0335771dd3c390269ae",
    grid: [
      {
        horizontal: 6,
        vertical: 9,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Hazard 4 Drawbridge backpack Coyote Tan",
    itemID: "60a272cc93ef783291411d8e",
    grid: [
      {
        horizontal: 6,
        vertical: 9,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Hazard 4 Takedown sling backpack Black",
    itemID: "6034d103ca006d2dca39b3f0",
    grid: [
      {
        horizontal: 6,
        vertical: 8,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Hazard 4 Takedown sling backpack Multicam",
    itemID: "6038d614d10cbf667352dd44",
    grid: [
      {
        horizontal: 6,
        vertical: 8,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Hazard 4 Pillbox backpack",
    itemID: "60a2828e8689911a226117f9",
    grid: [
      {
        horizontal: 6,
        vertical: 7,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Scav backpack",
    itemID: "56e335e4d2720b6c058b456d",
    grid: [
      {
        horizontal: 6,
        vertical: 7,
      },
    ],
    removeFilters: true,
  },
  {
    name: "WARTECH Berkut BB102 backpack",
    itemID: "5ca20d5986f774331e7c9602",
    grid: [
      {
        horizontal: 6,
        vertical: 7,
      },
    ],
    removeFilters: true,
  },
  {
    name: "LBT-8005A Day Pack backpack",
    itemID: "5e9dcf5986f7746c417435b3",
    grid: [
      {
        horizontal: 6,
        vertical: 7,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Sanitars bag",
    itemID: "5e997f0b86f7741ac73993e2",
    grid: [
      {
        horizontal: 6,
        vertical: 6,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Flyye MBSS backpack",
    itemID: "544a5cde4bdc2d39388b456b",
    grid: [
      {
        horizontal: 6,
        vertical: 6,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Mystery Ranch NICE COMM 3 BVS frame system",
    itemID: "628bc7fb408e2b2e9c0801b1",
    grid: [
      {
        horizontal: 6,
        vertical: 5,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Duffle bag",
    itemID: "56e33634d2720bd8058b456b",
    grid: [
      {
        horizontal: 6,
        vertical: 4,
      },
    ],
    removeFilters: true,
  },
  {
    name: "LolKek 3F Transfer tourist backpack",
    itemID: "5f5e45cc5021ce62144be7aa",
    grid: [
      {
        horizontal: 6,
        vertical: 4,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Transformer Bag",
    itemID: "56e33680d2720be2748b4576",
    grid: [
      {
        horizontal: 6,
        vertical: 3,
      },
    ],
    removeFilters: true,
  },
  {
    name: "VKBO army bag",
    itemID: "5ab8ee7786f7742d8f33f0b9",
    grid: [
      {
        horizontal: 4,
        vertical: 4,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Tactical sling bag",
    itemID: "5ab8f04f86f774585f4237d8",
    grid: [
      {
        horizontal: 4,
        vertical: 3,
      },
    ],
    removeFilters: true,
  },
  // Secure containers
  {
    name: "Secure container Kappa",
    itemID: "5c093ca986f7740a1867ab12",
    grid: [
      {
        horizontal: 6,
        vertical: 4,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Secure container Gamma",
    itemID: "5857a8bc2459772bad15db29",
    grid: [
      {
        horizontal: 6,
        vertical: 3,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Secure container Epsilon",
    itemID: "59db794186f77448bc595262",
    grid: [
      {
        horizontal: 4,
        vertical: 4,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Secure container Beta",
    itemID: "5857a8b324597729ab0a0e7d",
    grid: [
      {
        horizontal: 4,
        vertical: 3,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Secure container Alpha",
    itemID: "544a11ac4bdc2d470e8b456a",
    grid: [
      {
        horizontal: 4,
        vertical: 2,
      },
    ],
    removeFilters: true,
  },
  {
    name: "Waist pouch",
    itemID: "5732ee6a24597719ae0c0281",
    grid: [
      {
        horizontal: 2,
        vertical: 2,
      },
    ],
    removeFilters: true,
  },
  // Pockets
  {
    name: "Карманы 1 на 4 со спец слотами",
    itemID: "627a4e6b255f7527fb05a0f6",
    grid: [
      {
        horizontal: 1,
        vertical: 2,
      },
      {
        horizontal: 1,
        vertical: 1,
      },
      {
        horizontal: 1,
        vertical: 1,
      },
      {
        horizontal: 1,
        vertical: 2,
      },
    ],
    removeFilters: true,
  },
];

module.exports = { inventory };
