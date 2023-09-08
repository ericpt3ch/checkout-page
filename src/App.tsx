import DeliveryCard from "./components/DeliveryCard";
import PaymentCard from "./components/PaymentCard";
import TotalCard from "./components/TotalCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-left-container">
        <DeliveryCard />
        <PaymentCard />
      </div>
      <div className="App-right-container">
        <TotalCard />
      </div>
    </div>
  );
}

export default App;
