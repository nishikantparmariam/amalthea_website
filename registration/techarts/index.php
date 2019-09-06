
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Event Registration - Amalthea '19</title>
    <link rel="icon" href="../../engine/images/aml_icon.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy|Quicksand" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Arvo:400&display=swap" rel="stylesheet">    
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Anton|Assistant|Paytone+One&display=swap" rel="stylesheet">
    <link href="../../engine/css/custom.css" rel="stylesheet">   
    <link href="../../engine/css/event-registration.css" rel="stylesheet">           
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script> 
    <script src="../../engine/js/techarts-registration.js"></script>                  
</head>
<body>    
    <div class="fixedContent">        
    </div>    
    
    <br>
    <div class="pageOne">
        <div class="pageOneContainerForm">
            <div class="container">
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-6">
                        <div class="brandAml" data-aos="fade-right" data-aos-duration="500">
                            <div class="img">
                                <img src="../../engine/images/aml_logo_brand_inv.png" >
                            </div>                            
                        </div>                                                                            
                        <br>
                        <div class="pageOneInnerContainerForm"  data-aos="fade-right" data-aos-duration="500"  data-aos-delay="400">                                                        
                            <div class="catext"> Techarts Registration </div> 
                            <hr>                             
                            <div class="registrationText" style="color:#ff0000;">   *marked are mandatory </div>                                      
                        
                            <br><br> 
                            <div class="form-row "> 
                                <div class="form-group col-md-12"> 
                                    <label> Team Name* </label> 
                                    <input name="teamname" id="teamname" type="text" class="form-control" placeholder="Team Name" required>
                                </div>                                  
                            </div>                            
                            <hr>
                            <b>First Member*</b>
                            <br><br>
                            <div class="form-row ">                                                                   
                                <div class="form-group col-md-12"> 
                                    <label> Full name* </label> 
                                    <input name="memonename" id="memonename" type="text" class="form-control" placeholder="Full Name" required>
                                </div>                                                                                                         
                            </div>
                            <div class="form-row ">                                                                   
                                <div class="form-group col-md-12"> 
                                    <label> Mobile Number* </label> 
                                    <input name="memonemobile" id="memonemobile" type="text" class="form-control" placeholder="Mobile Number" required>
                                </div>                                                                                                         
                            </div>
                            <div class="form-row ">                                                                   
                                <div class="form-group col-md-12"> 
                                    <label>Email ID* </label> 
                                    <input name="memoneemail" id="memoneemail" type="text" class="form-control" placeholder="Email ID" required>
                                </div>                                                        
                            </div>

                            <hr>
                            <b>Second Member*</b>
                            <br><br>
                            <div class="form-row ">                                                                   
                                <div class="form-group col-md-12"> 
                                    <label> Full name* </label> 
                                    <input name="memtwoname" id="memtwoname" type="text" class="form-control" placeholder="Full Name" required>
                                </div>                                                                                                         
                            </div>
                            <div class="form-row ">                                                                   
                                <div class="form-group col-md-12"> 
                                    <label> Mobile Number* </label> 
                                    <input name="memtwomobile" id="memtwomobile" type="text" class="form-control" placeholder="Mobile Number" required>
                                </div>                                                                                                         
                            </div>
                            <div class="form-row ">                                                                   
                                <div class="form-group col-md-12"> 
                                    <label>Email ID* </label> 
                                    <input name="memtwoemail" id="memtwoemail" type="text" class="form-control" placeholder="Email ID" required>
                                </div>                                                        
                            </div>
                            <br>
                            <button type="submit"  id="btnsbt" onclick="submitForm()" class="btn btn-info" style="width: 100%"> Submit </button> 
                            <br><br>
                        </div>                        
                    </div>
                    <div class="col-md-5"></div>
                </div>
                <br><br><br><br><br>
            </div>
        </div>
        <div class="pageOneDesignForm">
            <div class="Layer0"></div>
            <div class="Layer1"></div>
        </div>
    </div>
    <br>
    <div id="snackbar"></div>
    <script>
        AOS.init({
            once:true
        });

        
        window.onscroll = function () {
            window.scrollLeft = 0;
            window.scrollRight = 0;
        }
        
        var scrollEventHandler = function()
        {
        window.scroll(0, window.pageYOffset)
        }
        window.addEventListener("scroll", scrollEventHandler, false);       
    </script>
</body>
</html>