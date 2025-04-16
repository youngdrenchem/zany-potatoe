console.log("work")


let tennessee= document.querySelector(".tennessee");
let texasAM= document.querySelector(".texasAM");
let UCF= document.querySelector(".UCF");
let kentucky= document.querySelector(".kentucky");
let input1= document.querySelector(".question1");
let input2= document.querySelector(".question2");
let button= document.querySelector(".button");


tennessee.style.display="none";
texasAM.style.display="none";
UCF.style.display="none";
kentucky.style.display="none";




button.onclick=function(){
console.log("button check");


let answer1 = input1.value;
console.log(answer1)
let answer2 = input2.value;
console.log(answer2)


if(answer1==="2" && answer2==="dolphins"){
    console.log("tennessee");
    tennessee.style.display="block";
texasAM.style.display="none";
UCF.style.display="none";
kentucky.style.display="none";
}
 else if(answer1==="2" && answer2==="sharks"){
  console.log("kentucky");
  tennessee.style.display="none";
  texasAM.style.display="none";
  UCF.style.display="none";
  kentucky.style.display="block";
 }

 else if(answer1==="4" && answer2==="dolphins"){
  console.log("texasAM");
tennessee.style.display="none";
texasAM.style.display="block";
UCF.style.display="none";
kentucky.style.display="none";
}
else if(answer1==="4" && answer2==="sharks"){
  console.log("UCF");
tennessee.style.display="none";
texasAM.style.display="none";
UCF.style.display="block";
kentucky.style.display="none";
}

};

