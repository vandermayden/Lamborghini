var clocker = 0; //счетчик для анимации при выходе 

function question() { //кнопка exit (close_site) во вкладке concept (content_2)
	clocker = 0;
	document.getElementById('top_line').style.display = 'none';
	document.getElementById('wrapper').style.display = 'none';	
	document.getElementById('bottom_line').style.display = 'none';
	document.getElementById('animation_wrapper_close_site').style.display = '';
	document.getElementById('question').style.display = '';
	document.getElementById('yes').style.display = '';
	document.getElementById('no').style.display = '';
}

function not_exit() { //кнопка no (no) во вкладке (animation_wrapper_close_site) при нажатии на exit (close_site)
	document.getElementById('top_line').style.display = '';
	document.getElementById('wrapper').style.display = '';	
	document.getElementById('bottom_line').style.display = '';
	document.getElementById('animation_wrapper_close_site').style.display = 'none';
}

function timer_3() { //кнопка yes (yes) во вкладке (animation_wrapper_close_site) при нажатии на exit (close_site), для запуска анимации при выходе
	document.getElementById('question').style.display = 'none';
	document.getElementById('yes').style.display = 'none';
	document.getElementById('no').style.display = 'none';
	document.getElementById('logo_exit').style.display = 'none';
	document.getElementById('logo_exit_1').style.display = '';
	let animate_3 = setTimeout('timer_3()', 500);
	clocker++;	
	if (clocker == 3) {		
		document.getElementById('close_pic_yes_no').style.width = '335px';
		document.getElementById('logo_exit_1').style.left = '190px';				
	}
	if (clocker == 4) {
		document.getElementById('close_pic_yes_no').style.width = '255px';
		document.getElementById('logo_exit_1').style.left = '110px';		
	}
	if (clocker == 5) {
		document.getElementById('close_pic_yes_no').style.width = '175px';
		document.getElementById('logo_exit_1').style.left = '30px';		
	}
	if (clocker == 6) {
		document.getElementById('close_pic_yes_no').style.width = '95px';
		document.getElementById('logo_exit_1').style.left = '-50px';
		document.getElementById('animation_square').style.display = '';
	}
	if (clocker == 7) {
		document.getElementById('close_pic_yes_no').style.width = '20px';
		document.getElementById('logo_exit_1').style.display = 'none';
	}
	if (clocker == 8) {
		document.getElementById('close_pic_yes_no').style.display = 'none';
		document.getElementById('animation_square').style.display = 'none';
	}
	if (clocker == 10) {
		document.getElementById('animation_top_line_close').style.background = '#fff';
		document.getElementById('animation_bottom_line_close').style.background = '#fff';
		document.getElementById('animation_wrapper_close_header_line').style.display = '';
		document.getElementById('animation_wrapper_close_footer_line').style.display = '';
		document.getElementById('animation-list-close-site').style.height = '632px';
		document.getElementById('center_close_animation_pic').style.top = '62px';
		document.getElementById('center_close_animation_pic').style.left = '87px';
		document.getElementById('center_close_animation_pic').style.width = '850px';
		document.getElementById('center_close_animation_pic').style.height = '510px';
		document.getElementById('center_close_animation_pic').style.background = 'url(../lamborghini/img/animation/photo_close_2.jpg) no-repeat';
		document.getElementById('animation_wrapper_close_bottom_line').style.top = '622px';
	}
	if (clocker == 12) {
		document.getElementById('animation_wrapper_close_top_line').style.display = 'none';
		document.getElementById('animation_wrapper_close_bottom_line').style.display = 'none';
		document.getElementById('animation_wrapper_close_head_line').style.display = '';
		document.getElementById('animation_wrapper_close_head_line').style.top = '40px';
		document.getElementById('animation_wrapper_close_foot_line').style.display = '';
		document.getElementById('animation_wrapper_close_foot_line').style.top = '478px';
		document.getElementById('animation-list-close-site').style.height = '529px';
		document.getElementById('center_close_animation_pic').style.top = '60px';
		document.getElementById('center_close_animation_pic').style.left = '172px';
		document.getElementById('center_close_animation_pic').style.width = '680px';
		document.getElementById('center_close_animation_pic').style.height = '408px';
		document.getElementById('center_close_animation_pic').style.background = 'url(../lamborghini/img/animation/photo_close_3.jpg) no-repeat';
		document.getElementById('animation_wrapper_close_header_line').style.top = '0px';
		document.getElementById('animation_wrapper_close_footer_line').style.top = '518px';
	}
	if (clocker == 14) {
		document.getElementById('animation_wrapper_close_head_line').style.top = '130px';
		document.getElementById('animation_wrapper_close_head_line').style.left = '162px';
		document.getElementById('animation_wrapper_close_head_line').style.width = '700px';
	}
	if (clocker == 16) {
		document.getElementById('header_close_animation_pic').style.display = '';
		document.getElementById('center_close_animation_pic').style.top = '150px';
		document.getElementById('center_close_animation_pic').style.left = '172px';
		document.getElementById('center_close_animation_pic').style.width = '680px';
		document.getElementById('center_close_animation_pic').style.height = '328px';
		document.getElementById('center_close_animation_pic').style.background = 'url(../lamborghini/img/animation/photo_close_5.jpg) no-repeat';		
		document.getElementById('animation_wrapper_close_foot_line').style.top = '488px';
		document.getElementById('animation_wrapper_close_footer_line').style.top = '528px';
	}
	if (clocker == 18) {
		document.getElementById('animation_wrapper_close_header_line').style.top = '20px';
	}
	if (clocker == 20) {
		document.getElementById('header_close_animation_pic').style.display = 'none';
		document.getElementById('animation_wrapper_close_header_line').style.top = '110px';
	}
	if (clocker == 22) {
		document.getElementById('animation_wrapper_close_foot_line').style.top = '398px';
		document.getElementById('animation_wrapper_close_foot_line').style.left = '162px';
		document.getElementById('animation_wrapper_close_foot_line').style.width = '700px';
	}
	if (clocker == 24) {
		document.getElementById('animation_wrapper_close_header_line').style.top = '100px';
		document.getElementById('animation_wrapper_close_head_line').style.top = '120px';
		document.getElementById('footer_close_animation_pic').style.display = '';		
		document.getElementById('center_close_animation_pic').style.top = '140px';
		document.getElementById('center_close_animation_pic').style.left = '172px';
		document.getElementById('center_close_animation_pic').style.width = '680px';
		document.getElementById('center_close_animation_pic').style.height = '248px';
		document.getElementById('center_close_animation_pic').style.background = 'url(../lamborghini/img/animation/photo_close_7.jpg) no-repeat';
	}
	if (clocker == 26) {
		document.getElementById('animation_wrapper_close_footer_line').style.top = '508px';		
	}
	if (clocker == 28) {
		document.getElementById('footer_close_animation_pic').style.display = 'none';
		document.getElementById('animation_wrapper_close_footer_line').style.top = '418px';		
	}
	if (clocker == 30) {
		document.getElementById('animation_wrapper_close_header_line').style.top = '120px';
		document.getElementById('animation_wrapper_close_header_line').style.width = '10px';
		document.getElementById('animation_wrapper_close_header_line').style.height = '288px';		
	}
	if (clocker == 32) {
		document.getElementById('animation_wrapper_close_footer_line').style.top = '120px';
		document.getElementById('animation_wrapper_close_footer_line').style.left = '927px';
		document.getElementById('animation_wrapper_close_footer_line').style.width = '10px';
		document.getElementById('animation_wrapper_close_footer_line').style.height = '288px';
	}
	if (clocker == 34) {
		document.getElementById('animation_wrapper_close_header_line').style.left = '127px';
		document.getElementById('animation_wrapper_close_footer_line').style.left = '887px';
	}
	if (clocker == 36) {
		document.getElementById('animation_wrapper_close_header_line').style.left = '137px';
		document.getElementById('animation_wrapper_close_footer_line').style.left = '877px';
	}
	if (clocker == 38) {
		document.getElementById('animation_wrapper_close_header_line').style.left = '152px';
		document.getElementById('animation_wrapper_close_footer_line').style.left = '862px';
		document.getElementById('animation_wrapper_close_site').style.background = '#282722';
		document.getElementById('animation_top_line_close').style.background = '#282722';
		document.getElementById('animation_bottom_line_close').style.background = '#282722';
		document.getElementById('center_close_animation_place').style.display = '';		
	}
	if (clocker == 39) {
		document.getElementById('vertikal_line').style.display = '';
		document.getElementById('vertikal_line_1').style.display = '';
		document.getElementById('gorizont_line').style.display = '';
		document.getElementById('gorizont_line_1').style.display = '';
	}
	if (clocker == 40) {
		document.getElementById('center_close_animation_pic').style.background = '#fff';		
		document.getElementById('animation_img_close').style.display = '';
	}
	if (clocker == 42) {
		document.getElementById('animation_img_close').style.left = '238px';
		document.getElementById('animation_img_close').style.top =  '102px';
	}
	if (clocker == 43) {
		document.getElementById('animation_img_close').style.left = '178px';
		document.getElementById('animation_img_close').style.top =  '112px';
	}
	if (clocker == 44) {
		document.getElementById('animation_img_close').style.left = '118px';
		document.getElementById('animation_img_close').style.top =  '122px';
	}
	if (clocker == 45) {
		document.getElementById('animation_img_close').style.left = '58px';
		document.getElementById('animation_img_close').style.top =  '132px';
	}
	if (clocker == 46) {
		document.getElementById('animation_img_close').style.left = '-8px';
		document.getElementById('animation_img_close').style.top =  '142px';
	}
	if (clocker == 47) {
		document.getElementById('animation_img_close').style.left = '-68px';
		document.getElementById('animation_img_close').style.top =  '152px';
		document.getElementById('animation_square_1').style.display = '';
		document.getElementById('animation_square_2').style.display = '';
	}
	if (clocker == 48) {
		document.getElementById('animation_img_close').style.left = '-128px';
		document.getElementById('animation_img_close').style.top =  '162px';
	}
	if (clocker == 49) {
		document.getElementById('animation_img_close').style.left = '-188px';
		document.getElementById('animation_img_close').style.top =  '172px';		
	}	
	if (clocker == 50) {
		document.getElementById('animation_img_close').style.display = 'none';
		document.getElementById('animation_square_1').style.display = 'none';
		document.getElementById('animation_square_2').style.display = 'none';		
		document.getElementById('center_close_animation_pic').style.left = '162px';
	}
	if (clocker == 51) {		
		document.getElementById('animation_square').style.display = '';
		document.getElementById('animation_square').style.top = '31px';
		document.getElementById('animation_square').style.background = '#282722';
		document.getElementById('vertikal_line').style.display = 'none';
		document.getElementById('vertikal_line_1').style.display = 'none';
		document.getElementById('gorizont_line').style.display = 'none';
		document.getElementById('gorizont_line_1').style.display = 'none';
		document.getElementById('close_pic_yes_no').style.display = '';
		document.getElementById('close_pic_yes_no').style.width = '20px';
		document.getElementById('close_pic_yes_no').style.top = '31px';
		document.getElementById('logo_exit_1').style.display = '';
		document.getElementById('logo_exit_1').style.left = '-120px';		
	}
	if (clocker == 52) {
		document.getElementById('close_pic_yes_no').style.width = '100px';
		document.getElementById('logo_exit_1').style.left = '-50px';
	}	
	if (clocker == 53) {
		document.getElementById('close_pic_yes_no').style.width = '185px';
		document.getElementById('logo_exit_1').style.left = '35px';
		document.getElementById('animation_square').style.display = 'none';
	}
	if (clocker == 54) {
		document.getElementById('close_pic_yes_no').style.width = '271px';
		document.getElementById('logo_exit_1').style.left = '121px';
	}
	if (clocker == 55) {
		document.getElementById('close_pic_yes_no').style.left = '20px';
		document.getElementById('close_pic_yes_no').style.width = '336px';		
		document.getElementById('logo_exit_1').style.left = '186px';
	}
	if (clocker == 56) {
		document.getElementById('close_pic_yes_no').style.width = '402px';
		document.getElementById('logo_exit_1').style.left = '252px';
	}
	if (clocker == 57) {
		document.getElementById('close_pic_yes_no').style.width = '422px';
		document.getElementById('logo_exit_1').style.left = '272px';
	}	
	if (clocker == 59) {
		document.getElementById('close_pic_yes_no').style.left = '100px';
		document.getElementById('close_pic_yes_no').style.width = '342px';
		document.getElementById('logo_exit_1').style.left = '192px';
	}	
	/*if (clocker == 67) {
		document.getElementById('close_pic_yes_no').style.left = '140px';
		document.getElementById('close_pic_yes_no').style.width = '302px';
		document.getElementById('logo_exit_1').style.left = '152px';
	}*/	
	if (clocker == 61) {
		document.getElementById('close_pic_yes_no').style.left = '180px';
		document.getElementById('close_pic_yes_no').style.width = '262px';
		document.getElementById('logo_exit_1').style.left = '112px';
	}	
	/*if (clocker == 71) {
		document.getElementById('close_pic_yes_no').style.left = '220px';
		document.getElementById('close_pic_yes_no').style.width = '222px';
		document.getElementById('logo_exit_1').style.left = '72px';
	}*/	
	if (clocker == 63) {
		document.getElementById('close_pic_yes_no').style.left = '257px';
		document.getElementById('close_pic_yes_no').style.width = '185px';
		document.getElementById('logo_exit_1').style.left = '35px';
	}
	if (clocker == 67) {
		document.getElementById('close_pic_yes_no').style.background = '#fff';
	}
	if (clocker == 69) {
		document.getElementById('close_pic_yes_no').style.background = '#282722';
		document.getElementById('bye').style.display = '';
		document.getElementById('bye').style.left = '25px';
		document.getElementById('close_pic_yes_no').style.left = '200px';
		document.getElementById('close_pic_yes_no').style.width = '242px';
		document.getElementById('logo_exit_1').style.left = '92px';		
	}	
	if (clocker == 71) {
		document.getElementById('close_pic_yes_no').style.background = '#fff';
		document.getElementById('bye').style.display = 'none';
	}	
	if (clocker == 74) {
		document.getElementById('center_close_animation_pic').style.display = 'none';
	}
	if (clocker == 76) {
		document.getElementById('center_close_animation_place').style.left = '307px';
		document.getElementById('center_close_animation_place').style.top = '177px';
		document.getElementById('center_close_animation_place').style.width = '410px';
		document.getElementById('center_close_animation_place').style.height = '174px';
		document.getElementById('animation_wrapper_close_header_line').style.left = '307px';
		document.getElementById('animation_wrapper_close_header_line').style.top = '177px';
		document.getElementById('animation_wrapper_close_header_line').style.height = '174px';
		document.getElementById('animation_wrapper_close_footer_line').style.left = '707px';
		document.getElementById('animation_wrapper_close_footer_line').style.top = '177px';
		document.getElementById('animation_wrapper_close_footer_line').style.height = '174px';
		document.getElementById('animation_wrapper_close_head_line').style.left = '307px';
		document.getElementById('animation_wrapper_close_head_line').style.top = '177px';
		document.getElementById('animation_wrapper_close_head_line').style.width = '410px';
		document.getElementById('animation_wrapper_close_foot_line').style.left = '307px';
		document.getElementById('animation_wrapper_close_foot_line').style.top = '341px';
		document.getElementById('animation_wrapper_close_foot_line').style.width = '410px';
	}
	if (clocker == 78) {
		document.getElementById('center_close_animation_place').style.left = '462px';
		document.getElementById('center_close_animation_place').style.top = '234px';
		document.getElementById('center_close_animation_place').style.width = '100px';
		document.getElementById('center_close_animation_place').style.height = '60px';
		document.getElementById('animation_wrapper_close_header_line').style.left = '462px';
		document.getElementById('animation_wrapper_close_header_line').style.top = '234px';
		document.getElementById('animation_wrapper_close_header_line').style.height = '60px';
		document.getElementById('animation_wrapper_close_footer_line').style.left = '552px';
		document.getElementById('animation_wrapper_close_footer_line').style.top = '234px';
		document.getElementById('animation_wrapper_close_footer_line').style.height = '60px';
		document.getElementById('animation_wrapper_close_head_line').style.left = '462px';
		document.getElementById('animation_wrapper_close_head_line').style.top = '234px';
		document.getElementById('animation_wrapper_close_head_line').style.width = '100px';
		document.getElementById('animation_wrapper_close_foot_line').style.left = '462px';
		document.getElementById('animation_wrapper_close_foot_line').style.top = '284px';
		document.getElementById('animation_wrapper_close_foot_line').style.width = '100px';
	}
	if (clocker == 80) {
		document.getElementById('center_close_animation_place').style.left = '492px';
		document.getElementById('center_close_animation_place').style.top = '244px';
		document.getElementById('center_close_animation_place').style.width = '40px';
		document.getElementById('center_close_animation_place').style.height = '40px';
		document.getElementById('animation_wrapper_close_header_line').style.left = '492px';
		document.getElementById('animation_wrapper_close_header_line').style.top = '244px';
		document.getElementById('animation_wrapper_close_header_line').style.height = '40px';
		document.getElementById('animation_wrapper_close_footer_line').style.left = '522px';
		document.getElementById('animation_wrapper_close_footer_line').style.top = '244px';
		document.getElementById('animation_wrapper_close_footer_line').style.height = '40px';
		document.getElementById('animation_wrapper_close_head_line').style.left = '492px';
		document.getElementById('animation_wrapper_close_head_line').style.top = '244px';
		document.getElementById('animation_wrapper_close_head_line').style.width = '40px';
		document.getElementById('animation_wrapper_close_foot_line').style.left = '492px';
		document.getElementById('animation_wrapper_close_foot_line').style.top = '274px';
		document.getElementById('animation_wrapper_close_foot_line').style.width = '40px';
	}
	if (clocker == 82) {
		document.getElementById('center_close_animation_place').style.left = '507px';
		document.getElementById('center_close_animation_place').style.top = '259px';
		document.getElementById('center_close_animation_place').style.width = '10px';
		document.getElementById('center_close_animation_place').style.height = '10px';
		document.getElementById('center_close_animation_place').style.background = '#000';
		document.getElementById('animation_wrapper_close_header_line').style.display = 'none';		
		document.getElementById('animation_wrapper_close_footer_line').style.display = 'none';		
		document.getElementById('animation_wrapper_close_head_line').style.display = 'none';		
		document.getElementById('animation_wrapper_close_foot_line').style.display = 'none';		
	}
	if (clocker == 84) {
		document.getElementById('center_close_animation_place').style.display = 'none';
	}
	if (clocker == 88) {
		document.getElementById('center_close_animation_place').style.display = '';				
		document.getElementById('animation_about_autor').style.display = '';		
		clearTimeout(animate_3);
	}
}

