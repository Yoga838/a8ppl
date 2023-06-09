import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";
import catat from "./catat";

export default authMiddleware(async function handler(req,res){
    if (req.method === "GET"){
        const userId = req.user.userId;
        const id = Number(userId)
        const data = await prisma.$queryRaw`
            SELECT
            p.nama_pencatatan,
            SUM(dp.pemasukan) AS total_pemasukan,
            SUM(dp.pengeluaran) AS total_pengeluaran,
            SUM(dp.saldo) AS total_saldo
            FROM
            pencatatan p
            LEFT JOIN detail_pencatatan dp ON p.id = dp.detail_dari
            WHERE
            dp.tanggal > NOW() - INTERVAL '1 year'AND p.id = ${id}
            GROUP BY
            p.id
            ORDER BY
            p.nama_pencatatan ASC
      `
        const resultStringified = JSON.parse(JSON.stringify(data, (key, value) => {
        if (typeof value === 'bigint') {
          return value.toString()
        }
        return value
      }))
    
      res.status(200).json(resultStringified)
    }
})