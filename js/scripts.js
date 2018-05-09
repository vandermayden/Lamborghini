var wrapper = go(); //при открытии приложения после начальной анимации

function go() { 
	document.getElementById('content').style.display = '';
	document.getElementById('lamborghini_top').style.color = '#fff';
	document.getElementById('models_top').style.color = '#ef9e34';
	document.getElementById('concept_top').style.color = '#ef9e34';
	document.getElementById('lamborghini_bottom').style.color = '#fff';
	document.getElementById('models_bottom').style.color = '#ef9e34';
	document.getElementById('concept_bottom').style.color = '#ef9e34';
	document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img.png) no-repeat';
	document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_61.png) no-repeat';
	document.getElementById('logo-place').style.width = '200px';
}

var gtm = document.getElementById('go_to_models');	//в вкладке models (content_1)/маленькая галерея (content_3), кнопка возврата в models (content_1)
gtm.onclick = go_to_models;

var gtc = document.getElementById('go_to_concept');	//в вкладке concept (content_2)/маленькая галерея (content_3), кнопка возврата в concept (content_2)
gtc.onclick = go_to_concept;

var count = 'not name'; //переменная для присваивания модели авто

var num1, num2, num3, num4, num5, numb1, numb2, numb3, numb4, numb5; //переменные для массивов с адресами фотографий

var number = 0; //счетчик

var register = false; //регистр вхождения в большую галерею (big_gallary), из вкладки models (content_1) или вкладки concept (content_2)

lamborghini_top.addEventListener('click', go_to_lamborghini); //кнопка lamborghini верхняя
lamborghini_bottom.addEventListener('click', go_to_lamborghini); //кнопка lamborghini нижняя
function go_to_lamborghini() {	
	document.getElementById('content_1').style.display = 'none';
	document.getElementById('content_2').style.display = 'none';
	document.getElementById('content_3').style.display = 'none';
	document.getElementById('content').style.display = '';
	document.getElementById('lamborghini_top').style.color = '#fff';
	document.getElementById('models_top').style.color = '#ef9e34';
	document.getElementById('concept_top').style.color = '#ef9e34';
	document.getElementById('lamborghini_bottom').style.color = '#fff';
	document.getElementById('models_bottom').style.color = '#ef9e34';
	document.getElementById('concept_bottom').style.color = '#ef9e34';
	document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img.png) no-repeat';
	document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_61.png) no-repeat';
	document.getElementById('logo-place').style.width = '200px';
	document.getElementById('big_photo_concept_button').style.display = 'none';
	document.getElementById('close_site').style.display = 'none';
	number = 0;
}

models_top.addEventListener('click', go_to_models);  //кнопка models верхняя
models_bottom.addEventListener('click', go_to_models);  //кнопка models нижняя
function go_to_models() {
	document.getElementById('content_1').style.display = '';
	document.getElementById('content_2').style.display = 'none';
	document.getElementById('content_3').style.display = 'none';
	document.getElementById('content').style.display = 'none';
	document.getElementById('lamborghini_top').style.color = '#ef9e34';
	document.getElementById('models_top').style.color = '#fff';
	document.getElementById('concept_top').style.color = '#ef9e34';
	document.getElementById('lamborghini_bottom').style.color = '#ef9e34';
	document.getElementById('models_bottom').style.color = '#fff';
	document.getElementById('concept_bottom').style.color = '#ef9e34';
	document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_1.png) no-repeat';
	document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img.png) no-repeat';
	document.getElementById('logo-place').style.width = '200px';
	document.getElementById('big_photo_concept_button').style.display = 'none';
	document.getElementById('close_site').style.display = 'none';
	number = 0;
}

concept_top.addEventListener('click', go_to_concept); //кнопка concept верхняя
concept_bottom.addEventListener('click', go_to_concept);  //кнопка concept нижняя
function go_to_concept() {
	document.getElementById('content_1').style.display = 'none';
	document.getElementById('content_2').style.display = '';
	document.getElementById('content_3').style.display = 'none';
	document.getElementById('content').style.display = 'none';
	document.getElementById('lamborghini_top').style.color = '#ef9e34';
	document.getElementById('models_top').style.color = '#ef9e34';
	document.getElementById('concept_top').style.color = '#fff';
	document.getElementById('lamborghini_bottom').style.color = '#ef9e34';
	document.getElementById('models_bottom').style.color = '#ef9e34';
	document.getElementById('concept_bottom').style.color = '#fff';
	document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_2.png) no-repeat';
	document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_2.png) no-repeat';
	document.getElementById('logo-place').style.width = '130px';
	document.getElementById('big_photo_concept_button').style.display = 'none';
	document.getElementById('close_site').style.display = '';
	number = 0;
}

