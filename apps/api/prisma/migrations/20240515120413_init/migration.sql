/*
  Warnings:

  - You are about to drop the column `teacherProfileId` on the `Course` table. All the data in the column will be lost.
  - Added the required column `teacherId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_teacherProfileId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "teacherProfileId",
ADD COLUMN     "teacherId" TEXT NOT NULL;
