let myLeads = []
let allLeads = []
const saveButton = document.getElementById("saveBtn")
const deleteButton = document.getElementById("deleteBtn")
let inputBar = document.getElementById("floatingTextarea")
let para = document.getElementById("paraElement")
let links = document.getElementById("linkList")
const saveTab = document.getElementById("saveTab")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("currLeads"))
if(leadsFromLocalStorage){
    render(leadsFromLocalStorage)
}


deleteButton.addEventListener("dblclick", function(){
    myLeads =[]
    render(myLeads)
    localStorage.removeItem("currLeads")
})

function render(arrays){
    let renArray = ""
    for(let i=0; i < arrays.length; i++){
        renArray += `
        <a href=${arrays[i]} class="list-group-item list-group-item-action" target = "_blank">${arrays[i]}</a>
        `
    }
    links.innerHTML = renArray
}
saveButton.addEventListener("click", function(){
    //console.log("Save Button Clicked")
    myLeads.push(inputBar.value)
    allLeads.push(inputBar.value)
    inputBar.value = ""
    localStorage.setItem("allLeads", JSON.stringify(allLeads))
    localStorage.setItem("currLeads", JSON.stringify(myLeads))
    render(myLeads)
})


