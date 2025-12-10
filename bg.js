// Video background
const bgVideo = document.getElementById("bgVideo");

// Replace with your MP4 file (put file in same folder)
bgVideo.src = "1234.mp4";
bgVideo.autoplay = true;
bgVideo.loop = true;
bgVideo.muted = true;
bgVideo.playsInline = true;

bgVideo.play().catch(()=>{
  bgVideo.muted = true;
  bgVideo.play();
});
