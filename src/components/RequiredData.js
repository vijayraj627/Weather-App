const RequiredData = (props) => {
    // console.log(props)
    return(
        <ul>
                <li> City : {props.data.name}</li>
                <li>Temparature: {props.data.temparature}</li>
                <li>Weather: {props.data.weather}</li>
        </ul>
    )
}

export default RequiredData;