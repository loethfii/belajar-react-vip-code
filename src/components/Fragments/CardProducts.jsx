/* eslint-disable react/prop-types */
import Button from "../Elements/Button";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="border-2 border-gray-200 mx-2  max-w-sm p-2 rounded-xl position-relative">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <div className="w-full max-w-sm max-h-56 overflow-hidden bg-gray-800 border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img src={image} alt="products" />
      </a>
    </div>
  );
};

const Body = ({ title, children }) => {
  return (
    <div className="px-5 py-3 ">
      <a href="#">
        <h2 className="text-xl text-center font-semibold tracking-tight text-orange-800">
          {title}
        </h2>
        <p className="max-h-32 overflow-y-hidden">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { harga } = props;
  return (
    <div className="flex items-center justify-between px-5 py-3  position-absolute bottom-0">
      <span className="text-xl font-bold">Rp. {harga}</span>
      <Button classname="bg-blue-600">Add to card</Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
