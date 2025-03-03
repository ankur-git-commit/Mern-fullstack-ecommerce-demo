import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import styles from '../assets/styles/components.module.css'


function Rating({ value, text }) {
    return (
        <div>
            <span className={styles.ratingIcon}>
                {value >= 1 ? (
                    <FaStar />
                ) : value >= 0.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
                {value >= 2 ? (
                    <FaStar />
                ) : value >= 1.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
                {value >= 3 ? (
                    <FaStar />
                ) : value >= 2.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
                {value >= 4 ? (
                    <FaStar />
                ) : value >= 3.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
                {value >= 5 ? (
                    <FaStar />
                ) : value >= 4.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span className={styles.ratingText}>{text && text}</span>
        </div>
    )
}

export default Rating
