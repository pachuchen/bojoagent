var animationIndex=1;
var animationTarget;

function timerFunc(){
	var srcPhotos=animationTarget.find('.photos')
	var pos="-"+animationIndex*214+"px"
	srcPhotos.css('background-position','0px '+pos);
	animationIndex++
	if(animationIndex>6){
		animationIndex=0
	}

}

function overhander (e) {
	var blackCover
	var words
	var srcCap
	 
	 animationTarget=$(e.currentTarget);
	 blackCover=animationTarget.find('.black_cover');
	 words=animationTarget.find('.word');
	 srcCap=animationTarget.find('figcaption');

	 //event.preventDefault();
	 $("body").everyTime('0.5s','myTimer1',timerFunc,0);

	 TweenLite.to(blackCover, 1, {opacity:0});
	 TweenLite.to(words, 1.5, {opacity:0});
	 TweenLite.to(srcCap, 1, {top:-1720});
};

function outhander(e){
	var blackCover
	var words
	var srcCap

	animationTarget=$(e.currentTarget);
	blackCover=animationTarget.find('.black_cover');
	words=animationTarget.find('.word')
	srcCap=animationTarget.find('figcaption');
	
	//event.preventDefault();
	$('body').stopTime ('myTimer1');
	
	 TweenLite.to(blackCover, 0.7, {opacity:0.9});
	 TweenLite.to(words, 1, {opacity:1});
	 TweenLite.to(srcCap, 0.5, {top:-1761});
	 animationTarget=null;
}

//計時器停止

 $('.resouse_area').on('mouseover',{}, overhander);
 $('.resouse_area').on('mouseout',{}, outhander);



$(document).ready(function() {
	var resources= $(".bannerImg,.websiteImg,.videoImg")
	TweenLite.to(resources, 2, {top:-425,ease:Bounce.easeOut});
});

