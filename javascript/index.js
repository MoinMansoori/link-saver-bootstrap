let myLeads = []
let allLeads = []
const saveButton = document.getElementById("saveBtn")
const deleteButton = document.getElementById("deleteBtn")
let inputBar = document.getElementById("floatingTextarea")
let para = document.getElementById("paraElement")
let links = document.getElementById("linkList")
const saveTab1 = document.getElementById("saveTab")
// const oldLinks = document.getElementById("oldLinks")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("currLeads"))
if (leadsFromLocalStorage) {
    render(leadsFromLocalStorage)
}
// oldLinks.addEventListener("click", function(){
//     let oldLinksfromLS = JSON.parse(localStorage.getItem("allLeads"))
//     if(oldLinksfromLS){
//         render(oldLinksfromLS)
//     }

// })

function render(arrays) {
    let renArray = ""
    for (let i = 0; i < arrays.length; i++) {
        renArray += `
            <a href=${arrays[i]} class="list-group-item list-group-item-action" target = "_blank">${arrays[i]}</a>
            `
    }
    links.innerHTML = renArray
}
deleteButton.addEventListener("dblclick", function () {
    myLeads = []
    render(myLeads)
    localStorage.removeItem("currLeads")
})

saveButton.addEventListener("click", function () {
    //console.log("Save Button Clicked")
    myLeads.push(inputBar.value)
    allLeads.push(inputBar.value)
    inputBar.value = ""
    localStorage.setItem("currLeads", JSON.stringify(myLeads))
    // localStorage.setItem("allLeads", JSON.stringify(allLeads))
    render(myLeads)
})

saveTab1.addEventListener("click", function (){
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("currLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

