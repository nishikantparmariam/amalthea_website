
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Symposium Registration - Amalthea '19</title>
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
    <script src="../../engine/js/symposium-registration.js"></script>               
                  
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
                    <div class="col-md-8">
                        <div class="brandAml" data-aos="fade-right" data-aos-duration="500">
                            <div class="img">
                                <img src="../../engine/images/aml_logo_brand_inv.png" >
                            </div>                            
                        </div>                                                                            
                        <br>
                        <div class="pageOneInnerContainerForm"  style="height:125vh;" data-aos="fade-right" data-aos-duration="500"  data-aos-delay="400">                                                        
                            <div class="catext"> Symposium Registration </div> 
                            <hr>                                                                                                                 
                            Please select your profession's tab <div class="registrationText" style="color:#ff0000;"> * marked are mandatory </div>
                            <br><br>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#s" role="tab" aria-controls="home" aria-selected="true">Student</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#p" role="tab" aria-controls="profile" aria-selected="false">Professor</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#r" role="tab" aria-controls="contact" aria-selected="false">Researcher</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#re" role="tab" aria-controls="contact" aria-selected="false">Representative of Company</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#o" role="tab" aria-controls="contact" aria-selected="false">Others</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="s" role="tabpanel" aria-labelledby="home-tab">
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Your Name* </label> 
                                            <input name="sname" id="sname" type="text" class="form-control" placeholder="Your Name" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Institute* </label> 
                                            <input name="sinstitute" id="sinstitute" type="text" class="form-control" placeholder="Institute" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Program* </label> 
                                            <input name="sprogram" id="sprogram" type="text" class="form-control" placeholder="Program e.g. B.Tech, B.Pharm etc." required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Statement of Purpose (Max 80 Words)* </label> 
                                            <textarea name="ssop" id="ssop" type="text" class="form-control" placeholder="I want to attend Symposium because..." style="color:#000;"></textarea>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-6"> 
                                            <label> Email Id* </label> 
                                            <input name="semail" id="semail" type="text" class="form-control" placeholder="Email Id" required>
                                        </div>
                                        <div class="form-group col-md-6"> 
                                            <label> Mobile Number* </label> 
                                            <input name="smob" id="smob" type="text" class="form-control" placeholder="Mobile Number" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <button type="submit"  id="btnsbt" onclick="ssubmitForm()" class="btn btn-primary" style="width: 100%"> Submit </button>                                     
                                </div>
                                <div class="tab-pane fade" id="p" role="tabpanel" aria-labelledby="profile-tab">
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Your Name* </label> 
                                            <input name="pname" id="pname" type="text" class="form-control" placeholder="Your Name" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Institute* </label> 
                                            <input name="pinstitute" id="pinstitute" type="text" class="form-control" placeholder="Institute" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Research Interest* </label> 
                                            <input name="presearchinterest" id="presearchinterest" type="text" class="form-control" placeholder="Research Interest" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-6"> 
                                            <label> Email Id* </label> 
                                            <input name="pemail" id="pemail" type="text" class="form-control" placeholder="Email Id" required>
                                        </div>
                                        <div class="form-group col-md-6"> 
                                            <label> Mobile Number* </label> 
                                            <input name="pmob" id="pmob" type="text" class="form-control" placeholder="Mobile Number" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>                                    
                                    <button type="submit"  id="btnsbt" onclick="psubmitForm()" class="btn btn-primary" style="width: 100%"> Submit </button>                                     
                                </div>
                                <div class="tab-pane fade" id="r" role="tabpanel" aria-labelledby="contact-tab">
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Your Name* </label> 
                                            <input name="rname" id="rname" type="text" class="form-control" placeholder="Your Name" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Institute/Lab* </label> 
                                            <input name="rinstitute" id="rinstitute" type="text" class="form-control" placeholder="Institute/Lab" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Research Interest* </label> 
                                            <input name="rresearchinterest" id="rresearchinterest" type="text" class="form-control" placeholder="Research Interest" required>
                                        </div>                                                      
                                    </div>  
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-6"> 
                                            <label> Email Id* </label> 
                                            <input name="remail" id="remail" type="text" class="form-control" placeholder="Email Id" required>
                                        </div>
                                        <div class="form-group col-md-6"> 
                                            <label> Mobile Number* </label> 
                                            <input name="rmob" id="rmob" type="text" class="form-control" placeholder="Mobile Number" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>                                  
                                    <button type="submit"  id="btnsbt" onclick="rsubmitForm()" class="btn btn-primary" style="width: 100%"> Submit </button> 
                                </div>
                                <div class="tab-pane fade" id="re" role="tabpanel" aria-labelledby="contact-tab">
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Your Name* </label> 
                                            <input name="rename" id="rename" type="text" class="form-control" placeholder="Your Name" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Company Name* </label> 
                                            <input name="recompany" id="recompany" type="text" class="form-control" placeholder="Company Name" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Field of work of company* </label> 
                                            <input name="refieldofworkofcompany" id="refieldofworkofcompany" type="text" class="form-control" placeholder="Field of work of company" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-6"> 
                                            <label> Email Id* </label> 
                                            <input name="reemail" id="reemail" type="text" class="form-control" placeholder="Email Id" required>
                                        </div>
                                        <div class="form-group col-md-6"> 
                                            <label> Mobile Number* </label> 
                                            <input name="remob" id="remob" type="text" class="form-control" placeholder="Mobile Number" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>                                    
                                    <button type="submit"  id="btnsbt" onclick="resubmitForm()" class="btn btn-primary" style="width: 100%"> Submit </button> 
                                </div>
                                <div class="tab-pane fade" id="o" role="tabpanel" aria-labelledby="contact-tab">
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Your Name* </label> 
                                            <input name="oname" id="oname" type="text" class="form-control" placeholder="Your Name" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Institute* </label> 
                                            <input name="oinstitute" id="oinstitute" type="text" class="form-control" placeholder="Institute" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Profession* </label> 
                                            <input name="oprofession" id="oprofession" type="text" class="form-control" placeholder="Profession" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-12"> 
                                            <label> Statement of Purpose (Max 80 Words)* </label> 
                                            <textarea name="osop" id="osop" type="text" class="form-control" placeholder="I want to attend Symposium because..." style="color:#000;"></textarea>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <div class="form-row">                                                                   
                                        <div class="form-group col-md-6"> 
                                            <label> Email Id* </label> 
                                            <input name="oemail" id="oemail" type="text" class="form-control" placeholder="Email Id" required>
                                        </div>
                                        <div class="form-group col-md-6"> 
                                            <label> Mobile Number* </label> 
                                            <input name="omob" id="omob" type="text" class="form-control" placeholder="Mobile Number" required>
                                        </div>                                                      
                                    </div>
                                    <br><br>
                                    <button type="submit"  id="btnsbt" onclick="osubmitForm()" class="btn btn-primary" style="width: 100%"> Submit </button> 
                                </div>
                            </div>                                                                                                                                
                            <br><br>
                        </div>                        
                    </div>
                    <div class="col-md-3"></div>
                </div>
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