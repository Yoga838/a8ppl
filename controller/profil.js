class profil{
  constructor(cookies,payload={},role){
    this.role=role;
    this.cookies=cookies;
    this.payload=payload;
}
    async getDataAkun(){
        if(this.role=='admin'){
            const response = await fetch("/api/getadmin",{
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${this.cookies}`,
                  'Content-Type': 'application/json'
                }
              })
            const data = await response.json();
            return data;
        }
        if(this.role=='mitra'){
            const response = await fetch("/api/getmitralog",{
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${this.cookies}`,
                  'Content-Type': 'application/json'
                }
              })
            const data = await response.json();
            return data;
        }
        if(this.role=='visitor'){
            const response = await fetch("/api/getuser",{
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${this.cookies}`,
                  'Content-Type': 'application/json'
                }
              })
            const data = await response.json();
            return data;
        }
        if(this.role=='pegawai'){
            const response = await fetch("/api/getpegawai",{
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${this.cookies}`,
                  'Content-Type': 'application/json'
                }
              })
            const data = await response.json();
            return data;
        }
    }
    async UpdateDataAkun(){
        if(this.role=='admin'){
        const response = await fetch("/api/editadmin",{
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${thus.cookies}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.payload)
          })
        const data = await response.json();
        return data;
        }
        if(this.role=='mitra'){
            const response = await fetch("/api/editmitra",{
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${this.cookies}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.payload)
              })
            console.log(payload)
            const data = await response.json();
            return data;
            }
            if(this.role=='visitor'){
                const response = await fetch("/api/edituser",{
                    method: 'POST',
                    headers: {
                      'Authorization': `Bearer ${this.cookies}`,
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                  })
                console.log(payload)
                const data = await response.json();
                return data;
            }
            if(this.role=='pegawai'){
                const response = await fetch("/api/editpegawai",{
                    method: 'POST',
                    headers: {
                      'Authorization': `Bearer ${this.cookies}`,
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