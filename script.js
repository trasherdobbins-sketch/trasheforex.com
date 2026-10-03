// TrasherForex JavaScript

console.log("Welcome to TrasherForex!");

document.addEventListener("DOMContentLoaded", function () {

    const modules = document.querySelectorAll(".module");

    modules.forEach(function (module) {

        module.addEventListener("click", function () {
            alert("TrasherForex lesson coming soon!");
        });

    });

});
