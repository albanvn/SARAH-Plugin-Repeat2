const gs_msg_forgetit="je ne me souviens plus de ce que j'ai dit|je ne me rappelle plus de ce que j'ai dit";

exports.init = function(SARAH)
{
}

exports.action = function(data, callback, config, SARAH)
{
	if (SARAH.context.lastspeak!=undefined)
	  SARAH.speak(SARAH.context.lastspeak);
	else
	  SARAH.speakR(gs_msg_forgetit);
	callback();
}