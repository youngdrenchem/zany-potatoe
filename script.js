let tennessee= document.querySelector(".tennessee");
let texasAM= document.querySelector(".texasAM");
let UCF= document.querySelector(".UCF");
let kentucky= document.querySelector(".Kentucky");

tennessee.style.display="none";
texasAM.style.display="none";
UCF.style.display="none";
kentucky.style.display="none";

button.onclick=function(){
console.log("button check");
};

  let answer1 = input1.value;
  console.log(answer1);
  let answer2 = input2.value;
  console.log(answer2);

if(answer1==="2" && answer2==="dolphin"){ 
    console.log("Tennessee");
    tennessee.style.display="block";
    }
     
else if(answer1==="2" && answer2==="shark"){ 
        console.log("texasAM");
        texasAM.style.display="block";
    }

if(answer1==="4" && answer2==="dolphin"){ 
            console.log("Kentucky");
            kentucky.style.display="block";
        }

else if(answer1==="4" && answer2==="shark"){ 
                console.log("UCF");
                UCF.style.display="block";
            }