function go_to_small_gallary(N) { //в вкладке models (content_1) или вкладке concept (content_2), кнопка по имени автомобиля или картинке авто, для открытия маленькой галереи (content_3)
	document.getElementById('small_photo_1').style.border = '5px solid red';
	document.getElementById('small_photo_2').style.border = '5px solid #fff';
	document.getElementById('small_photo_3').style.border = '5px solid #fff';
	document.getElementById('small_photo_4').style.border = '5px solid #fff';
	document.getElementById('small_photo_5').style.border = '5px solid #fff';
	document.getElementById('content_1').style.display = 'none';
	document.getElementById('content_2').style.display = 'none';
	document.getElementById('content_3').style.display = '';
	document.getElementById('murcielago_text').style.display = 'none';
	document.getElementById('gallardo_text').style.display = 'none';
	document.getElementById('gallardo_spyder_text').style.display = 'none';
	document.getElementById('reventon_text').style.display = 'none';
	document.getElementById('sesto_elemento_text').style.display = 'none';
	document.getElementById('aventador_text').style.display = 'none';
	document.getElementById('veneno_text').style.display = 'none';
	document.getElementById('huracan_text').style.display = 'none';
	document.getElementById('centenario_text').style.display = 'none';
	document.getElementById('urus_text').style.display = 'none';
	document.getElementById('asterion_text').style.display = 'none';
	document.getElementById('estoque_text').style.display = 'none';
	document.getElementById('egoista_text').style.display = 'none';
	if (N == 'murc') {
		document.getElementById('gallary_color_img_place').style.background = '#93a4ae';
		document.getElementById('go_to_models').style.display = '';
		document.getElementById('go_to_concept').style.display = 'none';
		document.getElementById('murcielago_text').style.display = '';
		document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_3.png) no-repeat';
	    document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_12.png) no-repeat';
		document.getElementById('name_gallary').innerHTML = 'Lamborghini Murcielago';		
		document.getElementById('big_photo').style.background = 'url(../lamborghini/img/murcielago/gallary_big_murcielago_1.jpg) no-repeat';		
		document.getElementById('small_photo_1').style.background = 'url(../lamborghini/img/murcielago/gallary_small_murcielago_1.jpg) no-repeat';
		document.getElementById('small_photo_2').style.background = 'url(../lamborghini/img/murcielago/gallary_small_murcielago_2.jpg) no-repeat';
		document.getElementById('small_photo_3').style.background = 'url(../lamborghini/img/murcielago/gallary_small_murcielago_3.jpg) no-repeat';
		document.getElementById('small_photo_4').style.background = 'url(../lamborghini/img/murcielago/gallary_small_murcielago_4.jpg) no-repeat';
		document.getElementById('small_photo_5').style.background = 'url(../lamborghini/img/murcielago/gallary_small_murcielago_5.jpg) no-repeat';
		num1 = 'url(../lamborghini/img/murcielago/gallary_big_murcielago_1.jpg) no-repeat';
		num2 = 'url(../lamborghini/img/murcielago/gallary_big_murcielago_2.jpg) no-repeat';
		num3 = 'url(../lamborghini/img/murcielago/gallary_big_murcielago_3.jpg) no-repeat';
		num4 = 'url(../lamborghini/img/murcielago/gallary_big_murcielago_4.jpg) no-repeat';
		num5 = 'url(../lamborghini/img/murcielago/gallary_big_murcielago_5.jpg) no-repeat';
	}
	if (N == 'gal') {
		document.getElementById('gallary_color_img_place').style.background = '#93a4ae';
		document.getElementById('go_to_models').style.display = '';
		document.getElementById('go_to_concept').style.display = 'none';
		document.getElementById('gallardo_text').style.display = '';
		document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_3.png) no-repeat';
	    document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_12.png) no-repeat';
		document.getElementById('name_gallary').innerHTML = 'Lamborghini Gallardo';
		document.getElementById('big_photo').style.background = 'url(../lamborghini/img/gallardo/gallary_big_gallardo_1.jpg) no-repeat';
		document.getElementById('small_photo_1').style.background = 'url(../lamborghini/img/gallardo/gallary_small_gallardo_1.jpg) no-repeat';
		document.getElementById('small_photo_2').style.background = 'url(../lamborghini/img/gallardo/gallary_small_gallardo_2.jpg) no-repeat';
		document.getElementById('small_photo_3').style.background = 'url(../lamborghini/img/gallardo/gallary_small_gallardo_3.jpg) no-repeat';
		document.getElementById('small_photo_4').style.background = 'url(../lamborghini/img/gallardo/gallary_small_gallardo_4.jpg) no-repeat';
		document.getElementById('small_photo_5').style.background = 'url(../lamborghini/img/gallardo/gallary_small_gallardo_5.jpg) no-repeat';
		 num1 = 'url(../lamborghini/img/gallardo/gallary_big_gallardo_1.jpg) no-repeat';
		 num2 =	'url(../lamborghini/img/gallardo/gallary_big_gallardo_2.jpg) no-repeat';
		 num3 = 'url(../lamborghini/img/gallardo/gallary_big_gallardo_3.jpg) no-repeat';
		 num4 = 'url(../lamborghini/img/gallardo/gallary_big_gallardo_4.jpg) no-repeat';
		 num5 = 'url(../lamborghini/img/gallardo/gallary_big_gallardo_5.jpg) no-repeat';
	}
	if (N == 'gals') {
		document.getElementById('gallary_color_img_place').style.background = '#93a4ae';
		document.getElementById('go_to_models').style.display = '';
		document.getElementById('go_to_concept').style.display = 'none';
		document.getElementById('gallardo_spyder_text').style.display = '';
		document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_3.png) no-repeat';
	    document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_12.png) no-repeat';
		document.getElementById('name_gallary').innerHTML = 'Lamborghini Gallardo Spyder';
		document.getElementById('big_photo').style.background = 'url(../lamborghini/img/gallardo-spyder/gallary_big_gallardo_spyder_1.jpg) no-repeat';
		document.getElementById('small_photo_1').style.background = 'url(../lamborghini/img/gallardo-spyder/gallary_small_gallardo_spyder_1.jpg) no-repeat';
		document.getElementById('small_photo_2').style.background = 'url(../lamborghini/img/gallardo-spyder/gallary_small_gallardo_spyder_2.jpg) no-repeat';
		document.getElementById('small_photo_3').style.background = 'url(../lamborghini/img/gallardo-spyder/gallary_small_gallardo_spyder_3.jpg) no-repeat';
		document.getElementById('small_photo_4').style.background = 'url(../lamborghini/img/gallardo-spyder/gallary_small_gallardo_spyder_4.jpg) no-repeat';
		document.getElementById('small_photo_5').style.background = 'url(../lamborghini/img/gallardo-spyder/gallary_small_gallardo_spyder_5.jpg) no-repeat';
		num1 = 'url(../lamborghini/img/gallardo-spyder/gallary_big_gallardo_spyder_1.jpg) no-repeat';
		num2 = 'url(../lamborghini/img/gallardo-spyder/gallary_big_gallardo_spyder_2.jpg) no-repeat';
		num3 = 'url(../lamborghini/img/gallardo-spyder/gallary_big_gallardo_spyder_3.jpg) no-repeat';
		num4 = 'url(../lamborghini/img/gallardo-spyder/gallary_big_gallardo_spyder_4.jpg) no-repeat';
		num5 = 'url(../lamborghini/img/gallardo-spyder/gallary_big_gallardo_spyder_5.jpg) no-repeat';
	}
	if (N == 'rev') {
		document.getElementById('gallary_color_img_place').style.background = '#93a4ae';
		document.getElementById('go_to_models').style.display = '';
		document.getElementById('go_to_concept').style.display = 'none';
		document.getElementById('reventon_text').style.display = '';
		document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_3.png) no-repeat';
	    document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_12.png) no-repeat';
		document.getElementById('name_gallary').innerHTML = 'Lamborghini Reventon';
		document.getElementById('big_photo').style.background = 'url(../lamborghini/img/reventon/gallary_big_reventon_1.jpg) no-repeat';
		document.getElementById('small_photo_1').style.background = 'url(../lamborghini/img/reventon/gallary_small_reventon_1.jpg) no-repeat';
		document.getElementById('small_photo_2').style.background = 'url(../lamborghini/img/reventon/gallary_small_reventon_2.jpg) no-repeat';
		document.getElementById('small_photo_3').style.background = 'url(../lamborghini/img/reventon/gallary_small_reventon_3.jpg) no-repeat';
		document.getElementById('small_photo_4').style.background = 'url(../lamborghini/img/reventon/gallary_small_reventon_4.jpg) no-repeat';
		document.getElementById('small_photo_5').style.background = 'url(../lamborghini/img/reventon/gallary_small_reventon_5.jpg) no-repeat';
		num1 = 'url(../lamborghini/img/reventon/gallary_big_reventon_1.jpg) no-repeat';
		num2 = 'url(../lamborghini/img/reventon/gallary_big_reventon_2.jpg) no-repeat';
		num3 = 'url(../lamborghini/img/reventon/gallary_big_reventon_3.jpg) no-repeat';
		num4 = 'url(../lamborghini/img/reventon/gallary_big_reventon_4.jpg) no-repeat';
		num5 = 'url(../lamborghini/img/reventon/gallary_big_reventon_5.jpg) no-repeat';
	}
	if (N == 'ses') {
		document.getElementById('gallary_color_img_place').style.background = '#93a4ae';
		document.getElementById('go_to_models').style.display = '';
		document.getElementById('go_to_concept').style.display = 'none';
		document.getElementById('sesto_elemento_text').style.display = '';
		document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_3.png) no-repeat';
	    document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_12.png) no-repeat';
		document.getElementById('name_gallary').innerHTML = 'Lamborghini Sesto Elemento';
		document.getElementById('big_photo').style.background = 'url(../lamborghini/img/sesto-elemento/gallary_big_sesto_elemento_1.jpg) no-repeat';
		document.getElementById('small_photo_1').style.background = 'url(../lamborghini/img/sesto-elemento/gallary_small_sesto_elemento_1.jpg) no-repeat';
		document.getElementById('small_photo_2').style.background = 'url(../lamborghini/img/sesto-elemento/gallary_small_sesto_elemento_2.jpg) no-repeat';
		document.getElementById('small_photo_3').style.background = 'url(../lamborghini/img/sesto-elemento/gallary_small_sesto_elemento_3.jpg) no-repeat';
		document.getElementById('small_photo_4').style.background = 'url(../lamborghini/img/sesto-elemento/gallary_small_sesto_elemento_4.jpg) no-repeat';
		document.getElementById('small_photo_5').style.background = 'url(../lamborghini/img/sesto-elemento/gallary_small_sesto_elemento_5.jpg) no-repeat';
		num1 = 'url(../lamborghini/img/sesto-elemento/gallary_big_sesto_elemento_1.jpg) no-repeat';
		num2 = 'url(../lamborghini/img/sesto-elemento/gallary_big_sesto_elemento_2.jpg) no-repeat';
		num3 = 'url(../lamborghini/img/sesto-elemento/gallary_big_sesto_elemento_3.jpg) no-repeat';
		num4 = 'url(../lamborghini/img/sesto-elemento/gallary_big_sesto_elemento_4.jpg) no-repeat';
		num5 = 'url(../lamborghini/img/sesto-elemento/gallary_big_sesto_elemento_5.jpg) no-repeat';
	}
	if (N == 'aven') {
		document.getElementById('gallary_color_img_place').style.background = '#93a4ae';
		document.getElementById('go_to_models').style.display = '';
		document.getElementById('go_to_concept').style.display = 'none';
		document.getElementById('aventador_text').style.display = '';
		document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_3.png) no-repeat';
	    document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_12.png) no-repeat';
		document.getElementById('name_gallary').innerHTML = 'Lamborghini Aventador';
		document.getElementById('big_photo').style.background = 'url(../lamborghini/img/aventador/gallary_big_aventador_1.jpg) no-repeat';
		document.getElementById('small_photo_1').style.background = 'url(../lamborghini/img/aventador/gallary_small_aventador_1.jpg) no-repeat';
		document.getElementById('small_photo_2').style.background = 'url(../lamborghini/img/aventador/gallary_small_aventador_2.jpg) no-repeat';
		document.getElementById('small_photo_3').style.background = 'url(../lamborghini/img/aventador/gallary_small_aventador_3.jpg) no-repeat';
		document.getElementById('small_photo_4').style.background = 'url(../lamborghini/img/aventador/gallary_small_aventador_4.jpg) no-repeat';
		document.getElementById('small_photo_5').style.background = 'url(../lamborghini/img/aventador/gallary_small_aventador_5.jpg) no-repeat';
		num1 = 'url(../lamborghini/img/aventador/gallary_big_aventador_1.jpg) no-repeat';
		num2 = 'url(../lamborghini/img/aventador/gallary_big_aventador_2.jpg) no-repeat';
		num3 = 'url(../lamborghini/img/aventador/gallary_big_aventador_3.jpg) no-repeat';
		num4 = 'url(../lamborghini/img/aventador/gallary_big_aventador_4.jpg) no-repeat';
		num5 = 'url(../lamborghini/img/aventador/gallary_big_aventador_5.jpg) no-repeat';
	}
	if (N == 'ven') {
		document.getElementById('gallary_color_img_place').style.background = '#93a4ae';
		document.getElementById('go_to_models').style.display = '';
		document.getElementById('go_to_concept').style.display = 'none';
		document.getElementById('veneno_text').style.display = '';
		document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_3.png) no-repeat';
	    document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_12.png) no-repeat';
		document.getElementById('name_gallary').innerHTML = 'Lamborghini Veneno';
		document.getElementById('big_photo').style.background = 'url(../lamborghini/img/veneno/gallary_big_veneno_1.jpg) no-repeat';
		document.getElementById('small_photo_1').style.background = 'url(../lamborghini/img/veneno/gallary_small_veneno_1.jpg) no-repeat';
		document.getElementById('small_photo_2').style.background = 'url(../lamborghini/img/veneno/gallary_small_veneno_2.jpg) no-repeat';
		document.getElementById('small_photo_3').style.background = 'url(../lamborghini/img/veneno/gallary_small_veneno_3.jpg) no-repeat';
		document.getElementById('small_photo_4').style.background = 'url(../lamborghini/img/veneno/gallary_small_veneno_4.jpg) no-repeat';
		document.getElementById('small_photo_5').style.background = 'url(../lamborghini/img/veneno/gallary_small_veneno_5.jpg) no-repeat';
		num1 = 'url(../lamborghini/img/veneno/gallary_big_veneno_1.jpg) no-repeat';
		num2 = 'url(../lamborghini/img/veneno/gallary_big_veneno_2.jpg) no-repeat';
		num3 = 'url(../lamborghini/img/veneno/gallary_big_veneno_3.jpg) no-repeat';
		num4 = 'url(../lamborghini/img/veneno/gallary_big_veneno_4.jpg) no-repeat';
		num5 = 'url(../lamborghini/img/veneno/gallary_big_veneno_5.jpg) no-repeat';
	}
	if (N == 'hur') {
		document.getElementById('gallary_color_img_place').style.background = '#93a4ae';
		document.getElementById('go_to_models').style.display = '';
		document.getElementById('go_to_concept').style.display = 'none';
		document.getElementById('huracan_text').style.display = '';
		document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_3.png) no-repeat';
	    document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_12.png) no-repeat';
		document.getElementById('name_gallary').innerHTML = 'Lamborghini Huracan';
		document.getElementById('big_photo').style.background = 'url(../lamborghini/img/huracan/gallary_big_huracan_1.jpg) no-repeat';
		document.getElementById('small_photo_1').style.background = 'url(../lamborghini/img/huracan/gallary_small_huracan_1.jpg) no-repeat';
		document.getElementById('small_photo_2').style.background = 'url(../lamborghini/img/huracan/gallary_small_huracan_2.jpg) no-repeat';
		document.getElementById('small_photo_3').style.background = 'url(../lamborghini/img/huracan/gallary_small_huracan_3.jpg) no-repeat';
		document.getElementById('small_photo_4').style.background = 'url(../lamborghini/img/huracan/gallary_small_huracan_4.jpg) no-repeat';
		document.getElementById('small_photo_5').style.background = 'url(../lamborghini/img/huracan/gallary_small_huracan_5.jpg) no-repeat';
		num1 = 'url(../lamborghini/img/huracan/gallary_big_huracan_1.jpg) no-repeat';
		num2 = 'url(../lamborghini/img/huracan/gallary_big_huracan_2.jpg) no-repeat';
		num3 = 'url(../lamborghini/img/huracan/gallary_big_huracan_3.jpg) no-repeat';
		num4 = 'url(../lamborghini/img/huracan/gallary_big_huracan_4.jpg) no-repeat';
		num5 = 'url(../lamborghini/img/huracan/gallary_big_huracan_5.jpg) no-repeat';
	}
	if (N == 'cent') {
		document.getElementById('gallary_color_img_place').style.background = '#93a4ae';
		document.getElementById('go_to_models').style.display = '';
		document.getElementById('go_to_concept').style.display = 'none';
		document.getElementById('centenario_text').style.display = '';
		document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_3.png) no-repeat';
	    document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_12.png) no-repeat';
		document.getElementById('name_gallary').innerHTML = 'Lamborghini Centenario';
		document.getElementById('big_photo').style.background = 'url(../lamborghini/img/centenario/gallary_big_centenario_1.jpg) no-repeat';
		document.getElementById('small_photo_1').style.background = 'url(../lamborghini/img/centenario/gallary_small_centenario_1.jpg) no-repeat';
		document.getElementById('small_photo_2').style.background = 'url(../lamborghini/img/centenario/gallary_small_centenario_2.jpg) no-repeat';
		document.getElementById('small_photo_3').style.background = 'url(../lamborghini/img/centenario/gallary_small_centenario_3.jpg) no-repeat';
		document.getElementById('small_photo_4').style.background = 'url(../lamborghini/img/centenario/gallary_small_centenario_4.jpg) no-repeat';
		document.getElementById('small_photo_5').style.background = 'url(../lamborghini/img/centenario/gallary_small_centenario_5.jpg) no-repeat';
		num1 = 'url(../lamborghini/img/centenario/gallary_big_centenario_1.jpg) no-repeat';
		num2 = 'url(../lamborghini/img/centenario/gallary_big_centenario_2.jpg) no-repeat';
		num3 = 'url(../lamborghini/img/centenario/gallary_big_centenario_3.jpg) no-repeat';
		num4 = 'url(../lamborghini/img/centenario/gallary_big_centenario_4.jpg) no-repeat';
		num5 = 'url(../lamborghini/img/centenario/gallary_big_centenario_5.jpg) no-repeat';
	}
	if (N == 'ur') {
		document.getElementById('gallary_color_img_place').style.background = '#93a4ae';
		document.getElementById('go_to_models').style.display = '';
		document.getElementById('go_to_concept').style.display = 'none';
		document.getElementById('urus_text').style.display = '';
		document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_3.png) no-repeat';
	    document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_12.png) no-repeat';
		document.getElementById('name_gallary').innerHTML = 'Lamborghini Urus';
		document.getElementById('big_photo').style.background = 'url(../lamborghini/img/urus/gallary_big_urus_1.jpg) no-repeat';
		document.getElementById('small_photo_1').style.background = 'url(../lamborghini/img/urus/gallary_small_urus_1.jpg) no-repeat';
		document.getElementById('small_photo_2').style.background = 'url(../lamborghini/img/urus/gallary_small_urus_2.jpg) no-repeat';
		document.getElementById('small_photo_3').style.background = 'url(../lamborghini/img/urus/gallary_small_urus_3.jpg) no-repeat';
		document.getElementById('small_photo_4').style.background = 'url(../lamborghini/img/urus/gallary_small_urus_4.jpg) no-repeat';
		document.getElementById('small_photo_5').style.background = 'url(../lamborghini/img/urus/gallary_small_urus_5.jpg) no-repeat';
		num1 = 'url(../lamborghini/img/urus/gallary_big_urus_1.jpg) no-repeat';
		num2 = 'url(../lamborghini/img/urus/gallary_big_urus_2.jpg) no-repeat';
		num3 = 'url(../lamborghini/img/urus/gallary_big_urus_3.jpg) no-repeat';
		num4 = 'url(../lamborghini/img/urus/gallary_big_urus_4.jpg) no-repeat';
		num5 = 'url(../lamborghini/img/urus/gallary_big_urus_5.jpg) no-repeat';
	}
	if (N == 'ast') {
		document.getElementById('gallary_color_img_place').style.background = '#b0b9b6';
		document.getElementById('go_to_models').style.display = 'none';
		document.getElementById('go_to_concept').style.display = '';
		document.getElementById('asterion_text').style.display = '';
		document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_4.png) no-repeat';
	    document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_4.png) no-repeat';
		document.getElementById('name_gallary').innerHTML = 'Lamborghini Asterion';
		document.getElementById('big_photo').style.background = 'url(../lamborghini/img/asterion/gallary_big_asterion_1.jpg) no-repeat';
		document.getElementById('small_photo_1').style.background = 'url(../lamborghini/img/asterion/gallary_small_asterion_1.jpg) no-repeat';
		document.getElementById('small_photo_2').style.background = 'url(../lamborghini/img/asterion/gallary_small_asterion_2.jpg) no-repeat';
		document.getElementById('small_photo_3').style.background = 'url(../lamborghini/img/asterion/gallary_small_asterion_3.jpg) no-repeat';
		document.getElementById('small_photo_4').style.background = 'url(../lamborghini/img/asterion/gallary_small_asterion_4.jpg) no-repeat';
		document.getElementById('small_photo_5').style.background = 'url(../lamborghini/img/asterion/gallary_small_asterion_5.jpg) no-repeat';
		num1 = 'url(../lamborghini/img/asterion/gallary_big_asterion_1.jpg) no-repeat';
		num2 = 'url(../lamborghini/img/asterion/gallary_big_asterion_2.jpg) no-repeat';
		num3 = 'url(../lamborghini/img/asterion/gallary_big_asterion_3.jpg) no-repeat';
		num4 = 'url(../lamborghini/img/asterion/gallary_big_asterion_4.jpg) no-repeat';
		num5 = 'url(../lamborghini/img/asterion/gallary_big_asterion_5.jpg) no-repeat';
		document.getElementById('big_photo_concept_button').style.display = '';
		document.getElementById('close_site').style.display = 'none';
	}
	if (N == 'est') {
		document.getElementById('gallary_color_img_place').style.background = '#b0b9b6';
		document.getElementById('go_to_models').style.display = 'none';
		document.getElementById('go_to_concept').style.display = '';
		document.getElementById('estoque_text').style.display = '';
		document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_4.png) no-repeat';
	    document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_4.png) no-repeat';
		document.getElementById('name_gallary').innerHTML = 'Lamborghini Estoque';
		document.getElementById('big_photo').style.background = 'url(../lamborghini/img/estoque/gallary_big_estoque_1.jpg) no-repeat';
		document.getElementById('small_photo_1').style.background = 'url(../lamborghini/img/estoque/gallary_small_estoque_1.jpg) no-repeat';
		document.getElementById('small_photo_2').style.background = 'url(../lamborghini/img/estoque/gallary_small_estoque_2.jpg) no-repeat';
		document.getElementById('small_photo_3').style.background = 'url(../lamborghini/img/estoque/gallary_small_estoque_3.jpg) no-repeat';
		document.getElementById('small_photo_4').style.background = 'url(../lamborghini/img/estoque/gallary_small_estoque_4.jpg) no-repeat';
		document.getElementById('small_photo_5').style.background = 'url(../lamborghini/img/estoque/gallary_small_estoque_5.jpg) no-repeat';
		num1 = 'url(../lamborghini/img/estoque/gallary_big_estoque_1.jpg) no-repeat';
		num2 = 'url(../lamborghini/img/estoque/gallary_big_estoque_2.jpg) no-repeat';
		num3 = 'url(../lamborghini/img/estoque/gallary_big_estoque_3.jpg) no-repeat';
		num4 = 'url(../lamborghini/img/estoque/gallary_big_estoque_4.jpg) no-repeat';
		num5 = 'url(../lamborghini/img/estoque/gallary_big_estoque_5.jpg) no-repeat';
		document.getElementById('big_photo_concept_button').style.display = '';
		document.getElementById('close_site').style.display = 'none';
	}
	if (N == 'ego') {
		document.getElementById('gallary_color_img_place').style.background = '#b0b9b6';
		document.getElementById('go_to_models').style.display = 'none';
		document.getElementById('go_to_concept').style.display = '';
		document.getElementById('egoista_text').style.display = '';
		document.getElementById('header-img').style.background = 'url(../lamborghini/img/head_img_4.png) no-repeat';
	    document.getElementById('footer-img').style.background = 'url(../lamborghini/img/foot_img_4.png) no-repeat';
		document.getElementById('name_gallary').innerHTML = 'Lamborghini Egoista';
		document.getElementById('big_photo').style.background = 'url(../lamborghini/img/egoista/gallary_big_egoista_1.jpg) no-repeat';
		document.getElementById('small_photo_1').style.background = 'url(../lamborghini/img/egoista/gallary_small_egoista_1.jpg) no-repeat';
		document.getElementById('small_photo_2').style.background = 'url(../lamborghini/img/egoista/gallary_small_egoista_2.jpg) no-repeat';
		document.getElementById('small_photo_3').style.background = 'url(../lamborghini/img/egoista/gallary_small_egoista_3.jpg) no-repeat';
		document.getElementById('small_photo_4').style.background = 'url(../lamborghini/img/egoista/gallary_small_egoista_4.jpg) no-repeat';
		document.getElementById('small_photo_5').style.background = 'url(../lamborghini/img/egoista/gallary_small_egoista_5.jpg) no-repeat';
		num1 = 'url(../lamborghini/img/egoista/gallary_big_egoista_1.jpg) no-repeat';
		num2 = 'url(../lamborghini/img/egoista/gallary_big_egoista_2.jpg) no-repeat';
		num3 = 'url(../lamborghini/img/egoista/gallary_big_egoista_3.jpg) no-repeat';
		num4 = 'url(../lamborghini/img/egoista/gallary_big_egoista_4.jpg) no-repeat';
		num5 = 'url(../lamborghini/img/egoista/gallary_big_egoista_5.jpg) no-repeat';
		document.getElementById('big_photo_concept_button').style.display = '';
		document.getElementById('close_site').style.display = 'none';
	}
	count = N;
	console.log('count = ' + count);
}

