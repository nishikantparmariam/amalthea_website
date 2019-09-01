
        var scrollEventHandler = function()
        {
        window.scroll(0, window.pageYOffset)
        }
        window.addEventListener("scroll", scrollEventHandler, false); 
        function submitForm() {
            var teamname = $("#teamname").val();
            var ccname = $("#ccname").val();            
            var ideaname = $('#ideaname').val();
            var ideades = $('#ideades').val();

            var memonename = $("#memonename").val();                        
            var memonemobile = $("#memonemobile").val();    
            var memonemobile2 = $("#memonemobile2").val();            
            var memoneemail = $("#memoneemail").val();  
            
            var memtwoname = $("#memtwoname").val();                                 
            var memtwomobile = $("#memtwomobile").val();            
            var memtwoemail = $("#memtwoemail").val();  

            var memthreename = $("#memthreename").val();                                 
            var memthreemobile = $("#memthreemobile").val();            
            var memthreeemail = $("#memthreeemail").val();  

            var memfourname = $("#memfourname").val();                                    
            var memfourmobile = $("#memfourmobile").val();            
            var memfouremail = $("#memfouremail").val();  

            var memfivename = $("#memfivename").val();                                    
            var memfivemobile = $("#memfivemobile").val();            
            var memfiveemail = $("#memfiveemail").val();  

            if(teamname == null || ccname == null || ideaname == null || ideades == null || memonemobile == null || memonemobile2 == null  || memonename == null || memoneemail == null ){
                error_show("Please fill all the fields");
            } else {

                if(teamname.trim() == "" || ccname.trim() == "" || ideaname.trim() == "" || ideades.trim() == "" || memonemobile.trim() == "" || memonemobile2.trim() == ""  || memonename.trim() == "" || memoneemail.trim() == "" ){
                    error_show("Please fill all the fields");
                }
                else {
                    if(true){                                                        
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycby_vUTaXRo16Gf6vBE8SkLx_HRsTpgjSju_4vvFFdayrAiMGMUn/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: { 
                                TeamName:teamname,
                                College_or_Company:ccname,
                                IdeaName:ideaname,
                                IdeaDescription:ideades,
                                Name1:memonename,                                
                                Mobile1:memonemobile,
                                Mobile12:memonemobile2,
                                Email1:memoneemail,
                                Name2:memtwoname,                                
                                Mobile2:memtwomobile,
                                Email2:memtwoemail,
                                Name3:memthreename,                                
                                Mobile3:memthreemobile,
                                Email3:memthreeemail,
                                Name4:memfourname,                                
                                Mobile4:memfourmobile,
                                Email4:memfouremail,
                                Name5:memfivename,                                
                                Mobile5:memfivemobile,
                                Email5:memfiveemail,                                            
                            }
                        });
                        //console.log(jqxhr);
                        error_show("Your response has been recorded!!");
                        $("#teamname").val('');
                        $("#ccname").val('');            
                        $('#ideaname').val('');
                        $('#ideades').val('');

                        $("#memonename").val('');                        
                        $("#memonemobile").val('');    
                        $("#memonemobile2").val('');            
                        $("#memoneemail").val('');  
                        
                        $("#memtwoname").val('');                                 
                        $("#memtwomobile").val('');            
                        $("#memtwoemail").val('');  

                        $("#memthreename").val('');                                 
                        $("#memthreemobile").val('');            
                        $("#memthreeemail").val('');  

                        $("#memfourname").val('');                                    
                        $("#memfourmobile").val('');            
                        $("#memfouremail").val('');  

                        $("#memfivename").val('');                                    
                        $("#memfivemobile").val('');            
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
        