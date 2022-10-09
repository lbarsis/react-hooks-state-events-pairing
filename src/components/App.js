import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import VideoInfo from "./VideoInfo.js";
import VideoForm from "./VideoForm";
import CommentsList from "./CommentsList"

function App() {
  const [hideComment, setHideComment] = useState(false)


  return (
    <div className="App">
      <Video />
      <VideoInfo title={video.title} views={video.views} uploadDate={video.createdAt} />
      <VideoForm
        upvotes={video.upvotes}
        downvotes={video.downvotes}
        hideComment={hideComment}
        setHideComment={setHideComment}
      />
      <CommentsList commentCount={video.comments.length} comments={video.comments} hideComment={hideComment} />
    </div>
  );
}

export default App;
