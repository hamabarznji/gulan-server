const itemCategories = [
  {
    id: "07419e4e-f966-4d13-9b74-e2f7297b61fe"
    ,
    name: "Dresses"
  },
  {
    id: "29f8b5d4-8b39-4364-9843-b47fecff7032",

    name: "Tops and Blouses"
  },
  {
    id: "d3576fec-a937-475c-b1de-10c62335bf8f",

    name: "Bottoms (Pants, Skirts, Shorts)"
  },
  {
    id: "2aaad8ad-f801-408c-ad2c-6be51dd73b38",

    name: "Outerwear (Jackets, Coats, Blazers)"
  },
  {
    id: "3ec95c3e-d53a-4261-a31b-98d3c3c15e9b",

    name: "Activewear (Leggings, Sports Bras, Athletic Tops)"
  },
  {
    id: "44061b37-5510-4bdd-815e-06e8c5ec7b18",

    name: "Lingerie and Sleepwear"
  },
  {
    id: "4419be25-429f-4718-b176-8a74664e0704",

    name: "Shoes (Heels, Flats, Boots, Sneakers)"
  },
  {
    id: "51524e00-bd04-45c6-84f7-231cf1a260a1",

    name: "Accessories (Scarves, Hats, Belts, Jewelry)"
  },
  {
    id: "6f032cd5-0090-4dff-abc3-6d0214713240",

    name: "Handbags and Purses"
  },
  {
    id: "73d138cf-286f-427f-a95d-647df81890b1",

    name: "Beauty and Personal Care (Makeup, Skincare, Hair Accessories)"
  }
];

const seedItemCategories=async(prisma) =>{
  try {
    const categories = await prisma.itemCategory.findMany();
    if (categories.length === 0) {
      await prisma.itemCategory.createMany({
        data: itemCategories,
      });
    }
  } catch (error) {
    throw error;
  }
}
export default seedItemCategories