import { useState } from "react"

function VideoForm({ upvotes, downvotes, setHideComment }) {
  const [upvoteCount, setUpvoteCount] = useState(upvotes)
  const [downvoteCount, setDownvoteCount] = useState(downvotes)

  function handleHideComment() {
    setHideComment(hideComment => !hideComment)
  }

  function handleUpvote() {
    setUpvoteCount(upvoteCount + 1)
  }

  function handleDownvote() {
    setDownvoteCount(downvoteCount + 1)
  }

  return (
    <div>
      <button value={upvoteCount} onClick={handleUpvote}>{upvoteCount} 👍</button>
      <button value={downvoteCount} onClick={handleDownvote}>{downvoteCount} 👎</button>
      <div>
        <button onClick={handleHideComment}>Hide Comments</button>
      </div>
    </div>
  )
}

export default VideoForm