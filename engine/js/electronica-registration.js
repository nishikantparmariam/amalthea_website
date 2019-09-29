
        var scrollEventHandler = function()
        {
        window.scroll(0, window.pageYOffset)
        }
        window.addEventListener("scroll", scrollEventHandler, false); 
        function submitForm() {                        

            var memonename = $("#memonename").val();                        
            var memonemobile = $("#memonemobile").val();    
            var memonecollegen = $("#memonecollegen").val();                                    
            var memoneemail = $("#memoneemail").val();
            
            
            var memtwoname = $("#memtwoname").val();                        
            var memtwomobile = $("#memtwomobile").val();    
            var memtwocollegen = $("#memtwocollegen").val();                                
            var memtwoemail = $("#memtwoemail").val();
            
           

            if(memonename == null || memonemobile == null || memonecollegen == null  || memoneemail ==null || memtwoname == null || memtwomobile == null || memtwocollegen == null || memtwoemail ==null){
                error_show("Please fill all the fields");
            } else {

                if(memonename.trim() == "" || memonemobile.trim() == "" || memonecollegen.trim() == ""  || memoneemail.trim() == "" || memtwoname.trim() == "" || memtwomobile.trim() == "" || memtwocollegen.trim() == ""  || memtwoemail.trim() == "" ){
                    //console.log(teamname, memonename, memonebranch);
                    error_show("Please fill all the fields");
                }
                else {
                    if(true){                                                        
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycbyDZPG3DaLCx-826YqYnHc9Vz_6h_5g8FuoYv1TR_30yPxBf3I/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: {                                                                
                                Name1:memonename,                                
                                Mobile1:memonemobile,                                
                                College1:memonecollegen,                                
                                Email1:memoneemail,    
                                Name2:memtwoname,                                
                                Mobile2:memtwomobile,                                
                                College2:memtwocollegen,                                
                                Email2:memtwoemail,                                                                                                    
                            }
                        });
                        //console.log(jqxhr);
                        error_show("Your response has been recorded!!");
                        $("#memonename").val('');                        
                        $("#memonemobile").val('');    
                        $("#memonecollegen").val('');                                                
                        $("#memoneemail").val('');
                        $("#memtwoname").val('');                        
                        $("#memtwomobile").val('');    
                        $("#memtwocollegen").val('');                                                
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
        