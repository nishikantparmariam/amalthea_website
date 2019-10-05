
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
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBoTd9aFav491piYUea8Tb1XaglTC8gHZE",
    authDomain: "aml19-82d49.firebaseapp.com",
    databaseURL: "https://aml19-82d49.firebaseio.com",
    projectId: "aml19-82d49",
    storageBucket: "aml19-82d49.appspot.com",
    messagingSenderId: "18892389245",
    appId: "1:18892389245:web:867289c3fcc70006"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
        var scrollEventHandler = function()
        {
        window.scroll(0, window.pageYOffset)
        }
        window.addEventListener("scroll", scrollEventHandler, false); 
        var selected_file = null;
        $(document).ready(()=>{
            $("#theFile").on('change',function(e){                
                selected_file  = e.target.files[0];  
                

            });

        });
        function submitForm() {
            var teamname = $("#teamname").val();            

            var memonename = $("#memonename").val();                        
            var memonemobile = $("#memonemobile").val();    
            var memoneage = $("#memoneage").val();                        
            var memoneresp = $("#memoneresp").val();  
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

            if(teamname == null || memonename == null || memonemobile == null || memoneage == null || memoneresp == null || memoneemail == null){
                error_show("Please fill all the fields");
            } else {

                if(teamname.trim() == "" || memonename.trim() == "" || memonemobile.trim() == "" || memoneage.trim() == "" || memoneresp.trim() == "" || memoneemail.trim() == ""){                    
                    error_show("Please fill all the fields");
                }
                else {
                    if(true){  
                        
                        if(selected_file!=null){

                            var split_array = selected_file.name.split(".");
                            var format_image = split_array[split_array.length-1];
                            if(format_image=="png"||format_image=="jpeg"||format_image=="jpg"){
                                var storageRef = firebase.storage().ref('/drift_uploads/'+selected_file.name);                                                        
                                var uploadTask = storageRef.put(selected_file);
                                uploadTask.on('state_changed', function(snapshot){
    
                                }, function(error){
    
                                }, function(){
                                    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                                                var jqxhr = $.ajax({
                                                    url: 'https://script.google.com/macros/s/AKfycbwGRr5DjfgZ5zMPg41DxvuH1E7lXIWyx2-7EStwckCptqN3wxub/exec',
                                                    method: "GET",
                                                    dataType: "json",                            
                                                    data: { 
                                                        CarImageUrl:downloadURL,
                                                        TeamName:teamname,                                
                                                        Name1:memonename,                                
                                                        Mobile1:memonemobile,                                                                
                                                        Age1:memoneage,
                                                        Address1:memoneresp,
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
                                                error_show("Your response has been recorded!!");
                                                $("#teamname").val('');            
                                                $("#memonename").val('');                        
                                                $("#memonemobile").val('');    
                                                $("#memonecollegen").val('');            
                                                $("#memoneage").val('');                                     
                                                $("#memoneresp").val('');  
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
                                            });
                                });
                            } else {
                                error_show("Invalid Format");
                            }                                                        
                            
                        } else {
                            var jqxhr = $.ajax({
                                url: 'https://script.google.com/macros/s/AKfycbwGRr5DjfgZ5zMPg41DxvuH1E7lXIWyx2-7EStwckCptqN3wxub/exec',
                                method: "GET",
                                dataType: "json",                            
                                data: { 
                                    CarImageUrl:"NA",
                                    TeamName:teamname,                                
                                    Name1:memonename,                                
                                    Mobile1:memonemobile,                                                                
                                    Age1:memoneage,
                                    Address1:memoneresp,
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
                            error_show("Your response has been recorded!!");
                            $("#teamname").val('');            
                            $("#memonename").val('');                        
                            $("#memonemobile").val('');    
                            $("#memonecollegen").val('');            
                            $("#memoneage").val('');                                     
                            $("#memoneresp").val('');  
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
                        
                        sendMail(memoneemail, teamname);
                        
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
        