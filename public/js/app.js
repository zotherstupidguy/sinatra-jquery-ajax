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
	//dataType: dataType
      });
      return false;


      $.ajax({
	url: "/channels",
	data: Cookies.get('access_token'),
	success: function(data){ 
	  // get channel url
	  console.log(Cookies.get('access_token'));
	  console.log("use it to get the channel"); 
	},
	dataType: "json"
      });

      /*
	 $.post("/login", $("#login_form").serialize() , function(data,status){ 
	 alert("Data: " + data + "\nStatus: " + status); 
	 console.log(login_data);
	 $.get( "/channels", function( data ) {
      //$( "#player_area" ).html( data );
      Cookies.set('name', 'value');
      Cookies.set('name', 'value', { expires: 365 });
      Cookies.get('name'); // => 'value'
      Cookies.remove('name');
      alert( "Load was performed." );
      });
      //TODO add if statment here if login status success then load using access token
      //$("#player_area").load("/channels",function(responseTxt,statusTxt,xhr){
      //$("#player_area").load("/channels",function(responseTxt,statusTxt,xhr){
      //  console.log("hi");
      // if(statusTxt=="success") alert("External content loaded successfully!"); 
      // if(statusTxt=="error")
      //  alert("Error: "+xhr.status+": "+xhr.statusText);
      //});

      }); 
      */ 

      }



      });
  });

