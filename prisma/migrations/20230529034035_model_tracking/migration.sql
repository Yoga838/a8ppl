-- CreateTable
CREATE TABLE "tracking" (
    "id" SERIAL NOT NULL,
    "nama_pembeli" TEXT,
    "alamat_pembeli" TEXT,
    "kondisi_barang" TEXT NOT NULL,
    "id_pembeli" INTEGER,
    "id_mitra" INTEGER NOT NULL,
    "id_pegawai" INTEGER,

    CONSTRAINT "tracking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tracking" ADD CONSTRAINT "tracking_id_pembeli_fkey" FOREIGN KEY ("id_pembeli") REFERENCES "Visitor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tracking" ADD CONSTRAINT "tracking_id_pegawai_fkey" FOREIGN KEY ("id_pegawai") REFERENCES "pegawai"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tracking" ADD CONSTRAINT "tracking_id_mitra_fkey" FOREIGN KEY ("id_mitra") REFERENCES "Mitra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
