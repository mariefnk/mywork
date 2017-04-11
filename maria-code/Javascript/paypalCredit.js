$(document).ready(function () {




$("input").on("change", function(){
   if($('input[name=payment_method]:checked').val() == "paypal"){
       $(".creditCard").css("display","none");
       $(".PayPal").css("display","block");
   }
   else{
       $(".creditCard").css("display","block");
        $(".PayPal").css("display","none");
   }
});

/*
$("#payment_method_paypal").attr("checked","checked"){
    document.getElementsByClassName("creditCard").hide();
}*/


});