var list = [
    {
        tit: 1,
        name: "Sita Ramam - Hey Sita Hey Rama",
        audio: "./songs/song-1.mp3",
        img: "./images/song-1.jpg",
    },
    {
        tit: 2,
        name: "O Kadhal Kanimani - Mental Manadhil",
        audio: "./songs/song-2.mp3",
        img: "./images/song-2.jpg",
    },
    {
        tit: 3,
        name: "Oh Manapenne - Bodhai Kaname",
        audio: "./songs/song-3.mp3",
        img: "./images/song-3.jpg",
    },
    {
        tit: 4,
        name: "Brahmastra - Kesariya",
        audio: "./songs/song-4.mp3",
        img: "./images/song-4.jpg",
    },
    {
        tit: 5,
        name: "Telugu - Darshana",
        audio: "./songs/song-5.mp3",
        img: "./images/song-5.jpg",
    },
    {
        tit: 6,
        name: "Varisu - Ranjithame",
        audio: "./songs/song-6.mp3",
        img: "./images/song-6.jpeg",
    },
    {
        tit: 7,
        name: "Salmon 3D - Kaadhal En Kaviye",
        audio: "./songs/song-7.mp3",
        img: "./images/song-7.jpg",
    },
    {
        tit: 8,
        name: "Love Today - Ennai Vittu Uyire",
        audio: "./songs/song-8.mp3",
        img: "./images/song-8.jpg",
    },
]


var img = document.querySelector(".image");
var play = document.querySelector(".play");
var pause = document.querySelector(".pause");
var pre = document.querySelector("#prev");
var next = document.querySelector("#next");
var songName = document.querySelector('.name');

var song = new Audio(list[0].audio);
img.src = list[0].img;
songName.innerText = list[0].name;

var count = 0;
next.addEventListener("click", function () {
    count++;
    song.pause();
    play.classList.remove("hide");
    pause.classList.add("hide");
    pre.style.color = "purple"

    if (count < list.length) {
        song = new Audio(list[count].audio);
        img.src = list[count].img;
        songName.innerText = list[count].name;
    }
    else {
        count = list.length - 1
        next.style.color = "#ccc"
    }
});

pre.addEventListener("click", function () {
    count--;
    song.pause();
    play.classList.remove("hide");
    pause.classList.add("hide");
    next.style.color = "purple";

    if (count >= 0) {
        song = new Audio(list[count].audio);
        img.src = list[count].img;
        songName.innerText = list[count].name;
    }
    else {
        count = 0;
        pre.style.color = "#ccc"
    }
});

play.addEventListener("click", function () {
    song.play();
    play.classList.add("hide");
    pause.classList.remove("hide");
});

pause.addEventListener("click", function () {
    song.pause();
    play.classList.remove("hide");
    pause.classList.add("hide");
});