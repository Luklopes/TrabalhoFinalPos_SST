function createProduct() {
    
    event.preventDefault();
    let productName = document.getElementById('productDescription').value;
    let productBrand = document.getElementById('productBrand').value;
    let productValue = document.getElementById('productValue').value;


    let jwtToken = localStorage.getItem('jwt');
    if (!jwtToken) {
        document.getElementById("permission-error").innerHTML = "Seu acesso expirou, favor logar novamente! Você será redirecionado.";
        document.getElementById("permission-error").style.display = "inline";

        setTimeout(() => { window.location = '/' }, 2300);

    } else {
        let headersList = {
            "Accept": "*/*",
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type": "application/json"
        }
    
        fetch("/api/produtos", {
            method: "POST",
            body: `{\"descricao\": \"${productName}\", \"marca\": \"${productBrand}\", \"valor\": \"${productValue}\"}`,
            headers: headersList
        }).then(response => {        
            return response.json();
        }).then(data => {           
            if (data.message == 'Acesso ADM'){
                document.getElementById("permission-error").innerHTML = "Você não pode executar esta operação!";
                document.getElementById("permission-error").style.display = "inline";
            } else{
                console.log(document.getElementById("permission-error"));
                document.getElementById("sucess-register").innerHTML = "Produto cadastrado com sucesso!"; 
                document.getElementById("sucess-register").style.display = "inline";              
                setTimeout(() => { window.location = '/app' }, 2300);
            }
        }).catch(err => console.log(err));
   
    }




   
  

}



