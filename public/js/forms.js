
/* global $*/

function checkBoxConfirm(){
    
    console.log("runned");
    if($("#infoCorrectCheck").is(":checked")){
        $("#personalInfoNext").removeAttr('disabled');
    }else {
        $("#personalInfoNext").attr('disabled','disabled');
    }
}

function checkAgreementConfirm(){
    
    if($("#checkAgreement").is(":checked")){
        $("#agree_cont").removeAttr('disabled');
    } else {
        $("#agree_cont").attr('disabled','disabled');
    }
}