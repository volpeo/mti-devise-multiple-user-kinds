$(document).on('turbolinks:load', function() {
  $('#user_kind_customer').on('click', function() {
   $('.customer').show();
   $('.merchant').hide();
  });

  $('#user_kind_merchant').on('click', function() {
   $('.customer').hide();
   $('.merchant').show();
  });

  $('.merchant').hide();
});