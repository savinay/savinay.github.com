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
            var data_body = {
                name: name,
                email: email,
                phone: phone,
                msg: msg
            }

            message = msg + 'Name and Phone no: are ' + name + ', ' + phone

            $.ajax({
                type: 'POST',
                url: 'https://mandrillapp.com/api/1.0/messages/send.json',
                data: {
                'key': 'o2_eZLXnlK1JeXvabw546g',
                'message': {
                    'from_email': email,
                    'to': [
                        {
                            'email': 'savinay.90@gmail.com',
                            'name': 'Savinay Narendra',
                            'type': 'to'
                        }
                    ],
                    'autotext': 'true',
                    'subject': 'New Email from Personal Website',
                    'html': message
                }
              }
             }).done(function(response) {
               console.log(response); // if you're into that sorta thing
             });



            // $.ajax({
            //     type: "POST",
            //     url: '/sendEmail',
            //     data: data,
            //     success: function () {
            //         console.log("success");
            //     },
            //     error: function () {
            //         console.log("error");
            //     }
            // });
        }
    })
})

