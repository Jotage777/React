function Saudacao ({nome}){

    function gerarSaudacao(name){
        return `Olá, ${name}, tudoo bem com você?`
    }
    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao