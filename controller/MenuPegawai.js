class MenuPegawai{
  constructor(){

  }
  async MenuPegawai(cookies){
    const response = await fetch("/api/addpegawai",{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${cookies}`,
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    return data
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
  async PegawaiDipilih (payload,cookies){
    const response = await fetch("/api/getpegawai",{
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
  async Simpan (payload,cookies){
    const response = await fetch("/api/editpegawai",{
      method: 'PUT',
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