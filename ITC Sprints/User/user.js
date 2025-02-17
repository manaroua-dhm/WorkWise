Swal.fire({
    title: "Good job!",
    text: "You Entered User Interface",
    icon: "success",
    timer:2500,
});

//Arrows Down
document.addEventListener("DOMContentLoaded", function() {
    const chapters = document.querySelectorAll(".chapter");
    
    chapters.forEach(chapter => {
        chapter.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.classList.toggle("hidden");
        });
    });
});

//If used CSS
// document.addEventListener("DOMContentLoaded", () => {
        //     document.querySelectorAll(".chapter-toggle").forEach(button => {
        //         button.addEventListener("click", () => {
        //             const chapter = button.nextElementSibling;
        //             const arrow = button.querySelector("span");
        //             chapter.classList.toggle("hidden");
        //             arrow.textContent = chapter.classList.contains("hidden") ? "▼" : "▲";
        //         });
        //     });
        // });



