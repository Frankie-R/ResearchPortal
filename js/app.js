$(function() {
  $(".datepicker").datepicker();

});


$(".PeoplePicker").keyup(function(){
  console.log($(this).val());
});

$(".ProjectType").change(function(){
  if($(this).val() == "option1"){
    $("#FundedProjectSection").removeClass("hidden");
  }
  else{
    $("#FundedProjectSection").addClass("hidden");
  }
});
