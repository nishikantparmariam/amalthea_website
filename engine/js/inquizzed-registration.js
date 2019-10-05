function sendMail(email, name){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            if(response=="done"){                                                                        
                
            }
            else {
                //$(".alertSubscribeTop").html("Please try again");
                //error_show("Please try again");
            }
        }
    };
    xmlhttp.open("GET", "sendMail.php?email="+email+"&name="+name, true);
    xmlhttp.send();     
}
        var scrollEventHandler = function()
        {
        window.scroll(0, window.pageYOffset)
        }
        window.addEventListener("scroll", scrollEventHandler, false); 
        function submitForm() {                        

            var memonename = $("#memonename").val();                        
            var memonemobile = $("#memonemobile").val();    
            var memonecollegen = $("#memonecollegen").val();                        
            var memoneage = $("#memoneage").val();  
            var memoneemail = $("#memoneemail").val();
            
            
            var memtwoname = $("#memtwoname").val();                        
            var memtwomobile = $("#memtwomobile").val();    
            var memtwocollegen = $("#memtwocollegen").val();                        
            var memtwoage = $("#memtwoage").val();  
            var memtwoemail = $("#memtwoemail").val();
            
           

            if(memonename == null || memonemobile == null || memonecollegen == null || memoneage == null || memoneemail ==null || memtwoname == null || memtwomobile == null || memtwocollegen == null || memtwoage == null || memtwoemail ==null){
                error_show("Please fill all the fields");
            } else {

                if(memonename.trim() == "" || memonemobile.trim() == "" || memonecollegen.trim() == "" || memoneage.trim() == "" || memoneemail.trim() == "" || memtwoname.trim() == "" || memtwomobile.trim() == "" || memtwocollegen.trim() == "" || memtwoage.trim() == "" || memtwoemail.trim() == ""){
                    //console.log(teamname, memonename, memonebranch);
                    error_show("Please fill all the fields");
                }
                else {
                    if(true){                                                        
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycby9p3z2wVreT0_ThjuV9Bedo5FnY5l82x4YfNGN28pcTFNttyA/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: {                                                                
                                Name1:memonename,                                
                                Mobile1:memonemobile,                                
                                College1:memonecollegen,
                                Age1:memoneage,
                                Email1:memoneemail,    
                                Name2:memtwoname,                                
                                Mobile2:memtwomobile,                                
                                College2:memtwocollegen,
                                Age2:memtwoage,
                                Email2:memtwoemail,                                                                                                    
                            }
                        });
                        //console.log(jqxhr);
                        error_show("Your response has been recorded!!");
                        $("#memonename").val('');                        
                        $("#memonemobile").val('');    
                        $("#memonecollegen").val('');                        
                        $("#memoneage").val('');  
                        $("#memoneemail").val('');
                        $("#memtwoname").val('');                        
                        $("#memtwomobile").val('');    
                        $("#memtwocollegen").val('');                        
                        $("#memtwoage").val('');  
                        $("#memtwoemail").val('');
                        sendMail(memoneemail, memonename);

                        
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
        