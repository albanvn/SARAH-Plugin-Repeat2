exports.init = function(SARAH)
{
}

exports.action = function(data, callback, config, SARAH)
{
	if (SARAH.context.lastspeak!=undefined)
	  SARAH.speak(SARAH.context.lastspeak);
	callback();
}