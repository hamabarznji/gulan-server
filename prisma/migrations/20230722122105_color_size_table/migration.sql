-- AlterTable
ALTER TABLE `item` ADD COLUMN `code` VARCHAR(191) NULL,
    ADD COLUMN `color_id` VARCHAR(191) NULL,
    ADD COLUMN `sizeId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `size` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `color` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `item` ADD CONSTRAINT `item_color_id_fkey` FOREIGN KEY (`color_id`) REFERENCES `color`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `item` ADD CONSTRAINT `item_sizeId_fkey` FOREIGN KEY (`sizeId`) REFERENCES `size`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
