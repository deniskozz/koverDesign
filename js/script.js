let btntoggle  = document.querySelectorAll(".slider-content");
let btns  = document.querySelectorAll(".slider-button");


for (b  of btns) {
    b.addEventListener("click", function(e) {
            let button = e.target.dataset.tab;
            for (let tab of btntoggle){
                tab.classList.remove("slider-content-visible");
            }

            document.getElementById(button).classList.add("slider-content-visible");
        }
    )
}
