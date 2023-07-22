/*
  Warnings:

  - You are about to drop the column `purchasedAt` on the `purchase_order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `purchase_order` DROP COLUMN `purchasedAt`,
    ADD COLUMN `purchased_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
