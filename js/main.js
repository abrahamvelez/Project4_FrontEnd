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
      var content = $(this).val(), count = 0;
      console.log(content);


    //Loop through the images
    $("img").each(function(){
        //Fade out results if search does not match pic title
        if($(this).attr('title').search(new RegExp(content, "i")) < 0){
           $(this).fadeOut();
        }
        //Show results if search does match pic title
        else{
          $(this).show();
          count++;
        }
    });
    // Update the count
    var numberItems = count;

  });



});
