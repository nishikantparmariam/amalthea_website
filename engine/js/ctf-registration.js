
        var scrollEventHandler = function()
        {
        window.scroll(0, window.pageYOffset)
        }
        window.addEventListener("scroll", scrollEventHandler, false);
        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        } 
        function submitForm() {
            var fullname = $("#fullname").val();
            var username = $("#username").val();            
            var email = $('#email').val();
            var phone = $('#phone').val();
            var country = $('#country').val();

            if(fullname == null || username == null || email == null || country == null){
                error_show("Please fill all the fields");
            } else {

                if(fullname.trim() == "" || username.trim() == "" || email.trim() == "" || country.trim()==""){
                    error_show("Please fill all the fields");
                }
                else {                    
                    if(validateEmail(email)){                                                        
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycby-7vfsuU-AacaIyTrbjmhidmNB2lTVAgHxShEHuqdGyECZtsM/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: { 
                                Fullname:fullname,
                                CTFusername:username,
                                Email:email,
                                Country:country,
                                Phone:phone                                                                         
                            }
                        });
                        if(true){
                            var xmlhttp = new XMLHttpRequest();
                            xmlhttp.onreadystatechange = function() {
                                if (this.readyState == 4 && this.status == 200) {
                                    var response = this.responseText;
                                    if(response=="done"){                                                                        
                                        error_show("Your response has been recorded!!");
                                        $("#fullname").val('');
                                        $("#username").val('');            
                                        $('#email').val('');
                                        $('#phone').val('');
                                        $('#country').val('');
    
                                    }
                                    else {
                                        //$(".alertSubscribeTop").html("Please try again");
                                        error_show("Please try again");
                                    }
                                }
                            };
                            xmlhttp.open("GET", "sendMail.php?fullname="+fullname+"&username="+username+"&email="+email+"&country="+country, true);
                            xmlhttp.send();
                        } else {
                            $(".alertSubscribeTop").html("Please fill a valid email ID");
                            showAlert("Please fill a valid email ID");
                        }
                        //console.log(jqxhr);
                        //error_show("Your response has been recorded!!");                        

                        
                    }
                    else {
                        error_show("Please provide valid email");
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
        