
        var scrollEventHandler = function()
        {
        window.scroll(0, window.pageYOffset)
        }
        window.addEventListener("scroll", scrollEventHandler, false); 
        function submitForm() {
            var fullname = $("#fullname").val();
            var college = $("#college").val();            
            var email = $('#email').val();
            var phone = $('#phone').val();

            if(fullname == null || college == null || email == null || phone == null){
                error_show("Please fill all the fields");
            } else {

                if(fullname.trim() == "" || college.trim() == "" || email.trim() == "" || phone.trim() == ""){
                    error_show("Please fill all the fields");
                }
                else {
                    if(true){                                                        
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycbxWEyJEyya0VnmwX5S2T7HxJfyJz1KklvNvts8B01HL3g6BSEu7/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: { 
                                Name:fullname,
                                College:college,
                                Email:email,
                                Phone:phone                                                                          
                            }
                        });                        
                            error_show("Your response has been recorded!!");
                            $("#fullname").val('');
                            $("#college").val('');            
                            $('#email').val('');
                            $('#phone').val('');
                        //console.log(jqxhr);                        

                        
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
        