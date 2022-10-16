import {
  BrowserRouter as Router,
  Switch,//route를 찾는 일, route는 url의미
  Route,
  Link, //link는 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import {BrowserRouter, Routes } from "react-router-dom";

function App() { 
  return ( //switch component는 하나의 route만 렌데링 하기 위해서
    <Router path={`${process.env.PUBLIC_URL}/`} element={Home}>
    <Switch> 
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  )
};
  
//App.js는 이제 새로운 component를 render하게 됨.
//이 컴포넌트는 URL을 보게 되고 url에 따라 home이나 detail을 보여줄 것

export default App;
