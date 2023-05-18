-- CreateTable
CREATE TABLE "bukti_bayar" (
    "id" SERIAL NOT NULL,
    "bukti_bayar" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "id_mitra" INTEGER NOT NULL,

    CONSTRAINT "bukti_bayar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bukti_bayar" ADD CONSTRAINT "bukti_bayar_id_mitra_fkey" FOREIGN KEY ("id_mitra") REFERENCES "Mitra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