animation_about_autor.addEventListener('click', function about_autor() { //кнопка желтый квадратик (animation_about_autor_text) с информацией о авторе, после анимации при выходе
	document.getElementById('animation_about_autor').style.display = 'none';
	document.getElementById('animation_about_autor_text').style.display = '';
	document.getElementById('center_close_animation_place').style.left = '307px';
	document.getElementById('center_close_animation_place').style.top = '177px';
	document.getElementById('center_close_animation_place').style.width = '410px';
	document.getElementById('center_close_animation_place').style.height = '174px';
	document.getElementById('center_close_animation_place').style.background = '#fff';
	document.getElementById('animation_wrapper_close_header_line').style.display = '';		
	document.getElementById('animation_wrapper_close_footer_line').style.display = '';		
	document.getElementById('animation_wrapper_close_head_line').style.display = '';		
	document.getElementById('animation_wrapper_close_foot_line').style.display = '';
	document.getElementById('animation_wrapper_close_header_line').style.background = '#eaaf22';		
	document.getElementById('animation_wrapper_close_footer_line').style.background = '#eaaf22';		
	document.getElementById('animation_wrapper_close_head_line').style.background = '#eaaf22';		
	document.getElementById('animation_wrapper_close_foot_line').style.background = '#eaaf22';
	document.getElementById('animation_wrapper_close_header_line').style.left = '307px';
	document.getElementById('animation_wrapper_close_header_line').style.top = '177px';
	document.getElementById('animation_wrapper_close_header_line').style.height = '174px';
	document.getElementById('animation_wrapper_close_footer_line').style.left = '707px';
	document.getElementById('animation_wrapper_close_footer_line').style.top = '177px';
	document.getElementById('animation_wrapper_close_footer_line').style.height = '174px';
	document.getElementById('animation_wrapper_close_head_line').style.left = '307px';
	document.getElementById('animation_wrapper_close_head_line').style.top = '177px';
	document.getElementById('animation_wrapper_close_head_line').style.width = '410px';
	document.getElementById('animation_wrapper_close_foot_line').style.left = '307px';
	document.getElementById('animation_wrapper_close_foot_line').style.top = '341px';
	document.getElementById('animation_wrapper_close_foot_line').style.width = '410px';
	console.log('good');
})