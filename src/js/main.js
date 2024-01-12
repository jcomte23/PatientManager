import '../scss/style.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

let quotes=[]

const namePet = document.getElementById("name_pet")
const namePerson = document.getElementById("name_person")
const phoneperson = document.getElementById("phone_person")
const dateCite = document.getElementById("date_cite")
const timeCite = document.getElementById("time_cite")
const description = document.getElementById("description")
const btnSave = document.getElementById("btnSave")
const divContainerCites= document.querySelector(".container-cites")

btnSave.addEventListener('click', function (event) {
    event.preventDefault()
    savePatient()

})

function savePatient() {
    const patient = {
        namePet: namePet.value,
        namePerson:namePerson.value,
        phoneperson: phoneperson.value,
        dateCite: dateCite.value,
        timeCite: timeCite.value,
        description: description.value,
    }

    quotes.push(patient)
    console.log(quotes);
}


