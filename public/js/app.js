$(document).ready(function(){

  $("#login").click(function(){
    $("input").prop('required',true);
    if ($("#login_form").valid()) {
      var login_data = $("#login_form").serialize();
      $.ajax({
	type: "POST",
	url: "/auth",
	data: login_data,
	success: function(data){ 
	  console.log(data); 
	  Cookies.set('access_token', data["access_token"]);
	},
	dataType: "json"
      });
      return false;
    }
  });
  $("#channel").click(function(){
    $.ajax({
      url: "/channels?access_token=" + Cookies.get('access_token'),
      //data: data,
      success: function(data){ 
	// get channel url
	console.log(Cookies.get('access_token'));
	console.log("use it to get the channel"); 
      },
      dataType: "json"
    });
    return false;


  });
});

