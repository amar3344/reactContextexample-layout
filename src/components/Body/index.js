import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showRightNavbar, showLeftNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-container">
              <p>Left Navbar Menu</p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h6>Content</h6>
              <p>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sec do
                eiusmod tempor incididunt ut labore et dolore magna aliqa.Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar">
              <h1>Right Navbar</h1>
              <p>Ad 1</p>
              <p>Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
