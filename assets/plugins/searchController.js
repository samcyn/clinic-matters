$(document).ready(function(){

	function a(){ 
        $("#search-area").css("border", "none");
    }
    function b(){ 
        $("#search-area").css("border", "1px solid #E2E2E2");
    }

    $("#search-link").click(function() { 
      return (this.tog = !this.tog) ? a() : b();
    });

    $("#search-area").on("focus", function(){
        $(this).css("border", "1px solid #E2E2E2")
    });

    $("#search-area").on("blur", function(){
        $(this).css("border", "none")
    });
        
});