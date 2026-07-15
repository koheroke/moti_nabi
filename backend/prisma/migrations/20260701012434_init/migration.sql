/*
  Warnings:

  - You are about to drop the column `copies` on the `works` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "works" DROP COLUMN "copies";

-- CreateTable
CREATE TABLE "work_likes" (
    "userId" TEXT NOT NULL,
    "workId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_likes_pkey" PRIMARY KEY ("userId","workId")
);

-- AddForeignKey
ALTER TABLE "work_likes" ADD CONSTRAINT "work_likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_likes" ADD CONSTRAINT "work_likes_workId_fkey" FOREIGN KEY ("workId") REFERENCES "works"("id") ON DELETE CASCADE ON UPDATE CASCADE;
