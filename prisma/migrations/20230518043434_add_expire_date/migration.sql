/*
  Warnings:

  - Added the required column `expire` to the `bukti_bayar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bukti_bayar" ADD COLUMN     "expire" TIMESTAMP(3) NOT NULL;
