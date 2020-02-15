const iceCreamModal = {};

iceCreamModal.init = function() {
iceCreamModal.formSubmit();
}

// Open modal when open button is clicked
$(".open").on("click", function(){
    $(".modal, .modal-content, .modal-overlay").addClass("active");
    // Load cursor in input
    $("#email").focus();
    });

// Close modal when close buton is clicked
$(".close").on("click", function(){
    $(".modal, .modal-content, .success, .fail, .modal-overlay").removeClass("active");
    });

// On form submit:
// Don't refresh the page
iceCreamModal.formSubmit = function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        // Validate email 
        if (email.value == ("") || email.value.indexOf('@') === -1) {
            $(".fail").addClass("active") && $(".success").removeClass("active");
        } else {
            $(".success").addClass("active") && $(".fail").removeClass("active");
        } 

        // Clear input after submit
        const inputReset = $('#email').val();
        $('#email').val('');
    })
}

$(function() {
    iceCreamModal.init();
    });