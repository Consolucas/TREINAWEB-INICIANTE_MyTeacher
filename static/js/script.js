let teacherForms = document.getElementsByClassName("teacher-contract")

for(let teacherForm of teacherForms) {
    teacherForm.addEventListener("submit", function(event){
        event.preventDefault()

        let price = teacherForm.price.value
        let hours = teacherForm.hours.value
        let name = teacherForm.name.value

        let total = price*hours



        alert("O valor do contrato total com o professor(a) " + name + " é de R$" + total)
    })
}