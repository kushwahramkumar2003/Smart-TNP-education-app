/*
  Warnings:

  - The values [SUPER_ADMIN] on the enum `User_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('ADMIN', 'STUDENT', 'TEACHER') NOT NULL DEFAULT 'STUDENT';
