class smoothScroll{
    obj=null;
    step=10;
    cnt=0;
    amount=0;
    interval=1;
    start=0;
    end=0;

    scroll(target){
        if(this.obj != null) clearInterval(this.obj);
        this.clear();
        this.start=target.from;
        this.end=target.to;
        this.amount = (target.to - target.from) / this.step;
        if(this.amount <= 0) {
            this.step *= -1;
            this.amount = Math.abs(this.amount);
        }
        
        this.obj = setInterval(this.run, this.interval, this);
    }

    run(obj){
        window.scrollTo({
            top: obj.start + obj.cnt++ * obj.step,
        });
        if(obj.cnt >= obj.amount){
            window.scrollTo({
                top: obj.end,
            });
            clearInterval(obj.obj);
            obj.clear();
        }
    }
    clear(){
        this.cnt = this.amount = this.start = this.end = 0;
        this.obj = null;
        this.step = Math.abs(this.step);
    }
}

let list = new Array(0);
function setPick(n){
    const list = document.getElementById("h-menu-body").children;
    for(let i = 0; i < list.length; i++){
        if(list[i].className.search("pick") !== -1){
            if(i!==n)   list[i].classList.remove("pick");
        }else if(i===n) list[i].classList.add("pick");
    }
    list[n].classList.add("pick");
}

function check_view(elm){
    let n = -1;
    for(let i = 0; i < list.length; i++){
        const pos = list[i].getBoundingClientRect().top;
        if(list[i].getBoundingClientRect().top <= window.innerHeight){
            n = i;
        }
    }
    if(n!==-1) setPick(n);
}