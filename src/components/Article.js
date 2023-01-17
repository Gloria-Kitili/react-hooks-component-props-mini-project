function Article({
    title,
    date = "March, 29,1996",
    preview,
    minutes
})
{
return(
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <time>{minutes}</time>
    </article>
)
}

export default Article;