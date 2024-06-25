const tabs = document.querySelectorAll(".tab .tab-button")

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        const content = tab.parentElement.querySelector(".content");

        if(content.classList.contains("d-none")){
            content.classList.remove("d-none")
        }else{
            content.classList.add("d-none")
        }
    })
})