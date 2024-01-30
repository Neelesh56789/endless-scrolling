const apiUrl = "https://api.unsplash.com/photos/random/?client_id=xz_NwDi0qrY3VLOMN8FCS0Xh2quCIbENFLoHfVo1oww&count=10";
let allPhotos = [];
let ready = false;
let imagesLoad = 0;
let totalImages = 10;
const getPhotos = async()=>{
    try{
        const response = await fetch(apiUrl);
        const data = await response.json()
        allPhotos = data;
        display();
        
    }catch(err){
        console.log(err);
    }
    
}

//check if images are loaded or not
const imagesLoaded = ()=>{
    imagesLoad++;
    if(imagesLoad === totalImages){
        ready = true;
        imagesLoad = 0;
    }
    console.log(imagesLoaded);
}
const imgContainer = document.getElementById("image-container")
const display = ()=>{
    allPhotos.forEach((photo)=>{
        const img = document.createElement("img");
        img.setAttribute("src", photo.urls.regular)
        img.addEventListener("load", imagesLoaded);
        imgContainer.appendChild(img);
    })
}

window.addEventListener("scroll", ()=>{
    if(window.scrollY > document.body.offsetHeight - 8500 && ready){
        ready = false;
        getPhotos();
        console.log("again loaded images");
    }
})

getPhotos();

