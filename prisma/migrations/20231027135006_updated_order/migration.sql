/*
  Warnings:

  - You are about to drop the column `date` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `date`,
    DROP COLUMN `description`,
    DROP COLUMN `status`,
    DROP COLUMN `updated`;
