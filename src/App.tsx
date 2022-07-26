import DropdownField from './components/DropdownField';
import FavoriteButton from './components/FavoriteButton';
import InputField from './components/InputField';
import logo from './logo.svg';

function App() {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center h-100">
      <div className="card mt-3 mb-3 shadow-sm">
        <img src={logo} alt="Sample" className="card-img-top bg-black" height={200} />
        <div className="card-body">

          <FavoriteButton>
            To Favorites
          </FavoriteButton>

          <FavoriteButton />

          <div className="row">
            <div className="col-12 col-md-6">
              <InputField label='Firstname' />
            </div>
            <div className="col-12 col-md-6">
              <InputField label='Lastname' />
            </div>
          </div>

          <div className="row">
            <InputField label='Address' type='textarea' />
          </div>

          <div className="row mb-3">

            <div className="col-md-6 mb-3">
              <InputField label='City' />
            </div>

            <div className="col-md-4 mb-3">
              <DropdownField label='State' options={['Kerala']} />
            </div>

            <div className="col-md-2 mb-3">
              <InputField label='Zip' />
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
