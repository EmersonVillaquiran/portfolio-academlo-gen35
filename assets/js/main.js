import parallax from "./components/parallax.js";
import activeMenu from "./components/selected_menu.js";
import updateCopyrightYear from "./helpers/date_updater.js";
import resetToHome from "./helpers/reload_page.js";
import sendEmail from "./helpers/send__form.js";
import darkTheme from "./helpers/teme_dark.js";
import languaje from "./helpers/change__lenguaje.js";





parallax();

activeMenu();

resetToHome();

updateCopyrightYear();

sendEmail();

darkTheme('.navbar__toggle--darkmode-input', 'dark-mode');







