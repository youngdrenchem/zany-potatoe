let tennessee= document.querySelector(".tennessee");
let texasAM= document.querySelector(".texasAM");
let UCF= document.querySelector(".UCF");
let kentucky= document.querySelector(".kentucky");



tennessee.style.display="none";
texasAM.style.display="none";
UCF.style.display="none";
kentucky.style.display="none";

button.onclick=function(){
console.log("button check");


  let answer1 = input1.value
  console.log(answer1);
  let answer2 = input2.value
  console.log(answer2);
}

if(answer1==="2" && answer2==="dolphins"){ 
    console.log("tennessee");
    tennessee.style.display="block";
    kentucky.style.display="none";
}