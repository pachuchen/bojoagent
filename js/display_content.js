	Shadowbox.init({
    // let's skip the automatic setup because we don't have any
    // properly configured link elements on the page
    //skipSetup: true
});




/*
window.onload = function() {
    var x=document.getElementById("test");
    //x.class = "test_css";
     console.log(x.innerHTML);

    // open a welcome message as soon as the window loads
    Shadowbox.open({
        content:    x.innerHTML,
        player:     "html",
        title:      "Welcome",
        height:     350,
        width:      350,
        option: {onFinish: function () { 
                
            }}
    });

};*/
// var x=document.getElementById("test");
//console.log(x.className)

//x.onclick=displayContent;

// function displayContent(event){
//      console.log(event.target)
//     Shadowbox.open({
//         content:    event.target.outerHTML,
//         player:     "html",
//          height:     350,
//          width:      350,
//     });
// }

var heading;
var discription;
var displayImg;
var diplaylink;
 
//選擇所有展示物件，使用燈箱效果呈現
$("#presentationResouse a").click(function(event) {
   var htmlTemplate = "<figure><img><article><h1></h1><p></p><a></a></article></figure>";
   var domain = $(location).attr('href');

    heading = $(this).data("heading");
    discription =  $(this).data("discription");
    displayImg= $(this).data("image");
    diplaylink=$(this).data("link");

     Shadowbox.open({
        content:    htmlTemplate,
        player:     "html",
        width:     1000,
        height:    400,
       
        options: {onFinish: function () { 
               $("#sb-player h1").text(heading);
                $("#sb-player p").text(discription);
                $("#sb-player img").attr({
                    src: displayImg  
                });

                if (domain.match("websiteResouse")) {
                        $("#sb-player a").text("立即前往")
                        $("#sb-player a").css({
                            'display': 'block',
                        });
                        $("#sb-player img").css('margin-top', '18px');
                        $("#sb-player a").attr({
                            href: diplaylink,
                            target:"_blank"
                        });
                        
                   }
                }}
    });
    
    return false;
});