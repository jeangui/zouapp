function rad(num) { 
	return num * Math.PI / 180; 
};


function sqr(num) { 
	return num * num; 
};


function getDistance(a, b) {
	sqrt = Math.sqrt;
	sin = Math.sin;
	cos = Math.cos;
	atan2 = Math.atan2;
	var x;
    x = sqr(sin(rad(b.lat - a.lat) / 2)) + sqr(sin(rad(b.lon - a.lon ) / 2)) * cos(rad( a.lat )) * cos(rad( b.lat ));
    
    var result = (2 * atan2(sqrt(x), sqrt(1 - x))) * 6371000

	return Math.round( result );;
  };


function trimArr( arr )
{
	for (var i=0;i<arr.length;i++)
	{ 
		arr[i] = arr[i].replace(/^\s+|\s+$/g,'');
	}
	return arr;
}