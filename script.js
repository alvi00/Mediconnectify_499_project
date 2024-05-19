$('.order').click(async function () {
    console.log("Button clicked");
    let button = $(this);
    if (!button.hasClass('animate')) {
        button.addClass('animate');
        setTimeout(() => {
            button.removeClass('animate');
        }, 10000); // Continue to show the animation for 10 seconds
    }

    // Wait for 3 seconds before redirecting
    setTimeout(async () => {
        window.location.href = "first_index.html";
    }, 9000);
});
