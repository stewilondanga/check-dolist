$(document).ready(function() {
  $('input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $checkVal = $(this).val();
      $('#doneList').append('<li><input type="checkbox" name="' + $checkVal + '" value="' + $checkVal + '" checked><label for="' + $checkVal + '">' + $checkVal + '</label></li>');
      $(this).siblings().remove();
      $(this).remove();
    } else if ($(this).prop("checked") == false) {
      alert('not checked');
      $(this).siblings().remove();
      $(this).remove();
    }
  });

  // $('#doneList input[type="checkbox"]').click(function(){
  //      alert("checked has been unchecked");
  //  });
});

var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();
