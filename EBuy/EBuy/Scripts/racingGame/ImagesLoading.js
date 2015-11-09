//var picsToLoad = 3;
var picsToLoad = 0;

// car image load
var carPic    = document.createElement("img");
var trackPics = [];


function countLoadedImagesAndLauchIdReady() {
    picsToLoad--;
    console.log(picsToLoad);
    if (picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLauchIdReady();
    imgVar.src = fileName;
}

function loadImages() {
    var imageList = [
        { varName: carPic, fileName: "/Content/racingGame/car2.png" },

        { trackType: TRACK_ROAD, fileName: "/Content/racingGame/track_road.png" },
        { trackType: TRACK_WALL, fileName: "/Content/racingGame/track_wall.png" },
        { trackType: TRACK_END_FLAG, fileName: "/Content/racingGame/track_endFlag.png" },
        { trackType: TRACK_TREE, fileName: "/Content/racingGame/track_tree.png" },
        { trackType: TRACK_FLAG, fileName: "/Content/racingGame/track_flag.png" },
    ];

    picsToLoad = imageList.length;
    for (var index in imageList) {
        if (imageList[index].varName != undefined) {
            beginLoadingImage(imageList[index].varName, imageList[index].fileName);
        }
        else {
            loadImageForTrackCode(imageList[index].trackType, imageList[index].fileName);
        }        
    }
}

function loadImageForTrackCode(trackType, fileName) {
    trackPics[trackType] = document.createElement("img");
    beginLoadingImage(trackPics[trackType], fileName);
}


