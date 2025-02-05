import styles from "./style.module.scss";

const Card = () => {
  return (
    <article className={styles.card}>
      <img
        className="img"
        src="./img/objects/01.jpg"
        srcset="./img/objects/01@2x.jpg 2x"
        alt="image"
      />

      <div className="descWrapper">
        <div className="titleWrapper">
          <h3 className="title">Title</h3>
          <div className="rating">RATING</div>
        </div>
      </div>

      <p className="desc">Description</p>
      <p className="date">Date</p>
      <p className="price">PRICE</p>
    </article>
  );
};

export default Card;

// 2.21.30