const filter_btns = document.querySelectorAll(".filter")

filter_btns.forEach((filter, index, array) => {
    const filter_btn = filter.querySelector(".filter_btn")
    filter_btn.addEventListener('click', (e) => {
        const year = filter.querySelector(".select_years").value;
        const posts = filter.parentElement.querySelectorAll(".post");

        posts.forEach(post => {
            const post_year = post.getAttribute('data-year');
            console.log(post_year)
            if(Number(post_year) === Number(year)){
                post.classList.remove("d-none")
            }else{
                post.classList.add("d-none")
            }

        })
        console.log(year)
    })
})