import { Component } from "react";
import Search from "./Search";
import Main from "./Main";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "keyboard",
      dictionary: [],
      error: null,
      loading: false,
    };
  }

  handleSearch = (search) => {
    this.setState({ search });
  };

  async fetchDictionary(search) {
    try {
      this.setState({ loading: true });
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
      );

      const data = await response.json();
      if (!response.ok) {
        const errorData = {
          title: data.title || "Error",
          message: data.message || "Failed to fetch data",
          resolution: data.resolution || "Please try again later.",
        };
        throw errorData;
      }
      this.setState({ dictionary: data, error: null, loading: false });
    } catch (err) {
      const errorObj =
        typeof err === "object" && err !== null
          ? err
          : {
              title: "Error",
              message: "An unexpected error occurred.",
              resolution: "Please try again later.",
            };
      this.setState({
        dictionary: [],
        error: errorObj,
        loading: false,
      });
    }
  }

  componentDidMount() {
    this.fetchDictionary(this.state.search);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      if (this.state.search !== "") {
        this.fetchDictionary(this.state.search);
      } else {
        this.setState({ dictionary: [] });
      }
    }
  }

  render() {
    return (
      <>
        {/* <div className="flex justify-center items-center w-full h-full">
          <span className="loader"></span>
        </div> */}
        <Search searchHandler={this.handleSearch} />
        <Main
          dictionary={this.state.dictionary}
          loading={this.state.loading}
          error={this.state.error}
        />
      </>
    );
  }
}

export default Container;
