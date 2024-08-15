const HistoryData = (props) => {
    console.log(props)
    return ( 
        <div>
            <li> City : {props.data.name}</li>
            <li>Temparature: {props.data.temparature}</li>
            <li>Weather: {props.data.weather}</li>
        </div>
    )
}

export default HistoryData; 