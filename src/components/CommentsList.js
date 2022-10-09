import Comment from "./Comment"

function CommentsList({ commentCount, comments, hideComment }) {
  
  const displayComments = comments.map(comment => {
    if (!hideComment) {
      return <Comment key={comment.id} comment={comment} />
    } else {
      return null
    }
  })

  return (
    <div>
      <h2>{commentCount} Comments</h2>
      {displayComments}
    </div>
  )
}

export default CommentsList