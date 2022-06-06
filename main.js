let numbers = document.querySelector('[name = elements]')
let text = document.querySelector('[name = texts]')
let type = document.querySelector('[name= type]')
let create = document.querySelector('[name= create]')
let results = document.querySelector(".results")

create.addEventListener("click", (event) => {
  for (let i = 1; i <= numbers.value; i++) {
    if(text.value !== "" && numbers.value !== "" ){
      if (type.value == "Div") {
        let div = document.createElement("div");
        div.innerHTML = text.value
        results.appendChild(div)
        div.className = "box"
        div.title = "Element"
        div.id = "id-" + i
        console.log(results);
      }
      else if (type.value == "Section") {
        let section = document.createElement("section");
        section.innerHTML = text.value
        results.appendChild(section)
        section.className = "box"
        section.title = "Element"
        section.id = "id-" + i
        console.log("section");
      }
    }
  }
  numbers.value = ""
  text.value = ""
  event.preventDefault()
})