function change_photo_small_gallary(i) {  //в вкладке маленькая галерея (content_3), клик по маленьким фото, с заменой большого фото
	document.getElementById('small_photo_1').style.border = '5px solid #fff';
	document.getElementById('small_photo_2').style.border = '5px solid #fff';
	document.getElementById('small_photo_3').style.border = '5px solid #fff';
	document.getElementById('small_photo_4').style.border = '5px solid #fff';
	document.getElementById('small_photo_5').style.border = '5px solid #fff';	
	if (i == 'pic1') {
		document.getElementById('small_photo_1').style.border = '5px solid red';
		number = 0;
		if (count == 'murc'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/murcielago/gallary_big_murcielago_1.jpg) no-repeat';			
		}
		if (count == 'gal'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/gallardo/gallary_big_gallardo_1.jpg) no-repeat';			
		}
		if (count == 'gals'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/gallardo-spyder/gallary_big_gallardo_spyder_1.jpg) no-repeat';			
		}
		if (count == 'rev'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/reventon/gallary_big_reventon_1.jpg) no-repeat';
		}
		if (count == 'ses'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/sesto-elemento/gallary_big_sesto_elemento_1.jpg) no-repeat';			
		}
		if (count == 'aven'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/aventador/gallary_big_aventador_1.jpg) no-repeat';
		}
		if (count == 'ven'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/veneno/gallary_big_veneno_1.jpg) no-repeat';			
		}
		if (count == 'hur'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/huracan/gallary_big_huracan_1.jpg) no-repeat';			
		}
		if (count == 'cent'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/centenario/gallary_big_centenario_1.jpg) no-repeat';			
		}
		if (count == 'ur'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/urus/gallary_big_urus_1.jpg) no-repeat';			
		}
		if (count == 'ast'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/asterion/gallary_big_asterion_1.jpg) no-repeat';			
		}
		if (count == 'est'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/estoque/gallary_big_estoque_1.jpg) no-repeat';			
		}
		if (count == 'ego'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/egoista/gallary_big_egoista_1.jpg) no-repeat';			
		}
	}
	if (i == 'pic2') {
		document.getElementById('small_photo_2').style.border = '5px solid red';
		number = 1;
		if (count == 'murc'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/murcielago/gallary_big_murcielago_2.jpg) no-repeat';
		}
		if (count == 'gal'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/gallardo/gallary_big_gallardo_2.jpg) no-repeat';
		}
		if (count == 'gals'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/gallardo-spyder/gallary_big_gallardo_spyder_2.jpg) no-repeat';			
		}
		if (count == 'rev'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/reventon/gallary_big_reventon_2.jpg) no-repeat';			
		}
		if (count == 'ses'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/sesto-elemento/gallary_big_sesto_elemento_2.jpg) no-repeat';			
		}
		if (count == 'aven'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/aventador/gallary_big_aventador_2.jpg) no-repeat';			
		}
		if (count == 'ven'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/veneno/gallary_big_veneno_2.jpg) no-repeat';			
		}
		if (count == 'hur'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/huracan/gallary_big_huracan_2.jpg) no-repeat';			
		}
		if (count == 'cent'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/centenario/gallary_big_centenario_2.jpg) no-repeat';			
		}
		if (count == 'ur'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/urus/gallary_big_urus_2.jpg) no-repeat';			
		}
		if (count == 'ast'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/asterion/gallary_big_asterion_2.jpg) no-repeat';			
		}
		if (count == 'est'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/estoque/gallary_big_estoque_2.jpg) no-repeat';			
		}
		if (count == 'ego'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/egoista/gallary_big_egoista_2.jpg) no-repeat';			
		}
	}
	if (i == 'pic3') {
		document.getElementById('small_photo_3').style.border = '5px solid red';
		number = 2;
		if (count == 'murc'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/murcielago/gallary_big_murcielago_3.jpg) no-repeat';
		}
		if (count == 'gal'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/gallardo/gallary_big_gallardo_3.jpg) no-repeat';			
		}
		if (count == 'gals'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/gallardo-spyder/gallary_big_gallardo_spyder_3.jpg) no-repeat';			
		}
		if (count == 'rev'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/reventon/gallary_big_reventon_3.jpg) no-repeat';			
		}
		if (count == 'ses'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/sesto-elemento/gallary_big_sesto_elemento_3.jpg) no-repeat';			
		}
		if (count == 'aven'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/aventador/gallary_big_aventador_3.jpg) no-repeat';			
		}
		if (count == 'ven'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/veneno/gallary_big_veneno_3.jpg) no-repeat';			
		}
		if (count == 'hur'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/huracan/gallary_big_huracan_3.jpg) no-repeat';			
		}
		if (count == 'cent'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/centenario/gallary_big_centenario_3.jpg) no-repeat';			
		}
		if (count == 'ur'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/urus/gallary_big_urus_3.jpg) no-repeat';			
		}
		if (count == 'ast'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/asterion/gallary_big_asterion_3.jpg) no-repeat';			
		}
		if (count == 'est'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/estoque/gallary_big_estoque_3.jpg) no-repeat';			
		}
		if (count == 'ego'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/egoista/gallary_big_egoista_3.jpg) no-repeat';			
		}
	}
	if (i == 'pic4') {
		document.getElementById('small_photo_4').style.border = '5px solid red';
		number = 3;
		if (count == 'murc'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/murcielago/gallary_big_murcielago_4.jpg) no-repeat';
		}
		if (count == 'gal'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/gallardo/gallary_big_gallardo_4.jpg) no-repeat';			
		}
		if (count == 'gals'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/gallardo-spyder/gallary_big_gallardo_spyder_4.jpg) no-repeat';			
		}
		if (count == 'rev'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/reventon/gallary_big_reventon_4.jpg) no-repeat';			
		}
		if (count == 'ses'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/sesto-elemento/gallary_big_sesto_elemento_4.jpg) no-repeat';			
		}
		if (count == 'aven'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/aventador/gallary_big_aventador_4.jpg) no-repeat';			
		}
		if (count == 'ven'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/veneno/gallary_big_veneno_4.jpg) no-repeat';			
		}
		if (count == 'hur'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/huracan/gallary_big_huracan_4.jpg) no-repeat';			
		}
		if (count == 'cent'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/centenario/gallary_big_centenario_4.jpg) no-repeat';			
		}
		if (count == 'ur'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/urus/gallary_big_urus_4.jpg) no-repeat';			
		}
		if (count == 'ast'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/asterion/gallary_big_asterion_4.jpg) no-repeat';			
		}
		if (count == 'est'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/estoque/gallary_big_estoque_4.jpg) no-repeat';			
		}
		if (count == 'ego'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/egoista/gallary_big_egoista_4.jpg) no-repeat';			
		}
	}
	if (i == 'pic5') {
		document.getElementById('small_photo_5').style.border = '5px solid red';
		number = 4;
		if (count == 'murc'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/murcielago/gallary_big_murcielago_5.jpg) no-repeat';
		}
		if (count == 'gal'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/gallardo/gallary_big_gallardo_5.jpg) no-repeat';			
		}
		if (count == 'gals'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/gallardo-spyder/gallary_big_gallardo_spyder_5.jpg) no-repeat';			
		}
		if (count == 'rev'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/reventon/gallary_big_reventon_5.jpg) no-repeat';			
		}
		if (count == 'ses'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/sesto-elemento/gallary_big_sesto_elemento_5.jpg) no-repeat';			
		}
		if (count == 'aven'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/aventador/gallary_big_aventador_5.jpg) no-repeat';			
		}
		if (count == 'ven'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/veneno/gallary_big_veneno_5.jpg) no-repeat';			
		}
		if (count == 'hur'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/huracan/gallary_big_huracan_5.jpg) no-repeat';			
		}
		if (count == 'cent'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/centenario/gallary_big_centenario_5.jpg) no-repeat';			
		}
		if (count == 'ur'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/urus/gallary_big_urus_5.jpg) no-repeat';			
		}
		if (count == 'ast'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/asterion/gallary_big_asterion_5.jpg) no-repeat';			
		}
		if (count == 'est'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/estoque/gallary_big_estoque_5.jpg) no-repeat';			
		}
		if (count == 'ego'){
			document.getElementById('big_photo').style.background = 'url(../lamborghini/img/egoista/gallary_big_egoista_5.jpg) no-repeat';			
		}
	}
}

