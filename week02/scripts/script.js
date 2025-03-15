const getInput = document.querySelector("#favchap")
const getSubmitBtn = document.querySelector("#submit")
const getList = document.querySelector("#list")




getSubmitBtn.addEventListener('click',() => {
    const createLi = document.createElement("li")
    const createDelBtn = document.createElement("button")
    createLi.textContent = getInput.value
    createDelBtn.textContent = "❌"
    createDelBtn.ariaLabel = "Delete"
    createDelBtn.className = "delete"

    
    createDelBtn.addEventListener("click", () => {
        createLi.remove();
        getInput.focus();
    });

    createLi.append(createDelBtn)
    getList.append(createLi)
    getInput.value = ""
})




