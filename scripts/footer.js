
function onChange(){
    $("#submit").attr("disabled",!($('name').val()!="" && $('#query').val()!=""));
}

function sendEmail() {
window.open('mailto:shanthanuriyuzaki@gmail.com?subject=Query from '+$('#name').val()+'&body='+$('#query').val());
}

