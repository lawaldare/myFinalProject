
$(document).ready(function() {
    function create(data) {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  return fetch(baseUrl, options)
    .then((response) => response.json)
}

   function Createuser(username, email, password){
        this.username =username;
        this.email = email;
        this.password = password;
    }


    $("#register").click(function() {
        baseUrl = 'http://localhost:3000/users';
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        
    let user = new Createuser(username, email, password);

    create(user);
});
});