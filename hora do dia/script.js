function mudar() {
    var msg = window.document.getElementById('mens')
    var img = window.document.getElementById('imag')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 7){
        img.src = 'fotos/madrugadamenor.jpg'
        document.body.style.background = '#caaa91'
    }else if (hora >= 7 && hora < 13){
        img.src = 'fotos/manhamenor.jpg'
        document.body.style.background = '#cebe35'
    }else if(hora >= 13 && hora < 18){
        img.src = 'fotos/tardemenor.jpg'
        document.body.style.background = '#84cae4'
    } else{
        img.src = 'fotos/noitemenor.jpg'
        document.body.style.background = '#220c3b'
    }
}