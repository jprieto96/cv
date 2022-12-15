// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;

        const serviceID = 'default_service';
        const templateID = 'template_6azf0y6';


        // these IDs from the previous steps
        emailjs.sendForm(serviceID, templateID, this)
            .then(function() {
                console.log('SUCCESS!');
                alert("Your information has been sent correctly. Thank you for contacting me c:");
            }, function(error) {
                console.log('FAILED...', error);
                alert("Your information could not be sent correctly. Please try again.");
            });
    });
}