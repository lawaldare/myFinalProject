$(document).ready(function() {

// SIGN UP

$('#signupform').submit(function(event) {
	var username = $("#usernamee").val();
    var email = $("#emaill").val();
    var password = $("#passwordd").val();
    const redirectToDashboard = function(data, status, jqXHR) {
        if(typeof(data) == 'object') {
            window.location.replace('/pages/signup.html#tologin');
        }
        };
        if ($('#passwordd').val() !== $('#cpasswordd').val()) {
            alert("Your password does not match");
        } else {
            const data = {
				username: username,
                email: email,
                password: password
            };
            $.post('http://localhost:3000/users', data, redirectToDashboard, 'json');
            event.preventDefault();
        }
    });

// LOG IN

$('#loginform').submit(function(event) {
        const redirectToDashboard = function(data, status, jqXHR) {
            if(typeof(data) == 'object' && data.length > 0) {
                window.location.replace('/pages/dashboard.html');
            } else{
				alert('User does not exist');
                //$('#alert').html('<h2>User does not exist</h2>');
            }
        };
        $.get(`http://localhost:3000/users/?username=${$('#username').val()}&password=${$('#password').val()}`, redirectToDashboard);
        event.preventDefault();
    });

});