import './App.css';
import GetGuides from './components/GetGuides';
import GetReturns from './components/GetReturns';
import GetReviews from './components/GetReviews';
import AddReturn from './components/AddReturn';
import { AuthProvider } from "./utils/authContext";

function App() {

  return (
    <AuthProvider>
      <GetGuides></GetGuides>
      <GetReturns></GetReturns>
      <GetReviews></GetReviews>
      <AddReturn></AddReturn>
    </AuthProvider>
  );
}

export default App;
