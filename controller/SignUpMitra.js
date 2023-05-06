class SignUpMitra{
  constructor(payload){
    this.payload=payload
}
    async CekEmail(){
        const response = await fetch("/api/registration",{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.payload)
          })
        const data = await response.json();

        return data
    }
}
export default SignUpMitra;