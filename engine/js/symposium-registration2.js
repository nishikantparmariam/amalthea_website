
        var scrollEventHandler = function()
        {
        window.scroll(0, window.pageYOffset)
        }
        window.addEventListener("scroll", scrollEventHandler, false); 
        function ssubmitForm() {
            var sname = $("#sname").val();
            var sinstitute = $("#sinstitute").val();
            var sprogram = $("#sprogram").val();              
            var ssop = $("#ssop").val();  
            var semail = $("#semail").val();  
            var smob = $("#smob").val();         
            print(semail+" "+smob);     

            if(sname == null || sinstitute == null || sprogram == null || ssop == null || semail == null || smob == null){
                error_show("Please fill all the fields");
            } else {

                if(sname.trim() == "" || sinstitute.trim() == "" || sprogram.trim() == "" || ssop.trim() == "" || semail.trim() == "" || smob.trim() == ""){
                    error_show("Please fill all the fields");
                }
                else {
                    if(true){                                                       
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycbzyATFelB9h77mH9Cd9Fc7leFWQxb9ylcCdCLhqadmtVDnZR48/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: { 
                                Profession:"Student",
                                Name:sname,
                                Institute:sinstitute,
                                Company:"-",
                                Program:sprogram,
                                ResearchInterest:"-",
                                FieldOfCompany:"-",
                                SOP:ssop,   
                                Email:semail,
                                Mobile:smob,                                      
                            }
                        });
                        //console.log(jqxhr);
                        error_show("Your response has been recorded!!");
                        $("#sname").val('');
                        $("#sinstitute").val('');
                        $("#sprogram").val('');              
                        $("#ssop").val('');  
                        $("#semail").val('');  
                        $("#smob").val('');    
                        
                    }
                    else {
                        error_show("Please fill valid phone number");
                    }
                }
            }
            
            //console.log(fullname, gender, institute, courseofstudy, year, email_global, contact_number, twitter_id, facebook_id, instagram_id, sop, one, two, three, four, five, six);
        }




        function psubmitForm() {
            var pname = $("#pname").val();
            var pinstitute = $("#pinstitute").val();
            var presearchinterest = $("#presearchinterest").val();    
            var pemail = $("#pemail").val();  
            var pmob = $("#pmob").val();                                        

            if(pname == null || pinstitute == null || presearchinterest == null || pemail == null || pmob == null){
                error_show("Please fill all the fields");
            } else {

                if(pname.trim() == "" || pinstitute.trim() == "" || presearchinterest.trim() == "" || pemail.trim() == "" || pmob.trim()==""){
                    error_show("Please fill all the fields");
                }
                else {
                    if(true){                                                       
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycbzyATFelB9h77mH9Cd9Fc7leFWQxb9ylcCdCLhqadmtVDnZR48/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: { 
                                Profession:"Professor",
                                Name:pname,
                                Institute:pinstitute,
                                Company:"-",
                                Program:"-",
                                ResearchInterest:presearchinterest,
                                FieldOfCompany:"-",
                                SOP:"-",              
                                Email:pemail,
                                Mobile:pmob                           
                            }
                        });
                        //console.log(jqxhr);
                        error_show("Your response has been recorded!!");
                        $("#pname").val('');
                        $("#pinstitute").val('');
                        $("#presearchinterest").val('');    
                        $("#pemail").val('');  
                        $("#pmob").val('');  

                        
                    }
                    else {
                        error_show("Please fill valid phone number");
                    }
                }
            }
            
            //console.log(fullname, gender, institute, courseofstudy, year, email_global, contact_number, twitter_id, facebook_id, instagram_id, sop, one, two, three, four, five, six);
        }




        function rsubmitForm() {
            var rname = $("#rname").val();
            var rinstitute = $("#rinstitute").val();
            var rresearchinterest = $("#rresearchinterest").val();      
            var remail = $("#remail").val();  
            var rmob = $("#rmob").val();    

            if(rname == null || rinstitute == null || rresearchinterest == null || remail == null || rmob == null){
                error_show("Please fill all the fields");
            } else {

                if(rinstitute.trim() == "" || rname.trim() == "" || rresearchinterest.trim() == ""|| remail.trim() == "" || rmob.trim()==""){
                    error_show("Please fill all the fields");
                }
                else {
                    if(true){                                                       
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycbzyATFelB9h77mH9Cd9Fc7leFWQxb9ylcCdCLhqadmtVDnZR48/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: { 
                                Profession:"Researcher",
                                Name:rname,
                                Institute:rinstitute,
                                Company:"-",
                                Program:"-",
                                ResearchInterest:rresearchinterest,
                                FieldOfCompany:"-",
                                SOP:"-",    
                                Email:remail,
                                Mobile:rmob                                       
                            }
                        });
                        //console.log(jqxhr);
                        error_show("Your response has been recorded!!");
                        $("#rname").val('');
                        $("#rinstitute").val('');
                        $("#rresearchinterest").val('');      
                        $("#remail").val('');  
                        $("#rmob").val('');    

                        
                    }
                    else {
                        error_show("Please fill valid phone number");
                    }
                }
            }
            
            //console.log(fullname, gender, institute, courseofstudy, year, email_global, contact_number, twitter_id, facebook_id, instagram_id, sop, one, two, three, four, five, six);
        }


        function resubmitForm() {
            var rename = $("#rename").val();
            var recompany = $("#recompany").val();
            var refieldofworkofcompany = $("#refieldofworkofcompany").val();  
            var reemail = $("#reemail").val();  
            var remob = $("#remob").val();                                         

            if(rename == null || recompany == null || refieldofworkofcompany == null|| reemail == null || remob == null){
                error_show("Please fill all the fields");
            } else {

                if(rename.trim() == "" || recompany.trim() == "" || refieldofworkofcompany.trim() == ""|| reemail.trim() == "" || remob.trim()==""){
                    error_show("Please fill all the fields");
                }
                else {
                    if(true){                                                       
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycbzyATFelB9h77mH9Cd9Fc7leFWQxb9ylcCdCLhqadmtVDnZR48/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: { 
                                Profession:"Representative of Company",
                                Name:rename,
                                Institute:"-",
                                Company:recompany,
                                Program:"-",
                                ResearchInterest:"-",
                                FieldOfCompany:refieldofworkofcompany,
                                SOP:"-",  
                                Email:reemail,
                                Mobile:remob                                            
                            }
                        });
                        //console.log(jqxhr);
                        error_show("Your response has been recorded!!");
                        $("#rename").val('');
                        $("#recompany").val('');
                        $("#refieldofworkofcompany").val('');  
                        $("#reemail").val('');  
                        $("#remob").val('');     

                        
                    }
                    else {
                        error_show("Please fill valid phone number");
                    }
                }
            }
            
            //console.log(fullname, gender, institute, courseofstudy, year, email_global, contact_number, twitter_id, facebook_id, instagram_id, sop, one, two, three, four, five, six);
        }




        function osubmitForm() {
            var oname = $("#oname").val();
            var oinstitute = $("#oinstitute").val();
            var oprofession = $("#oprofession").val();    
            var osop = $("#osop").val();      
            var oemail = $("#oemail").val();  
            var omob = $("#omob").val();                                   

            if(oname == null || oinstitute == null || oprofession == null || osop == null|| oemail == null || omob == null){
                error_show("Please fill all the fields");
            } else {

                if(oname.trim() == "" || oinstitute.trim() == "" || oprofession.trim() == "" || osop.trim() == ""|| oemail.trim() == "" || omob.trim()==""){
                    error_show("Please fill all the fields");
                }
                else {
                    if(true){                                                       
                        var jqxhr = $.ajax({
                            url: 'https://script.google.com/macros/s/AKfycbzyATFelB9h77mH9Cd9Fc7leFWQxb9ylcCdCLhqadmtVDnZR48/exec',
                            method: "GET",
                            dataType: "json",                            
                            data: { 
                                Profession:"Other - "+oprofession,
                                Name:oname,
                                Institute:oinstitute,
                                Company:"-",
                                Program:"-",
                                ResearchInterest:"-",
                                FieldOfCompany:"-",
                                SOP:osop,       
                                Email:oemail,
                                Mobile:omob                                       
                            }
                        });
                        //console.log(jqxhr);
                        error_show("Your response has been recorded!!");

                        
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
        