$(document).ready(function(){
	//votre code
	var i = 0;
	var faits = ['Sympa comme jeu....:/','Va passer le balai!','Et la vaisselle, elle va se faire toute seule!','T as vraiment rien à faire','Et voilà t as perdu au moins 10 mn de ta vie là, t\'es heureux?','Et sinon dans la vie tu fais quoi?','Si tu continues comme ca, tu vas finir abruti!','T es vraiment trop baleze,... dans l acharnement qui sert a rien','A ce point là, ta mère elle t a bercé trop près du mur. Va porter plainte!','Là, je ne peux plus rien pour toi!','Et tu continues....']
	$('.cake').click(function(){
		i++;
		console.log(i);
		$('span').text(i);
		for (n=1; n<=10; n++){
		if (i == n*20){
	 	alert(faits[n]);
	 };
	 };
	});

		
});