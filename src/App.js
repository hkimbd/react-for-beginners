import {
  // HashRouter has # inside url
  BrowserRouter as Router, 
  Switch,
  Route,
} from "react-router-dom"; 
import Home from "./routes/Home"; 
import Detail from "./routes/Detail"; 
export default function App() { // <Switch> => one route at once
  return (
    <Router>
      <Switch> 
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/"> 
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}