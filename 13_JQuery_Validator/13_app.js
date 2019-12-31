$.validator.setDefaults( {
    submitHandler: function () {
        alert( "Form Submitted Successfully!" );
    }
});

$('#registerForm').validate({
    rules : {
        firstName : {
            required : true,
            minlength : 3
        },
        lastName : {
            required : true,
            minlength : 3
        },
        userName : {
            required : true,
            minlength : 5
        },
        email : {
            required:true,
            email: true
        },
        password : {
            required : true,
            minlength : 5
        },
        c_password : {
            required : true,
            minlength : 5,
            equalTo: "#password"
        },
        terms : {
            required : true
        }
    },
    messages : {
        firstName : {
            required : 'Please Enter the first name',
            minlength : 'Enter at least 3 letters for first name'
        },
        lastName : {
            required : 'Please Enter the last name',
            minlength : 'Enter at least 3 letters for last name'
        },
        userName : {
            required : 'Please Enter the user name',
            minlength : 'Enter at least 5 letters for user name'
        },
        email : {
            required : 'Please Enter your email',
            email : 'Enter a proper email id'
        },
        password : {
            required : 'Please Enter the password',
            minlength : 'Enter at least 5 letters for password'
        },
        c_password : {
            required : 'Please Enter the Confirm Password',
            minlength : 'Enter at least 5 letters for Confirm Password',
            equalTo: "Both the passwords are not matched"
        },
        terms : {
            required : 'Please accept our terms & Conditions'
        }
    },
    errorPlacement: function ( error, element ) {
        // Add the `invalid-feedback` class to the error element
        error.addClass( "invalid-feedback" );

        if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.next( "label" ) );
        } else {
            error.insertAfter( element );
        }
    },
    highlight: function ( element, errorClass, validClass ) {
        $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
    }
});


