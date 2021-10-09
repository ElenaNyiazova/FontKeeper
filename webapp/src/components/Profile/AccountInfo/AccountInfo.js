import React from "react";
import { Link } from "react-router-dom";
import "./AccountInfo.scss";
import Input from "../../../common/Input/Input";

const AccountInfo = () => {
  return (
    <section className="accountInfo">
      <h3 className="h3">Аккаунт</h3>

      <div className="inputsBlock">
        <Input
          className="input"
          name="name"
          label="Как к вам обращаться?"
          placeholder="Повелитель шрифтов"
        />
        <Input
          className="input"
          name="email"
          label="Font-keeper@epam.com"
          placeholder="E-mail"
        />
        <Link className="link" to="/">
          Изменить пароль
        </Link>
        <button className="button secondary">Сохранить</button>
      </div>
    </section>
  );
};

export default AccountInfo;
