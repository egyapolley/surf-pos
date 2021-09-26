import './App.css';
import SideBar from "./components/UI/SideBar";
import {Redirect, Route, Switch} from "react-router-dom";
import DashBoard from "./components/Menus/DashBoard";
import Transactions from "./components/Menus/Transactions";
import Settings from "./components/Menus/Settings";
import Reports from "./components/Menus/Reports";
import Inventory from "./components/Menus/Inventory";
import {useEffect, useState} from "react";
import Login from "./components/UI/Login";

function App() {

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const jwt = localStorage.getItem("token");
        if (jwt) {
            setIsLogin(true)

        }

    }, [])
    if (!isLogin) return <Login/>
    else return (
        <div className="App">
        <SideBar/>
        <div className="content">
            <Switch>
                <Route path="/dashboard" render={(props) =><DashBoard  {...props} />}/>
                <Route path="/transactions" render={(props) =><Transactions  {...props} />}/>
                <Route path="/settings" render={(props) =><Settings  {...props} />}/>
                <Route path="/reports" render={(props) =><Reports  {...props} />}/>
                <Route path="/inventory" render={(props) =><Inventory  {...props} />}/>
                <Redirect to="/dashboard" from="/" />
            </Switch>
        </div>
    </div>
  );
}

export default App;
