var nowBan="fast_withdraw_btn";
var domain = $(location).attr('hostname');

$(document).ready(function() {
$('#fast_withdraw_btn')	.addClass('now_banner');
$('.banners_nav li').on('click', changeBanner);


if (domain.match("168")) {
//if (true) {
    $("#nowMain").attr("href", "stylesheets/creativeMain.css")
    if($("#nowSubsidiary")){
    	$("#nowSubsidiary").attr("href", "stylesheets/creativeSubsidiary.css")
    }
}

});

function changeBanner(e) {
	e.preventDefault();
	var nb="#"+nowBan;
	$(nb).removeClass('now_banner');
	nowBan=$(e.currentTarget).attr('id');
	$('#'+nowBan).addClass('now_banner')
	console.log(nowBan);
	switch(nowBan){
	case "fast_withdraw_btn":
	  TweenLite.to($(".all_banners"), 0.5,{left:"0px"} );
	  break;

	case "bonus50_btn":
		  TweenLite.to($(".all_banners"), 0.5,{left:"-620px"} );
	  break;

	  case "qq_active_btn":
	  	  TweenLite.to($(".all_banners"), 0.5,{left:"-1240px"} );
	  break;
	}

	

}