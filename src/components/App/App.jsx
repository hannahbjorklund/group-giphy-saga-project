import Header from "../Header/Header";
import FavoritesList from "../FavoritesList/FavoritesList";
import SearchPage from "../SearchPage/SearchPage";
import { HashRouter as Router, Route } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <div>
      <section>

        <Header/>
      </section>
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
