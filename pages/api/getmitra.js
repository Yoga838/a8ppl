import prisma from "@/lib/prisma";
import { authMiddleware } from "@/lib/middleware";

export default authMiddleware(async function handler(req, res){
    if (req.method === 'POST') {
        const userId = req.user.userId;
        const {id} = req.body;
        const mitra = await prisma.mitra.findUnique({
                    where: {
                        id
                    }
                });

        if (!mitra) {
            return res.status(401).json({ message: 'No Data' });
        }

        return res.send( mitra );
    } else {
        return res.status(405).json({ message: 'method not allowed' })
    }
})