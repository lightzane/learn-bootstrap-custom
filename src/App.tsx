import logo from './logo.svg';

function App() {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center h-100">
      <div className="card mt-3 mb-3 shadow-sm">
        <img src={logo} alt="Sample" className="card-img-top bg-black" height={200} />
        <div className="card-body">

          <button className="btn btn-outline-primary m-auto d-block mb-3">
            <span className="bi bi-star me-2"></span>
            Add to Favorites
          </button>

          <div className="row">

            <div className="col-12 col-md-6">

              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">Firstname</label>
                <input type="text" className="form-control" id="firstname" />
              </div>

            </div>

            <div className="col-12 col-md-6">

              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Lastname</label>
                <input type="text" className="form-control" id="lastname" />
              </div>

            </div>

          </div>

          <div className="row">

            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea className="form-control" id="address" rows={3} />
            </div>

          </div>

          <div className="row mb-3">

            <div className="col-md-6 mb-3">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select" defaultValue='Choose...'>
                <option>Choose...</option>
                <option>...</option>
              </select>
            </div>

            <div className="col-md-2 mb-3">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>

          </div>

          <div className="text-center">
            <button className="btn btn-primary">Button</button>
            <button className="btn btn-outline-primary ms-3">Button</button>
            <span>
              <span className="badge rounded-pill ms-3 text-bg-danger">1005k+</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
