import Buscador from "./Buscador"
import AlbumList from "./AlbumList"

const Main=()=>{
    return(
        <>
        <main>
            <h1>Buscá tus <strong>álbumes</strong></h1>
            <h3>Encontrá a tus artistas favoritos, gracias a nuestro buscador y guardá tus álbumes favoritos</h3>
            <Buscador/>
            <AlbumList/>
        </main>
        </>
    )
}

export default Main