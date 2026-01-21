let seats=[];

function save(key,val){
    localStorage.setItem(key,JSON.stringify(val));
}
function get(key){
    return JSON.parse(localStorage.getItem(key));
}

