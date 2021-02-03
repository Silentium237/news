import React from "react";

const News = ({item}) => {

    const {title, guid, enclosure} = item;

    return (

        <div className="news">

            <h2>{title}</h2>
            <img src={enclosure.link} alt={title}/>
            <a href={guid} target="_blank" rel="noopener noreferrer">
                перейти на TUT.by
            </a>


        </div>

    );
}

export default News;