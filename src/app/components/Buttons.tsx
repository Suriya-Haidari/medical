import React from "react";
import "./index.css";
const Buttons = () => {
  return (
    <div className="frame">
      <div className="grid two-col">
        <div>
          <p>1</p>
          <button className="btn-1">
            <div className="original">Signup</div>
            <div className="letters">
              <span>S</span>
              <span>I</span>
              <span>G</span>
              <span>N</span>
              <span>U</span>
              <span>P</span>
            </div>
          </button>
        </div>
        <div>
          <p>2</p>
          <button className="btn-2">Login</button>
        </div>

        {/* 3 */}
        <div>
          <p>3</p>
          <a style={{ "--clr": "#000" }} className="btn-3" href="#">
            <span className="button__icon-wrapper">
              <svg
                width="10"
                className="button__icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                ></path>
              </svg>

              <svg
                className="button__icon-svg button__icon-svg--copy"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                ></path>
              </svg>
            </span>
            Explore
          </a>
        </div>
        <div>
          <p>4</p>
          <div className="btn-4" data-tooltip="Size: 20Mb">
            <div className="button-wrapper">
              <div className="text">Download</div>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div>
          <p>5</p>
          <button className="btn-5">
            <div className="outline"></div>
            <div className="state state--default">
              <div className="icon">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g style={{ filter: "url(#shadow)" }}>
                    <path
                      d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <filter id="shadow">
                      <feDropShadow
                        dx="0"
                        dy="1"
                        stdDeviation="0.6"
                        floodOpacity="0.5"
                      ></feDropShadow>
                    </filter>
                  </defs>
                </svg>
              </div>
              <p>
                <span style={{ "--i": 0 }}>S</span>
                <span style={{ "--i": 1 }}>e</span>
                <span style={{ "--i": 2 }}>n</span>
                <span style={{ "--i": 3 }}>d</span>
              </p>
            </div>
            <div className="state state--sent">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  strokeWidth="0.5px"
                  stroke="black"
                >
                  <g style={{ filter: "url(#shadow)" }}>
                    <path
                      fill="currentColor"
                      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M10.28 16.2L7.53 13.45C7.24 13.16 7.24 12.68 7.53 12.39C7.82 12.1 8.3 12.1 8.59 12.39L10.78 14.58L15.39 8.39C15.67 8.04 16.16 7.98 16.51 8.26C16.86 8.54 16.92 9.03 16.64 9.38L11.26 16.02C11.12 16.2 10.94 16.31 10.74 16.31C10.56 16.31 10.39 16.23 10.28 16.2Z"
                    ></path>
                  </g>
                  <defs>
                    <filter id="shadow">
                      <feDropShadow
                        dx="0"
                        dy="1"
                        stdDeviation="0.6"
                        floodOpacity="0.5"
                      ></feDropShadow>
                    </filter>
                  </defs>
                </svg>
              </div>
              <p>Sent!</p>
            </div>
          </button>
        </div>
        <div>
          <p>6</p>
          <button className="btn-6">Let's Go</button>
        </div>
        <div>
          <p>7</p>
          <a className="btn-7" href="#">
            <span>Read More</span>
          </a>
        </div>
        <div>
          <p>8</p>
          <button className="btn-8">
            <div>Go Back</div>
            <div className="slices">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div>
          <p>9</p>
          <button className="btn-9">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
