
const Buscador= ()=>{
    return(
        <>
        <div className="buscador">
        <input className="search" type="search" name="buscador" placeholder="Nombre de álbum" />
        <input className="btnSearch" type="submit" value={"search"} />
        </div>
        </>
    )
}

export default Buscador