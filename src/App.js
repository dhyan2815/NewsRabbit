import React, { Component } from 'react'
import Navbar from './Components/Navbar.jsx';
import News from './Components/News.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// Class Based Component
export default class App extends Component {
  pageSize = 4;
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Routes>
          {/* Used Key for unique data fetching everytime the Component Mount's */}
          <Route exact path='/' key="general" element={<News pageSize={this.pageSize} country='us' category='general' />} />
          <Route exact path='/business' key="business" element={<News pageSize={this.pageSize} country='us' category='business' />} />
          <Route exact path='/science' key="science" element={<News pageSize={this.pageSize} country='us' category='science' />} />
          <Route exact path='/health' key="health" element={<News pageSize={this.pageSize} country='us' category='health' />} />
          <Route exact path='/general' key="general" element={<News pageSize={this.pageSize} country='us' category='general' />} />
          <Route exact path='/sports' key="sports" element={<News pageSize={this.pageSize} country='us' category='sports' />} />
          <Route exact path='/entertainment' key="entertainment" element={<News pageSize={this.pageSize} country='us' category='entertainment' />} />
          <Route exact path='/technology' key="technology" element={<News pageSize={this.pageSize} country='us' category='technology' />} />
        </Routes>
      </div>
      </Router>
    )
  }
}