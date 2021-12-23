function init() {

    let jwtToken = localStorage.getItem('jwt');

    if (!jwtToken) {
        document.getElementById("permission-error").style.display = "inline";
        setTimeout(() => { window.location = '/' }, 2300);

    } else {

        let headersList = {
            "Accept": "*/*",
            "Authorization": "Bearer " + `${jwtToken}`
        }

        fetch('/api/produtos', {
            method: "GET",
            headers: headersList
        }).then(res => res.json())
            .then((produtos => {
                let textHTML = '';
                produtos.forEach(element => {
                    textHTML = '';
                    textHTML += element.id + ': ' + element.descricao + ' - ' + element.marca + ': ' + element.valor + '<br>';
                    document.getElementById('lista_produtos').innerHTML += textHTML
                });
            }));
    }
}



document.onload = init();