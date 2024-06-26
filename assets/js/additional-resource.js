const tabs = document.querySelectorAll(".tab .tab-button")

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        const content = tab.parentElement.querySelector(".content");
        const icon = tab.querySelector(".dark-fill");

        if(content.classList.contains("d-none")){
            content.classList.remove("d-none")
            icon.classList.add("rotate")
        }else{
            content.classList.add("d-none")
            icon.classList.remove("rotate")
        }
    })
})