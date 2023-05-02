/*
  Warnings:

  - Added the required column `diacc_oleh` to the `aproval` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "aproval" ADD COLUMN     "diacc_oleh" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "aproval" ADD CONSTRAINT "aproval_diacc_oleh_fkey" FOREIGN KEY ("diacc_oleh") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
