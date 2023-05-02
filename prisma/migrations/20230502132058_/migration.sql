/*
  Warnings:

  - Added the required column `rejected_oleh` to the `Rejected` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rejected" ADD COLUMN     "rejected_oleh" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Rejected" ADD CONSTRAINT "Rejected_rejected_oleh_fkey" FOREIGN KEY ("rejected_oleh") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
