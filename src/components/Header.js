export function Header(props){
    return(
        //functional component
        <div>
            <h1>Header Component {props.name}</h1>
        </div>
    )
}


export function Footer(props){
    return(
        <div>Footer Component {props.brand} </div>
    )
}