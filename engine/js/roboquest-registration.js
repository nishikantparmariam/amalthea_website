
        var scrollEventHandler = function()
        {
        window.scroll(0, window.pageYOffset)
        }
        window.addEventListener("scroll", scrollEventHandler, false); 
        function submitForm() {
            var teamname = $("#teamname").val();            

            var memonename = $("#memonename").val();                        
            var memonemobile = $("#memonemobile").val();    
            var memonecollegen = $("#memonecollegen").val();            
            var memonebranch = $("#memonebranch").val();  
            var memoneresp = $("#memoneresp").val();  
            var memoneemail = $("#memoneemail").val();  
            
            var memtwoname = $("#memtwoname").val();                        
            var memtwomobile = $("#memtwomobile").val(); 
            var memtwobranch = $("#memtwobranch").val();                
            var memtwoemail = $("#memtwoemail").val();   

            var memthreename = $("#memthreename").val();                        
            var memthreemobile = $("#memthreemobile").val(); 
            var memthreebranch = $("#memthreebranch").val();                
            var memthreeemail = $("#memthreeemail").val();   

            var memfourname = $("#memfourname").val();                        
            var memfourmobile = $("#memfourmobile").val(); 
            var memfourbranch = $("#memfourbranch").val();                
            var memfouremail = $("#memfouremail").val();  
            
            
            var memfivename = $("#memfivename").val();                        
            var memfivemobile = $("#memfivemobile").val(); 
            var memfivebranch = $("#memfivebranch").val();                
            var memfiveemail = $("#memfiveemail").val();  

            if(teamname == null || memonename == null || memonemobile == null || memonecollegen == null || memonebranch ==null || memoneresp ==null || memoneemail == null || memtwoname == null || memtwobranch == null || memtwomobile == null || memtwoemail == null){
                error_show("Please fill all the fields");
            } else {

                if(teamname.trim()=="" || memonename.trim()=="" || memonemobile.trim()=="" || memonecollegen.trim()=="" || memonebranch.trim()=="" || memoneresp.trim()=="" || memoneemail.trim()=="" || memtwoname.trim()=="" || memtwobranch.trim()=="" || memtwomobile.trim()=="" || memtwoemail.trim()==""){
                    console.log(teamname, memonename, memonebranch);
                    error_show("Please fill all the fields");
                }
                else {
                    if(true){                                                        
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycbzugxGqrHHRPdGwayPyW9-zdVPnOvFBxCT64KuTE1ixlfO6JA9A/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: { 
                                TeamName:teamname,                                
                                Name1:memonename,                                
                                Mobile1:memonemobile,                                
                                College1:memonecollegen,
                                Branch1:memonebranch,
                                Address1:memoneresp,
                                Email1:memoneemail,                                
                                Name2:memtwoname,
                                Mobile2:memtwomobile,
                                Branch2:memtwobranch,
                                Email2:memtwoemail,
                                Name3:memthreename,
                                Mobile3:memthreemobile,
                                Branch3:memthreebranch,
                                Email3:memthreeemail,
                                Name4:memfourname,
                                Mobile4:memfourmobile,
                                Branch4:memfourbranch,
                                Email4:memfouremail,
                                Name5:memfivename,
                                Mobile5:memfivemobile,
                                Branch5:memfivebranch,
                                Email5:memfiveemail,                                        
                            }
                        });
                        //console.log(jqxhr);
                        error_show("Your response has been recorded!!");
                        $("#teamname").val('');            
                        $("#memonename").val('');                        
                        $("#memonemobile").val('');    
                        $("#memonecollegen").val('');            
                        $("#memonebranch").val('');  
                        $("#memoneresp").val('');  
                        $("#memoneemail").val('');              
                        $("#memtwoname").val('');                        
                        $("#memtwomobile").val(''); 
                        $("#memtwobranch").val('');                
                        $("#memtwoemail").val('');   
                        $("#memthreename").val('');                        
                        $("#memthreemobile").val(''); 
                        $("#memthreebranch").val('');                
                        $("#memthreeemail").val('');   
                        $("#memfourname").val('');                        
                        $("#memfourmobile").val(''); 
                        $("#memfourbranch").val('');                
                        $("#memfouremail").val('');                          
                        $("#memfivename").val('');                        
                        $("#memfivemobile").val(''); 
                        $("#memfivebranch").val('');                
                        $("#memfiveemail").val('');  

                        
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
        