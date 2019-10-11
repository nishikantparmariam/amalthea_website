
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bus and Events Schedule - Amalthea '19</title>
    <link rel="icon" href="../engine/images/aml_icon.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy|Quicksand" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Arvo:400&display=swap" rel="stylesheet">    
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Anton|Assistant|Paytone+One&display=swap" rel="stylesheet">
    <link href="../engine/css/custom.css" rel="stylesheet">   
    <link href="../engine/css/event-registration.css" rel="stylesheet">           
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>        

    <script>
        
  
    </script>    
    <style>
        html, body {
            overflow-x:hidden !important;            
        }
        body {
            
        }
        .flexBox {
            height:5vh;
        }
        .contact-img {
            width:80%;      
            border:1px solid #1C4193;                
        }
        .row {
            text-align:center;
        }

        .tag {            
            position:absolute;
            z-index:5;
            background:#1c4193;
            color:#ffffff;
            border:1px solid #000;
            padding:3px 10px;            
            margin-left:50%;
            margin-top:-20px;
            transform:translate(-65%, 0);
            border-radius:5px;
            box-shadow:0px 1px 1px rgba(0,0,0,0.4);
        }

        
    </style>  
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-148907672-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());    
      gtag('config', 'UA-148907672-1');
    </script>    
</head>
<body>    
<div class="pageOne">
        <div class="pageOneContainerForm">
        <div class="container">
            <div class="flexBox"></div>
            <div class="testimonials"  >                
                <br><b>Bus Schedule</b>
                <div class="underLine"></div>                
            </div>            
            <br>
            <center><button href="" class="btn btn-default" onclick="window.history.back();">&laquo; Go Back</button></center>
            <br><br>
            <div class="row ">                                        
                <div class="col-md-6">
                    <br>
                    <img src="../engine/images/bus1.jpg" style="width:100%;border:13px solid #fff;border-radius:5px;box-shadow:0px 0px 2px #aaa;">
                </div>
                <div class="col-md-6">
                    <br>
                    <img src="../engine/images/bus2.jpg" style="width:100%;border:13px solid #fff;border-radius:5px;box-shadow:0px 0px 2px #aaa;">
                </div>
            </div>
            <div class="flexBox"></div>
            <div class="testimonials"  >                
                <br><b>Events Schedule</b>
                <div class="underLine"></div>                
            </div>                        
            <br><br>
            <div class="row ">                                        
                <div class="col-md-6">
                    <br>
                    <img src="../engine/images/dday1.jpg" style="width:100%;border:13px solid #fff;border-radius:5px;box-shadow:0px 0px 2px #aaa;">
                </div>
                <div class="col-md-6">
                    <br>
                    <img src="../engine/images/dday2.jpg" style="width:100%;border:13px solid #fff;border-radius:5px;box-shadow:0px 0px 2px #aaa;">
                </div>
            </div>            
        </div>
        </div>
        <div class="pageOneDesignForm" style="">                                    
                        
        </div>
        <br><br><br><br><br><br><br><br><br>
    </div>        
    
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