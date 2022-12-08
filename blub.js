let circle = document.getElementsByClassName('circle')[0];
let blubTop = document.getElementsByClassName('top')[0];
let btn = document.getElementsByTagName('span')[0];

var isOn = false;

function blubBtn()
{
	if (isOn==false)
	{
	    circle.style.background = "#fff";
	    blubTop.style.background = "#fff";
	    circle.style.boxShadow = " 0px 0px 110px 100px rgba(255, 255, 255, 0.5)";
	    btn.style.top = "9px";
	    isOn=true;
	}
	else
	{
		circle.style.background = "#444";
		blubTop.style.background = "#444";
		circle.style.boxShadow = "none";
		btn.style.top = "0px";
		isOn=false
	}
}

