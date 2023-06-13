// Truy cập vào các thành phần
const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Tiêu đề bài hát, tương ứng với các file mp3
const songs = ["2+3=5", "2AM", "7% (Cover)", "8 Hours", "123 I Love You (English)", "About Us", "All About You"
, "Anh Đánh Rơi Người Yêu Này", "Anh Đâu Có Hay", "Bắt Cóc Con Tim", "Biết Đâu Sau Này", "Buồn Vương Mi", "Cabinet", "Cần Gì Hơn"
, "Can't Breakup Girl, Can't Breakaway Boy", "Can't Take My Eyes Of You", "Casablanca", "Cause I Like You (English Cover)"
, "Cause I Love You", "Chàng Trai Với Nụ Cười Tỏa Nắng", "Chỉ Một Đêm Nữa Thôi", "Chờ Đợi Có Đáng Sợ", "Cho Em Gần Anh Thêm Chút Nữa"
, "Chờ Lời Anh Nói", "Chờ Ngày Mưa Tan", "Closer", "Có Chắc Yêu Là Đây", "Có Đâu Ai Ngờ", "Có Em", "Có Em Chờ"
, "Có Một Người Luôn Cười Khi Anh Đến", "Crush", "Crush 2", "Crying Over You", "Đã Lỡ Yêu Em Nhiều", "Dại Khờ", "Đêm Nay Anh Mơ Về Em"
, "Đêm Trời Cho", "Đi Qua Mùa Hạ", "Đoạn Đường Sao Băng", "Đón Em", "Đông Miên", "Dù Cho Mai Về Sau", "Đừng Về Trễ (Acoustic Version)"
, "Em Còn Nhớ Anh Không", "Em Đã Biết", "Em Đâu Biết", "Em Đừng Đi", "Em Là", "Em Sẽ Là Của Anh", "For Ya", "Galaxy"
, "Giữa Đại Lộ Đông Tây", "Gửi Anh", "Hành Tinh Ánh Sáng", "Haru Haru", "Honest", "Honesty (Remix)", "Honey", "I Wanna Be Your Love"
, "I Wanted You", "In The Rain", "Là Khi Nào Ấy Nhờ", "Lenlala", "Lỡ Say Bye Là Bye (Rap Version)", "Loving You", "Mashup Chờ Ngày Em Đến"
, "Mashup Ex For A Reason x Body Party x Love", "Mặt Mộc", "Messenger", "Mơ", "Mỗi Khi Em Nhìn Anh", "Muốn Nói Với Em (Version Piano)"
, "Nắm Đôi Bàn Tay", "Ngỏ Lời", "Những Kẻ Dại Khờ", "Nobody", "Noel Noem", "Nơi Em Là Bình Yên", "Nơi Này Có Anh", "Nơi Ta Chờ Em"
, "Oh My Heart (Naga Remix)", "Once In A Moon", "Only U (Remix)", "Ooh Just You", "Paris", "Paris In The Rain", "Real Love"
, "Sakura Anata ni Deaete Yokatta", "Sâu Trong Em", "Si Mê You", "So Far Away (Cover)", "Some", "Tại Vì Sao"
, "Tháng Tư Là Lời Nói Dối Của Em", "Tháng Năm", "Thanh Xuân Là Anh", "Thanh Xuân", "The Way I Still Love You", "Thích Em Hơi Nhiều"
, "Thích Hay Là Yêu", "Thiên Thần Tình Yêu", "Thôi Em Đừng Đi", "Thói Quen", "Tình Em Là Đại Dương", "Tiny Love", "To The Moon"
, "Từ Ngày Em Đến", "Từng Ngày Em Mơ Về Anh", "U Got Me Chìm Sâu", "Và Thế Giới Đã Mất Đi Một Người Cô Đơn", "Va Vào Tình Yêu"
, "Vài Lần Đón Đưa", "Vương", "Why Would I Ever", "Yêu Em Rất Nhiều", "Yêu Một Người Có Lẽ", "You(=I)", "Your Smile"];

// Lấy index bất kỳ trong mảng songs để hiện thị
let songIndex = 0;

// Load 1 bài hát theo index
loadSong(songs[songIndex]);

// Cập nhật thông tin bài hát
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

// Play song
function playSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play();
}

// Pause song
function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");

    audio.pause();
}

// Xử lý khi prev bài hát
function prevSong() {
    // Xử lý khi prev bài hát
    songIndex--;

    // Nếu đang là bài hát đầu thì quay lại bài hát cuối
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    // Cập nhật thông tin của bài hát lên giao diện
    loadSong(songs[songIndex]);

    // Phát nhạc
    playSong();
}

// Next song
function nextSong() {
    // Tăng index của songIndex lên 1
    songIndex++;

    // Nếu đang là bài hát cuối thì quay lại bài hát đầu
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    // Cập nhật thông tin của bài hát lên giao diện
    loadSong(songs[songIndex]);

    // Phát nhạc
    playSong();
}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// Lắng nghe sự kiện
playBtn.addEventListener("click", () => {
    // Kiểm tra xem musicContainer có chứa class "play" hay không?
    const isPlaying = musicContainer.classList.contains("play");

    // Nếu có thì thực hiện pause
    // Nếu không thì thực hiện play
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Lắng nghe sự kiện khi next và prev bài hát
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Time/song update
audio.addEventListener("timeupdate", updateProgress);

// Click on progress bar
progressContainer.addEventListener("click", setProgress);

// Lắng nghe sự kiện khi kết thúc bài hát
audio.addEventListener("ended", nextSong);