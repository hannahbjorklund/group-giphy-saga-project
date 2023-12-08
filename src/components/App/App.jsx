import Header from "../Header/Header";
import FavoritesList from "../FavoritesList/FavoritesList";
import SearchPage from "../SearchPage/SearchPage";
import {
  HashRouter as Router,
  Route,
  Link
} from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
