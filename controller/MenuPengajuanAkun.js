class MenuPengajuanAkun{
    constructor(){

    }
    async MenuPengajuanAkun(cookies){
        const response = await fetch('/api/approval' ,{
            method:"GET",
            headers:{
                'Authorization': `Bearer ${cookies}`,
                'Content-Type': 'application/json',
            }
        } )
        const data = await response.json()
        return data
    }
    async PengajuanDipilih (cookies,accid){
        const send = {
            id:accid
        }
        const response = await fetch("/api/getmitra",{
            method: "POST",
            headers:{
                'Authorization': `Bearer ${cookies}`,
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(send)
        })
        const data = await response.json()
        return data
    }
    async Tolak(cookies,payload){
        const response = await fetch("/api/reject",{
            method:"POST",
            headers:{
                'Authorization': `Bearer ${cookies}`,
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(payload)
        })
        const data = await response.json()
        return data
    }
    async Setuju(cookies,payload){
        const response = await fetch("/api/approval",{
            method:"POST",
            headers:{
                'Authorization': `Bearer ${cookies}`,
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(payload)
        })
        const data = await response.json()
        return data
    }
}
export default MenuPengajuanAkun;