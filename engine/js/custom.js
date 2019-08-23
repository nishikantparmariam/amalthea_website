/*Disclaimer : Some pieces of below code have been taken from varius sources and have been cited, the credit goes to the real authors.*/





/*animations on scroll*/    
$(window).scroll(function() {

    if(file_name==="home"){
        var thirdPage = $(".thirdPage");
    
        if(($(window).scrollTop()>=0.75*$(window).height() && $(window).scrollTop()  <= thirdPage.offset().top + 50 ) || ($(window).scrollTop() >= thirdPage.offset().top + thirdPage.height() && $(window).scrollTop()+100 <= $(".fourthPageDesigns .Layer0").offset().top) || ($(window).scrollTop()>= $(".fifthPage").offset().top+$(".fifthPage").height())){
        $('.navBarTrigger').css('background','#2557c4');             
        $('.navBarTrigger').css('border-radius','100px');
        $('.navBarTrigger').css('width','80px');        
        $('.mediaTrigger').css('margin-top','92vh');       
        $('.navBarTriggerText').css('display','block');
        $(".navBarTriggerBar4").css('margin-top','-26px'); 
            $(".navBarTriggerBar5").css('margin-top','-26px');
        } else {
            $('.navBarTrigger').css('background','rgba(255,255,255,0.3)');  
            $('.navBarTriggerText').css('display','none');
            $('.navBarTrigger').css('border-radius','100px');   
            $('.navBarTrigger').css('width','48px');
            $('.mediaTrigger').css('margin-top','100vh');
            $(".navBarTriggerBar4").css('margin-top','-5px'); 
            $(".navBarTriggerBar5").css('margin-top','-5px');
        }
    } else if (file_name==="pastsites") {
        if(($(window).scrollTop()>=0.75*$(window).height())){
            $('.navBarTrigger').css('background','#2557c4');             
            $('.navBarTrigger').css('border-radius','100px');
            $('.navBarTrigger').css('width','80px');        
            $('.mediaTrigger').css('margin-top','92vh');       
            $('.navBarTriggerText').css('display','block');
            $(".navBarTriggerBar4").css('margin-top','-26px'); 
                $(".navBarTriggerBar5").css('margin-top','-26px');
            } else {
                $('.navBarTrigger').css('background','rgba(255,255,255,0.3)');  
                $('.navBarTriggerText').css('display','none');
                $('.navBarTrigger').css('border-radius','100px');   
                $('.navBarTrigger').css('width','48px');
                $('.mediaTrigger').css('margin-top','100vh');
                $(".navBarTriggerBar4").css('margin-top','-5px'); 
                $(".navBarTriggerBar5").css('margin-top','-5px');
            }
    }
    /*NavBar*/
       

}); 

/*restricting x-scrolling*/   
var scrollEventHandler = function()
{
window.scroll(0, window.pageYOffset)
}
window.addEventListener("scroll", scrollEventHandler, false); 




