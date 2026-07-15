/*
  Warnings:

  - You are about to drop the column `tagline` on the `SiteSettings` table. All the data in the column will be lost.
  - Added the required column `tagline` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Banner" ADD COLUMN     "tagline" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SiteSettings" DROP COLUMN "tagline";
