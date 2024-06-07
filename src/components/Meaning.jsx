import { Component } from "react";
import PropTypes from "prop-types";
class Meaning extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h3 className="font-normal text-2xl relative after:content-[' '] after:absolute after:w-full after:h-[1px] after:left-0 after:top-[18.5px] after:bg-grey-light after:dark:bg-grey-dark  ">
          <span className="relative bg-white dark:bg-dark-bg text-text-light dark:text-white pr-5 z-30">
            {this.props.data.partOfSpeech}
          </span>
        </h3>
        <div>
          <h4 className="text-grey text-xl font-normal mb-4">Meaning</h4>
          <ul className="text-text-light flex flex-col  gap-3 ml-4 dark:text-white">
            {this.props.data.definitions.map((definition, index) => (
              <li className="flex gap-4" key={index}>
                <span className="text-purple">•</span>
                <div className="flex  flex-col gap-3">
                  <p>{definition?.definition}</p>
                  <p className="text-lg font-normal text-grey !leading-6">
                    {definition?.example}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {this.props.data.synonyms.length >= 1 && (
          <div className="flex gap-3">
            <h5 className="text-grey font-normal text-xl">Synonyms</h5>
            <ul className="flex gap-2 flex-wrap text-purple font-bold text-xl">
              {this.props.data.synonyms.map((synonym) => (
                <li
                  key={synonym}
                  className={` after:content-[',']  last-of-type:after:content-[""] `}
                >
                  {synonym}
                </li>
              ))}
            </ul>
          </div>
        )}
        {this.props.data.antonyms >= 1 && (
          <div className="flex gap-3">
            <h5 className="text-grey font-normal text-xl">Antonyms</h5>
            <ul className="flex gap-2 flex-wrap text-purple font-bold text-xl">
              {this.props.data.antonyms.map((antonym) => (
                <li key={antonym} className="after:content-[',']">
                  {antonym}
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}
Meaning.propTypes = {
  data: PropTypes.shape({
    partOfSpeech: PropTypes.string.isRequired,
    definitions: PropTypes.arrayOf(
      PropTypes.shape({
        definition: PropTypes.string,
        example: PropTypes.string,
      })
    ).isRequired,
    synonyms: PropTypes.arrayOf(PropTypes.string).isRequired,
    antonyms: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default Meaning;
