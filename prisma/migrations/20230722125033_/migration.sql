/*
  Warnings:

  - You are about to drop the column `sizeId` on the `item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `item_sizeId_fkey`;

-- AlterTable
ALTER TABLE `item` DROP COLUMN `sizeId`,
    ADD COLUMN `size_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `item` ADD CONSTRAINT `item_size_id_fkey` FOREIGN KEY (`size_id`) REFERENCES `size`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
