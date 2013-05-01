window.onload = function()
{
  //var o_div_pic = document.getElementByClass("pic_div");
	var o_div_pics = new Array();
	for(var i_count = 0; i_count < 8; ++i_count)
	{
		var o_div_pic = document.getElementById("pic_" + i_count);
		o_div_pic.timer = null;
		o_div_pic.alpha = 30;
		o_div_pic.style.filter = "alpha(opacity = 30)";
		o_div_pic.style.opacity = 0.3;
		//o_div_pic.style.background= "http://localhost/images/pic_" + i_count + ".PNG";
		o_div_pics[i_count] = o_div_pic;

		o_div_pic.onmouseover = function()
		{
			alpha_move(this, 100);
			//size_move(this, );
		}
		o_div_pic.onmouseout = function()
		{
			alpha_move(this, 30);
			//size_move(this, );
		}
	}
}

function alpha_move(obj, target)
{
	clearInterval(obj.timer);
	obj.timer = setInterval(function()
	{
		var speed = 0;
		if(target > obj.alpha)
		{
			speed = 5;
		}
		else
		{
			speed = -5;
		}
		if(obj.alpha == target)
		{
			clearInterval(obj.timer);
		}else{
			obj.alpha = obj.alpha + speed;
			obj.style.filter = "alpha(opacity="+ obj.alpha +")";
			obj.style.opacity = obj.alpha/100;
		}
	}, 30)
}

function size_move(obj, target)
{

}

