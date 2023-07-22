const colors = [
    { id: "ab15b026-7c3d-49be-9c4b-f7f4463f812c", "color": "Red" },
    { id: "ab2936f9-58a3-4c6d-9da6-f2f06cbe6415", "color": "Blue" },
    { id: "e3330405-e895-42ce-9441-d837a49619ba", "color": "Green" },
    { id: "ab2936f9-58a3-4c6d-9da6-f2f06cbe6415", "color": "Black" },
    { id: "05a23361-81ff-48ed-96f1-5294b97a1653", "color": "White" }
]
const seedColors = async (prisma) => {
    try {
        const categories = await prisma.color.findMany();
        if (categories.length === 0) {
            await prisma.color.createMany({
                data: colors,
            });
        }
    } catch (error) {
        throw error;
    }
}


export default seedColors