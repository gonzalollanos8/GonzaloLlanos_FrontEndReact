const Album = () => {
    return(
        <div className="albumItem">
            <img src="https://indiehoy.com/wp-content/uploads/2021/11/queen-greatest-hits.jpg" width="240" height="250" alt="album" />
            <p><strong>NOMBRE ALBUM</strong></p>
            <p>PUBLICADO</p>
            <input className="btnSearch" type="submit" value={"+Add album"} />
        </div>
    )
}

export default Album