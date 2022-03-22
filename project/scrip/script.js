//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function contact(){
    document.write(window.screen.height);
    document.write(window.history);
    document.write(window.location);

        var answer = window.confirm("Do u want to proceed");
        
        if (answer == true) {
            window.alert("Submit Successfully");
            window.location.href = "contact.html";
        }
        else {
            window.alert("Not Submitted ");
            window.location.href = "contact.html";
        }
    }