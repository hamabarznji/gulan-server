/*
  Warnings:

  - You are about to drop the column `name` on the `color` table. All the data in the column will be lost.
  - You are about to drop the column `vendorId` on the `purchase_order` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `size` table. All the data in the column will be lost.
  - Added the required column `color` to the `color` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendor_id` to the `purchase_order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `size` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `purchase_order` DROP FOREIGN KEY `purchase_order_vendorId_fkey`;

-- AlterTable
ALTER TABLE `color` DROP COLUMN `name`,
    ADD COLUMN `color` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `purchase_order` DROP COLUMN `vendorId`,
    ADD COLUMN `vendor_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `size` DROP COLUMN `name`,
    ADD COLUMN `size` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `purchase_order` ADD CONSTRAINT `purchase_order_vendor_id_fkey` FOREIGN KEY (`vendor_id`) REFERENCES `vendor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
