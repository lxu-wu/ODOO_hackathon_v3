import React, { useState, useRef } from 'react';

const VideoRecorder = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideoURL, setRecordedVideoURL] = useState(null);

  const startRecording = () => {
    let chunks = [];
  
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        mediaRecorderRef.current = new MediaRecorder(stream);
  
        mediaRecorderRef.current.ondataavailable = (e) => {
          if (e.data.size > 0) {
            chunks.push(e.data);
          }
        };
  
        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(chunks, { type: 'video/webm;codecs=vp8,opus' });
          const url = URL.createObjectURL(blob);
          setRecordedVideoURL(url);
          console.log(url);
        };
  
        mediaRecorderRef.current.start();
        setIsRecording(true);
      })
      .catch((error) => console.error('Error accessing media devices:', error));
  };
  

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      videoRef.current.srcObject = null;
    }
  };

  const resetRecording = () => {
    setRecordedVideoURL(null);
  };

  return (
    <div>
      <video ref={videoRef} width="640" height="480" autoPlay playsInline></video>
      <div>
        {isRecording ? (
          <button onClick={stopRecording}>Stop Recording</button>
        ) : (
          <>
            {recordedVideoURL ? (
              <>
                <video controls width="640" height="480" src={recordedVideoURL}></video>
                <button onClick={resetRecording}>Record Again</button>
              </>
            ) : (
              <button onClick={startRecording}>Start Recording</button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VideoRecorder;
