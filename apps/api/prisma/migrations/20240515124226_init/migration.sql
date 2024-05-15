/*
  Warnings:

  - You are about to drop the column `resourceUrl` on the `Resource` table. All the data in the column will be lost.
  - Added the required column `size` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "resourceUrl",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "duration" INTEGER,
ADD COLUMN     "pageCount" INTEGER,
ADD COLUMN     "size" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
