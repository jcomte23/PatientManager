import '../scss/style.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

let quotes = []
let pacientFound

const quotesCache = localStorage.getItem("quotes")
if (quotesCache) {
    quotes = JSON.parse(quotesCache)
}


const namePet = document.getElementById("name_pet")
const namePerson = document.getElementById("name_person")
const phoneperson = document.getElementById("phone_person")
const dateCite = document.getElementById("date_cite")
const timeCite = document.getElementById("time_cite")
const description = document.getElementById("description")
const form = document.getElementById("form")
const divContainerCites = document.querySelector(".container-cites")


form.addEventListener('submit', function (event) {
    event.preventDefault()
    if (!form.checkValidity()) {
        event.preventDefault();
    }
})

divContainerCites.addEventListener("click", function (event) {
    event.preventDefault()
    if (event.target.classList.contains("edit")) {
        const id = event.target.parentElement.parentElement.getAttribute("data-id")
        editCite(id)
    }
    if (event.target.classList.contains("delete")) {
        const id = event.target.parentElement.parentElement.getAttribute("data-id")
        deleteCite(id)
    }
})

function savePatient() {
    let patient = {
        id: Date.now(),
        namePet: namePet.value,
        namePerson: namePerson.value,
        phoneperson: phoneperson.value,
        dateCite: dateCite.value,
        timeCite: timeCite.value,
        description: description.value,
    }

    if (pacientFound) {
        quotes.forEach(function (quote) {
            if (quote.id === pacientFound.id) {
                quote.namePet = patient.namePet
                quote.namePerson = patient.namePerson
                quote.phoneperson = patient.phoneperson
                quote.dateCite = patient.dateCite
                quote.timeCite = patient.timeCite
                quote.description = patient.description
            }
        })
        pacientFound = undefined
    } else {
        quotes.push(patient)
    }

    localStorage.setItem("quotes", JSON.stringify(quotes))
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
            <div class="card-body" data-id="${element.id}">
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
                    <button class="btn btn-primary edit">Editar</button>
                    <button class="btn btn-danger delete">Eliminar</button>
                </div>
            </div>
        </div>
        `
    });
}

function editCite(id) {
    pacientFound = quotes.find(element => element.id == id)
    namePet.value = pacientFound.namePet
    namePerson.value = pacientFound.namePerson
    phoneperson.value = pacientFound.phoneperson
    dateCite.value = pacientFound.dateCite
    timeCite.value = pacientFound.timeCite
    description.value = pacientFound.description
}

function deleteCite(id) {
    quotes = quotes.filter((pacient) => pacient.id != id)
    localStorage.setItem("quotes", JSON.stringify(quotes))
    showCites()
}

showCites()




