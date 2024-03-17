import illustration from "../../svg/auth-illustration.svg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { useTranslation } from "react-i18next";

function Register() {
  const { t, i18n } = useTranslation();

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 py-36">
      <div className="h-full relative hidden lg:flex flex-col items-center justify-center border-r border-primary">
        <h1 className="absolute top-4 text-3xl font-title">Makitklean</h1>
        <img className="w-4/5 " src={illustration} alt="Illustration"></img>
      </div>

      <div className="h-full relative flex flex-col items-center justify-center border-r border-primary">
        <h2 className="absolute top-4 text-3xl font-title">{t("Register")}</h2>
        <div className="w-3/5 space-y-4">
          <Input placeholder="name@exemple.com" type="email" />
          <Input placeholder="password" type="password" />
          <Button className="w-full">{t("Create an account")}</Button>
        </div>
        <div className="flex justify-center space-x-4 items-center my-4 w-3/5">
          <div className="border-b w-full h-[1px]"></div>
          <small className="whitespace-nowrap uppercase opacity-60 text-xs">
            {t("Do you have an account")}
          </small>
          <div className="border-b w-full h-[1px]"></div>
        </div>
        <a className="w-3/5" href="/login">
          <Button className="w-full" variant="outline">
            {t("Login")}
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Register;
