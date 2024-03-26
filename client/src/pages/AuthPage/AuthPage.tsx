import React, { useEffect, useState } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./Authpage.module.css";
import { Button } from "@chakra-ui/react";
export default function AuthPage() {
  const [inputForm, setInputForm] = useState(false);
  const changeFormsHandler = () => {
    setInputForm(!inputForm);
  };
  return (
    <div className={styles.content}>
      <div className={styles.main_screen}>
        {inputForm ? (
          <div className={styles.login}>
            <LoginForm />
            <Button
              type="button"
              colorScheme="blackAlpha"
              variant="outline"
              onClick={changeFormsHandler}
              style={{
                border: "1px solid white",
                color: "white",
                width: "300px",
                borderRadius: "20px",
                marginLeft: '38%',
                position: 'relative',
                marginTop: '-10%',
              }}
            >
              Зарегистрироваться
            </Button>
          </div>
        ) : (
          <div className={styles.register}>
            <RegisterForm />
            <Button
            onClick={changeFormsHandler}
              colorScheme="blackAlpha"
              variant="outline"
              type="submit"
              style={{
                marginTop: '-10%',
                marginLeft: '36%',
                width: "350px",
                borderRadius: "20px",
                color: "white",
              }}
            >
              У меня уже есть аккаунт
            </Button>
          </div>
        )}
      </div>
     </div>
  );
}
