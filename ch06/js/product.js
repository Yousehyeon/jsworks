//이미지 바꾸기
let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".small");

//클릭 이벤트 바생
for(let i=0; i<smallPics.length; i++){
    smallPics[i].onclick = showBig;
}

function showBig(){
    let newPic = this.src;
    bigPic.setAttribute("src", newPic); 
}

let viewBtn = document.getElementById("view");
let detail = document.getElementById("detail");

let sw = true;

viewBtn.addEventListener("click", function(){
    if(sw){
        detail.style.display = "block";
        viewBtn.innertext = "상세 설명 닫기";
        sw = false;
    }
    else{
        detail.style.display = "none";
        viewBtn.innerText = "상세 설명 보기";
        sw = true;
    }
})