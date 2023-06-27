/*
  Warnings:

  - You are about to drop the column `name` on the `expense` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `expense` table. All the data in the column will be lost.
  - Added the required column `amount` to the `expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `expense` DROP COLUMN `name`,
    DROP COLUMN `price`,
    ADD COLUMN `amount` INTEGER NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;
