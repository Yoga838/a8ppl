/*
  Warnings:

  - A unique constraint covering the columns `[nama_pencatatan]` on the table `pencatatan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pencatatan_nama_pencatatan_key" ON "pencatatan"("nama_pencatatan");
