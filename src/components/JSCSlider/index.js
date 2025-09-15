import './JSCSlider.css';

function JSCSlider(props) {
  return (
    <div className="JSCSlider" style={{width: props.width}}>
      <input type='range'></input>
    </div>
  );
}

export default JSCSlider;
