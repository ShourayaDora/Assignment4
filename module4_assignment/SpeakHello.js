(function (window){
	
	var speakWord = "Hello";
	var hellospeaker ={
		speak:function(name) {
                  console.log(speakWord + " " + name);
                         },
	                 };
	window.hellospeaker=hellospeaker;
	
	
})(window);// JavaScript Document