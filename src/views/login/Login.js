import React,{Component} from "react";
import "./style.css";
import "./font-awesome.css";

class Login extends Component{
   constructor(props) {
        super(props);
        this.state = {
            user_name:"",
            user_pwd:""
        }
    }
    render() {
        return(
            <div className="login-main">
                <header><h1>Snap Up Platfrom</h1></header>
		        <div class="login-form">
                    <h2>login now</h2>
                    <form action="#" method="get">
                        <span><i class="fa fa-user-o" aria-hidden="true"></i></span>
                        <input type="text" name="username" placeholder="enter your name" required=""></input>
                        <span><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                        <input type="password" name="password" placeholder="enter your password" required=""></input>
                        <span><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                        <input type="text" name="password" placeholder="验证码" required=""></input>
                        <input type="submit" value="login"></input>
                    </form>
                    <div class="login-input">
                    </div>
                    {/* <div class="social-icons">
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        </ul> 
			        </div> */}
		        </div>
            </div>
        )
    }
}

export default Login;
