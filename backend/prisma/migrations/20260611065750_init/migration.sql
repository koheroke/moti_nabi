/*
  Warnings:

  - Made the column `thumbnailJson` on table `works` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bio` on table `works` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "works" ALTER COLUMN "thumbnailJson" SET NOT NULL,
ALTER COLUMN "bio" SET NOT NULL;
