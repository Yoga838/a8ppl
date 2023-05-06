class SignUpMitra{
  constructor(){
    super()
}
    async CekEmail(payload){
        const response = await fetch("/api/registration",{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
        const data = await response.json();

        return data
    }
}
export default SignUpMitra;