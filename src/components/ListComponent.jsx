import style from "./ItemComponent.module.css";

function ListComponent({ nome, imagem, preco }) {
    return (
        <>
            <ul>
                <li>
                    <h2>{nome}</h2>
                    <img src={imagem} className={style.image}/>
                    <h3 className={style.h3}>{preco}</h3>
                </li>
            </ul>


        </>
    );
}

export default ListComponent;