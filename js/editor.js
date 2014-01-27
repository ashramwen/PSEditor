$(function() {
	$('.slideshow-container').dacSlideshow({
		btnPrev : '.slideshow-prev',
		btnNext : '.slideshow-next',
		btnPause : '.pauseButton'
	});

	var editors = $('#strContent').PSEditor({
		getImgUrl : 'testjson2'
	});
	
	$("#getdata").click(function(){
		console.log(JSON.stringify(editors.Get(0)));
		console.log(JSON.stringify(editors.GetAll()));
	});
});

