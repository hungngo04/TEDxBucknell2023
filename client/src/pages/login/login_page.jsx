import Header from "../../components/header/header";
import Admin from "./admin/admin";
import Footer from "../../components/footer/footer";
import './login_page.css'

function Login() {
    return (
      <div className="login">
          <Header></Header>
          <Admin></Admin>
          <Footer></Footer>
      </div>
    );
  }
  
export default Login;