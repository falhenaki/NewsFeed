Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
   $(document).ready(function(){
  //document.getElementById("news").style.visibility = "block";
 // document.getElementById("login-form").style.visibility = "hidden"; 

  // document.getElementById("news").remove();
   var xml;
   var valid = false;
  $('#b1').click(function(){
       $.get('users.xml', null, function (data, textStatus) {
           xml=data;
            $(xml).find('details').each( function(){
                var item = $(this);

                if(item.find('username').text()==$('#userid').val() && item.find('password').text()==$('#pwd').val())
                {
					valid = true;
					$("p").append("Hello, welcome " + $('#userid').val() + " we missed you");
					console.log(document.getElementById("news"));
					document.getElementById("news").style.display = "block"; 
					document.getElementById("feedControl").style.display = "block"; 
					document.getElementById("form1").remove();
					console.log(xml);
                    //window.open('success.html');
                }
				
           });
		   if (!valid){
				alert("you entered invalid credentials");
		   }
        });
    });
});