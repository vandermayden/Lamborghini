var clock = 0;

function timer() {
	document.getElementById('top_line').style.display = 'none';
	document.getElementById('wrapper').style.display = 'none';	
	document.getElementById('bottom_line').style.display = 'none';
	document.getElementById('animation_wrapper').style.display = '';	
	let animate = setTimeout('timer()', 500);
	clock++;
	if (clock == 4) {
		document.getElementById('animation-list-open-site').style.display = '';
	}
	if (clock == 5) {		
		document.getElementById('animation-list-open-site').style.top = '315px';
		document.getElementById('animation-list-open-site').style.width = '40px';
		document.getElementById('animation-list-open-site').style.height = '40px';
		document.getElementById('animation_wrapper_top_line').style.width = '40px';
		document.getElementById('animation_wrapper_top_line').style.height = '10px';
		document.getElementById('animation_wrapper_bottom_line').style.width = '40px';
		document.getElementById('animation_wrapper_bottom_line').style.height = '10px';
		document.getElementById('animation_wrapper_bottom_line').style.top = '30px';
		document.getElementById('animation_wrapper_left_line').style.width = '10px';
		document.getElementById('animation_wrapper_left_line').style.height = '40px';
		document.getElementById('animation_wrapper_right_line').style.width = '10px';
		document.getElementById('animation_wrapper_right_line').style.height = '40px';
		document.getElementById('animation_wrapper_right_line').style.left = '30px';		
	}
	if (clock == 6) {
		document.getElementById('animation-list-open-site').style.top = '305px';
		document.getElementById('animation-list-open-site').style.width = '100px';
		document.getElementById('animation-list-open-site').style.height = '60px';
		document.getElementById('animation_wrapper_top_line').style.width = '100px';
		document.getElementById('animation_wrapper_top_line').style.height = '10px';
		document.getElementById('animation_wrapper_bottom_line').style.width = '100px';
		document.getElementById('animation_wrapper_bottom_line').style.height = '10px';
		document.getElementById('animation_wrapper_bottom_line').style.top = '50px';
		document.getElementById('animation_wrapper_left_line').style.width = '10px';
		document.getElementById('animation_wrapper_left_line').style.height = '60px';
		document.getElementById('animation_wrapper_right_line').style.width = '10px';
		document.getElementById('animation_wrapper_right_line').style.height = '60px';
		document.getElementById('animation_wrapper_right_line').style.left = '90px';
	}
	if (clock == 7) {
		document.getElementById('animation-list-open-site').style.top = '275px';
		document.getElementById('animation-list-open-site').style.width = '200px';
		document.getElementById('animation-list-open-site').style.height = '120px';
		document.getElementById('animation_wrapper_top_line').style.width = '200px';
		document.getElementById('animation_wrapper_top_line').style.height = '10px';
		document.getElementById('animation_wrapper_bottom_line').style.width = '200px';
		document.getElementById('animation_wrapper_bottom_line').style.height = '10px';
		document.getElementById('animation_wrapper_bottom_line').style.top = '110px';
		document.getElementById('animation_wrapper_left_line').style.width = '10px';
		document.getElementById('animation_wrapper_left_line').style.height = '120px';
		document.getElementById('animation_wrapper_right_line').style.width = '10px';
		document.getElementById('animation_wrapper_right_line').style.height = '120px';
		document.getElementById('animation_wrapper_right_line').style.left = '190px';
	}
	if (clock == 8) {
		document.getElementById('animation-list-open-site').style.top = '220px';
		document.getElementById('animation-list-open-site').style.width = '400px';
		document.getElementById('animation-list-open-site').style.height = '230px';
		document.getElementById('animation_wrapper_top_line').style.width = '400px';
		document.getElementById('animation_wrapper_top_line').style.height = '10px';
		document.getElementById('animation_wrapper_bottom_line').style.width = '400px';
		document.getElementById('animation_wrapper_bottom_line').style.height = '10px';
		document.getElementById('animation_wrapper_bottom_line').style.top = '220px';
		document.getElementById('animation_wrapper_left_line').style.width = '10px';
		document.getElementById('animation_wrapper_left_line').style.height = '230px';
		document.getElementById('animation_wrapper_right_line').style.width = '10px';
		document.getElementById('animation_wrapper_right_line').style.height = '230px';
		document.getElementById('animation_wrapper_right_line').style.left = '390px';
	}
	if (clock == 9) {
		document.getElementById('animation-list-open-site').style.top = '105px';
		document.getElementById('animation-list-open-site').style.width = '800px';
		document.getElementById('animation-list-open-site').style.height = '460px';
		document.getElementById('animation_wrapper_top_line').style.width = '800px';
		document.getElementById('animation_wrapper_top_line').style.height = '10px';
		document.getElementById('animation_wrapper_bottom_line').style.width = '800px';
		document.getElementById('animation_wrapper_bottom_line').style.height = '10px';
		document.getElementById('animation_wrapper_bottom_line').style.top = '450px';
		document.getElementById('animation_wrapper_left_line').style.width = '10px';
		document.getElementById('animation_wrapper_left_line').style.height = '460px';
		document.getElementById('animation_wrapper_right_line').style.width = '10px';
		document.getElementById('animation_wrapper_right_line').style.height = '460px';
		document.getElementById('animation_wrapper_right_line').style.left = '790px';
	}
	if (clock == 10) {
		document.getElementById('lamborghini_logo_picture_1').style.display = '';
	}
	if (clock == 12) {	
		clearTimeout(animate);
		clock = 0;
		document.getElementById('animation-loading-scip').style.display = '';		
	}
}

