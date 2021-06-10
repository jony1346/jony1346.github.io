/*!
* Start Bootstrap - New Age v6.0.0 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function changecountbooks() {
    $("#price").val("₪" + ($("#countbooks").val() * 50).toString());
}

function SubForm (){
    $.ajax({
        url:"https://api.apispreadsheets.com/data/13715/",
        type:"post",
        data:$("#buyform").serializeArray(),
        success: function(){
            alert("Form Data Submitted :)")
            document.getElementById("buyform").reset();
        },
        error: function(){
            alert("There was an error :(")
        }
    });

    return false;
}
