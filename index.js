const light = document.getElementById("dark-light")
const closeSideBar = document.getElementById("close-toggle")
const sidebar = document.querySelector(".sidebar")
const brandToggle = document.getElementById("brand-toggle")
const addBookMark=document.getElementById("add-btn" )
const bookmarkModal=document.querySelector(".modal-overlay")
const closeModal=document.getElementById("close-modal")
const cancelModal =document.getElementById("cancel-modal")
const saveBookmark=document.getElementById("save-bookmark")
const bookmarkTitle=document.getElementById("bookmark-title")
const bookmarkUrl=document.getElementById("bookmark-url")
const bookmarkCategory=document.getElementById("bookmark-category")




light.addEventListener("click", event => {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {
        light.textContent = "🌙︎";

    } else {
        light.textContent = "🔆︎";

    }


})

closeSideBar.addEventListener("click", event => {
    sidebar.classList.add("collapsed");


})
brandToggle.addEventListener("click", event => {
    sidebar.classList.remove("collapsed");

})

addBookMark.addEventListener("click",event=>{

bookmarkModal.hidden=false

})
closeModal.addEventListener("click",event=>{

bookmarkModal.hidden=true

})
cancelModal.addEventListener("click",event=>{

bookmarkModal.hidden=true

})


saveBookmark.addEventListener("click",event=>{

    try {

     

const bookmark={
  title:bookmarkTitle.value,
   url: bookmarkUrl.value,
    category:bookmarkCategory.value

}
//get 

// this how to make array by or
   let bookmarks=JSON.parse(localStorage.getItem("bookmarks")) ||[];
   bookmarks.push(bookmark);

// a key name and value =>
    //add 
localStorage.setItem("bookmarks",
    JSON.stringify(bookmarks)

)


    } catch (error) {
        console.log(error)
    }




})
//console.log(localStorage.getItem("bookmark"))
//localStorage.removeItem("");
//localStorage.clear();








