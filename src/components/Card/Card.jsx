import starIcon from "./star.svg";
import styles from "./style.module.scss";

const Card = ({ data }) => {
  // console.log("data", data);

  const { title, desc, rating, price_per_night, dates_available, img, img2x } =
    data;

  return (
    <article className={styles.card}>
      <a className="styles.link" href="#"></a>
      <img
        src={img}
        srcSet={`${img2x} 2x`}
        className={styles.img}
        alt={data.title}
      />

      <div className={styles.descWrapper}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.rating}>
            <img src={starIcon} alt="Star" />
            {rating}
          </div>
        </div>
      </div>

      <p className={styles.desc}>{desc}</p>
      <p className={styles.date}>{dates_available}</p>
      <p className={styles.price}>
        <strong>${price_per_night}</strong> night
      </p>
    </article>
  );
};

export default Card;


