$(function() {

    $('.git').each(function() {
        var link = $(this).html();
        $(this).contents().wrap('<a href="https://github.com/petejos80/"></a>');
    });

    $('.linkedin').each(function() {
        var link = $(this).html();
        $(this).contents().wrap('<a href="https://www.linkedin.com/in/jpetersonmn/"></a>');
    });

    $('.stackoverflow').each(function() {
        var link = $(this).html();
        $(this).contents().wrap('<a href="https://stackoverflow.com/users/9081901/joe"></a>');
    });

}); 