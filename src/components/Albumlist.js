import Album from "./Album"
import NumberList from "./NumberList"

const AlbumList= () => {
    return(
        <>
        <p className="tituloList">Guardá tus álbumes favoritos de Nombre</p>
        <div className="lista">
            <Album/>
            <Album/>
            <Album/>
            <Album/>
        </div>
        <NumberList/>
        </>
    )
}

export default AlbumList