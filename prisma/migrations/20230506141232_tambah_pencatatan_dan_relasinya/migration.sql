/*
  Warnings:

  - You are about to drop the column `keterangan` on the `pencatatan` table. All the data in the column will be lost.
  - You are about to drop the column `pemasukan` on the `pencatatan` table. All the data in the column will be lost.
  - You are about to drop the column `pengeluaran` on the `pencatatan` table. All the data in the column will be lost.
  - You are about to drop the column `saldo` on the `pencatatan` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal` on the `pencatatan` table. All the data in the column will be lost.
  - Added the required column `nama_pencatatan` to the `pencatatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pencatatan" DROP COLUMN "keterangan",
DROP COLUMN "pemasukan",
DROP COLUMN "pengeluaran",
DROP COLUMN "saldo",
DROP COLUMN "tanggal",
ADD COLUMN     "nama_pencatatan" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "detail_pencatatan" (
    "id" SERIAL NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "keterangan" TEXT NOT NULL,
    "pemasukan" INTEGER NOT NULL,
    "pengeluaran" INTEGER NOT NULL,
    "saldo" INTEGER NOT NULL,
    "detail_dari" INTEGER NOT NULL,

    CONSTRAINT "detail_pencatatan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "detail_pencatatan" ADD CONSTRAINT "detail_pencatatan_detail_dari_fkey" FOREIGN KEY ("detail_dari") REFERENCES "pencatatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
