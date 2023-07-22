const seedToPurchaseItems = [
    {
        item_id: "550d46a7-a34d-49ff-8d96-bbc2759b6e9b",
        purchase_order_id: "13efa234-fd05-42a7-9fb5-f67cb5205fbc",
        qty: 20,
        price: 2.1

    },
    {
        item_id: "21882825-89e0-4c33-ac05-fa35f80ae438",
        purchase_order_id: "13efa234-fd05-42a7-9fb5-f67cb5205fbc",
        qty: 12,
        price: 4
    },
    {
        item_id: "577cac06-3f19-4342-94ac-7d6f423aa6e2",
        purchase_order_id: "13efa234-fd05-42a7-9fb5-f67cb5205fbc",
        qty: 36,
        price: 3.4
    },
    {
        item_id: "21882825-89e0-4c33-ac05-fa35f80ae438",
        purchase_order_id: "8789608b-29d5-46bf-8c4f-eb95e5b7b52e",
        qty: 20,
        price: 2.12
    },
    {
        item_id: "550d46a7-a34d-49ff-8d96-bbc2759b6e9b",
        purchase_order_id: "8789608b-29d5-46bf-8c4f-eb95e5b7b52e",
        qty: 34,
        price: 4
    },
    {
        item_id: "577cac06-3f19-4342-94ac-7d6f423aa6e2",
        purchase_order_id: "8789608b-29d5-46bf-8c4f-eb95e5b7b52e",
        qty: 40,
        price: 4
    },
    {
        item_id: "6ff4b9aa-c05c-4502-b732-300a672248cd",
        purchase_order_id: "8789608b-29d5-46bf-8c4f-eb95e5b7b52e",
        qty: 50,
        price: 1.6
    },

    {
        item_id: "7faff783-6879-4ac1-83a1-79a6c100b3e3",
        purchase_order_id: "8789608b-29d5-46bf-8c4f-eb95e5b7b52e",
        qty: 10,
        price: 7
    },
    {
        item_id: "ae05bbc6-56e6-4454-9a49-448a6b5ef02c",
        purchase_order_id: "8789608b-29d5-46bf-8c4f-eb95e5b7b52e",
        qty: 40,
        price: 3
    },
    {
        item_id: "b927b4a3-9fa6-4c12-93c8-03d566c9816e",
        purchase_order_id: "8789608b-29d5-46bf-8c4f-eb95e5b7b52e",
        qty: 25,
        price: 2.3
    },

    {
        item_id: "bb6366d6-8f97-48c5-ab99-225d56e463bc",
        purchase_order_id: "8956fd8b-7d81-4846-aed6-5e85d29659f6",
        qty: 20,
        price: 2
    },
    {
        item_id: "ce1099d8-e5ca-456b-91a7-2bed48c82b42",
        purchase_order_id: "8956fd8b-7d81-4846-aed6-5e85d29659f6",
        qty: 10,
        price: 2.7
    },
    {
        item_id: "cf510d8a-f982-4bc6-bb85-ae415f8df39d",
        purchase_order_id: "8956fd8b-7d81-4846-aed6-5e85d29659f6",
        qty: 15,
        price: 2.7
    },
    {
        item_id: "bb6366d6-8f97-48c5-ab99-225d56e463bc",
        purchase_order_id: "9b025aa6-4df3-4c4d-9e18-390fe5cc0c37",
        qty: 25,
        price: 2.2
    },
    {
        item_id: "ce1099d8-e5ca-456b-91a7-2bed48c82b42",
        purchase_order_id: "9b025aa6-4df3-4c4d-9e18-390fe5cc0c37",
        qty: 30,
        price: 2.5
    },
    {
        item_id: "cf510d8a-f982-4bc6-bb85-ae415f8df39d",
        purchase_order_id: "9b025aa6-4df3-4c4d-9e18-390fe5cc0c37",
        qty: 25,
        price: 2.5
    },
];

const seedPurchaseItems = async (prisma) => {
    try {
        const purchaseItems = await prisma.purchasedItem.findMany();
        if (purchaseItems.length === 0) {
            await prisma.purchasedItem.createMany({
                data: seedToPurchaseItems,
            });
        }
    } catch (error) {
        throw error;
    }
};

export default seedPurchaseItems;
