import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req, res){
    if (req.method === 'GET') {
        const userId = req.user.userId;
        const pegawai = await prisma.pegawai.findUnique({
                    where: {
                        id:userId,
                    }
                });

        if (!pegawai) {
            return res.status(401).json({ message: 'No Data' });
        }

        return res.send( pegawai );
    } else {
        return res.status(405).json({ message: 'method not allowed' })
    }
})