function go_to_big_gallary(M) { //в вкладке models (content_1) или вкладке concept (content_2), кнопка открыть большую галерею (big_gallary)
	document.getElementById('top_line').style.display = 'none';
	document.getElementById('wrapper').style.display = 'none';
	document.getElementById('bottom_line').style.display = 'none';
	document.getElementById('big_gallary').style.display = '';
	number = 0;
	register = true;
	if (M == 'murc') {
		document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/murcielago/full_murcielago_1.jpg) no-repeat';
		numb1 = 'url(../lamborghini/img/murcielago/full_murcielago_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/murcielago/full_murcielago_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/murcielago/full_murcielago_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/murcielago/full_murcielago_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/murcielago/full_murcielago_5.jpg) no-repeat';		
	}
	if (M == 'gal') {
		document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/gallardo/full_gallardo_1.jpg) no-repeat';
		numb1 = 'url(../lamborghini/img/gallardo/full_gallardo_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/gallardo/full_gallardo_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/gallardo/full_gallardo_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/gallardo/full_gallardo_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/gallardo/full_gallardo_5.jpg) no-repeat';
	}
	if (M == 'gals') {
		document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_1.jpg) no-repeat';
		numb1 = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_5.jpg) no-repeat';
	}
	if (M == 'rev') {
		document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/reventon/full_reventon_1.jpg) no-repeat';
		numb1 = 'url(../lamborghini/img/reventon/full_reventon_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/reventon/full_reventon_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/reventon/full_reventon_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/reventon/full_reventon_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/reventon/full_reventon_5.jpg) no-repeat';
	}
	if (M == 'ses') {
		document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_1.jpg) no-repeat';
		numb1 = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_5.jpg) no-repeat';
	}
	if (M == 'aven') {
		document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/aventador/full_aventador_1.jpg) no-repeat';
		numb1 = 'url(../lamborghini/img/aventador/full_aventador_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/aventador/full_aventador_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/aventador/full_aventador_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/aventador/full_aventador_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/aventador/full_aventador_5.jpg) no-repeat';
	}
	if (M == 'ven') {
		document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/veneno/full_veneno_1.jpg) no-repeat';
		numb1 = 'url(../lamborghini/img/veneno/full_veneno_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/veneno/full_veneno_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/veneno/full_veneno_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/veneno/full_veneno_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/veneno/full_veneno_5.jpg) no-repeat';
	}
	if (M == 'hur') {
		document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/huracan/full_huracan_1.jpg) no-repeat';
		numb1 = 'url(../lamborghini/img/huracan/full_huracan_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/huracan/full_huracan_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/huracan/full_huracan_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/huracan/full_huracan_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/huracan/full_huracan_5.jpg) no-repeat';
	}
	if (M == 'cent') {
		document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/centenario/full_centenario_1.jpg) no-repeat';
		numb1 = 'url(../lamborghini/img/centenario/full_centenario_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/centenario/full_centenario_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/centenario/full_centenario_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/centenario/full_centenario_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/centenario/full_centenario_5.jpg) no-repeat';
	}
	if (M == 'ur') {
		document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/urus/full_urus_1.jpg) no-repeat';
		numb1 = 'url(../lamborghini/img/urus/full_urus_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/urus/full_urus_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/urus/full_urus_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/urus/full_urus_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/urus/full_urus_5.jpg) no-repeat';
	}
	if (M == 'ast') {
		document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/asterion/full_asterion_1.jpg) no-repeat';
		numb1 = 'url(../lamborghini/img/asterion/full_asterion_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/asterion/full_asterion_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/asterion/full_asterion_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/asterion/full_asterion_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/asterion/full_asterion_5.jpg) no-repeat';
	}
	if (M == 'est') {
		document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/estoque/full_estoque_1.jpg) no-repeat';
		numb1 = 'url(../lamborghini/img/estoque/full_estoque_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/estoque/full_estoque_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/estoque/full_estoque_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/estoque/full_estoque_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/estoque/full_estoque_5.jpg) no-repeat';
	}
	if (M == 'ego') {
		document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/egoista/full_egoista_1.jpg) no-repeat';
		numb1 = 'url(../lamborghini/img/egoista/full_egoista_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/egoista/full_egoista_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/egoista/full_egoista_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/egoista/full_egoista_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/egoista/full_egoista_5.jpg) no-repeat';
	}	
}

