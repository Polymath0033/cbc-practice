import { Component } from "react";
import PropTypes from "prop-types";
import searchIcon from "../assets/icon-search.svg";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "keyboard",
      error: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    if (e.key === "Enter" && e.target.value === "") {
      this.setState({ error: true, search: "" });
      this.props.searchHandler(e.target.value);
    } else if (e.key === "Enter") {
      this.setState({ search: e.target.value, error: false });
      this.props.searchHandler(e.target.value);
    }
  }

  render() {
    return (
      <div className="custom-container mt-9 mb-6 relative mx-auto w-[calc(100%_-_32px)] md:w-[737px] flex items-center justify-center">
        <input
          type="search"
          placeholder="Search for any word…"
          onKeyDown={this.handleSearch.bind(this)}
          onChange={this.handleSearch.bind(this)}
          // value={this.state.search}
          className={`px-5 py-4 bg-[#F4F4F4] dark:bg-[#1F1F1F] text-text-light dark:text-white font-bold text-xl placeholder:opacity-25 rounded-2xl w-full outline-none focus:border focus:border-purple  transition-all duration-300 ease-in-out ${
            this.state.error && "!border-[#FF5252]"
          }`}
        />
        <i className="absolute right-4 top-1/2 -translate-y-1/2">
          <img src={searchIcon} alt="search icon" />
        </i>
        {this.state.error && (
          <span className="absolute top-full mt-1 text-[#FF5252] text-start left-0 text-2xl font-normal">
            Whoops, can’t be empty…
          </span>
        )}
      </div>
    );
  }
}
Search.propTypes = {
  searchHandler: PropTypes.func.isRequired,
};
export default Search;
