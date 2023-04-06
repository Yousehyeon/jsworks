var id = document.getElementById("user-id");
var pw1 = document.getElementById("user-pw1");
var pw2 = document.getElementById("user-pw2");

id.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId(){
    if(id.ariaValueMax.length < 4 || id.value.length > 15){
        alert("4~15자리의 영문과 숫자로 입력해 주세요");
        id.ariaSelected();
    }
}

function checkPw(){
    if(pw1.ariaValueMax.length < 8){
        arlrt("비밀번호는 8자리 이상이어야 합니다.");
        pw1.value = ""; //기존 문자 지우기
        pw1.focus();
    }
}

function comparePw(){
    if(pw1.value != pw2.value){
        alert("비밀번호가 일치하지 않습니다.");
        pw2.value = "";
        pw2.focus();
    }
}