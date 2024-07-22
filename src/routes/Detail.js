import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"; 
function Detail() {
    const [loading, setLoading] = useState(true); 
    const [detail, setDetail] = useState({}); 
    const { id } = useParams(); 
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json(); 
        setDetail(json.data.movie); 
        setLoading(false);
        console.log(json.data.movie); 
    }

    useEffect(() => {
        getMovie(); 
    }, [id]); 
    return (
        <div className={styles.container}>
            {loading ? (
            <h1 className={styles.loader}>
                Loading...</h1>)
            : (
                <div> 
                    <h1>{detail.title}</h1>    
                    <p>
                        Year: {detail.year}&nbsp;|&nbsp;
                        Date uploaded: {detail.date_uploaded}&nbsp;|&nbsp;
                        Runtime: {detail.runtime} minutes
                    </p>
                    <img src={detail.medium_cover_image}/>
                    <div>
                        <h2>Summary</h2>
                        <p>{detail.description_full}</p>
                    </div>
                    <div>
                        <h2>Genres</h2>
                        <ul>
                            {detail.genres.map((g) => (
                                <li key={g}>{g}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2>Ratings</h2>
                        <ul>
                            <li>IMDb: {detail.rating}</li>
                            <li>Like Counts: {detail.like_count}</li>
                        </ul>
                    </div>      
                </div>   
            )}
        </div>
       
    )
   
}
export default Detail; 

/*
    - loading
    - put json in state
    - -> show details about movies 
    - nav bar? 
*/ 


