const expenses = [
  {
    categoryId: "591e3b7f-e885-4d6a-a1b6-eec05c17dfaf",
    description: "Store Fixtures Expense 1",
    amount: 100,
    createdAt: new Date("2023-06-01T10:00:00Z"),
    updatedAt: new Date("2023-06-01T12:30:00Z"),
  },
  {
    categoryId: "591e3b7f-e885-4d6a-a1b6-eec05c17dfaf",
    description: "Store Fixtures Expense 2",
    amount: 200,
    createdAt: new Date("2023-06-02T09:45:00Z"),
    updatedAt: new Date("2023-06-02T14:20:00Z"),
  },
  {
    categoryId: "591e3b7f-e885-4d6a-a1b6-eec05c17dfaf",
    description: "Store Fixtures Expense 3",
    amount: 300,
    createdAt: new Date("2023-06-03T11:15:00Z"),
    updatedAt: new Date("2023-06-03T15:45:00Z"),
  },
  {
    categoryId: "591e3b7f-e885-4d6a-a1b6-eec05c17dfaf",
    description: "Store Fixtures Expense 4",
    amount: 400,
    createdAt: new Date("2023-06-04T14:30:00Z"),
    updatedAt: new Date("2023-06-04T16:55:00Z"),
  },
  {
    categoryId: "591e3b7f-e885-4d6a-a1b6-eec05c17dfaf",
    description: "Store Fixtures Expense 5",
    amount: 500,
    createdAt: new Date("2023-06-05T08:00:00Z"),
    updatedAt: new Date("2023-06-05T10:30:00Z"),
  },
  {
    categoryId: "787a1704-acf8-47c9-a479-028c08f9db32",
    description: "Rent Expense 1",
    amount: 2000,
    createdAt: new Date("2023-06-06T13:00:00Z"),
    updatedAt: new Date("2023-06-06T15:30:00Z"),
  },
  {
    categoryId: "787a1704-acf8-47c9-a479-028c08f9db32",
    description: "Rent Expense 2",
    amount: 2500,
    createdAt: new Date("2023-06-07T10:30:00Z"),
    updatedAt: new Date("2023-06-07T14:15:00Z"),
  },
  {
    categoryId: "787a1704-acf8-47c9-a479-028c08f9db32",
    description: "Rent Expense 3",
    amount: 1800,
    createdAt: new Date("2023-06-08T11:45:00Z"),
    updatedAt: new Date("2023-06-08T16:00:00Z"),
  },
  {
    categoryId: "787a1704-acf8-47c9-a479-028c08f9db32",
    description: "Rent Expense 4",
    amount: 2200,
    createdAt: new Date("2023-06-09T14:15:00Z"),
    updatedAt: new Date("2023-06-09T16:45:00Z"),
  },
  {
    categoryId: "787a1704-acf8-47c9-a479-028c08f9db32",
    description: "Rent Expense 5",
    amount: 2000,
    createdAt: new Date("2023-06-10T09:30:00Z"),
    updatedAt: new Date("2023-06-10T11:45:00Z"),
  },
  {
    categoryId: "c51d4a97-22ab-43a4-bb0d-719c031d7e24",
    description: "Advertising Expense 1",
    amount: 500,
    createdAt: new Date("2023-06-11T12:00:00Z"),
    updatedAt: new Date("2023-06-11T14:30:00Z"),
  },
  {
    categoryId: "c51d4a97-22ab-43a4-bb0d-719c031d7e24",
    description: "Advertising Expense 2",
    amount: 800,
    createdAt: new Date("2023-06-12T09:15:00Z"),
    updatedAt: new Date("2023-06-12T13:00:00Z"),
  },
  {
    categoryId: "c51d4a97-22ab-43a4-bb0d-719c031d7e24",
    description: "Advertising Expense 3",
    amount: 700,
    createdAt: new Date("2023-06-13T11:30:00Z"),
    updatedAt: new Date("2023-06-13T15:00:00Z"),
  },
  {
    categoryId: "c51d4a97-22ab-43a4-bb0d-719c031d7e24",
    description: "Advertising Expense 4",
    amount: 600,
    createdAt: new Date("2023-06-14T14:45:00Z"),
    updatedAt: new Date("2023-06-14T17:30:00Z"),
  },
  {
    categoryId: "c51d4a97-22ab-43a4-bb0d-719c031d7e24",
    description: "Advertising Expense 5",
    amount: 900,
    createdAt: new Date("2023-06-15T08:30:00Z"),
    updatedAt: new Date("2023-06-15T11:15:00Z"),
  },
  {
    categoryId: "2b8d85e7-6126-44fc-b56e-089d07df508a",
    description: "Store Supplies Expense 1",
    amount: 300,
    createdAt: new Date("2023-06-16T12:45:00Z"),
    updatedAt: new Date("2023-06-16T15:15:00Z"),
  },
  {
    categoryId: "2b8d85e7-6126-44fc-b56e-089d07df508a",
    description: "Store Supplies Expense 2",
    amount: 400,
    createdAt: new Date("2023-06-17T09:00:00Z"),
    updatedAt: new Date("2023-06-17T12:00:00Z"),
  },
  {
    categoryId: "2b8d85e7-6126-44fc-b56e-089d07df508a",
    description: "Store Supplies Expense 3",
    amount: 350,
    createdAt: new Date("2023-06-18T10:30:00Z"),
    updatedAt: new Date("2023-06-18T14:00:00Z"),
  },
  {
    categoryId: "2b8d85e7-6126-44fc-b56e-089d07df508a",
    description: "Store Supplies Expense 4",
    amount: 450,
    createdAt: new Date("2023-06-19T13:15:00Z"),
    updatedAt: new Date("2023-06-19T16:30:00Z"),
  },
  {
    categoryId: "2b8d85e7-6126-44fc-b56e-089d07df508a",
    description: "Store Supplies Expense 5",
    amount: 350,
    createdAt: new Date("2023-06-20T08:45:00Z"),
    updatedAt: new Date("2023-06-20T11:30:00Z"),
  }
];

const seedExpenses=async(prisma)=> {
  try {
    const existingExpenses = await prisma.expense.findMany();
    if (existingExpenses.length === 0) {
      await prisma.expense.createMany({
        data: expenses,
      });
    }
  } catch (error) {
    throw error;
  }
}
export default seedExpenses;