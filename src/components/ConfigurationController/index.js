import './index.css'

const ConfigurationController = () => (
  <div className="layout-container">
    <h1>Layout</h1>
    <div>
      <input type="checkbox" id="content" />
      <label htmlFor="content">content</label>
    </div>
    <div>
      <input type="checkbox" id="left-navbar" />
      <label htmlFor="left-navbar">Left Navbar</label>
    </div>
    <div>
      <input type="checkbox" id="right-navbar" />
      <label htmlFor="right-navbar">Right Navbar</label>
    </div>
  </div>
)

export default ConfigurationController
