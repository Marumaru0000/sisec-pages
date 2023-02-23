setTimeout(function () {
    $('.slideshow').vegas({
        slides: [
            { src: 'images/SummerCamp.jpg' },
            { src: 'images/grasses.jpg' },
            { src: 'images/WelcomeParty.jpg' },
            { src: 'images/night_view.jpg'},
        ],
		transition: 'blur',		//zoomOutもかっこいい
		animation: 'kenburns',	//中央から拡大される
		delay: 5000,			//1枚ごとの時間
    });
},0); //タイミングを調整
setTimeout(function(){
    $('.LogoAnimation').fadeOut();
},5000); //タイミングを調整
