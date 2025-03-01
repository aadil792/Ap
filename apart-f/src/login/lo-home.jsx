import { useState } from "react";
import "../login/lo-home.css";
import { useNavigate } from "react-router-dom";

function Lo_home() {
  const [name, setname] = useState("");
  const navigation = useNavigate();

  const button = (event) => {
    event.preventDefault();

    sessionStorage.setItem("name", name);

    navigation("/nextlogin");
  };

  return (
    <>
      <div className="l-div">
        <div className="c1-div">
          <div className="c2-div">
            <h4 className="hh">Create Account Here..!</h4>
            <form onSubmit={button}>
              {/* add "required" after the submit form completed */}
              <ul className="ui-div">
                <li className="lii-div">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </li>
              </ul>
              <ul className="ui-div">
                <li className="lii-div">
                  <input type="password" placeholder="Password" />
                </li>
              </ul>
              <ul className="ui-div">
                <li className="lii-div">
                  <input type="email" placeholder="Email" />
                </li>
              </ul>
              <ul className="ui-div">
                <li className="lii-div">
                  <input type="number" placeholder="Phone Number" />
                </li>
              </ul>
              <ul className="but-d">
                <button type="submit">Submit </button>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Lo_home;
