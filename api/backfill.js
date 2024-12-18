import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function backfillUsers() {
  try {
    const result = await prisma.user.updateMany({
      where: {
        OR: [
          { phone: null },
          { address: null },
        ],
      },
      data: {
        phone: "Unknown",
        address: "Not provided",
      },
    });
    console.log(`Updated ${result.count} users with default values.`);
  } catch (error) {
    console.error("Error updating users:", error);
  } finally {
    await prisma.$disconnect();
  }
}

backfillUsers();
