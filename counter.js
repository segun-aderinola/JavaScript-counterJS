function onlyNumbers(evt) {
      var e = event || evt; // for trans-browser compatibility
      var charCode = e.which || e.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57))
          return false;
      return true;

  }


$('.count').click(function(){
  var inputValue = $('input').val();
    var xx = $(this).attr('id');

      count(inputValue, xx);
      animatePress(xx);


});

function count(value, action){

  if(action == 'increment'){
    value++;
    $('input').val(value);
  }
  else if(action == 'decrement'){
    value--;
    if(value >= 0){
      $('input').fadeIn().val(value);
    }

  }
}

function animatePress(xx){
  console.log(xx);
  $('#'+xx).addClass('pressed');
  
    // setTimeout(function(){
    //   $('#'+xx).removeClass('pressed');
    // }, 100)
}
