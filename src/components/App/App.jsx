import FavoritesList from "../FavoritesList/FavoritesList";
import SearchPage from "../SearchPage/SearchPage";
import { HashRouter as Router, Route } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <Router>
      <div>
        
        <h1>Giphy Search!</h1>

        <Route exact path="/">
          <SearchPage />
        </Route>

        <Route exact path="/favorites">
          <FavoritesList />
        </Route>

      </div>
    </Router>
  );
}


export default App;
