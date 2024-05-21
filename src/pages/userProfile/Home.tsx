import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-sm mt-6 text-black">
    <Link
      to="/login"
      className="font-medium text-red-500 hover:text-red-700"
    >
      Click on this to move to Login
    </Link>
  </div>
  )
}

export default Home