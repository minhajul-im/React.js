import './Button.css';

const Button = () => {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetEle = document.getElementById('products');

    if (targetEle) {
      const offSetTop = targetEle.offsetTop - 80;

      window.scrollTo({
        top: offSetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <a href="#products" onClick={handleScroll}>
      <button className="btn" type="button">
        <strong>GO TO SEE</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </a>
  );
};

export default Button;