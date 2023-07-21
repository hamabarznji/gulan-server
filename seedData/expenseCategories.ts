
const expenseCategories = [
  {
    id: "591e3b7f-e885-4d6a-a1b6-eec05c17dfaf",
    name: 'Store Fixtures',
  },
  {
    id: "2b8d85e7-6126-44fc-b56e-089d07df508a",
    name: 'Store Supplies',
  },
  {
    id: "affdb656-d518-42e7-910f-7c3ec52d2da6",
    name: 'Salaries',
  },
  {
    id: "787a1704-acf8-47c9-a479-028c08f9db32"
    ,
    name: 'Rent',
  },
  {
    id: "990bcdc9-e1c3-4088-8d83-bb5bbd8b265b"
    ,
    name: 'Utilities',
  },
  {
    id: "c51d4a97-22ab-43a4-bb0d-719c031d7e24",

    name: 'Advertising',
  },
];
const seedExpenseCategories=async(prisma) =>{
  try {
    const categories = await prisma.expenseCategory.findMany();
    if (categories.length === 0) {
      await prisma.expenseCategory.createMany({
        data: expenseCategories,
      });
    }
  } catch (error) {
    throw error;
  }
}
export default seedExpenseCategories;