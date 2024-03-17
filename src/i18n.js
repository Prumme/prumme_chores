import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  format as formatDate,
  formatRelative,
  formatDistance,
  isDate,
} from "date-fns";
import { enUS, fr } from "date-fns/locale";

import enUSJSON from "./translations/enUS.json";
import frJSON from "./translations/fr.json";

const locales = { enUS, fr };

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  enUS: { ...enUSJSON },
  fr: { ...frJSON },
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

      format: (value, format, lng) => {
        if (isDate(value)) {
          const locale = locales[lng];

          if (format === "short") return formatDate(value, "P", { locale });
          if (format === "long") return formatDate(value, "PPPP", { locale });
          if (format === "relative")
            return formatRelative(value, new Date(), { locale });
          if (format === "ago")
            return formatDistance(value, new Date(), {
              locale,
              addSuffix: true,
            });

          return formatDate(value, format, { locale });
        }
      },
    },
  });

export default i18n;
