const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if(readMoreBtn.innerText === "Read More"){
        readMoreBtn.innerText = "Read Less";
    } else {
        readMoreBtn.innerText = "Read More";
    }
});

// setInterval(()=>{
//     document.querySelector(".trans").classList.toggle("TranslateBack")}, 2000
// )

setTimeout(()=>{
    document.querySelector(".transHead").classList.add("transback");
},100)

