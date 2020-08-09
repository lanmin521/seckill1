import React,{Component} from "react";
import { Link } from 'react-router-dom';
import "./style.css";
import "./font-awesome.css";
import { Button } from "antd";

class Login extends Component{
   constructor(props) {
        super(props);
        this.state = {
            user_name:"",
            user_pwd:"",
            //跳转路径
            linkpath:""
        }
        this.userChange = this.userChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);
        this.submit = this.submit.bind(this);

    }

/**
 * 获取输入框用户名密码，赋给state
*/
userChange(e){
    this.setState({ user_name : e.target.value });
}
passwordChange(e){
    this.setState({ user_pwd : e.target.value });
}

submit(){
    console.log(this.state.user_name);
    console.log(this.state.user_pwd);
    // 调用api验证用户名和密码
    let name = this.state.user_name;
    let password = this.state.user_pwd;
    if(name === "Root" && password === "Root"){
        //跳转admin界面
        this.setState({
            linkpath: "admin"
        })

    }else{
        //普通用户 跳转用户秒杀界面
        this.setState({
            linkpath: "customer"
        })

    }
    
}

// componentDidMount(){
//     let user_name = this.state.user_name;
//     let userpwd = this.state.user_pwd;
    
// }
    render() {
        return(
            <div className="login-main">
                <header><h1>Snap Up Platfrom</h1></header>
		        <div className="login-form">
                    <h2>login now</h2>
                    <div>
                    {/* <form action="#" method="get">  改成div 阻止表单默认提交*/}
                        <span><i className="fa fa-user-o" aria-hidden="true"></i></span>
                        <input type="text" name="username" 
                        placeholder="enter your name" 
                        required=""
                        onChange={this.userChange}
                        ></input>
                        <span><i className="fa fa-unlock-alt" aria-hidden="true"></i></span>
                        <input type="password" name="password" 
                        placeholder="enter your password" 
                        required=""
                        onChange={this.passwordChange}></input>

                        {/* <span><i className="fa fa-unlock-alt" aria-hidden="true"></i></span> */}
                        {/* <input type="text" name="password" placeholder="验证码" required=""></input> */}
                        {/* <Button value="login" onClick={this.submit} ></Button> */}
            
                        {/* <Link to ={`/${this.state.linkpath}`}> */}
                        <Link to ="/customer">
                            <input type="submit" value="login" onClick={this.submit}></input>
                        </Link>
                    </div>
                    <div className="login-input">
                    </div>
                    {/* <div className="social-icons">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        </ul> 
			        </div> */}
		        </div>
            </div>
        )
    }
}

export default Login;
