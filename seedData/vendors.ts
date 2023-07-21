const vendors = [
    { name: 'Vendor 1' },
    { name: 'Vendor 2' },
    { name: 'Vendor 3' },
    { name: 'Vendor 4' },
    { name: 'Vendor 5' },
  ];

 const  seedItemCategories=async(prisma)=> {
    try {
      const existingItemCategory = await prisma.itemCategory.findMany();
      if (existingItemCategory.length === 0) {
        await prisma.itemCategory.createMany({
          data: vendors,
        });
      }
    } catch (error) {
      throw error;
    }
  }
  export default seedItemCategories