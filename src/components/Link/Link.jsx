import "./style.scss";

const Link = ({ text, style, icon }) => {
  // let cssClass = 'link';
  // cssClass += style === "light" ? " link--light" : "";
  // return (
  //   <a href="#" className={cssClass}>
  //     {text}
  //   </a>
  // );

  return (
    <a href="#" className={`link ${style === "light" ? "link--light" : undefined}`}>
      {/* проверка на наличие иконки */}
      {icon && <img src={icon} alt="" />}   
      {text}
    </a>
  );
};

export default Link;

