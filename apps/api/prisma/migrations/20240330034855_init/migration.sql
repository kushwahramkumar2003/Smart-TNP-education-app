/*
  Warnings:

  - You are about to drop the column `comeToMeId` on the `TeacherProfile` table. All the data in the column will be lost.
  - You are about to drop the column `needHelpId` on the `TeacherProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TeacherProfile" DROP COLUMN "comeToMeId",
DROP COLUMN "needHelpId";
