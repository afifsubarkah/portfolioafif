$(function(){

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event,errors){

        },
        submitSuccess:function($form, event){
            event.preventDefault();

            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();
        }
        $this = $("#senMessageButton");
        $this.prop("disabled",true);
        $.ajax({
            url:"././mail/contact-me.php",
            type:"POST",
            data{
                name:name,
                email:email,
                subject:subject,
                message:message,
            },
            
        })
    })
}