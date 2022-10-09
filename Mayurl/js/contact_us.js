$(document).ready(function(){
		//alert("in js");
	$("#frm_contact_us").validate({
			errorElement:'div',
			rules: {
				txtname : {required: true},
				txtphone : { required: true,minlength:10,maxlength:50},
				txtemail : { required: true},
				ta_msg : { required: true},
			},
			messages:{
				txtname : {required:"Please give your name" },
				txtphone : {required: "Please give your contact number",minlength:"Please correct your contact number",maxlength:"Contact number exceding the limit"},
				txtemail : {required: "Please give your email ID"},
				ta_msg : {required: "Please write your message"},
			},
			errorPlacement: function(error, element) {
			error.appendTo( element.parent() );
		},			
			//$(element).parent('div').addClass('contact_us_error');
			// alert(cname); 
			submitHandler: function(form) {
						var SITEROOT="send_msg.php";
						//alert (SITEROOT);
						var cname=$("#txtname").val();
						var cemail=$("#txtemail").val();
						var cphone=$("#txtphone").val();
						var cmsg=$("#ta_msg").val();
						$.ajax({
							type: "POST",
							url: SITEROOT, 
							data : "name="+cname+"&email="+cemail+"&phone="+cphone+"&msg="+cmsg,
							dataType: 'json',
							success: function( data ) {
								//alert(data);
								if(data.status==1){
									
									$("#succmsg").html("Thanks for showing interest. We will contact you soon.");
									$("#succmsg").addClass("alert alert-success");									
									$("#succmsg").show();

									setTimeout(function(){ 
									$('#succmsg').fadeOut();}, 5500); 
									//$("#frmdiv").hide();
									
								}else{
									$("#succmsg").html("There is something error. Please try again");
									$("#succmsg").addClass("alert alert-danger");									
									$("#succmsg").show();

									setTimeout(function(){ 
									$('#succmsg').fadeOut();}, 5500); 
									
									}						
							 }
							
						}); 					
			}, 
		});
});

        

   
 
 
  
 