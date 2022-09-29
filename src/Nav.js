import "./Nav.css";
import img1 from "./Teknorix.png";
import "antd/dist/antd.css";
import { Component } from "react";

export default class Nav extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked:!this.state.clicked })
  }

  render() {
    return (
      
      
      <div>
        
        <nav className="navigation">
          <a className="Tek">
            <img src={img1} />
          </a>

          <a>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a href="https://www.teknorix.com/about-us">About-us</a>
              </li>
              <li>
                <a href="https://www.teknorix.com/careers#/job-list">Careers</a>
              </li>
              <li>
                <a href="https://www.teknorix.com/contact">Contact-us</a>
              </li>
            </ul>
          </a>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>



        </nav>

      </div>
    );
  }
}
