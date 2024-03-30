/*
  Warnings:

  - The `interests` column on the `TeacherProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `skills` column on the `TeacherProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `comeToMeId` column on the `TeacherProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "TeacherProfile" ADD COLUMN     "needHelpId" TEXT[],
DROP COLUMN "interests",
ADD COLUMN     "interests" TEXT[],
DROP COLUMN "skills",
ADD COLUMN     "skills" TEXT[],
DROP COLUMN "comeToMeId",
ADD COLUMN     "comeToMeId" TEXT[];
