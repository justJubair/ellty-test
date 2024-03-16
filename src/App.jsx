import { useState } from "react";
import "./App.Module.css";
import toast from "react-hot-toast";

const App = () => {
  

  const [selectAll, setSelectAll] = useState(false);

  // state to hold the values of multiple checkboxes
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  // handle select all checkboxs
  const handleSelectAllChange = (e) => {
    const { checked } = e.target;
    setSelectAll(checked);

    const updatedCheckboxValues = {};
    for (const key in checkboxValues) {
      updatedCheckboxValues[key] = checked;
    }
    setCheckboxValues(updatedCheckboxValues);
  };

  // handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxValues({
      ...checkboxValues,
      [name]: checked,
    });
  };

  // handle unselect all the checkoboxes
  const handleUnselectAll = ()=>{
    if(!checkboxValues.checkbox1 && !checkboxValues.checkbox2 && !checkboxValues.checkbox3 && !checkboxValues.checkbox4){
      return toast.error("Please select any checkbox")
    }
    const updatedCheckboxValues = {};
    for (const key in checkboxValues) {
      updatedCheckboxValues[key] = false;
    }
    setCheckboxValues(updatedCheckboxValues);
    setSelectAll(false)
    toast.success("Reset")
  }

  // handle form submission
  const handlePages = (e) => {
    e.preventDefault();

    
  };
  return (
    <>
      <div className="main">
        <div className="container">
          {/* all pages */}
          <div className="all-pages">
            <p>All pages</p>
            <form>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  className="even-checkbox"
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                />
                <span className="checkmark"></span>
              </label>
            </form>
          </div>

          <form onSubmit={handlePages}>
            <div className="row-collection">
              <div
                className="row"
                style={
                  checkboxValues.checkbox1
                    ? { textDecoration: "line-through" }
                    : {}
                }
              >
                <p>page 1</p>

                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="checkbox1"
                    className="odd-checkbox"
                    checked={checkboxValues.checkbox1}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div
                className="row"
                style={
                  checkboxValues.checkbox2
                    ? { textDecoration: "line-through" }
                    : {}
                }
              >
                <p>page 2</p>

                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="checkbox2"
                    className="even-checkbox"
                    checked={checkboxValues.checkbox2}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div
                className="row"
                style={
                  checkboxValues.checkbox3
                    ? { textDecoration: "line-through" }
                    : {}
                }
              >
                <p>page 3</p>

                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="checkbox3"
                    className="odd-checkbox"
                    checked={checkboxValues.checkbox3}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div
                className="row"
                style={
                  checkboxValues.checkbox4
                    ? { textDecoration: "line-through" }
                    : {}
                }
              >
                <p>page 4</p>

                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="checkbox4"
                    className="even-checkbox"
                    checked={checkboxValues.checkbox4}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div
                className="row"
                style={
                  checkboxValues.checkbox5
                    ? { textDecoration: "line-through" }
                    : {}
                }
              >
                <p>page 5</p>

                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="checkbox5"
                    className="odd-checkbox"
                    checked={checkboxValues.checkbox5}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div
                className="row"
                style={
                  checkboxValues.checkbox6
                    ? { textDecoration: "line-through" }
                    : {}
                }
              >
                <p>page 6</p>

                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="checkbox6"
                    className="even-checkbox"
                    checked={checkboxValues.checkbox6}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              
            </div>

            <button onClick={handleUnselectAll} type="submit" className={`btn`}>
              Done
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
