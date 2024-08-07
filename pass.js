let search = document.getElementById("sea");
let pass = document.getElementById("click");
let co = document.getElementById("copy");
let ba = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let sa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let nums = [1,2,3,4,5,6,7,8,9,0];
let sym = ['`','~','!','@','#','$','%','^','&',"*",'(',')','_','=','[',']',':','<','>','?'];


function bigalpha() {
    let get = Math.floor(Math.random() * ba.length);
    let ans = ba[get];
    let get1 = Math.floor(Math.random() * ba.length);
    let ans1 = ba[get1];
    search.value = ans + ans1;
} 

function smallalpha() {
    let get = Math.floor(Math.random() * sa.length);
    let ans = sa[get];
    let get1 = Math.floor(Math.random() * sa.length);
    let ans1 = sa[get1];
    search.value += ans + ans1;
} 

function number() {
    let get = Math.floor(Math.random() * nums.length);
    let ans = nums[get];
    let get1 = Math.floor(Math.random() * nums.length);
    let ans1 = nums[get1];
    search.value += ans + ans1;
}

function symbol() {
    let get = Math.floor(Math.random() * sym.length);
    let ans = sym[get];
    let get1 = Math.floor(Math.random() * sym.length);
    let ans1 = sym[get1];
    search.value += ans + ans1;
}
pass.addEventListener("click",() => {
    bigalpha();
    smallalpha();
    number();
    symbol();

})

co.addEventListener("click",() => {
    navigator.clipboard.writeText(search.value);
    co.innerHTML = "Copied"
    co.style.backgroundColor = "green";
    co.style.color = "white";
    setTimeout(() => {
        co.innerHTML = "Copy to Clipboard"
        co.style.backgroundColor = "black";
        co.style.color = "yellow";
    },1500)
})
