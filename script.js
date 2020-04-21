const iceCreamModal = {};

// Open modal when open button is clicked
iceCreamModal.openModal = function () {
    $(".open").on("click", function(){
        $(".modal, .modal-overlay").addClass("active");
        $("header, main, footer").attr("aria-hidden", "true");
        });
}

// Close modal when close buton is clicked
iceCreamModal.closeModal = function () {
    // or when user clicks outside of modal
    $(".close, .modal-overlay").on("click", function(){
        $(".modal, .success, .fail, .modal-overlay").removeClass("active");
        $("header, main, footer").attr("aria-hidden", "false");
        });
}

// On form submit:
iceCreamModal.formSubmit = function() {
    $('form').on('submit', function (e) {
        // Don't refresh the page
        e.preventDefault();

        // Make sure email field is not blank.
        // Confirmation message
        if (email.value == ("")) {
            $(".fail").addClass("active") && $(".success").removeClass("active");
        } else {
            $(".success").addClass("active") && $(".fail").removeClass("active");
        } 

        // Clear input after submit
        $('#email').val('');
    })
}

iceCreamModal.mobileForm = function () {
    // Maintain normal viewport sizing when virtual keyboard opens on mobile
    setTimeout(function () {
        let viewheight = $(window).height();
        let viewwidth = $(window).width();
        let viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
        }, 300);
}

iceCreamModal.init = function () {
    iceCreamModal.openModal();
    iceCreamModal.formSubmit();
    iceCreamModal.closeModal();
    iceCreamModal.mobileForm();
}

// Document ready
$(function() {
    iceCreamModal.init();
});