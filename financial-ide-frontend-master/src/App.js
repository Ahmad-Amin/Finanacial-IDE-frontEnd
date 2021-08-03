import { BrowserRouter as Router, Route } from "react-router-dom";

import GoalCast from "./Routes/goalcast/goalcast";
import Root from "./Routes/root/Root";

function App() {
  return (
    <Router>
      <main>
        {/* Routes to IDE */}
        {/* This Area Deals with IDE */}

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Root/>
            </>
          )}
        />

        {/* Ends Here */}

        {/* Routes to ForeCasting */}
        {/* This Area Deals with ForeCasting */}

        {/* Ends Here */}

        {/* Routes to GoalCasting */}
        {/* This Area Deals with GoalCasting */}

        <Route path="/goalcast" component={GoalCast} />

        {/* Ends Here */}
      </main>
    </Router>
  );
}

export default App;
