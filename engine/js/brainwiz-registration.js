
        var scrollEventHandler = function()
        {
        window.scroll(0, window.pageYOffset)
        }
        window.addEventListener("scroll", scrollEventHandler, false); 
        function submitForm() {
            var teamname = $("#teamname").val();
            var schoolname = $("#schoolname").val();            

            var memonename = $("#memonename").val();            
            var memonegrade = $("#memonegrade").val();            
            var memonemobile = $("#memonemobile").val();            
            var memoneemail = $("#memoneemail").val();  
            
            var memtwoname = $("#memtwoname").val();            
            var memtwograde = $("#memtwograde").val();            
            var memtwomobile = $("#memtwomobile").val();            
            var memtwoemail = $("#memtwoemail").val();  

            var memthirdname = $("#memthirdname").val();            
            var memthirdgrade = $("#memthirdgrade").val();            
            var memthirdmobile = $("#memthirdmobile").val();            
            var memthirdemail = $("#memthirdemail").val();  

            var memfourthname = $("#memfourthname").val();            
            var memfourthgrade = $("#memfourthgrade").val();            
            var memfourthmobile = $("#memfourthmobile").val();            
            var memfourthemail = $("#memfourthemail").val();  

            if(teamname == null || schoolname == null || memonename == null || memonegrade == null || memonemobile == null || memoneemail == null  || memtwoname == null || memtwograde == null || memtwomobile == null || memtwoemail == null || memthirdname == null || memthirdgrade == null || memthirdmobile == null || memthirdemail == null){                
                error_show("Please fill all the fields");
            } else {

                if(teamname.trim() == "" || schoolname.trim() == "" || memonename.trim() == "" || memonegrade.trim() == "" || memonemobile.trim() == "" || memoneemail.trim() == ""  || memtwoname.trim() == "" || memtwograde.trim() == "" || memtwomobile.trim() == "" || memtwoemail.trim() == "" || memthirdname.trim() == "" || memthirdgrade.trim() == "" || memthirdmobile.trim() == "" || memthirdemail.trim() == ""){
                    error_show("Please fill all the fields");
                }
                else {
                    if(parseInt(memonemobile)<=9999999999 && parseInt(memtwomobile)<=9999999999 && parseInt(memthirdmobile)<=9999999999){ 
                        console.log(teamname, schoolname)   
                        if(memfourthgrade==null){
                            var memfourthgrade="";
                        }                                                                        
                            
                        if(memfourthdetails == undefined){
                            var memfourthdetails = "";
                        }                                      
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycbyOXiSI7zNXNxA99iSWzAKwmfordUyfhi4F-A1BoNbOyKCIPW6p/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: { 
                                TeamName:teamname,
                                School:schoolname,
                                Name1:memonename,
                                Grade1:memonegrade,
                                Mobile1:memonemobile,
                                Email1:memoneemail,
                                Name2:memtwoname,
                                Grade2:memtwograde,
                                Mobile2:memtwomobile,
                                Email2:memtwoemail,
                                Name3:memthirdname,
                                Grade3:memthirdgrade,
                                Mobile3:memthirdmobile,
                                Email3:memthirdemail,
                                Name4:memfourthname,
                                Grade4:memfourthgrade,
                                Mobile4:memfourthmobile,
                                Email4:memfourthemail,                                            
                            }
                        });
                        //console.log(jqxhr);
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
                        xmlhttp.open("GET", "sendMail.php?email1="+memoneemail+"&email2="+memtwoemail+"&email3="+memthirdemail, true);
                        xmlhttp.send();                        
                        error_show("Your response has been recorded!!");
                        $("#teamname").val('');
                        $("#schoolname").val('');            
                        $("#memonename").val('');            
                        $("#memonegrade").val('');            
                        $("#memonemobile").val('');            
                        $("#memoneemail").val('');              
                        $("#memtwoname").val('');            
                        $("#memtwograde").val('');            
                        $("#memtwomobile").val('');            
                        $("#memtwoemail").val('');  
                        $("#memthirdname").val('');            
                        $("#memthirdgrade").val('');            
                        $("#memthirdmobile").val('');            
                        $("#memthirdemail").val('');  
                        $("#memfourthname").val('');            
                        $("#memfourthgrade").val('');            
                        $("#memfourthmobile").val('');            
                        $("#memfourthemail").val('');    
                        
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
        