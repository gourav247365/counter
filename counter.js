let Count= document.getElementById("count");  
let pe= document.getElementById("entries");

let counter=0;

function increment(){
    counter= counter+1;
    Count.innerText= counter;
}

function save(){
    if(pe.innerHTML==='previous entries: '){
        pe.textContent+= counter  ;
    }
    else{
        pe.textContent+= '-' + counter  ;
    }
    counter= 0;
    Count.innerText= counter;
}

function reset(){
    counter= 0;
    Count.innerText=counter;
    pe.innerText='previous entries: ';
}