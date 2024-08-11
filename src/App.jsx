function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">TO-DO List</h1>
        </div>

        <div className="col-8">
          <h5 className="text-end">Done: 1/3</h5>
          <select className="form-control mb-4">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <div className="form-check checkboxes">
            <ul>
              <li>
                <label htmlFor="">
                  <input type="checkbox" className="form-check-input" />
                  Default checkbox
                </label>
                <button className="btn btn-sm btn-outline-danger justify-content-end">
                  Delete
                </button>
              </li>
              <li>
                <label htmlFor="">
                  <input type="checkbox" className="form-check-input" />
                  Default checkbox
                </label>
                <button className="btn btn-sm btn-outline-danger justify-content-end">
                  Delete
                </button>
              </li>
              <li>
                <label htmlFor="">
                  <input type="checkbox" className="form-check-input" />
                  Default checkbox
                </label>
                <button className="btn btn-sm btn-outline-danger justify-content-end">
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <form>
            <h4>Add Task</h4>
            <input
              className="form-control"
              placeholder="Add task"
              type="text"
            />
            <button className="btn btn-secondary w-100 mt-2">
              Add to list
            </button>
          </form>
          <div className="mt-5">
            <button className="btn btn-primary w-100 d-block mb-2">
              Mark all as completed
            </button>
            <button className="btn btn-primary w-100 d-block mb-2">
              Mark all as incomplete
            </button>
            <button className="btn btn-primary w-100 d-block mb-2">
              Reset to initial
            </button>
            <button className="btn btn-primary w-100 d-block mb-2">
              Remove all items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
