window.onload = () => {
    const divs = document.querySelectorAll(".one");
    const div = document.querySelector("#one");

    divs.forEach((el)=>{
        el.style.color = "red"
    })

    div.style.color = "green"
}