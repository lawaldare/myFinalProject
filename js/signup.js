
$(document).ready(function() {


$("#loginn").click(function(){
		var username = $("#username").val();
    //var email = $("#email").val();
    var password = $("#password").val();
		alert(username);
		//alert(email);
    alert(password);
		
		var url = 'http://localhost:3000/users';

		$.get(url,
		{
			username: username,
			email: email,
      password: password,
			
		},
		
		
		function(data, status) {
		  alert("Data: " + data + "\nStatus: " + status);
		});
				
	});


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

});