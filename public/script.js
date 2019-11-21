 $(document).ready(function(){
                // on click Sign In Button checks that username =='admin' and password == 'password'
       $("#login").click(function(){
		     alert($("#loginusername").val()); alert($("#loginpassword").val());
               if( $("#loginusername").val()=='admin' && $("#loginpassword").val()=='admin') {
                        $("#first").hide();
                        $("#second").show();
              }
                else {
                    alert("Please try again");
                }

                $("#logout").click(function() {
                $("form")[0].reset();
                $("#first").show();
                $("#second").hide();
            });
        });

    });