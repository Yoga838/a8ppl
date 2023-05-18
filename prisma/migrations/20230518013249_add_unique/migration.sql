/*
  Warnings:

  - A unique constraint covering the columns `[id_mitra]` on the table `bukti_bayar` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "bukti_bayar_id_mitra_key" ON "bukti_bayar"("id_mitra");
