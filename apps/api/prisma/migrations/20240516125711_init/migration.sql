/*
  Warnings:

  - Made the column `title` on table `Lesson` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "category" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "title" SET DEFAULT '',
ALTER COLUMN "description" SET DEFAULT '';