to_big_gallary.addEventListener('click', function to_big_gallary() {  //в вкладке маленькая галерея (content_3), кнопка открыть в большой галерее (big_gallary) 
	document.getElementById('top_line').style.display = 'none';
	document.getElementById('wrapper').style.display = 'none';
	document.getElementById('bottom_line').style.display = 'none';
	document.getElementById('big_gallary').style.display = '';
	if (count == 'murc') {
		numb1 = 'url(../lamborghini/img/murcielago/full_murcielago_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/murcielago/full_murcielago_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/murcielago/full_murcielago_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/murcielago/full_murcielago_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/murcielago/full_murcielago_5.jpg) no-repeat';
		if (number == 0) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/murcielago/full_murcielago_1.jpg) no-repeat';			
		}
		if (number == 1) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/murcielago/full_murcielago_2.jpg) no-repeat';			
		}
		if (number == 2) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/murcielago/full_murcielago_3.jpg) no-repeat';			
		}
		if (number == 3) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/murcielago/full_murcielago_4.jpg) no-repeat';			
		}
		if (number == 4) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/murcielago/full_murcielago_5.jpg) no-repeat';			
		}
	}
	if (count == 'gal') {
		numb1 = 'url(../lamborghini/img/gallardo/full_gallardo_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/gallardo/full_gallardo_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/gallardo/full_gallardo_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/gallardo/full_gallardo_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/gallardo/full_gallardo_5.jpg) no-repeat';
		if (number == 0) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/gallardo/full_gallardo_1.jpg) no-repeat';
		}
		if (number == 1) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/gallardo/full_gallardo_2.jpg) no-repeat';
		}
		if (number == 2) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/gallardo/full_gallardo_3.jpg) no-repeat';
		}
		if (number == 3) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/gallardo/full_gallardo_4.jpg) no-repeat';
		}
		if (number == 4) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/gallardo/full_gallardo_5.jpg) no-repeat';
		}
	}
	if (count == 'gals') {
		numb1 = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_5.jpg) no-repeat';
		if (number == 0) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_1.jpg) no-repeat';
		}
		if (number == 1) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_2.jpg) no-repeat';
		}
		if (number == 2) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_3.jpg) no-repeat';
		}
		if (number == 3) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_4.jpg) no-repeat';
		}
		if (number == 4) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/gallardo-spyder/full_gallardo_spyder_5.jpg) no-repeat';
		}
	}
	if (count == 'rev') {
		numb1 = 'url(../lamborghini/img/reventon/full_reventon_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/reventon/full_reventon_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/reventon/full_reventon_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/reventon/full_reventon_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/reventon/full_reventon_5.jpg) no-repeat';
		if (number == 0) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/reventon/full_reventon_1.jpg) no-repeat';
		}
		if (number == 1) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/reventon/full_reventon_2.jpg) no-repeat';
		}
		if (number == 2) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/reventon/full_reventon_3.jpg) no-repeat';
		}
		if (number == 3) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/reventon/full_reventon_4.jpg) no-repeat';
		}
		if (number == 4) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/reventon/full_reventon_5.jpg) no-repeat';
		}
	}
	if (count == 'ses') {
		numb1 = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_5.jpg) no-repeat';
		if (number == 0) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_1.jpg) no-repeat';
		}
		if (number == 1) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_2.jpg) no-repeat';
		}
		if (number == 2) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_3.jpg) no-repeat';
		}
		if (number == 3) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_4.jpg) no-repeat';
		}
		if (number == 4) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/sesto-elemento/full_sesto_elemento_5.jpg) no-repeat';
		}
	}
	if (count == 'aven') {
		numb1 = 'url(../lamborghini/img/aventador/full_aventador_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/aventador/full_aventador_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/aventador/full_aventador_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/aventador/full_aventador_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/aventador/full_aventador_5.jpg) no-repeat';
		if (number == 0) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/aventador/full_aventador_1.jpg) no-repeat';
		}
		if (number == 1) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/aventador/full_aventador_2.jpg) no-repeat';
		}
		if (number == 2) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/aventador/full_aventador_3.jpg) no-repeat';
		}
		if (number == 3) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/aventador/full_aventador_4.jpg) no-repeat';
		}
		if (number == 4) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/aventador/full_aventador_5.jpg) no-repeat';
		}
	}
	if (count == 'ven') {
		numb1 = 'url(../lamborghini/img/veneno/full_veneno_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/veneno/full_veneno_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/veneno/full_veneno_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/veneno/full_veneno_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/veneno/full_veneno_5.jpg) no-repeat';
		if (number == 0) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/veneno/full_veneno_1.jpg) no-repeat';
		}
		if (number == 1) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/veneno/full_veneno_2.jpg) no-repeat';
		}
		if (number == 2) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/veneno/full_veneno_3.jpg) no-repeat';
		}
		if (number == 3) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/veneno/full_veneno_4.jpg) no-repeat';
		}
		if (number == 4) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/veneno/full_veneno_5.jpg) no-repeat';
		}
	}
	if (count == 'hur') {
		numb1 = 'url(../lamborghini/img/huracan/full_huracan_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/huracan/full_huracan_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/huracan/full_huracan_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/huracan/full_huracan_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/huracan/full_huracan_5.jpg) no-repeat';
		if (number == 0) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/huracan/full_huracan_1.jpg) no-repeat';
		}
		if (number == 1) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/huracan/full_huracan_2.jpg) no-repeat';
		}
		if (number == 2) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/huracan/full_huracan_3.jpg) no-repeat';
		}
		if (number == 3) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/huracan/full_huracan_4.jpg) no-repeat';
		}
		if (number == 4) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/huracan/full_huracan_5.jpg) no-repeat';
		}
	}
	if (count == 'cent') {
		numb1 = 'url(../lamborghini/img/centenario/full_centenario_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/centenario/full_centenario_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/centenario/full_centenario_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/centenario/full_centenario_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/centenario/full_centenario_5.jpg) no-repeat';
		if (number == 0) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/centenario/full_centenario_1.jpg) no-repeat';
		}
		if (number == 1) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/centenario/full_centenario_2.jpg) no-repeat';
		}
		if (number == 2) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/centenario/full_centenario_3.jpg) no-repeat';
		}
		if (number == 3) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/centenario/full_centenario_4.jpg) no-repeat';
		}
		if (number == 4) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/centenario/full_centenario_5.jpg) no-repeat';
		}
	}
	if (count == 'ur') {
		numb1 = 'url(../lamborghini/img/urus/full_urus_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/urus/full_urus_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/urus/full_urus_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/urus/full_urus_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/urus/full_urus_5.jpg) no-repeat';
		if (number == 0) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/urus/full_urus_1.jpg) no-repeat';
		}
		if (number == 1) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/urus/full_urus_2.jpg) no-repeat';
		}
		if (number == 2) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/urus/full_urus_3.jpg) no-repeat';
		}
		if (number == 3) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/urus/full_urus_4.jpg) no-repeat';
		}
		if (number == 4) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/urus/full_urus_5.jpg) no-repeat';
		}
	}
	if (count == 'ast') {
		numb1 = 'url(../lamborghini/img/asterion/full_asterion_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/asterion/full_asterion_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/asterion/full_asterion_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/asterion/full_asterion_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/asterion/full_asterion_5.jpg) no-repeat';
		if (number == 0) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/asterion/full_asterion_1.jpg) no-repeat';
		}
		if (number == 1) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/asterion/full_asterion_2.jpg) no-repeat';
		}
		if (number == 2) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/asterion/full_asterion_3.jpg) no-repeat';
		}
		if (number == 3) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/asterion/full_asterion_4.jpg) no-repeat';
		}
		if (number == 4) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/asterion/full_asterion_5.jpg) no-repeat';
		}
	}
	if (count == 'est') {
		numb1 = 'url(../lamborghini/img/estoque/full_estoque_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/estoque/full_estoque_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/estoque/full_estoque_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/estoque/full_estoque_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/estoque/full_estoque_5.jpg) no-repeat';
		if (number == 0) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/estoque/full_estoque_1.jpg) no-repeat';
		}
		if (number == 1) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/estoque/full_estoque_2.jpg) no-repeat';
		}
		if (number == 2) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/estoque/full_estoque_3.jpg) no-repeat';
		}
		if (number == 3) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/estoque/full_estoque_4.jpg) no-repeat';
		}
		if (number == 4) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/estoque/full_estoque_5.jpg) no-repeat';
		}
	}
	if (count == 'ego') {
		numb1 = 'url(../lamborghini/img/egoista/full_egoista_1.jpg) no-repeat';
		numb2 = 'url(../lamborghini/img/egoista/full_egoista_2.jpg) no-repeat';
		numb3 = 'url(../lamborghini/img/egoista/full_egoista_3.jpg) no-repeat';
		numb4 = 'url(../lamborghini/img/egoista/full_egoista_4.jpg) no-repeat';
		numb5 = 'url(../lamborghini/img/egoista/full_egoista_5.jpg) no-repeat';
		if (number == 0) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/egoista/full_egoista_1.jpg) no-repeat';
		}
		if (number == 1) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/egoista/full_egoista_2.jpg) no-repeat';
		}
		if (number == 2) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/egoista/full_egoista_3.jpg) no-repeat';
		}
		if (number == 3) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/egoista/full_egoista_4.jpg) no-repeat';
		}
		if (number == 4) {
			document.getElementById('big_gallary_photo_place').style.background = 'url(../lamborghini/img/egoista/full_egoista_5.jpg) no-repeat';
		}
	}
})

