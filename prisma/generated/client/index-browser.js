
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.14.0
 * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
 */
Prisma.prismaVersion = {
  client: "4.14.0",
  engine: "d9a4c5988f480fa576d43970d5a23641aa77bc9c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  deskripsi: 'deskripsi',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AprovalScalarFieldEnum = {
  id: 'id',
  accid: 'accid',
  diacc_oleh: 'diacc_oleh'
};

exports.Prisma.Bukti_bayarScalarFieldEnum = {
  id: 'id',
  bukti_bayar: 'bukti_bayar',
  status: 'status',
  expire: 'expire',
  id_mitra: 'id_mitra'
};

exports.Prisma.Detail_pencatatanScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  keterangan: 'keterangan',
  pemasukan: 'pemasukan',
  pengeluaran: 'pengeluaran',
  saldo: 'saldo',
  detail_dari: 'detail_dari'
};

exports.Prisma.KonfirmasiScalarFieldEnum = {
  id: 'id',
  nama_pembeli: 'nama_pembeli',
  alamat_pembeli: 'alamat_pembeli',
  keterangan: 'keterangan',
  id_pegawai: 'id_pegawai'
};

exports.Prisma.MitraScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  no: 'no',
  alamat: 'alamat',
  usaha: 'usaha',
  pribadi: 'pribadi',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PegawaiScalarFieldEnum = {
  id: 'id',
  workAt: 'workAt',
  name: 'name',
  email: 'email',
  password: 'password',
  no: 'no',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PencatatanScalarFieldEnum = {
  id: 'id',
  nama_pencatatan: 'nama_pencatatan',
  milik: 'milik'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.RejectedScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  createdAt: 'createdAt',
  rejected_oleh: 'rejected_oleh'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TrackingScalarFieldEnum = {
  id: 'id',
  nama_pembeli: 'nama_pembeli',
  alamat_pembeli: 'alamat_pembeli',
  kondisi_barang: 'kondisi_barang',
  id_pembeli: 'id_pembeli',
  id_mitra: 'id_mitra',
  id_pegawai: 'id_pegawai'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.VisitorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  alamat: 'alamat',
  no: 'no',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};


exports.Prisma.ModelName = {
  Visitor: 'Visitor',
  tracking: 'tracking',
  Mitra: 'Mitra',
  bukti_bayar: 'bukti_bayar',
  konfirmasi: 'konfirmasi',
  pegawai: 'pegawai',
  aproval: 'aproval',
  Rejected: 'Rejected',
  Admin: 'Admin',
  detail_pencatatan: 'detail_pencatatan',
  pencatatan: 'pencatatan'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
