function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById("nascimento").value
    var res = document.getElementById("resposta")
    var s = ano - nasc
    var genero = ""
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(document.getElementById("feminino").checked && s > 0){
        var genero = "Mulher"
        if(s <= 10){
            //criança
            img.setAttribute('src', '/fotos/mnc.png')
        }else if(s>10 && s <= 17){
            //jovem
            img.setAttribute('src', '/fotos/mnj.png')
        }else if(s>17 && s <= 50){
            //adulto
            img.setAttribute('src', '/fotos/mna.png')
        }else if(s>50){
            //idoso
            img.setAttribute('src', '/fotos/mni.png')
        }

    }else if (document.getElementById("masculino").checked && s > 0){
        var genero = "Homem"
        if(s <= 10){
            img.setAttribute('src', '/fotos/hnc.png')
            //criança
        }else if(s>10 && s <= 17){
            //jovem
            img.setAttribute('src', '/fotos/hnj.png')
        }else if(s>17 && s <= 50){
            //adulto
            img.setAttribute('src', '/fotos/hna.png')
        }else if(s>50){
            //idoso
            img.setAttribute('src', '/fotos/hni.png')
        }
    } else{
        window.alert("VERIFIQUE AS INFORMAÇÕES E TENTE NOVAMENTE")
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Foi detectado ${genero} com ${s} anos de idade`
    res.appendChild(img)  
     
}

