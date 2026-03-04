export const Note = ({id, title, body}) => {
  return (
    <div>
        <p><strong>{id}</strong></p>
        <p>{title}</p>
        <time>{body}</time>
    </div>
  )
}