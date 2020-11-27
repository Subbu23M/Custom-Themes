window.addEventListener('load',function(){
    document.querySelector('.preloader').classList.add('hidePreLoader')
});

// jQuery
// Ananymous function

$(document).ready (function() {

    // MagnificPopup
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',
    
        gallery: {
            enabled: true
        },
    });

});

// Assign a function to a variable - function Expression

// ES6 Arrow function

const createCars = (() =>{
    console.log('Hello');    
})();