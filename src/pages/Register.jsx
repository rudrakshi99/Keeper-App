import React from "react";
import { RegisterForm } from "../components/account/RegisterForm";
import { Header } from "../components/MainComp/Header";
import { Footer } from "../components/MainComp/Footer";

export const Register = () => {
  return (
    <div>
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
};
