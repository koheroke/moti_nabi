/*
  Warnings:

  - Added the required column `iconUrl` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `twoFactorSecret` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public` to the `works` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "iconUrl" TEXT NOT NULL,
ADD COLUMN     "twoFactorSecret" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "works" ADD COLUMN     "public" BOOLEAN NOT NULL;
