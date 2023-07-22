const sizes = [
    { id: "71e99c46-e4cb-42d8-8b2e-25c4662fa95c", "size": "Small" },
    { id: "afc89cf3-ed13-4889-a68a-e74dcb7fb3af", "size": "Medium" },
    { id: "df326c6d-4439-41ea-8244-8f94141af282", "size": "Large" },
    { id: "f5694304-7993-4c2b-bfba-e2e21e9c0e24", "size": "XL" }
]
const seedSizes = async (prisma) => {
    try {
        const categories = await prisma.size.findMany();
        if (categories.length === 0) {
            await prisma.size.createMany({
                data: sizes,
            });
        }
    } catch (error) {
        throw error;
    }
}


export default seedSizes