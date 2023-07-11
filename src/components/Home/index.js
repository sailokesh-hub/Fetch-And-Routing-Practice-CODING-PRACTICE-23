import BlogsList from '../BlogList'
import './index.css'

const UserInfo = () => (
  <div className="profile-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
      alt="profile"
      className="img"
    />
    <h3>Wade Warren</h3>
    <p className="role">Software Developer, MERN stack developer.</p>
  </div>
)

const Home = () => (
  <div data-testid="loader" className="home-container">
    <UserInfo />
    <BlogsList />
  </div>
)

export default Home
