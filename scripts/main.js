



const URL = window.location.pathname;
console.log(URL)
if(URL === '/index.html') {
    setTimeout("window.location.href='./waiting-1.html'", 5000);
};