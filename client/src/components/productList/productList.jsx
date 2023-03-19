import "./productList.css";
import Product from "./../intro/products/product";
import { products } from "./../../data";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl_texts">
        <h1 className="pl_title">Create & passion. It's me</h1>
        <p className="pl_desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          facilis sed, tenetur perferendis a similique error et? Id quae
          officia, nulla modi?
        </p>
        <div className="pl_list">
          {products.map((item) => (
            <div className="Allcard">
              <h1>{item.title}</h1>
              <Product
                key={item.id}
                img={item.img}
                link={item.link}
                desc={item.desc}
              />
              <p>{item.desc}</p>
              {item.video ? (
                <a className="videoLink" href={item.video}>
                  Click for intro video
                </a>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
