import '../scss/style.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

let quotes = []

const namePet = document.getElementById("name_pet")
const namePerson = document.getElementById("name_person")
const phoneperson = document.getElementById("phone_person")
const dateCite = document.getElementById("date_cite")
const timeCite = document.getElementById("time_cite")
const description = document.getElementById("description")
const btnSave = document.getElementById("btnSave")
const divContainerCites = document.querySelector(".container-cites")

btnSave.addEventListener('click', function (event) {
    event.preventDefault()
    savePatient()

})

function savePatient() {
    const patient = {
        namePet: namePet.value,
        namePerson: namePerson.value,
        phoneperson: phoneperson.value,
        dateCite: dateCite.value,
        timeCite: timeCite.value,
        description: description.value,
    }

    quotes.push(patient)
    showCites()
}

function showCites() {
    divContainerCites.innerHTML = ""
    namePet.value = ""
    namePerson.value = ""
    phoneperson.value = ""
    dateCite.value = ""
    timeCite.value = ""
    description.value = ""
    quotes.forEach(element => {

        divContainerCites.innerHTML += `
        <div class="card card_cite">
            <div class="card-body">
            <h5 class="card-title fs-3 fw-bold">${element.namePet}</h5>
            <p class="card-text">
            <div class="d-flex gap-2">
                <span class="fw-bold">Propietario:</span>
                <span>${element.namePerson}</span>
            </div>
            <div class="d-flex gap-2">
                <span class="fw-bold">Telefono:</span>
                <span>${element.phoneperson}</span>
            </div>
            <div class="d-flex gap-2">
                <span class="fw-bold">Fecha:</span>
                <span>${element.dateCite}</span>
            </div>

            <div class="d-flex gap-2">
                <span class="fw-bold">Hora:</span>
                <span>${element.timeCite}</span>
            </div>
            <div class="d-flex gap-2">
                <span class="fw-bold">Sintomas:</span>
                <span>${element.description}</span>
            </div>
            </p>
            <div class="d-flex gap-2">
                <button class="btn btn-primary">Editar</button>
                <button class="btn btn-danger">Eliminar</button>
            </div>
            </div>
        </div>
        `
    });
}

