document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = form.querySelector("input[name='name']").value;
        const email = form.querySelector("input[name='email']").value;
        const phone = form.querySelector("input[name='phone']").value;
        if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
            alert("Please fill all required fields!");
            event.preventDefault();
        }
    });
});
