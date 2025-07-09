

document.addEventListener("DOMContentLoaded", function() {
    let project_button = document.getElementById("project_button");
    let project_buttons = document.getElementById("project_buttons");
    const popUpProjectButtons = () => {
        project_buttons.style.display = "grid";
    }

    const popOutProjectButtons = () => {
        project_buttons.style.display = "none";
    }

    project_button.addEventListener("mouseover", popUpProjectButtons);
    project_button.addEventListener("mouseleave", popOutProjectButtons);
})