function option(N) { //кнопки в маленькой галерее (content_3) и в большой галерее (big_gallary), переключение вперед фото и назад фото
	let src1 = num1,
		src2 = num2,
		src3 = num3,
		src4 = num4,
		src5 = num5,
		src6 = numb1,
		src7 = numb2,
		src8 = numb3,
		src9 = numb4,
		src10 = numb5;
		
		
	let gall = new Array(src1, src2, src3, src4, src5),
		big_gall = new Array(src6, src7, src8, src9, src10);
	
	if (N == 1) {
		number++;
	}
	if (number == gall.length) {
		number = -1;
		number++;
	}
	if (N == 2) {
		number--;
	}
	if (number == -1) {
		number = gall.length;
		number--;
	}
	document.getElementById('small_photo_1').style.border = '5px solid #fff';
	document.getElementById('small_photo_2').style.border = '5px solid #fff';
	document.getElementById('small_photo_3').style.border = '5px solid #fff';
	document.getElementById('small_photo_4').style.border = '5px solid #fff';
	document.getElementById('small_photo_5').style.border = '5px solid #fff';
	if (number == 0) {
		document.getElementById('small_photo_1').style.border = '5px solid red';		
	}
	if (number == 1) {
		document.getElementById('small_photo_2').style.border = '5px solid red';
	}
	if (number == 2) {
		document.getElementById('small_photo_3').style.border = '5px solid red';
	}
	if (number == 3) {
		document.getElementById('small_photo_4').style.border = '5px solid red';
	}
	if (number == 4) {
		document.getElementById('small_photo_5').style.border = '5px solid red';
	}
	document.getElementById('big_photo').style.background = gall[number];
	document.getElementById('big_gallary_photo_place').style.background = big_gall[number];
}

