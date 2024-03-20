/*
  Warnings:

  - You are about to drop the column `value` on the `TeacherRegestrationToken` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[token]` on the table `TeacherRegestrationToken` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token` to the `TeacherRegestrationToken` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `TeacherRegestrationToken_value_key` ON `TeacherRegestrationToken`;

-- AlterTable
ALTER TABLE `TeacherRegestrationToken` DROP COLUMN `value`,
    ADD COLUMN `token` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `TeacherRegestrationToken_token_key` ON `TeacherRegestrationToken`(`token`);
