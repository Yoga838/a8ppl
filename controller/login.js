class Login {
    constructor(payload){
        this.payload=payload
    }
    async cekEmailPassword(){
        const response = await fetch("/api/log",{
            method: "POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(this.payload)
        })
        const data = await response.json();
       
        return data;
    }

}

export default Login;