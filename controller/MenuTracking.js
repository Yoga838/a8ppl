class MenuTracking {
    constructor(){

    }
    async MenuTracking(cookies,role){
        if(role === "visitor"){
          const response = await fetch("/api/visitorgetdat",{
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            }
          })
          const data = await response.json();
          return data
        }
        if(role === "pegawai"){
          const response = await fetch("/api/getalltracking",{
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            }
          })
          const data = await response.json();
          return data
        }
        const response = await fetch("/api/getalltracking",{
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        return data
    }
    async buat(cookies,payload){
        const response = await fetch("/api/addtracking",{
            method:"POST",
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
          })
          const data = await response.json()
          return data
    }
    async TrackingDipilih (cookies,payload,role){
        if(role === "visitor"){
          const response = await fetch("/api/visitorgetdat",{
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
          const data = await response.json()
          return data
        }
        if(role === "pegawai"){
          const pegawai = await fetch("/api/getalltracking",{
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
          const data = await pegawai.json()
          return data
        }
        const response = await fetch("/api/getalltracking",{
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const data = await response.json()
        return data
    }
    async simpan (cookies,payload){
      const response = await fetch("/api/edit-tracking",{
        method:"POST",
        headers:{
            'Authorization': `Bearer ${cookies}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json();
      return data
    }

}

export default MenuTracking;