jQuery(document).ready(function ($) {

   $('.quiz__btn').on('click', function () {
      $('body').addClass('lock') && $('.quiz__modal').addClass('active') && $('.body-first').addClass('active') && $('.quiz__body').addClass('animScale');
   });

   $('.quiz__icon').on('click', function () {
      $('body').removeClass('lock') && $('.quiz__modal').removeClass('active') && $('.quiz__body').removeClass('animScale') && $('.quiz__body').removeClass('active');
   });

   $('.next-first').on('click', function () {
      $('.body-first').removeClass('active') && $('.body-second').addClass('active');
   });

   $('.prev-second').on('click', function () {
      $('.body-second').removeClass('active') && $('.body-first').addClass('active');
   });

   $('.next-second').on('click', function () {
      $('.body-second').removeClass('active') && $('.body-third').addClass('active');
   });

   $('.prev-third').on('click', function () {
      $('.body-third').removeClass('active') && $('.body-second').addClass('active');
   });

   $('.next-third').on('click', function () {
      $('.body-third').removeClass('active') && $('.body-fourth').addClass('active');
   });

   $('.prev-fourth').on('click', function () {
      $('.body-fourth').removeClass('active') && $('.body-third').addClass('active');
   });

   $('.next-fourth').on('click', function () {
      $('.body-fourth').removeClass('active') && $('.body-fifth').addClass('active');
   });

   $('.prev-fifth').on('click', function () {
      $('.body-fifth').removeClass('active') && $('.body-fourth').addClass('active');
   });

   $('.next-fifth').on('click', function () {
      $('.body-fifth').removeClass('active') && $('.body-sixth').addClass('active')
   });

   $('.prev-sixth').on('click', function () {
      $('.body-sixth').removeClass('active') && $('.body-fifth').addClass('active');
   });

   $('.next-sixth').on('click', function () {
      $('body').removeClass('lock') && $('.quiz__modal').removeClass('active') && $('.quiz__body').removeClass('animScale') && $('.quiz__body').removeClass('active');
   });
});

