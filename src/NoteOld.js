export const Note = ({id, content, date}) => {
  return (
    <div>
        <p><strong>{id}</strong></p>
        <p>{content}</p>
        <time>{date}</time>
    </div>
  )
}