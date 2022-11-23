function change() {
    const M = document.getElementsByClassName("media");
    for(let media of M){
        media = media.children;
        for(let i = 0; i < media.length; i++){
            if(media[i].className.search("view") !== -1){
                media[i].classList.remove("view");
                media[(i+1)%media.length].classList.add("view");
                break;
            }
        }
    }
}

const itr = setInterval(change, 2000);

function scrollEvent(elm){
    check_view(elm);
    winOver();
}

function resize(){
    let width = document.getElementsByTagName("body")[0].clientWidth - document.getElementById("mainContent").clientWidth;
    width /= 2;
    let css = document.querySelectorAll("#h-menu-body");
    css[0].style.width = width + "px";

    css = document.querySelectorAll("#h-menu-body a");
    for(let c of css){
        c.style.paddingLeft = width+"px";
    }
}

function resizeEvent(elm){
    resize();
    scrollEvent(elm)
}

window.addEventListener('load', scrollEvent);
window.addEventListener('resize', resizeEvent);
window.addEventListener('scroll', scrollEvent, { passive: true });

const smooth = new smoothScroll();

document.addEventListener("DOMContentLoaded", function (){
    list.push(document.getElementById("content_1"));
    list.push(document.getElementById("content_2"));
    list.push(document.getElementById("content_3"));

    let al = document.getElementsByClassName("action");
    for(let act of al) {actList.push(act);}

    resize();

    const trigger = document.querySelectorAll('a[href^="#"]');
    for(let t of trigger){
        const href= t.getAttribute("href");
        t.addEventListener('click', (e) => {
            e.preventDefault();
            let target = document.getElementById(href.replace('#', ''));
            const rect = target.getBoundingClientRect().top;
            const offset = window.pageYOffset;
            const gap = document.getElementsByTagName("header")[0].offsetHeight;
            target = rect + offset - gap;
            smooth.scroll({to: target, from:offset});
            /*window.scrollTo({
                top: target,
                behavior: 'smooth',
            });*/
            h_menu('close');
            return false;
        });
    }
});