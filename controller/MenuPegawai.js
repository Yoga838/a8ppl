class MenuPegawai{
  constructor(payload,cookies){
    this.payload = payload;
    this.cookies = cookies;
}
    async sendData(){
        const response = await fetch("/api/addpegawai",{
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${this.cookies}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.payload)
          })
        const data = await response.json();

        return data
    }
}
export default MenuPegawai;