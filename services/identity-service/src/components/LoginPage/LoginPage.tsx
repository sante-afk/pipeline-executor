import { useState, type ChangeEvent } from "react";
import "./LoginPage.css";
import { VBox } from "../Layouts/VBox";
import { HBox } from "../Layouts/HBox";

export function LoginPage() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value);
  };

  const handleChangePass = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <>
      <VBox>
        <HBox>
          <label class="customLabel">login</label>
          <input
            type="text"
            value={login}
            onChange={handleChangeLogin}
          ></input>
        </HBox>

        <HBox>
          <label>password</label>
          <input
            type="password"
            class="password"
            value={password}
            onChange={handleChangePass}
          ></input>
        </HBox>
        <button class="customButtom">sign in</button>
      </VBox>
    </>
  );
}
