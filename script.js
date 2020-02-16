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

        // Make sure email field is not blank.
        // Confirmation message.
        if (email.value == ("")) {
            $(".fail").addClass("active") && $(".success").removeClass("active");
        } else {
            $(".success").addClass("active") && $(".fail").removeClass("active");
        } 

        // Clear input after submit
        $('#email').val('');
    })
}

$(function() {
    iceCreamModal.init();
    });