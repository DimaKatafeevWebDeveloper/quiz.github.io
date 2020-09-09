jQuery(document).ready(function ($) {

   $('.quiz__btn').on('click', function () {
      $('body').addClass('lock') && $('.quiz__modal').addClass('active') && $('.body-first').addClass('active') && $('.quiz__body').addClass('animScale');
   });

   $('.quiz__icon').on('click', function () {
      $('body').removeClass('lock') && $('.quiz__modal').removeClass('active') && $('.quiz__body').removeClass('animScale') && $('.quiz__body').removeClass('active') && $('.body-zero').addClass('active');
   });


   $('.next-first').on('click', function () {
			if($('.question-first [type="radio"]').is(':checked')) {
            $('#quiz-form [name="VyborPereplanirovki"]').val($('.question-first input:checked').val()) && $('.body-first').removeClass('active') && $('.body-second').addClass('active') && $('.quiz__message').hide();
         }
         else{
            $('.quiz__message').show();
         }    
   });

   $('.prev-second').on('click', function () {
      $('.body-second').removeClass('active') && $('.body-first').addClass('active');
   });

   $('.next-second').on('click', function () {

      if($('.question-second [type="checkbox"]').is(':checked')) {
      let res = '';
      $('.question-second input[type="checkbox"]:checked').each(function(){
         
         res += $(this).val()+', ';
         $('#quiz-form [name="CelPereplanirovki"]').val(res) && $('.body-second').removeClass('active') && $('.body-third').addClass('active') && $('.quiz__message').hide();;
     });
   }else{
      $('.quiz__message').show();
       }  

   });

   $('.prev-third').on('click', function () {
      $('.body-third').removeClass('active') && $('.body-second').addClass('active');
   });

   $('.next-third').on('click', function () {
      if($('.question-third [type="radio"]').is(':checked')) {
         $('#quiz-form [name="KulturnoeNasledie"]').val($('.question-third input:checked').val()) && $('.body-third').removeClass('active') && $('.body-fourth').addClass('active') && $('.quiz__message').hide();
      }
      else{
         $('.quiz__message').show();
      }  
   });

   $('.prev-fourth').on('click', function () {
      $('.body-fourth').removeClass('active') && $('.body-third').addClass('active');
   });

   $('.next-fourth').on('click', function () {
      if($('.question-fourth [type="radio"]').is(':checked')) {
         $('#quiz-form [name="SborDoc"]').val($('.question-fourth input:checked').val()) && $('.body-fourth').removeClass('active') && $('.body-fifth').addClass('active') && $('.quiz__message').hide();
      }
      else{
         $('.quiz__message').show();
      }  
   });

   $('.prev-fifth').on('click', function () {
      $('.body-fifth').removeClass('active') && $('.body-fourth').addClass('active');
   });

   $('.next-fifth').on('click', function () {
      if($('.question-fifth [type="radio"]').is(':checked')) {
         $('#quiz-form [name="Konflikty"]').val($('.question-fifth input:checked').val()) && $('.body-fifth').removeClass('active') && $('.body-sixth').addClass('active') && $('.quiz__message').hide();
      }
      else{
         $('.quiz__message').show();
      }  
   });

   $('.prev-sixth').on('click', function () {
      $('.body-sixth').removeClass('active') && $('.body-fifth').addClass('active');
   });

   




   $('[type="submit"]').click(function(e) {
		let form = $(this).parents('form');
		if(form.find('[name="phone"]').val() == '' || form.find('[name="name"]').val() == '') {
			alert('Поля ИМЯ и ТЕЛЕФОН не могут быть пустыми! Заявка НЕ отправлена! Попробуйте еще раз');
			form.find('[type="text"]')[0].focus();
         return false;
      }
      $('.next-sixth').on('click', function () {
         $('.body-sixth').removeClass('active') && $('.body-seventh').addClass('active') && $('.body-zero').addClass('active');
   
      });
		e.preventDefault();
		$.ajax({
		  cashe: false,
		  type: form.attr('method'),
		  url: form.attr('action'),
		  data: form.serialize(),
		});
	});
   

});

