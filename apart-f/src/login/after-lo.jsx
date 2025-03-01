import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login/after.css";

const AfterLogin = () => {
  const [name, setName] = useState(""); 
  const navigate = useNavigate();

 
  useEffect(() => {
    const savedName = sessionStorage.getItem("name");
    if (!savedName) {
      navigate("/login"); 
    } else {
      setName(savedName);
    }
  }, [navigate]);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    navigate("/"); 
  };
   
  

  return (
    <>
      <div className="after-login">
        <div className="name-l-d">
          <p>Hi {name}, thanks for Chosing Community Management.</p>
        </div>
        <div className="c1-login">
          <div className="c2-login">
            <h4 className="hh">Please Fill Personal Details..!</h4>
            <form onSubmit={handleSubmit}>
              <ul className="ui-login">
                <li className="lii-login">
                  <input type="text" placeholder="Block" name="Block" required />
                </li>
                <ul className="ui-login">
                <li className="lii-login">
                  <input type="text" placeholder="Floor No" name="floor" required />
                </li>
              </ul>
              <ul className="ui-login">
                <li className="lii-login">
                  <input type="text" placeholder="Door No" name="door" required />
                </li>
              </ul>
              </ul>
              <ul className="ui-login">
                <li className="lii-login">
                  <input type="text" name="address" placeholder="Address"  required />
                </li>
              </ul>
              <ul className="ui-login">
                <li className="lii-login">
                  <input type="number" placeholder="Pin Code" name="pin" required />
                </li>
              </ul>
              <ul className="ui-login">
                <li className="lii-login">
                  <input type="text" placeholder="State"  name="state" required />
                </li>
              </ul>
              <ul className="ui-login">
                <li className="lii-login">
                  <input type="text" placeholder="Country" name="country"  required />
                </li>
              </ul>
             
              <ul className="but-login">
                <button type="submit">Submit</button>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AfterLogin;
