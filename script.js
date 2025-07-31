// function for contact.html
function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mpwlddqo", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}



// function showSidebar //



function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "none"
}
