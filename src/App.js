import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";
import News from "./components/News";

function App() {
    const [query, setQuery] = useState("");
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {

        setFilter(
            items.filter(item => {
                return item.title.toLowerCase().includes(query.toLowerCase())
            })
        );
        console.log(setFilter)
    }, [query, items]);

    const url = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.tut.by%2Frss%2Findex.rss`;

    const getData = async () => {
        const result = await Axios.get(url);
        console.log(result);
        setItems(result.data.items);
    };

    const onSubmit = e => {
        e.preventDefault();
        getData();
    };
    return (
        <div className="App">
            <h1>News Searching App</h1>
            <form onSubmit={onSubmit} className="search-form">
                <input
                    type="text"
                    onChange={e => setQuery(e.target.value)}
                    autoComplete="off"
                    placeholder="Search News"
                />
                <input type="submit" value="Search"/>
            </form>
            <div className="newss">
                {filter.map((item, idx) => <News key={idx} item={item}/>)}
            </div>
        </div>
    );
}

export default App;