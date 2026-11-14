const light = document.getElementById("dark-light")
const closeSideBar = document.getElementById("close-toggle")



light.addEventListener("click", event => {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {
        light.textContent = "🌙︎";

    } else {
        light.textContent = "🔆︎";

    }


}
)



closeSideBar.addEventListener("click",event=>{

   sidebar.classList.toggle("collapsed")


})




