/*
  Warnings:

  - You are about to drop the `Reject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Reject";

-- CreateTable
CREATE TABLE "Rejected" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rejected_pkey" PRIMARY KEY ("id")
);
