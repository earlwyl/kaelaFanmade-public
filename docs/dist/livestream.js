const platform = "youtube"; // Change this to 'mixer', 'twitch', or 'youtube' as needed
const liveStreamContainer = document.getElementById("live-stream");
const offlineComponent = document.getElementById("offline-component");
let isLive = false;
let youtubeVideoId = null;

function showOfflineComponent() {
  // offlineComponent.style.remove("hidden");
  offlineComponent.style.removeProperty("display");
  // offlineComponent.classList.add("block");
  offlineComponent.style.display = "block";
}

// function fetchYoutubeData() {
//   fetch("/api/youtube/UCZLZ8Jjx_RN2CXloOmgTHVg")
//     .then(async (res) => {
//       const response = await res.json();

//       if (response.items && response.items.length > 0) {
//         const streamInfo = response.items[0];
//         isLive = true;
//         youtubeVideoId = streamInfo.id.videoId;
//         embedIframe();
//       } else {
//         showOfflineComponent();
//       }
//     })
//     .catch((err) => {
//       console.log("Error fetching data from YouTube API: ", err);
//       showOfflineComponent();
//     });
// }

async function fetchYoutubeData() {
  try {
    const response = await fetch("/api/youtube");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from YouTube API:", error);
    return null;
  }
}

// function embedIframe() {
//   liveStreamContainer.innerHTML = "";

//   const iframeWrapper = document.createElement("div");
//   iframeWrapper.className = "iframe-wrapper";
// }

function embedYoutubeStream(videoId) {
  const liveStreamDiv = document.getElementById("live-stream");
  liveStreamDiv.innerHTML = `
    <div class="iframe-wrapper">
      <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `;
}

async function checkAndEmbedStream() {
  const youtubeData = await fetchYoutubeData();
  if (youtubeData && youtubeData.items && youtubeData.items.length > 0) {
    const videoId = youtubeData.items[0].id.videoId;
    embedYoutubeStream(videoId);
  } else {
    showOfflineComponent();
  }
}

checkAndEmbedStream();
