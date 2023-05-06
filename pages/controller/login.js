class Login {
    async cekEmailPassword(payload){
        const response = await fetch("/api/log",{
            method: "POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(payload)
        })
        const data = await response.json();
       
        return data;
    }

}

export default Login;