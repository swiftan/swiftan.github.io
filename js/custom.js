/* 轮播背景图片 */
$(function () {
	$(".container").css({ opacity:2 });
    $.backstretch([
         //"/img/background/sky.png",
          "/img/background/dawn.png",
		  

          "/img/background/street.png",
          "/img/background/room.png"
	], { duration: 10000, fade: 1400 });
});
/* 站点运行时间 */
function runtime() {
	window.setTimeout("runtime()", 1000);
	/* 请修改这里的起始时间 */
    let startTime = new Date('04/24/2021 15:00:00');
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let runbox = document.getElementById('run-time');
    runbox.innerHTML = 'Built with <a href="https://gohugo.io/">HUGO</a> '
        + ((days < 10) ? '0' : '') + days + ' days '+ ' ago | Theme by <a href="https://github.com/dillonzq/LoveIt">LoveIt</a>';
}
runtime();
