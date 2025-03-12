const getInput = document.querySelector("input")
const getBtn = document.querySelector("button")
const getList = document.querySelector("ul")

const createLi = document.createElement("li")
const createBtn = document.createElement("button")
const createDelBtn = document.createElement("button")


createLi.textContent = input.value
createDelBtn.textContent = "❌"
createDelBtn.ariaLabel = "Delete"

createLi.append(createDelBtn)
getList.append(createLi)