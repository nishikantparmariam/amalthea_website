
        var scrollEventHandler = function()
        {
        window.scroll(0, window.pageYOffset)
        }
        window.addEventListener("scroll", scrollEventHandler, false); 
        function submitForm() {
            var teamname = $("#teamname").val();            

            var memonename = $("#memonename").val();                        
            var memonemobile = $("#memonemobile").val();                
            var memoneemail = $("#memoneemail").val();      
            
            var memtwoname = $("#memtwoname").val();                        
            var memtwomobile = $("#memtwomobile").val();                
            var memtwoemail = $("#memtwoemail").val();      

            if(teamname == null || memonename == null || memonemobile == null || memoneemail == null || memtwoname == null || memtwomobile == null || memtwoemail == null ){
                error_show("Please fill all the fields");
            } else {

                if(teamname.trim()=="" || memonename.trim()=="" || memonemobile.trim()=="" || memoneemail.trim()=="" || memtwoname.trim()=="" || memtwomobile.trim()=="" || memtwoemail.trim()=="" ){                    
                    error_show("Please fill all the fields");
                }
                else {
                    if(true){                                                        
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycbySFN2XHozqVwQ98KRBpThSSaCaEWwlP3d5Ei3WgAO-CZsY-u8/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: { 
                                TeamName:teamname,                                
                                Name1:memonename,                                
                                Mobile1:memonemobile,                                                                
                                Email1:memoneemail,                                  
                                Name2:memtwoname,                                
                                Mobile2:memtwomobile,                                                                
                                Email2:memtwoemail,                                                                                                      
                            }
                        });
                        //console.log(jqxhr);
                        error_show("Your response has been recorded!!");
                        $("#teamname").val('');            
                        $("#memonename").val('');                        
                        $("#memonemobile").val('');                            
                        $("#memoneemail").val('');     
                        $("#memtwoname").val('');                        
                        $("#memtwomobile").val('');                            
                        $("#memtwoemail").val('');              
                        
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
        