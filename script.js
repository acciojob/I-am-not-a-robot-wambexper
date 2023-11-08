//your code here
const main = document.querySelector("main");
const verify = document.getElementById("verify");
const reset = document.getElementById("reset");
const para = document.getElementById("para");

// console.log(main);
let arrClasses = ["img1" ,"img2","img3","img4","img5" ]
let randomPhotoClass = arrClasses[Math.round(Math.random()*5)];
// console.log(randomPhotoUrl);
const randomPhoto = document.createElement("img");
randomPhoto.className = randomPhotoClass;
main.appendChild(randomPhoto);


const imgs = document.getElementsByTagName("img");
let clicked = 0;
let selected = [];
for (let i=0 ;i<imgs.length;i++){
    const currentImg = imgs[i];
    currentImg.addEventListener("click",()=>{
        selected.push(currentImg);
        clicked++;
        currentImg.classList.add("selected");  
        if(clicked === 1){
              reset.style.display = "flex";
            reset.addEventListener("click",()=>{
                clicked = 0;
                for(let val of selected) val.classList.remove("selected");
                reset.style.display = "none"; 
                para.style.display = "none";
            })
        }
        else if(clicked === 2){
            verify.style.display = "flex";
        }
        else{
            verify.style.display = "none";
        }
    })
}

verify.addEventListener("click",()=>{
    let classes = [];
    for(let val of selected){
        classes.push(val.className);
    }
    let sameClass = true;
    for(let i = 0; i < classes.length-1; i++){
         if(classes[i] !== classes[i+1]){
            sameClass = false;
            break;
         }
    }
    if(sameClass === true){
        para.style.display = "flex";
       para.innerText = "You are a human. Congratulations!";
    }
    else{
        para.style.display = "flex";
        para.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
    }
    verify.style.display = "none";
})