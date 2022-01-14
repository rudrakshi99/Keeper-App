import React from "react";
import { LoginForm } from "../components/account/LoginForm";
import { Header } from "../components/MainComp/Header";
import { Footer } from "../components/MainComp/Footer";
export const Login = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};
