//var slideIndex = 1
//showDivs(slideIndex);

//function plusDivs(n) {
//    showDivs(slideIndex == n);
//}

//function showDivs(n) {
//    var i;
//    var imgList = document.getElementsByClassName("img-slideshow");
//    // console.log(imgList.length);
//    If (n > imgList.length) slideIndex = 1;
//    else if (n<1) slideIndex = imgList.length;
//
//    for (i = 0; i < imgList.length; i ++) {
//        imgList[i].style.display = "none";
//    }
//    imgList[slideIndex -1].style.display = "block";
//}

//setInterval() {
//
//}

function formValidation() {
    let nameInput = document.getElementById('name-input').value;
    //console.log(nameInput);
    if (nameInput == null || nameInput == '') {
        alert('inputan kosong');
    } else {
        console.log(nameInput);
    }

    let dateInput = document.getElementById('date-input').value;
    if (dateInput == null) {
        alert('tanggal lahir kosong');
    } 
}

function writeContent(){

    let currentDate = new Date();
    
    let txt = "";
    txt = "<b>Tanggal:</b> "  + currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() + "<br />";
    txt += "<b>Nama:</b> " + document.getElementById("name-input").value + "<br />"; 
    txt += "<b>Tanggal Lahir:</b> " + document.getElementById("date-input").value + "<br />";
    txt += "<b>Jenis Kelamin:</b> "
    if (document.getElementById("male").checked = true) {
        txt += "Laki-laki";
    } else {
        txt += "Perempuan";
    }
    txt += "<br />"
    txt += "<b>Pesan:</b>"
    txt += document.getElementById("msg-input").value + "<br />";

    document.getElementById("textResult").innerHTML = txt;
}

let indexSlide = 1;

function nextSlide(n){
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0
    while(index  < listImage.length) {
        listImage[index].style.display = 'none';
        index++;    
   }

    listImage[indexSlide-1].style.display = 'block';
   // document.getElementsByClassName('banner-img')[0].backgroundImage = 'url(assets/image2.jpg)';
}

setInterval(()=> nextSlide(1),3000);

