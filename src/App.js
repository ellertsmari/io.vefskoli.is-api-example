import './App.css';
import GetGuides from './components/GetGuides';
import GetReturns from './components/GetReturns';
import { AuthProvider } from "./utils/authContext";

function App() {

  return (
    <AuthProvider>
      <GetGuides></GetGuides>
      <GetReturns></GetReturns>
    </AuthProvider>
  );
}

export default App;
