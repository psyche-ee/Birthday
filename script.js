const audio = document.getElementById('background-music');

function showLetterPage() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('picturepage').style.display = 'none';
    document.getElementById('letterpage').style.display = 'flex';
    document.getElementById('coverpage').style.display = 'none';
}

function showHomePage() {
    document.getElementById('homepage').style.display = 'flex';
    document.getElementById('letterpage').style.display = 'none';
    document.getElementById('picturepage').style.display = 'none';
    document.getElementById('coverpage').style.display = 'none';
    audio.play();
}

function showPicturePage() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('letterpage').style.display = 'none';
    document.getElementById('picturepage').style.display = 'flex';
    document.getElementById('coverpage').style.display = 'none';
}