const items = [
  {
    "id": "21882825-89e0-4c33-ac05-fa35f80ae438",

    "category_id": "07419e4e-f966-4d13-9b74-e2f7297b61fe",
    "name": "ITEM 1",
    "code": "SD123",
    "color_id": "e3330405-e895-42ce-9441-d837a49619ba",
    "size_id": "71e99c46-e4cb-42d8-8b2e-25c4662fa95c"
  },
  {
    "id": "550d46a7-a34d-49ff-8d96-bbc2759b6e9b",
    "category_id": "07419e4e-f966-4d13-9b74-e2f7297b61fe",
    "name": "ITEM 2",
    "code": "TS456",
    "color_id": "e3330405-e895-42ce-9441-d837a49619ba",
    "size_id": "71e99c46-e4cb-42d8-8b2e-25c4662fa95c"
  },
  {
    "id": "577cac06-3f19-4342-94ac-7d6f423aa6e2",
    "category_id": "07419e4e-f966-4d13-9b74-e2f7297b61fe",
    "name": "ITEM 3",
    "code": "JN789",
    "color_id": "e3330405-e895-42ce-9441-d837a49619ba",

    "size_id": "71e99c46-e4cb-42d8-8b2e-25c4662fa95c"
  },
  {
    "id": "6ff4b9aa-c05c-4502-b732-300a672248cd",
    "category_id": "07419e4e-f966-4d13-9b74-e2f7297b61fe",
    "name": "ITEM 4",
    "code": "TR987",
    "color_id": "e3330405-e895-42ce-9441-d837a49619ba",
    "size_id": "71e99c46-e4cb-42d8-8b2e-25c4662fa95c"
  },
  {
    "id": "7faff783-6879-4ac1-83a1-79a6c100b3e3",
    "category_id": "07419e4e-f966-4d13-9b74-e2f7297b61fe",
    "name": "ITEM 5",
    "code": "FS567",
    "color_id": "f4b84de6-2c1d-4a49-911b-e099faffd828",
    "size_id": "afc89cf3-ed13-4889-a68a-e74dcb7fb3af"
  },
  {
    "id": "ae05bbc6-56e6-4454-9a49-448a6b5ef02c",
    "category_id": "07419e4e-f966-4d13-9b74-e2f7297b61fe",
    "name": "ITEM 6",
    "code": "WS777",
    "color_id": "f4b84de6-2c1d-4a49-911b-e099faffd828",
    "size_id": "afc89cf3-ed13-4889-a68a-e74dcb7fb3af"
  },
  {
    "id": "b927b4a3-9fa6-4c12-93c8-03d566c9816e",
    "category_id": "07419e4e-f966-4d13-9b74-e2f7297b61fe",
    "name": "ITEM 7",
    "code": "CS234",

    "color_id": "f4b84de6-2c1d-4a49-911b-e099faffd828",
    "size_id": "df326c6d-4439-41ea-8244-8f94141af282"
  },
  {
    "id": "bb6366d6-8f97-48c5-ab99-225d56e463bc",
    "category_id": "07419e4e-f966-4d13-9b74-e2f7297b61fe",
    "name": "ITEM 8",
    "color_id": "ab15b026-7c3d-49be-9c4b-f7f4463f812c",
    "code": "SJ111",
    "size_id": "df326c6d-4439-41ea-8244-8f94141af282"
  },
  {
    "id": "ce1099d8-e5ca-456b-91a7-2bed48c82b42",
    "category_id": "07419e4e-f966-4d13-9b74-e2f7297b61fe",
    "name": "ITEM 9",
    "code": "CP222",
    "color_id": "05a23361-81ff-48ed-96f1-5294b97a1653",
    "size_id": "f5694304-7993-4c2b-bfba-e2e21e9c0e24"
  },
  {
    "id": "cf510d8a-f982-4bc6-bb85-ae415f8df39d",
    "category_id": "07419e4e-f966-4d13-9b74-e2f7297b61fe",
    "name": "ITEM 10",
    "code": "PB789",
    "color_id": "05a23361-81ff-48ed-96f1-5294b97a1653",
    "size_id": "f5694304-7993-4c2b-bfba-e2e21e9c0e24"
  }
]
const seedItems = async (prisma) => {
  try {
    const exsistingItems = await prisma.item.findMany();
    if (exsistingItems.length === 0) {
      await prisma.item.createMany({
        data: items,
      });
    }
  } catch (error) {
    throw error;
  }
}


export default seedItems