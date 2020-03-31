const request = new XMLHttpRequest()

request.open('GET','https://api.kawalcorona.com/indonesia/provinsi/',true)
request.onload = function() {
    //parse JSON
    const data = JSON.parse(this.response)
    if(request.status >=200 && request.status < 400) {

        for(let i = 0; i < data.length; i++) {
            if(data[i].attributes.Provinsi == "Jawa Timur") {
                console.log(data[i].attributes)
                const namaProv = document.getElementById('prov')
                const positif = document.getElementById('positif')
                const sembuh = document.getElementById('sembuh')
                const meninggal = document.getElementById('meninggal')

                namaProv.innerText = data[i].attributes.Provinsi
                positif.innerText = data[i].attributes.Kasus_Posi
                sembuh.innerText = data[i].attributes.Kasus_Semb
                meninggal.innerText = data[i].attributes.Kasus_Meni
                return data[i]
            }
        }

        // const jatim = data.slice(4,5)
        // const dataJatim = jatim[0].attributes
        // console.log(dataJatim)

        // const namaProv = document.getElementById('prov')
        // const positif = document.getElementById('positif')
        // const sembuh = document.getElementById('sembuh')
        // const meninggal = document.getElementById('meninggal')

        // namaProv.innerText = dataJatim.Provinsi
        // positif.innerText = dataJatim.Kasus_Posi
        // sembuh.innerText = dataJatim.Kasus_Semb
        // meninggal.innerText = dataJatim.Kasus_Meni

        


    } else {
        console.error('error')
    }
}

request.send()




const close = document.querySelector('.modal .main-modal span')
const himbauan = document.querySelector('.navbar .nav-links')

//event
himbauan.addEventListener('click', function () {
    close.parentElement.parentElement.style.display = "block"
    himbauan.parentElement.style.filter = "blur(10px)"
    himbauan.parentElement.nextElementSibling.style.filter = "blur(10px)"
    himbauan.parentElement.nextElementSibling.nextElementSibling.style.filter = "blur(10px)"
})

close.addEventListener('click',function() {
    close.parentElement.parentElement.style.display = "none"
    himbauan.parentElement.style.filter = "blur(0)"
    himbauan.parentElement.nextElementSibling.style.filter = "blur(0)"
    himbauan.parentElement.nextElementSibling.nextElementSibling.style.filter = "blur(0)"
})


const hari = new Date()
const hariIni = hari.toLocaleDateString()
const footer = document.querySelector('.footer .footer-logo')
footer.innerText = hariIni