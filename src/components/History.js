import { useSelector } from "react-redux";
import HistoryData from "./HistoryData";
const History = () => {

    const history = useSelector(state => state.hist.items);
    // console.log(history[0])
    return(
    <>
        {history.map((items,i)=>
        (
            <HistoryData key={i} data = {items}/>
            
        )
        )}    
    </>
    )
}

export default History;