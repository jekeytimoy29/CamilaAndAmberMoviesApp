import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <p>
            {" "}
            <strong>&copy; Timothy Jake B. Flordelis</strong>
            <br />
            Maharishi International University
            <br />
            Address: 1000 N 4th St., Fairfield, IA, 52557
          </p>
          <p>
            Email:{" "}
            <a href="mailto:timothy.flordelis@miu.edu">
              timothy.flordelis@miu.edu
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