logo_big_gallary.addEventListener('click', function back_to_small_gallary() {  //в большой галерее (big_gallary), кнопка закрытия этой галереи, с возвратом в предыдущее место, от куда зашли, или в models (content_1)/в concept (content_2) или в маленькую галерею (content_3)
	document.getElementById('top_line').style.display = '';
	document.getElementById('wrapper').style.display = '';
	document.getElementById('bottom_line').style.display = '';
	document.getElementById('big_gallary').style.display = 'none';
	if (register == true) {
		number = 0;
		register = false;
	}
})

function big_photo_concept() { //в вкладке маленькая галерея (content_3), но только если открыт один из концептуальных авто, кнопка открыть большую фотографию футера (big_photo_concept)
	document.getElementById('top_line').style.display = 'none';
	document.getElementById('wrapper').style.display = 'none';
	document.getElementById('bottom_line').style.display = 'none';
	document.getElementById('big_photo_concept').style.display = '';
}

function close_big_photo_concept() { //возврат из большой фотографии футера (big_photo_concept) во вкладку маленькая галерея (content_3)
	document.getElementById('big_photo_concept').style.display = 'none';
	document.getElementById('top_line').style.display = '';
	document.getElementById('wrapper').style.display = '';
	document.getElementById('bottom_line').style.display = '';	
}