import PropTypes from "prop-types"
function SliderItem({imageSrc}) {
  return (
    <div className="slider-item fade">
    <div className="slider-image">
      <img src={imageSrc} className="img-fluid" alt="" />
    </div>
    <div className="container">
      <p className="slider-title">Summer 2025</p>
      <h2 className="slider-heading">Save Up to 70%</h2>
      <a href="#" className="btn btn-lg btn-primary">
        Explore Now
      </a>
    </div>
  </div>
  );
};

export default SliderItem
SliderItem.propTypes = {
  imageSrc: PropTypes.string,
}