/*rest functions*/
$(document).ready(function(){
   
        
    var innerhtml = '<a class="twitter-timeline" data-height="520" href="https://twitter.com/amalthea_iitgn?ref_src=twsrc%5Etfw">Tweets by amalthea_iitgn</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
    $('.twitter_feed').html(innerhtml);
    window.addEventListener("DOMContentLoaded", parallaxOnFirstPage, false);
    var div1 = document.getElementById("amlLogo");
    var div2 = document.getElementById("amlText");
    var xScrollPosition;
    var yScrollPosition;    
    function  parallaxOnFirstPage() {
        xScrollPosition = window.scrollX;
        yScrollPosition = window.scrollY;    
        setTranslate(0, yScrollPosition * 0.1, div1);
        setTranslate(0, yScrollPosition * 2, div2);
        //setTranslate(0, yScrollPosition * .5, div3);    
        requestAnimationFrame( parallaxOnFirstPage);
    }

    $('.amlText').delay(800).animate({'marginTop': '0'});
    $('.amlDateText').delay(1400).animate({'opacity': '1','paddingTop': '0'}); 

    $(".navManuContainer .innerContainer .mainLinksDiv div").mouseenter(function(){
        $(this).delay('fast').css('border-bottom','0px solid rgba(0,0,0,0)').animate({'background': '#000'})
        
    }).mouseleave(function(){
        $(this).delay('fast').animate({'borderWidth': '0px'})
    });

    var navOpen = false;
    var navOpenOnce = false;
    /*navBar opening*/

    

    function openCloseNav() {
        if(!navOpen) {
            navOpen=true;
            if(!navOpenOnce){
                if($(window).width()>=600){
                    makeBgNavMenu();
                    
                }                 
            }
            navOpenOnce = true;
            //$(".navManuContainer").css('display','inline-block');
            $(".navBarTriggerBar1").css('opacity','0');
            $(".navBarTriggerBar2").css('opacity','0');                      
            $(".navBarTriggerBar3").css('opacity','0'); 
            $(".navBarTriggerBar4").css('opacity','1'); 
            $(".navBarTriggerBar5").css('opacity','1');                                              
            $(".navManuContainer").css('opacity','1');
            $(".navManuContainer").css('margin-left','0');
            
            $('.navMenuDesigns').delay(300).animate({'opacity':'1'});
            
            for(i=0;i<=9;i++){
                $('.mainLinks'+(i+1)).delay(100*i).animate({'opacity': '1', 'paddingTop': 0});
            }
            

            $('.restLinksDiv .socialMedia div').delay(100).animate({'opacity': '1'});
            for(i=0;i<=4;i++){
                $('.restLinksDiv .socialMedia .a'+(i+1)).delay(150*i).animate({'opacity': '1', 'paddingLeft': 0});
                
            }
                           
            $('.navManuContainer .innerContainer .restLinksDiv .subscribeUsForm').delay(100*(i+1)).animate({'opacity': '1','marginTop': '15vh'});
            $('.navManuContainer .innerContainer .restLinksDiv .wantToKnowMore').delay(100*(i+2)).animate({'opacity': '1','marginTop': '10vh'});
            

        } else {
            navOpen=false;
            
            $(".navBarTriggerBar1").css('opacity','1');
            $(".navBarTriggerBar2").css('opacity','1');                      
            $(".navBarTriggerBar3").css('opacity','1');                     
            $(".navBarTriggerBar4").css('opacity','0'); 
            $(".navBarTriggerBar5").css('opacity','0');
            $(".navManuContainer").css('margin-left','-100vw');             
            $(".navManuContainer").css('opacity','0');                                         
            $(".navManuContainer .innerContainer .mainLinksDiv div").css('opacity','0');
            $(".navManuContainer .innerContainer .mainLinksDiv div").css('padding-top','3vh');    
            $(".navManuContainer .innerContainer .restLinksDiv .subscribeUsForm").css('opacity','0');
            $(".navManuContainer .innerContainer .restLinksDiv .subscribeUsForm").css('margin-top','20vh');
            $(".navManuContainer .innerContainer .restLinksDiv .wantToKnowMore").css('margin-top','15vh');
            $(".navManuContainer .innerContainer .restLinksDiv .wantToKnowMore").css('opacity','0');
            $('.restLinksDiv .socialMedia div').css('opacity','0');
            for(i=0;i<=4;i++){
                $('.restLinksDiv .socialMedia .a'+(i+1)).css('opacity','0');   
            }
            $('.navMenuDesigns').css('opacity','0');
            //$(".navManuContainer .innerContainer .restLinksDiv a").css('width','0');
            
        }
    }


    

    $('.subscribeUsButton').click(function(){
        openCloseNav();
        $('html, body').animate({scrollTop: $("#SubscribeName").offset().top}, 1000);
        $('#SubscribeName').focus();
    });
    

    $(".navBarTrigger").click(function(){
        openCloseNav();        
    });

    $(".mainLinksDiv a").click(function(){
        openCloseNav();  
        console.log("Hi");      
        /*var class_ = this.classList[1];
        if(class_==="ToContactPage"||class_==="ToPastSitesPage"){
                
        } else if(class_==="ToCAPage"){
            window.open("CampusAmbassador/");
        } else {
            console.log(class_);
            $('html, body').animate({
                scrollTop: $('#'+class_).offset().top
            },500);
        }*/
        
    }); 

});    

function makeBgNavMenu(){        
        /*-------------------------------------*/
        //Below code belongs to the original author
        //Credits : https://codepen.io/anon/pen/xNdEae                
        const colors = ["#1e4db2", "#fffff", "#2557c4", "#007bff", "#16409e"];

        const numBalls = 100;
        const balls = [];

        for (let i = 0; i < numBalls; i++) {
        
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `${Math.random()}em`;
        ball.style.height = ball.style.width;
        
        balls.push(ball);
        document.getElementById("pp").append(ball);
        
        }

        // Keyframes
        balls.forEach((el, i, ra) => {
        let to = {
            x: Math.random() * (i % 2 === 0 ? 20 : -20),
            y: Math.random() * -20
        };

        let anim = el.animate(
            [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
            duration: (Math.random() + 1) * 3000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
            }
        );
        });               


        /*-------------------------------------*/
}



/*-------------------------------------*/
/* Below code belongs to the original author
Credits : https://codepen.io/JTParrett/pen/BkDie
*/

$.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];
    
    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });
    
    window.addEventListener('scroll', function(){
      var scrollTop = $window.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }, {passive: true});
  }
  
  var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };       
  
  moveItItem.prototype.update = function(scrollTop){
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
  };
  
  // Initialization
  $(function(){
    $('[data-scroll-speed]').moveIt();
  });

  /*-------------------------------------*/

 
  //Nishikant Bhavesh Parmar (nishikant.parmar@iitgn.ac.in, +91 913 130 4419)


  
    