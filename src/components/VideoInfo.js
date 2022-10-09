function VideoInfo({ title, views, uploadDate }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{views} Views | {uploadDate}</p>
    </div>
  )
}

export default VideoInfo