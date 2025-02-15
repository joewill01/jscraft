import './style.css';

function JSCButton(props) {
  return (
    <div className="JSCButton" style={{width: props.width}}>
      <span className="JSCButton__bg JSCButton__bg--left"></span>
      <span className="JSCButton__bg JSCButton__bg--right"></span>
      <p className="JSCButton__text">{props.children}</p>
    </div>
  );
}

export default JSCButton;
