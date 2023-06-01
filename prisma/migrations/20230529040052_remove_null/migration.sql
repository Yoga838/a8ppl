/*
  Warnings:

  - Made the column `alamat_pembeli` on table `tracking` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "tracking" ALTER COLUMN "alamat_pembeli" SET NOT NULL;
