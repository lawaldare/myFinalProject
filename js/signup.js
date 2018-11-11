
$(document).ready(function() {

// SIGN UP
$("#signup").click(function(){
		var username = $("#usernamee").val();
    var email = $("#emaill").val();
    var password = $("#passwordd").val();
		alert(username);
		//alert(email);
    //alert(password);
		var url = 'http://localhost:3000/users';
		$.post(url,
		{
			username: username,
			email: email,
      password: password,
		},
		
		function(data, status) {
		  alert("Data: " + data + "\nStatus: " + status);
		});
	});


// LOG IN
$('#loginn').click(function(){
	var username = $("#username").val();
    var password = $("#password").val();
    var error = true;

    //$('#loading').html("<img src=''>").fadeIn('fast');

    $.ajax ({
    	type: "GET",
    	url: url,
    	dataType: "json",
    	success: function(data){
    		$('#loading').fadeOut('fast');

    		$.each(data, function (key, value) {
    			if(username == value.username && password == value.password) {
    				error = false;
    			}
    		});

    		if (error == false) {
    		 	document.location = "/pages/dashboard.html";
    		} else {
    			$('#wrapper').slideUp('slow').slideDown('slow');
    			$('#username').val('');
    			$('#password').val('');
    		}
    	}
    });
    return false;
  });
});