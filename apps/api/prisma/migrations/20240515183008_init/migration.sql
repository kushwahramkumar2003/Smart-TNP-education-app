/*
  Warnings:

  - You are about to drop the column `courseResourcesId` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the `CourseResources` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `courseId` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CourseResources" DROP CONSTRAINT "CourseResources_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_courseResourcesId_fkey";

-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "courseResourcesId",
ADD COLUMN     "courseId" TEXT NOT NULL,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- DropTable
DROP TABLE "CourseResources";

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
