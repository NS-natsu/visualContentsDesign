let actList = new Array(0);

function winOver(){
    for(let i=0; i < actList.length; i++){
        if(actList[i].getBoundingClientRect().top < window.innerHeight){
            actList[i].classList.add('visible');
            actList.splice(i,1);
            i--;
        }
    }
}