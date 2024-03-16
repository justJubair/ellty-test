import "./App.Module.css";
function App() {
  return (
    <>
      <div className="main">
        <div className="container">
          {/* all pages */}
          <div className="all-pages">
            <p>All pages</p>
            <form>
              <label className="checkbox-container">
                <input type="checkbox" name="all-pages" id="" />
                <span className="checkmark"></span>
              </label>
              
            </form>
          </div>

          <div className="row">
            <p>page 1</p>
            <form>
              <label className="checkbox-container">
                <input type="checkbox" name="all-pages" id="" />
                <span className="checkmark"></span>
              </label>
              
            </form>
          </div>

          <div className="row">
            <p>page 2</p>
            <form>
              <label className="checkbox-container">
                <input type="checkbox" name="all-pages" id="" />
                <span className="checkmark"></span>
              </label>
              
            </form>
          </div>

          <div className="row">
            <p>page 3</p>
            <form>
              <label className="checkbox-container">
                <input type="checkbox" name="all-pages" id="" />
                <span className="checkmark"></span>
              </label>
              
            </form>
          </div>

          <div className="row">
            <p>page 4</p>
            <form>
              <label className="checkbox-container">
                <input type="checkbox" name="all-pages" id="" />
                <span className="checkmark"></span>
              </label>
              
            </form>
          </div>
           
           <button className="btn">Done</button>
        </div>
      </div>
    </>
  );
}

export default App;
