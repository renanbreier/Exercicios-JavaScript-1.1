function js_style(){
    const div = document.querySelector("#text");
    if(div.classList.contains("corPadrao")) {
        div.classList.remove("corPadrao");
        div.classList.add("alteraCor");
    }

    else {
        div.classList.remove("alteraCor");
        div.classList.add("corPadrao");
    }

}

window.onload = init;