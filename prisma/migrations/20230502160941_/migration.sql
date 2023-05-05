-- CreateTable
CREATE TABLE "pencatatan" (
    "id" SERIAL NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "keterangan" TEXT NOT NULL,
    "pemasukan" INTEGER NOT NULL,
    "pengeluaran" INTEGER NOT NULL,
    "saldo" INTEGER NOT NULL,
    "milik" INTEGER NOT NULL,

    CONSTRAINT "pencatatan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pencatatan" ADD CONSTRAINT "pencatatan_milik_fkey" FOREIGN KEY ("milik") REFERENCES "Mitra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
