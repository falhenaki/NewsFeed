(function() {
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
});

function xmlToString(xmlData) {

    var xmlString;
    //IE
    if (window.ActiveXObject) {
        xmlString = xmlData.xml;
    }
    // code for Mozilla, Firefox, Opera, etc.
    else {
        xmlString = (new XMLSerializer()).serializeToString(xmlData);
    }
    return xmlString;
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
$(document).ready(function() {
    //document.getElementById("news").style.visibility = "block";
    // document.getElementById("login-form").style.visibility = "hidden"; 

    // document.getElementById("news").remove();
    var xml;
    var valid = false;
    $('#b1').click(function() {
        $.get('users.xml', null, function(data, textStatus) {
            xml = data;
            //   alert(xmlToString(xml));
            $(xml).find('details').each(function() {
                var item = $(this);
                var theusername = $('#userid').val();
                if (item.find('username').text() == theusername && item.find('password').text() == $('#pwd').val()) {
                    valid = true;
					var visit = " this seems to be your first visit";
					if(item.find('lastseen').text() != "" || item.find('lastseen').text() == null){
						visit = "Your last login date/time is" + item.find('lastseen').text();
					}
					
                    $("p").append("Hello, welcome " + $('#userid').val() + visit);
                    //console.log(document.getElementById("news"));
                    document.getElementById("news").style.display = "block";
                    document.getElementById("feedControl").style.display = "block";
					document.getElementById("logout").style.display = "block";
                    document.getElementById("form1").remove();
					document.getElementById("form2").remove();
                    //console.log(xml);
                    var shitty = xmlToString(xml);
                    console.log('this is it' + typeof theusername);
                    //var val1 = xml.val();
                    //console.log(val1);
                    $.ajax({
                        type: "POST",
                        url: 'add.php',
                        data: ({
                            uuser: theusername
                        }),
                        //data: ({myxml:shitty}),
                        success: function(data) {
                            console.log("first" + data);
                           
                            //console.log(data);
                        },
                        error: function(data) {
                            console.log("!!!!1!!!!" + data);
                        }
                    });
					
                    //window.open('success.html');
                }

            });
            if (!valid) {
                alert("you entered invalid credentials");
            }
        });
    });
});

$(document).ready(function() {
    //document.getElementById("news").style.visibility = "block";
    // document.getElementById("login-form").style.visibility = "hidden"; 

    // document.getElementById("news").remove();
    var xml;
    var valid = false;
    $('#b2').click(function() {
        $.get('users.xml', null, function(data, textStatus) {
            xml = data;
			var registrar = $('#ruserid').val();
		    var rpassword = $('#rpwd').val();
			console.log(registrar);
            $(xml).find('details').each(function() {
                var item = $(this);
				console.log('user:' + registrar + ' pass' + rpassword);
                if (item.find('username').text() == registrar) {
					valid = true;
					alert("the username you entered is already registered.");
					return;
                }			
            });
	        $.ajax({
					type: "POST",
                    url: 'register.php',
                    data: ({registrar: registrar,rpassword: rpassword}),
                    success: function(data) {
                        console.log("first" + data);  
						document.getElementById("form2").remove();
						alert("you've been registered, please login. Incase of a failure you may use user 'user1' 'pass1'");
                    },
                    error: function(data) {
						alert("Failure, contact admin or you may use user 'user1' 'pass1'");
                    }
                });
	
        });
    });
});