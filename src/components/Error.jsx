import { Component } from "react";
import PropTypes from "prop-types";
class Error extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex mx-auto custom-container w-[calc(100%_-_64px)] justify-center items-center flex-col gap-4 md:w-[737px] h-full mt-16">
        <span className="text-[64px] font-normal text-text-light dark:text-white">
          😕
        </span>
        <h4 className="text-xl font-bold text-text-light dark:text-white">
          {this.props.title}
        </h4>
        <p className="text-border text-lg font-normal text-center  !leading-6">
          {this.props.message}
          {this.props.resolution}
        </p>
      </div>
    );
  }
}
Error.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  resolution: PropTypes.string.isRequired,
};
export default Error;
