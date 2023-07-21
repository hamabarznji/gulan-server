const vendors = [
  {
    id: "e41679c5-cdf4-420e-92c2-1b2685551092",
    name: 'Vendor 1'
  },
  { id: "ad862761-e006-42bd-a183-3558c3d79d3f", name: 'Vendor 2' },
  { id: "7b35693c-9b88-4a98-b244-158c461b1099", name: 'Vendor 3' },
  { id: "4477c860-21c7-4074-b52f-d5fdaaf96760", name: 'Vendor 4' },
  { id: "30d6a2d4-d524-4aa1-8345-83257aa05801", name: 'Vendor 5' },
];

const seedVendors = async (prisma) => {
  try {
    const existingItemCategory = await prisma.vendor.findMany();
    if (existingItemCategory.length === 0) {
      await prisma.vendor.createMany({
        data: vendors,
      });
    }
  } catch (error) {
    throw error;
  }
}
export default seedVendors