class MenuPengajuanPremium {
    constructor(){

    }
    
    async MenuPengajuanPremium(cookies){
        const response = await fetch("/api/premiumacc",{
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            }
          })
        const data = await response.json();
        return data
    }
    async PengajuanDipilih(cookies,payload){
        const response = await fetch("/api/premiumacc",{
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
        const data = await response.json();
        return data
    }
    async Tolak(cookies,payload){
        const response = await fetch("/api/premiumacc",{
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
        const data = await response.json();
        return data
    }
    async setuju(cookies,payload){
        const response = await fetch("/api/premiumacc",{
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
        const data = await response.json();
        return data
    }

}

export default MenuPengajuanPremium;