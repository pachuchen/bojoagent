	Shadowbox.init({
    // let's skip the automatic setup because we don't have any
    // properly configured link elements on the page
    //skipSetup: true
});



$("#presentationResouse a").click(function(e) {
   var htmlTemplate = '';
   var domain = $(location).attr('href');
   var playVideo=e.currentTarget;
    
   var heading = $(playVideo).data("heading");
   var duration =  $(playVideo).data("duration");
   //var displayImg= $(playVideo).data("poster");
   var diplaylink=$(playVideo).data("link");
   var videoWidth=$(playVideo).data("videow");
   var videoHight=$(playVideo).data("videoh");
   var videoPoster=$(playVideo).data("poster");
   var videoM4V=$(playVideo).data("videomv");
   var videoWebM=$(playVideo).data("videowebm");
   var videoOgv=$(playVideo).data("videoogv");
   var videoMp4=$(playVideo).data("videompfour");

     Shadowbox.open({
        content:    '<div class="easyhtml5video" style="position:relative;max-width:'+videoWidth+'px;"><video controls="controls" autoplay="autoplay" poster="'+videoPoster+'" style="width:100%" title="'+videoWidth+'"><source src="video_src/'+videoM4V+'"type="video/mp4" /><source src='+videoWebM+' type="video/webm" /><source src='+videoOgv+' type="video/ogg" /><source src='+videoMp4+' /><object type="application/x-shockwave-flash" data="index.files/html5video/flashfox.swf" width="'+videoWidth+'" height="'+videoHight+'" style="position:relative;"><param name="movie" value="index.files/html5video/flashfox.swf" /><param name="allowFullScreen" value="true" /><param name="flashVars" value="autoplay=true&amp;controls=true&amp;fullScreenEnabled=true&amp;posterOnEnd=true&amp;loop=false&amp;poster='+videoPoster+'&amp;src='+videoM4V+'" /> <embed src="index.files/html5video/flashfox.swf" width="'+videoWidth+'" height="'+videoHight+'" style="position:relative;" flashVars="autoplay=true&amp;controls=true&amp;fullScreenEnabled=true&amp;posterOnEnd=true&amp;loop=false&amp;poster='+videoPoster+'&amp;src='+videoM4V+'"allowFullScreen="true" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer_en" /><img alt='+heading+' src='+videoPoster+'style="position:absolute;left:0;" width="100%" title="Video playback is not supported by your browser" /></object></video></div><script src="js/html5ext.js" type="text/javascript"></script><div class="video_discript"><h1></h1><h2>类 型 : 视频</h2><h2>長 度 : <span id="video_duration"></span></h2></div>',
        player:     "html",
        width:     1038,
        height:    400,
       
        options: {onFinish: function () { 
               $("#sb-player h1").text(heading);
                $("#sb-player #video_duration").text(duration);
            }}
    });
    return false;
});

