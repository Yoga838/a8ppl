/*
  Warnings:

  - Added the required column `workAt` to the `pegawai` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pegawai" ADD COLUMN     "workAt" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "pegawai" ADD CONSTRAINT "pegawai_workAt_fkey" FOREIGN KEY ("workAt") REFERENCES "Mitra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
