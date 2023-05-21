class pencatatan {
    constructor(){

    }
    async pencatatan(cookies){
        const response = await fetch("/api/getcatat",{
            method: "GET",
            headers:{
                'Authorization': `Bearer ${cookies}`,
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    }
    async PencatatanDipilih(cookies,payload){
        const response = await fetch("/api/getdetailcatat",{
            method: "POST",
            headers:{
                'Authorization': `Bearer ${cookies}`,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
        })
        const data = await response.json()
        return data
    }
    async GrafikPencatatan(cookies){
        const response = await fetch("/api/getgrafik",{
            method: "GET",
            headers:{
                'Authorization': `Bearer ${cookies}`,
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    }
    async buat (cookies,payload) {
        const response = await fetch("/api/catat",{
            method: "POST",
            headers:{
                'Authorization': `Bearer ${cookies}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const data = await response.json()
        return data
    }
    async simpan (cookies,payload){
        const response = await fetch("/api/catat",{
            method: "PUT",
            headers:{
                'Authorization': `Bearer ${cookies}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const data = await response.json()
        return data
    }
    async hapus (cookies,id){
        const response = await fetch(`/api/catat?id=${id}`,{
            method: "DELETE",
            headers:{
                'Authorization': `Bearer ${cookies}`,
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    }
}


export default pencatatan;