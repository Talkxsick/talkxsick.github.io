window.addEventListener("DOMContentLoaded", event => {
    let topButton = document.getElementById("topButton");

    window.onscroll = () => {

        if (
            document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) { topButton.style.display = "block" } else {
            topButton.style.display = "none"
        }

    }
})