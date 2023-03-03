import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="react-app">
        <div className="configuration-controller">
          <ConfigurationController />
          <Layout />
        </div>
      </div>
    )
  }
}

export default App
