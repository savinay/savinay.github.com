$(function() {
    $('#sendEmail').click(function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var msg = $('#message').val();
        if (!email) {
            alert("Please enter your email id");
        }
        if (!msg) {
            alert("Please enter your message");
        }
        if (email && msg) {
            var data = {
                name: name,
                email: email,
                phone: phone,
                msg: msg
            }
            $.ajax({
                type: "POST",
                url: '/sendEmail',
                data: data,
                success: function () {
                    console.log("success");
                },
                error: function () {
                    console.log("error");
                }
            });
        }
    })
})

