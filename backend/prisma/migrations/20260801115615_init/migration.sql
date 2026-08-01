-- AlterTable
ALTER TABLE "users" ADD COLUMN     "tutorialProgress" JSONB NOT NULL DEFAULT '{}';

-- AlterTable
ALTER TABLE "works" ADD COLUMN     "lastAccessAt" TIMESTAMP(3);
