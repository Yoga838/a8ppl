import { sign } from "jsonwebtoken";
import prisma from "@/lib/prisma";
const JWT_SECRET = "My-Lover";
import { compare } from "bcrypt";
export default async function handler(req, res){
    
    if (req.method === 'POST') {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Data tidak boleh kosong!'});
        }

        const visitor = await prisma.Visitor.findUnique({ where: { email } });
        const mitra = await prisma.Mitra.findUnique({ where: { email } });
        const admin = await prisma.Admin.findUnique({ where: { email } });
        const reject = await prisma.rejected.findFirst({ where: { email } });
        

        if (!visitor&&!mitra&&!admin&&!reject) {
            return res.status(401).json({ message: 'Email atau password yang anda masukkan salah!' });
        }
        
        if (visitor){
            const passwordMatch = await compare(password, visitor.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Password yang anda masukkan salah!' });
            }
            const user = "visitor";
            const token = sign({ userId: visitor.id }, JWT_SECRET, { expiresIn: '7d' });
            return res.status(200).json({ token,user});
        }
        if (admin){
            const passwordMatch = await compare(password, admin.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Password yang anda masukkan salah!' });
            }
            const user = "admin";
            const token = sign({ userId: admin.id }, JWT_SECRET, { expiresIn: '7d' });
            return res.status(200).json({ token,user });
        }
        if (mitra){
            const passwordMatch = await compare(password, mitra.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Password yang anda masukkan salah!' });
            }
            const approv = await prisma.aproval.findFirst({where:{accid:mitra.id}})
            if(!approv){
                return res.status(200).json({message:"akun anda belum di approve admin"})
            }
            const user = "mitra";
            const token = sign({ userId: mitra.id }, JWT_SECRET, { expiresIn: '7d' });
            return res.status(200).json({ token,user });
        }
        if (reject){
            const passwordMatch = await compare(password, reject.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Password yang anda masukkan salah!' });
            }
            // const user = "admin";
            // const token = sign({ userId: admin.id }, JWT_SECRET, { expiresIn: '7d' });
            return res.status(200).json({ message:"Akun anda ditolak oleh admin! silahkan coba lagi" });
        }
}
}