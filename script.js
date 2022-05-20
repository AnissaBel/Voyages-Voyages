document.addEventListener('DOMContentLoaded', () => {
	const widthW = document.documentElement.clientWidth;
	window.addEventListener('wheel', e => {
		if(e.deltaY > 0){
			document.body.scrollLeft += widthW;
		}
		else{
			document.body.scrollLeft -= widthW;
		}
	});
	window.addEventListener('keyup', e => {
		if(e.key == 'ArrowLeft'){
			document.body.scrollLeft -= widthW;
		}
		if(e.key == 'ArrowRight'){
			document.body.scrollLeft += widthW;
		}
	});
	
});

//Do I was helpfull? Help me too ;) https://www.paypal.com/donate/?hosted_button_id=NZ9Z8YDHSMMEC