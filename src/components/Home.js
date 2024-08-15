import { useState } from "react";
import { Link } from "react-router-dom";
import cities from "../utils/cities.js";
import RequiredData from "./RequiredData.js";
import History from "./History.js";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/HistorySlice.js";

const Home = () => {

    const[city, setCity] = useState("");
    const [data] = useState(cities);
    const [fData, setFData] = useState([]);
    const [history, setHistory] = useState([]);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleClick = () => {
        const filterData = data.filter((data)=>
            (data.name.toLowerCase().includes(city.toLowerCase()))
        );
        // console.log(filterData);
        setFData(filterData);
        setHistory([...history, ...filterData]);
    }

    const handleHistory = () => {
        console.log(history);
        dispatch(addItem(history))
    }
    return (
        <div className="body">
            <div className="home"> 
                <input type="text" placeholder="Enter the city" value={city} onChange={(e)=>handleChange(e)}/>
                <button onClick={handleClick}>Submit</button>
                <ul>
                    {fData.length > 0 && fData.map((info,i)=>(
                        <RequiredData key={i} data = {info}/>
                    ))}
                </ul>
            </div>
            <div className="history">
                <Link to="history"><button onClick={handleHistory}>History</button></Link>
            </div>
        </div>
    )
}

export default Home;