//var picsToLoad = 3;
var picsToLoad = 0;

// warrior image load
var warriorPic = document.createElement("img");
var worldPics  = [];


function countLoadedImagesAndLauchIdReady() {
    picsToLoad--;
    console.log(picsToLoad);
    if (picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLauchIdReady();
    imgVar.src    = fileName;
}

function loadImages() {
    var imageList = [
        { varName: warriorPic, fileName: "/Content/adventureGame/car2.png" },

        { worldType: WORLD_ROAD, fileName: "/Content/adventureGame/track_road.png" },
        { worldType: WORLD_WALL, fileName: "/Content/adventureGame/track_wall.png" },
        { worldType: WORLD_END_FLAG, fileName: "/Content/adventureGame/track_endFlag.png" },
        { worldType: WORLD_TREE, fileName: "/Content/adventureGame/track_tree.png" },
        { worldType: WORLD_FLAG, fileName: "/Content/adventureGame/track_flag.png" },
    ];

    picsToLoad = imageList.length;
    for (var index in imageList) {
        if (imageList[index].varName != undefined) {
            beginLoadingImage(imageList[index].varName, imageList[index].fileName);
        }
        else {
            loadImageForWorldCode(imageList[index].worldType, imageList[index].fileName);
        }        
    }
}

function loadImageForWorldCode(worldType, fileName) {
    worldPics[worldType] = document.createElement("img");
    beginLoadingImage(worldPics[worldType], fileName);
}


