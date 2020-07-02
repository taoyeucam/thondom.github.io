$(document).ready(function(){
    function carouselCallback() {
		$('.owl-carousel').owlCarousel({
		    loop:false,
		    margin:0,
		    autoplay: false,
		    responsiveClass:true,
		    nav: false,
		    dots: false,
		    responsive:{
		        0:{
		            items:2
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		})    

    }

	(function($) {
		let DIR_FILES = './images/';
		let singer = 'JACK';
		let listItems = [
		  {name: 'Là 1 Thằng Con Trai', cover: 'la1thangcontrai.jpg', time: '10.03.2020', url: 'https://www.youtube.com/watch?v=vjZsxtlJ-_M', producer: 'K-ICM'},		
		  {name: 'Hồng Nhan', cover: 'hongnhan.jpg', time: '19.02.2019', url: 'https://www.youtube.com/watch?v=8x2NjwwHUbQ', producer: 'G5R'},
		  {name: 'Bạc Phận', cover: 'bacphan.jpg', time: '16.04.2019', url: 'https://www.youtube.com/watch?v=WX7dUj14Z00', producer: 'K-ICM'},
		  {name: 'Sóng Gió', cover: 'songgio.jpg', time: '12.07.2019', url: 'https://www.youtube.com/watch?v=8x2NjwwHUbQ', producer: 'K-ICM'},
		  {name: 'Em Gì Ơi', cover: 'emgioi.jpg', time: '05.10.2019', url: 'https://www.youtube.com/watch?v=cBClD7jylos', producer: 'K-ICM'},
		  {name: 'Sao Em Vô Tình', cover: 'saoemvotinh.jpg', time: '19.05.2019', url: 'https://www.youtube.com/watch?v=bI7xde9-3BI', producer: 'K-ICM'},
		  {name: 'Về Bên Anh', cover: 'vebenanh.jpg', time: '11.10.2018', url: 'https://www.youtube.com/watch?v=fArpx8TRWU8', producer: 'G5R'}
		]
		var data = '';
        for (var i = 0; i < listItems.length; i++) {
        	data += "<a href='"+ listItems[i].url +"' target='_blank'><div href='"+ listItems[i].url +"' class='item item_product flexer flexer-center-center flexer-column'><div class='item_thumb' style='background-image: url("+ DIR_FILES + listItems[i].cover +")'></div><div class='item-info flexer flexer-center-center flexer-column'><span class='time'>"+ listItems[i].time +"</span><span class='name short-text'>"+ listItems[i].name +"</span><span class='author'>"+ singer + ' .ft ' + listItems[i].producer +"</span></div></div></a>";
        }

        $('.main--product').append("<div class='edge-carousel owl-carousel owl-theme'>"+ data + "</div>");
        carouselCallback();

    })(jQuery);

    (function($){
    	function registry () {
    		$('.btn-submit').on('click', function(){
    		   let yourname = $.trim($(".yourname").val());
    		   let yourrating = $("input[name='rating']:checked").val();
           let validateYourName = (!/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀẾỂưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{1,20}$/.test(yourname));
           let validateYourRating = ['1', '2', '3', '4', '5'];
           console.log(validateYourRating.includes(yourrating))
               if (validateYourName) {
                   alert('Táo trưởng thôn cho biết: \nTên của bạn không hợp lệ. Thử lại với tên thật của cháu nhe!');
               }
               else if (!validateYourRating.includes(yourrating)){
                   alert('Táo trưởng thôn cho biết: \nHãy chọn đánh giá bằng quả dừa bên dưới! (1 quả dừa = 1 sao)');
               }
               else {
                   let json_data = {name_client: yourname, rating_client:yourrating};
                   Cookies.set('ClientDetected', json_data, { expires: 1, path: '' });
                   alert('Đăng nhập thành viên thành công!');
                   window.location.reload(true);
               }    		   
    		})
    	}
      function submitComment () {
          $('.btn-submit-text-comment').on('click', function(){
             let textComment = $(".text-comment").val();
             let filterComment = textComment.replace(/<(.|\n)*?>/g, '');
             let trimComment = $.trim(filterComment);
             if (!trimComment) {
                   alert('Táo trưởng thôn cho biết: \nNhận xét của bạn không hợp lệ. Vui lòng thử lại sau!');
             }
             else if (trimComment.length < 1) {
                   alert('Táo trưởng thôn cho biết: \nNhận xét của bạn không hợp lệ. Vui lòng thử lại sau!');                  
             }
             else if (trimComment.length > 1000) {
                   alert('Táo trưởng thôn cho biết: \nNhận xét của bạn quá dài. Vui lòng thử lại sau!');                  
             }           
             else {
                   alert('Tính năng đang được phát triển. Vui lòng thử lại sau!')
                   $('.text-comment').val(null)
             }  
          })
      }
      
        // Cookies.set('ClientDetected', 0, { expires: 1, path: '' });
        let cookie = Cookies.get('ClientDetected');
        let clientComment = '';
        if (cookie == 0 || cookie == undefined || cookie == 'null') {
           clientComment += "<div class='box-login-comment flexer flexer-center-center flexer-column'><div class='get_name'><input type='text' placeholder='Nhập tên của bạn...' class='yourname' /></div><div class='get_rating'><p class='title_rating'>Chọn đánh giá của bạn: </p><label><input type='radio' name='rating' value='1' class='yourrating'/><p class='text_rating'>1 trái dừa</p></label><label><input type=\"radio\" name=\"rating\" value=\"2\" class=\"yourrating\"/><p class=\"text_rating\">2 trái dừa</p></label><label><input type=\"radio\" name=\"rating\" value=\"3\" class=\"yourrating\"/><p class=\"text_rating\">3 trái dừa</p></label><label><input type=\"radio\" name=\"rating\" value=\"4\" class=\"yourrating\"/><p class=\"text_rating\">4 trái dừa</p></label><label><input type=\"radio\" name=\"rating\" value=\"5\" class=\"yourrating\"/><p class=\"text_rating\">5 trái dừa</p></label></div></div><div class='blocked-comment flexer flexer-center-center'><button class='btn btn-firefly btn-submit'>Đăng nhập thành viên</button></div>";
           $('.main--comment').append(clientComment);
           registry()
        }       
        else {
        	 clientComment += "<div class='box-comment flexer flexer-center-center'><textarea name='text-comment' class='text-comment' placeholder='Nhập nhật xét của bạn...' rows='3'></textarea><button class='btn btn-firefly btn-submit-text-comment'>Gửi nhận xét</button></div>";
           $('.main--comment').append(clientComment);           
           submitComment();
        }
    })(jQuery);
})