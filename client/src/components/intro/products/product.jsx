import "./product.css";
const Product = ({ img, link, desc }) => {
  return (
    <div className="p">
      <div className="p_browser">
        <div className="p_circle"></div>
        <div className="p_circle"></div>
        <div className="p_circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p_img" />
      </a>
    </div>
  );
};

export default Product;
