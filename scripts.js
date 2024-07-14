$(document).ready(function() {
    // Initialize accordion for #accordion element
    $("#accordian").accordion();

    // Initialize slider for #gallery-slider element
    $("#gallery-slider").accordion({
        heightStyle: "content", // Set height style to 'content'
        collapsible: true,      // Allow panels to be collapsed
        active: false           // Start with all panels collapsed
    });
});
