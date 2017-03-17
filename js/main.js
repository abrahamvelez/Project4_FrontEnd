lightbox.option({
  'wrapAround': true,
  'alwaysShowNavOnTouchDevices': true,
  'showImageNumberLabel': false,
  'maxWidth':500,
  'maxHeight': 500
});

$(document).ready(function(){

    //Store the input value
    $("#search").keyup(function(){
      var content = $(this).val().toLowerCase(), count = 0;
      // console.log(content);


    //Loop through the images
    $("a").each(function(){
      console.log($(this).attr('data-title'));
        //Fade out results if search does not match pic title
        if($(this).attr('data-title')){
          if ($(this).attr('data-title').search(new RegExp(content, "i")) < 0){
              $(this).fadeOut();
            }else{
              $(this).show();
              count++;
            }
          }
        //Show results if search does match pic title

    });
    // Update the count
    var numberItems = count;

  });



});
