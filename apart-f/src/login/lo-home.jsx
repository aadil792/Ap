import "../login/lo-home.css";

function Lo_home() {
  return (
    <>
      <div className="l-div">
        <div className="c1-div">
          <div className="c2-div">
            <h4 className="hh">Create Account Here..!</h4>
            <form >
             <ul className="ui-div">
                <li className="lii-div">
                    <input type="text" placeholder="Name" required/>
                </li>
             </ul>
             <ul className="ui-div">
             <li className="lii-div">
                    <input type="password" placeholder="Password" required/>
                </li>
             </ul>
             <ul className="ui-div">
             <li className="lii-div">
                    <input type="email" placeholder="Email" required/>
                </li>
             </ul>
             <ul className="ui-div">
             <li className="lii-div">
                    <input type="number" placeholder="Phone Number" required/>
                </li>
                </ul>
                <ul className="but-d">
                      
                    <button >Submit </button>
               
             </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Lo_home;
