setTimeout(function (){
	var preload = document.getElementById('preload');
	if (!preload.classList.contains('done')) {
		preload.classList.add('done');
	}
}, 5000);
