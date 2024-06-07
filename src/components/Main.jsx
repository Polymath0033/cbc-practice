import { Component } from "react";
import playIcon from "../assets/icon-play.svg";
import PropTypes from "prop-types";
import Meaning from "./Meaning";
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.loading ? (
          <div className="flex justify-center items-center w-full h-full mt-20">
            <span className="loader"></span>
          </div>
        ) : (
          this.props.dictionary.length >= 1 &&
          this.props.dictionary.map((data, index) => (
            <>
              <main
                key={index}
                className="custom-container mt-5 text-red-500 relative gap-10 flex flex-col mx-auto w-[calc(100%_-_32px)] md:w-[737px]"
              >
                <div className="flex items-center justify-between ">
                  <div className="flex flex-col">
                    <h1 className="text-[64px]  font-bold text-text-light dark:text-white ">
                      {data.word}
                    </h1>
                    <p className="text-2xl font-normal text-purple">
                      {data.phonetic}
                    </p>
                  </div>
                  <i>
                    <img
                      src={playIcon}
                      alt="play icon"
                      className="w-[75px] h-[75px] "
                    />
                  </i>
                </div>
                {data.meanings.map((meaning, index) => (
                  <Meaning key={index} data={meaning} />
                ))}
              </main>
              <footer className="border-t border-border flex flex-col gap-4 md:flex-row py-5 mx-auto w-[calc(100%_-_32px)] md:w-[737px] custom-container mt-5 ">
                <p className="text-border underline text-sm font-normal">
                  Source
                </p>
                <ul className="flex flex-wrap gap-3">
                  {data.sourceUrls.map((source) => (
                    <li key={source}>
                      <a
                        href={source}
                        className="text-text-light underline dark:text-white"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {source}
                      </a>
                    </li>
                  ))}
                </ul>
              </footer>
            </>
          ))
        )}
      </>
    );
  }
}
Main.propTypes = {
  dictionary: PropTypes.array.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool,
};
export default Main;
