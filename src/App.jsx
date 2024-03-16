import { useState } from "react";
import "./App.Module.css";


const App=()=> {
  const [selectAll, setSelectAll] = useState(false);
    // state to hold the values of multiple checkboxes
    const [checkboxValues, setCheckboxValues] = useState({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
    })
  

  // handle select all checkboxs
  const handleSelectAllChange = (e)=>{
    const {checked} = e.target;
    setSelectAll(checked);

    const updatedCheckboxValues = {};
    for (const key in checkboxValues){
      updatedCheckboxValues[key] = checked;
    }
    setCheckboxValues(updatedCheckboxValues)
  }


  // handle checkbox change
  const handleCheckboxChange = (e)=>{
    const {name, checked} = e.target;
    setCheckboxValues({
      ...checkboxValues, [name]: checked,
    })
  }

  // handle form submission
  const handlePages = (e)=>{
    e.preventDefault()
   
    console.log(`Checkbox values`, checkboxValues)
  }
  return (
    <>
      <div className="main">
        <div className="container">
          {/* all pages */}
          <div className="all-pages">
            <p>All pages</p>
            <form>
              <label className="checkbox-container">
                <input type="checkbox"  checked={selectAll} onChange={handleSelectAllChange} />
                <span className="checkmark"></span>
              </label>
            </form>
          </div>

          <form onSubmit={handlePages} >
            <div className="row-collection">
            <div className="row" style={checkboxValues.checkbox1 ? { textDecoration: "line-through" } : {}}>
              <p>page 1</p>

              <label className="checkbox-container">
                <input type="checkbox" name="checkbox1" checked={checkboxValues.checkbox1} onChange={handleCheckboxChange}  />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="row" style={checkboxValues.checkbox2 ? { textDecoration: "line-through" } : {}}>
              <p>page 2</p>

              <label className="checkbox-container">
                <input type="checkbox" name="checkbox2" checked={checkboxValues.checkbox2} onChange={handleCheckboxChange}/>
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="row" style={checkboxValues.checkbox3 ? { textDecoration: "line-through" } : {}}>
              <p>page 3</p>

              <label className="checkbox-container">
                <input type="checkbox" name="checkbox3" checked={checkboxValues.checkbox3} onChange={handleCheckboxChange} />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="row" style={checkboxValues.checkbox4 ? { textDecoration: "line-through" } : {}}>
              <p>page 4</p>

              <label className="checkbox-container">
                <input type="checkbox" name="checkbox4" checked={checkboxValues.checkbox4} onChange={handleCheckboxChange} />
                <span className="checkmark"></span>
              </label>
            </div>
            </div>
            
            <button  type="submit" className={`btn`}>Done</button>
          </form>

         
        </div>
      </div>
    </>
  );
}

export default App;
