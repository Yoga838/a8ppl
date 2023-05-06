class SignUpUser{
  constructor(payload){
    this.payload=payload
}
    async CekEmail(){
        const response = await fetch('/api/registration', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.payload)
          });
          const data = await response.json();

          return data
    }
}

export default SignUpUser;