
$(document).ready(function(){
    $(".readMoreBtn").click(function(){
        $(this).closest(".card-body").toggleClass("showContent");
    });
});

const header = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    var top = window.scrollY;
    if(top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
});
