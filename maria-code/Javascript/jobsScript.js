$(document).ready(function () {
   
    $("#showrating").click(function(){
        $("#Divrating").show("fast");
          $("#newContract").hide();
    });

  
    $("h3#hideRating").click(function(){
        $("#Divrating").hide();
    });


      $("#showContract").click(function(){
        $("#newContract").show("fast");
         $("#Divrating").hide();
        
    });

    $("#hideContract").click(function(){
        $("#newContract").hide();
    });
});
/*
$(document).unbind().on('click', '.panel-heading span.clickable', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
$(document).unbind().on('click', '.panel div.clickable', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});*/


function toggleTd(element){
  
  var dis=element.parentNode.parentNode.nextElementSibling;

  if (dis.style.display==="none"){
dis.style.display="table-row";
  }
  else{
    dis.style.display="none";
  }

}

function hideAll(){
  var but=document.getElementById("button");
document.getElementById("button").disabled = true;
  but.style.backgroundColor="#696969";
   but.style.borderColor="#696969";

}



// Filter