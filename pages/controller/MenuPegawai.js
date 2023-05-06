class MenuPegawai{
  constructor(query){
    this.query=query
}
    async sendData(payload,cookies){
        const response = await fetch("/api/addpegawai",{
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
}
export default MenuPegawai;