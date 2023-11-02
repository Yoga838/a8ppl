
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Visitor
 * 
 */
export type Visitor = {
  id: number
  name: string
  email: string
  password: string
  alamat: string
  no: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model tracking
 * 
 */
export type tracking = {
  id: number
  nama_pembeli: string | null
  alamat_pembeli: string
  kondisi_barang: string
  id_pembeli: number | null
  id_mitra: number
  id_pegawai: number | null
}

/**
 * Model Mitra
 * 
 */
export type Mitra = {
  id: number
  name: string
  email: string
  password: string
  no: string
  alamat: string
  usaha: string
  pribadi: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model bukti_bayar
 * 
 */
export type bukti_bayar = {
  id: number
  bukti_bayar: string
  status: number
  expire: Date | null
  id_mitra: number
}

/**
 * Model konfirmasi
 * 
 */
export type konfirmasi = {
  id: number
  nama_pembeli: string
  alamat_pembeli: string
  keterangan: string
  id_pegawai: number
}

/**
 * Model pegawai
 * 
 */
export type pegawai = {
  id: number
  workAt: number
  name: string
  email: string
  password: string
  no: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model aproval
 * 
 */
export type aproval = {
  id: number
  accid: number
  diacc_oleh: number
}

/**
 * Model Rejected
 * 
 */
export type Rejected = {
  id: number
  name: string
  email: string
  password: string
  createdAt: Date
  rejected_oleh: number
}

/**
 * Model Admin
 * 
 */
export type Admin = {
  id: number
  name: string
  email: string
  password: string
  deskripsi: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model detail_pencatatan
 * 
 */
export type detail_pencatatan = {
  id: number
  tanggal: Date
  keterangan: string
  pemasukan: number
  pengeluaran: number
  saldo: number
  detail_dari: number
}

/**
 * Model pencatatan
 * 
 */
export type pencatatan = {
  id: number
  nama_pencatatan: string
  milik: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Visitors
 * const visitors = await prisma.visitor.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Visitors
   * const visitors = await prisma.visitor.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.visitor`: Exposes CRUD operations for the **Visitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitors
    * const visitors = await prisma.visitor.findMany()
    * ```
    */
  get visitor(): Prisma.VisitorDelegate<GlobalReject>;

  /**
   * `prisma.tracking`: Exposes CRUD operations for the **tracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trackings
    * const trackings = await prisma.tracking.findMany()
    * ```
    */
  get tracking(): Prisma.trackingDelegate<GlobalReject>;

  /**
   * `prisma.mitra`: Exposes CRUD operations for the **Mitra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mitras
    * const mitras = await prisma.mitra.findMany()
    * ```
    */
  get mitra(): Prisma.MitraDelegate<GlobalReject>;

  /**
   * `prisma.bukti_bayar`: Exposes CRUD operations for the **bukti_bayar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bukti_bayars
    * const bukti_bayars = await prisma.bukti_bayar.findMany()
    * ```
    */
  get bukti_bayar(): Prisma.bukti_bayarDelegate<GlobalReject>;

  /**
   * `prisma.konfirmasi`: Exposes CRUD operations for the **konfirmasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Konfirmasis
    * const konfirmasis = await prisma.konfirmasi.findMany()
    * ```
    */
  get konfirmasi(): Prisma.konfirmasiDelegate<GlobalReject>;

  /**
   * `prisma.pegawai`: Exposes CRUD operations for the **pegawai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pegawais
    * const pegawais = await prisma.pegawai.findMany()
    * ```
    */
  get pegawai(): Prisma.pegawaiDelegate<GlobalReject>;

  /**
   * `prisma.aproval`: Exposes CRUD operations for the **aproval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aprovals
    * const aprovals = await prisma.aproval.findMany()
    * ```
    */
  get aproval(): Prisma.aprovalDelegate<GlobalReject>;

  /**
   * `prisma.rejected`: Exposes CRUD operations for the **Rejected** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rejecteds
    * const rejecteds = await prisma.rejected.findMany()
    * ```
    */
  get rejected(): Prisma.RejectedDelegate<GlobalReject>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<GlobalReject>;

  /**
   * `prisma.detail_pencatatan`: Exposes CRUD operations for the **detail_pencatatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detail_pencatatans
    * const detail_pencatatans = await prisma.detail_pencatatan.findMany()
    * ```
    */
  get detail_pencatatan(): Prisma.detail_pencatatanDelegate<GlobalReject>;

  /**
   * `prisma.pencatatan`: Exposes CRUD operations for the **pencatatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pencatatans
    * const pencatatans = await prisma.pencatatan.findMany()
    * ```
    */
  get pencatatan(): Prisma.pencatatanDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.14.0
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VisitorCountOutputType
   */


  export type VisitorCountOutputType = {
    tracking: number
  }

  export type VisitorCountOutputTypeSelect = {
    tracking?: boolean
  }

  export type VisitorCountOutputTypeGetPayload<S extends boolean | null | undefined | VisitorCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VisitorCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VisitorCountOutputTypeArgs)
    ? VisitorCountOutputType 
    : S extends { select: any } & (VisitorCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VisitorCountOutputType ? VisitorCountOutputType[P] : never
  } 
      : VisitorCountOutputType




  // Custom InputTypes

  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VisitorCountOutputType
     */
    select?: VisitorCountOutputTypeSelect | null
  }



  /**
   * Count Type MitraCountOutputType
   */


  export type MitraCountOutputType = {
    aproval: number
    pegawai: number
    pencatatan: number
    bukti_bayar: number
    tracking: number
  }

  export type MitraCountOutputTypeSelect = {
    aproval?: boolean
    pegawai?: boolean
    pencatatan?: boolean
    bukti_bayar?: boolean
    tracking?: boolean
  }

  export type MitraCountOutputTypeGetPayload<S extends boolean | null | undefined | MitraCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MitraCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (MitraCountOutputTypeArgs)
    ? MitraCountOutputType 
    : S extends { select: any } & (MitraCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MitraCountOutputType ? MitraCountOutputType[P] : never
  } 
      : MitraCountOutputType




  // Custom InputTypes

  /**
   * MitraCountOutputType without action
   */
  export type MitraCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MitraCountOutputType
     */
    select?: MitraCountOutputTypeSelect | null
  }



  /**
   * Count Type PegawaiCountOutputType
   */


  export type PegawaiCountOutputType = {
    tracking: number
    konfirmasi: number
  }

  export type PegawaiCountOutputTypeSelect = {
    tracking?: boolean
    konfirmasi?: boolean
  }

  export type PegawaiCountOutputTypeGetPayload<S extends boolean | null | undefined | PegawaiCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PegawaiCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PegawaiCountOutputTypeArgs)
    ? PegawaiCountOutputType 
    : S extends { select: any } & (PegawaiCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PegawaiCountOutputType ? PegawaiCountOutputType[P] : never
  } 
      : PegawaiCountOutputType




  // Custom InputTypes

  /**
   * PegawaiCountOutputType without action
   */
  export type PegawaiCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PegawaiCountOutputType
     */
    select?: PegawaiCountOutputTypeSelect | null
  }



  /**
   * Count Type AdminCountOutputType
   */


  export type AdminCountOutputType = {
    approval: number
    rejected: number
  }

  export type AdminCountOutputTypeSelect = {
    approval?: boolean
    rejected?: boolean
  }

  export type AdminCountOutputTypeGetPayload<S extends boolean | null | undefined | AdminCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AdminCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AdminCountOutputTypeArgs)
    ? AdminCountOutputType 
    : S extends { select: any } & (AdminCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AdminCountOutputType ? AdminCountOutputType[P] : never
  } 
      : AdminCountOutputType




  // Custom InputTypes

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect | null
  }



  /**
   * Count Type PencatatanCountOutputType
   */


  export type PencatatanCountOutputType = {
    detail_pencatatan: number
  }

  export type PencatatanCountOutputTypeSelect = {
    detail_pencatatan?: boolean
  }

  export type PencatatanCountOutputTypeGetPayload<S extends boolean | null | undefined | PencatatanCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PencatatanCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PencatatanCountOutputTypeArgs)
    ? PencatatanCountOutputType 
    : S extends { select: any } & (PencatatanCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PencatatanCountOutputType ? PencatatanCountOutputType[P] : never
  } 
      : PencatatanCountOutputType




  // Custom InputTypes

  /**
   * PencatatanCountOutputType without action
   */
  export type PencatatanCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PencatatanCountOutputType
     */
    select?: PencatatanCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Visitor
   */


  export type AggregateVisitor = {
    _count: VisitorCountAggregateOutputType | null
    _avg: VisitorAvgAggregateOutputType | null
    _sum: VisitorSumAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  export type VisitorAvgAggregateOutputType = {
    id: number | null
  }

  export type VisitorSumAggregateOutputType = {
    id: number | null
  }

  export type VisitorMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    alamat: string | null
    no: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    alamat: string | null
    no: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    alamat: number
    no: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisitorAvgAggregateInputType = {
    id?: true
  }

  export type VisitorSumAggregateInputType = {
    id?: true
  }

  export type VisitorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    alamat?: true
    no?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    alamat?: true
    no?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    alamat?: true
    no?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisitorAggregateArgs = {
    /**
     * Filter which Visitor to aggregate.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: Enumerable<VisitorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitors
    **/
    _count?: true | VisitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorMaxAggregateInputType
  }

  export type GetVisitorAggregateType<T extends VisitorAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitor[P]>
      : GetScalarType<T[P], AggregateVisitor[P]>
  }




  export type VisitorGroupByArgs = {
    where?: VisitorWhereInput
    orderBy?: Enumerable<VisitorOrderByWithAggregationInput>
    by: VisitorScalarFieldEnum[]
    having?: VisitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorCountAggregateInputType | true
    _avg?: VisitorAvgAggregateInputType
    _sum?: VisitorSumAggregateInputType
    _min?: VisitorMinAggregateInputType
    _max?: VisitorMaxAggregateInputType
  }


  export type VisitorGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    alamat: string
    no: string
    createdAt: Date
    updatedAt: Date
    _count: VisitorCountAggregateOutputType | null
    _avg: VisitorAvgAggregateOutputType | null
    _sum: VisitorSumAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  type GetVisitorGroupByPayload<T extends VisitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VisitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorGroupByOutputType[P]>
        }
      >
    >


  export type VisitorSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    alamat?: boolean
    no?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tracking?: boolean | Visitor$trackingArgs
    _count?: boolean | VisitorCountOutputTypeArgs
  }


  export type VisitorInclude = {
    tracking?: boolean | Visitor$trackingArgs
    _count?: boolean | VisitorCountOutputTypeArgs
  }

  export type VisitorGetPayload<S extends boolean | null | undefined | VisitorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Visitor :
    S extends undefined ? never :
    S extends { include: any } & (VisitorArgs | VisitorFindManyArgs)
    ? Visitor  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'tracking' ? Array < trackingGetPayload<S['include'][P]>>  :
        P extends '_count' ? VisitorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VisitorArgs | VisitorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'tracking' ? Array < trackingGetPayload<S['select'][P]>>  :
        P extends '_count' ? VisitorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Visitor ? Visitor[P] : never
  } 
      : Visitor


  type VisitorCountArgs = 
    Omit<VisitorFindManyArgs, 'select' | 'include'> & {
      select?: VisitorCountAggregateInputType | true
    }

  export interface VisitorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Visitor that matches the filter.
     * @param {VisitorFindUniqueArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VisitorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VisitorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Visitor'> extends True ? Prisma__VisitorClient<VisitorGetPayload<T>> : Prisma__VisitorClient<VisitorGetPayload<T> | null, null>

    /**
     * Find one Visitor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VisitorFindUniqueOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VisitorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VisitorFindUniqueOrThrowArgs>
    ): Prisma__VisitorClient<VisitorGetPayload<T>>

    /**
     * Find the first Visitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VisitorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VisitorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Visitor'> extends True ? Prisma__VisitorClient<VisitorGetPayload<T>> : Prisma__VisitorClient<VisitorGetPayload<T> | null, null>

    /**
     * Find the first Visitor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VisitorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VisitorFindFirstOrThrowArgs>
    ): Prisma__VisitorClient<VisitorGetPayload<T>>

    /**
     * Find zero or more Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitors
     * const visitors = await prisma.visitor.findMany()
     * 
     * // Get first 10 Visitors
     * const visitors = await prisma.visitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorWithIdOnly = await prisma.visitor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VisitorFindManyArgs>(
      args?: SelectSubset<T, VisitorFindManyArgs>
    ): Prisma.PrismaPromise<Array<VisitorGetPayload<T>>>

    /**
     * Create a Visitor.
     * @param {VisitorCreateArgs} args - Arguments to create a Visitor.
     * @example
     * // Create one Visitor
     * const Visitor = await prisma.visitor.create({
     *   data: {
     *     // ... data to create a Visitor
     *   }
     * })
     * 
    **/
    create<T extends VisitorCreateArgs>(
      args: SelectSubset<T, VisitorCreateArgs>
    ): Prisma__VisitorClient<VisitorGetPayload<T>>

    /**
     * Create many Visitors.
     *     @param {VisitorCreateManyArgs} args - Arguments to create many Visitors.
     *     @example
     *     // Create many Visitors
     *     const visitor = await prisma.visitor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VisitorCreateManyArgs>(
      args?: SelectSubset<T, VisitorCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Visitor.
     * @param {VisitorDeleteArgs} args - Arguments to delete one Visitor.
     * @example
     * // Delete one Visitor
     * const Visitor = await prisma.visitor.delete({
     *   where: {
     *     // ... filter to delete one Visitor
     *   }
     * })
     * 
    **/
    delete<T extends VisitorDeleteArgs>(
      args: SelectSubset<T, VisitorDeleteArgs>
    ): Prisma__VisitorClient<VisitorGetPayload<T>>

    /**
     * Update one Visitor.
     * @param {VisitorUpdateArgs} args - Arguments to update one Visitor.
     * @example
     * // Update one Visitor
     * const visitor = await prisma.visitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VisitorUpdateArgs>(
      args: SelectSubset<T, VisitorUpdateArgs>
    ): Prisma__VisitorClient<VisitorGetPayload<T>>

    /**
     * Delete zero or more Visitors.
     * @param {VisitorDeleteManyArgs} args - Arguments to filter Visitors to delete.
     * @example
     * // Delete a few Visitors
     * const { count } = await prisma.visitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VisitorDeleteManyArgs>(
      args?: SelectSubset<T, VisitorDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VisitorUpdateManyArgs>(
      args: SelectSubset<T, VisitorUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Visitor.
     * @param {VisitorUpsertArgs} args - Arguments to update or create a Visitor.
     * @example
     * // Update or create a Visitor
     * const visitor = await prisma.visitor.upsert({
     *   create: {
     *     // ... data to create a Visitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitor we want to update
     *   }
     * })
    **/
    upsert<T extends VisitorUpsertArgs>(
      args: SelectSubset<T, VisitorUpsertArgs>
    ): Prisma__VisitorClient<VisitorGetPayload<T>>

    /**
     * Count the number of Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorCountArgs} args - Arguments to filter Visitors to count.
     * @example
     * // Count the number of Visitors
     * const count = await prisma.visitor.count({
     *   where: {
     *     // ... the filter for the Visitors we want to count
     *   }
     * })
    **/
    count<T extends VisitorCountArgs>(
      args?: Subset<T, VisitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitorAggregateArgs>(args: Subset<T, VisitorAggregateArgs>): Prisma.PrismaPromise<GetVisitorAggregateType<T>>

    /**
     * Group by Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorGroupByArgs['orderBy'] }
        : { orderBy?: VisitorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Visitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VisitorClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    tracking<T extends Visitor$trackingArgs= {}>(args?: Subset<T, Visitor$trackingArgs>): Prisma.PrismaPromise<Array<trackingGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Visitor base type for findUnique actions
   */
  export type VisitorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findUnique
   */
  export interface VisitorFindUniqueArgs extends VisitorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Visitor findUniqueOrThrow
   */
  export type VisitorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }


  /**
   * Visitor base type for findFirst actions
   */
  export type VisitorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: Enumerable<VisitorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: Enumerable<VisitorScalarFieldEnum>
  }

  /**
   * Visitor findFirst
   */
  export interface VisitorFindFirstArgs extends VisitorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Visitor findFirstOrThrow
   */
  export type VisitorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: Enumerable<VisitorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: Enumerable<VisitorScalarFieldEnum>
  }


  /**
   * Visitor findMany
   */
  export type VisitorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude | null
    /**
     * Filter, which Visitors to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: Enumerable<VisitorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    distinct?: Enumerable<VisitorScalarFieldEnum>
  }


  /**
   * Visitor create
   */
  export type VisitorCreateArgs = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude | null
    /**
     * The data needed to create a Visitor.
     */
    data: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
  }


  /**
   * Visitor createMany
   */
  export type VisitorCreateManyArgs = {
    /**
     * The data used to create many Visitors.
     */
    data: Enumerable<VisitorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Visitor update
   */
  export type VisitorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude | null
    /**
     * The data needed to update a Visitor.
     */
    data: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
    /**
     * Choose, which Visitor to update.
     */
    where: VisitorWhereUniqueInput
  }


  /**
   * Visitor updateMany
   */
  export type VisitorUpdateManyArgs = {
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
  }


  /**
   * Visitor upsert
   */
  export type VisitorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude | null
    /**
     * The filter to search for the Visitor to update in case it exists.
     */
    where: VisitorWhereUniqueInput
    /**
     * In case the Visitor found by the `where` argument doesn't exist, create a new Visitor with this data.
     */
    create: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
    /**
     * In case the Visitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
  }


  /**
   * Visitor delete
   */
  export type VisitorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude | null
    /**
     * Filter which Visitor to delete.
     */
    where: VisitorWhereUniqueInput
  }


  /**
   * Visitor deleteMany
   */
  export type VisitorDeleteManyArgs = {
    /**
     * Filter which Visitors to delete
     */
    where?: VisitorWhereInput
  }


  /**
   * Visitor.tracking
   */
  export type Visitor$trackingArgs = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trackingInclude | null
    where?: trackingWhereInput
    orderBy?: Enumerable<trackingOrderByWithRelationInput>
    cursor?: trackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TrackingScalarFieldEnum>
  }


  /**
   * Visitor without action
   */
  export type VisitorArgs = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitorInclude | null
  }



  /**
   * Model tracking
   */


  export type AggregateTracking = {
    _count: TrackingCountAggregateOutputType | null
    _avg: TrackingAvgAggregateOutputType | null
    _sum: TrackingSumAggregateOutputType | null
    _min: TrackingMinAggregateOutputType | null
    _max: TrackingMaxAggregateOutputType | null
  }

  export type TrackingAvgAggregateOutputType = {
    id: number | null
    id_pembeli: number | null
    id_mitra: number | null
    id_pegawai: number | null
  }

  export type TrackingSumAggregateOutputType = {
    id: number | null
    id_pembeli: number | null
    id_mitra: number | null
    id_pegawai: number | null
  }

  export type TrackingMinAggregateOutputType = {
    id: number | null
    nama_pembeli: string | null
    alamat_pembeli: string | null
    kondisi_barang: string | null
    id_pembeli: number | null
    id_mitra: number | null
    id_pegawai: number | null
  }

  export type TrackingMaxAggregateOutputType = {
    id: number | null
    nama_pembeli: string | null
    alamat_pembeli: string | null
    kondisi_barang: string | null
    id_pembeli: number | null
    id_mitra: number | null
    id_pegawai: number | null
  }

  export type TrackingCountAggregateOutputType = {
    id: number
    nama_pembeli: number
    alamat_pembeli: number
    kondisi_barang: number
    id_pembeli: number
    id_mitra: number
    id_pegawai: number
    _all: number
  }


  export type TrackingAvgAggregateInputType = {
    id?: true
    id_pembeli?: true
    id_mitra?: true
    id_pegawai?: true
  }

  export type TrackingSumAggregateInputType = {
    id?: true
    id_pembeli?: true
    id_mitra?: true
    id_pegawai?: true
  }

  export type TrackingMinAggregateInputType = {
    id?: true
    nama_pembeli?: true
    alamat_pembeli?: true
    kondisi_barang?: true
    id_pembeli?: true
    id_mitra?: true
    id_pegawai?: true
  }

  export type TrackingMaxAggregateInputType = {
    id?: true
    nama_pembeli?: true
    alamat_pembeli?: true
    kondisi_barang?: true
    id_pembeli?: true
    id_mitra?: true
    id_pegawai?: true
  }

  export type TrackingCountAggregateInputType = {
    id?: true
    nama_pembeli?: true
    alamat_pembeli?: true
    kondisi_barang?: true
    id_pembeli?: true
    id_mitra?: true
    id_pegawai?: true
    _all?: true
  }

  export type TrackingAggregateArgs = {
    /**
     * Filter which tracking to aggregate.
     */
    where?: trackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trackings to fetch.
     */
    orderBy?: Enumerable<trackingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trackings
    **/
    _count?: true | TrackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackingMaxAggregateInputType
  }

  export type GetTrackingAggregateType<T extends TrackingAggregateArgs> = {
        [P in keyof T & keyof AggregateTracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTracking[P]>
      : GetScalarType<T[P], AggregateTracking[P]>
  }




  export type TrackingGroupByArgs = {
    where?: trackingWhereInput
    orderBy?: Enumerable<trackingOrderByWithAggregationInput>
    by: TrackingScalarFieldEnum[]
    having?: trackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackingCountAggregateInputType | true
    _avg?: TrackingAvgAggregateInputType
    _sum?: TrackingSumAggregateInputType
    _min?: TrackingMinAggregateInputType
    _max?: TrackingMaxAggregateInputType
  }


  export type TrackingGroupByOutputType = {
    id: number
    nama_pembeli: string | null
    alamat_pembeli: string
    kondisi_barang: string
    id_pembeli: number | null
    id_mitra: number
    id_pegawai: number | null
    _count: TrackingCountAggregateOutputType | null
    _avg: TrackingAvgAggregateOutputType | null
    _sum: TrackingSumAggregateOutputType | null
    _min: TrackingMinAggregateOutputType | null
    _max: TrackingMaxAggregateOutputType | null
  }

  type GetTrackingGroupByPayload<T extends TrackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TrackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackingGroupByOutputType[P]>
            : GetScalarType<T[P], TrackingGroupByOutputType[P]>
        }
      >
    >


  export type trackingSelect = {
    id?: boolean
    nama_pembeli?: boolean
    alamat_pembeli?: boolean
    kondisi_barang?: boolean
    id_pembeli?: boolean
    id_mitra?: boolean
    id_pegawai?: boolean
    visitor?: boolean | VisitorArgs
    pegawai?: boolean | pegawaiArgs
    mitra?: boolean | MitraArgs
  }


  export type trackingInclude = {
    visitor?: boolean | VisitorArgs
    pegawai?: boolean | pegawaiArgs
    mitra?: boolean | MitraArgs
  }

  export type trackingGetPayload<S extends boolean | null | undefined | trackingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? tracking :
    S extends undefined ? never :
    S extends { include: any } & (trackingArgs | trackingFindManyArgs)
    ? tracking  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'visitor' ? VisitorGetPayload<S['include'][P]> | null :
        P extends 'pegawai' ? pegawaiGetPayload<S['include'][P]> | null :
        P extends 'mitra' ? MitraGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (trackingArgs | trackingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'visitor' ? VisitorGetPayload<S['select'][P]> | null :
        P extends 'pegawai' ? pegawaiGetPayload<S['select'][P]> | null :
        P extends 'mitra' ? MitraGetPayload<S['select'][P]> :  P extends keyof tracking ? tracking[P] : never
  } 
      : tracking


  type trackingCountArgs = 
    Omit<trackingFindManyArgs, 'select' | 'include'> & {
      select?: TrackingCountAggregateInputType | true
    }

  export interface trackingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tracking that matches the filter.
     * @param {trackingFindUniqueArgs} args - Arguments to find a Tracking
     * @example
     * // Get one Tracking
     * const tracking = await prisma.tracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends trackingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, trackingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tracking'> extends True ? Prisma__trackingClient<trackingGetPayload<T>> : Prisma__trackingClient<trackingGetPayload<T> | null, null>

    /**
     * Find one Tracking that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {trackingFindUniqueOrThrowArgs} args - Arguments to find a Tracking
     * @example
     * // Get one Tracking
     * const tracking = await prisma.tracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends trackingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, trackingFindUniqueOrThrowArgs>
    ): Prisma__trackingClient<trackingGetPayload<T>>

    /**
     * Find the first Tracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trackingFindFirstArgs} args - Arguments to find a Tracking
     * @example
     * // Get one Tracking
     * const tracking = await prisma.tracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends trackingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, trackingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tracking'> extends True ? Prisma__trackingClient<trackingGetPayload<T>> : Prisma__trackingClient<trackingGetPayload<T> | null, null>

    /**
     * Find the first Tracking that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trackingFindFirstOrThrowArgs} args - Arguments to find a Tracking
     * @example
     * // Get one Tracking
     * const tracking = await prisma.tracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends trackingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, trackingFindFirstOrThrowArgs>
    ): Prisma__trackingClient<trackingGetPayload<T>>

    /**
     * Find zero or more Trackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trackingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trackings
     * const trackings = await prisma.tracking.findMany()
     * 
     * // Get first 10 Trackings
     * const trackings = await prisma.tracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackingWithIdOnly = await prisma.tracking.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends trackingFindManyArgs>(
      args?: SelectSubset<T, trackingFindManyArgs>
    ): Prisma.PrismaPromise<Array<trackingGetPayload<T>>>

    /**
     * Create a Tracking.
     * @param {trackingCreateArgs} args - Arguments to create a Tracking.
     * @example
     * // Create one Tracking
     * const Tracking = await prisma.tracking.create({
     *   data: {
     *     // ... data to create a Tracking
     *   }
     * })
     * 
    **/
    create<T extends trackingCreateArgs>(
      args: SelectSubset<T, trackingCreateArgs>
    ): Prisma__trackingClient<trackingGetPayload<T>>

    /**
     * Create many Trackings.
     *     @param {trackingCreateManyArgs} args - Arguments to create many Trackings.
     *     @example
     *     // Create many Trackings
     *     const tracking = await prisma.tracking.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends trackingCreateManyArgs>(
      args?: SelectSubset<T, trackingCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tracking.
     * @param {trackingDeleteArgs} args - Arguments to delete one Tracking.
     * @example
     * // Delete one Tracking
     * const Tracking = await prisma.tracking.delete({
     *   where: {
     *     // ... filter to delete one Tracking
     *   }
     * })
     * 
    **/
    delete<T extends trackingDeleteArgs>(
      args: SelectSubset<T, trackingDeleteArgs>
    ): Prisma__trackingClient<trackingGetPayload<T>>

    /**
     * Update one Tracking.
     * @param {trackingUpdateArgs} args - Arguments to update one Tracking.
     * @example
     * // Update one Tracking
     * const tracking = await prisma.tracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends trackingUpdateArgs>(
      args: SelectSubset<T, trackingUpdateArgs>
    ): Prisma__trackingClient<trackingGetPayload<T>>

    /**
     * Delete zero or more Trackings.
     * @param {trackingDeleteManyArgs} args - Arguments to filter Trackings to delete.
     * @example
     * // Delete a few Trackings
     * const { count } = await prisma.tracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends trackingDeleteManyArgs>(
      args?: SelectSubset<T, trackingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trackings
     * const tracking = await prisma.tracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends trackingUpdateManyArgs>(
      args: SelectSubset<T, trackingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tracking.
     * @param {trackingUpsertArgs} args - Arguments to update or create a Tracking.
     * @example
     * // Update or create a Tracking
     * const tracking = await prisma.tracking.upsert({
     *   create: {
     *     // ... data to create a Tracking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tracking we want to update
     *   }
     * })
    **/
    upsert<T extends trackingUpsertArgs>(
      args: SelectSubset<T, trackingUpsertArgs>
    ): Prisma__trackingClient<trackingGetPayload<T>>

    /**
     * Count the number of Trackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trackingCountArgs} args - Arguments to filter Trackings to count.
     * @example
     * // Count the number of Trackings
     * const count = await prisma.tracking.count({
     *   where: {
     *     // ... the filter for the Trackings we want to count
     *   }
     * })
    **/
    count<T extends trackingCountArgs>(
      args?: Subset<T, trackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackingAggregateArgs>(args: Subset<T, TrackingAggregateArgs>): Prisma.PrismaPromise<GetTrackingAggregateType<T>>

    /**
     * Group by Tracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackingGroupByArgs['orderBy'] }
        : { orderBy?: TrackingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__trackingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    visitor<T extends VisitorArgs= {}>(args?: Subset<T, VisitorArgs>): Prisma__VisitorClient<VisitorGetPayload<T> | Null>;

    pegawai<T extends pegawaiArgs= {}>(args?: Subset<T, pegawaiArgs>): Prisma__pegawaiClient<pegawaiGetPayload<T> | Null>;

    mitra<T extends MitraArgs= {}>(args?: Subset<T, MitraArgs>): Prisma__MitraClient<MitraGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tracking base type for findUnique actions
   */
  export type trackingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trackingInclude | null
    /**
     * Filter, which tracking to fetch.
     */
    where: trackingWhereUniqueInput
  }

  /**
   * tracking findUnique
   */
  export interface trackingFindUniqueArgs extends trackingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tracking findUniqueOrThrow
   */
  export type trackingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trackingInclude | null
    /**
     * Filter, which tracking to fetch.
     */
    where: trackingWhereUniqueInput
  }


  /**
   * tracking base type for findFirst actions
   */
  export type trackingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trackingInclude | null
    /**
     * Filter, which tracking to fetch.
     */
    where?: trackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trackings to fetch.
     */
    orderBy?: Enumerable<trackingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trackings.
     */
    cursor?: trackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trackings.
     */
    distinct?: Enumerable<TrackingScalarFieldEnum>
  }

  /**
   * tracking findFirst
   */
  export interface trackingFindFirstArgs extends trackingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tracking findFirstOrThrow
   */
  export type trackingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trackingInclude | null
    /**
     * Filter, which tracking to fetch.
     */
    where?: trackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trackings to fetch.
     */
    orderBy?: Enumerable<trackingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trackings.
     */
    cursor?: trackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trackings.
     */
    distinct?: Enumerable<TrackingScalarFieldEnum>
  }


  /**
   * tracking findMany
   */
  export type trackingFindManyArgs = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trackingInclude | null
    /**
     * Filter, which trackings to fetch.
     */
    where?: trackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trackings to fetch.
     */
    orderBy?: Enumerable<trackingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trackings.
     */
    cursor?: trackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trackings.
     */
    skip?: number
    distinct?: Enumerable<TrackingScalarFieldEnum>
  }


  /**
   * tracking create
   */
  export type trackingCreateArgs = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trackingInclude | null
    /**
     * The data needed to create a tracking.
     */
    data: XOR<trackingCreateInput, trackingUncheckedCreateInput>
  }


  /**
   * tracking createMany
   */
  export type trackingCreateManyArgs = {
    /**
     * The data used to create many trackings.
     */
    data: Enumerable<trackingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tracking update
   */
  export type trackingUpdateArgs = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trackingInclude | null
    /**
     * The data needed to update a tracking.
     */
    data: XOR<trackingUpdateInput, trackingUncheckedUpdateInput>
    /**
     * Choose, which tracking to update.
     */
    where: trackingWhereUniqueInput
  }


  /**
   * tracking updateMany
   */
  export type trackingUpdateManyArgs = {
    /**
     * The data used to update trackings.
     */
    data: XOR<trackingUpdateManyMutationInput, trackingUncheckedUpdateManyInput>
    /**
     * Filter which trackings to update
     */
    where?: trackingWhereInput
  }


  /**
   * tracking upsert
   */
  export type trackingUpsertArgs = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trackingInclude | null
    /**
     * The filter to search for the tracking to update in case it exists.
     */
    where: trackingWhereUniqueInput
    /**
     * In case the tracking found by the `where` argument doesn't exist, create a new tracking with this data.
     */
    create: XOR<trackingCreateInput, trackingUncheckedCreateInput>
    /**
     * In case the tracking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trackingUpdateInput, trackingUncheckedUpdateInput>
  }


  /**
   * tracking delete
   */
  export type trackingDeleteArgs = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trackingInclude | null
    /**
     * Filter which tracking to delete.
     */
    where: trackingWhereUniqueInput
  }


  /**
   * tracking deleteMany
   */
  export type trackingDeleteManyArgs = {
    /**
     * Filter which trackings to delete
     */
    where?: trackingWhereInput
  }


  /**
   * tracking without action
   */
  export type trackingArgs = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trackingInclude | null
  }



  /**
   * Model Mitra
   */


  export type AggregateMitra = {
    _count: MitraCountAggregateOutputType | null
    _avg: MitraAvgAggregateOutputType | null
    _sum: MitraSumAggregateOutputType | null
    _min: MitraMinAggregateOutputType | null
    _max: MitraMaxAggregateOutputType | null
  }

  export type MitraAvgAggregateOutputType = {
    id: number | null
  }

  export type MitraSumAggregateOutputType = {
    id: number | null
  }

  export type MitraMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    no: string | null
    alamat: string | null
    usaha: string | null
    pribadi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MitraMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    no: string | null
    alamat: string | null
    usaha: string | null
    pribadi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MitraCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    no: number
    alamat: number
    usaha: number
    pribadi: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MitraAvgAggregateInputType = {
    id?: true
  }

  export type MitraSumAggregateInputType = {
    id?: true
  }

  export type MitraMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    no?: true
    alamat?: true
    usaha?: true
    pribadi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MitraMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    no?: true
    alamat?: true
    usaha?: true
    pribadi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MitraCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    no?: true
    alamat?: true
    usaha?: true
    pribadi?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MitraAggregateArgs = {
    /**
     * Filter which Mitra to aggregate.
     */
    where?: MitraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mitras to fetch.
     */
    orderBy?: Enumerable<MitraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MitraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mitras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mitras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mitras
    **/
    _count?: true | MitraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MitraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MitraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MitraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MitraMaxAggregateInputType
  }

  export type GetMitraAggregateType<T extends MitraAggregateArgs> = {
        [P in keyof T & keyof AggregateMitra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMitra[P]>
      : GetScalarType<T[P], AggregateMitra[P]>
  }




  export type MitraGroupByArgs = {
    where?: MitraWhereInput
    orderBy?: Enumerable<MitraOrderByWithAggregationInput>
    by: MitraScalarFieldEnum[]
    having?: MitraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MitraCountAggregateInputType | true
    _avg?: MitraAvgAggregateInputType
    _sum?: MitraSumAggregateInputType
    _min?: MitraMinAggregateInputType
    _max?: MitraMaxAggregateInputType
  }


  export type MitraGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt: Date
    updatedAt: Date
    _count: MitraCountAggregateOutputType | null
    _avg: MitraAvgAggregateOutputType | null
    _sum: MitraSumAggregateOutputType | null
    _min: MitraMinAggregateOutputType | null
    _max: MitraMaxAggregateOutputType | null
  }

  type GetMitraGroupByPayload<T extends MitraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MitraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MitraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MitraGroupByOutputType[P]>
            : GetScalarType<T[P], MitraGroupByOutputType[P]>
        }
      >
    >


  export type MitraSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    no?: boolean
    alamat?: boolean
    usaha?: boolean
    pribadi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aproval?: boolean | Mitra$aprovalArgs
    pegawai?: boolean | Mitra$pegawaiArgs
    pencatatan?: boolean | Mitra$pencatatanArgs
    bukti_bayar?: boolean | Mitra$bukti_bayarArgs
    tracking?: boolean | Mitra$trackingArgs
    _count?: boolean | MitraCountOutputTypeArgs
  }


  export type MitraInclude = {
    aproval?: boolean | Mitra$aprovalArgs
    pegawai?: boolean | Mitra$pegawaiArgs
    pencatatan?: boolean | Mitra$pencatatanArgs
    bukti_bayar?: boolean | Mitra$bukti_bayarArgs
    tracking?: boolean | Mitra$trackingArgs
    _count?: boolean | MitraCountOutputTypeArgs
  }

  export type MitraGetPayload<S extends boolean | null | undefined | MitraArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Mitra :
    S extends undefined ? never :
    S extends { include: any } & (MitraArgs | MitraFindManyArgs)
    ? Mitra  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'aproval' ? Array < aprovalGetPayload<S['include'][P]>>  :
        P extends 'pegawai' ? Array < pegawaiGetPayload<S['include'][P]>>  :
        P extends 'pencatatan' ? Array < pencatatanGetPayload<S['include'][P]>>  :
        P extends 'bukti_bayar' ? Array < bukti_bayarGetPayload<S['include'][P]>>  :
        P extends 'tracking' ? Array < trackingGetPayload<S['include'][P]>>  :
        P extends '_count' ? MitraCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MitraArgs | MitraFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'aproval' ? Array < aprovalGetPayload<S['select'][P]>>  :
        P extends 'pegawai' ? Array < pegawaiGetPayload<S['select'][P]>>  :
        P extends 'pencatatan' ? Array < pencatatanGetPayload<S['select'][P]>>  :
        P extends 'bukti_bayar' ? Array < bukti_bayarGetPayload<S['select'][P]>>  :
        P extends 'tracking' ? Array < trackingGetPayload<S['select'][P]>>  :
        P extends '_count' ? MitraCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Mitra ? Mitra[P] : never
  } 
      : Mitra


  type MitraCountArgs = 
    Omit<MitraFindManyArgs, 'select' | 'include'> & {
      select?: MitraCountAggregateInputType | true
    }

  export interface MitraDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Mitra that matches the filter.
     * @param {MitraFindUniqueArgs} args - Arguments to find a Mitra
     * @example
     * // Get one Mitra
     * const mitra = await prisma.mitra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MitraFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MitraFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mitra'> extends True ? Prisma__MitraClient<MitraGetPayload<T>> : Prisma__MitraClient<MitraGetPayload<T> | null, null>

    /**
     * Find one Mitra that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MitraFindUniqueOrThrowArgs} args - Arguments to find a Mitra
     * @example
     * // Get one Mitra
     * const mitra = await prisma.mitra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MitraFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MitraFindUniqueOrThrowArgs>
    ): Prisma__MitraClient<MitraGetPayload<T>>

    /**
     * Find the first Mitra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraFindFirstArgs} args - Arguments to find a Mitra
     * @example
     * // Get one Mitra
     * const mitra = await prisma.mitra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MitraFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MitraFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mitra'> extends True ? Prisma__MitraClient<MitraGetPayload<T>> : Prisma__MitraClient<MitraGetPayload<T> | null, null>

    /**
     * Find the first Mitra that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraFindFirstOrThrowArgs} args - Arguments to find a Mitra
     * @example
     * // Get one Mitra
     * const mitra = await prisma.mitra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MitraFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MitraFindFirstOrThrowArgs>
    ): Prisma__MitraClient<MitraGetPayload<T>>

    /**
     * Find zero or more Mitras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mitras
     * const mitras = await prisma.mitra.findMany()
     * 
     * // Get first 10 Mitras
     * const mitras = await prisma.mitra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mitraWithIdOnly = await prisma.mitra.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MitraFindManyArgs>(
      args?: SelectSubset<T, MitraFindManyArgs>
    ): Prisma.PrismaPromise<Array<MitraGetPayload<T>>>

    /**
     * Create a Mitra.
     * @param {MitraCreateArgs} args - Arguments to create a Mitra.
     * @example
     * // Create one Mitra
     * const Mitra = await prisma.mitra.create({
     *   data: {
     *     // ... data to create a Mitra
     *   }
     * })
     * 
    **/
    create<T extends MitraCreateArgs>(
      args: SelectSubset<T, MitraCreateArgs>
    ): Prisma__MitraClient<MitraGetPayload<T>>

    /**
     * Create many Mitras.
     *     @param {MitraCreateManyArgs} args - Arguments to create many Mitras.
     *     @example
     *     // Create many Mitras
     *     const mitra = await prisma.mitra.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MitraCreateManyArgs>(
      args?: SelectSubset<T, MitraCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mitra.
     * @param {MitraDeleteArgs} args - Arguments to delete one Mitra.
     * @example
     * // Delete one Mitra
     * const Mitra = await prisma.mitra.delete({
     *   where: {
     *     // ... filter to delete one Mitra
     *   }
     * })
     * 
    **/
    delete<T extends MitraDeleteArgs>(
      args: SelectSubset<T, MitraDeleteArgs>
    ): Prisma__MitraClient<MitraGetPayload<T>>

    /**
     * Update one Mitra.
     * @param {MitraUpdateArgs} args - Arguments to update one Mitra.
     * @example
     * // Update one Mitra
     * const mitra = await prisma.mitra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MitraUpdateArgs>(
      args: SelectSubset<T, MitraUpdateArgs>
    ): Prisma__MitraClient<MitraGetPayload<T>>

    /**
     * Delete zero or more Mitras.
     * @param {MitraDeleteManyArgs} args - Arguments to filter Mitras to delete.
     * @example
     * // Delete a few Mitras
     * const { count } = await prisma.mitra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MitraDeleteManyArgs>(
      args?: SelectSubset<T, MitraDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mitras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mitras
     * const mitra = await prisma.mitra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MitraUpdateManyArgs>(
      args: SelectSubset<T, MitraUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mitra.
     * @param {MitraUpsertArgs} args - Arguments to update or create a Mitra.
     * @example
     * // Update or create a Mitra
     * const mitra = await prisma.mitra.upsert({
     *   create: {
     *     // ... data to create a Mitra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mitra we want to update
     *   }
     * })
    **/
    upsert<T extends MitraUpsertArgs>(
      args: SelectSubset<T, MitraUpsertArgs>
    ): Prisma__MitraClient<MitraGetPayload<T>>

    /**
     * Count the number of Mitras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraCountArgs} args - Arguments to filter Mitras to count.
     * @example
     * // Count the number of Mitras
     * const count = await prisma.mitra.count({
     *   where: {
     *     // ... the filter for the Mitras we want to count
     *   }
     * })
    **/
    count<T extends MitraCountArgs>(
      args?: Subset<T, MitraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MitraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mitra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MitraAggregateArgs>(args: Subset<T, MitraAggregateArgs>): Prisma.PrismaPromise<GetMitraAggregateType<T>>

    /**
     * Group by Mitra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MitraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MitraGroupByArgs['orderBy'] }
        : { orderBy?: MitraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MitraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMitraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Mitra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MitraClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    aproval<T extends Mitra$aprovalArgs= {}>(args?: Subset<T, Mitra$aprovalArgs>): Prisma.PrismaPromise<Array<aprovalGetPayload<T>>| Null>;

    pegawai<T extends Mitra$pegawaiArgs= {}>(args?: Subset<T, Mitra$pegawaiArgs>): Prisma.PrismaPromise<Array<pegawaiGetPayload<T>>| Null>;

    pencatatan<T extends Mitra$pencatatanArgs= {}>(args?: Subset<T, Mitra$pencatatanArgs>): Prisma.PrismaPromise<Array<pencatatanGetPayload<T>>| Null>;

    bukti_bayar<T extends Mitra$bukti_bayarArgs= {}>(args?: Subset<T, Mitra$bukti_bayarArgs>): Prisma.PrismaPromise<Array<bukti_bayarGetPayload<T>>| Null>;

    tracking<T extends Mitra$trackingArgs= {}>(args?: Subset<T, Mitra$trackingArgs>): Prisma.PrismaPromise<Array<trackingGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Mitra base type for findUnique actions
   */
  export type MitraFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MitraInclude | null
    /**
     * Filter, which Mitra to fetch.
     */
    where: MitraWhereUniqueInput
  }

  /**
   * Mitra findUnique
   */
  export interface MitraFindUniqueArgs extends MitraFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Mitra findUniqueOrThrow
   */
  export type MitraFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MitraInclude | null
    /**
     * Filter, which Mitra to fetch.
     */
    where: MitraWhereUniqueInput
  }


  /**
   * Mitra base type for findFirst actions
   */
  export type MitraFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MitraInclude | null
    /**
     * Filter, which Mitra to fetch.
     */
    where?: MitraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mitras to fetch.
     */
    orderBy?: Enumerable<MitraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mitras.
     */
    cursor?: MitraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mitras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mitras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mitras.
     */
    distinct?: Enumerable<MitraScalarFieldEnum>
  }

  /**
   * Mitra findFirst
   */
  export interface MitraFindFirstArgs extends MitraFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Mitra findFirstOrThrow
   */
  export type MitraFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MitraInclude | null
    /**
     * Filter, which Mitra to fetch.
     */
    where?: MitraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mitras to fetch.
     */
    orderBy?: Enumerable<MitraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mitras.
     */
    cursor?: MitraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mitras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mitras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mitras.
     */
    distinct?: Enumerable<MitraScalarFieldEnum>
  }


  /**
   * Mitra findMany
   */
  export type MitraFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MitraInclude | null
    /**
     * Filter, which Mitras to fetch.
     */
    where?: MitraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mitras to fetch.
     */
    orderBy?: Enumerable<MitraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mitras.
     */
    cursor?: MitraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mitras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mitras.
     */
    skip?: number
    distinct?: Enumerable<MitraScalarFieldEnum>
  }


  /**
   * Mitra create
   */
  export type MitraCreateArgs = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MitraInclude | null
    /**
     * The data needed to create a Mitra.
     */
    data: XOR<MitraCreateInput, MitraUncheckedCreateInput>
  }


  /**
   * Mitra createMany
   */
  export type MitraCreateManyArgs = {
    /**
     * The data used to create many Mitras.
     */
    data: Enumerable<MitraCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mitra update
   */
  export type MitraUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MitraInclude | null
    /**
     * The data needed to update a Mitra.
     */
    data: XOR<MitraUpdateInput, MitraUncheckedUpdateInput>
    /**
     * Choose, which Mitra to update.
     */
    where: MitraWhereUniqueInput
  }


  /**
   * Mitra updateMany
   */
  export type MitraUpdateManyArgs = {
    /**
     * The data used to update Mitras.
     */
    data: XOR<MitraUpdateManyMutationInput, MitraUncheckedUpdateManyInput>
    /**
     * Filter which Mitras to update
     */
    where?: MitraWhereInput
  }


  /**
   * Mitra upsert
   */
  export type MitraUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MitraInclude | null
    /**
     * The filter to search for the Mitra to update in case it exists.
     */
    where: MitraWhereUniqueInput
    /**
     * In case the Mitra found by the `where` argument doesn't exist, create a new Mitra with this data.
     */
    create: XOR<MitraCreateInput, MitraUncheckedCreateInput>
    /**
     * In case the Mitra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MitraUpdateInput, MitraUncheckedUpdateInput>
  }


  /**
   * Mitra delete
   */
  export type MitraDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MitraInclude | null
    /**
     * Filter which Mitra to delete.
     */
    where: MitraWhereUniqueInput
  }


  /**
   * Mitra deleteMany
   */
  export type MitraDeleteManyArgs = {
    /**
     * Filter which Mitras to delete
     */
    where?: MitraWhereInput
  }


  /**
   * Mitra.aproval
   */
  export type Mitra$aprovalArgs = {
    /**
     * Select specific fields to fetch from the aproval
     */
    select?: aprovalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aprovalInclude | null
    where?: aprovalWhereInput
    orderBy?: Enumerable<aprovalOrderByWithRelationInput>
    cursor?: aprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AprovalScalarFieldEnum>
  }


  /**
   * Mitra.pegawai
   */
  export type Mitra$pegawaiArgs = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pegawaiInclude | null
    where?: pegawaiWhereInput
    orderBy?: Enumerable<pegawaiOrderByWithRelationInput>
    cursor?: pegawaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PegawaiScalarFieldEnum>
  }


  /**
   * Mitra.pencatatan
   */
  export type Mitra$pencatatanArgs = {
    /**
     * Select specific fields to fetch from the pencatatan
     */
    select?: pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pencatatanInclude | null
    where?: pencatatanWhereInput
    orderBy?: Enumerable<pencatatanOrderByWithRelationInput>
    cursor?: pencatatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PencatatanScalarFieldEnum>
  }


  /**
   * Mitra.bukti_bayar
   */
  export type Mitra$bukti_bayarArgs = {
    /**
     * Select specific fields to fetch from the bukti_bayar
     */
    select?: bukti_bayarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bukti_bayarInclude | null
    where?: bukti_bayarWhereInput
    orderBy?: Enumerable<bukti_bayarOrderByWithRelationInput>
    cursor?: bukti_bayarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Bukti_bayarScalarFieldEnum>
  }


  /**
   * Mitra.tracking
   */
  export type Mitra$trackingArgs = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trackingInclude | null
    where?: trackingWhereInput
    orderBy?: Enumerable<trackingOrderByWithRelationInput>
    cursor?: trackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TrackingScalarFieldEnum>
  }


  /**
   * Mitra without action
   */
  export type MitraArgs = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MitraInclude | null
  }



  /**
   * Model bukti_bayar
   */


  export type AggregateBukti_bayar = {
    _count: Bukti_bayarCountAggregateOutputType | null
    _avg: Bukti_bayarAvgAggregateOutputType | null
    _sum: Bukti_bayarSumAggregateOutputType | null
    _min: Bukti_bayarMinAggregateOutputType | null
    _max: Bukti_bayarMaxAggregateOutputType | null
  }

  export type Bukti_bayarAvgAggregateOutputType = {
    id: number | null
    status: number | null
    id_mitra: number | null
  }

  export type Bukti_bayarSumAggregateOutputType = {
    id: number | null
    status: number | null
    id_mitra: number | null
  }

  export type Bukti_bayarMinAggregateOutputType = {
    id: number | null
    bukti_bayar: string | null
    status: number | null
    expire: Date | null
    id_mitra: number | null
  }

  export type Bukti_bayarMaxAggregateOutputType = {
    id: number | null
    bukti_bayar: string | null
    status: number | null
    expire: Date | null
    id_mitra: number | null
  }

  export type Bukti_bayarCountAggregateOutputType = {
    id: number
    bukti_bayar: number
    status: number
    expire: number
    id_mitra: number
    _all: number
  }


  export type Bukti_bayarAvgAggregateInputType = {
    id?: true
    status?: true
    id_mitra?: true
  }

  export type Bukti_bayarSumAggregateInputType = {
    id?: true
    status?: true
    id_mitra?: true
  }

  export type Bukti_bayarMinAggregateInputType = {
    id?: true
    bukti_bayar?: true
    status?: true
    expire?: true
    id_mitra?: true
  }

  export type Bukti_bayarMaxAggregateInputType = {
    id?: true
    bukti_bayar?: true
    status?: true
    expire?: true
    id_mitra?: true
  }

  export type Bukti_bayarCountAggregateInputType = {
    id?: true
    bukti_bayar?: true
    status?: true
    expire?: true
    id_mitra?: true
    _all?: true
  }

  export type Bukti_bayarAggregateArgs = {
    /**
     * Filter which bukti_bayar to aggregate.
     */
    where?: bukti_bayarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bukti_bayars to fetch.
     */
    orderBy?: Enumerable<bukti_bayarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bukti_bayarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bukti_bayars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bukti_bayars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bukti_bayars
    **/
    _count?: true | Bukti_bayarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bukti_bayarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bukti_bayarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bukti_bayarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bukti_bayarMaxAggregateInputType
  }

  export type GetBukti_bayarAggregateType<T extends Bukti_bayarAggregateArgs> = {
        [P in keyof T & keyof AggregateBukti_bayar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBukti_bayar[P]>
      : GetScalarType<T[P], AggregateBukti_bayar[P]>
  }




  export type Bukti_bayarGroupByArgs = {
    where?: bukti_bayarWhereInput
    orderBy?: Enumerable<bukti_bayarOrderByWithAggregationInput>
    by: Bukti_bayarScalarFieldEnum[]
    having?: bukti_bayarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bukti_bayarCountAggregateInputType | true
    _avg?: Bukti_bayarAvgAggregateInputType
    _sum?: Bukti_bayarSumAggregateInputType
    _min?: Bukti_bayarMinAggregateInputType
    _max?: Bukti_bayarMaxAggregateInputType
  }


  export type Bukti_bayarGroupByOutputType = {
    id: number
    bukti_bayar: string
    status: number
    expire: Date | null
    id_mitra: number
    _count: Bukti_bayarCountAggregateOutputType | null
    _avg: Bukti_bayarAvgAggregateOutputType | null
    _sum: Bukti_bayarSumAggregateOutputType | null
    _min: Bukti_bayarMinAggregateOutputType | null
    _max: Bukti_bayarMaxAggregateOutputType | null
  }

  type GetBukti_bayarGroupByPayload<T extends Bukti_bayarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Bukti_bayarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bukti_bayarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bukti_bayarGroupByOutputType[P]>
            : GetScalarType<T[P], Bukti_bayarGroupByOutputType[P]>
        }
      >
    >


  export type bukti_bayarSelect = {
    id?: boolean
    bukti_bayar?: boolean
    status?: boolean
    expire?: boolean
    id_mitra?: boolean
    mitra?: boolean | MitraArgs
  }


  export type bukti_bayarInclude = {
    mitra?: boolean | MitraArgs
  }

  export type bukti_bayarGetPayload<S extends boolean | null | undefined | bukti_bayarArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? bukti_bayar :
    S extends undefined ? never :
    S extends { include: any } & (bukti_bayarArgs | bukti_bayarFindManyArgs)
    ? bukti_bayar  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'mitra' ? MitraGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (bukti_bayarArgs | bukti_bayarFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'mitra' ? MitraGetPayload<S['select'][P]> :  P extends keyof bukti_bayar ? bukti_bayar[P] : never
  } 
      : bukti_bayar


  type bukti_bayarCountArgs = 
    Omit<bukti_bayarFindManyArgs, 'select' | 'include'> & {
      select?: Bukti_bayarCountAggregateInputType | true
    }

  export interface bukti_bayarDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Bukti_bayar that matches the filter.
     * @param {bukti_bayarFindUniqueArgs} args - Arguments to find a Bukti_bayar
     * @example
     * // Get one Bukti_bayar
     * const bukti_bayar = await prisma.bukti_bayar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends bukti_bayarFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, bukti_bayarFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'bukti_bayar'> extends True ? Prisma__bukti_bayarClient<bukti_bayarGetPayload<T>> : Prisma__bukti_bayarClient<bukti_bayarGetPayload<T> | null, null>

    /**
     * Find one Bukti_bayar that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {bukti_bayarFindUniqueOrThrowArgs} args - Arguments to find a Bukti_bayar
     * @example
     * // Get one Bukti_bayar
     * const bukti_bayar = await prisma.bukti_bayar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends bukti_bayarFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, bukti_bayarFindUniqueOrThrowArgs>
    ): Prisma__bukti_bayarClient<bukti_bayarGetPayload<T>>

    /**
     * Find the first Bukti_bayar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bukti_bayarFindFirstArgs} args - Arguments to find a Bukti_bayar
     * @example
     * // Get one Bukti_bayar
     * const bukti_bayar = await prisma.bukti_bayar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends bukti_bayarFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, bukti_bayarFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'bukti_bayar'> extends True ? Prisma__bukti_bayarClient<bukti_bayarGetPayload<T>> : Prisma__bukti_bayarClient<bukti_bayarGetPayload<T> | null, null>

    /**
     * Find the first Bukti_bayar that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bukti_bayarFindFirstOrThrowArgs} args - Arguments to find a Bukti_bayar
     * @example
     * // Get one Bukti_bayar
     * const bukti_bayar = await prisma.bukti_bayar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends bukti_bayarFindFirstOrThrowArgs>(
      args?: SelectSubset<T, bukti_bayarFindFirstOrThrowArgs>
    ): Prisma__bukti_bayarClient<bukti_bayarGetPayload<T>>

    /**
     * Find zero or more Bukti_bayars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bukti_bayarFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bukti_bayars
     * const bukti_bayars = await prisma.bukti_bayar.findMany()
     * 
     * // Get first 10 Bukti_bayars
     * const bukti_bayars = await prisma.bukti_bayar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bukti_bayarWithIdOnly = await prisma.bukti_bayar.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends bukti_bayarFindManyArgs>(
      args?: SelectSubset<T, bukti_bayarFindManyArgs>
    ): Prisma.PrismaPromise<Array<bukti_bayarGetPayload<T>>>

    /**
     * Create a Bukti_bayar.
     * @param {bukti_bayarCreateArgs} args - Arguments to create a Bukti_bayar.
     * @example
     * // Create one Bukti_bayar
     * const Bukti_bayar = await prisma.bukti_bayar.create({
     *   data: {
     *     // ... data to create a Bukti_bayar
     *   }
     * })
     * 
    **/
    create<T extends bukti_bayarCreateArgs>(
      args: SelectSubset<T, bukti_bayarCreateArgs>
    ): Prisma__bukti_bayarClient<bukti_bayarGetPayload<T>>

    /**
     * Create many Bukti_bayars.
     *     @param {bukti_bayarCreateManyArgs} args - Arguments to create many Bukti_bayars.
     *     @example
     *     // Create many Bukti_bayars
     *     const bukti_bayar = await prisma.bukti_bayar.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends bukti_bayarCreateManyArgs>(
      args?: SelectSubset<T, bukti_bayarCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bukti_bayar.
     * @param {bukti_bayarDeleteArgs} args - Arguments to delete one Bukti_bayar.
     * @example
     * // Delete one Bukti_bayar
     * const Bukti_bayar = await prisma.bukti_bayar.delete({
     *   where: {
     *     // ... filter to delete one Bukti_bayar
     *   }
     * })
     * 
    **/
    delete<T extends bukti_bayarDeleteArgs>(
      args: SelectSubset<T, bukti_bayarDeleteArgs>
    ): Prisma__bukti_bayarClient<bukti_bayarGetPayload<T>>

    /**
     * Update one Bukti_bayar.
     * @param {bukti_bayarUpdateArgs} args - Arguments to update one Bukti_bayar.
     * @example
     * // Update one Bukti_bayar
     * const bukti_bayar = await prisma.bukti_bayar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends bukti_bayarUpdateArgs>(
      args: SelectSubset<T, bukti_bayarUpdateArgs>
    ): Prisma__bukti_bayarClient<bukti_bayarGetPayload<T>>

    /**
     * Delete zero or more Bukti_bayars.
     * @param {bukti_bayarDeleteManyArgs} args - Arguments to filter Bukti_bayars to delete.
     * @example
     * // Delete a few Bukti_bayars
     * const { count } = await prisma.bukti_bayar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends bukti_bayarDeleteManyArgs>(
      args?: SelectSubset<T, bukti_bayarDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bukti_bayars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bukti_bayarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bukti_bayars
     * const bukti_bayar = await prisma.bukti_bayar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends bukti_bayarUpdateManyArgs>(
      args: SelectSubset<T, bukti_bayarUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bukti_bayar.
     * @param {bukti_bayarUpsertArgs} args - Arguments to update or create a Bukti_bayar.
     * @example
     * // Update or create a Bukti_bayar
     * const bukti_bayar = await prisma.bukti_bayar.upsert({
     *   create: {
     *     // ... data to create a Bukti_bayar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bukti_bayar we want to update
     *   }
     * })
    **/
    upsert<T extends bukti_bayarUpsertArgs>(
      args: SelectSubset<T, bukti_bayarUpsertArgs>
    ): Prisma__bukti_bayarClient<bukti_bayarGetPayload<T>>

    /**
     * Count the number of Bukti_bayars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bukti_bayarCountArgs} args - Arguments to filter Bukti_bayars to count.
     * @example
     * // Count the number of Bukti_bayars
     * const count = await prisma.bukti_bayar.count({
     *   where: {
     *     // ... the filter for the Bukti_bayars we want to count
     *   }
     * })
    **/
    count<T extends bukti_bayarCountArgs>(
      args?: Subset<T, bukti_bayarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bukti_bayarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bukti_bayar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bukti_bayarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Bukti_bayarAggregateArgs>(args: Subset<T, Bukti_bayarAggregateArgs>): Prisma.PrismaPromise<GetBukti_bayarAggregateType<T>>

    /**
     * Group by Bukti_bayar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bukti_bayarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Bukti_bayarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Bukti_bayarGroupByArgs['orderBy'] }
        : { orderBy?: Bukti_bayarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Bukti_bayarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBukti_bayarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for bukti_bayar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__bukti_bayarClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    mitra<T extends MitraArgs= {}>(args?: Subset<T, MitraArgs>): Prisma__MitraClient<MitraGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * bukti_bayar base type for findUnique actions
   */
  export type bukti_bayarFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the bukti_bayar
     */
    select?: bukti_bayarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bukti_bayarInclude | null
    /**
     * Filter, which bukti_bayar to fetch.
     */
    where: bukti_bayarWhereUniqueInput
  }

  /**
   * bukti_bayar findUnique
   */
  export interface bukti_bayarFindUniqueArgs extends bukti_bayarFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * bukti_bayar findUniqueOrThrow
   */
  export type bukti_bayarFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the bukti_bayar
     */
    select?: bukti_bayarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bukti_bayarInclude | null
    /**
     * Filter, which bukti_bayar to fetch.
     */
    where: bukti_bayarWhereUniqueInput
  }


  /**
   * bukti_bayar base type for findFirst actions
   */
  export type bukti_bayarFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the bukti_bayar
     */
    select?: bukti_bayarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bukti_bayarInclude | null
    /**
     * Filter, which bukti_bayar to fetch.
     */
    where?: bukti_bayarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bukti_bayars to fetch.
     */
    orderBy?: Enumerable<bukti_bayarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bukti_bayars.
     */
    cursor?: bukti_bayarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bukti_bayars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bukti_bayars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bukti_bayars.
     */
    distinct?: Enumerable<Bukti_bayarScalarFieldEnum>
  }

  /**
   * bukti_bayar findFirst
   */
  export interface bukti_bayarFindFirstArgs extends bukti_bayarFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * bukti_bayar findFirstOrThrow
   */
  export type bukti_bayarFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the bukti_bayar
     */
    select?: bukti_bayarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bukti_bayarInclude | null
    /**
     * Filter, which bukti_bayar to fetch.
     */
    where?: bukti_bayarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bukti_bayars to fetch.
     */
    orderBy?: Enumerable<bukti_bayarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bukti_bayars.
     */
    cursor?: bukti_bayarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bukti_bayars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bukti_bayars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bukti_bayars.
     */
    distinct?: Enumerable<Bukti_bayarScalarFieldEnum>
  }


  /**
   * bukti_bayar findMany
   */
  export type bukti_bayarFindManyArgs = {
    /**
     * Select specific fields to fetch from the bukti_bayar
     */
    select?: bukti_bayarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bukti_bayarInclude | null
    /**
     * Filter, which bukti_bayars to fetch.
     */
    where?: bukti_bayarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bukti_bayars to fetch.
     */
    orderBy?: Enumerable<bukti_bayarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bukti_bayars.
     */
    cursor?: bukti_bayarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bukti_bayars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bukti_bayars.
     */
    skip?: number
    distinct?: Enumerable<Bukti_bayarScalarFieldEnum>
  }


  /**
   * bukti_bayar create
   */
  export type bukti_bayarCreateArgs = {
    /**
     * Select specific fields to fetch from the bukti_bayar
     */
    select?: bukti_bayarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bukti_bayarInclude | null
    /**
     * The data needed to create a bukti_bayar.
     */
    data: XOR<bukti_bayarCreateInput, bukti_bayarUncheckedCreateInput>
  }


  /**
   * bukti_bayar createMany
   */
  export type bukti_bayarCreateManyArgs = {
    /**
     * The data used to create many bukti_bayars.
     */
    data: Enumerable<bukti_bayarCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * bukti_bayar update
   */
  export type bukti_bayarUpdateArgs = {
    /**
     * Select specific fields to fetch from the bukti_bayar
     */
    select?: bukti_bayarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bukti_bayarInclude | null
    /**
     * The data needed to update a bukti_bayar.
     */
    data: XOR<bukti_bayarUpdateInput, bukti_bayarUncheckedUpdateInput>
    /**
     * Choose, which bukti_bayar to update.
     */
    where: bukti_bayarWhereUniqueInput
  }


  /**
   * bukti_bayar updateMany
   */
  export type bukti_bayarUpdateManyArgs = {
    /**
     * The data used to update bukti_bayars.
     */
    data: XOR<bukti_bayarUpdateManyMutationInput, bukti_bayarUncheckedUpdateManyInput>
    /**
     * Filter which bukti_bayars to update
     */
    where?: bukti_bayarWhereInput
  }


  /**
   * bukti_bayar upsert
   */
  export type bukti_bayarUpsertArgs = {
    /**
     * Select specific fields to fetch from the bukti_bayar
     */
    select?: bukti_bayarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bukti_bayarInclude | null
    /**
     * The filter to search for the bukti_bayar to update in case it exists.
     */
    where: bukti_bayarWhereUniqueInput
    /**
     * In case the bukti_bayar found by the `where` argument doesn't exist, create a new bukti_bayar with this data.
     */
    create: XOR<bukti_bayarCreateInput, bukti_bayarUncheckedCreateInput>
    /**
     * In case the bukti_bayar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bukti_bayarUpdateInput, bukti_bayarUncheckedUpdateInput>
  }


  /**
   * bukti_bayar delete
   */
  export type bukti_bayarDeleteArgs = {
    /**
     * Select specific fields to fetch from the bukti_bayar
     */
    select?: bukti_bayarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bukti_bayarInclude | null
    /**
     * Filter which bukti_bayar to delete.
     */
    where: bukti_bayarWhereUniqueInput
  }


  /**
   * bukti_bayar deleteMany
   */
  export type bukti_bayarDeleteManyArgs = {
    /**
     * Filter which bukti_bayars to delete
     */
    where?: bukti_bayarWhereInput
  }


  /**
   * bukti_bayar without action
   */
  export type bukti_bayarArgs = {
    /**
     * Select specific fields to fetch from the bukti_bayar
     */
    select?: bukti_bayarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bukti_bayarInclude | null
  }



  /**
   * Model konfirmasi
   */


  export type AggregateKonfirmasi = {
    _count: KonfirmasiCountAggregateOutputType | null
    _avg: KonfirmasiAvgAggregateOutputType | null
    _sum: KonfirmasiSumAggregateOutputType | null
    _min: KonfirmasiMinAggregateOutputType | null
    _max: KonfirmasiMaxAggregateOutputType | null
  }

  export type KonfirmasiAvgAggregateOutputType = {
    id: number | null
    id_pegawai: number | null
  }

  export type KonfirmasiSumAggregateOutputType = {
    id: number | null
    id_pegawai: number | null
  }

  export type KonfirmasiMinAggregateOutputType = {
    id: number | null
    nama_pembeli: string | null
    alamat_pembeli: string | null
    keterangan: string | null
    id_pegawai: number | null
  }

  export type KonfirmasiMaxAggregateOutputType = {
    id: number | null
    nama_pembeli: string | null
    alamat_pembeli: string | null
    keterangan: string | null
    id_pegawai: number | null
  }

  export type KonfirmasiCountAggregateOutputType = {
    id: number
    nama_pembeli: number
    alamat_pembeli: number
    keterangan: number
    id_pegawai: number
    _all: number
  }


  export type KonfirmasiAvgAggregateInputType = {
    id?: true
    id_pegawai?: true
  }

  export type KonfirmasiSumAggregateInputType = {
    id?: true
    id_pegawai?: true
  }

  export type KonfirmasiMinAggregateInputType = {
    id?: true
    nama_pembeli?: true
    alamat_pembeli?: true
    keterangan?: true
    id_pegawai?: true
  }

  export type KonfirmasiMaxAggregateInputType = {
    id?: true
    nama_pembeli?: true
    alamat_pembeli?: true
    keterangan?: true
    id_pegawai?: true
  }

  export type KonfirmasiCountAggregateInputType = {
    id?: true
    nama_pembeli?: true
    alamat_pembeli?: true
    keterangan?: true
    id_pegawai?: true
    _all?: true
  }

  export type KonfirmasiAggregateArgs = {
    /**
     * Filter which konfirmasi to aggregate.
     */
    where?: konfirmasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of konfirmasis to fetch.
     */
    orderBy?: Enumerable<konfirmasiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: konfirmasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` konfirmasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` konfirmasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned konfirmasis
    **/
    _count?: true | KonfirmasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KonfirmasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KonfirmasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KonfirmasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KonfirmasiMaxAggregateInputType
  }

  export type GetKonfirmasiAggregateType<T extends KonfirmasiAggregateArgs> = {
        [P in keyof T & keyof AggregateKonfirmasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKonfirmasi[P]>
      : GetScalarType<T[P], AggregateKonfirmasi[P]>
  }




  export type KonfirmasiGroupByArgs = {
    where?: konfirmasiWhereInput
    orderBy?: Enumerable<konfirmasiOrderByWithAggregationInput>
    by: KonfirmasiScalarFieldEnum[]
    having?: konfirmasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KonfirmasiCountAggregateInputType | true
    _avg?: KonfirmasiAvgAggregateInputType
    _sum?: KonfirmasiSumAggregateInputType
    _min?: KonfirmasiMinAggregateInputType
    _max?: KonfirmasiMaxAggregateInputType
  }


  export type KonfirmasiGroupByOutputType = {
    id: number
    nama_pembeli: string
    alamat_pembeli: string
    keterangan: string
    id_pegawai: number
    _count: KonfirmasiCountAggregateOutputType | null
    _avg: KonfirmasiAvgAggregateOutputType | null
    _sum: KonfirmasiSumAggregateOutputType | null
    _min: KonfirmasiMinAggregateOutputType | null
    _max: KonfirmasiMaxAggregateOutputType | null
  }

  type GetKonfirmasiGroupByPayload<T extends KonfirmasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<KonfirmasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KonfirmasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KonfirmasiGroupByOutputType[P]>
            : GetScalarType<T[P], KonfirmasiGroupByOutputType[P]>
        }
      >
    >


  export type konfirmasiSelect = {
    id?: boolean
    nama_pembeli?: boolean
    alamat_pembeli?: boolean
    keterangan?: boolean
    id_pegawai?: boolean
    pegawai?: boolean | pegawaiArgs
  }


  export type konfirmasiInclude = {
    pegawai?: boolean | pegawaiArgs
  }

  export type konfirmasiGetPayload<S extends boolean | null | undefined | konfirmasiArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? konfirmasi :
    S extends undefined ? never :
    S extends { include: any } & (konfirmasiArgs | konfirmasiFindManyArgs)
    ? konfirmasi  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'pegawai' ? pegawaiGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (konfirmasiArgs | konfirmasiFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'pegawai' ? pegawaiGetPayload<S['select'][P]> :  P extends keyof konfirmasi ? konfirmasi[P] : never
  } 
      : konfirmasi


  type konfirmasiCountArgs = 
    Omit<konfirmasiFindManyArgs, 'select' | 'include'> & {
      select?: KonfirmasiCountAggregateInputType | true
    }

  export interface konfirmasiDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Konfirmasi that matches the filter.
     * @param {konfirmasiFindUniqueArgs} args - Arguments to find a Konfirmasi
     * @example
     * // Get one Konfirmasi
     * const konfirmasi = await prisma.konfirmasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends konfirmasiFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, konfirmasiFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'konfirmasi'> extends True ? Prisma__konfirmasiClient<konfirmasiGetPayload<T>> : Prisma__konfirmasiClient<konfirmasiGetPayload<T> | null, null>

    /**
     * Find one Konfirmasi that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {konfirmasiFindUniqueOrThrowArgs} args - Arguments to find a Konfirmasi
     * @example
     * // Get one Konfirmasi
     * const konfirmasi = await prisma.konfirmasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends konfirmasiFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, konfirmasiFindUniqueOrThrowArgs>
    ): Prisma__konfirmasiClient<konfirmasiGetPayload<T>>

    /**
     * Find the first Konfirmasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {konfirmasiFindFirstArgs} args - Arguments to find a Konfirmasi
     * @example
     * // Get one Konfirmasi
     * const konfirmasi = await prisma.konfirmasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends konfirmasiFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, konfirmasiFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'konfirmasi'> extends True ? Prisma__konfirmasiClient<konfirmasiGetPayload<T>> : Prisma__konfirmasiClient<konfirmasiGetPayload<T> | null, null>

    /**
     * Find the first Konfirmasi that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {konfirmasiFindFirstOrThrowArgs} args - Arguments to find a Konfirmasi
     * @example
     * // Get one Konfirmasi
     * const konfirmasi = await prisma.konfirmasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends konfirmasiFindFirstOrThrowArgs>(
      args?: SelectSubset<T, konfirmasiFindFirstOrThrowArgs>
    ): Prisma__konfirmasiClient<konfirmasiGetPayload<T>>

    /**
     * Find zero or more Konfirmasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {konfirmasiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Konfirmasis
     * const konfirmasis = await prisma.konfirmasi.findMany()
     * 
     * // Get first 10 Konfirmasis
     * const konfirmasis = await prisma.konfirmasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const konfirmasiWithIdOnly = await prisma.konfirmasi.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends konfirmasiFindManyArgs>(
      args?: SelectSubset<T, konfirmasiFindManyArgs>
    ): Prisma.PrismaPromise<Array<konfirmasiGetPayload<T>>>

    /**
     * Create a Konfirmasi.
     * @param {konfirmasiCreateArgs} args - Arguments to create a Konfirmasi.
     * @example
     * // Create one Konfirmasi
     * const Konfirmasi = await prisma.konfirmasi.create({
     *   data: {
     *     // ... data to create a Konfirmasi
     *   }
     * })
     * 
    **/
    create<T extends konfirmasiCreateArgs>(
      args: SelectSubset<T, konfirmasiCreateArgs>
    ): Prisma__konfirmasiClient<konfirmasiGetPayload<T>>

    /**
     * Create many Konfirmasis.
     *     @param {konfirmasiCreateManyArgs} args - Arguments to create many Konfirmasis.
     *     @example
     *     // Create many Konfirmasis
     *     const konfirmasi = await prisma.konfirmasi.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends konfirmasiCreateManyArgs>(
      args?: SelectSubset<T, konfirmasiCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Konfirmasi.
     * @param {konfirmasiDeleteArgs} args - Arguments to delete one Konfirmasi.
     * @example
     * // Delete one Konfirmasi
     * const Konfirmasi = await prisma.konfirmasi.delete({
     *   where: {
     *     // ... filter to delete one Konfirmasi
     *   }
     * })
     * 
    **/
    delete<T extends konfirmasiDeleteArgs>(
      args: SelectSubset<T, konfirmasiDeleteArgs>
    ): Prisma__konfirmasiClient<konfirmasiGetPayload<T>>

    /**
     * Update one Konfirmasi.
     * @param {konfirmasiUpdateArgs} args - Arguments to update one Konfirmasi.
     * @example
     * // Update one Konfirmasi
     * const konfirmasi = await prisma.konfirmasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends konfirmasiUpdateArgs>(
      args: SelectSubset<T, konfirmasiUpdateArgs>
    ): Prisma__konfirmasiClient<konfirmasiGetPayload<T>>

    /**
     * Delete zero or more Konfirmasis.
     * @param {konfirmasiDeleteManyArgs} args - Arguments to filter Konfirmasis to delete.
     * @example
     * // Delete a few Konfirmasis
     * const { count } = await prisma.konfirmasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends konfirmasiDeleteManyArgs>(
      args?: SelectSubset<T, konfirmasiDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Konfirmasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {konfirmasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Konfirmasis
     * const konfirmasi = await prisma.konfirmasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends konfirmasiUpdateManyArgs>(
      args: SelectSubset<T, konfirmasiUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Konfirmasi.
     * @param {konfirmasiUpsertArgs} args - Arguments to update or create a Konfirmasi.
     * @example
     * // Update or create a Konfirmasi
     * const konfirmasi = await prisma.konfirmasi.upsert({
     *   create: {
     *     // ... data to create a Konfirmasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Konfirmasi we want to update
     *   }
     * })
    **/
    upsert<T extends konfirmasiUpsertArgs>(
      args: SelectSubset<T, konfirmasiUpsertArgs>
    ): Prisma__konfirmasiClient<konfirmasiGetPayload<T>>

    /**
     * Count the number of Konfirmasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {konfirmasiCountArgs} args - Arguments to filter Konfirmasis to count.
     * @example
     * // Count the number of Konfirmasis
     * const count = await prisma.konfirmasi.count({
     *   where: {
     *     // ... the filter for the Konfirmasis we want to count
     *   }
     * })
    **/
    count<T extends konfirmasiCountArgs>(
      args?: Subset<T, konfirmasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KonfirmasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Konfirmasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KonfirmasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KonfirmasiAggregateArgs>(args: Subset<T, KonfirmasiAggregateArgs>): Prisma.PrismaPromise<GetKonfirmasiAggregateType<T>>

    /**
     * Group by Konfirmasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KonfirmasiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KonfirmasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KonfirmasiGroupByArgs['orderBy'] }
        : { orderBy?: KonfirmasiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KonfirmasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKonfirmasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for konfirmasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__konfirmasiClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    pegawai<T extends pegawaiArgs= {}>(args?: Subset<T, pegawaiArgs>): Prisma__pegawaiClient<pegawaiGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * konfirmasi base type for findUnique actions
   */
  export type konfirmasiFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the konfirmasi
     */
    select?: konfirmasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: konfirmasiInclude | null
    /**
     * Filter, which konfirmasi to fetch.
     */
    where: konfirmasiWhereUniqueInput
  }

  /**
   * konfirmasi findUnique
   */
  export interface konfirmasiFindUniqueArgs extends konfirmasiFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * konfirmasi findUniqueOrThrow
   */
  export type konfirmasiFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the konfirmasi
     */
    select?: konfirmasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: konfirmasiInclude | null
    /**
     * Filter, which konfirmasi to fetch.
     */
    where: konfirmasiWhereUniqueInput
  }


  /**
   * konfirmasi base type for findFirst actions
   */
  export type konfirmasiFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the konfirmasi
     */
    select?: konfirmasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: konfirmasiInclude | null
    /**
     * Filter, which konfirmasi to fetch.
     */
    where?: konfirmasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of konfirmasis to fetch.
     */
    orderBy?: Enumerable<konfirmasiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for konfirmasis.
     */
    cursor?: konfirmasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` konfirmasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` konfirmasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of konfirmasis.
     */
    distinct?: Enumerable<KonfirmasiScalarFieldEnum>
  }

  /**
   * konfirmasi findFirst
   */
  export interface konfirmasiFindFirstArgs extends konfirmasiFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * konfirmasi findFirstOrThrow
   */
  export type konfirmasiFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the konfirmasi
     */
    select?: konfirmasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: konfirmasiInclude | null
    /**
     * Filter, which konfirmasi to fetch.
     */
    where?: konfirmasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of konfirmasis to fetch.
     */
    orderBy?: Enumerable<konfirmasiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for konfirmasis.
     */
    cursor?: konfirmasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` konfirmasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` konfirmasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of konfirmasis.
     */
    distinct?: Enumerable<KonfirmasiScalarFieldEnum>
  }


  /**
   * konfirmasi findMany
   */
  export type konfirmasiFindManyArgs = {
    /**
     * Select specific fields to fetch from the konfirmasi
     */
    select?: konfirmasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: konfirmasiInclude | null
    /**
     * Filter, which konfirmasis to fetch.
     */
    where?: konfirmasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of konfirmasis to fetch.
     */
    orderBy?: Enumerable<konfirmasiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing konfirmasis.
     */
    cursor?: konfirmasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` konfirmasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` konfirmasis.
     */
    skip?: number
    distinct?: Enumerable<KonfirmasiScalarFieldEnum>
  }


  /**
   * konfirmasi create
   */
  export type konfirmasiCreateArgs = {
    /**
     * Select specific fields to fetch from the konfirmasi
     */
    select?: konfirmasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: konfirmasiInclude | null
    /**
     * The data needed to create a konfirmasi.
     */
    data: XOR<konfirmasiCreateInput, konfirmasiUncheckedCreateInput>
  }


  /**
   * konfirmasi createMany
   */
  export type konfirmasiCreateManyArgs = {
    /**
     * The data used to create many konfirmasis.
     */
    data: Enumerable<konfirmasiCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * konfirmasi update
   */
  export type konfirmasiUpdateArgs = {
    /**
     * Select specific fields to fetch from the konfirmasi
     */
    select?: konfirmasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: konfirmasiInclude | null
    /**
     * The data needed to update a konfirmasi.
     */
    data: XOR<konfirmasiUpdateInput, konfirmasiUncheckedUpdateInput>
    /**
     * Choose, which konfirmasi to update.
     */
    where: konfirmasiWhereUniqueInput
  }


  /**
   * konfirmasi updateMany
   */
  export type konfirmasiUpdateManyArgs = {
    /**
     * The data used to update konfirmasis.
     */
    data: XOR<konfirmasiUpdateManyMutationInput, konfirmasiUncheckedUpdateManyInput>
    /**
     * Filter which konfirmasis to update
     */
    where?: konfirmasiWhereInput
  }


  /**
   * konfirmasi upsert
   */
  export type konfirmasiUpsertArgs = {
    /**
     * Select specific fields to fetch from the konfirmasi
     */
    select?: konfirmasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: konfirmasiInclude | null
    /**
     * The filter to search for the konfirmasi to update in case it exists.
     */
    where: konfirmasiWhereUniqueInput
    /**
     * In case the konfirmasi found by the `where` argument doesn't exist, create a new konfirmasi with this data.
     */
    create: XOR<konfirmasiCreateInput, konfirmasiUncheckedCreateInput>
    /**
     * In case the konfirmasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<konfirmasiUpdateInput, konfirmasiUncheckedUpdateInput>
  }


  /**
   * konfirmasi delete
   */
  export type konfirmasiDeleteArgs = {
    /**
     * Select specific fields to fetch from the konfirmasi
     */
    select?: konfirmasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: konfirmasiInclude | null
    /**
     * Filter which konfirmasi to delete.
     */
    where: konfirmasiWhereUniqueInput
  }


  /**
   * konfirmasi deleteMany
   */
  export type konfirmasiDeleteManyArgs = {
    /**
     * Filter which konfirmasis to delete
     */
    where?: konfirmasiWhereInput
  }


  /**
   * konfirmasi without action
   */
  export type konfirmasiArgs = {
    /**
     * Select specific fields to fetch from the konfirmasi
     */
    select?: konfirmasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: konfirmasiInclude | null
  }



  /**
   * Model pegawai
   */


  export type AggregatePegawai = {
    _count: PegawaiCountAggregateOutputType | null
    _avg: PegawaiAvgAggregateOutputType | null
    _sum: PegawaiSumAggregateOutputType | null
    _min: PegawaiMinAggregateOutputType | null
    _max: PegawaiMaxAggregateOutputType | null
  }

  export type PegawaiAvgAggregateOutputType = {
    id: number | null
    workAt: number | null
  }

  export type PegawaiSumAggregateOutputType = {
    id: number | null
    workAt: number | null
  }

  export type PegawaiMinAggregateOutputType = {
    id: number | null
    workAt: number | null
    name: string | null
    email: string | null
    password: string | null
    no: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PegawaiMaxAggregateOutputType = {
    id: number | null
    workAt: number | null
    name: string | null
    email: string | null
    password: string | null
    no: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PegawaiCountAggregateOutputType = {
    id: number
    workAt: number
    name: number
    email: number
    password: number
    no: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PegawaiAvgAggregateInputType = {
    id?: true
    workAt?: true
  }

  export type PegawaiSumAggregateInputType = {
    id?: true
    workAt?: true
  }

  export type PegawaiMinAggregateInputType = {
    id?: true
    workAt?: true
    name?: true
    email?: true
    password?: true
    no?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PegawaiMaxAggregateInputType = {
    id?: true
    workAt?: true
    name?: true
    email?: true
    password?: true
    no?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PegawaiCountAggregateInputType = {
    id?: true
    workAt?: true
    name?: true
    email?: true
    password?: true
    no?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PegawaiAggregateArgs = {
    /**
     * Filter which pegawai to aggregate.
     */
    where?: pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pegawais to fetch.
     */
    orderBy?: Enumerable<pegawaiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pegawais
    **/
    _count?: true | PegawaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PegawaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PegawaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PegawaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PegawaiMaxAggregateInputType
  }

  export type GetPegawaiAggregateType<T extends PegawaiAggregateArgs> = {
        [P in keyof T & keyof AggregatePegawai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePegawai[P]>
      : GetScalarType<T[P], AggregatePegawai[P]>
  }




  export type PegawaiGroupByArgs = {
    where?: pegawaiWhereInput
    orderBy?: Enumerable<pegawaiOrderByWithAggregationInput>
    by: PegawaiScalarFieldEnum[]
    having?: pegawaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PegawaiCountAggregateInputType | true
    _avg?: PegawaiAvgAggregateInputType
    _sum?: PegawaiSumAggregateInputType
    _min?: PegawaiMinAggregateInputType
    _max?: PegawaiMaxAggregateInputType
  }


  export type PegawaiGroupByOutputType = {
    id: number
    workAt: number
    name: string
    email: string
    password: string
    no: string
    createdAt: Date
    updatedAt: Date
    _count: PegawaiCountAggregateOutputType | null
    _avg: PegawaiAvgAggregateOutputType | null
    _sum: PegawaiSumAggregateOutputType | null
    _min: PegawaiMinAggregateOutputType | null
    _max: PegawaiMaxAggregateOutputType | null
  }

  type GetPegawaiGroupByPayload<T extends PegawaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PegawaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PegawaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PegawaiGroupByOutputType[P]>
            : GetScalarType<T[P], PegawaiGroupByOutputType[P]>
        }
      >
    >


  export type pegawaiSelect = {
    id?: boolean
    workAt?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    no?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | MitraArgs
    tracking?: boolean | pegawai$trackingArgs
    konfirmasi?: boolean | pegawai$konfirmasiArgs
    _count?: boolean | PegawaiCountOutputTypeArgs
  }


  export type pegawaiInclude = {
    work?: boolean | MitraArgs
    tracking?: boolean | pegawai$trackingArgs
    konfirmasi?: boolean | pegawai$konfirmasiArgs
    _count?: boolean | PegawaiCountOutputTypeArgs
  }

  export type pegawaiGetPayload<S extends boolean | null | undefined | pegawaiArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pegawai :
    S extends undefined ? never :
    S extends { include: any } & (pegawaiArgs | pegawaiFindManyArgs)
    ? pegawai  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'work' ? MitraGetPayload<S['include'][P]> :
        P extends 'tracking' ? Array < trackingGetPayload<S['include'][P]>>  :
        P extends 'konfirmasi' ? Array < konfirmasiGetPayload<S['include'][P]>>  :
        P extends '_count' ? PegawaiCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (pegawaiArgs | pegawaiFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'work' ? MitraGetPayload<S['select'][P]> :
        P extends 'tracking' ? Array < trackingGetPayload<S['select'][P]>>  :
        P extends 'konfirmasi' ? Array < konfirmasiGetPayload<S['select'][P]>>  :
        P extends '_count' ? PegawaiCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof pegawai ? pegawai[P] : never
  } 
      : pegawai


  type pegawaiCountArgs = 
    Omit<pegawaiFindManyArgs, 'select' | 'include'> & {
      select?: PegawaiCountAggregateInputType | true
    }

  export interface pegawaiDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pegawai that matches the filter.
     * @param {pegawaiFindUniqueArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pegawaiFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pegawaiFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pegawai'> extends True ? Prisma__pegawaiClient<pegawaiGetPayload<T>> : Prisma__pegawaiClient<pegawaiGetPayload<T> | null, null>

    /**
     * Find one Pegawai that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pegawaiFindUniqueOrThrowArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pegawaiFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, pegawaiFindUniqueOrThrowArgs>
    ): Prisma__pegawaiClient<pegawaiGetPayload<T>>

    /**
     * Find the first Pegawai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiFindFirstArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pegawaiFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pegawaiFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pegawai'> extends True ? Prisma__pegawaiClient<pegawaiGetPayload<T>> : Prisma__pegawaiClient<pegawaiGetPayload<T> | null, null>

    /**
     * Find the first Pegawai that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiFindFirstOrThrowArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pegawaiFindFirstOrThrowArgs>(
      args?: SelectSubset<T, pegawaiFindFirstOrThrowArgs>
    ): Prisma__pegawaiClient<pegawaiGetPayload<T>>

    /**
     * Find zero or more Pegawais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pegawais
     * const pegawais = await prisma.pegawai.findMany()
     * 
     * // Get first 10 Pegawais
     * const pegawais = await prisma.pegawai.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pegawaiWithIdOnly = await prisma.pegawai.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends pegawaiFindManyArgs>(
      args?: SelectSubset<T, pegawaiFindManyArgs>
    ): Prisma.PrismaPromise<Array<pegawaiGetPayload<T>>>

    /**
     * Create a Pegawai.
     * @param {pegawaiCreateArgs} args - Arguments to create a Pegawai.
     * @example
     * // Create one Pegawai
     * const Pegawai = await prisma.pegawai.create({
     *   data: {
     *     // ... data to create a Pegawai
     *   }
     * })
     * 
    **/
    create<T extends pegawaiCreateArgs>(
      args: SelectSubset<T, pegawaiCreateArgs>
    ): Prisma__pegawaiClient<pegawaiGetPayload<T>>

    /**
     * Create many Pegawais.
     *     @param {pegawaiCreateManyArgs} args - Arguments to create many Pegawais.
     *     @example
     *     // Create many Pegawais
     *     const pegawai = await prisma.pegawai.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pegawaiCreateManyArgs>(
      args?: SelectSubset<T, pegawaiCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pegawai.
     * @param {pegawaiDeleteArgs} args - Arguments to delete one Pegawai.
     * @example
     * // Delete one Pegawai
     * const Pegawai = await prisma.pegawai.delete({
     *   where: {
     *     // ... filter to delete one Pegawai
     *   }
     * })
     * 
    **/
    delete<T extends pegawaiDeleteArgs>(
      args: SelectSubset<T, pegawaiDeleteArgs>
    ): Prisma__pegawaiClient<pegawaiGetPayload<T>>

    /**
     * Update one Pegawai.
     * @param {pegawaiUpdateArgs} args - Arguments to update one Pegawai.
     * @example
     * // Update one Pegawai
     * const pegawai = await prisma.pegawai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pegawaiUpdateArgs>(
      args: SelectSubset<T, pegawaiUpdateArgs>
    ): Prisma__pegawaiClient<pegawaiGetPayload<T>>

    /**
     * Delete zero or more Pegawais.
     * @param {pegawaiDeleteManyArgs} args - Arguments to filter Pegawais to delete.
     * @example
     * // Delete a few Pegawais
     * const { count } = await prisma.pegawai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pegawaiDeleteManyArgs>(
      args?: SelectSubset<T, pegawaiDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pegawais
     * const pegawai = await prisma.pegawai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pegawaiUpdateManyArgs>(
      args: SelectSubset<T, pegawaiUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pegawai.
     * @param {pegawaiUpsertArgs} args - Arguments to update or create a Pegawai.
     * @example
     * // Update or create a Pegawai
     * const pegawai = await prisma.pegawai.upsert({
     *   create: {
     *     // ... data to create a Pegawai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pegawai we want to update
     *   }
     * })
    **/
    upsert<T extends pegawaiUpsertArgs>(
      args: SelectSubset<T, pegawaiUpsertArgs>
    ): Prisma__pegawaiClient<pegawaiGetPayload<T>>

    /**
     * Count the number of Pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiCountArgs} args - Arguments to filter Pegawais to count.
     * @example
     * // Count the number of Pegawais
     * const count = await prisma.pegawai.count({
     *   where: {
     *     // ... the filter for the Pegawais we want to count
     *   }
     * })
    **/
    count<T extends pegawaiCountArgs>(
      args?: Subset<T, pegawaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PegawaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PegawaiAggregateArgs>(args: Subset<T, PegawaiAggregateArgs>): Prisma.PrismaPromise<GetPegawaiAggregateType<T>>

    /**
     * Group by Pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PegawaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PegawaiGroupByArgs['orderBy'] }
        : { orderBy?: PegawaiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PegawaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPegawaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for pegawai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pegawaiClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    work<T extends MitraArgs= {}>(args?: Subset<T, MitraArgs>): Prisma__MitraClient<MitraGetPayload<T> | Null>;

    tracking<T extends pegawai$trackingArgs= {}>(args?: Subset<T, pegawai$trackingArgs>): Prisma.PrismaPromise<Array<trackingGetPayload<T>>| Null>;

    konfirmasi<T extends pegawai$konfirmasiArgs= {}>(args?: Subset<T, pegawai$konfirmasiArgs>): Prisma.PrismaPromise<Array<konfirmasiGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pegawai base type for findUnique actions
   */
  export type pegawaiFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pegawaiInclude | null
    /**
     * Filter, which pegawai to fetch.
     */
    where: pegawaiWhereUniqueInput
  }

  /**
   * pegawai findUnique
   */
  export interface pegawaiFindUniqueArgs extends pegawaiFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pegawai findUniqueOrThrow
   */
  export type pegawaiFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pegawaiInclude | null
    /**
     * Filter, which pegawai to fetch.
     */
    where: pegawaiWhereUniqueInput
  }


  /**
   * pegawai base type for findFirst actions
   */
  export type pegawaiFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pegawaiInclude | null
    /**
     * Filter, which pegawai to fetch.
     */
    where?: pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pegawais to fetch.
     */
    orderBy?: Enumerable<pegawaiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pegawais.
     */
    cursor?: pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pegawais.
     */
    distinct?: Enumerable<PegawaiScalarFieldEnum>
  }

  /**
   * pegawai findFirst
   */
  export interface pegawaiFindFirstArgs extends pegawaiFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pegawai findFirstOrThrow
   */
  export type pegawaiFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pegawaiInclude | null
    /**
     * Filter, which pegawai to fetch.
     */
    where?: pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pegawais to fetch.
     */
    orderBy?: Enumerable<pegawaiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pegawais.
     */
    cursor?: pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pegawais.
     */
    distinct?: Enumerable<PegawaiScalarFieldEnum>
  }


  /**
   * pegawai findMany
   */
  export type pegawaiFindManyArgs = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pegawaiInclude | null
    /**
     * Filter, which pegawais to fetch.
     */
    where?: pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pegawais to fetch.
     */
    orderBy?: Enumerable<pegawaiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pegawais.
     */
    cursor?: pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pegawais.
     */
    skip?: number
    distinct?: Enumerable<PegawaiScalarFieldEnum>
  }


  /**
   * pegawai create
   */
  export type pegawaiCreateArgs = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pegawaiInclude | null
    /**
     * The data needed to create a pegawai.
     */
    data: XOR<pegawaiCreateInput, pegawaiUncheckedCreateInput>
  }


  /**
   * pegawai createMany
   */
  export type pegawaiCreateManyArgs = {
    /**
     * The data used to create many pegawais.
     */
    data: Enumerable<pegawaiCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * pegawai update
   */
  export type pegawaiUpdateArgs = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pegawaiInclude | null
    /**
     * The data needed to update a pegawai.
     */
    data: XOR<pegawaiUpdateInput, pegawaiUncheckedUpdateInput>
    /**
     * Choose, which pegawai to update.
     */
    where: pegawaiWhereUniqueInput
  }


  /**
   * pegawai updateMany
   */
  export type pegawaiUpdateManyArgs = {
    /**
     * The data used to update pegawais.
     */
    data: XOR<pegawaiUpdateManyMutationInput, pegawaiUncheckedUpdateManyInput>
    /**
     * Filter which pegawais to update
     */
    where?: pegawaiWhereInput
  }


  /**
   * pegawai upsert
   */
  export type pegawaiUpsertArgs = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pegawaiInclude | null
    /**
     * The filter to search for the pegawai to update in case it exists.
     */
    where: pegawaiWhereUniqueInput
    /**
     * In case the pegawai found by the `where` argument doesn't exist, create a new pegawai with this data.
     */
    create: XOR<pegawaiCreateInput, pegawaiUncheckedCreateInput>
    /**
     * In case the pegawai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pegawaiUpdateInput, pegawaiUncheckedUpdateInput>
  }


  /**
   * pegawai delete
   */
  export type pegawaiDeleteArgs = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pegawaiInclude | null
    /**
     * Filter which pegawai to delete.
     */
    where: pegawaiWhereUniqueInput
  }


  /**
   * pegawai deleteMany
   */
  export type pegawaiDeleteManyArgs = {
    /**
     * Filter which pegawais to delete
     */
    where?: pegawaiWhereInput
  }


  /**
   * pegawai.tracking
   */
  export type pegawai$trackingArgs = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trackingInclude | null
    where?: trackingWhereInput
    orderBy?: Enumerable<trackingOrderByWithRelationInput>
    cursor?: trackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TrackingScalarFieldEnum>
  }


  /**
   * pegawai.konfirmasi
   */
  export type pegawai$konfirmasiArgs = {
    /**
     * Select specific fields to fetch from the konfirmasi
     */
    select?: konfirmasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: konfirmasiInclude | null
    where?: konfirmasiWhereInput
    orderBy?: Enumerable<konfirmasiOrderByWithRelationInput>
    cursor?: konfirmasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<KonfirmasiScalarFieldEnum>
  }


  /**
   * pegawai without action
   */
  export type pegawaiArgs = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pegawaiInclude | null
  }



  /**
   * Model aproval
   */


  export type AggregateAproval = {
    _count: AprovalCountAggregateOutputType | null
    _avg: AprovalAvgAggregateOutputType | null
    _sum: AprovalSumAggregateOutputType | null
    _min: AprovalMinAggregateOutputType | null
    _max: AprovalMaxAggregateOutputType | null
  }

  export type AprovalAvgAggregateOutputType = {
    id: number | null
    accid: number | null
    diacc_oleh: number | null
  }

  export type AprovalSumAggregateOutputType = {
    id: number | null
    accid: number | null
    diacc_oleh: number | null
  }

  export type AprovalMinAggregateOutputType = {
    id: number | null
    accid: number | null
    diacc_oleh: number | null
  }

  export type AprovalMaxAggregateOutputType = {
    id: number | null
    accid: number | null
    diacc_oleh: number | null
  }

  export type AprovalCountAggregateOutputType = {
    id: number
    accid: number
    diacc_oleh: number
    _all: number
  }


  export type AprovalAvgAggregateInputType = {
    id?: true
    accid?: true
    diacc_oleh?: true
  }

  export type AprovalSumAggregateInputType = {
    id?: true
    accid?: true
    diacc_oleh?: true
  }

  export type AprovalMinAggregateInputType = {
    id?: true
    accid?: true
    diacc_oleh?: true
  }

  export type AprovalMaxAggregateInputType = {
    id?: true
    accid?: true
    diacc_oleh?: true
  }

  export type AprovalCountAggregateInputType = {
    id?: true
    accid?: true
    diacc_oleh?: true
    _all?: true
  }

  export type AprovalAggregateArgs = {
    /**
     * Filter which aproval to aggregate.
     */
    where?: aprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aprovals to fetch.
     */
    orderBy?: Enumerable<aprovalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aprovals
    **/
    _count?: true | AprovalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AprovalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AprovalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AprovalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AprovalMaxAggregateInputType
  }

  export type GetAprovalAggregateType<T extends AprovalAggregateArgs> = {
        [P in keyof T & keyof AggregateAproval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAproval[P]>
      : GetScalarType<T[P], AggregateAproval[P]>
  }




  export type AprovalGroupByArgs = {
    where?: aprovalWhereInput
    orderBy?: Enumerable<aprovalOrderByWithAggregationInput>
    by: AprovalScalarFieldEnum[]
    having?: aprovalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AprovalCountAggregateInputType | true
    _avg?: AprovalAvgAggregateInputType
    _sum?: AprovalSumAggregateInputType
    _min?: AprovalMinAggregateInputType
    _max?: AprovalMaxAggregateInputType
  }


  export type AprovalGroupByOutputType = {
    id: number
    accid: number
    diacc_oleh: number
    _count: AprovalCountAggregateOutputType | null
    _avg: AprovalAvgAggregateOutputType | null
    _sum: AprovalSumAggregateOutputType | null
    _min: AprovalMinAggregateOutputType | null
    _max: AprovalMaxAggregateOutputType | null
  }

  type GetAprovalGroupByPayload<T extends AprovalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AprovalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AprovalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AprovalGroupByOutputType[P]>
            : GetScalarType<T[P], AprovalGroupByOutputType[P]>
        }
      >
    >


  export type aprovalSelect = {
    id?: boolean
    accid?: boolean
    diacc_oleh?: boolean
    acc?: boolean | MitraArgs
    admin?: boolean | AdminArgs
  }


  export type aprovalInclude = {
    acc?: boolean | MitraArgs
    admin?: boolean | AdminArgs
  }

  export type aprovalGetPayload<S extends boolean | null | undefined | aprovalArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? aproval :
    S extends undefined ? never :
    S extends { include: any } & (aprovalArgs | aprovalFindManyArgs)
    ? aproval  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'acc' ? MitraGetPayload<S['include'][P]> :
        P extends 'admin' ? AdminGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (aprovalArgs | aprovalFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'acc' ? MitraGetPayload<S['select'][P]> :
        P extends 'admin' ? AdminGetPayload<S['select'][P]> :  P extends keyof aproval ? aproval[P] : never
  } 
      : aproval


  type aprovalCountArgs = 
    Omit<aprovalFindManyArgs, 'select' | 'include'> & {
      select?: AprovalCountAggregateInputType | true
    }

  export interface aprovalDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Aproval that matches the filter.
     * @param {aprovalFindUniqueArgs} args - Arguments to find a Aproval
     * @example
     * // Get one Aproval
     * const aproval = await prisma.aproval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends aprovalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, aprovalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'aproval'> extends True ? Prisma__aprovalClient<aprovalGetPayload<T>> : Prisma__aprovalClient<aprovalGetPayload<T> | null, null>

    /**
     * Find one Aproval that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {aprovalFindUniqueOrThrowArgs} args - Arguments to find a Aproval
     * @example
     * // Get one Aproval
     * const aproval = await prisma.aproval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends aprovalFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, aprovalFindUniqueOrThrowArgs>
    ): Prisma__aprovalClient<aprovalGetPayload<T>>

    /**
     * Find the first Aproval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aprovalFindFirstArgs} args - Arguments to find a Aproval
     * @example
     * // Get one Aproval
     * const aproval = await prisma.aproval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends aprovalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, aprovalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'aproval'> extends True ? Prisma__aprovalClient<aprovalGetPayload<T>> : Prisma__aprovalClient<aprovalGetPayload<T> | null, null>

    /**
     * Find the first Aproval that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aprovalFindFirstOrThrowArgs} args - Arguments to find a Aproval
     * @example
     * // Get one Aproval
     * const aproval = await prisma.aproval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends aprovalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, aprovalFindFirstOrThrowArgs>
    ): Prisma__aprovalClient<aprovalGetPayload<T>>

    /**
     * Find zero or more Aprovals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aprovalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aprovals
     * const aprovals = await prisma.aproval.findMany()
     * 
     * // Get first 10 Aprovals
     * const aprovals = await prisma.aproval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aprovalWithIdOnly = await prisma.aproval.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends aprovalFindManyArgs>(
      args?: SelectSubset<T, aprovalFindManyArgs>
    ): Prisma.PrismaPromise<Array<aprovalGetPayload<T>>>

    /**
     * Create a Aproval.
     * @param {aprovalCreateArgs} args - Arguments to create a Aproval.
     * @example
     * // Create one Aproval
     * const Aproval = await prisma.aproval.create({
     *   data: {
     *     // ... data to create a Aproval
     *   }
     * })
     * 
    **/
    create<T extends aprovalCreateArgs>(
      args: SelectSubset<T, aprovalCreateArgs>
    ): Prisma__aprovalClient<aprovalGetPayload<T>>

    /**
     * Create many Aprovals.
     *     @param {aprovalCreateManyArgs} args - Arguments to create many Aprovals.
     *     @example
     *     // Create many Aprovals
     *     const aproval = await prisma.aproval.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends aprovalCreateManyArgs>(
      args?: SelectSubset<T, aprovalCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aproval.
     * @param {aprovalDeleteArgs} args - Arguments to delete one Aproval.
     * @example
     * // Delete one Aproval
     * const Aproval = await prisma.aproval.delete({
     *   where: {
     *     // ... filter to delete one Aproval
     *   }
     * })
     * 
    **/
    delete<T extends aprovalDeleteArgs>(
      args: SelectSubset<T, aprovalDeleteArgs>
    ): Prisma__aprovalClient<aprovalGetPayload<T>>

    /**
     * Update one Aproval.
     * @param {aprovalUpdateArgs} args - Arguments to update one Aproval.
     * @example
     * // Update one Aproval
     * const aproval = await prisma.aproval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends aprovalUpdateArgs>(
      args: SelectSubset<T, aprovalUpdateArgs>
    ): Prisma__aprovalClient<aprovalGetPayload<T>>

    /**
     * Delete zero or more Aprovals.
     * @param {aprovalDeleteManyArgs} args - Arguments to filter Aprovals to delete.
     * @example
     * // Delete a few Aprovals
     * const { count } = await prisma.aproval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends aprovalDeleteManyArgs>(
      args?: SelectSubset<T, aprovalDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aprovals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aprovalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aprovals
     * const aproval = await prisma.aproval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends aprovalUpdateManyArgs>(
      args: SelectSubset<T, aprovalUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aproval.
     * @param {aprovalUpsertArgs} args - Arguments to update or create a Aproval.
     * @example
     * // Update or create a Aproval
     * const aproval = await prisma.aproval.upsert({
     *   create: {
     *     // ... data to create a Aproval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aproval we want to update
     *   }
     * })
    **/
    upsert<T extends aprovalUpsertArgs>(
      args: SelectSubset<T, aprovalUpsertArgs>
    ): Prisma__aprovalClient<aprovalGetPayload<T>>

    /**
     * Count the number of Aprovals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aprovalCountArgs} args - Arguments to filter Aprovals to count.
     * @example
     * // Count the number of Aprovals
     * const count = await prisma.aproval.count({
     *   where: {
     *     // ... the filter for the Aprovals we want to count
     *   }
     * })
    **/
    count<T extends aprovalCountArgs>(
      args?: Subset<T, aprovalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AprovalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aproval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AprovalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AprovalAggregateArgs>(args: Subset<T, AprovalAggregateArgs>): Prisma.PrismaPromise<GetAprovalAggregateType<T>>

    /**
     * Group by Aproval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AprovalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AprovalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AprovalGroupByArgs['orderBy'] }
        : { orderBy?: AprovalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AprovalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAprovalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for aproval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__aprovalClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    acc<T extends MitraArgs= {}>(args?: Subset<T, MitraArgs>): Prisma__MitraClient<MitraGetPayload<T> | Null>;

    admin<T extends AdminArgs= {}>(args?: Subset<T, AdminArgs>): Prisma__AdminClient<AdminGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * aproval base type for findUnique actions
   */
  export type aprovalFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the aproval
     */
    select?: aprovalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aprovalInclude | null
    /**
     * Filter, which aproval to fetch.
     */
    where: aprovalWhereUniqueInput
  }

  /**
   * aproval findUnique
   */
  export interface aprovalFindUniqueArgs extends aprovalFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * aproval findUniqueOrThrow
   */
  export type aprovalFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the aproval
     */
    select?: aprovalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aprovalInclude | null
    /**
     * Filter, which aproval to fetch.
     */
    where: aprovalWhereUniqueInput
  }


  /**
   * aproval base type for findFirst actions
   */
  export type aprovalFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the aproval
     */
    select?: aprovalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aprovalInclude | null
    /**
     * Filter, which aproval to fetch.
     */
    where?: aprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aprovals to fetch.
     */
    orderBy?: Enumerable<aprovalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aprovals.
     */
    cursor?: aprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aprovals.
     */
    distinct?: Enumerable<AprovalScalarFieldEnum>
  }

  /**
   * aproval findFirst
   */
  export interface aprovalFindFirstArgs extends aprovalFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * aproval findFirstOrThrow
   */
  export type aprovalFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the aproval
     */
    select?: aprovalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aprovalInclude | null
    /**
     * Filter, which aproval to fetch.
     */
    where?: aprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aprovals to fetch.
     */
    orderBy?: Enumerable<aprovalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aprovals.
     */
    cursor?: aprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aprovals.
     */
    distinct?: Enumerable<AprovalScalarFieldEnum>
  }


  /**
   * aproval findMany
   */
  export type aprovalFindManyArgs = {
    /**
     * Select specific fields to fetch from the aproval
     */
    select?: aprovalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aprovalInclude | null
    /**
     * Filter, which aprovals to fetch.
     */
    where?: aprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aprovals to fetch.
     */
    orderBy?: Enumerable<aprovalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aprovals.
     */
    cursor?: aprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aprovals.
     */
    skip?: number
    distinct?: Enumerable<AprovalScalarFieldEnum>
  }


  /**
   * aproval create
   */
  export type aprovalCreateArgs = {
    /**
     * Select specific fields to fetch from the aproval
     */
    select?: aprovalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aprovalInclude | null
    /**
     * The data needed to create a aproval.
     */
    data: XOR<aprovalCreateInput, aprovalUncheckedCreateInput>
  }


  /**
   * aproval createMany
   */
  export type aprovalCreateManyArgs = {
    /**
     * The data used to create many aprovals.
     */
    data: Enumerable<aprovalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * aproval update
   */
  export type aprovalUpdateArgs = {
    /**
     * Select specific fields to fetch from the aproval
     */
    select?: aprovalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aprovalInclude | null
    /**
     * The data needed to update a aproval.
     */
    data: XOR<aprovalUpdateInput, aprovalUncheckedUpdateInput>
    /**
     * Choose, which aproval to update.
     */
    where: aprovalWhereUniqueInput
  }


  /**
   * aproval updateMany
   */
  export type aprovalUpdateManyArgs = {
    /**
     * The data used to update aprovals.
     */
    data: XOR<aprovalUpdateManyMutationInput, aprovalUncheckedUpdateManyInput>
    /**
     * Filter which aprovals to update
     */
    where?: aprovalWhereInput
  }


  /**
   * aproval upsert
   */
  export type aprovalUpsertArgs = {
    /**
     * Select specific fields to fetch from the aproval
     */
    select?: aprovalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aprovalInclude | null
    /**
     * The filter to search for the aproval to update in case it exists.
     */
    where: aprovalWhereUniqueInput
    /**
     * In case the aproval found by the `where` argument doesn't exist, create a new aproval with this data.
     */
    create: XOR<aprovalCreateInput, aprovalUncheckedCreateInput>
    /**
     * In case the aproval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aprovalUpdateInput, aprovalUncheckedUpdateInput>
  }


  /**
   * aproval delete
   */
  export type aprovalDeleteArgs = {
    /**
     * Select specific fields to fetch from the aproval
     */
    select?: aprovalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aprovalInclude | null
    /**
     * Filter which aproval to delete.
     */
    where: aprovalWhereUniqueInput
  }


  /**
   * aproval deleteMany
   */
  export type aprovalDeleteManyArgs = {
    /**
     * Filter which aprovals to delete
     */
    where?: aprovalWhereInput
  }


  /**
   * aproval without action
   */
  export type aprovalArgs = {
    /**
     * Select specific fields to fetch from the aproval
     */
    select?: aprovalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aprovalInclude | null
  }



  /**
   * Model Rejected
   */


  export type AggregateRejected = {
    _count: RejectedCountAggregateOutputType | null
    _avg: RejectedAvgAggregateOutputType | null
    _sum: RejectedSumAggregateOutputType | null
    _min: RejectedMinAggregateOutputType | null
    _max: RejectedMaxAggregateOutputType | null
  }

  export type RejectedAvgAggregateOutputType = {
    id: number | null
    rejected_oleh: number | null
  }

  export type RejectedSumAggregateOutputType = {
    id: number | null
    rejected_oleh: number | null
  }

  export type RejectedMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    rejected_oleh: number | null
  }

  export type RejectedMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    rejected_oleh: number | null
  }

  export type RejectedCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    rejected_oleh: number
    _all: number
  }


  export type RejectedAvgAggregateInputType = {
    id?: true
    rejected_oleh?: true
  }

  export type RejectedSumAggregateInputType = {
    id?: true
    rejected_oleh?: true
  }

  export type RejectedMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    rejected_oleh?: true
  }

  export type RejectedMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    rejected_oleh?: true
  }

  export type RejectedCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    rejected_oleh?: true
    _all?: true
  }

  export type RejectedAggregateArgs = {
    /**
     * Filter which Rejected to aggregate.
     */
    where?: RejectedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rejecteds to fetch.
     */
    orderBy?: Enumerable<RejectedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RejectedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rejecteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rejecteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rejecteds
    **/
    _count?: true | RejectedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RejectedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RejectedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RejectedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RejectedMaxAggregateInputType
  }

  export type GetRejectedAggregateType<T extends RejectedAggregateArgs> = {
        [P in keyof T & keyof AggregateRejected]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRejected[P]>
      : GetScalarType<T[P], AggregateRejected[P]>
  }




  export type RejectedGroupByArgs = {
    where?: RejectedWhereInput
    orderBy?: Enumerable<RejectedOrderByWithAggregationInput>
    by: RejectedScalarFieldEnum[]
    having?: RejectedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RejectedCountAggregateInputType | true
    _avg?: RejectedAvgAggregateInputType
    _sum?: RejectedSumAggregateInputType
    _min?: RejectedMinAggregateInputType
    _max?: RejectedMaxAggregateInputType
  }


  export type RejectedGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    rejected_oleh: number
    _count: RejectedCountAggregateOutputType | null
    _avg: RejectedAvgAggregateOutputType | null
    _sum: RejectedSumAggregateOutputType | null
    _min: RejectedMinAggregateOutputType | null
    _max: RejectedMaxAggregateOutputType | null
  }

  type GetRejectedGroupByPayload<T extends RejectedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RejectedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RejectedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RejectedGroupByOutputType[P]>
            : GetScalarType<T[P], RejectedGroupByOutputType[P]>
        }
      >
    >


  export type RejectedSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    rejected_oleh?: boolean
    reject?: boolean | AdminArgs
  }


  export type RejectedInclude = {
    reject?: boolean | AdminArgs
  }

  export type RejectedGetPayload<S extends boolean | null | undefined | RejectedArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Rejected :
    S extends undefined ? never :
    S extends { include: any } & (RejectedArgs | RejectedFindManyArgs)
    ? Rejected  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'reject' ? AdminGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RejectedArgs | RejectedFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'reject' ? AdminGetPayload<S['select'][P]> :  P extends keyof Rejected ? Rejected[P] : never
  } 
      : Rejected


  type RejectedCountArgs = 
    Omit<RejectedFindManyArgs, 'select' | 'include'> & {
      select?: RejectedCountAggregateInputType | true
    }

  export interface RejectedDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Rejected that matches the filter.
     * @param {RejectedFindUniqueArgs} args - Arguments to find a Rejected
     * @example
     * // Get one Rejected
     * const rejected = await prisma.rejected.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RejectedFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RejectedFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Rejected'> extends True ? Prisma__RejectedClient<RejectedGetPayload<T>> : Prisma__RejectedClient<RejectedGetPayload<T> | null, null>

    /**
     * Find one Rejected that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RejectedFindUniqueOrThrowArgs} args - Arguments to find a Rejected
     * @example
     * // Get one Rejected
     * const rejected = await prisma.rejected.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RejectedFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RejectedFindUniqueOrThrowArgs>
    ): Prisma__RejectedClient<RejectedGetPayload<T>>

    /**
     * Find the first Rejected that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedFindFirstArgs} args - Arguments to find a Rejected
     * @example
     * // Get one Rejected
     * const rejected = await prisma.rejected.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RejectedFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RejectedFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Rejected'> extends True ? Prisma__RejectedClient<RejectedGetPayload<T>> : Prisma__RejectedClient<RejectedGetPayload<T> | null, null>

    /**
     * Find the first Rejected that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedFindFirstOrThrowArgs} args - Arguments to find a Rejected
     * @example
     * // Get one Rejected
     * const rejected = await prisma.rejected.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RejectedFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RejectedFindFirstOrThrowArgs>
    ): Prisma__RejectedClient<RejectedGetPayload<T>>

    /**
     * Find zero or more Rejecteds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rejecteds
     * const rejecteds = await prisma.rejected.findMany()
     * 
     * // Get first 10 Rejecteds
     * const rejecteds = await prisma.rejected.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rejectedWithIdOnly = await prisma.rejected.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RejectedFindManyArgs>(
      args?: SelectSubset<T, RejectedFindManyArgs>
    ): Prisma.PrismaPromise<Array<RejectedGetPayload<T>>>

    /**
     * Create a Rejected.
     * @param {RejectedCreateArgs} args - Arguments to create a Rejected.
     * @example
     * // Create one Rejected
     * const Rejected = await prisma.rejected.create({
     *   data: {
     *     // ... data to create a Rejected
     *   }
     * })
     * 
    **/
    create<T extends RejectedCreateArgs>(
      args: SelectSubset<T, RejectedCreateArgs>
    ): Prisma__RejectedClient<RejectedGetPayload<T>>

    /**
     * Create many Rejecteds.
     *     @param {RejectedCreateManyArgs} args - Arguments to create many Rejecteds.
     *     @example
     *     // Create many Rejecteds
     *     const rejected = await prisma.rejected.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RejectedCreateManyArgs>(
      args?: SelectSubset<T, RejectedCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rejected.
     * @param {RejectedDeleteArgs} args - Arguments to delete one Rejected.
     * @example
     * // Delete one Rejected
     * const Rejected = await prisma.rejected.delete({
     *   where: {
     *     // ... filter to delete one Rejected
     *   }
     * })
     * 
    **/
    delete<T extends RejectedDeleteArgs>(
      args: SelectSubset<T, RejectedDeleteArgs>
    ): Prisma__RejectedClient<RejectedGetPayload<T>>

    /**
     * Update one Rejected.
     * @param {RejectedUpdateArgs} args - Arguments to update one Rejected.
     * @example
     * // Update one Rejected
     * const rejected = await prisma.rejected.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RejectedUpdateArgs>(
      args: SelectSubset<T, RejectedUpdateArgs>
    ): Prisma__RejectedClient<RejectedGetPayload<T>>

    /**
     * Delete zero or more Rejecteds.
     * @param {RejectedDeleteManyArgs} args - Arguments to filter Rejecteds to delete.
     * @example
     * // Delete a few Rejecteds
     * const { count } = await prisma.rejected.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RejectedDeleteManyArgs>(
      args?: SelectSubset<T, RejectedDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rejecteds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rejecteds
     * const rejected = await prisma.rejected.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RejectedUpdateManyArgs>(
      args: SelectSubset<T, RejectedUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rejected.
     * @param {RejectedUpsertArgs} args - Arguments to update or create a Rejected.
     * @example
     * // Update or create a Rejected
     * const rejected = await prisma.rejected.upsert({
     *   create: {
     *     // ... data to create a Rejected
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rejected we want to update
     *   }
     * })
    **/
    upsert<T extends RejectedUpsertArgs>(
      args: SelectSubset<T, RejectedUpsertArgs>
    ): Prisma__RejectedClient<RejectedGetPayload<T>>

    /**
     * Count the number of Rejecteds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedCountArgs} args - Arguments to filter Rejecteds to count.
     * @example
     * // Count the number of Rejecteds
     * const count = await prisma.rejected.count({
     *   where: {
     *     // ... the filter for the Rejecteds we want to count
     *   }
     * })
    **/
    count<T extends RejectedCountArgs>(
      args?: Subset<T, RejectedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RejectedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rejected.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RejectedAggregateArgs>(args: Subset<T, RejectedAggregateArgs>): Prisma.PrismaPromise<GetRejectedAggregateType<T>>

    /**
     * Group by Rejected.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RejectedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RejectedGroupByArgs['orderBy'] }
        : { orderBy?: RejectedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RejectedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRejectedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Rejected.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RejectedClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    reject<T extends AdminArgs= {}>(args?: Subset<T, AdminArgs>): Prisma__AdminClient<AdminGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Rejected base type for findUnique actions
   */
  export type RejectedFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Rejected
     */
    select?: RejectedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RejectedInclude | null
    /**
     * Filter, which Rejected to fetch.
     */
    where: RejectedWhereUniqueInput
  }

  /**
   * Rejected findUnique
   */
  export interface RejectedFindUniqueArgs extends RejectedFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Rejected findUniqueOrThrow
   */
  export type RejectedFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Rejected
     */
    select?: RejectedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RejectedInclude | null
    /**
     * Filter, which Rejected to fetch.
     */
    where: RejectedWhereUniqueInput
  }


  /**
   * Rejected base type for findFirst actions
   */
  export type RejectedFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Rejected
     */
    select?: RejectedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RejectedInclude | null
    /**
     * Filter, which Rejected to fetch.
     */
    where?: RejectedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rejecteds to fetch.
     */
    orderBy?: Enumerable<RejectedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rejecteds.
     */
    cursor?: RejectedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rejecteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rejecteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rejecteds.
     */
    distinct?: Enumerable<RejectedScalarFieldEnum>
  }

  /**
   * Rejected findFirst
   */
  export interface RejectedFindFirstArgs extends RejectedFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Rejected findFirstOrThrow
   */
  export type RejectedFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Rejected
     */
    select?: RejectedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RejectedInclude | null
    /**
     * Filter, which Rejected to fetch.
     */
    where?: RejectedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rejecteds to fetch.
     */
    orderBy?: Enumerable<RejectedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rejecteds.
     */
    cursor?: RejectedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rejecteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rejecteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rejecteds.
     */
    distinct?: Enumerable<RejectedScalarFieldEnum>
  }


  /**
   * Rejected findMany
   */
  export type RejectedFindManyArgs = {
    /**
     * Select specific fields to fetch from the Rejected
     */
    select?: RejectedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RejectedInclude | null
    /**
     * Filter, which Rejecteds to fetch.
     */
    where?: RejectedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rejecteds to fetch.
     */
    orderBy?: Enumerable<RejectedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rejecteds.
     */
    cursor?: RejectedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rejecteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rejecteds.
     */
    skip?: number
    distinct?: Enumerable<RejectedScalarFieldEnum>
  }


  /**
   * Rejected create
   */
  export type RejectedCreateArgs = {
    /**
     * Select specific fields to fetch from the Rejected
     */
    select?: RejectedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RejectedInclude | null
    /**
     * The data needed to create a Rejected.
     */
    data: XOR<RejectedCreateInput, RejectedUncheckedCreateInput>
  }


  /**
   * Rejected createMany
   */
  export type RejectedCreateManyArgs = {
    /**
     * The data used to create many Rejecteds.
     */
    data: Enumerable<RejectedCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Rejected update
   */
  export type RejectedUpdateArgs = {
    /**
     * Select specific fields to fetch from the Rejected
     */
    select?: RejectedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RejectedInclude | null
    /**
     * The data needed to update a Rejected.
     */
    data: XOR<RejectedUpdateInput, RejectedUncheckedUpdateInput>
    /**
     * Choose, which Rejected to update.
     */
    where: RejectedWhereUniqueInput
  }


  /**
   * Rejected updateMany
   */
  export type RejectedUpdateManyArgs = {
    /**
     * The data used to update Rejecteds.
     */
    data: XOR<RejectedUpdateManyMutationInput, RejectedUncheckedUpdateManyInput>
    /**
     * Filter which Rejecteds to update
     */
    where?: RejectedWhereInput
  }


  /**
   * Rejected upsert
   */
  export type RejectedUpsertArgs = {
    /**
     * Select specific fields to fetch from the Rejected
     */
    select?: RejectedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RejectedInclude | null
    /**
     * The filter to search for the Rejected to update in case it exists.
     */
    where: RejectedWhereUniqueInput
    /**
     * In case the Rejected found by the `where` argument doesn't exist, create a new Rejected with this data.
     */
    create: XOR<RejectedCreateInput, RejectedUncheckedCreateInput>
    /**
     * In case the Rejected was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RejectedUpdateInput, RejectedUncheckedUpdateInput>
  }


  /**
   * Rejected delete
   */
  export type RejectedDeleteArgs = {
    /**
     * Select specific fields to fetch from the Rejected
     */
    select?: RejectedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RejectedInclude | null
    /**
     * Filter which Rejected to delete.
     */
    where: RejectedWhereUniqueInput
  }


  /**
   * Rejected deleteMany
   */
  export type RejectedDeleteManyArgs = {
    /**
     * Filter which Rejecteds to delete
     */
    where?: RejectedWhereInput
  }


  /**
   * Rejected without action
   */
  export type RejectedArgs = {
    /**
     * Select specific fields to fetch from the Rejected
     */
    select?: RejectedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RejectedInclude | null
  }



  /**
   * Model Admin
   */


  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    deskripsi: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs = {
    where?: AdminWhereInput
    orderBy?: Enumerable<AdminOrderByWithAggregationInput>
    by: AdminScalarFieldEnum[]
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }


  export type AdminGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    deskripsi: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    approval?: boolean | Admin$approvalArgs
    rejected?: boolean | Admin$rejectedArgs
    _count?: boolean | AdminCountOutputTypeArgs
  }


  export type AdminInclude = {
    approval?: boolean | Admin$approvalArgs
    rejected?: boolean | Admin$rejectedArgs
    _count?: boolean | AdminCountOutputTypeArgs
  }

  export type AdminGetPayload<S extends boolean | null | undefined | AdminArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Admin :
    S extends undefined ? never :
    S extends { include: any } & (AdminArgs | AdminFindManyArgs)
    ? Admin  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'approval' ? Array < aprovalGetPayload<S['include'][P]>>  :
        P extends 'rejected' ? Array < RejectedGetPayload<S['include'][P]>>  :
        P extends '_count' ? AdminCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AdminArgs | AdminFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'approval' ? Array < aprovalGetPayload<S['select'][P]>>  :
        P extends 'rejected' ? Array < RejectedGetPayload<S['select'][P]>>  :
        P extends '_count' ? AdminCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Admin ? Admin[P] : never
  } 
      : Admin


  type AdminCountArgs = 
    Omit<AdminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdminFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Admin'> extends True ? Prisma__AdminClient<AdminGetPayload<T>> : Prisma__AdminClient<AdminGetPayload<T> | null, null>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdminFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Admin'> extends True ? Prisma__AdminClient<AdminGetPayload<T>> : Prisma__AdminClient<AdminGetPayload<T> | null, null>

    /**
     * Find the first Admin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs>(
      args?: SelectSubset<T, AdminFindManyArgs>
    ): Prisma.PrismaPromise<Array<AdminGetPayload<T>>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs>(
      args: SelectSubset<T, AdminCreateArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs>(
      args?: SelectSubset<T, AdminCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs>(
      args: SelectSubset<T, AdminDeleteArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs>(
      args: SelectSubset<T, AdminUpdateArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs>(
      args?: SelectSubset<T, AdminDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs>(
      args: SelectSubset<T, AdminUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs>(
      args: SelectSubset<T, AdminUpsertArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdminClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    approval<T extends Admin$approvalArgs= {}>(args?: Subset<T, Admin$approvalArgs>): Prisma.PrismaPromise<Array<aprovalGetPayload<T>>| Null>;

    rejected<T extends Admin$rejectedArgs= {}>(args?: Subset<T, Admin$rejectedArgs>): Prisma.PrismaPromise<Array<RejectedGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Admin base type for findUnique actions
   */
  export type AdminFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUnique
   */
  export interface AdminFindUniqueArgs extends AdminFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin base type for findFirst actions
   */
  export type AdminFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: Enumerable<AdminScalarFieldEnum>
  }

  /**
   * Admin findFirst
   */
  export interface AdminFindFirstArgs extends AdminFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs = {
    /**
     * The data used to create many Admins.
     */
    data: Enumerable<AdminCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }


  /**
   * Admin.approval
   */
  export type Admin$approvalArgs = {
    /**
     * Select specific fields to fetch from the aproval
     */
    select?: aprovalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: aprovalInclude | null
    where?: aprovalWhereInput
    orderBy?: Enumerable<aprovalOrderByWithRelationInput>
    cursor?: aprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AprovalScalarFieldEnum>
  }


  /**
   * Admin.rejected
   */
  export type Admin$rejectedArgs = {
    /**
     * Select specific fields to fetch from the Rejected
     */
    select?: RejectedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RejectedInclude | null
    where?: RejectedWhereInput
    orderBy?: Enumerable<RejectedOrderByWithRelationInput>
    cursor?: RejectedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RejectedScalarFieldEnum>
  }


  /**
   * Admin without action
   */
  export type AdminArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
  }



  /**
   * Model detail_pencatatan
   */


  export type AggregateDetail_pencatatan = {
    _count: Detail_pencatatanCountAggregateOutputType | null
    _avg: Detail_pencatatanAvgAggregateOutputType | null
    _sum: Detail_pencatatanSumAggregateOutputType | null
    _min: Detail_pencatatanMinAggregateOutputType | null
    _max: Detail_pencatatanMaxAggregateOutputType | null
  }

  export type Detail_pencatatanAvgAggregateOutputType = {
    id: number | null
    pemasukan: number | null
    pengeluaran: number | null
    saldo: number | null
    detail_dari: number | null
  }

  export type Detail_pencatatanSumAggregateOutputType = {
    id: number | null
    pemasukan: number | null
    pengeluaran: number | null
    saldo: number | null
    detail_dari: number | null
  }

  export type Detail_pencatatanMinAggregateOutputType = {
    id: number | null
    tanggal: Date | null
    keterangan: string | null
    pemasukan: number | null
    pengeluaran: number | null
    saldo: number | null
    detail_dari: number | null
  }

  export type Detail_pencatatanMaxAggregateOutputType = {
    id: number | null
    tanggal: Date | null
    keterangan: string | null
    pemasukan: number | null
    pengeluaran: number | null
    saldo: number | null
    detail_dari: number | null
  }

  export type Detail_pencatatanCountAggregateOutputType = {
    id: number
    tanggal: number
    keterangan: number
    pemasukan: number
    pengeluaran: number
    saldo: number
    detail_dari: number
    _all: number
  }


  export type Detail_pencatatanAvgAggregateInputType = {
    id?: true
    pemasukan?: true
    pengeluaran?: true
    saldo?: true
    detail_dari?: true
  }

  export type Detail_pencatatanSumAggregateInputType = {
    id?: true
    pemasukan?: true
    pengeluaran?: true
    saldo?: true
    detail_dari?: true
  }

  export type Detail_pencatatanMinAggregateInputType = {
    id?: true
    tanggal?: true
    keterangan?: true
    pemasukan?: true
    pengeluaran?: true
    saldo?: true
    detail_dari?: true
  }

  export type Detail_pencatatanMaxAggregateInputType = {
    id?: true
    tanggal?: true
    keterangan?: true
    pemasukan?: true
    pengeluaran?: true
    saldo?: true
    detail_dari?: true
  }

  export type Detail_pencatatanCountAggregateInputType = {
    id?: true
    tanggal?: true
    keterangan?: true
    pemasukan?: true
    pengeluaran?: true
    saldo?: true
    detail_dari?: true
    _all?: true
  }

  export type Detail_pencatatanAggregateArgs = {
    /**
     * Filter which detail_pencatatan to aggregate.
     */
    where?: detail_pencatatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_pencatatans to fetch.
     */
    orderBy?: Enumerable<detail_pencatatanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detail_pencatatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_pencatatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_pencatatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detail_pencatatans
    **/
    _count?: true | Detail_pencatatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detail_pencatatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detail_pencatatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detail_pencatatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detail_pencatatanMaxAggregateInputType
  }

  export type GetDetail_pencatatanAggregateType<T extends Detail_pencatatanAggregateArgs> = {
        [P in keyof T & keyof AggregateDetail_pencatatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetail_pencatatan[P]>
      : GetScalarType<T[P], AggregateDetail_pencatatan[P]>
  }




  export type Detail_pencatatanGroupByArgs = {
    where?: detail_pencatatanWhereInput
    orderBy?: Enumerable<detail_pencatatanOrderByWithAggregationInput>
    by: Detail_pencatatanScalarFieldEnum[]
    having?: detail_pencatatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detail_pencatatanCountAggregateInputType | true
    _avg?: Detail_pencatatanAvgAggregateInputType
    _sum?: Detail_pencatatanSumAggregateInputType
    _min?: Detail_pencatatanMinAggregateInputType
    _max?: Detail_pencatatanMaxAggregateInputType
  }


  export type Detail_pencatatanGroupByOutputType = {
    id: number
    tanggal: Date
    keterangan: string
    pemasukan: number
    pengeluaran: number
    saldo: number
    detail_dari: number
    _count: Detail_pencatatanCountAggregateOutputType | null
    _avg: Detail_pencatatanAvgAggregateOutputType | null
    _sum: Detail_pencatatanSumAggregateOutputType | null
    _min: Detail_pencatatanMinAggregateOutputType | null
    _max: Detail_pencatatanMaxAggregateOutputType | null
  }

  type GetDetail_pencatatanGroupByPayload<T extends Detail_pencatatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Detail_pencatatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detail_pencatatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detail_pencatatanGroupByOutputType[P]>
            : GetScalarType<T[P], Detail_pencatatanGroupByOutputType[P]>
        }
      >
    >


  export type detail_pencatatanSelect = {
    id?: boolean
    tanggal?: boolean
    keterangan?: boolean
    pemasukan?: boolean
    pengeluaran?: boolean
    saldo?: boolean
    detail_dari?: boolean
    catat?: boolean | pencatatanArgs
  }


  export type detail_pencatatanInclude = {
    catat?: boolean | pencatatanArgs
  }

  export type detail_pencatatanGetPayload<S extends boolean | null | undefined | detail_pencatatanArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? detail_pencatatan :
    S extends undefined ? never :
    S extends { include: any } & (detail_pencatatanArgs | detail_pencatatanFindManyArgs)
    ? detail_pencatatan  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'catat' ? pencatatanGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (detail_pencatatanArgs | detail_pencatatanFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'catat' ? pencatatanGetPayload<S['select'][P]> :  P extends keyof detail_pencatatan ? detail_pencatatan[P] : never
  } 
      : detail_pencatatan


  type detail_pencatatanCountArgs = 
    Omit<detail_pencatatanFindManyArgs, 'select' | 'include'> & {
      select?: Detail_pencatatanCountAggregateInputType | true
    }

  export interface detail_pencatatanDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Detail_pencatatan that matches the filter.
     * @param {detail_pencatatanFindUniqueArgs} args - Arguments to find a Detail_pencatatan
     * @example
     * // Get one Detail_pencatatan
     * const detail_pencatatan = await prisma.detail_pencatatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends detail_pencatatanFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, detail_pencatatanFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'detail_pencatatan'> extends True ? Prisma__detail_pencatatanClient<detail_pencatatanGetPayload<T>> : Prisma__detail_pencatatanClient<detail_pencatatanGetPayload<T> | null, null>

    /**
     * Find one Detail_pencatatan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {detail_pencatatanFindUniqueOrThrowArgs} args - Arguments to find a Detail_pencatatan
     * @example
     * // Get one Detail_pencatatan
     * const detail_pencatatan = await prisma.detail_pencatatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends detail_pencatatanFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, detail_pencatatanFindUniqueOrThrowArgs>
    ): Prisma__detail_pencatatanClient<detail_pencatatanGetPayload<T>>

    /**
     * Find the first Detail_pencatatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_pencatatanFindFirstArgs} args - Arguments to find a Detail_pencatatan
     * @example
     * // Get one Detail_pencatatan
     * const detail_pencatatan = await prisma.detail_pencatatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends detail_pencatatanFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, detail_pencatatanFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'detail_pencatatan'> extends True ? Prisma__detail_pencatatanClient<detail_pencatatanGetPayload<T>> : Prisma__detail_pencatatanClient<detail_pencatatanGetPayload<T> | null, null>

    /**
     * Find the first Detail_pencatatan that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_pencatatanFindFirstOrThrowArgs} args - Arguments to find a Detail_pencatatan
     * @example
     * // Get one Detail_pencatatan
     * const detail_pencatatan = await prisma.detail_pencatatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends detail_pencatatanFindFirstOrThrowArgs>(
      args?: SelectSubset<T, detail_pencatatanFindFirstOrThrowArgs>
    ): Prisma__detail_pencatatanClient<detail_pencatatanGetPayload<T>>

    /**
     * Find zero or more Detail_pencatatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_pencatatanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detail_pencatatans
     * const detail_pencatatans = await prisma.detail_pencatatan.findMany()
     * 
     * // Get first 10 Detail_pencatatans
     * const detail_pencatatans = await prisma.detail_pencatatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detail_pencatatanWithIdOnly = await prisma.detail_pencatatan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends detail_pencatatanFindManyArgs>(
      args?: SelectSubset<T, detail_pencatatanFindManyArgs>
    ): Prisma.PrismaPromise<Array<detail_pencatatanGetPayload<T>>>

    /**
     * Create a Detail_pencatatan.
     * @param {detail_pencatatanCreateArgs} args - Arguments to create a Detail_pencatatan.
     * @example
     * // Create one Detail_pencatatan
     * const Detail_pencatatan = await prisma.detail_pencatatan.create({
     *   data: {
     *     // ... data to create a Detail_pencatatan
     *   }
     * })
     * 
    **/
    create<T extends detail_pencatatanCreateArgs>(
      args: SelectSubset<T, detail_pencatatanCreateArgs>
    ): Prisma__detail_pencatatanClient<detail_pencatatanGetPayload<T>>

    /**
     * Create many Detail_pencatatans.
     *     @param {detail_pencatatanCreateManyArgs} args - Arguments to create many Detail_pencatatans.
     *     @example
     *     // Create many Detail_pencatatans
     *     const detail_pencatatan = await prisma.detail_pencatatan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends detail_pencatatanCreateManyArgs>(
      args?: SelectSubset<T, detail_pencatatanCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Detail_pencatatan.
     * @param {detail_pencatatanDeleteArgs} args - Arguments to delete one Detail_pencatatan.
     * @example
     * // Delete one Detail_pencatatan
     * const Detail_pencatatan = await prisma.detail_pencatatan.delete({
     *   where: {
     *     // ... filter to delete one Detail_pencatatan
     *   }
     * })
     * 
    **/
    delete<T extends detail_pencatatanDeleteArgs>(
      args: SelectSubset<T, detail_pencatatanDeleteArgs>
    ): Prisma__detail_pencatatanClient<detail_pencatatanGetPayload<T>>

    /**
     * Update one Detail_pencatatan.
     * @param {detail_pencatatanUpdateArgs} args - Arguments to update one Detail_pencatatan.
     * @example
     * // Update one Detail_pencatatan
     * const detail_pencatatan = await prisma.detail_pencatatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends detail_pencatatanUpdateArgs>(
      args: SelectSubset<T, detail_pencatatanUpdateArgs>
    ): Prisma__detail_pencatatanClient<detail_pencatatanGetPayload<T>>

    /**
     * Delete zero or more Detail_pencatatans.
     * @param {detail_pencatatanDeleteManyArgs} args - Arguments to filter Detail_pencatatans to delete.
     * @example
     * // Delete a few Detail_pencatatans
     * const { count } = await prisma.detail_pencatatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends detail_pencatatanDeleteManyArgs>(
      args?: SelectSubset<T, detail_pencatatanDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_pencatatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_pencatatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detail_pencatatans
     * const detail_pencatatan = await prisma.detail_pencatatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends detail_pencatatanUpdateManyArgs>(
      args: SelectSubset<T, detail_pencatatanUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Detail_pencatatan.
     * @param {detail_pencatatanUpsertArgs} args - Arguments to update or create a Detail_pencatatan.
     * @example
     * // Update or create a Detail_pencatatan
     * const detail_pencatatan = await prisma.detail_pencatatan.upsert({
     *   create: {
     *     // ... data to create a Detail_pencatatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detail_pencatatan we want to update
     *   }
     * })
    **/
    upsert<T extends detail_pencatatanUpsertArgs>(
      args: SelectSubset<T, detail_pencatatanUpsertArgs>
    ): Prisma__detail_pencatatanClient<detail_pencatatanGetPayload<T>>

    /**
     * Count the number of Detail_pencatatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_pencatatanCountArgs} args - Arguments to filter Detail_pencatatans to count.
     * @example
     * // Count the number of Detail_pencatatans
     * const count = await prisma.detail_pencatatan.count({
     *   where: {
     *     // ... the filter for the Detail_pencatatans we want to count
     *   }
     * })
    **/
    count<T extends detail_pencatatanCountArgs>(
      args?: Subset<T, detail_pencatatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detail_pencatatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detail_pencatatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_pencatatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detail_pencatatanAggregateArgs>(args: Subset<T, Detail_pencatatanAggregateArgs>): Prisma.PrismaPromise<GetDetail_pencatatanAggregateType<T>>

    /**
     * Group by Detail_pencatatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_pencatatanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Detail_pencatatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Detail_pencatatanGroupByArgs['orderBy'] }
        : { orderBy?: Detail_pencatatanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Detail_pencatatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetail_pencatatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for detail_pencatatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__detail_pencatatanClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    catat<T extends pencatatanArgs= {}>(args?: Subset<T, pencatatanArgs>): Prisma__pencatatanClient<pencatatanGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * detail_pencatatan base type for findUnique actions
   */
  export type detail_pencatatanFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the detail_pencatatan
     */
    select?: detail_pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: detail_pencatatanInclude | null
    /**
     * Filter, which detail_pencatatan to fetch.
     */
    where: detail_pencatatanWhereUniqueInput
  }

  /**
   * detail_pencatatan findUnique
   */
  export interface detail_pencatatanFindUniqueArgs extends detail_pencatatanFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * detail_pencatatan findUniqueOrThrow
   */
  export type detail_pencatatanFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the detail_pencatatan
     */
    select?: detail_pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: detail_pencatatanInclude | null
    /**
     * Filter, which detail_pencatatan to fetch.
     */
    where: detail_pencatatanWhereUniqueInput
  }


  /**
   * detail_pencatatan base type for findFirst actions
   */
  export type detail_pencatatanFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the detail_pencatatan
     */
    select?: detail_pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: detail_pencatatanInclude | null
    /**
     * Filter, which detail_pencatatan to fetch.
     */
    where?: detail_pencatatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_pencatatans to fetch.
     */
    orderBy?: Enumerable<detail_pencatatanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_pencatatans.
     */
    cursor?: detail_pencatatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_pencatatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_pencatatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_pencatatans.
     */
    distinct?: Enumerable<Detail_pencatatanScalarFieldEnum>
  }

  /**
   * detail_pencatatan findFirst
   */
  export interface detail_pencatatanFindFirstArgs extends detail_pencatatanFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * detail_pencatatan findFirstOrThrow
   */
  export type detail_pencatatanFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the detail_pencatatan
     */
    select?: detail_pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: detail_pencatatanInclude | null
    /**
     * Filter, which detail_pencatatan to fetch.
     */
    where?: detail_pencatatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_pencatatans to fetch.
     */
    orderBy?: Enumerable<detail_pencatatanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_pencatatans.
     */
    cursor?: detail_pencatatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_pencatatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_pencatatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_pencatatans.
     */
    distinct?: Enumerable<Detail_pencatatanScalarFieldEnum>
  }


  /**
   * detail_pencatatan findMany
   */
  export type detail_pencatatanFindManyArgs = {
    /**
     * Select specific fields to fetch from the detail_pencatatan
     */
    select?: detail_pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: detail_pencatatanInclude | null
    /**
     * Filter, which detail_pencatatans to fetch.
     */
    where?: detail_pencatatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_pencatatans to fetch.
     */
    orderBy?: Enumerable<detail_pencatatanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detail_pencatatans.
     */
    cursor?: detail_pencatatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_pencatatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_pencatatans.
     */
    skip?: number
    distinct?: Enumerable<Detail_pencatatanScalarFieldEnum>
  }


  /**
   * detail_pencatatan create
   */
  export type detail_pencatatanCreateArgs = {
    /**
     * Select specific fields to fetch from the detail_pencatatan
     */
    select?: detail_pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: detail_pencatatanInclude | null
    /**
     * The data needed to create a detail_pencatatan.
     */
    data: XOR<detail_pencatatanCreateInput, detail_pencatatanUncheckedCreateInput>
  }


  /**
   * detail_pencatatan createMany
   */
  export type detail_pencatatanCreateManyArgs = {
    /**
     * The data used to create many detail_pencatatans.
     */
    data: Enumerable<detail_pencatatanCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * detail_pencatatan update
   */
  export type detail_pencatatanUpdateArgs = {
    /**
     * Select specific fields to fetch from the detail_pencatatan
     */
    select?: detail_pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: detail_pencatatanInclude | null
    /**
     * The data needed to update a detail_pencatatan.
     */
    data: XOR<detail_pencatatanUpdateInput, detail_pencatatanUncheckedUpdateInput>
    /**
     * Choose, which detail_pencatatan to update.
     */
    where: detail_pencatatanWhereUniqueInput
  }


  /**
   * detail_pencatatan updateMany
   */
  export type detail_pencatatanUpdateManyArgs = {
    /**
     * The data used to update detail_pencatatans.
     */
    data: XOR<detail_pencatatanUpdateManyMutationInput, detail_pencatatanUncheckedUpdateManyInput>
    /**
     * Filter which detail_pencatatans to update
     */
    where?: detail_pencatatanWhereInput
  }


  /**
   * detail_pencatatan upsert
   */
  export type detail_pencatatanUpsertArgs = {
    /**
     * Select specific fields to fetch from the detail_pencatatan
     */
    select?: detail_pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: detail_pencatatanInclude | null
    /**
     * The filter to search for the detail_pencatatan to update in case it exists.
     */
    where: detail_pencatatanWhereUniqueInput
    /**
     * In case the detail_pencatatan found by the `where` argument doesn't exist, create a new detail_pencatatan with this data.
     */
    create: XOR<detail_pencatatanCreateInput, detail_pencatatanUncheckedCreateInput>
    /**
     * In case the detail_pencatatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detail_pencatatanUpdateInput, detail_pencatatanUncheckedUpdateInput>
  }


  /**
   * detail_pencatatan delete
   */
  export type detail_pencatatanDeleteArgs = {
    /**
     * Select specific fields to fetch from the detail_pencatatan
     */
    select?: detail_pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: detail_pencatatanInclude | null
    /**
     * Filter which detail_pencatatan to delete.
     */
    where: detail_pencatatanWhereUniqueInput
  }


  /**
   * detail_pencatatan deleteMany
   */
  export type detail_pencatatanDeleteManyArgs = {
    /**
     * Filter which detail_pencatatans to delete
     */
    where?: detail_pencatatanWhereInput
  }


  /**
   * detail_pencatatan without action
   */
  export type detail_pencatatanArgs = {
    /**
     * Select specific fields to fetch from the detail_pencatatan
     */
    select?: detail_pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: detail_pencatatanInclude | null
  }



  /**
   * Model pencatatan
   */


  export type AggregatePencatatan = {
    _count: PencatatanCountAggregateOutputType | null
    _avg: PencatatanAvgAggregateOutputType | null
    _sum: PencatatanSumAggregateOutputType | null
    _min: PencatatanMinAggregateOutputType | null
    _max: PencatatanMaxAggregateOutputType | null
  }

  export type PencatatanAvgAggregateOutputType = {
    id: number | null
    milik: number | null
  }

  export type PencatatanSumAggregateOutputType = {
    id: number | null
    milik: number | null
  }

  export type PencatatanMinAggregateOutputType = {
    id: number | null
    nama_pencatatan: string | null
    milik: number | null
  }

  export type PencatatanMaxAggregateOutputType = {
    id: number | null
    nama_pencatatan: string | null
    milik: number | null
  }

  export type PencatatanCountAggregateOutputType = {
    id: number
    nama_pencatatan: number
    milik: number
    _all: number
  }


  export type PencatatanAvgAggregateInputType = {
    id?: true
    milik?: true
  }

  export type PencatatanSumAggregateInputType = {
    id?: true
    milik?: true
  }

  export type PencatatanMinAggregateInputType = {
    id?: true
    nama_pencatatan?: true
    milik?: true
  }

  export type PencatatanMaxAggregateInputType = {
    id?: true
    nama_pencatatan?: true
    milik?: true
  }

  export type PencatatanCountAggregateInputType = {
    id?: true
    nama_pencatatan?: true
    milik?: true
    _all?: true
  }

  export type PencatatanAggregateArgs = {
    /**
     * Filter which pencatatan to aggregate.
     */
    where?: pencatatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pencatatans to fetch.
     */
    orderBy?: Enumerable<pencatatanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pencatatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pencatatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pencatatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pencatatans
    **/
    _count?: true | PencatatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PencatatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PencatatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PencatatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PencatatanMaxAggregateInputType
  }

  export type GetPencatatanAggregateType<T extends PencatatanAggregateArgs> = {
        [P in keyof T & keyof AggregatePencatatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePencatatan[P]>
      : GetScalarType<T[P], AggregatePencatatan[P]>
  }




  export type PencatatanGroupByArgs = {
    where?: pencatatanWhereInput
    orderBy?: Enumerable<pencatatanOrderByWithAggregationInput>
    by: PencatatanScalarFieldEnum[]
    having?: pencatatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PencatatanCountAggregateInputType | true
    _avg?: PencatatanAvgAggregateInputType
    _sum?: PencatatanSumAggregateInputType
    _min?: PencatatanMinAggregateInputType
    _max?: PencatatanMaxAggregateInputType
  }


  export type PencatatanGroupByOutputType = {
    id: number
    nama_pencatatan: string
    milik: number
    _count: PencatatanCountAggregateOutputType | null
    _avg: PencatatanAvgAggregateOutputType | null
    _sum: PencatatanSumAggregateOutputType | null
    _min: PencatatanMinAggregateOutputType | null
    _max: PencatatanMaxAggregateOutputType | null
  }

  type GetPencatatanGroupByPayload<T extends PencatatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PencatatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PencatatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PencatatanGroupByOutputType[P]>
            : GetScalarType<T[P], PencatatanGroupByOutputType[P]>
        }
      >
    >


  export type pencatatanSelect = {
    id?: boolean
    nama_pencatatan?: boolean
    milik?: boolean
    pemilik?: boolean | MitraArgs
    detail_pencatatan?: boolean | pencatatan$detail_pencatatanArgs
    _count?: boolean | PencatatanCountOutputTypeArgs
  }


  export type pencatatanInclude = {
    pemilik?: boolean | MitraArgs
    detail_pencatatan?: boolean | pencatatan$detail_pencatatanArgs
    _count?: boolean | PencatatanCountOutputTypeArgs
  }

  export type pencatatanGetPayload<S extends boolean | null | undefined | pencatatanArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pencatatan :
    S extends undefined ? never :
    S extends { include: any } & (pencatatanArgs | pencatatanFindManyArgs)
    ? pencatatan  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'pemilik' ? MitraGetPayload<S['include'][P]> :
        P extends 'detail_pencatatan' ? Array < detail_pencatatanGetPayload<S['include'][P]>>  :
        P extends '_count' ? PencatatanCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (pencatatanArgs | pencatatanFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'pemilik' ? MitraGetPayload<S['select'][P]> :
        P extends 'detail_pencatatan' ? Array < detail_pencatatanGetPayload<S['select'][P]>>  :
        P extends '_count' ? PencatatanCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof pencatatan ? pencatatan[P] : never
  } 
      : pencatatan


  type pencatatanCountArgs = 
    Omit<pencatatanFindManyArgs, 'select' | 'include'> & {
      select?: PencatatanCountAggregateInputType | true
    }

  export interface pencatatanDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Pencatatan that matches the filter.
     * @param {pencatatanFindUniqueArgs} args - Arguments to find a Pencatatan
     * @example
     * // Get one Pencatatan
     * const pencatatan = await prisma.pencatatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pencatatanFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pencatatanFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pencatatan'> extends True ? Prisma__pencatatanClient<pencatatanGetPayload<T>> : Prisma__pencatatanClient<pencatatanGetPayload<T> | null, null>

    /**
     * Find one Pencatatan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pencatatanFindUniqueOrThrowArgs} args - Arguments to find a Pencatatan
     * @example
     * // Get one Pencatatan
     * const pencatatan = await prisma.pencatatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pencatatanFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, pencatatanFindUniqueOrThrowArgs>
    ): Prisma__pencatatanClient<pencatatanGetPayload<T>>

    /**
     * Find the first Pencatatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pencatatanFindFirstArgs} args - Arguments to find a Pencatatan
     * @example
     * // Get one Pencatatan
     * const pencatatan = await prisma.pencatatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pencatatanFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pencatatanFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pencatatan'> extends True ? Prisma__pencatatanClient<pencatatanGetPayload<T>> : Prisma__pencatatanClient<pencatatanGetPayload<T> | null, null>

    /**
     * Find the first Pencatatan that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pencatatanFindFirstOrThrowArgs} args - Arguments to find a Pencatatan
     * @example
     * // Get one Pencatatan
     * const pencatatan = await prisma.pencatatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pencatatanFindFirstOrThrowArgs>(
      args?: SelectSubset<T, pencatatanFindFirstOrThrowArgs>
    ): Prisma__pencatatanClient<pencatatanGetPayload<T>>

    /**
     * Find zero or more Pencatatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pencatatanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pencatatans
     * const pencatatans = await prisma.pencatatan.findMany()
     * 
     * // Get first 10 Pencatatans
     * const pencatatans = await prisma.pencatatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pencatatanWithIdOnly = await prisma.pencatatan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends pencatatanFindManyArgs>(
      args?: SelectSubset<T, pencatatanFindManyArgs>
    ): Prisma.PrismaPromise<Array<pencatatanGetPayload<T>>>

    /**
     * Create a Pencatatan.
     * @param {pencatatanCreateArgs} args - Arguments to create a Pencatatan.
     * @example
     * // Create one Pencatatan
     * const Pencatatan = await prisma.pencatatan.create({
     *   data: {
     *     // ... data to create a Pencatatan
     *   }
     * })
     * 
    **/
    create<T extends pencatatanCreateArgs>(
      args: SelectSubset<T, pencatatanCreateArgs>
    ): Prisma__pencatatanClient<pencatatanGetPayload<T>>

    /**
     * Create many Pencatatans.
     *     @param {pencatatanCreateManyArgs} args - Arguments to create many Pencatatans.
     *     @example
     *     // Create many Pencatatans
     *     const pencatatan = await prisma.pencatatan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pencatatanCreateManyArgs>(
      args?: SelectSubset<T, pencatatanCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pencatatan.
     * @param {pencatatanDeleteArgs} args - Arguments to delete one Pencatatan.
     * @example
     * // Delete one Pencatatan
     * const Pencatatan = await prisma.pencatatan.delete({
     *   where: {
     *     // ... filter to delete one Pencatatan
     *   }
     * })
     * 
    **/
    delete<T extends pencatatanDeleteArgs>(
      args: SelectSubset<T, pencatatanDeleteArgs>
    ): Prisma__pencatatanClient<pencatatanGetPayload<T>>

    /**
     * Update one Pencatatan.
     * @param {pencatatanUpdateArgs} args - Arguments to update one Pencatatan.
     * @example
     * // Update one Pencatatan
     * const pencatatan = await prisma.pencatatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pencatatanUpdateArgs>(
      args: SelectSubset<T, pencatatanUpdateArgs>
    ): Prisma__pencatatanClient<pencatatanGetPayload<T>>

    /**
     * Delete zero or more Pencatatans.
     * @param {pencatatanDeleteManyArgs} args - Arguments to filter Pencatatans to delete.
     * @example
     * // Delete a few Pencatatans
     * const { count } = await prisma.pencatatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pencatatanDeleteManyArgs>(
      args?: SelectSubset<T, pencatatanDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pencatatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pencatatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pencatatans
     * const pencatatan = await prisma.pencatatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pencatatanUpdateManyArgs>(
      args: SelectSubset<T, pencatatanUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pencatatan.
     * @param {pencatatanUpsertArgs} args - Arguments to update or create a Pencatatan.
     * @example
     * // Update or create a Pencatatan
     * const pencatatan = await prisma.pencatatan.upsert({
     *   create: {
     *     // ... data to create a Pencatatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pencatatan we want to update
     *   }
     * })
    **/
    upsert<T extends pencatatanUpsertArgs>(
      args: SelectSubset<T, pencatatanUpsertArgs>
    ): Prisma__pencatatanClient<pencatatanGetPayload<T>>

    /**
     * Count the number of Pencatatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pencatatanCountArgs} args - Arguments to filter Pencatatans to count.
     * @example
     * // Count the number of Pencatatans
     * const count = await prisma.pencatatan.count({
     *   where: {
     *     // ... the filter for the Pencatatans we want to count
     *   }
     * })
    **/
    count<T extends pencatatanCountArgs>(
      args?: Subset<T, pencatatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PencatatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pencatatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PencatatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PencatatanAggregateArgs>(args: Subset<T, PencatatanAggregateArgs>): Prisma.PrismaPromise<GetPencatatanAggregateType<T>>

    /**
     * Group by Pencatatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PencatatanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PencatatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PencatatanGroupByArgs['orderBy'] }
        : { orderBy?: PencatatanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PencatatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPencatatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for pencatatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pencatatanClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    pemilik<T extends MitraArgs= {}>(args?: Subset<T, MitraArgs>): Prisma__MitraClient<MitraGetPayload<T> | Null>;

    detail_pencatatan<T extends pencatatan$detail_pencatatanArgs= {}>(args?: Subset<T, pencatatan$detail_pencatatanArgs>): Prisma.PrismaPromise<Array<detail_pencatatanGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pencatatan base type for findUnique actions
   */
  export type pencatatanFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the pencatatan
     */
    select?: pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pencatatanInclude | null
    /**
     * Filter, which pencatatan to fetch.
     */
    where: pencatatanWhereUniqueInput
  }

  /**
   * pencatatan findUnique
   */
  export interface pencatatanFindUniqueArgs extends pencatatanFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pencatatan findUniqueOrThrow
   */
  export type pencatatanFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pencatatan
     */
    select?: pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pencatatanInclude | null
    /**
     * Filter, which pencatatan to fetch.
     */
    where: pencatatanWhereUniqueInput
  }


  /**
   * pencatatan base type for findFirst actions
   */
  export type pencatatanFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the pencatatan
     */
    select?: pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pencatatanInclude | null
    /**
     * Filter, which pencatatan to fetch.
     */
    where?: pencatatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pencatatans to fetch.
     */
    orderBy?: Enumerable<pencatatanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pencatatans.
     */
    cursor?: pencatatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pencatatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pencatatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pencatatans.
     */
    distinct?: Enumerable<PencatatanScalarFieldEnum>
  }

  /**
   * pencatatan findFirst
   */
  export interface pencatatanFindFirstArgs extends pencatatanFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pencatatan findFirstOrThrow
   */
  export type pencatatanFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pencatatan
     */
    select?: pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pencatatanInclude | null
    /**
     * Filter, which pencatatan to fetch.
     */
    where?: pencatatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pencatatans to fetch.
     */
    orderBy?: Enumerable<pencatatanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pencatatans.
     */
    cursor?: pencatatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pencatatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pencatatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pencatatans.
     */
    distinct?: Enumerable<PencatatanScalarFieldEnum>
  }


  /**
   * pencatatan findMany
   */
  export type pencatatanFindManyArgs = {
    /**
     * Select specific fields to fetch from the pencatatan
     */
    select?: pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pencatatanInclude | null
    /**
     * Filter, which pencatatans to fetch.
     */
    where?: pencatatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pencatatans to fetch.
     */
    orderBy?: Enumerable<pencatatanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pencatatans.
     */
    cursor?: pencatatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pencatatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pencatatans.
     */
    skip?: number
    distinct?: Enumerable<PencatatanScalarFieldEnum>
  }


  /**
   * pencatatan create
   */
  export type pencatatanCreateArgs = {
    /**
     * Select specific fields to fetch from the pencatatan
     */
    select?: pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pencatatanInclude | null
    /**
     * The data needed to create a pencatatan.
     */
    data: XOR<pencatatanCreateInput, pencatatanUncheckedCreateInput>
  }


  /**
   * pencatatan createMany
   */
  export type pencatatanCreateManyArgs = {
    /**
     * The data used to create many pencatatans.
     */
    data: Enumerable<pencatatanCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * pencatatan update
   */
  export type pencatatanUpdateArgs = {
    /**
     * Select specific fields to fetch from the pencatatan
     */
    select?: pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pencatatanInclude | null
    /**
     * The data needed to update a pencatatan.
     */
    data: XOR<pencatatanUpdateInput, pencatatanUncheckedUpdateInput>
    /**
     * Choose, which pencatatan to update.
     */
    where: pencatatanWhereUniqueInput
  }


  /**
   * pencatatan updateMany
   */
  export type pencatatanUpdateManyArgs = {
    /**
     * The data used to update pencatatans.
     */
    data: XOR<pencatatanUpdateManyMutationInput, pencatatanUncheckedUpdateManyInput>
    /**
     * Filter which pencatatans to update
     */
    where?: pencatatanWhereInput
  }


  /**
   * pencatatan upsert
   */
  export type pencatatanUpsertArgs = {
    /**
     * Select specific fields to fetch from the pencatatan
     */
    select?: pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pencatatanInclude | null
    /**
     * The filter to search for the pencatatan to update in case it exists.
     */
    where: pencatatanWhereUniqueInput
    /**
     * In case the pencatatan found by the `where` argument doesn't exist, create a new pencatatan with this data.
     */
    create: XOR<pencatatanCreateInput, pencatatanUncheckedCreateInput>
    /**
     * In case the pencatatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pencatatanUpdateInput, pencatatanUncheckedUpdateInput>
  }


  /**
   * pencatatan delete
   */
  export type pencatatanDeleteArgs = {
    /**
     * Select specific fields to fetch from the pencatatan
     */
    select?: pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pencatatanInclude | null
    /**
     * Filter which pencatatan to delete.
     */
    where: pencatatanWhereUniqueInput
  }


  /**
   * pencatatan deleteMany
   */
  export type pencatatanDeleteManyArgs = {
    /**
     * Filter which pencatatans to delete
     */
    where?: pencatatanWhereInput
  }


  /**
   * pencatatan.detail_pencatatan
   */
  export type pencatatan$detail_pencatatanArgs = {
    /**
     * Select specific fields to fetch from the detail_pencatatan
     */
    select?: detail_pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: detail_pencatatanInclude | null
    where?: detail_pencatatanWhereInput
    orderBy?: Enumerable<detail_pencatatanOrderByWithRelationInput>
    cursor?: detail_pencatatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Detail_pencatatanScalarFieldEnum>
  }


  /**
   * pencatatan without action
   */
  export type pencatatanArgs = {
    /**
     * Select specific fields to fetch from the pencatatan
     */
    select?: pencatatanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pencatatanInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    deskripsi: 'deskripsi',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const AprovalScalarFieldEnum: {
    id: 'id',
    accid: 'accid',
    diacc_oleh: 'diacc_oleh'
  };

  export type AprovalScalarFieldEnum = (typeof AprovalScalarFieldEnum)[keyof typeof AprovalScalarFieldEnum]


  export const Bukti_bayarScalarFieldEnum: {
    id: 'id',
    bukti_bayar: 'bukti_bayar',
    status: 'status',
    expire: 'expire',
    id_mitra: 'id_mitra'
  };

  export type Bukti_bayarScalarFieldEnum = (typeof Bukti_bayarScalarFieldEnum)[keyof typeof Bukti_bayarScalarFieldEnum]


  export const Detail_pencatatanScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    keterangan: 'keterangan',
    pemasukan: 'pemasukan',
    pengeluaran: 'pengeluaran',
    saldo: 'saldo',
    detail_dari: 'detail_dari'
  };

  export type Detail_pencatatanScalarFieldEnum = (typeof Detail_pencatatanScalarFieldEnum)[keyof typeof Detail_pencatatanScalarFieldEnum]


  export const KonfirmasiScalarFieldEnum: {
    id: 'id',
    nama_pembeli: 'nama_pembeli',
    alamat_pembeli: 'alamat_pembeli',
    keterangan: 'keterangan',
    id_pegawai: 'id_pegawai'
  };

  export type KonfirmasiScalarFieldEnum = (typeof KonfirmasiScalarFieldEnum)[keyof typeof KonfirmasiScalarFieldEnum]


  export const MitraScalarFieldEnum: {
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

  export type MitraScalarFieldEnum = (typeof MitraScalarFieldEnum)[keyof typeof MitraScalarFieldEnum]


  export const PegawaiScalarFieldEnum: {
    id: 'id',
    workAt: 'workAt',
    name: 'name',
    email: 'email',
    password: 'password',
    no: 'no',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PegawaiScalarFieldEnum = (typeof PegawaiScalarFieldEnum)[keyof typeof PegawaiScalarFieldEnum]


  export const PencatatanScalarFieldEnum: {
    id: 'id',
    nama_pencatatan: 'nama_pencatatan',
    milik: 'milik'
  };

  export type PencatatanScalarFieldEnum = (typeof PencatatanScalarFieldEnum)[keyof typeof PencatatanScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RejectedScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    rejected_oleh: 'rejected_oleh'
  };

  export type RejectedScalarFieldEnum = (typeof RejectedScalarFieldEnum)[keyof typeof RejectedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TrackingScalarFieldEnum: {
    id: 'id',
    nama_pembeli: 'nama_pembeli',
    alamat_pembeli: 'alamat_pembeli',
    kondisi_barang: 'kondisi_barang',
    id_pembeli: 'id_pembeli',
    id_mitra: 'id_mitra',
    id_pegawai: 'id_pegawai'
  };

  export type TrackingScalarFieldEnum = (typeof TrackingScalarFieldEnum)[keyof typeof TrackingScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VisitorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    alamat: 'alamat',
    no: 'no',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisitorScalarFieldEnum = (typeof VisitorScalarFieldEnum)[keyof typeof VisitorScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type VisitorWhereInput = {
    AND?: Enumerable<VisitorWhereInput>
    OR?: Enumerable<VisitorWhereInput>
    NOT?: Enumerable<VisitorWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    alamat?: StringFilter | string
    no?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    tracking?: TrackingListRelationFilter
  }

  export type VisitorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    alamat?: SortOrder
    no?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tracking?: trackingOrderByRelationAggregateInput
  }

  export type VisitorWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type VisitorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    alamat?: SortOrder
    no?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisitorCountOrderByAggregateInput
    _avg?: VisitorAvgOrderByAggregateInput
    _max?: VisitorMaxOrderByAggregateInput
    _min?: VisitorMinOrderByAggregateInput
    _sum?: VisitorSumOrderByAggregateInput
  }

  export type VisitorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VisitorScalarWhereWithAggregatesInput>
    OR?: Enumerable<VisitorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VisitorScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    alamat?: StringWithAggregatesFilter | string
    no?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type trackingWhereInput = {
    AND?: Enumerable<trackingWhereInput>
    OR?: Enumerable<trackingWhereInput>
    NOT?: Enumerable<trackingWhereInput>
    id?: IntFilter | number
    nama_pembeli?: StringNullableFilter | string | null
    alamat_pembeli?: StringFilter | string
    kondisi_barang?: StringFilter | string
    id_pembeli?: IntNullableFilter | number | null
    id_mitra?: IntFilter | number
    id_pegawai?: IntNullableFilter | number | null
    visitor?: XOR<VisitorRelationFilter, VisitorWhereInput> | null
    pegawai?: XOR<PegawaiRelationFilter, pegawaiWhereInput> | null
    mitra?: XOR<MitraRelationFilter, MitraWhereInput>
  }

  export type trackingOrderByWithRelationInput = {
    id?: SortOrder
    nama_pembeli?: SortOrder
    alamat_pembeli?: SortOrder
    kondisi_barang?: SortOrder
    id_pembeli?: SortOrder
    id_mitra?: SortOrder
    id_pegawai?: SortOrder
    visitor?: VisitorOrderByWithRelationInput
    pegawai?: pegawaiOrderByWithRelationInput
    mitra?: MitraOrderByWithRelationInput
  }

  export type trackingWhereUniqueInput = {
    id?: number
  }

  export type trackingOrderByWithAggregationInput = {
    id?: SortOrder
    nama_pembeli?: SortOrder
    alamat_pembeli?: SortOrder
    kondisi_barang?: SortOrder
    id_pembeli?: SortOrder
    id_mitra?: SortOrder
    id_pegawai?: SortOrder
    _count?: trackingCountOrderByAggregateInput
    _avg?: trackingAvgOrderByAggregateInput
    _max?: trackingMaxOrderByAggregateInput
    _min?: trackingMinOrderByAggregateInput
    _sum?: trackingSumOrderByAggregateInput
  }

  export type trackingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<trackingScalarWhereWithAggregatesInput>
    OR?: Enumerable<trackingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<trackingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nama_pembeli?: StringNullableWithAggregatesFilter | string | null
    alamat_pembeli?: StringWithAggregatesFilter | string
    kondisi_barang?: StringWithAggregatesFilter | string
    id_pembeli?: IntNullableWithAggregatesFilter | number | null
    id_mitra?: IntWithAggregatesFilter | number
    id_pegawai?: IntNullableWithAggregatesFilter | number | null
  }

  export type MitraWhereInput = {
    AND?: Enumerable<MitraWhereInput>
    OR?: Enumerable<MitraWhereInput>
    NOT?: Enumerable<MitraWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    no?: StringFilter | string
    alamat?: StringFilter | string
    usaha?: StringFilter | string
    pribadi?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    aproval?: AprovalListRelationFilter
    pegawai?: PegawaiListRelationFilter
    pencatatan?: PencatatanListRelationFilter
    bukti_bayar?: Bukti_bayarListRelationFilter
    tracking?: TrackingListRelationFilter
  }

  export type MitraOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no?: SortOrder
    alamat?: SortOrder
    usaha?: SortOrder
    pribadi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aproval?: aprovalOrderByRelationAggregateInput
    pegawai?: pegawaiOrderByRelationAggregateInput
    pencatatan?: pencatatanOrderByRelationAggregateInput
    bukti_bayar?: bukti_bayarOrderByRelationAggregateInput
    tracking?: trackingOrderByRelationAggregateInput
  }

  export type MitraWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type MitraOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no?: SortOrder
    alamat?: SortOrder
    usaha?: SortOrder
    pribadi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MitraCountOrderByAggregateInput
    _avg?: MitraAvgOrderByAggregateInput
    _max?: MitraMaxOrderByAggregateInput
    _min?: MitraMinOrderByAggregateInput
    _sum?: MitraSumOrderByAggregateInput
  }

  export type MitraScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MitraScalarWhereWithAggregatesInput>
    OR?: Enumerable<MitraScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MitraScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    no?: StringWithAggregatesFilter | string
    alamat?: StringWithAggregatesFilter | string
    usaha?: StringWithAggregatesFilter | string
    pribadi?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type bukti_bayarWhereInput = {
    AND?: Enumerable<bukti_bayarWhereInput>
    OR?: Enumerable<bukti_bayarWhereInput>
    NOT?: Enumerable<bukti_bayarWhereInput>
    id?: IntFilter | number
    bukti_bayar?: StringFilter | string
    status?: IntFilter | number
    expire?: DateTimeNullableFilter | Date | string | null
    id_mitra?: IntFilter | number
    mitra?: XOR<MitraRelationFilter, MitraWhereInput>
  }

  export type bukti_bayarOrderByWithRelationInput = {
    id?: SortOrder
    bukti_bayar?: SortOrder
    status?: SortOrder
    expire?: SortOrder
    id_mitra?: SortOrder
    mitra?: MitraOrderByWithRelationInput
  }

  export type bukti_bayarWhereUniqueInput = {
    id?: number
    id_mitra?: number
  }

  export type bukti_bayarOrderByWithAggregationInput = {
    id?: SortOrder
    bukti_bayar?: SortOrder
    status?: SortOrder
    expire?: SortOrder
    id_mitra?: SortOrder
    _count?: bukti_bayarCountOrderByAggregateInput
    _avg?: bukti_bayarAvgOrderByAggregateInput
    _max?: bukti_bayarMaxOrderByAggregateInput
    _min?: bukti_bayarMinOrderByAggregateInput
    _sum?: bukti_bayarSumOrderByAggregateInput
  }

  export type bukti_bayarScalarWhereWithAggregatesInput = {
    AND?: Enumerable<bukti_bayarScalarWhereWithAggregatesInput>
    OR?: Enumerable<bukti_bayarScalarWhereWithAggregatesInput>
    NOT?: Enumerable<bukti_bayarScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    bukti_bayar?: StringWithAggregatesFilter | string
    status?: IntWithAggregatesFilter | number
    expire?: DateTimeNullableWithAggregatesFilter | Date | string | null
    id_mitra?: IntWithAggregatesFilter | number
  }

  export type konfirmasiWhereInput = {
    AND?: Enumerable<konfirmasiWhereInput>
    OR?: Enumerable<konfirmasiWhereInput>
    NOT?: Enumerable<konfirmasiWhereInput>
    id?: IntFilter | number
    nama_pembeli?: StringFilter | string
    alamat_pembeli?: StringFilter | string
    keterangan?: StringFilter | string
    id_pegawai?: IntFilter | number
    pegawai?: XOR<PegawaiRelationFilter, pegawaiWhereInput>
  }

  export type konfirmasiOrderByWithRelationInput = {
    id?: SortOrder
    nama_pembeli?: SortOrder
    alamat_pembeli?: SortOrder
    keterangan?: SortOrder
    id_pegawai?: SortOrder
    pegawai?: pegawaiOrderByWithRelationInput
  }

  export type konfirmasiWhereUniqueInput = {
    id?: number
  }

  export type konfirmasiOrderByWithAggregationInput = {
    id?: SortOrder
    nama_pembeli?: SortOrder
    alamat_pembeli?: SortOrder
    keterangan?: SortOrder
    id_pegawai?: SortOrder
    _count?: konfirmasiCountOrderByAggregateInput
    _avg?: konfirmasiAvgOrderByAggregateInput
    _max?: konfirmasiMaxOrderByAggregateInput
    _min?: konfirmasiMinOrderByAggregateInput
    _sum?: konfirmasiSumOrderByAggregateInput
  }

  export type konfirmasiScalarWhereWithAggregatesInput = {
    AND?: Enumerable<konfirmasiScalarWhereWithAggregatesInput>
    OR?: Enumerable<konfirmasiScalarWhereWithAggregatesInput>
    NOT?: Enumerable<konfirmasiScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nama_pembeli?: StringWithAggregatesFilter | string
    alamat_pembeli?: StringWithAggregatesFilter | string
    keterangan?: StringWithAggregatesFilter | string
    id_pegawai?: IntWithAggregatesFilter | number
  }

  export type pegawaiWhereInput = {
    AND?: Enumerable<pegawaiWhereInput>
    OR?: Enumerable<pegawaiWhereInput>
    NOT?: Enumerable<pegawaiWhereInput>
    id?: IntFilter | number
    workAt?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    no?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    work?: XOR<MitraRelationFilter, MitraWhereInput>
    tracking?: TrackingListRelationFilter
    konfirmasi?: KonfirmasiListRelationFilter
  }

  export type pegawaiOrderByWithRelationInput = {
    id?: SortOrder
    workAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    work?: MitraOrderByWithRelationInput
    tracking?: trackingOrderByRelationAggregateInput
    konfirmasi?: konfirmasiOrderByRelationAggregateInput
  }

  export type pegawaiWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type pegawaiOrderByWithAggregationInput = {
    id?: SortOrder
    workAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: pegawaiCountOrderByAggregateInput
    _avg?: pegawaiAvgOrderByAggregateInput
    _max?: pegawaiMaxOrderByAggregateInput
    _min?: pegawaiMinOrderByAggregateInput
    _sum?: pegawaiSumOrderByAggregateInput
  }

  export type pegawaiScalarWhereWithAggregatesInput = {
    AND?: Enumerable<pegawaiScalarWhereWithAggregatesInput>
    OR?: Enumerable<pegawaiScalarWhereWithAggregatesInput>
    NOT?: Enumerable<pegawaiScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    workAt?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    no?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type aprovalWhereInput = {
    AND?: Enumerable<aprovalWhereInput>
    OR?: Enumerable<aprovalWhereInput>
    NOT?: Enumerable<aprovalWhereInput>
    id?: IntFilter | number
    accid?: IntFilter | number
    diacc_oleh?: IntFilter | number
    acc?: XOR<MitraRelationFilter, MitraWhereInput>
    admin?: XOR<AdminRelationFilter, AdminWhereInput>
  }

  export type aprovalOrderByWithRelationInput = {
    id?: SortOrder
    accid?: SortOrder
    diacc_oleh?: SortOrder
    acc?: MitraOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type aprovalWhereUniqueInput = {
    id?: number
  }

  export type aprovalOrderByWithAggregationInput = {
    id?: SortOrder
    accid?: SortOrder
    diacc_oleh?: SortOrder
    _count?: aprovalCountOrderByAggregateInput
    _avg?: aprovalAvgOrderByAggregateInput
    _max?: aprovalMaxOrderByAggregateInput
    _min?: aprovalMinOrderByAggregateInput
    _sum?: aprovalSumOrderByAggregateInput
  }

  export type aprovalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<aprovalScalarWhereWithAggregatesInput>
    OR?: Enumerable<aprovalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<aprovalScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    accid?: IntWithAggregatesFilter | number
    diacc_oleh?: IntWithAggregatesFilter | number
  }

  export type RejectedWhereInput = {
    AND?: Enumerable<RejectedWhereInput>
    OR?: Enumerable<RejectedWhereInput>
    NOT?: Enumerable<RejectedWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    rejected_oleh?: IntFilter | number
    reject?: XOR<AdminRelationFilter, AdminWhereInput>
  }

  export type RejectedOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    rejected_oleh?: SortOrder
    reject?: AdminOrderByWithRelationInput
  }

  export type RejectedWhereUniqueInput = {
    id?: number
  }

  export type RejectedOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    rejected_oleh?: SortOrder
    _count?: RejectedCountOrderByAggregateInput
    _avg?: RejectedAvgOrderByAggregateInput
    _max?: RejectedMaxOrderByAggregateInput
    _min?: RejectedMinOrderByAggregateInput
    _sum?: RejectedSumOrderByAggregateInput
  }

  export type RejectedScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RejectedScalarWhereWithAggregatesInput>
    OR?: Enumerable<RejectedScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RejectedScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    rejected_oleh?: IntWithAggregatesFilter | number
  }

  export type AdminWhereInput = {
    AND?: Enumerable<AdminWhereInput>
    OR?: Enumerable<AdminWhereInput>
    NOT?: Enumerable<AdminWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    deskripsi?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    approval?: AprovalListRelationFilter
    rejected?: RejectedListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    approval?: aprovalOrderByRelationAggregateInput
    rejected?: RejectedOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdminScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdminScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    deskripsi?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type detail_pencatatanWhereInput = {
    AND?: Enumerable<detail_pencatatanWhereInput>
    OR?: Enumerable<detail_pencatatanWhereInput>
    NOT?: Enumerable<detail_pencatatanWhereInput>
    id?: IntFilter | number
    tanggal?: DateTimeFilter | Date | string
    keterangan?: StringFilter | string
    pemasukan?: IntFilter | number
    pengeluaran?: IntFilter | number
    saldo?: IntFilter | number
    detail_dari?: IntFilter | number
    catat?: XOR<PencatatanRelationFilter, pencatatanWhereInput>
  }

  export type detail_pencatatanOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    keterangan?: SortOrder
    pemasukan?: SortOrder
    pengeluaran?: SortOrder
    saldo?: SortOrder
    detail_dari?: SortOrder
    catat?: pencatatanOrderByWithRelationInput
  }

  export type detail_pencatatanWhereUniqueInput = {
    id?: number
  }

  export type detail_pencatatanOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    keterangan?: SortOrder
    pemasukan?: SortOrder
    pengeluaran?: SortOrder
    saldo?: SortOrder
    detail_dari?: SortOrder
    _count?: detail_pencatatanCountOrderByAggregateInput
    _avg?: detail_pencatatanAvgOrderByAggregateInput
    _max?: detail_pencatatanMaxOrderByAggregateInput
    _min?: detail_pencatatanMinOrderByAggregateInput
    _sum?: detail_pencatatanSumOrderByAggregateInput
  }

  export type detail_pencatatanScalarWhereWithAggregatesInput = {
    AND?: Enumerable<detail_pencatatanScalarWhereWithAggregatesInput>
    OR?: Enumerable<detail_pencatatanScalarWhereWithAggregatesInput>
    NOT?: Enumerable<detail_pencatatanScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    tanggal?: DateTimeWithAggregatesFilter | Date | string
    keterangan?: StringWithAggregatesFilter | string
    pemasukan?: IntWithAggregatesFilter | number
    pengeluaran?: IntWithAggregatesFilter | number
    saldo?: IntWithAggregatesFilter | number
    detail_dari?: IntWithAggregatesFilter | number
  }

  export type pencatatanWhereInput = {
    AND?: Enumerable<pencatatanWhereInput>
    OR?: Enumerable<pencatatanWhereInput>
    NOT?: Enumerable<pencatatanWhereInput>
    id?: IntFilter | number
    nama_pencatatan?: StringFilter | string
    milik?: IntFilter | number
    pemilik?: XOR<MitraRelationFilter, MitraWhereInput>
    detail_pencatatan?: Detail_pencatatanListRelationFilter
  }

  export type pencatatanOrderByWithRelationInput = {
    id?: SortOrder
    nama_pencatatan?: SortOrder
    milik?: SortOrder
    pemilik?: MitraOrderByWithRelationInput
    detail_pencatatan?: detail_pencatatanOrderByRelationAggregateInput
  }

  export type pencatatanWhereUniqueInput = {
    id?: number
  }

  export type pencatatanOrderByWithAggregationInput = {
    id?: SortOrder
    nama_pencatatan?: SortOrder
    milik?: SortOrder
    _count?: pencatatanCountOrderByAggregateInput
    _avg?: pencatatanAvgOrderByAggregateInput
    _max?: pencatatanMaxOrderByAggregateInput
    _min?: pencatatanMinOrderByAggregateInput
    _sum?: pencatatanSumOrderByAggregateInput
  }

  export type pencatatanScalarWhereWithAggregatesInput = {
    AND?: Enumerable<pencatatanScalarWhereWithAggregatesInput>
    OR?: Enumerable<pencatatanScalarWhereWithAggregatesInput>
    NOT?: Enumerable<pencatatanScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nama_pencatatan?: StringWithAggregatesFilter | string
    milik?: IntWithAggregatesFilter | number
  }

  export type VisitorCreateInput = {
    name: string
    email: string
    password: string
    alamat: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: trackingCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    alamat: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: trackingUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: trackingUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: trackingUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    alamat: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trackingCreateInput = {
    nama_pembeli?: string | null
    alamat_pembeli: string
    kondisi_barang: string
    visitor?: VisitorCreateNestedOneWithoutTrackingInput
    pegawai?: pegawaiCreateNestedOneWithoutTrackingInput
    mitra: MitraCreateNestedOneWithoutTrackingInput
  }

  export type trackingUncheckedCreateInput = {
    id?: number
    nama_pembeli?: string | null
    alamat_pembeli: string
    kondisi_barang: string
    id_pembeli?: number | null
    id_mitra: number
    id_pegawai?: number | null
  }

  export type trackingUpdateInput = {
    nama_pembeli?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    kondisi_barang?: StringFieldUpdateOperationsInput | string
    visitor?: VisitorUpdateOneWithoutTrackingNestedInput
    pegawai?: pegawaiUpdateOneWithoutTrackingNestedInput
    mitra?: MitraUpdateOneRequiredWithoutTrackingNestedInput
  }

  export type trackingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    kondisi_barang?: StringFieldUpdateOperationsInput | string
    id_pembeli?: NullableIntFieldUpdateOperationsInput | number | null
    id_mitra?: IntFieldUpdateOperationsInput | number
    id_pegawai?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type trackingCreateManyInput = {
    id?: number
    nama_pembeli?: string | null
    alamat_pembeli: string
    kondisi_barang: string
    id_pembeli?: number | null
    id_mitra: number
    id_pegawai?: number | null
  }

  export type trackingUpdateManyMutationInput = {
    nama_pembeli?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    kondisi_barang?: StringFieldUpdateOperationsInput | string
  }

  export type trackingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    kondisi_barang?: StringFieldUpdateOperationsInput | string
    id_pembeli?: NullableIntFieldUpdateOperationsInput | number | null
    id_mitra?: IntFieldUpdateOperationsInput | number
    id_pegawai?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MitraCreateInput = {
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aproval?: aprovalCreateNestedManyWithoutAccInput
    pegawai?: pegawaiCreateNestedManyWithoutWorkInput
    pencatatan?: pencatatanCreateNestedManyWithoutPemilikInput
    bukti_bayar?: bukti_bayarCreateNestedManyWithoutMitraInput
    tracking?: trackingCreateNestedManyWithoutMitraInput
  }

  export type MitraUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aproval?: aprovalUncheckedCreateNestedManyWithoutAccInput
    pegawai?: pegawaiUncheckedCreateNestedManyWithoutWorkInput
    pencatatan?: pencatatanUncheckedCreateNestedManyWithoutPemilikInput
    bukti_bayar?: bukti_bayarUncheckedCreateNestedManyWithoutMitraInput
    tracking?: trackingUncheckedCreateNestedManyWithoutMitraInput
  }

  export type MitraUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aproval?: aprovalUpdateManyWithoutAccNestedInput
    pegawai?: pegawaiUpdateManyWithoutWorkNestedInput
    pencatatan?: pencatatanUpdateManyWithoutPemilikNestedInput
    bukti_bayar?: bukti_bayarUpdateManyWithoutMitraNestedInput
    tracking?: trackingUpdateManyWithoutMitraNestedInput
  }

  export type MitraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aproval?: aprovalUncheckedUpdateManyWithoutAccNestedInput
    pegawai?: pegawaiUncheckedUpdateManyWithoutWorkNestedInput
    pencatatan?: pencatatanUncheckedUpdateManyWithoutPemilikNestedInput
    bukti_bayar?: bukti_bayarUncheckedUpdateManyWithoutMitraNestedInput
    tracking?: trackingUncheckedUpdateManyWithoutMitraNestedInput
  }

  export type MitraCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MitraUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MitraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bukti_bayarCreateInput = {
    bukti_bayar: string
    status?: number
    expire?: Date | string | null
    mitra: MitraCreateNestedOneWithoutBukti_bayarInput
  }

  export type bukti_bayarUncheckedCreateInput = {
    id?: number
    bukti_bayar: string
    status?: number
    expire?: Date | string | null
    id_mitra: number
  }

  export type bukti_bayarUpdateInput = {
    bukti_bayar?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mitra?: MitraUpdateOneRequiredWithoutBukti_bayarNestedInput
  }

  export type bukti_bayarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bukti_bayar?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_mitra?: IntFieldUpdateOperationsInput | number
  }

  export type bukti_bayarCreateManyInput = {
    id?: number
    bukti_bayar: string
    status?: number
    expire?: Date | string | null
    id_mitra: number
  }

  export type bukti_bayarUpdateManyMutationInput = {
    bukti_bayar?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bukti_bayarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bukti_bayar?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_mitra?: IntFieldUpdateOperationsInput | number
  }

  export type konfirmasiCreateInput = {
    nama_pembeli: string
    alamat_pembeli: string
    keterangan: string
    pegawai: pegawaiCreateNestedOneWithoutKonfirmasiInput
  }

  export type konfirmasiUncheckedCreateInput = {
    id?: number
    nama_pembeli: string
    alamat_pembeli: string
    keterangan: string
    id_pegawai: number
  }

  export type konfirmasiUpdateInput = {
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    pegawai?: pegawaiUpdateOneRequiredWithoutKonfirmasiNestedInput
  }

  export type konfirmasiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    id_pegawai?: IntFieldUpdateOperationsInput | number
  }

  export type konfirmasiCreateManyInput = {
    id?: number
    nama_pembeli: string
    alamat_pembeli: string
    keterangan: string
    id_pegawai: number
  }

  export type konfirmasiUpdateManyMutationInput = {
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
  }

  export type konfirmasiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
    id_pegawai?: IntFieldUpdateOperationsInput | number
  }

  export type pegawaiCreateInput = {
    name: string
    email: string
    password: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    work: MitraCreateNestedOneWithoutPegawaiInput
    tracking?: trackingCreateNestedManyWithoutPegawaiInput
    konfirmasi?: konfirmasiCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiUncheckedCreateInput = {
    id?: number
    workAt: number
    name: string
    email: string
    password: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: trackingUncheckedCreateNestedManyWithoutPegawaiInput
    konfirmasi?: konfirmasiUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: MitraUpdateOneRequiredWithoutPegawaiNestedInput
    tracking?: trackingUpdateManyWithoutPegawaiNestedInput
    konfirmasi?: konfirmasiUpdateManyWithoutPegawaiNestedInput
  }

  export type pegawaiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workAt?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: trackingUncheckedUpdateManyWithoutPegawaiNestedInput
    konfirmasi?: konfirmasiUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type pegawaiCreateManyInput = {
    id?: number
    workAt: number
    name: string
    email: string
    password: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type pegawaiUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pegawaiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workAt?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type aprovalCreateInput = {
    acc: MitraCreateNestedOneWithoutAprovalInput
    admin: AdminCreateNestedOneWithoutApprovalInput
  }

  export type aprovalUncheckedCreateInput = {
    id?: number
    accid: number
    diacc_oleh: number
  }

  export type aprovalUpdateInput = {
    acc?: MitraUpdateOneRequiredWithoutAprovalNestedInput
    admin?: AdminUpdateOneRequiredWithoutApprovalNestedInput
  }

  export type aprovalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accid?: IntFieldUpdateOperationsInput | number
    diacc_oleh?: IntFieldUpdateOperationsInput | number
  }

  export type aprovalCreateManyInput = {
    id?: number
    accid: number
    diacc_oleh: number
  }

  export type aprovalUpdateManyMutationInput = {

  }

  export type aprovalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accid?: IntFieldUpdateOperationsInput | number
    diacc_oleh?: IntFieldUpdateOperationsInput | number
  }

  export type RejectedCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    reject: AdminCreateNestedOneWithoutRejectedInput
  }

  export type RejectedUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    rejected_oleh: number
  }

  export type RejectedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reject?: AdminUpdateOneRequiredWithoutRejectedNestedInput
  }

  export type RejectedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejected_oleh?: IntFieldUpdateOperationsInput | number
  }

  export type RejectedCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    rejected_oleh: number
  }

  export type RejectedUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RejectedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejected_oleh?: IntFieldUpdateOperationsInput | number
  }

  export type AdminCreateInput = {
    name: string
    email: string
    password: string
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approval?: aprovalCreateNestedManyWithoutAdminInput
    rejected?: RejectedCreateNestedManyWithoutRejectInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approval?: aprovalUncheckedCreateNestedManyWithoutAdminInput
    rejected?: RejectedUncheckedCreateNestedManyWithoutRejectInput
  }

  export type AdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approval?: aprovalUpdateManyWithoutAdminNestedInput
    rejected?: RejectedUpdateManyWithoutRejectNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approval?: aprovalUncheckedUpdateManyWithoutAdminNestedInput
    rejected?: RejectedUncheckedUpdateManyWithoutRejectNestedInput
  }

  export type AdminCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_pencatatanCreateInput = {
    tanggal: Date | string
    keterangan: string
    pemasukan: number
    pengeluaran: number
    saldo: number
    catat: pencatatanCreateNestedOneWithoutDetail_pencatatanInput
  }

  export type detail_pencatatanUncheckedCreateInput = {
    id?: number
    tanggal: Date | string
    keterangan: string
    pemasukan: number
    pengeluaran: number
    saldo: number
    detail_dari: number
  }

  export type detail_pencatatanUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    keterangan?: StringFieldUpdateOperationsInput | string
    pemasukan?: IntFieldUpdateOperationsInput | number
    pengeluaran?: IntFieldUpdateOperationsInput | number
    saldo?: IntFieldUpdateOperationsInput | number
    catat?: pencatatanUpdateOneRequiredWithoutDetail_pencatatanNestedInput
  }

  export type detail_pencatatanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    keterangan?: StringFieldUpdateOperationsInput | string
    pemasukan?: IntFieldUpdateOperationsInput | number
    pengeluaran?: IntFieldUpdateOperationsInput | number
    saldo?: IntFieldUpdateOperationsInput | number
    detail_dari?: IntFieldUpdateOperationsInput | number
  }

  export type detail_pencatatanCreateManyInput = {
    id?: number
    tanggal: Date | string
    keterangan: string
    pemasukan: number
    pengeluaran: number
    saldo: number
    detail_dari: number
  }

  export type detail_pencatatanUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    keterangan?: StringFieldUpdateOperationsInput | string
    pemasukan?: IntFieldUpdateOperationsInput | number
    pengeluaran?: IntFieldUpdateOperationsInput | number
    saldo?: IntFieldUpdateOperationsInput | number
  }

  export type detail_pencatatanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    keterangan?: StringFieldUpdateOperationsInput | string
    pemasukan?: IntFieldUpdateOperationsInput | number
    pengeluaran?: IntFieldUpdateOperationsInput | number
    saldo?: IntFieldUpdateOperationsInput | number
    detail_dari?: IntFieldUpdateOperationsInput | number
  }

  export type pencatatanCreateInput = {
    nama_pencatatan: string
    pemilik: MitraCreateNestedOneWithoutPencatatanInput
    detail_pencatatan?: detail_pencatatanCreateNestedManyWithoutCatatInput
  }

  export type pencatatanUncheckedCreateInput = {
    id?: number
    nama_pencatatan: string
    milik: number
    detail_pencatatan?: detail_pencatatanUncheckedCreateNestedManyWithoutCatatInput
  }

  export type pencatatanUpdateInput = {
    nama_pencatatan?: StringFieldUpdateOperationsInput | string
    pemilik?: MitraUpdateOneRequiredWithoutPencatatanNestedInput
    detail_pencatatan?: detail_pencatatanUpdateManyWithoutCatatNestedInput
  }

  export type pencatatanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pencatatan?: StringFieldUpdateOperationsInput | string
    milik?: IntFieldUpdateOperationsInput | number
    detail_pencatatan?: detail_pencatatanUncheckedUpdateManyWithoutCatatNestedInput
  }

  export type pencatatanCreateManyInput = {
    id?: number
    nama_pencatatan: string
    milik: number
  }

  export type pencatatanUpdateManyMutationInput = {
    nama_pencatatan?: StringFieldUpdateOperationsInput | string
  }

  export type pencatatanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pencatatan?: StringFieldUpdateOperationsInput | string
    milik?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type TrackingListRelationFilter = {
    every?: trackingWhereInput
    some?: trackingWhereInput
    none?: trackingWhereInput
  }

  export type trackingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    alamat?: SortOrder
    no?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisitorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    alamat?: SortOrder
    no?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    alamat?: SortOrder
    no?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type VisitorRelationFilter = {
    is?: VisitorWhereInput | null
    isNot?: VisitorWhereInput | null
  }

  export type PegawaiRelationFilter = {
    is?: pegawaiWhereInput
    isNot?: pegawaiWhereInput
  }

  export type MitraRelationFilter = {
    is?: MitraWhereInput
    isNot?: MitraWhereInput
  }

  export type trackingCountOrderByAggregateInput = {
    id?: SortOrder
    nama_pembeli?: SortOrder
    alamat_pembeli?: SortOrder
    kondisi_barang?: SortOrder
    id_pembeli?: SortOrder
    id_mitra?: SortOrder
    id_pegawai?: SortOrder
  }

  export type trackingAvgOrderByAggregateInput = {
    id?: SortOrder
    id_pembeli?: SortOrder
    id_mitra?: SortOrder
    id_pegawai?: SortOrder
  }

  export type trackingMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_pembeli?: SortOrder
    alamat_pembeli?: SortOrder
    kondisi_barang?: SortOrder
    id_pembeli?: SortOrder
    id_mitra?: SortOrder
    id_pegawai?: SortOrder
  }

  export type trackingMinOrderByAggregateInput = {
    id?: SortOrder
    nama_pembeli?: SortOrder
    alamat_pembeli?: SortOrder
    kondisi_barang?: SortOrder
    id_pembeli?: SortOrder
    id_mitra?: SortOrder
    id_pegawai?: SortOrder
  }

  export type trackingSumOrderByAggregateInput = {
    id?: SortOrder
    id_pembeli?: SortOrder
    id_mitra?: SortOrder
    id_pegawai?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type AprovalListRelationFilter = {
    every?: aprovalWhereInput
    some?: aprovalWhereInput
    none?: aprovalWhereInput
  }

  export type PegawaiListRelationFilter = {
    every?: pegawaiWhereInput
    some?: pegawaiWhereInput
    none?: pegawaiWhereInput
  }

  export type PencatatanListRelationFilter = {
    every?: pencatatanWhereInput
    some?: pencatatanWhereInput
    none?: pencatatanWhereInput
  }

  export type Bukti_bayarListRelationFilter = {
    every?: bukti_bayarWhereInput
    some?: bukti_bayarWhereInput
    none?: bukti_bayarWhereInput
  }

  export type aprovalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pegawaiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pencatatanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bukti_bayarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MitraCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no?: SortOrder
    alamat?: SortOrder
    usaha?: SortOrder
    pribadi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MitraAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MitraMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no?: SortOrder
    alamat?: SortOrder
    usaha?: SortOrder
    pribadi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MitraMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no?: SortOrder
    alamat?: SortOrder
    usaha?: SortOrder
    pribadi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MitraSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type bukti_bayarCountOrderByAggregateInput = {
    id?: SortOrder
    bukti_bayar?: SortOrder
    status?: SortOrder
    expire?: SortOrder
    id_mitra?: SortOrder
  }

  export type bukti_bayarAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    id_mitra?: SortOrder
  }

  export type bukti_bayarMaxOrderByAggregateInput = {
    id?: SortOrder
    bukti_bayar?: SortOrder
    status?: SortOrder
    expire?: SortOrder
    id_mitra?: SortOrder
  }

  export type bukti_bayarMinOrderByAggregateInput = {
    id?: SortOrder
    bukti_bayar?: SortOrder
    status?: SortOrder
    expire?: SortOrder
    id_mitra?: SortOrder
  }

  export type bukti_bayarSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    id_mitra?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type konfirmasiCountOrderByAggregateInput = {
    id?: SortOrder
    nama_pembeli?: SortOrder
    alamat_pembeli?: SortOrder
    keterangan?: SortOrder
    id_pegawai?: SortOrder
  }

  export type konfirmasiAvgOrderByAggregateInput = {
    id?: SortOrder
    id_pegawai?: SortOrder
  }

  export type konfirmasiMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_pembeli?: SortOrder
    alamat_pembeli?: SortOrder
    keterangan?: SortOrder
    id_pegawai?: SortOrder
  }

  export type konfirmasiMinOrderByAggregateInput = {
    id?: SortOrder
    nama_pembeli?: SortOrder
    alamat_pembeli?: SortOrder
    keterangan?: SortOrder
    id_pegawai?: SortOrder
  }

  export type konfirmasiSumOrderByAggregateInput = {
    id?: SortOrder
    id_pegawai?: SortOrder
  }

  export type KonfirmasiListRelationFilter = {
    every?: konfirmasiWhereInput
    some?: konfirmasiWhereInput
    none?: konfirmasiWhereInput
  }

  export type konfirmasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pegawaiCountOrderByAggregateInput = {
    id?: SortOrder
    workAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type pegawaiAvgOrderByAggregateInput = {
    id?: SortOrder
    workAt?: SortOrder
  }

  export type pegawaiMaxOrderByAggregateInput = {
    id?: SortOrder
    workAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type pegawaiMinOrderByAggregateInput = {
    id?: SortOrder
    workAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type pegawaiSumOrderByAggregateInput = {
    id?: SortOrder
    workAt?: SortOrder
  }

  export type AdminRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type aprovalCountOrderByAggregateInput = {
    id?: SortOrder
    accid?: SortOrder
    diacc_oleh?: SortOrder
  }

  export type aprovalAvgOrderByAggregateInput = {
    id?: SortOrder
    accid?: SortOrder
    diacc_oleh?: SortOrder
  }

  export type aprovalMaxOrderByAggregateInput = {
    id?: SortOrder
    accid?: SortOrder
    diacc_oleh?: SortOrder
  }

  export type aprovalMinOrderByAggregateInput = {
    id?: SortOrder
    accid?: SortOrder
    diacc_oleh?: SortOrder
  }

  export type aprovalSumOrderByAggregateInput = {
    id?: SortOrder
    accid?: SortOrder
    diacc_oleh?: SortOrder
  }

  export type RejectedCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    rejected_oleh?: SortOrder
  }

  export type RejectedAvgOrderByAggregateInput = {
    id?: SortOrder
    rejected_oleh?: SortOrder
  }

  export type RejectedMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    rejected_oleh?: SortOrder
  }

  export type RejectedMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    rejected_oleh?: SortOrder
  }

  export type RejectedSumOrderByAggregateInput = {
    id?: SortOrder
    rejected_oleh?: SortOrder
  }

  export type RejectedListRelationFilter = {
    every?: RejectedWhereInput
    some?: RejectedWhereInput
    none?: RejectedWhereInput
  }

  export type RejectedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PencatatanRelationFilter = {
    is?: pencatatanWhereInput
    isNot?: pencatatanWhereInput
  }

  export type detail_pencatatanCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    keterangan?: SortOrder
    pemasukan?: SortOrder
    pengeluaran?: SortOrder
    saldo?: SortOrder
    detail_dari?: SortOrder
  }

  export type detail_pencatatanAvgOrderByAggregateInput = {
    id?: SortOrder
    pemasukan?: SortOrder
    pengeluaran?: SortOrder
    saldo?: SortOrder
    detail_dari?: SortOrder
  }

  export type detail_pencatatanMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    keterangan?: SortOrder
    pemasukan?: SortOrder
    pengeluaran?: SortOrder
    saldo?: SortOrder
    detail_dari?: SortOrder
  }

  export type detail_pencatatanMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    keterangan?: SortOrder
    pemasukan?: SortOrder
    pengeluaran?: SortOrder
    saldo?: SortOrder
    detail_dari?: SortOrder
  }

  export type detail_pencatatanSumOrderByAggregateInput = {
    id?: SortOrder
    pemasukan?: SortOrder
    pengeluaran?: SortOrder
    saldo?: SortOrder
    detail_dari?: SortOrder
  }

  export type Detail_pencatatanListRelationFilter = {
    every?: detail_pencatatanWhereInput
    some?: detail_pencatatanWhereInput
    none?: detail_pencatatanWhereInput
  }

  export type detail_pencatatanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pencatatanCountOrderByAggregateInput = {
    id?: SortOrder
    nama_pencatatan?: SortOrder
    milik?: SortOrder
  }

  export type pencatatanAvgOrderByAggregateInput = {
    id?: SortOrder
    milik?: SortOrder
  }

  export type pencatatanMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_pencatatan?: SortOrder
    milik?: SortOrder
  }

  export type pencatatanMinOrderByAggregateInput = {
    id?: SortOrder
    nama_pencatatan?: SortOrder
    milik?: SortOrder
  }

  export type pencatatanSumOrderByAggregateInput = {
    id?: SortOrder
    milik?: SortOrder
  }

  export type trackingCreateNestedManyWithoutVisitorInput = {
    create?: XOR<Enumerable<trackingCreateWithoutVisitorInput>, Enumerable<trackingUncheckedCreateWithoutVisitorInput>>
    connectOrCreate?: Enumerable<trackingCreateOrConnectWithoutVisitorInput>
    createMany?: trackingCreateManyVisitorInputEnvelope
    connect?: Enumerable<trackingWhereUniqueInput>
  }

  export type trackingUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: XOR<Enumerable<trackingCreateWithoutVisitorInput>, Enumerable<trackingUncheckedCreateWithoutVisitorInput>>
    connectOrCreate?: Enumerable<trackingCreateOrConnectWithoutVisitorInput>
    createMany?: trackingCreateManyVisitorInputEnvelope
    connect?: Enumerable<trackingWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type trackingUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<Enumerable<trackingCreateWithoutVisitorInput>, Enumerable<trackingUncheckedCreateWithoutVisitorInput>>
    connectOrCreate?: Enumerable<trackingCreateOrConnectWithoutVisitorInput>
    upsert?: Enumerable<trackingUpsertWithWhereUniqueWithoutVisitorInput>
    createMany?: trackingCreateManyVisitorInputEnvelope
    set?: Enumerable<trackingWhereUniqueInput>
    disconnect?: Enumerable<trackingWhereUniqueInput>
    delete?: Enumerable<trackingWhereUniqueInput>
    connect?: Enumerable<trackingWhereUniqueInput>
    update?: Enumerable<trackingUpdateWithWhereUniqueWithoutVisitorInput>
    updateMany?: Enumerable<trackingUpdateManyWithWhereWithoutVisitorInput>
    deleteMany?: Enumerable<trackingScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type trackingUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<Enumerable<trackingCreateWithoutVisitorInput>, Enumerable<trackingUncheckedCreateWithoutVisitorInput>>
    connectOrCreate?: Enumerable<trackingCreateOrConnectWithoutVisitorInput>
    upsert?: Enumerable<trackingUpsertWithWhereUniqueWithoutVisitorInput>
    createMany?: trackingCreateManyVisitorInputEnvelope
    set?: Enumerable<trackingWhereUniqueInput>
    disconnect?: Enumerable<trackingWhereUniqueInput>
    delete?: Enumerable<trackingWhereUniqueInput>
    connect?: Enumerable<trackingWhereUniqueInput>
    update?: Enumerable<trackingUpdateWithWhereUniqueWithoutVisitorInput>
    updateMany?: Enumerable<trackingUpdateManyWithWhereWithoutVisitorInput>
    deleteMany?: Enumerable<trackingScalarWhereInput>
  }

  export type VisitorCreateNestedOneWithoutTrackingInput = {
    create?: XOR<VisitorCreateWithoutTrackingInput, VisitorUncheckedCreateWithoutTrackingInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutTrackingInput
    connect?: VisitorWhereUniqueInput
  }

  export type pegawaiCreateNestedOneWithoutTrackingInput = {
    create?: XOR<pegawaiCreateWithoutTrackingInput, pegawaiUncheckedCreateWithoutTrackingInput>
    connectOrCreate?: pegawaiCreateOrConnectWithoutTrackingInput
    connect?: pegawaiWhereUniqueInput
  }

  export type MitraCreateNestedOneWithoutTrackingInput = {
    create?: XOR<MitraCreateWithoutTrackingInput, MitraUncheckedCreateWithoutTrackingInput>
    connectOrCreate?: MitraCreateOrConnectWithoutTrackingInput
    connect?: MitraWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VisitorUpdateOneWithoutTrackingNestedInput = {
    create?: XOR<VisitorCreateWithoutTrackingInput, VisitorUncheckedCreateWithoutTrackingInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutTrackingInput
    upsert?: VisitorUpsertWithoutTrackingInput
    disconnect?: boolean
    delete?: boolean
    connect?: VisitorWhereUniqueInput
    update?: XOR<VisitorUpdateWithoutTrackingInput, VisitorUncheckedUpdateWithoutTrackingInput>
  }

  export type pegawaiUpdateOneWithoutTrackingNestedInput = {
    create?: XOR<pegawaiCreateWithoutTrackingInput, pegawaiUncheckedCreateWithoutTrackingInput>
    connectOrCreate?: pegawaiCreateOrConnectWithoutTrackingInput
    upsert?: pegawaiUpsertWithoutTrackingInput
    disconnect?: boolean
    delete?: boolean
    connect?: pegawaiWhereUniqueInput
    update?: XOR<pegawaiUpdateWithoutTrackingInput, pegawaiUncheckedUpdateWithoutTrackingInput>
  }

  export type MitraUpdateOneRequiredWithoutTrackingNestedInput = {
    create?: XOR<MitraCreateWithoutTrackingInput, MitraUncheckedCreateWithoutTrackingInput>
    connectOrCreate?: MitraCreateOrConnectWithoutTrackingInput
    upsert?: MitraUpsertWithoutTrackingInput
    connect?: MitraWhereUniqueInput
    update?: XOR<MitraUpdateWithoutTrackingInput, MitraUncheckedUpdateWithoutTrackingInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type aprovalCreateNestedManyWithoutAccInput = {
    create?: XOR<Enumerable<aprovalCreateWithoutAccInput>, Enumerable<aprovalUncheckedCreateWithoutAccInput>>
    connectOrCreate?: Enumerable<aprovalCreateOrConnectWithoutAccInput>
    createMany?: aprovalCreateManyAccInputEnvelope
    connect?: Enumerable<aprovalWhereUniqueInput>
  }

  export type pegawaiCreateNestedManyWithoutWorkInput = {
    create?: XOR<Enumerable<pegawaiCreateWithoutWorkInput>, Enumerable<pegawaiUncheckedCreateWithoutWorkInput>>
    connectOrCreate?: Enumerable<pegawaiCreateOrConnectWithoutWorkInput>
    createMany?: pegawaiCreateManyWorkInputEnvelope
    connect?: Enumerable<pegawaiWhereUniqueInput>
  }

  export type pencatatanCreateNestedManyWithoutPemilikInput = {
    create?: XOR<Enumerable<pencatatanCreateWithoutPemilikInput>, Enumerable<pencatatanUncheckedCreateWithoutPemilikInput>>
    connectOrCreate?: Enumerable<pencatatanCreateOrConnectWithoutPemilikInput>
    createMany?: pencatatanCreateManyPemilikInputEnvelope
    connect?: Enumerable<pencatatanWhereUniqueInput>
  }

  export type bukti_bayarCreateNestedManyWithoutMitraInput = {
    create?: XOR<Enumerable<bukti_bayarCreateWithoutMitraInput>, Enumerable<bukti_bayarUncheckedCreateWithoutMitraInput>>
    connectOrCreate?: Enumerable<bukti_bayarCreateOrConnectWithoutMitraInput>
    createMany?: bukti_bayarCreateManyMitraInputEnvelope
    connect?: Enumerable<bukti_bayarWhereUniqueInput>
  }

  export type trackingCreateNestedManyWithoutMitraInput = {
    create?: XOR<Enumerable<trackingCreateWithoutMitraInput>, Enumerable<trackingUncheckedCreateWithoutMitraInput>>
    connectOrCreate?: Enumerable<trackingCreateOrConnectWithoutMitraInput>
    createMany?: trackingCreateManyMitraInputEnvelope
    connect?: Enumerable<trackingWhereUniqueInput>
  }

  export type aprovalUncheckedCreateNestedManyWithoutAccInput = {
    create?: XOR<Enumerable<aprovalCreateWithoutAccInput>, Enumerable<aprovalUncheckedCreateWithoutAccInput>>
    connectOrCreate?: Enumerable<aprovalCreateOrConnectWithoutAccInput>
    createMany?: aprovalCreateManyAccInputEnvelope
    connect?: Enumerable<aprovalWhereUniqueInput>
  }

  export type pegawaiUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<Enumerable<pegawaiCreateWithoutWorkInput>, Enumerable<pegawaiUncheckedCreateWithoutWorkInput>>
    connectOrCreate?: Enumerable<pegawaiCreateOrConnectWithoutWorkInput>
    createMany?: pegawaiCreateManyWorkInputEnvelope
    connect?: Enumerable<pegawaiWhereUniqueInput>
  }

  export type pencatatanUncheckedCreateNestedManyWithoutPemilikInput = {
    create?: XOR<Enumerable<pencatatanCreateWithoutPemilikInput>, Enumerable<pencatatanUncheckedCreateWithoutPemilikInput>>
    connectOrCreate?: Enumerable<pencatatanCreateOrConnectWithoutPemilikInput>
    createMany?: pencatatanCreateManyPemilikInputEnvelope
    connect?: Enumerable<pencatatanWhereUniqueInput>
  }

  export type bukti_bayarUncheckedCreateNestedManyWithoutMitraInput = {
    create?: XOR<Enumerable<bukti_bayarCreateWithoutMitraInput>, Enumerable<bukti_bayarUncheckedCreateWithoutMitraInput>>
    connectOrCreate?: Enumerable<bukti_bayarCreateOrConnectWithoutMitraInput>
    createMany?: bukti_bayarCreateManyMitraInputEnvelope
    connect?: Enumerable<bukti_bayarWhereUniqueInput>
  }

  export type trackingUncheckedCreateNestedManyWithoutMitraInput = {
    create?: XOR<Enumerable<trackingCreateWithoutMitraInput>, Enumerable<trackingUncheckedCreateWithoutMitraInput>>
    connectOrCreate?: Enumerable<trackingCreateOrConnectWithoutMitraInput>
    createMany?: trackingCreateManyMitraInputEnvelope
    connect?: Enumerable<trackingWhereUniqueInput>
  }

  export type aprovalUpdateManyWithoutAccNestedInput = {
    create?: XOR<Enumerable<aprovalCreateWithoutAccInput>, Enumerable<aprovalUncheckedCreateWithoutAccInput>>
    connectOrCreate?: Enumerable<aprovalCreateOrConnectWithoutAccInput>
    upsert?: Enumerable<aprovalUpsertWithWhereUniqueWithoutAccInput>
    createMany?: aprovalCreateManyAccInputEnvelope
    set?: Enumerable<aprovalWhereUniqueInput>
    disconnect?: Enumerable<aprovalWhereUniqueInput>
    delete?: Enumerable<aprovalWhereUniqueInput>
    connect?: Enumerable<aprovalWhereUniqueInput>
    update?: Enumerable<aprovalUpdateWithWhereUniqueWithoutAccInput>
    updateMany?: Enumerable<aprovalUpdateManyWithWhereWithoutAccInput>
    deleteMany?: Enumerable<aprovalScalarWhereInput>
  }

  export type pegawaiUpdateManyWithoutWorkNestedInput = {
    create?: XOR<Enumerable<pegawaiCreateWithoutWorkInput>, Enumerable<pegawaiUncheckedCreateWithoutWorkInput>>
    connectOrCreate?: Enumerable<pegawaiCreateOrConnectWithoutWorkInput>
    upsert?: Enumerable<pegawaiUpsertWithWhereUniqueWithoutWorkInput>
    createMany?: pegawaiCreateManyWorkInputEnvelope
    set?: Enumerable<pegawaiWhereUniqueInput>
    disconnect?: Enumerable<pegawaiWhereUniqueInput>
    delete?: Enumerable<pegawaiWhereUniqueInput>
    connect?: Enumerable<pegawaiWhereUniqueInput>
    update?: Enumerable<pegawaiUpdateWithWhereUniqueWithoutWorkInput>
    updateMany?: Enumerable<pegawaiUpdateManyWithWhereWithoutWorkInput>
    deleteMany?: Enumerable<pegawaiScalarWhereInput>
  }

  export type pencatatanUpdateManyWithoutPemilikNestedInput = {
    create?: XOR<Enumerable<pencatatanCreateWithoutPemilikInput>, Enumerable<pencatatanUncheckedCreateWithoutPemilikInput>>
    connectOrCreate?: Enumerable<pencatatanCreateOrConnectWithoutPemilikInput>
    upsert?: Enumerable<pencatatanUpsertWithWhereUniqueWithoutPemilikInput>
    createMany?: pencatatanCreateManyPemilikInputEnvelope
    set?: Enumerable<pencatatanWhereUniqueInput>
    disconnect?: Enumerable<pencatatanWhereUniqueInput>
    delete?: Enumerable<pencatatanWhereUniqueInput>
    connect?: Enumerable<pencatatanWhereUniqueInput>
    update?: Enumerable<pencatatanUpdateWithWhereUniqueWithoutPemilikInput>
    updateMany?: Enumerable<pencatatanUpdateManyWithWhereWithoutPemilikInput>
    deleteMany?: Enumerable<pencatatanScalarWhereInput>
  }

  export type bukti_bayarUpdateManyWithoutMitraNestedInput = {
    create?: XOR<Enumerable<bukti_bayarCreateWithoutMitraInput>, Enumerable<bukti_bayarUncheckedCreateWithoutMitraInput>>
    connectOrCreate?: Enumerable<bukti_bayarCreateOrConnectWithoutMitraInput>
    upsert?: Enumerable<bukti_bayarUpsertWithWhereUniqueWithoutMitraInput>
    createMany?: bukti_bayarCreateManyMitraInputEnvelope
    set?: Enumerable<bukti_bayarWhereUniqueInput>
    disconnect?: Enumerable<bukti_bayarWhereUniqueInput>
    delete?: Enumerable<bukti_bayarWhereUniqueInput>
    connect?: Enumerable<bukti_bayarWhereUniqueInput>
    update?: Enumerable<bukti_bayarUpdateWithWhereUniqueWithoutMitraInput>
    updateMany?: Enumerable<bukti_bayarUpdateManyWithWhereWithoutMitraInput>
    deleteMany?: Enumerable<bukti_bayarScalarWhereInput>
  }

  export type trackingUpdateManyWithoutMitraNestedInput = {
    create?: XOR<Enumerable<trackingCreateWithoutMitraInput>, Enumerable<trackingUncheckedCreateWithoutMitraInput>>
    connectOrCreate?: Enumerable<trackingCreateOrConnectWithoutMitraInput>
    upsert?: Enumerable<trackingUpsertWithWhereUniqueWithoutMitraInput>
    createMany?: trackingCreateManyMitraInputEnvelope
    set?: Enumerable<trackingWhereUniqueInput>
    disconnect?: Enumerable<trackingWhereUniqueInput>
    delete?: Enumerable<trackingWhereUniqueInput>
    connect?: Enumerable<trackingWhereUniqueInput>
    update?: Enumerable<trackingUpdateWithWhereUniqueWithoutMitraInput>
    updateMany?: Enumerable<trackingUpdateManyWithWhereWithoutMitraInput>
    deleteMany?: Enumerable<trackingScalarWhereInput>
  }

  export type aprovalUncheckedUpdateManyWithoutAccNestedInput = {
    create?: XOR<Enumerable<aprovalCreateWithoutAccInput>, Enumerable<aprovalUncheckedCreateWithoutAccInput>>
    connectOrCreate?: Enumerable<aprovalCreateOrConnectWithoutAccInput>
    upsert?: Enumerable<aprovalUpsertWithWhereUniqueWithoutAccInput>
    createMany?: aprovalCreateManyAccInputEnvelope
    set?: Enumerable<aprovalWhereUniqueInput>
    disconnect?: Enumerable<aprovalWhereUniqueInput>
    delete?: Enumerable<aprovalWhereUniqueInput>
    connect?: Enumerable<aprovalWhereUniqueInput>
    update?: Enumerable<aprovalUpdateWithWhereUniqueWithoutAccInput>
    updateMany?: Enumerable<aprovalUpdateManyWithWhereWithoutAccInput>
    deleteMany?: Enumerable<aprovalScalarWhereInput>
  }

  export type pegawaiUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<Enumerable<pegawaiCreateWithoutWorkInput>, Enumerable<pegawaiUncheckedCreateWithoutWorkInput>>
    connectOrCreate?: Enumerable<pegawaiCreateOrConnectWithoutWorkInput>
    upsert?: Enumerable<pegawaiUpsertWithWhereUniqueWithoutWorkInput>
    createMany?: pegawaiCreateManyWorkInputEnvelope
    set?: Enumerable<pegawaiWhereUniqueInput>
    disconnect?: Enumerable<pegawaiWhereUniqueInput>
    delete?: Enumerable<pegawaiWhereUniqueInput>
    connect?: Enumerable<pegawaiWhereUniqueInput>
    update?: Enumerable<pegawaiUpdateWithWhereUniqueWithoutWorkInput>
    updateMany?: Enumerable<pegawaiUpdateManyWithWhereWithoutWorkInput>
    deleteMany?: Enumerable<pegawaiScalarWhereInput>
  }

  export type pencatatanUncheckedUpdateManyWithoutPemilikNestedInput = {
    create?: XOR<Enumerable<pencatatanCreateWithoutPemilikInput>, Enumerable<pencatatanUncheckedCreateWithoutPemilikInput>>
    connectOrCreate?: Enumerable<pencatatanCreateOrConnectWithoutPemilikInput>
    upsert?: Enumerable<pencatatanUpsertWithWhereUniqueWithoutPemilikInput>
    createMany?: pencatatanCreateManyPemilikInputEnvelope
    set?: Enumerable<pencatatanWhereUniqueInput>
    disconnect?: Enumerable<pencatatanWhereUniqueInput>
    delete?: Enumerable<pencatatanWhereUniqueInput>
    connect?: Enumerable<pencatatanWhereUniqueInput>
    update?: Enumerable<pencatatanUpdateWithWhereUniqueWithoutPemilikInput>
    updateMany?: Enumerable<pencatatanUpdateManyWithWhereWithoutPemilikInput>
    deleteMany?: Enumerable<pencatatanScalarWhereInput>
  }

  export type bukti_bayarUncheckedUpdateManyWithoutMitraNestedInput = {
    create?: XOR<Enumerable<bukti_bayarCreateWithoutMitraInput>, Enumerable<bukti_bayarUncheckedCreateWithoutMitraInput>>
    connectOrCreate?: Enumerable<bukti_bayarCreateOrConnectWithoutMitraInput>
    upsert?: Enumerable<bukti_bayarUpsertWithWhereUniqueWithoutMitraInput>
    createMany?: bukti_bayarCreateManyMitraInputEnvelope
    set?: Enumerable<bukti_bayarWhereUniqueInput>
    disconnect?: Enumerable<bukti_bayarWhereUniqueInput>
    delete?: Enumerable<bukti_bayarWhereUniqueInput>
    connect?: Enumerable<bukti_bayarWhereUniqueInput>
    update?: Enumerable<bukti_bayarUpdateWithWhereUniqueWithoutMitraInput>
    updateMany?: Enumerable<bukti_bayarUpdateManyWithWhereWithoutMitraInput>
    deleteMany?: Enumerable<bukti_bayarScalarWhereInput>
  }

  export type trackingUncheckedUpdateManyWithoutMitraNestedInput = {
    create?: XOR<Enumerable<trackingCreateWithoutMitraInput>, Enumerable<trackingUncheckedCreateWithoutMitraInput>>
    connectOrCreate?: Enumerable<trackingCreateOrConnectWithoutMitraInput>
    upsert?: Enumerable<trackingUpsertWithWhereUniqueWithoutMitraInput>
    createMany?: trackingCreateManyMitraInputEnvelope
    set?: Enumerable<trackingWhereUniqueInput>
    disconnect?: Enumerable<trackingWhereUniqueInput>
    delete?: Enumerable<trackingWhereUniqueInput>
    connect?: Enumerable<trackingWhereUniqueInput>
    update?: Enumerable<trackingUpdateWithWhereUniqueWithoutMitraInput>
    updateMany?: Enumerable<trackingUpdateManyWithWhereWithoutMitraInput>
    deleteMany?: Enumerable<trackingScalarWhereInput>
  }

  export type MitraCreateNestedOneWithoutBukti_bayarInput = {
    create?: XOR<MitraCreateWithoutBukti_bayarInput, MitraUncheckedCreateWithoutBukti_bayarInput>
    connectOrCreate?: MitraCreateOrConnectWithoutBukti_bayarInput
    connect?: MitraWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MitraUpdateOneRequiredWithoutBukti_bayarNestedInput = {
    create?: XOR<MitraCreateWithoutBukti_bayarInput, MitraUncheckedCreateWithoutBukti_bayarInput>
    connectOrCreate?: MitraCreateOrConnectWithoutBukti_bayarInput
    upsert?: MitraUpsertWithoutBukti_bayarInput
    connect?: MitraWhereUniqueInput
    update?: XOR<MitraUpdateWithoutBukti_bayarInput, MitraUncheckedUpdateWithoutBukti_bayarInput>
  }

  export type pegawaiCreateNestedOneWithoutKonfirmasiInput = {
    create?: XOR<pegawaiCreateWithoutKonfirmasiInput, pegawaiUncheckedCreateWithoutKonfirmasiInput>
    connectOrCreate?: pegawaiCreateOrConnectWithoutKonfirmasiInput
    connect?: pegawaiWhereUniqueInput
  }

  export type pegawaiUpdateOneRequiredWithoutKonfirmasiNestedInput = {
    create?: XOR<pegawaiCreateWithoutKonfirmasiInput, pegawaiUncheckedCreateWithoutKonfirmasiInput>
    connectOrCreate?: pegawaiCreateOrConnectWithoutKonfirmasiInput
    upsert?: pegawaiUpsertWithoutKonfirmasiInput
    connect?: pegawaiWhereUniqueInput
    update?: XOR<pegawaiUpdateWithoutKonfirmasiInput, pegawaiUncheckedUpdateWithoutKonfirmasiInput>
  }

  export type MitraCreateNestedOneWithoutPegawaiInput = {
    create?: XOR<MitraCreateWithoutPegawaiInput, MitraUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: MitraCreateOrConnectWithoutPegawaiInput
    connect?: MitraWhereUniqueInput
  }

  export type trackingCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<Enumerable<trackingCreateWithoutPegawaiInput>, Enumerable<trackingUncheckedCreateWithoutPegawaiInput>>
    connectOrCreate?: Enumerable<trackingCreateOrConnectWithoutPegawaiInput>
    createMany?: trackingCreateManyPegawaiInputEnvelope
    connect?: Enumerable<trackingWhereUniqueInput>
  }

  export type konfirmasiCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<Enumerable<konfirmasiCreateWithoutPegawaiInput>, Enumerable<konfirmasiUncheckedCreateWithoutPegawaiInput>>
    connectOrCreate?: Enumerable<konfirmasiCreateOrConnectWithoutPegawaiInput>
    createMany?: konfirmasiCreateManyPegawaiInputEnvelope
    connect?: Enumerable<konfirmasiWhereUniqueInput>
  }

  export type trackingUncheckedCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<Enumerable<trackingCreateWithoutPegawaiInput>, Enumerable<trackingUncheckedCreateWithoutPegawaiInput>>
    connectOrCreate?: Enumerable<trackingCreateOrConnectWithoutPegawaiInput>
    createMany?: trackingCreateManyPegawaiInputEnvelope
    connect?: Enumerable<trackingWhereUniqueInput>
  }

  export type konfirmasiUncheckedCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<Enumerable<konfirmasiCreateWithoutPegawaiInput>, Enumerable<konfirmasiUncheckedCreateWithoutPegawaiInput>>
    connectOrCreate?: Enumerable<konfirmasiCreateOrConnectWithoutPegawaiInput>
    createMany?: konfirmasiCreateManyPegawaiInputEnvelope
    connect?: Enumerable<konfirmasiWhereUniqueInput>
  }

  export type MitraUpdateOneRequiredWithoutPegawaiNestedInput = {
    create?: XOR<MitraCreateWithoutPegawaiInput, MitraUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: MitraCreateOrConnectWithoutPegawaiInput
    upsert?: MitraUpsertWithoutPegawaiInput
    connect?: MitraWhereUniqueInput
    update?: XOR<MitraUpdateWithoutPegawaiInput, MitraUncheckedUpdateWithoutPegawaiInput>
  }

  export type trackingUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<Enumerable<trackingCreateWithoutPegawaiInput>, Enumerable<trackingUncheckedCreateWithoutPegawaiInput>>
    connectOrCreate?: Enumerable<trackingCreateOrConnectWithoutPegawaiInput>
    upsert?: Enumerable<trackingUpsertWithWhereUniqueWithoutPegawaiInput>
    createMany?: trackingCreateManyPegawaiInputEnvelope
    set?: Enumerable<trackingWhereUniqueInput>
    disconnect?: Enumerable<trackingWhereUniqueInput>
    delete?: Enumerable<trackingWhereUniqueInput>
    connect?: Enumerable<trackingWhereUniqueInput>
    update?: Enumerable<trackingUpdateWithWhereUniqueWithoutPegawaiInput>
    updateMany?: Enumerable<trackingUpdateManyWithWhereWithoutPegawaiInput>
    deleteMany?: Enumerable<trackingScalarWhereInput>
  }

  export type konfirmasiUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<Enumerable<konfirmasiCreateWithoutPegawaiInput>, Enumerable<konfirmasiUncheckedCreateWithoutPegawaiInput>>
    connectOrCreate?: Enumerable<konfirmasiCreateOrConnectWithoutPegawaiInput>
    upsert?: Enumerable<konfirmasiUpsertWithWhereUniqueWithoutPegawaiInput>
    createMany?: konfirmasiCreateManyPegawaiInputEnvelope
    set?: Enumerable<konfirmasiWhereUniqueInput>
    disconnect?: Enumerable<konfirmasiWhereUniqueInput>
    delete?: Enumerable<konfirmasiWhereUniqueInput>
    connect?: Enumerable<konfirmasiWhereUniqueInput>
    update?: Enumerable<konfirmasiUpdateWithWhereUniqueWithoutPegawaiInput>
    updateMany?: Enumerable<konfirmasiUpdateManyWithWhereWithoutPegawaiInput>
    deleteMany?: Enumerable<konfirmasiScalarWhereInput>
  }

  export type trackingUncheckedUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<Enumerable<trackingCreateWithoutPegawaiInput>, Enumerable<trackingUncheckedCreateWithoutPegawaiInput>>
    connectOrCreate?: Enumerable<trackingCreateOrConnectWithoutPegawaiInput>
    upsert?: Enumerable<trackingUpsertWithWhereUniqueWithoutPegawaiInput>
    createMany?: trackingCreateManyPegawaiInputEnvelope
    set?: Enumerable<trackingWhereUniqueInput>
    disconnect?: Enumerable<trackingWhereUniqueInput>
    delete?: Enumerable<trackingWhereUniqueInput>
    connect?: Enumerable<trackingWhereUniqueInput>
    update?: Enumerable<trackingUpdateWithWhereUniqueWithoutPegawaiInput>
    updateMany?: Enumerable<trackingUpdateManyWithWhereWithoutPegawaiInput>
    deleteMany?: Enumerable<trackingScalarWhereInput>
  }

  export type konfirmasiUncheckedUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<Enumerable<konfirmasiCreateWithoutPegawaiInput>, Enumerable<konfirmasiUncheckedCreateWithoutPegawaiInput>>
    connectOrCreate?: Enumerable<konfirmasiCreateOrConnectWithoutPegawaiInput>
    upsert?: Enumerable<konfirmasiUpsertWithWhereUniqueWithoutPegawaiInput>
    createMany?: konfirmasiCreateManyPegawaiInputEnvelope
    set?: Enumerable<konfirmasiWhereUniqueInput>
    disconnect?: Enumerable<konfirmasiWhereUniqueInput>
    delete?: Enumerable<konfirmasiWhereUniqueInput>
    connect?: Enumerable<konfirmasiWhereUniqueInput>
    update?: Enumerable<konfirmasiUpdateWithWhereUniqueWithoutPegawaiInput>
    updateMany?: Enumerable<konfirmasiUpdateManyWithWhereWithoutPegawaiInput>
    deleteMany?: Enumerable<konfirmasiScalarWhereInput>
  }

  export type MitraCreateNestedOneWithoutAprovalInput = {
    create?: XOR<MitraCreateWithoutAprovalInput, MitraUncheckedCreateWithoutAprovalInput>
    connectOrCreate?: MitraCreateOrConnectWithoutAprovalInput
    connect?: MitraWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutApprovalInput = {
    create?: XOR<AdminCreateWithoutApprovalInput, AdminUncheckedCreateWithoutApprovalInput>
    connectOrCreate?: AdminCreateOrConnectWithoutApprovalInput
    connect?: AdminWhereUniqueInput
  }

  export type MitraUpdateOneRequiredWithoutAprovalNestedInput = {
    create?: XOR<MitraCreateWithoutAprovalInput, MitraUncheckedCreateWithoutAprovalInput>
    connectOrCreate?: MitraCreateOrConnectWithoutAprovalInput
    upsert?: MitraUpsertWithoutAprovalInput
    connect?: MitraWhereUniqueInput
    update?: XOR<MitraUpdateWithoutAprovalInput, MitraUncheckedUpdateWithoutAprovalInput>
  }

  export type AdminUpdateOneRequiredWithoutApprovalNestedInput = {
    create?: XOR<AdminCreateWithoutApprovalInput, AdminUncheckedCreateWithoutApprovalInput>
    connectOrCreate?: AdminCreateOrConnectWithoutApprovalInput
    upsert?: AdminUpsertWithoutApprovalInput
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutApprovalInput, AdminUncheckedUpdateWithoutApprovalInput>
  }

  export type AdminCreateNestedOneWithoutRejectedInput = {
    create?: XOR<AdminCreateWithoutRejectedInput, AdminUncheckedCreateWithoutRejectedInput>
    connectOrCreate?: AdminCreateOrConnectWithoutRejectedInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneRequiredWithoutRejectedNestedInput = {
    create?: XOR<AdminCreateWithoutRejectedInput, AdminUncheckedCreateWithoutRejectedInput>
    connectOrCreate?: AdminCreateOrConnectWithoutRejectedInput
    upsert?: AdminUpsertWithoutRejectedInput
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutRejectedInput, AdminUncheckedUpdateWithoutRejectedInput>
  }

  export type aprovalCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<aprovalCreateWithoutAdminInput>, Enumerable<aprovalUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<aprovalCreateOrConnectWithoutAdminInput>
    createMany?: aprovalCreateManyAdminInputEnvelope
    connect?: Enumerable<aprovalWhereUniqueInput>
  }

  export type RejectedCreateNestedManyWithoutRejectInput = {
    create?: XOR<Enumerable<RejectedCreateWithoutRejectInput>, Enumerable<RejectedUncheckedCreateWithoutRejectInput>>
    connectOrCreate?: Enumerable<RejectedCreateOrConnectWithoutRejectInput>
    createMany?: RejectedCreateManyRejectInputEnvelope
    connect?: Enumerable<RejectedWhereUniqueInput>
  }

  export type aprovalUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<aprovalCreateWithoutAdminInput>, Enumerable<aprovalUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<aprovalCreateOrConnectWithoutAdminInput>
    createMany?: aprovalCreateManyAdminInputEnvelope
    connect?: Enumerable<aprovalWhereUniqueInput>
  }

  export type RejectedUncheckedCreateNestedManyWithoutRejectInput = {
    create?: XOR<Enumerable<RejectedCreateWithoutRejectInput>, Enumerable<RejectedUncheckedCreateWithoutRejectInput>>
    connectOrCreate?: Enumerable<RejectedCreateOrConnectWithoutRejectInput>
    createMany?: RejectedCreateManyRejectInputEnvelope
    connect?: Enumerable<RejectedWhereUniqueInput>
  }

  export type aprovalUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<aprovalCreateWithoutAdminInput>, Enumerable<aprovalUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<aprovalCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<aprovalUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: aprovalCreateManyAdminInputEnvelope
    set?: Enumerable<aprovalWhereUniqueInput>
    disconnect?: Enumerable<aprovalWhereUniqueInput>
    delete?: Enumerable<aprovalWhereUniqueInput>
    connect?: Enumerable<aprovalWhereUniqueInput>
    update?: Enumerable<aprovalUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<aprovalUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<aprovalScalarWhereInput>
  }

  export type RejectedUpdateManyWithoutRejectNestedInput = {
    create?: XOR<Enumerable<RejectedCreateWithoutRejectInput>, Enumerable<RejectedUncheckedCreateWithoutRejectInput>>
    connectOrCreate?: Enumerable<RejectedCreateOrConnectWithoutRejectInput>
    upsert?: Enumerable<RejectedUpsertWithWhereUniqueWithoutRejectInput>
    createMany?: RejectedCreateManyRejectInputEnvelope
    set?: Enumerable<RejectedWhereUniqueInput>
    disconnect?: Enumerable<RejectedWhereUniqueInput>
    delete?: Enumerable<RejectedWhereUniqueInput>
    connect?: Enumerable<RejectedWhereUniqueInput>
    update?: Enumerable<RejectedUpdateWithWhereUniqueWithoutRejectInput>
    updateMany?: Enumerable<RejectedUpdateManyWithWhereWithoutRejectInput>
    deleteMany?: Enumerable<RejectedScalarWhereInput>
  }

  export type aprovalUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<aprovalCreateWithoutAdminInput>, Enumerable<aprovalUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<aprovalCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<aprovalUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: aprovalCreateManyAdminInputEnvelope
    set?: Enumerable<aprovalWhereUniqueInput>
    disconnect?: Enumerable<aprovalWhereUniqueInput>
    delete?: Enumerable<aprovalWhereUniqueInput>
    connect?: Enumerable<aprovalWhereUniqueInput>
    update?: Enumerable<aprovalUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<aprovalUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<aprovalScalarWhereInput>
  }

  export type RejectedUncheckedUpdateManyWithoutRejectNestedInput = {
    create?: XOR<Enumerable<RejectedCreateWithoutRejectInput>, Enumerable<RejectedUncheckedCreateWithoutRejectInput>>
    connectOrCreate?: Enumerable<RejectedCreateOrConnectWithoutRejectInput>
    upsert?: Enumerable<RejectedUpsertWithWhereUniqueWithoutRejectInput>
    createMany?: RejectedCreateManyRejectInputEnvelope
    set?: Enumerable<RejectedWhereUniqueInput>
    disconnect?: Enumerable<RejectedWhereUniqueInput>
    delete?: Enumerable<RejectedWhereUniqueInput>
    connect?: Enumerable<RejectedWhereUniqueInput>
    update?: Enumerable<RejectedUpdateWithWhereUniqueWithoutRejectInput>
    updateMany?: Enumerable<RejectedUpdateManyWithWhereWithoutRejectInput>
    deleteMany?: Enumerable<RejectedScalarWhereInput>
  }

  export type pencatatanCreateNestedOneWithoutDetail_pencatatanInput = {
    create?: XOR<pencatatanCreateWithoutDetail_pencatatanInput, pencatatanUncheckedCreateWithoutDetail_pencatatanInput>
    connectOrCreate?: pencatatanCreateOrConnectWithoutDetail_pencatatanInput
    connect?: pencatatanWhereUniqueInput
  }

  export type pencatatanUpdateOneRequiredWithoutDetail_pencatatanNestedInput = {
    create?: XOR<pencatatanCreateWithoutDetail_pencatatanInput, pencatatanUncheckedCreateWithoutDetail_pencatatanInput>
    connectOrCreate?: pencatatanCreateOrConnectWithoutDetail_pencatatanInput
    upsert?: pencatatanUpsertWithoutDetail_pencatatanInput
    connect?: pencatatanWhereUniqueInput
    update?: XOR<pencatatanUpdateWithoutDetail_pencatatanInput, pencatatanUncheckedUpdateWithoutDetail_pencatatanInput>
  }

  export type MitraCreateNestedOneWithoutPencatatanInput = {
    create?: XOR<MitraCreateWithoutPencatatanInput, MitraUncheckedCreateWithoutPencatatanInput>
    connectOrCreate?: MitraCreateOrConnectWithoutPencatatanInput
    connect?: MitraWhereUniqueInput
  }

  export type detail_pencatatanCreateNestedManyWithoutCatatInput = {
    create?: XOR<Enumerable<detail_pencatatanCreateWithoutCatatInput>, Enumerable<detail_pencatatanUncheckedCreateWithoutCatatInput>>
    connectOrCreate?: Enumerable<detail_pencatatanCreateOrConnectWithoutCatatInput>
    createMany?: detail_pencatatanCreateManyCatatInputEnvelope
    connect?: Enumerable<detail_pencatatanWhereUniqueInput>
  }

  export type detail_pencatatanUncheckedCreateNestedManyWithoutCatatInput = {
    create?: XOR<Enumerable<detail_pencatatanCreateWithoutCatatInput>, Enumerable<detail_pencatatanUncheckedCreateWithoutCatatInput>>
    connectOrCreate?: Enumerable<detail_pencatatanCreateOrConnectWithoutCatatInput>
    createMany?: detail_pencatatanCreateManyCatatInputEnvelope
    connect?: Enumerable<detail_pencatatanWhereUniqueInput>
  }

  export type MitraUpdateOneRequiredWithoutPencatatanNestedInput = {
    create?: XOR<MitraCreateWithoutPencatatanInput, MitraUncheckedCreateWithoutPencatatanInput>
    connectOrCreate?: MitraCreateOrConnectWithoutPencatatanInput
    upsert?: MitraUpsertWithoutPencatatanInput
    connect?: MitraWhereUniqueInput
    update?: XOR<MitraUpdateWithoutPencatatanInput, MitraUncheckedUpdateWithoutPencatatanInput>
  }

  export type detail_pencatatanUpdateManyWithoutCatatNestedInput = {
    create?: XOR<Enumerable<detail_pencatatanCreateWithoutCatatInput>, Enumerable<detail_pencatatanUncheckedCreateWithoutCatatInput>>
    connectOrCreate?: Enumerable<detail_pencatatanCreateOrConnectWithoutCatatInput>
    upsert?: Enumerable<detail_pencatatanUpsertWithWhereUniqueWithoutCatatInput>
    createMany?: detail_pencatatanCreateManyCatatInputEnvelope
    set?: Enumerable<detail_pencatatanWhereUniqueInput>
    disconnect?: Enumerable<detail_pencatatanWhereUniqueInput>
    delete?: Enumerable<detail_pencatatanWhereUniqueInput>
    connect?: Enumerable<detail_pencatatanWhereUniqueInput>
    update?: Enumerable<detail_pencatatanUpdateWithWhereUniqueWithoutCatatInput>
    updateMany?: Enumerable<detail_pencatatanUpdateManyWithWhereWithoutCatatInput>
    deleteMany?: Enumerable<detail_pencatatanScalarWhereInput>
  }

  export type detail_pencatatanUncheckedUpdateManyWithoutCatatNestedInput = {
    create?: XOR<Enumerable<detail_pencatatanCreateWithoutCatatInput>, Enumerable<detail_pencatatanUncheckedCreateWithoutCatatInput>>
    connectOrCreate?: Enumerable<detail_pencatatanCreateOrConnectWithoutCatatInput>
    upsert?: Enumerable<detail_pencatatanUpsertWithWhereUniqueWithoutCatatInput>
    createMany?: detail_pencatatanCreateManyCatatInputEnvelope
    set?: Enumerable<detail_pencatatanWhereUniqueInput>
    disconnect?: Enumerable<detail_pencatatanWhereUniqueInput>
    delete?: Enumerable<detail_pencatatanWhereUniqueInput>
    connect?: Enumerable<detail_pencatatanWhereUniqueInput>
    update?: Enumerable<detail_pencatatanUpdateWithWhereUniqueWithoutCatatInput>
    updateMany?: Enumerable<detail_pencatatanUpdateManyWithWhereWithoutCatatInput>
    deleteMany?: Enumerable<detail_pencatatanScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type trackingCreateWithoutVisitorInput = {
    nama_pembeli?: string | null
    alamat_pembeli: string
    kondisi_barang: string
    pegawai?: pegawaiCreateNestedOneWithoutTrackingInput
    mitra: MitraCreateNestedOneWithoutTrackingInput
  }

  export type trackingUncheckedCreateWithoutVisitorInput = {
    id?: number
    nama_pembeli?: string | null
    alamat_pembeli: string
    kondisi_barang: string
    id_mitra: number
    id_pegawai?: number | null
  }

  export type trackingCreateOrConnectWithoutVisitorInput = {
    where: trackingWhereUniqueInput
    create: XOR<trackingCreateWithoutVisitorInput, trackingUncheckedCreateWithoutVisitorInput>
  }

  export type trackingCreateManyVisitorInputEnvelope = {
    data: Enumerable<trackingCreateManyVisitorInput>
    skipDuplicates?: boolean
  }

  export type trackingUpsertWithWhereUniqueWithoutVisitorInput = {
    where: trackingWhereUniqueInput
    update: XOR<trackingUpdateWithoutVisitorInput, trackingUncheckedUpdateWithoutVisitorInput>
    create: XOR<trackingCreateWithoutVisitorInput, trackingUncheckedCreateWithoutVisitorInput>
  }

  export type trackingUpdateWithWhereUniqueWithoutVisitorInput = {
    where: trackingWhereUniqueInput
    data: XOR<trackingUpdateWithoutVisitorInput, trackingUncheckedUpdateWithoutVisitorInput>
  }

  export type trackingUpdateManyWithWhereWithoutVisitorInput = {
    where: trackingScalarWhereInput
    data: XOR<trackingUpdateManyMutationInput, trackingUncheckedUpdateManyWithoutTrackingInput>
  }

  export type trackingScalarWhereInput = {
    AND?: Enumerable<trackingScalarWhereInput>
    OR?: Enumerable<trackingScalarWhereInput>
    NOT?: Enumerable<trackingScalarWhereInput>
    id?: IntFilter | number
    nama_pembeli?: StringNullableFilter | string | null
    alamat_pembeli?: StringFilter | string
    kondisi_barang?: StringFilter | string
    id_pembeli?: IntNullableFilter | number | null
    id_mitra?: IntFilter | number
    id_pegawai?: IntNullableFilter | number | null
  }

  export type VisitorCreateWithoutTrackingInput = {
    name: string
    email: string
    password: string
    alamat: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorUncheckedCreateWithoutTrackingInput = {
    id?: number
    name: string
    email: string
    password: string
    alamat: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorCreateOrConnectWithoutTrackingInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutTrackingInput, VisitorUncheckedCreateWithoutTrackingInput>
  }

  export type pegawaiCreateWithoutTrackingInput = {
    name: string
    email: string
    password: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    work: MitraCreateNestedOneWithoutPegawaiInput
    konfirmasi?: konfirmasiCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiUncheckedCreateWithoutTrackingInput = {
    id?: number
    workAt: number
    name: string
    email: string
    password: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    konfirmasi?: konfirmasiUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiCreateOrConnectWithoutTrackingInput = {
    where: pegawaiWhereUniqueInput
    create: XOR<pegawaiCreateWithoutTrackingInput, pegawaiUncheckedCreateWithoutTrackingInput>
  }

  export type MitraCreateWithoutTrackingInput = {
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aproval?: aprovalCreateNestedManyWithoutAccInput
    pegawai?: pegawaiCreateNestedManyWithoutWorkInput
    pencatatan?: pencatatanCreateNestedManyWithoutPemilikInput
    bukti_bayar?: bukti_bayarCreateNestedManyWithoutMitraInput
  }

  export type MitraUncheckedCreateWithoutTrackingInput = {
    id?: number
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aproval?: aprovalUncheckedCreateNestedManyWithoutAccInput
    pegawai?: pegawaiUncheckedCreateNestedManyWithoutWorkInput
    pencatatan?: pencatatanUncheckedCreateNestedManyWithoutPemilikInput
    bukti_bayar?: bukti_bayarUncheckedCreateNestedManyWithoutMitraInput
  }

  export type MitraCreateOrConnectWithoutTrackingInput = {
    where: MitraWhereUniqueInput
    create: XOR<MitraCreateWithoutTrackingInput, MitraUncheckedCreateWithoutTrackingInput>
  }

  export type VisitorUpsertWithoutTrackingInput = {
    update: XOR<VisitorUpdateWithoutTrackingInput, VisitorUncheckedUpdateWithoutTrackingInput>
    create: XOR<VisitorCreateWithoutTrackingInput, VisitorUncheckedCreateWithoutTrackingInput>
  }

  export type VisitorUpdateWithoutTrackingInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorUncheckedUpdateWithoutTrackingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pegawaiUpsertWithoutTrackingInput = {
    update: XOR<pegawaiUpdateWithoutTrackingInput, pegawaiUncheckedUpdateWithoutTrackingInput>
    create: XOR<pegawaiCreateWithoutTrackingInput, pegawaiUncheckedCreateWithoutTrackingInput>
  }

  export type pegawaiUpdateWithoutTrackingInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: MitraUpdateOneRequiredWithoutPegawaiNestedInput
    konfirmasi?: konfirmasiUpdateManyWithoutPegawaiNestedInput
  }

  export type pegawaiUncheckedUpdateWithoutTrackingInput = {
    id?: IntFieldUpdateOperationsInput | number
    workAt?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    konfirmasi?: konfirmasiUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type MitraUpsertWithoutTrackingInput = {
    update: XOR<MitraUpdateWithoutTrackingInput, MitraUncheckedUpdateWithoutTrackingInput>
    create: XOR<MitraCreateWithoutTrackingInput, MitraUncheckedCreateWithoutTrackingInput>
  }

  export type MitraUpdateWithoutTrackingInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aproval?: aprovalUpdateManyWithoutAccNestedInput
    pegawai?: pegawaiUpdateManyWithoutWorkNestedInput
    pencatatan?: pencatatanUpdateManyWithoutPemilikNestedInput
    bukti_bayar?: bukti_bayarUpdateManyWithoutMitraNestedInput
  }

  export type MitraUncheckedUpdateWithoutTrackingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aproval?: aprovalUncheckedUpdateManyWithoutAccNestedInput
    pegawai?: pegawaiUncheckedUpdateManyWithoutWorkNestedInput
    pencatatan?: pencatatanUncheckedUpdateManyWithoutPemilikNestedInput
    bukti_bayar?: bukti_bayarUncheckedUpdateManyWithoutMitraNestedInput
  }

  export type aprovalCreateWithoutAccInput = {
    admin: AdminCreateNestedOneWithoutApprovalInput
  }

  export type aprovalUncheckedCreateWithoutAccInput = {
    id?: number
    diacc_oleh: number
  }

  export type aprovalCreateOrConnectWithoutAccInput = {
    where: aprovalWhereUniqueInput
    create: XOR<aprovalCreateWithoutAccInput, aprovalUncheckedCreateWithoutAccInput>
  }

  export type aprovalCreateManyAccInputEnvelope = {
    data: Enumerable<aprovalCreateManyAccInput>
    skipDuplicates?: boolean
  }

  export type pegawaiCreateWithoutWorkInput = {
    name: string
    email: string
    password: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: trackingCreateNestedManyWithoutPegawaiInput
    konfirmasi?: konfirmasiCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiUncheckedCreateWithoutWorkInput = {
    id?: number
    name: string
    email: string
    password: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: trackingUncheckedCreateNestedManyWithoutPegawaiInput
    konfirmasi?: konfirmasiUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiCreateOrConnectWithoutWorkInput = {
    where: pegawaiWhereUniqueInput
    create: XOR<pegawaiCreateWithoutWorkInput, pegawaiUncheckedCreateWithoutWorkInput>
  }

  export type pegawaiCreateManyWorkInputEnvelope = {
    data: Enumerable<pegawaiCreateManyWorkInput>
    skipDuplicates?: boolean
  }

  export type pencatatanCreateWithoutPemilikInput = {
    nama_pencatatan: string
    detail_pencatatan?: detail_pencatatanCreateNestedManyWithoutCatatInput
  }

  export type pencatatanUncheckedCreateWithoutPemilikInput = {
    id?: number
    nama_pencatatan: string
    detail_pencatatan?: detail_pencatatanUncheckedCreateNestedManyWithoutCatatInput
  }

  export type pencatatanCreateOrConnectWithoutPemilikInput = {
    where: pencatatanWhereUniqueInput
    create: XOR<pencatatanCreateWithoutPemilikInput, pencatatanUncheckedCreateWithoutPemilikInput>
  }

  export type pencatatanCreateManyPemilikInputEnvelope = {
    data: Enumerable<pencatatanCreateManyPemilikInput>
    skipDuplicates?: boolean
  }

  export type bukti_bayarCreateWithoutMitraInput = {
    bukti_bayar: string
    status?: number
    expire?: Date | string | null
  }

  export type bukti_bayarUncheckedCreateWithoutMitraInput = {
    id?: number
    bukti_bayar: string
    status?: number
    expire?: Date | string | null
  }

  export type bukti_bayarCreateOrConnectWithoutMitraInput = {
    where: bukti_bayarWhereUniqueInput
    create: XOR<bukti_bayarCreateWithoutMitraInput, bukti_bayarUncheckedCreateWithoutMitraInput>
  }

  export type bukti_bayarCreateManyMitraInputEnvelope = {
    data: Enumerable<bukti_bayarCreateManyMitraInput>
    skipDuplicates?: boolean
  }

  export type trackingCreateWithoutMitraInput = {
    nama_pembeli?: string | null
    alamat_pembeli: string
    kondisi_barang: string
    visitor?: VisitorCreateNestedOneWithoutTrackingInput
    pegawai?: pegawaiCreateNestedOneWithoutTrackingInput
  }

  export type trackingUncheckedCreateWithoutMitraInput = {
    id?: number
    nama_pembeli?: string | null
    alamat_pembeli: string
    kondisi_barang: string
    id_pembeli?: number | null
    id_pegawai?: number | null
  }

  export type trackingCreateOrConnectWithoutMitraInput = {
    where: trackingWhereUniqueInput
    create: XOR<trackingCreateWithoutMitraInput, trackingUncheckedCreateWithoutMitraInput>
  }

  export type trackingCreateManyMitraInputEnvelope = {
    data: Enumerable<trackingCreateManyMitraInput>
    skipDuplicates?: boolean
  }

  export type aprovalUpsertWithWhereUniqueWithoutAccInput = {
    where: aprovalWhereUniqueInput
    update: XOR<aprovalUpdateWithoutAccInput, aprovalUncheckedUpdateWithoutAccInput>
    create: XOR<aprovalCreateWithoutAccInput, aprovalUncheckedCreateWithoutAccInput>
  }

  export type aprovalUpdateWithWhereUniqueWithoutAccInput = {
    where: aprovalWhereUniqueInput
    data: XOR<aprovalUpdateWithoutAccInput, aprovalUncheckedUpdateWithoutAccInput>
  }

  export type aprovalUpdateManyWithWhereWithoutAccInput = {
    where: aprovalScalarWhereInput
    data: XOR<aprovalUpdateManyMutationInput, aprovalUncheckedUpdateManyWithoutAprovalInput>
  }

  export type aprovalScalarWhereInput = {
    AND?: Enumerable<aprovalScalarWhereInput>
    OR?: Enumerable<aprovalScalarWhereInput>
    NOT?: Enumerable<aprovalScalarWhereInput>
    id?: IntFilter | number
    accid?: IntFilter | number
    diacc_oleh?: IntFilter | number
  }

  export type pegawaiUpsertWithWhereUniqueWithoutWorkInput = {
    where: pegawaiWhereUniqueInput
    update: XOR<pegawaiUpdateWithoutWorkInput, pegawaiUncheckedUpdateWithoutWorkInput>
    create: XOR<pegawaiCreateWithoutWorkInput, pegawaiUncheckedCreateWithoutWorkInput>
  }

  export type pegawaiUpdateWithWhereUniqueWithoutWorkInput = {
    where: pegawaiWhereUniqueInput
    data: XOR<pegawaiUpdateWithoutWorkInput, pegawaiUncheckedUpdateWithoutWorkInput>
  }

  export type pegawaiUpdateManyWithWhereWithoutWorkInput = {
    where: pegawaiScalarWhereInput
    data: XOR<pegawaiUpdateManyMutationInput, pegawaiUncheckedUpdateManyWithoutPegawaiInput>
  }

  export type pegawaiScalarWhereInput = {
    AND?: Enumerable<pegawaiScalarWhereInput>
    OR?: Enumerable<pegawaiScalarWhereInput>
    NOT?: Enumerable<pegawaiScalarWhereInput>
    id?: IntFilter | number
    workAt?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    no?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type pencatatanUpsertWithWhereUniqueWithoutPemilikInput = {
    where: pencatatanWhereUniqueInput
    update: XOR<pencatatanUpdateWithoutPemilikInput, pencatatanUncheckedUpdateWithoutPemilikInput>
    create: XOR<pencatatanCreateWithoutPemilikInput, pencatatanUncheckedCreateWithoutPemilikInput>
  }

  export type pencatatanUpdateWithWhereUniqueWithoutPemilikInput = {
    where: pencatatanWhereUniqueInput
    data: XOR<pencatatanUpdateWithoutPemilikInput, pencatatanUncheckedUpdateWithoutPemilikInput>
  }

  export type pencatatanUpdateManyWithWhereWithoutPemilikInput = {
    where: pencatatanScalarWhereInput
    data: XOR<pencatatanUpdateManyMutationInput, pencatatanUncheckedUpdateManyWithoutPencatatanInput>
  }

  export type pencatatanScalarWhereInput = {
    AND?: Enumerable<pencatatanScalarWhereInput>
    OR?: Enumerable<pencatatanScalarWhereInput>
    NOT?: Enumerable<pencatatanScalarWhereInput>
    id?: IntFilter | number
    nama_pencatatan?: StringFilter | string
    milik?: IntFilter | number
  }

  export type bukti_bayarUpsertWithWhereUniqueWithoutMitraInput = {
    where: bukti_bayarWhereUniqueInput
    update: XOR<bukti_bayarUpdateWithoutMitraInput, bukti_bayarUncheckedUpdateWithoutMitraInput>
    create: XOR<bukti_bayarCreateWithoutMitraInput, bukti_bayarUncheckedCreateWithoutMitraInput>
  }

  export type bukti_bayarUpdateWithWhereUniqueWithoutMitraInput = {
    where: bukti_bayarWhereUniqueInput
    data: XOR<bukti_bayarUpdateWithoutMitraInput, bukti_bayarUncheckedUpdateWithoutMitraInput>
  }

  export type bukti_bayarUpdateManyWithWhereWithoutMitraInput = {
    where: bukti_bayarScalarWhereInput
    data: XOR<bukti_bayarUpdateManyMutationInput, bukti_bayarUncheckedUpdateManyWithoutBukti_bayarInput>
  }

  export type bukti_bayarScalarWhereInput = {
    AND?: Enumerable<bukti_bayarScalarWhereInput>
    OR?: Enumerable<bukti_bayarScalarWhereInput>
    NOT?: Enumerable<bukti_bayarScalarWhereInput>
    id?: IntFilter | number
    bukti_bayar?: StringFilter | string
    status?: IntFilter | number
    expire?: DateTimeNullableFilter | Date | string | null
    id_mitra?: IntFilter | number
  }

  export type trackingUpsertWithWhereUniqueWithoutMitraInput = {
    where: trackingWhereUniqueInput
    update: XOR<trackingUpdateWithoutMitraInput, trackingUncheckedUpdateWithoutMitraInput>
    create: XOR<trackingCreateWithoutMitraInput, trackingUncheckedCreateWithoutMitraInput>
  }

  export type trackingUpdateWithWhereUniqueWithoutMitraInput = {
    where: trackingWhereUniqueInput
    data: XOR<trackingUpdateWithoutMitraInput, trackingUncheckedUpdateWithoutMitraInput>
  }

  export type trackingUpdateManyWithWhereWithoutMitraInput = {
    where: trackingScalarWhereInput
    data: XOR<trackingUpdateManyMutationInput, trackingUncheckedUpdateManyWithoutTrackingInput>
  }

  export type MitraCreateWithoutBukti_bayarInput = {
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aproval?: aprovalCreateNestedManyWithoutAccInput
    pegawai?: pegawaiCreateNestedManyWithoutWorkInput
    pencatatan?: pencatatanCreateNestedManyWithoutPemilikInput
    tracking?: trackingCreateNestedManyWithoutMitraInput
  }

  export type MitraUncheckedCreateWithoutBukti_bayarInput = {
    id?: number
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aproval?: aprovalUncheckedCreateNestedManyWithoutAccInput
    pegawai?: pegawaiUncheckedCreateNestedManyWithoutWorkInput
    pencatatan?: pencatatanUncheckedCreateNestedManyWithoutPemilikInput
    tracking?: trackingUncheckedCreateNestedManyWithoutMitraInput
  }

  export type MitraCreateOrConnectWithoutBukti_bayarInput = {
    where: MitraWhereUniqueInput
    create: XOR<MitraCreateWithoutBukti_bayarInput, MitraUncheckedCreateWithoutBukti_bayarInput>
  }

  export type MitraUpsertWithoutBukti_bayarInput = {
    update: XOR<MitraUpdateWithoutBukti_bayarInput, MitraUncheckedUpdateWithoutBukti_bayarInput>
    create: XOR<MitraCreateWithoutBukti_bayarInput, MitraUncheckedCreateWithoutBukti_bayarInput>
  }

  export type MitraUpdateWithoutBukti_bayarInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aproval?: aprovalUpdateManyWithoutAccNestedInput
    pegawai?: pegawaiUpdateManyWithoutWorkNestedInput
    pencatatan?: pencatatanUpdateManyWithoutPemilikNestedInput
    tracking?: trackingUpdateManyWithoutMitraNestedInput
  }

  export type MitraUncheckedUpdateWithoutBukti_bayarInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aproval?: aprovalUncheckedUpdateManyWithoutAccNestedInput
    pegawai?: pegawaiUncheckedUpdateManyWithoutWorkNestedInput
    pencatatan?: pencatatanUncheckedUpdateManyWithoutPemilikNestedInput
    tracking?: trackingUncheckedUpdateManyWithoutMitraNestedInput
  }

  export type pegawaiCreateWithoutKonfirmasiInput = {
    name: string
    email: string
    password: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    work: MitraCreateNestedOneWithoutPegawaiInput
    tracking?: trackingCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiUncheckedCreateWithoutKonfirmasiInput = {
    id?: number
    workAt: number
    name: string
    email: string
    password: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: trackingUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiCreateOrConnectWithoutKonfirmasiInput = {
    where: pegawaiWhereUniqueInput
    create: XOR<pegawaiCreateWithoutKonfirmasiInput, pegawaiUncheckedCreateWithoutKonfirmasiInput>
  }

  export type pegawaiUpsertWithoutKonfirmasiInput = {
    update: XOR<pegawaiUpdateWithoutKonfirmasiInput, pegawaiUncheckedUpdateWithoutKonfirmasiInput>
    create: XOR<pegawaiCreateWithoutKonfirmasiInput, pegawaiUncheckedCreateWithoutKonfirmasiInput>
  }

  export type pegawaiUpdateWithoutKonfirmasiInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: MitraUpdateOneRequiredWithoutPegawaiNestedInput
    tracking?: trackingUpdateManyWithoutPegawaiNestedInput
  }

  export type pegawaiUncheckedUpdateWithoutKonfirmasiInput = {
    id?: IntFieldUpdateOperationsInput | number
    workAt?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: trackingUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type MitraCreateWithoutPegawaiInput = {
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aproval?: aprovalCreateNestedManyWithoutAccInput
    pencatatan?: pencatatanCreateNestedManyWithoutPemilikInput
    bukti_bayar?: bukti_bayarCreateNestedManyWithoutMitraInput
    tracking?: trackingCreateNestedManyWithoutMitraInput
  }

  export type MitraUncheckedCreateWithoutPegawaiInput = {
    id?: number
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aproval?: aprovalUncheckedCreateNestedManyWithoutAccInput
    pencatatan?: pencatatanUncheckedCreateNestedManyWithoutPemilikInput
    bukti_bayar?: bukti_bayarUncheckedCreateNestedManyWithoutMitraInput
    tracking?: trackingUncheckedCreateNestedManyWithoutMitraInput
  }

  export type MitraCreateOrConnectWithoutPegawaiInput = {
    where: MitraWhereUniqueInput
    create: XOR<MitraCreateWithoutPegawaiInput, MitraUncheckedCreateWithoutPegawaiInput>
  }

  export type trackingCreateWithoutPegawaiInput = {
    nama_pembeli?: string | null
    alamat_pembeli: string
    kondisi_barang: string
    visitor?: VisitorCreateNestedOneWithoutTrackingInput
    mitra: MitraCreateNestedOneWithoutTrackingInput
  }

  export type trackingUncheckedCreateWithoutPegawaiInput = {
    id?: number
    nama_pembeli?: string | null
    alamat_pembeli: string
    kondisi_barang: string
    id_pembeli?: number | null
    id_mitra: number
  }

  export type trackingCreateOrConnectWithoutPegawaiInput = {
    where: trackingWhereUniqueInput
    create: XOR<trackingCreateWithoutPegawaiInput, trackingUncheckedCreateWithoutPegawaiInput>
  }

  export type trackingCreateManyPegawaiInputEnvelope = {
    data: Enumerable<trackingCreateManyPegawaiInput>
    skipDuplicates?: boolean
  }

  export type konfirmasiCreateWithoutPegawaiInput = {
    nama_pembeli: string
    alamat_pembeli: string
    keterangan: string
  }

  export type konfirmasiUncheckedCreateWithoutPegawaiInput = {
    id?: number
    nama_pembeli: string
    alamat_pembeli: string
    keterangan: string
  }

  export type konfirmasiCreateOrConnectWithoutPegawaiInput = {
    where: konfirmasiWhereUniqueInput
    create: XOR<konfirmasiCreateWithoutPegawaiInput, konfirmasiUncheckedCreateWithoutPegawaiInput>
  }

  export type konfirmasiCreateManyPegawaiInputEnvelope = {
    data: Enumerable<konfirmasiCreateManyPegawaiInput>
    skipDuplicates?: boolean
  }

  export type MitraUpsertWithoutPegawaiInput = {
    update: XOR<MitraUpdateWithoutPegawaiInput, MitraUncheckedUpdateWithoutPegawaiInput>
    create: XOR<MitraCreateWithoutPegawaiInput, MitraUncheckedCreateWithoutPegawaiInput>
  }

  export type MitraUpdateWithoutPegawaiInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aproval?: aprovalUpdateManyWithoutAccNestedInput
    pencatatan?: pencatatanUpdateManyWithoutPemilikNestedInput
    bukti_bayar?: bukti_bayarUpdateManyWithoutMitraNestedInput
    tracking?: trackingUpdateManyWithoutMitraNestedInput
  }

  export type MitraUncheckedUpdateWithoutPegawaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aproval?: aprovalUncheckedUpdateManyWithoutAccNestedInput
    pencatatan?: pencatatanUncheckedUpdateManyWithoutPemilikNestedInput
    bukti_bayar?: bukti_bayarUncheckedUpdateManyWithoutMitraNestedInput
    tracking?: trackingUncheckedUpdateManyWithoutMitraNestedInput
  }

  export type trackingUpsertWithWhereUniqueWithoutPegawaiInput = {
    where: trackingWhereUniqueInput
    update: XOR<trackingUpdateWithoutPegawaiInput, trackingUncheckedUpdateWithoutPegawaiInput>
    create: XOR<trackingCreateWithoutPegawaiInput, trackingUncheckedCreateWithoutPegawaiInput>
  }

  export type trackingUpdateWithWhereUniqueWithoutPegawaiInput = {
    where: trackingWhereUniqueInput
    data: XOR<trackingUpdateWithoutPegawaiInput, trackingUncheckedUpdateWithoutPegawaiInput>
  }

  export type trackingUpdateManyWithWhereWithoutPegawaiInput = {
    where: trackingScalarWhereInput
    data: XOR<trackingUpdateManyMutationInput, trackingUncheckedUpdateManyWithoutTrackingInput>
  }

  export type konfirmasiUpsertWithWhereUniqueWithoutPegawaiInput = {
    where: konfirmasiWhereUniqueInput
    update: XOR<konfirmasiUpdateWithoutPegawaiInput, konfirmasiUncheckedUpdateWithoutPegawaiInput>
    create: XOR<konfirmasiCreateWithoutPegawaiInput, konfirmasiUncheckedCreateWithoutPegawaiInput>
  }

  export type konfirmasiUpdateWithWhereUniqueWithoutPegawaiInput = {
    where: konfirmasiWhereUniqueInput
    data: XOR<konfirmasiUpdateWithoutPegawaiInput, konfirmasiUncheckedUpdateWithoutPegawaiInput>
  }

  export type konfirmasiUpdateManyWithWhereWithoutPegawaiInput = {
    where: konfirmasiScalarWhereInput
    data: XOR<konfirmasiUpdateManyMutationInput, konfirmasiUncheckedUpdateManyWithoutKonfirmasiInput>
  }

  export type konfirmasiScalarWhereInput = {
    AND?: Enumerable<konfirmasiScalarWhereInput>
    OR?: Enumerable<konfirmasiScalarWhereInput>
    NOT?: Enumerable<konfirmasiScalarWhereInput>
    id?: IntFilter | number
    nama_pembeli?: StringFilter | string
    alamat_pembeli?: StringFilter | string
    keterangan?: StringFilter | string
    id_pegawai?: IntFilter | number
  }

  export type MitraCreateWithoutAprovalInput = {
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pegawai?: pegawaiCreateNestedManyWithoutWorkInput
    pencatatan?: pencatatanCreateNestedManyWithoutPemilikInput
    bukti_bayar?: bukti_bayarCreateNestedManyWithoutMitraInput
    tracking?: trackingCreateNestedManyWithoutMitraInput
  }

  export type MitraUncheckedCreateWithoutAprovalInput = {
    id?: number
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pegawai?: pegawaiUncheckedCreateNestedManyWithoutWorkInput
    pencatatan?: pencatatanUncheckedCreateNestedManyWithoutPemilikInput
    bukti_bayar?: bukti_bayarUncheckedCreateNestedManyWithoutMitraInput
    tracking?: trackingUncheckedCreateNestedManyWithoutMitraInput
  }

  export type MitraCreateOrConnectWithoutAprovalInput = {
    where: MitraWhereUniqueInput
    create: XOR<MitraCreateWithoutAprovalInput, MitraUncheckedCreateWithoutAprovalInput>
  }

  export type AdminCreateWithoutApprovalInput = {
    name: string
    email: string
    password: string
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rejected?: RejectedCreateNestedManyWithoutRejectInput
  }

  export type AdminUncheckedCreateWithoutApprovalInput = {
    id?: number
    name: string
    email: string
    password: string
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rejected?: RejectedUncheckedCreateNestedManyWithoutRejectInput
  }

  export type AdminCreateOrConnectWithoutApprovalInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutApprovalInput, AdminUncheckedCreateWithoutApprovalInput>
  }

  export type MitraUpsertWithoutAprovalInput = {
    update: XOR<MitraUpdateWithoutAprovalInput, MitraUncheckedUpdateWithoutAprovalInput>
    create: XOR<MitraCreateWithoutAprovalInput, MitraUncheckedCreateWithoutAprovalInput>
  }

  export type MitraUpdateWithoutAprovalInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: pegawaiUpdateManyWithoutWorkNestedInput
    pencatatan?: pencatatanUpdateManyWithoutPemilikNestedInput
    bukti_bayar?: bukti_bayarUpdateManyWithoutMitraNestedInput
    tracking?: trackingUpdateManyWithoutMitraNestedInput
  }

  export type MitraUncheckedUpdateWithoutAprovalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: pegawaiUncheckedUpdateManyWithoutWorkNestedInput
    pencatatan?: pencatatanUncheckedUpdateManyWithoutPemilikNestedInput
    bukti_bayar?: bukti_bayarUncheckedUpdateManyWithoutMitraNestedInput
    tracking?: trackingUncheckedUpdateManyWithoutMitraNestedInput
  }

  export type AdminUpsertWithoutApprovalInput = {
    update: XOR<AdminUpdateWithoutApprovalInput, AdminUncheckedUpdateWithoutApprovalInput>
    create: XOR<AdminCreateWithoutApprovalInput, AdminUncheckedCreateWithoutApprovalInput>
  }

  export type AdminUpdateWithoutApprovalInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejected?: RejectedUpdateManyWithoutRejectNestedInput
  }

  export type AdminUncheckedUpdateWithoutApprovalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejected?: RejectedUncheckedUpdateManyWithoutRejectNestedInput
  }

  export type AdminCreateWithoutRejectedInput = {
    name: string
    email: string
    password: string
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approval?: aprovalCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutRejectedInput = {
    id?: number
    name: string
    email: string
    password: string
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approval?: aprovalUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutRejectedInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutRejectedInput, AdminUncheckedCreateWithoutRejectedInput>
  }

  export type AdminUpsertWithoutRejectedInput = {
    update: XOR<AdminUpdateWithoutRejectedInput, AdminUncheckedUpdateWithoutRejectedInput>
    create: XOR<AdminCreateWithoutRejectedInput, AdminUncheckedCreateWithoutRejectedInput>
  }

  export type AdminUpdateWithoutRejectedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approval?: aprovalUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutRejectedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approval?: aprovalUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type aprovalCreateWithoutAdminInput = {
    acc: MitraCreateNestedOneWithoutAprovalInput
  }

  export type aprovalUncheckedCreateWithoutAdminInput = {
    id?: number
    accid: number
  }

  export type aprovalCreateOrConnectWithoutAdminInput = {
    where: aprovalWhereUniqueInput
    create: XOR<aprovalCreateWithoutAdminInput, aprovalUncheckedCreateWithoutAdminInput>
  }

  export type aprovalCreateManyAdminInputEnvelope = {
    data: Enumerable<aprovalCreateManyAdminInput>
    skipDuplicates?: boolean
  }

  export type RejectedCreateWithoutRejectInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type RejectedUncheckedCreateWithoutRejectInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type RejectedCreateOrConnectWithoutRejectInput = {
    where: RejectedWhereUniqueInput
    create: XOR<RejectedCreateWithoutRejectInput, RejectedUncheckedCreateWithoutRejectInput>
  }

  export type RejectedCreateManyRejectInputEnvelope = {
    data: Enumerable<RejectedCreateManyRejectInput>
    skipDuplicates?: boolean
  }

  export type aprovalUpsertWithWhereUniqueWithoutAdminInput = {
    where: aprovalWhereUniqueInput
    update: XOR<aprovalUpdateWithoutAdminInput, aprovalUncheckedUpdateWithoutAdminInput>
    create: XOR<aprovalCreateWithoutAdminInput, aprovalUncheckedCreateWithoutAdminInput>
  }

  export type aprovalUpdateWithWhereUniqueWithoutAdminInput = {
    where: aprovalWhereUniqueInput
    data: XOR<aprovalUpdateWithoutAdminInput, aprovalUncheckedUpdateWithoutAdminInput>
  }

  export type aprovalUpdateManyWithWhereWithoutAdminInput = {
    where: aprovalScalarWhereInput
    data: XOR<aprovalUpdateManyMutationInput, aprovalUncheckedUpdateManyWithoutApprovalInput>
  }

  export type RejectedUpsertWithWhereUniqueWithoutRejectInput = {
    where: RejectedWhereUniqueInput
    update: XOR<RejectedUpdateWithoutRejectInput, RejectedUncheckedUpdateWithoutRejectInput>
    create: XOR<RejectedCreateWithoutRejectInput, RejectedUncheckedCreateWithoutRejectInput>
  }

  export type RejectedUpdateWithWhereUniqueWithoutRejectInput = {
    where: RejectedWhereUniqueInput
    data: XOR<RejectedUpdateWithoutRejectInput, RejectedUncheckedUpdateWithoutRejectInput>
  }

  export type RejectedUpdateManyWithWhereWithoutRejectInput = {
    where: RejectedScalarWhereInput
    data: XOR<RejectedUpdateManyMutationInput, RejectedUncheckedUpdateManyWithoutRejectedInput>
  }

  export type RejectedScalarWhereInput = {
    AND?: Enumerable<RejectedScalarWhereInput>
    OR?: Enumerable<RejectedScalarWhereInput>
    NOT?: Enumerable<RejectedScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    rejected_oleh?: IntFilter | number
  }

  export type pencatatanCreateWithoutDetail_pencatatanInput = {
    nama_pencatatan: string
    pemilik: MitraCreateNestedOneWithoutPencatatanInput
  }

  export type pencatatanUncheckedCreateWithoutDetail_pencatatanInput = {
    id?: number
    nama_pencatatan: string
    milik: number
  }

  export type pencatatanCreateOrConnectWithoutDetail_pencatatanInput = {
    where: pencatatanWhereUniqueInput
    create: XOR<pencatatanCreateWithoutDetail_pencatatanInput, pencatatanUncheckedCreateWithoutDetail_pencatatanInput>
  }

  export type pencatatanUpsertWithoutDetail_pencatatanInput = {
    update: XOR<pencatatanUpdateWithoutDetail_pencatatanInput, pencatatanUncheckedUpdateWithoutDetail_pencatatanInput>
    create: XOR<pencatatanCreateWithoutDetail_pencatatanInput, pencatatanUncheckedCreateWithoutDetail_pencatatanInput>
  }

  export type pencatatanUpdateWithoutDetail_pencatatanInput = {
    nama_pencatatan?: StringFieldUpdateOperationsInput | string
    pemilik?: MitraUpdateOneRequiredWithoutPencatatanNestedInput
  }

  export type pencatatanUncheckedUpdateWithoutDetail_pencatatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pencatatan?: StringFieldUpdateOperationsInput | string
    milik?: IntFieldUpdateOperationsInput | number
  }

  export type MitraCreateWithoutPencatatanInput = {
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aproval?: aprovalCreateNestedManyWithoutAccInput
    pegawai?: pegawaiCreateNestedManyWithoutWorkInput
    bukti_bayar?: bukti_bayarCreateNestedManyWithoutMitraInput
    tracking?: trackingCreateNestedManyWithoutMitraInput
  }

  export type MitraUncheckedCreateWithoutPencatatanInput = {
    id?: number
    name: string
    email: string
    password: string
    no: string
    alamat: string
    usaha: string
    pribadi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aproval?: aprovalUncheckedCreateNestedManyWithoutAccInput
    pegawai?: pegawaiUncheckedCreateNestedManyWithoutWorkInput
    bukti_bayar?: bukti_bayarUncheckedCreateNestedManyWithoutMitraInput
    tracking?: trackingUncheckedCreateNestedManyWithoutMitraInput
  }

  export type MitraCreateOrConnectWithoutPencatatanInput = {
    where: MitraWhereUniqueInput
    create: XOR<MitraCreateWithoutPencatatanInput, MitraUncheckedCreateWithoutPencatatanInput>
  }

  export type detail_pencatatanCreateWithoutCatatInput = {
    tanggal: Date | string
    keterangan: string
    pemasukan: number
    pengeluaran: number
    saldo: number
  }

  export type detail_pencatatanUncheckedCreateWithoutCatatInput = {
    id?: number
    tanggal: Date | string
    keterangan: string
    pemasukan: number
    pengeluaran: number
    saldo: number
  }

  export type detail_pencatatanCreateOrConnectWithoutCatatInput = {
    where: detail_pencatatanWhereUniqueInput
    create: XOR<detail_pencatatanCreateWithoutCatatInput, detail_pencatatanUncheckedCreateWithoutCatatInput>
  }

  export type detail_pencatatanCreateManyCatatInputEnvelope = {
    data: Enumerable<detail_pencatatanCreateManyCatatInput>
    skipDuplicates?: boolean
  }

  export type MitraUpsertWithoutPencatatanInput = {
    update: XOR<MitraUpdateWithoutPencatatanInput, MitraUncheckedUpdateWithoutPencatatanInput>
    create: XOR<MitraCreateWithoutPencatatanInput, MitraUncheckedCreateWithoutPencatatanInput>
  }

  export type MitraUpdateWithoutPencatatanInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aproval?: aprovalUpdateManyWithoutAccNestedInput
    pegawai?: pegawaiUpdateManyWithoutWorkNestedInput
    bukti_bayar?: bukti_bayarUpdateManyWithoutMitraNestedInput
    tracking?: trackingUpdateManyWithoutMitraNestedInput
  }

  export type MitraUncheckedUpdateWithoutPencatatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    usaha?: StringFieldUpdateOperationsInput | string
    pribadi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aproval?: aprovalUncheckedUpdateManyWithoutAccNestedInput
    pegawai?: pegawaiUncheckedUpdateManyWithoutWorkNestedInput
    bukti_bayar?: bukti_bayarUncheckedUpdateManyWithoutMitraNestedInput
    tracking?: trackingUncheckedUpdateManyWithoutMitraNestedInput
  }

  export type detail_pencatatanUpsertWithWhereUniqueWithoutCatatInput = {
    where: detail_pencatatanWhereUniqueInput
    update: XOR<detail_pencatatanUpdateWithoutCatatInput, detail_pencatatanUncheckedUpdateWithoutCatatInput>
    create: XOR<detail_pencatatanCreateWithoutCatatInput, detail_pencatatanUncheckedCreateWithoutCatatInput>
  }

  export type detail_pencatatanUpdateWithWhereUniqueWithoutCatatInput = {
    where: detail_pencatatanWhereUniqueInput
    data: XOR<detail_pencatatanUpdateWithoutCatatInput, detail_pencatatanUncheckedUpdateWithoutCatatInput>
  }

  export type detail_pencatatanUpdateManyWithWhereWithoutCatatInput = {
    where: detail_pencatatanScalarWhereInput
    data: XOR<detail_pencatatanUpdateManyMutationInput, detail_pencatatanUncheckedUpdateManyWithoutDetail_pencatatanInput>
  }

  export type detail_pencatatanScalarWhereInput = {
    AND?: Enumerable<detail_pencatatanScalarWhereInput>
    OR?: Enumerable<detail_pencatatanScalarWhereInput>
    NOT?: Enumerable<detail_pencatatanScalarWhereInput>
    id?: IntFilter | number
    tanggal?: DateTimeFilter | Date | string
    keterangan?: StringFilter | string
    pemasukan?: IntFilter | number
    pengeluaran?: IntFilter | number
    saldo?: IntFilter | number
    detail_dari?: IntFilter | number
  }

  export type trackingCreateManyVisitorInput = {
    id?: number
    nama_pembeli?: string | null
    alamat_pembeli: string
    kondisi_barang: string
    id_mitra: number
    id_pegawai?: number | null
  }

  export type trackingUpdateWithoutVisitorInput = {
    nama_pembeli?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    kondisi_barang?: StringFieldUpdateOperationsInput | string
    pegawai?: pegawaiUpdateOneWithoutTrackingNestedInput
    mitra?: MitraUpdateOneRequiredWithoutTrackingNestedInput
  }

  export type trackingUncheckedUpdateWithoutVisitorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    kondisi_barang?: StringFieldUpdateOperationsInput | string
    id_mitra?: IntFieldUpdateOperationsInput | number
    id_pegawai?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type trackingUncheckedUpdateManyWithoutTrackingInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    kondisi_barang?: StringFieldUpdateOperationsInput | string
    id_mitra?: IntFieldUpdateOperationsInput | number
    id_pegawai?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type aprovalCreateManyAccInput = {
    id?: number
    diacc_oleh: number
  }

  export type pegawaiCreateManyWorkInput = {
    id?: number
    name: string
    email: string
    password: string
    no: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type pencatatanCreateManyPemilikInput = {
    id?: number
    nama_pencatatan: string
  }

  export type bukti_bayarCreateManyMitraInput = {
    id?: number
    bukti_bayar: string
    status?: number
    expire?: Date | string | null
  }

  export type trackingCreateManyMitraInput = {
    id?: number
    nama_pembeli?: string | null
    alamat_pembeli: string
    kondisi_barang: string
    id_pembeli?: number | null
    id_pegawai?: number | null
  }

  export type aprovalUpdateWithoutAccInput = {
    admin?: AdminUpdateOneRequiredWithoutApprovalNestedInput
  }

  export type aprovalUncheckedUpdateWithoutAccInput = {
    id?: IntFieldUpdateOperationsInput | number
    diacc_oleh?: IntFieldUpdateOperationsInput | number
  }

  export type aprovalUncheckedUpdateManyWithoutAprovalInput = {
    id?: IntFieldUpdateOperationsInput | number
    diacc_oleh?: IntFieldUpdateOperationsInput | number
  }

  export type pegawaiUpdateWithoutWorkInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: trackingUpdateManyWithoutPegawaiNestedInput
    konfirmasi?: konfirmasiUpdateManyWithoutPegawaiNestedInput
  }

  export type pegawaiUncheckedUpdateWithoutWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: trackingUncheckedUpdateManyWithoutPegawaiNestedInput
    konfirmasi?: konfirmasiUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type pegawaiUncheckedUpdateManyWithoutPegawaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pencatatanUpdateWithoutPemilikInput = {
    nama_pencatatan?: StringFieldUpdateOperationsInput | string
    detail_pencatatan?: detail_pencatatanUpdateManyWithoutCatatNestedInput
  }

  export type pencatatanUncheckedUpdateWithoutPemilikInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pencatatan?: StringFieldUpdateOperationsInput | string
    detail_pencatatan?: detail_pencatatanUncheckedUpdateManyWithoutCatatNestedInput
  }

  export type pencatatanUncheckedUpdateManyWithoutPencatatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pencatatan?: StringFieldUpdateOperationsInput | string
  }

  export type bukti_bayarUpdateWithoutMitraInput = {
    bukti_bayar?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bukti_bayarUncheckedUpdateWithoutMitraInput = {
    id?: IntFieldUpdateOperationsInput | number
    bukti_bayar?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bukti_bayarUncheckedUpdateManyWithoutBukti_bayarInput = {
    id?: IntFieldUpdateOperationsInput | number
    bukti_bayar?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type trackingUpdateWithoutMitraInput = {
    nama_pembeli?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    kondisi_barang?: StringFieldUpdateOperationsInput | string
    visitor?: VisitorUpdateOneWithoutTrackingNestedInput
    pegawai?: pegawaiUpdateOneWithoutTrackingNestedInput
  }

  export type trackingUncheckedUpdateWithoutMitraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    kondisi_barang?: StringFieldUpdateOperationsInput | string
    id_pembeli?: NullableIntFieldUpdateOperationsInput | number | null
    id_pegawai?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type trackingCreateManyPegawaiInput = {
    id?: number
    nama_pembeli?: string | null
    alamat_pembeli: string
    kondisi_barang: string
    id_pembeli?: number | null
    id_mitra: number
  }

  export type konfirmasiCreateManyPegawaiInput = {
    id?: number
    nama_pembeli: string
    alamat_pembeli: string
    keterangan: string
  }

  export type trackingUpdateWithoutPegawaiInput = {
    nama_pembeli?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    kondisi_barang?: StringFieldUpdateOperationsInput | string
    visitor?: VisitorUpdateOneWithoutTrackingNestedInput
    mitra?: MitraUpdateOneRequiredWithoutTrackingNestedInput
  }

  export type trackingUncheckedUpdateWithoutPegawaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    kondisi_barang?: StringFieldUpdateOperationsInput | string
    id_pembeli?: NullableIntFieldUpdateOperationsInput | number | null
    id_mitra?: IntFieldUpdateOperationsInput | number
  }

  export type konfirmasiUpdateWithoutPegawaiInput = {
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
  }

  export type konfirmasiUncheckedUpdateWithoutPegawaiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
  }

  export type konfirmasiUncheckedUpdateManyWithoutKonfirmasiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    alamat_pembeli?: StringFieldUpdateOperationsInput | string
    keterangan?: StringFieldUpdateOperationsInput | string
  }

  export type aprovalCreateManyAdminInput = {
    id?: number
    accid: number
  }

  export type RejectedCreateManyRejectInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type aprovalUpdateWithoutAdminInput = {
    acc?: MitraUpdateOneRequiredWithoutAprovalNestedInput
  }

  export type aprovalUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    accid?: IntFieldUpdateOperationsInput | number
  }

  export type aprovalUncheckedUpdateManyWithoutApprovalInput = {
    id?: IntFieldUpdateOperationsInput | number
    accid?: IntFieldUpdateOperationsInput | number
  }

  export type RejectedUpdateWithoutRejectInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RejectedUncheckedUpdateWithoutRejectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RejectedUncheckedUpdateManyWithoutRejectedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_pencatatanCreateManyCatatInput = {
    id?: number
    tanggal: Date | string
    keterangan: string
    pemasukan: number
    pengeluaran: number
    saldo: number
  }

  export type detail_pencatatanUpdateWithoutCatatInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    keterangan?: StringFieldUpdateOperationsInput | string
    pemasukan?: IntFieldUpdateOperationsInput | number
    pengeluaran?: IntFieldUpdateOperationsInput | number
    saldo?: IntFieldUpdateOperationsInput | number
  }

  export type detail_pencatatanUncheckedUpdateWithoutCatatInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    keterangan?: StringFieldUpdateOperationsInput | string
    pemasukan?: IntFieldUpdateOperationsInput | number
    pengeluaran?: IntFieldUpdateOperationsInput | number
    saldo?: IntFieldUpdateOperationsInput | number
  }

  export type detail_pencatatanUncheckedUpdateManyWithoutDetail_pencatatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    keterangan?: StringFieldUpdateOperationsInput | string
    pemasukan?: IntFieldUpdateOperationsInput | number
    pengeluaran?: IntFieldUpdateOperationsInput | number
    saldo?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}