import starIcon from "./star.svg";
import styles from "./style.module.scss";

const Card = () => {
  return (
    <article className={styles.card}>
      <img
        className={styles.img}
        src="./img/objects/01.jpg"
        srcSet="./img/objects/01@2x.jpg 2x"
        alt="image"
      />

      <div className={styles.descWrapper}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Title</h3>
          <div className={styles.rating}>
            <img src={starIcon} alt="Star" />
            5.0
          </div>
        </div>
      </div>

      <p className={styles.desc}>Description</p>
      <p className={styles.date}>Apr 16 – 21</p>
      <p className={styles.price}>
        <strong>$388</strong> night
      </p>
    </article>
  );
};

export default Card;

// 2.53.40