import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import illustration from "../../svg/404.svg";

import { useTranslation } from "react-i18next";

function Error404() {
  const { t, i18n } = useTranslation();

  const redirectSafePlace = () => {
    window.location.replace("/");
  };

  setTimeout(redirectSafePlace, 5 * 1000);

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-6">
      <h1 className="text-3xl font-title">{t("Are you lost?")}</h1>
      <img
        src={illustration}
        alt="Illustration Error 404"
        className="h-96"
      ></img>
      <h2 className="text-2xl font-title">{t("404 - Page Not Found")}</h2>
      <Button>{t("Get back to safe place")}</Button>
      <small className="text-sm opacity-60 underline">
        <a href="/">{t("You will be redirect in 5 sec")}</a>
      </small>
    </div>
  );
}

export default Error404;
