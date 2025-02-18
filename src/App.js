
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";


export default class App extends Component {
  pageSize = 20;
  apikey = process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={5}
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress}  apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="business" pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress}  apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress}  apikey={this.apikey} key="sport" pageSize={this.pageSize} country="in" category="sport" />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

