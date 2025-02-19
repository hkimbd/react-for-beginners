import PropTypes from "prop-types"; 
import {Link} from "react-router-dom"; 
import styles from "./Movie.module.css"; 
// Link move from one page to the other w/o refreshing

function Movie({id, coverImg, title, year, summary, genres}) {
    return (
    <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie__img}/>
        <div>
          <h2 style={{transition: 'color 0.3s ease'}} className={styles.movie__title}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <h3 className={styles.movie__year}>{year}</h3>
          <ul className={styles.movie__genres}>
            {genres.map((g) => 
              <li key={g}>{g}</li>
            )}
          </ul>
          <p>{summary.length > 235 ? `${summary.slice(0,235)}...`: summary}</p>
        </div>
      </div>
    ); 
}

Movie.propTypes = {
    id: PropTypes.number.isRequired, 
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}; 

export default Movie; 