import React from "react";
import "./LoaderLogo.css";
import logo from "../../assets/logo.png"; // Adjust path based on location

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className={`logo-loader ${theme}`}>
        <img src={logo} alt="Logo" className="loader-image" />
      </div>
    );
  }
}

export default LogoLoader;
