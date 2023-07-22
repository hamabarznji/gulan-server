const purchaseOrders = [
  {
    id: "13efa234-fd05-42a7-9fb5-f67cb5205fbc",
    vendor_id: "e41679c5-cdf4-420e-92c2-1b2685551092",
    purchased_at: new Date("2023-06-01T10:00:00.000Z"),
  },
  {
    id: "23e1beec-52ad-4610-9c30-df47f5a1d24f",
    vendor_id: "e41679c5-cdf4-420e-92c2-1b2685551092",
    purchased_at: new Date("2023-06-12T10:00:00.000Z"),
  },
  {
    id: "8789608b-29d5-46bf-8c4f-eb95e5b7b52e",
    vendor_id: "e41679c5-cdf4-420e-92c2-1b2685551092",
    purchased_at: new Date("2023-06-22T10:00:00.000Z"),
  },
  {
    id: "8956fd8b-7d81-4846-aed6-5e85d29659f6",
    vendor_id: "ad862761-e006-42bd-a183-3558c3d79d3f",
    purchased_at: new Date("2023-06-24T10:00:00.000Z"),
  },
  {
    id: "9b025aa6-4df3-4c4d-9e18-390fe5cc0c37",
    vendor_id: "ad862761-e006-42bd-a183-3558c3d79d3f",
    purchased_at: new Date("2023-07-09T10:00:00.000Z"),
  },
  {
    id: "b90d6f32-7814-40e8-a332-0410bb6c93ea",
    vendor_id: "7b35693c-9b88-4a98-b244-158c461b1099",
    purchased_at: new Date("2023-07-16T10:00:00.000Z"),
  },
  {
    id: "e164b208-6056-4070-b43c-e602d2ef8ca6",
    vendor_id: "7b35693c-9b88-4a98-b244-158c461b1099",
    purchased_at: new Date("2023-07-27T10:00:00.000Z"),
  },
];

const seedPurchaseOrders = async (prisma) => {
  try {
    const purchasedOrders = await prisma.purchaseOrder.findMany();
    if (purchasedOrders.length === 0) {
      await prisma.purchaseOrder.createMany({
        data: purchaseOrders,
      });
    }
  } catch (error) {
    throw error;
  }
};

export default seedPurchaseOrders;
