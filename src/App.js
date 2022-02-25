import './App.css';
import LoanForm from './Component/Form/LoanForm'
import EmiTable from './Component/Table/EmiTable'
import RentTable from './Component/Table/RentTable'
import EmiDetail from './Component/EmiDetail'
import RentDetail from './Component/RentDetails'
function App(props) {
  return (
    <div className="App">
      <div className="container mt-5">
        <h1>EMI Calculator</h1>
        <div className="row pt-5">
          <div className="col-sm-6">
            <LoanForm />
            <EmiDetail />
            <RentDetail />
            <RentTable />

          </div>
          <div className="col-sm-6">
            <EmiTable />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
