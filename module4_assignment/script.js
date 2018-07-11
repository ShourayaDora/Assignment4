(function (){
	var names = ["Yaakov", "john", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim","jacob"];
	for(var i=0;i<names.length;++i)
		{
			var firstLetter=names[i].charAt(0);
			firstLetter.toLowerCase();
			if(firstLetter=='j')
			{
				byespeaker.speak(names[i]);
			}
			else
				{
					hellospeaker.speak(names[i]);
				}
		}
}
 )();