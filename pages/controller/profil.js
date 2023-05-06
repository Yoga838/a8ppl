class profil{

    async getDataAkun(role,cookies){
        if(role=='admin'){
            const response = await fetch("/api/getadmin",{
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${cookies}`,
                  'Content-Type': 'application/json'
                }
              })
            const data = await response.json();
            return data;
        }
        if(role=='mitra'){
            const response = await fetch("/api/getmitralog",{
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${cookies}`,
                  'Content-Type': 'application/json'
                }
              })
            const data = await response.json();
            return data;
        }
        if(role=='visitor'){
            const response = await fetch("/api/getuser",{
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${cookies}`,
                  'Content-Type': 'application/json'
                }
              })
            const data = await response.json();
            return data;
        }
        if(role=='pegawai'){
            const response = await fetch("/api/getpegawai",{
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${cookies}`,
                  'Content-Type': 'application/json'
                }
              })
            const data = await response.json();
            return data;
        }
    }
    async UpdateDataAkun(cookies,payload,role){
        if(role=='admin'){
        const response = await fetch("/api/editadmin",{
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
        const data = await response.json();
        return data;
        }
        if(role=='mitra'){
            const response = await fetch("/api/editmitra",{
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${cookies}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
              })
            console.log(payload)
            const data = await response.json();
            return data;
            }
            if(role=='visitor'){
                const response = await fetch("/api/edituser",{
                    method: 'POST',
                    headers: {
                      'Authorization': `Bearer ${cookies}`,
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                  })
                console.log(payload)
                const data = await response.json();
                return data;
            }
            if(role=='pegawai'){
                const response = await fetch("/api/editpegawai",{
                    method: 'POST',
                    headers: {
                      'Authorization': `Bearer ${cookies}`,
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                  })
                console.log(payload)
                const data = await response.json();
                return data;
            }
    }   

}

export default profil