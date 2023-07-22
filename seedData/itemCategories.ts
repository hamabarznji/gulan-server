const itemCategories = [
  {
    id: "07419e4e-f966-4d13-9b74-e2f7297b61fe"
    ,
    name: "A"
  },
  {
    id: "29f8b5d4-8b39-4364-9843-b47fecff7032",

    name: "B"
  },
  {
    id: "d3576fec-a937-475c-b1de-10c62335bf8f",

    name: "B"
  },
  {
    id: "2aaad8ad-f801-408c-ad2c-6be51dd73b38",

    name: "B"
  },
  {
    id: "3ec95c3e-d53a-4261-a31b-98d3c3c15e9b",

    name: "C"
  },
  {
    id: "44061b37-5510-4bdd-815e-06e8c5ec7b18",

    name: "D"
  },
  {
    id: "4419be25-429f-4718-b176-8a74664e0704",

    name: "E"
  },
  {
    id: "51524e00-bd04-45c6-84f7-231cf1a260a1",

    name: "F"
  },
  {
    id: "6f032cd5-0090-4dff-abc3-6d0214713240",

    name: "G"
  },
  {
    id: "73d138cf-286f-427f-a95d-647df81890b1",

    name: "H"
  }
];

const seedItemCategories = async (prisma) => {
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