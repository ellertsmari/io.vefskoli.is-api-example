import './App.css';
import GetGuides from './components/GetGuides';
import GetReturns from './components/GetReturns';
import GetReviews from './components/GetReviews';
import AddReturn from './components/AddReturn';
import AddReview from './components/AddReview';
import { AuthProvider } from "./utils/authContext";

function App() {

  return (
    <AuthProvider>
      <AddReview></AddReview>
      <GetGuides></GetGuides>
      <GetReturns></GetReturns>
      <GetReviews></GetReviews>
      <AddReturn></AddReturn>
    </AuthProvider>
  );
}

export default App;
