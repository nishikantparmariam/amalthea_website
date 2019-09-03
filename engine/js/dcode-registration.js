
        var scrollEventHandler = function()
        {
        window.scroll(0, window.pageYOffset)
        }
        window.addEventListener("scroll", scrollEventHandler, false); 
        function submitForm() {
            var fullname = $("#fullname").val();
            var codechef_username = $("#codechef_username").val();            
            var email = $('#email').val();
            var phone = $('#phone').val();

            if(fullname == null || codechef_username == null || email == null){
                error_show("Please fill all the fields");
            } else {

                if(fullname.trim() == "" || codechef_username.trim() == "" || email.trim() == ""){
                    error_show("Please fill all the fields");
                }
                else {
                    if(true){                                                        
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycbwyd7lsrahm3kBQdjKT-9greVW0vo7fdqAoCQogWh9cjdYFCv7T/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: { 
                                FullName:fullname,
                                CodechefUsername:codechef_username,
                                Email:email,
                                Phone:phone                                                                          
                            }
                        });
                        //console.log(jqxhr);
                        error_show("Your response has been recorded!!");
                        $("#fullname").val('');
                        $("#codechef_username").val('');            
                        $('#email').val('');
                        $('#phone').val('');

                        
                    }
                    else {
                        error_show("Please fill valid phone number");
                    }
                }
            }
            
            //console.log(fullname, gender, institute, courseofstudy, year, email_global, contact_number, twitter_id, facebook_id, instagram_id, sop, one, two, three, four, five, six);
        }
        function error_show(e) {            
        var x = document.getElementById("snackbar");
        x.innerHTML=e;
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }
        