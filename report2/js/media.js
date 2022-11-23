function viewImgList(tag){
    const viewer = document.getElementById("viewMedia");
    viewer.children[0].innerHTML="";
    for(let img of tag.children){
        viewer.children[0].innerHTML+='<div class="media"><img src=' + img.src + '></div>';
    }
    viewer.classList.remove("hidden");
}

function closeImgList(tag){
    tag.classList.add("hidden");
}