/*
  Warnings:

  - You are about to drop the column `description` on the `SiteSettings` table. All the data in the column will be lost.
  - You are about to drop the column `tagline` on the `SiteSettings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SiteSettings" DROP COLUMN "description",
DROP COLUMN "tagline";
