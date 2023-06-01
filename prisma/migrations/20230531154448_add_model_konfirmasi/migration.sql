-- CreateTable
CREATE TABLE "konfirmasi" (
    "id" SERIAL NOT NULL,
    "nama_pembeli" TEXT NOT NULL,
    "alamat_pembeli" TEXT NOT NULL,
    "keterangan" TEXT NOT NULL,
    "id_pegawai" INTEGER NOT NULL,

    CONSTRAINT "konfirmasi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "konfirmasi" ADD CONSTRAINT "konfirmasi_id_pegawai_fkey" FOREIGN KEY ("id_pegawai") REFERENCES "pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
