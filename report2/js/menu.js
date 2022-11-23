function h_menu(mode) {
    const button = document.getElementById("h-menu-button");
    const body = document.getElementById("h-menu-body");
    switch(mode){
        case 'close':
            if(button.className.search("open")!==-1) button.classList.remove("open");
            if(body.className.search("open")!==-1) body.classList.remove("open");
            break;
        case 'open':
            if(button.className.search("open")===-1) button.classList.add("open");
            if(body.className.search("open")===-1) body.classList.add("open");
            break;
        default:
            if(button.className.search("open")!==-1 || mode=='close') button.classList.remove("open");
            else button.classList.add("open");
        
            if(body.className.search("open")!==-1 || mode=='close') body.classList.remove("open");
            else body.classList.add("open");
            break;
    }
}