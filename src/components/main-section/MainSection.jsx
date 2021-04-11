import React from "react";
import { withRouter } from "react-router";
import sticker from "../../assets/sticker1.jpg";
import "./main-section.scss";
const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={sticker} alt="sticker" />
        </div>
        <div className="ms-m-description">
          <h2>Designed for alex</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
      <button
        className="button is-black"
        id="shop-now"
        onClick={() => history.push("/product/1")}
      >
        Pokemon Sticker
      </button>
    </div>
  );
};

export default withRouter(MainSection);
