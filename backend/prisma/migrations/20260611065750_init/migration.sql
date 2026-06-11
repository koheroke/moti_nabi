/*
  Warnings:

  - Made the column `thumbnailUrl` on table `works` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bio` on table `works` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "works" ALTER COLUMN "thumbnailUrl" SET NOT NULL,
ALTER COLUMN "bio" SET NOT NULL;