animation_loading.addEventListener('click', timer_1);	
function timer_1() {	
	document.getElementById('animation-loading-scip').style.display = 'none';
	document.getElementById('lamborghini_logo_picture_1').style.display = 'none';
	document.getElementById('lamborghini_logo_picture').style.display = '';
	let animate_1 = setTimeout('timer_1()', 500);
	clock++;	
	if (clock == 1) {
		document.getElementById('lamborghini_logo_picture').style.top = '120px';
	}
	if (clock == 2) {
		document.getElementById('lamborghini_logo_picture').style.top = '110px';
	}
	if (clock == 3) {
		document.getElementById('lamborghini_logo_picture').style.top = '100px';
	}
	if (clock == 4) {
		document.getElementById('lamborghini_logo_picture').style.top = '90px';
	}
	if (clock == 5) {
		document.getElementById('lamborghini_logo_picture').style.top = '80px';
	}
	if (clock == 6) {
		document.getElementById('lamborghini_logo_picture').style.top = '70px';
	}
	if (clock == 7) {
		document.getElementById('lamborghini_logo_picture').style.top = '60px';
	}
	if (clock == 8) {
		document.getElementById('lamborghini_logo_picture').style.top = '50px';
	}	
	if (clock == 9) {
		document.getElementById('lamborghini_automobili_pic').style.display = '';
	}
	if (clock == 13) {
		document.getElementById('lamborghini_logo_pic').style.display = '';
		document.getElementById('lamborghini_logo_pic').style.background = '#282722';		
		document.getElementById('lamborghini_logo_pic').style.left = '306px';
		document.getElementById('lamborghini_logo_pic').style.top = '45px';
		document.getElementById('lamborghini_logo_pic').style.width = '188px';
		document.getElementById('lamborghini_logo_pic').style.height = '210px';
	}
	if (clock == 14) {
		document.getElementById('lamborghini_logo_pic').style.display = 'none';
	}	
	if (clock == 16) {
		document.getElementById('header_animation_pic').style.display = '';
		document.getElementById('lamborghini_logo_picture').style.left = '329px';
		document.getElementById('lamborghini_logo_picture').style.top = '100px';
		document.getElementById('lamborghini_logo_picture').style.width = '142px';
		document.getElementById('lamborghini_logo_picture').style.height = '160px';
		document.getElementById('lamborghini_logo_picture').style.background = 'url(../lamborghini/img/animation/logo_animation_3.png) no-repeat';
	}
	if (clock == 18) {
		document.getElementById('header_animation_pic').style.height = '118px';
		document.getElementById('header_animation_pic').style.background = 'url(../lamborghini/img/animation/logo_animation_head_img_2.png) no-repeat';
		document.getElementById('lamborghini_logo_picture').style.left = '347px';
		document.getElementById('lamborghini_logo_picture').style.top = '150px';		
		document.getElementById('lamborghini_logo_picture').style.width = '107px';
		document.getElementById('lamborghini_logo_picture').style.height = '120px';
		document.getElementById('lamborghini_logo_picture').style.background = 'url(../lamborghini/img/animation/logo_animation_4.png) no-repeat';
	}
	if (clock == 20) {
		document.getElementById('header_animation_pic').style.height = '176px';
		document.getElementById('header_animation_pic').style.background = 'url(../lamborghini/img/animation/logo_animation_head_img_3.png) no-repeat';
		document.getElementById('lamborghini_logo_picture').style.left = '365px';
		document.getElementById('lamborghini_logo_picture').style.top = '200px';		
		document.getElementById('lamborghini_logo_picture').style.width = '71px';
		document.getElementById('lamborghini_logo_picture').style.height = '80px';
		document.getElementById('lamborghini_logo_picture').style.background = 'url(../lamborghini/img/animation/logo_animation_5.png) no-repeat';
	}
	if (clock == 22) {
		document.getElementById('header_animation_pic').style.top = '20px';
		document.getElementById('lamborghini_logo_picture').style.left = '380px';
		document.getElementById('lamborghini_logo_picture').style.top = '225px';
		document.getElementById('lamborghini_logo_picture').style.width = '40px';
		document.getElementById('lamborghini_logo_picture').style.height = '45px';
		document.getElementById('lamborghini_logo_picture').style.background = 'url(../lamborghini/img/animation/logo_animation_6.png) no-repeat';
	}
	if (clock == 24) {
		document.getElementById('lamborghini_logo_picture').style.left = '170px';
		document.getElementById('lamborghini_logo_picture').style.top = '71px';		
	}
	if (clock == 25) {
		document.getElementById('lamborghini_logo_pic').style.display = '';
		document.getElementById('lamborghini_logo_pic').style.left = '100px';
		document.getElementById('lamborghini_logo_pic').style.top = '61px';
		document.getElementById('lamborghini_logo_pic').style.width = '120px';
		document.getElementById('lamborghini_logo_pic').style.height = '65px';
	}
	if (clock == 27) {
		document.getElementById('lamborghini_automobili_pic').style.top = '278px';
	}
	if (clock == 29) {
		document.getElementById('lamborghini_automobili_pic').style.top = '260px';		
	}	
	if (clock == 31) {		
		document.getElementById('lamborghini_automobili_pic').style.top = '243px';
		document.getElementById('footer_animation_pic').style.display = '';
	}
	if (clock == 33) {		
		document.getElementById('lamborghini_automobili_pic').style.top = '226px';
		document.getElementById('footer_animation_pic').style.top = '358px';
		document.getElementById('footer_animation_pic').style.height = '92px';
		document.getElementById('footer_animation_pic').style.background = 'url(../lamborghini/img/animation/logo_animation_foot_img_2.png) no-repeat';
	}	
	if (clock == 35) {
		document.getElementById('footer_animation_pic').style.top = '312px';
		document.getElementById('footer_animation_pic').style.height = '138px';
		document.getElementById('footer_animation_pic').style.background = 'url(../lamborghini/img/animation/logo_animation_foot_img_3.png) no-repeat';
		document.getElementById('lamborghini_automobili_pic').style.background = 'url(../lamborghini/img/animation/logo_animation_automobili_2.png) no-repeat';
		document.getElementById('lamborghini_automobili_pic').style.top = '216px';
		document.getElementById('lamborghini_automobili_pic').style.left = '220px';
		document.getElementById('lamborghini_automobili_pic').style.width = '359px';
		document.getElementById('lamborghini_automobili_pic').style.height = '76px';				
	}
	if (clock == 37) {
		document.getElementById('footer_animation_pic').style.top = '266px';
		document.getElementById('footer_animation_pic').style.height = '184px';
		document.getElementById('footer_animation_pic').style.background = 'url(../lamborghini/img/animation/logo_animation_foot_img_4.png) no-repeat';
		document.getElementById('lamborghini_automobili_pic').style.background = 'url(../lamborghini/img/animation/logo_animation_automobili_3.png) no-repeat';
		document.getElementById('lamborghini_automobili_pic').style.top = '206px';
		document.getElementById('lamborghini_automobili_pic').style.left = '275px';
		document.getElementById('lamborghini_automobili_pic').style.width = '241px';
		document.getElementById('lamborghini_automobili_pic').style.height = '51px';				
	}
	if (clock == 39) {
		document.getElementById('footer_animation_pic').style.top = '256px';
		document.getElementById('lamborghini_automobili_pic').style.background = 'url(../lamborghini/img/animation/logo_animation_automobili_4.png) no-repeat';
		document.getElementById('lamborghini_automobili_pic').style.top = '206px';
		document.getElementById('lamborghini_automobili_pic').style.left = '300px';
		document.getElementById('lamborghini_automobili_pic').style.width = '189px';
		document.getElementById('lamborghini_automobili_pic').style.height = '40px';				
	}		
	if (clock == 41) {
		document.getElementById('lamborghini_logo_pic').style.display = 'none';
	}
	if (clock == 43) {
		document.getElementById('animation-list-open-site').style.top = '95px';
		document.getElementById('animation-list-open-site').style.width = '800px';
		document.getElementById('animation-list-open-site').style.height = '480px';
		document.getElementById('animation_wrapper_bottom_line').style.top = '470px';
		document.getElementById('animation_wrapper_left_line').style.top = '20px';
		document.getElementById('animation_wrapper_left_line').style.height = '440px';		
		document.getElementById('animation_wrapper_right_line').style.top = '20px';
		document.getElementById('animation_wrapper_right_line').style.height = '440px';
		document.getElementById('animation_wrapper_right_line').style.left = '790px';
		document.getElementById('lamborghini_automobili_pic').style.top = '216px';
		document.getElementById('footer_animation_pic').style.top = '276px';		
	}
	if (clock == 45) {
		document.getElementById('animation_wrapper').style.background = '#fff';
	}
	if (clock == 47) {
		document.getElementById('animation-list-open-site').style.top = '85px';
		document.getElementById('animation-list-open-site').style.width = '800px';
		document.getElementById('animation-list-open-site').style.height = '500px';
		document.getElementById('animation_wrapper_bottom_line').style.top = '490px';
		document.getElementById('animation_wrapper_left_line').style.top = '30px';
		document.getElementById('animation_wrapper_left_line').style.height = '440px';		
		document.getElementById('animation_wrapper_right_line').style.top = '30px';
		document.getElementById('animation_wrapper_right_line').style.height = '440px';
		document.getElementById('animation_wrapper_right_line').style.left = '790px';
		document.getElementById('lamborghini_automobili_pic').style.top = '226px';
		document.getElementById('footer_animation_pic').style.top = '296px';
	}
	if (clock == 49) {		
		document.getElementById('animation_wrapper_left_line').style.top = '206px';
		document.getElementById('animation_wrapper_left_line').style.left = '100px';
		document.getElementById('animation_wrapper_left_line').style.height = '10px';
		document.getElementById('animation_wrapper_left_line').style.width = '600px';		
	}
	if (clock == 51) {	
		document.getElementById('animation_wrapper_right_line').style.top = '276px';		
		document.getElementById('animation_wrapper_right_line').style.left = '100px';
		document.getElementById('animation_wrapper_right_line').style.height = '10px';
		document.getElementById('animation_wrapper_right_line').style.width = '600px';
	}
	if (clock == 53) {
		document.getElementById('animation-list-open-site').style.top = '40px';
		document.getElementById('animation-list-open-site').style.width = '900px';
		document.getElementById('animation-list-open-site').style.height = '650px';
		document.getElementById('animation_wrapper_top_line').style.width = '900px';
		document.getElementById('animation_wrapper_bottom_line').style.top = '640px';
		document.getElementById('animation_wrapper_bottom_line').style.width = '900px';
		document.getElementById('header_animation_pic').style.height = '199px';
		document.getElementById('header_animation_pic').style.width = '680px';
		document.getElementById('header_animation_pic').style.left = '110px';
		document.getElementById('header_animation_pic').style.background = 'url(../lamborghini/img/animation/logo_animation_head_img_4.png) no-repeat';
		document.getElementById('lamborghini_logo_picture').style.left = '190px';
		document.getElementById('lamborghini_logo_picture').style.top = '75px';
		document.getElementById('lamborghini_logo_picture').style.width = '54px';
		document.getElementById('lamborghini_logo_picture').style.height = '60px';
		document.getElementById('lamborghini_logo_picture').style.background = 'url(../lamborghini/img/animation/logo_animation_7.png) no-repeat';
		document.getElementById('animation_wrapper_left_line').style.top = '229px';
		document.getElementById('animation_wrapper_left_line').style.width = '680px';
		document.getElementById('animation_wrapper_left_line').style.left = '110px';
		document.getElementById('lamborghini_automobili_pic').style.top = '250px';
		document.getElementById('lamborghini_automobili_pic').style.left = '500px';
		document.getElementById('animation_wrapper_right_line').style.top = '344px';
		document.getElementById('animation_wrapper_right_line').style.width = '680px';
		document.getElementById('animation_wrapper_right_line').style.left = '110px';
		document.getElementById('footer_animation_pic').style.top = '364px';
		document.getElementById('footer_animation_pic').style.height = '266px';
		document.getElementById('footer_animation_pic').style.width = '680px';
		document.getElementById('footer_animation_pic').style.left = '110px';
		document.getElementById('footer_animation_pic').style.background = 'url(../lamborghini/img/animation/logo_animation_foot_img_5.png) no-repeat';
	}
	if (clock == 55) {
		document.getElementById('animation-list-open-site').style.top = '0px';
		document.getElementById('animation-list-open-site').style.width = '1024px';
		document.getElementById('animation-list-open-site').style.height = '850px';
		document.getElementById('animation_wrapper_top_line').style.display = 'none';
		document.getElementById('animation_wrapper_bottom_line').style.display = 'none';
		document.getElementById('animation_top_line').style.display = '';
		document.getElementById('animation_bottom_line').style.display = '';
		document.getElementById('header_animation_pic').style.height = '300px';
		document.getElementById('header_animation_pic').style.width = '1024px';
		document.getElementById('header_animation_pic').style.left = '0px';
		document.getElementById('header_animation_pic').style.top = '0px';
		document.getElementById('header_animation_pic').style.background = 'url(../lamborghini/img/head_img.png) no-repeat';
		document.getElementById('lamborghini_logo_pic').style.height = '100px';
		document.getElementById('lamborghini_logo_pic').style.width = '200px';
		document.getElementById('lamborghini_logo_pic').style.top = '50px';
		document.getElementById('lamborghini_logo_pic').style.left = '0px';
		document.getElementById('lamborghini_logo_picture').style.left = '113px';
		document.getElementById('lamborghini_logo_picture').style.top = '62px';
		document.getElementById('lamborghini_logo_picture').style.width = '67px';
		document.getElementById('lamborghini_logo_picture').style.height = '75px';
		document.getElementById('lamborghini_logo_picture').style.background = 'url(../lamborghini/img/logo.png) no-repeat';
		document.getElementById('animation_wrapper_left_line').style.top = '310px';
		document.getElementById('animation_wrapper_left_line').style.width = '1024px';
		document.getElementById('animation_wrapper_left_line').style.left = '0px';
		document.getElementById('lamborghini_automobili_pic').style.top = '330px';
		document.getElementById('lamborghini_automobili_pic').style.left = '800px';
		document.getElementById('animation_wrapper_right_line').style.top = '430px';
		document.getElementById('animation_wrapper_right_line').style.width = '1024px';
		document.getElementById('animation_wrapper_right_line').style.left = '0px';
		document.getElementById('footer_animation_pic').style.top = '450px';
		document.getElementById('footer_animation_pic').style.height = '400px';
		document.getElementById('footer_animation_pic').style.width = '1024px';
		document.getElementById('footer_animation_pic').style.left = '0px';
		document.getElementById('footer_animation_pic').style.background = 'url(../lamborghini/img/foot_img_6.png) no-repeat';		
	}
	if (clock == 57) {
		document.getElementById('animation_ready').style.display = '';
	}
	if (clock == 58) {
		document.getElementById('animation_ready').style.width = '40px';
	}
	if (clock == 59) {
		document.getElementById('animation_ready').style.width = '80px';
	}
	if (clock == 60) {
		document.getElementById('animation_ready').style.width = '160px';
	}
	if (clock == 61) {
		document.getElementById('animation_ready').style.width = '300px';
	}
	if (clock == 62) {
		document.getElementById('animation_go').style.display = '';
	}
	if (clock == 63) {
		document.getElementById('animation_go').style.width = '40px';
	}
	if (clock == 64) {
		document.getElementById('animation_go').style.width = '80px';
	}
	if (clock == 65) {
		document.getElementById('animation_go').style.width = '140px';
	}
	if (clock == 66) {
		document.getElementById('animation_go').style.width = '200px';
	}
	if (clock == 68) {
		document.getElementById('lamborghini_logo_pic').style.display = '';
	}
	if (clock == 69) {
		document.getElementById('lamborghini_logo_pic').style.display = 'none';
	}
	if (clock == 71) {	
		clearTimeout(animate_1);
		document.getElementById('animation_wrapper').style.display = 'none';
		document.getElementById('top_line').style.display = '';
		document.getElementById('wrapper').style.display = '';	
		document.getElementById('bottom_line').style.display = '';	
	}
}

animation_scip.addEventListener('click', go_to_site);	
function go_to_site() {	
	document.getElementById('animation_wrapper').style.display = 'none';
	document.getElementById('top_line').style.display = '';
	document.getElementById('wrapper').style.display = '';	
	document.getElementById('bottom_line').style.display = '';
}