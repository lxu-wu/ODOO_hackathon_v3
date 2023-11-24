const videoButton = document.getElementById('main__video-button');
const video = document.getElementById('main__video');

let mediaRecorder;

async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    });
    startWebcam(stream);
  } catch (err) {
    console.log('Error retrieving a media device.');
    console.log(err);
  }
}

function startWebcam(stream) {
  window.stream = stream;
  video.srcObject = stream;
}

videoButton.onclick = () => {
  switch (videoButton.textContent) {
    case 'Record':
      startRecording();
      videoButton.textContent = 'Stop';
      break;
    case 'Stop':
      videoButton.textContent = 'Record';
      stopRecording();
      break;
  }
}

function startRecording() {
    if (video.srcObject === null) {
      video.srcObject = window.stream;
    }
  
    try {
      mediaRecorder = new MediaRecorder(window.stream, { mimeType: 'video/webm;codecs=vp8,opus' });
      mediaRecorder.start();
      mediaRecorder.ondataavailable = recordVideo;
    } catch (e) {
      console.error('Error creating MediaRecorder:', e);
    }
  }
  

function recordVideo(event) {
  if (event.data && event.data.size > 0) {
    video.srcObject = null;
    let videoUrl = URL.createObjectURL(event.data);
    video.src = videoUrl;
  }
}

function stopRecording() {
    console.log('stopRecording called');
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
}
  
init();