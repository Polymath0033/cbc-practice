import { Component } from "react";
import logo from "../assets/logo.svg";
import arrow from "../assets/icon-arrow-down.svg";

const fonts = [
  { id: "Inter", name: "Sans Serif" },
  { id: "Lora", name: "Serif" },
  { id: "Inconsolata", name: "Mono" },
];
const getMediaPreference = () => {
  const modePreference = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  if (modePreference) {
    return "dark";
  } else {
    return "light";
  }
};
console.log(getMediaPreference());
const getMode = () => localStorage.getItem("mode") || getMediaPreference();
console.log(getMode());
class Header extends Component {
  constructor() {
    super();
    this.state = {
      font: { name: "Sans Serif", id: "Inter" },
      dropdown: false,
      mode: getMode() === "dark" ? true : false,
    };
  }
  handleDropdown() {
    this.setState({ dropdown: !this.state.dropdown });
  }
  handleFont(font) {
    this.setState(
      (curState) => ({
        font: fonts.find((f) => f.name === font),
        dropdown: !curState.dropdown,
      }),
      () => {
        document.body.style.fontFamily = this.state.font;
      }
    );
  }
  handleMode() {
    this.setState({ mode: !this.state.mode }, () => {
      if (this.state.mode) {
        document.querySelector("html").classList.add("dark");
        localStorage.setItem("mode", "dark");
      } else {
        document.querySelector("html").classList.remove("dark");
        localStorage.setItem("mode", "light");
      }
    });
  }
  componentDidMount() {
    document.body.style.fontFamily = "Inter";
    if (getMode() === "dark") {
      document.querySelector("html").classList.add("dark");
      this.setState({ mode: true });
    } else {
      document.querySelector("html").classList.remove("dark");
      this.setState({ mode: false });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.font !== this.state.font) {
      document.body.style.fontFamily = this.state.font.id;
    }
  }
  render() {
    return (
      <header className="custom-container mx-auto w-[calc(100%_-_32px)] md:w-[737px] bg-white dark:bg-black flex items-center justify-between text-red-500">
        <img src={logo} alt="logo" className="w-8 h-8" />
        <div className="flex">
          <div className="flex gap-2 text-sm md:text-lg pr-5 border-r border-[#E9E9E9] font-bold text-text-light dark:text-white relative items-center">
            <span
              onClick={this.handleDropdown.bind(this)}
              className="cursor-pointer"
            >
              {this.state.font.name}
            </span>
            <button
              className={`${this.state.dropdown ? "rotate-180" : ""}`}
              onClick={this.handleDropdown.bind(this)}
            >
              <img src={arrow} alt="Arrow" />
            </button>
            {this.state.dropdown && (
              <div
                className="fixed left-0 h-screen top-0 w-full z-40 bg-transparent "
                onClick={this.handleDropdown.bind(this)}
              ></div>
            )}
            {this.state.dropdown && (
              <ul className="absolute right-0 px-6 flex gap-4 z-50 flex-col py-6 top-full shadow-[0px_5px_30px_0px_rgba(0,_0,_0,_0.10)] dark:shadow-[0px_5px_30px_0px_#A445ED] mt-2 rounded-2xl w-[152px] bg-white dark:bg-[#1F1F1F]">
                {fonts.map((font) => (
                  <li
                    key={font.id}
                    className={` first-of-type:font-sans last-of-type:font-mono font-serif hover:text-purple cursor-pointer w-full  text-text-light dark:text-white text-base md:text-lg leading-6`}
                    onClick={this.handleFont.bind(this, font.name)}
                  >
                    {font.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="pl-5 flex gap-4">
            <label
              className="relative inline-block w-[44px] h-5  "
              htmlFor="mode"
            >
              <input
                type="checkbox"
                name="mode"
                id="mode"
                checked={this.state.mode}
                onChange={this.handleMode.bind(this)}
                className="w-0 h-0 opacity-0 peer"
              />

              <spanner
                className="absolute peer-checked:bg-[#a546ed] peer-focus:shadow-[0_0_1px_#a546ed] 
              peer-checked:before:translate-x-[20px] cursor-pointer top-0 left-0 right-0 bottom-0
               bg-grey duration-[0.4s] rounded-[34px]
               before:absolute before:h-4 before:w-4 before:left-[4px] before:bottom-[2px] before:bg-white before:rounded-[50%] before:transition-[0.4s] 
               "
              ></spanner>
            </label>
            <i className="text-grey dark:text-purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
                />
              </svg>
            </i>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
