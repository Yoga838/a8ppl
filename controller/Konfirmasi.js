import { id } from "date-fns/locale"

class Konfirmasi{
    constructor(){

    }
    async MenuKonfirmasiPendistribusian(cookies,role){
        if(role === "pegawai"){
          const response = await fetch("/api/getallkonfirmasi",{
            method:"GET",
            headers:{
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json',
            }
          })
          const data = await response.json()
          return data  
        }
        const response = await fetch("/api/getallkonfirmasi",{
          method:"PUT",
          headers:{
            'Authorization': `Bearer ${cookies}`,
            'Content-Type': 'application/json',
          }
        })
        const data = await response.json()
        return data
    }
    async KonfirmasiPendistribusianDipilih(cookies,payload){
        const response = await fetch("/api/getallkonfirmasi",{
            method: 'POST',
            headers: {
            'Authorization': `Bearer ${cookies}`,
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
        })
        const data = await response.json()
        return data
    }
    async Buat(cookies,payload){
      const response = await fetch("/api/addkonfirmasi",{
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
    async simpan (cookies,payload){
      const response = await fetch("/api/addkonfirmasi",{
        method:"PATCH",
        headers:{
          'Authorization': `Bearer ${cookies}`,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(payload)
      })
      const data = await response.json()
      return data
    }
}

export default Konfirmasi;