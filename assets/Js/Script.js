const popupmaindiv = document.querySelector(".popupmain"); 
const closebtn = document.querySelector(".closebtn"); 

// Add event listener to the close button
closebtn.addEventListener("click", () => {
    popupmaindiv.style.display = "none";
});
