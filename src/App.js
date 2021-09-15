import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Content/>
                </Route>
                <Route path='/profile'>
                    <Content/>
                </Route>


            </Switch>


            <Navbar/>
            <Footer/>
        </div>
    );
}

export default App;
