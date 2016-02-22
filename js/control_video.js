function videoRun(){
	var videoElem = document.querySelector("video");
	videoElem.currentTime = 50.64043;
	videoElem.play();
}
var material_video = document.querySelector("#material_video");
material_video.addEventListener("click", videoRun);


