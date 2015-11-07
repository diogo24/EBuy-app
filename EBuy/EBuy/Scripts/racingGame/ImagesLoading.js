//var picsToLoad = 3;
var picsToLoad = 0;

// car image load
var carPic = document.createElement("img");

function countLoadedImagesAndLauchIdReady() {
    picsToLoad--;
    console.log(picsToLoad);
    if(picsToLoad == 0){
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLauchIdReady();
    imgVar.src    = fileName;
}

//function carImageLoad() {
//    // import picture
//    //carPic.onload = countLoadedImagesAndLauchIdReady();
//    //carPic.src = "/Content/racingGame/car2.png";
    
//}

// track images load
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

//function trackLoadImages() {
//    //roadPic.onload = countLoadedImagesAndLauchIdReady();
//    //wallPic.onload = countLoadedImagesAndLauchIdReady();

//    //roadPic.src = "/Content/racingGame/track_road.png";
//    //wallPic.src = "/Content/racingGame/track_wall.png";


//}

function loadImages() {
    var imageList = [
        { varName: carPic, fileName: "/Content/racingGame/car2.png" },
        { varName: roadPic, fileName: "/Content/racingGame/track_road.png" },
        { varName: wallPic, fileName: "/Content/racingGame/track_wall.png" },
    ];

    picsToLoad = imageList.length;
    for (var index in imageList) {
        beginLoadingImage(imageList[index].varName, imageList[index].fileName);
    }    
}