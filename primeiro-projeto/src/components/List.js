import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Logitech" lancamento ={1985}/>
                <Item marca="Razer" lancamento ={2001}/>
                <Item marca="Redragon" lancamento ={2023}/>
                <Item/>
            </ul>
        </>
    )
}

export default List