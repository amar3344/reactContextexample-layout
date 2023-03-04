import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const showContentFunction = () => {
        onToggleShowContent()
      }

      const getLeftNavbar = e => {
        onToggleShowLeftNavbar(e.target.value)
      }

      const getRightNavbar = e => {
        onToggleShowRightNavbar(e.target.value)
      }
      return (
        <div className="layout-container">
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="content"
              onChange={showContentFunction}
              checked={showContent}
            />
            <label htmlFor="content">content</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="left-navbar"
              checked={showLeftNavbar}
              onChange={getLeftNavbar}
            />
            <label htmlFor="left-navbar">Left Navbar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="right-navbar"
              onChange={getRightNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="right-navbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
