export default function PackingList({item, isPacked}){
    return (
        <li className="item">{item} {isPacked && '✔️'} </li>
    )

}