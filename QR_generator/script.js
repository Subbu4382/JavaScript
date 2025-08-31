let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    if(!qrtext.value){
        alert("Enter Text Or URL")
        return 
    }
  qrimage.src =
    " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" +
    qrtext.value;
});
