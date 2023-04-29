/*
  Warnings:

  - Added the required column `alamat` to the `Visitor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no` to the `Visitor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Visitor" ADD COLUMN     "alamat" TEXT NOT NULL,
ADD COLUMN     "no" TEXT NOT NULL;
