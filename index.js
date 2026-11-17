const light = document.getElementById("dark-light")
const closeSideBar = document.getElementById("close-toggle")
const sidebar = document.querySelector(".sidebar")
const brandToggle = document.getElementById("brand-toggle")
const addBookMark = document.getElementById("add-btn")
const bookmarkModal = document.querySelector(".modal-overlay")
const closeModal = document.getElementById("close-modal")
const cancelModal = document.getElementById("cancel-modal")
const saveBookmark = document.getElementById("save-bookmark")
const bookmarkTitle = document.getElementById("bookmark-title")
const bookmarkUrl = document.getElementById("bookmark-url")
const bookmarkCategory = document.getElementById("bookmark-category")
const emptyState=document.querySelector(".empty-state")



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

addBookMark.addEventListener("click", event => {

    bookmarkModal.hidden = false

})
closeModal.addEventListener("click", event => {

    bookmarkModal.hidden = true

})
cancelModal.addEventListener("click", event => {

    bookmarkModal.hidden = true

})


saveBookmark.addEventListener("click", event => {





 
    //get 

    // this how to make array by or
    

    // a key name and value =>
    //add 



  
})


//Get  from LocalStorage
function getBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

return bookmarks;

 

}
 
   
 
//Save bookmarks to LocalStorage
function saveBookmarks(bookmarks) {


           localStorage.setItem("bookmarks",
        JSON.stringify(bookmarks)

    )

}





// Add new bookmark

function addBookmark() {

      const bookmark = {
        title: bookmarkTitle.value,
        url: bookmarkUrl.value,
        category: bookmarkCategory.value

    }
    const bookmarks= getBookmarks()
    bookmarks.push(bookmark)
    
saveBookmark(bookmarks)
  

}





// Display bookmarks
function renderBookmarks() {
const bookmarks = getBookmarks()
          bookmarks.forEach(bookmark => {



       const { title, url, category } = bookmark

    });

    if(title.value===null){



        throw Error("its empty")

    }else{

        emptyState.display="noun"

    }

    const sTitle= document.createElement("")

sTitle.appendChild=
sTitle.add

}
































//console.log(localStorage.getItem("bookmark"))
//localStorage.removeItem("");
//localStorage.clear();








