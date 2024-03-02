import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Connection: "Connection",
      Login: "Login",
      Register: "Register",
      "Do you have an account": "Do you have an account",
      "Are you new?": "Are you new?",
      "Create an account": "Create an account",
      "Are you lost?": "Are you lost?",
      "404 - Page Not Found": "404 - Page Not Found",
      "Get back to safe place": "Get back to safe place",
    },
  },
  fr: {
    translation: {
      Connection: "Connexion",
      Login: "Se connecter",
      Register: "S'inscrire",
      "Do you have an account": "Vous avez déjà un Compte",
      "Are you new?": "Vous êtes nouveau ?",
      "Create an account": "Créer un compte",
      "Are you lost?": "Êtes vous perdu ?",
      "404 - Page Not Found": "404 - Page Introuvable",
      "Get back to safe place": "Revenir en lieu sûr",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
