/*
  Warnings:

  - You are about to drop the column `bookmarkWorkIds` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `followUserIds` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `iconUrl` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHash` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `twoFactorSecret` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "bookmarkWorkIds",
DROP COLUMN "followUserIds",
DROP COLUMN "iconUrl",
DROP COLUMN "name",
DROP COLUMN "passwordHash",
DROP COLUMN "twoFactorSecret";

-- AlterTable
ALTER TABLE "works" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "snsAcounts" TEXT[];

-- CreateTable
CREATE TABLE "user_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "iconUrl" TEXT,
    "name" TEXT NOT NULL,
    "followUserIds" TEXT[],
    "bookmarkWorkIds" TEXT[],
    "bio" TEXT NOT NULL,

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_auths" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "twoFactorSecret" TEXT,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "user_auths_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_userId_key" ON "user_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_auths_userId_key" ON "user_auths"("userId");

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_auths" ADD CONSTRAINT "user_auths_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
