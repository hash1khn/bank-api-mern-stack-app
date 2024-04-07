import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "../../components/Navbar";
import Home from "../../components/Home";
import CreateNewUser from "../../components/CreateNewUser";
import Deposit from "../../components/Deposit";
import Withdraw from "../../components/Withdraw";
//import Login from "../../components/Login";
import UserDetails from "../../components/UserDetails";
//import Balance from "../../components/Balance";
const { Header, Content, Footer } = Layout;

const App = () => {
    return (
        <Router>
            <Layout>
                <Header>
                    <NavBar />
                </Header>
                <Content>
                    <div className="site-layout-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/account" element={<CreateNewUser />} />
                            <Route path="/deposit" element={<Deposit />} />
                            <Route path="/withdraw" element={<Withdraw />} />
                            <Route path="/balance" element={<Balance />} />
                            <Route path="/userdata" element={<UserDetails />} />
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
                </Footer>
            </Layout>
            <ToastContainer />
        </Router>
    );
};

export default App;
