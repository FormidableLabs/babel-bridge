'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var sanity = require('sanity');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var sanityPluginUtils = require('sanity-plugin-utils');
var localeEmoji = require('locale-emoji');
var icons = require('@sanity/icons');
var ui = require('@sanity/ui');
function _interopDefaultCompat(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    default: e
  };
}
var localeEmoji__default = /*#__PURE__*/_interopDefaultCompat(localeEmoji);
const DEFAULT_CONFIG = {
  apiKey: "",
  apiVersion: ( /* @__PURE__ */new Date()).toISOString().split("T")[0]
};
const LOCALES = {
  "zh-CN": {
    name: "Chinese (China)",
    native: "\u4E2D\u6587(\u4E2D\u56FD)"
  },
  "zh-TW": {
    name: "Chinese (Traditional, Taiwan)",
    native: "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF0C\u53F0\u7063\uFF09"
  },
  af: {
    name: "Afrikaans",
    native: "Afrikaans"
  },
  "af-NA": {
    name: "Afrikaans (Namibia)",
    native: "Afrikaans (Namibi\xEB)"
  },
  "af-ZA": {
    name: "Afrikaans (South Africa)",
    native: "Afrikaans (Suid-Afrika)"
  },
  agq: {
    name: "Aghem",
    native: "Aghem"
  },
  "agq-CM": {
    name: "Aghem (Cameroon)",
    native: "Aghem (K\xE0m\xE0l\xFB\u014B)"
  },
  ak: {
    name: "Akan",
    native: "Akan"
  },
  "ak-GH": {
    name: "Akan (Ghana)",
    native: "Akan (Gaana)"
  },
  am: {
    name: "Amharic",
    native: "\u12A0\u121B\u122D\u129B"
  },
  "am-ET": {
    name: "Amharic (Ethiopia)",
    native: "\u12A0\u121B\u122D\u129B (\u12A2\u1275\u12EE\u1335\u12EB)"
  },
  ar: {
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  "ar-001": {
    name: "Arabic (World)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0639\u0627\u0644\u0645)"
  },
  "ar-AE": {
    name: "Arabic (United Arab Emirates)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629)"
  },
  "ar-BH": {
    name: "Arabic (Bahrain)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0628\u062D\u0631\u064A\u0646)"
  },
  "ar-DJ": {
    name: "Arabic (Djibouti)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u062C\u064A\u0628\u0648\u062A\u064A)"
  },
  "ar-DZ": {
    name: "Arabic (Algeria)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u062C\u0632\u0627\u0626\u0631)"
  },
  "ar-EG": {
    name: "Arabic (Egypt)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0645\u0635\u0631)"
  },
  "ar-EH": {
    name: "Arabic (Western Sahara)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u063A\u0631\u0628\u064A\u0629)"
  },
  "ar-ER": {
    name: "Arabic (Eritrea)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0625\u0631\u064A\u062A\u0631\u064A\u0627)"
  },
  "ar-IL": {
    name: "Arabic (Israel)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0625\u0633\u0631\u0627\u0626\u064A\u0644)"
  },
  "ar-IQ": {
    name: "Arabic (Iraq)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0639\u0631\u0627\u0642)"
  },
  "ar-JO": {
    name: "Arabic (Jordan)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0623\u0631\u062F\u0646)"
  },
  "ar-KM": {
    name: "Arabic (Comoros)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631)"
  },
  "ar-KW": {
    name: "Arabic (Kuwait)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0643\u0648\u064A\u062A)"
  },
  "ar-LB": {
    name: "Arabic (Lebanon)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0644\u0628\u0646\u0627\u0646)"
  },
  "ar-LY": {
    name: "Arabic (Libya)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0644\u064A\u0628\u064A\u0627)"
  },
  "ar-MA": {
    name: "Arabic (Morocco)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0645\u063A\u0631\u0628)"
  },
  "ar-MR": {
    name: "Arabic (Mauritania)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627)"
  },
  "ar-OM": {
    name: "Arabic (Oman)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0639\u064F\u0645\u0627\u0646)"
  },
  "ar-PS": {
    name: "Arabic (Palestinian Territories)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0623\u0631\u0627\u0636\u064A \u0627\u0644\u0641\u0644\u0633\u0637\u064A\u0646\u064A\u0629)"
  },
  "ar-QA": {
    name: "Arabic (Qatar)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0642\u0637\u0631)"
  },
  "ar-SA": {
    name: "Arabic (Saudi Arabia)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629)"
  },
  "ar-SD": {
    name: "Arabic (Sudan)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0633\u0648\u062F\u0627\u0646)"
  },
  "ar-SO": {
    name: "Arabic (Somalia)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0635\u0648\u0645\u0627\u0644)"
  },
  "ar-SS": {
    name: "Arabic (South Sudan)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646)"
  },
  "ar-SY": {
    name: "Arabic (Syria)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0633\u0648\u0631\u064A\u0627)"
  },
  "ar-TD": {
    name: "Arabic (Chad)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u062A\u0634\u0627\u062F)"
  },
  "ar-TN": {
    name: "Arabic (Tunisia)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u062A\u0648\u0646\u0633)"
  },
  "ar-YE": {
    name: "Arabic (Yemen)",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u064A\u0645\u0646)"
  },
  as: {
    name: "Assamese",
    native: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"
  },
  "as-IN": {
    name: "Assamese (India)",
    native: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE (\u09AD\u09BE\u09B0\u09A4)"
  },
  asa: {
    name: "Asu",
    native: "Kipare"
  },
  "asa-TZ": {
    name: "Asu (Tanzania)",
    native: "Kipare (Tadhania)"
  },
  ast: {
    name: "Asturian",
    native: "asturianu"
  },
  "ast-ES": {
    name: "Asturian (Spain)",
    native: "asturianu (Espa\xF1a)"
  },
  az: {
    name: "Azerbaijani",
    native: "az\u0259rbaycan"
  },
  "az-Cyrl": {
    name: "Azerbaijani (Cyrillic)",
    native: "\u0430\u0437\u04D9\u0440\u0431\u0430\u0458\u04B9\u0430\u043D (\u041A\u0438\u0440\u0438\u043B)"
  },
  "az-Cyrl-AZ": {
    name: "Azerbaijani (Cyrillic, Azerbaijan)",
    native: "\u0430\u0437\u04D9\u0440\u0431\u0430\u0458\u04B9\u0430\u043D (\u041A\u0438\u0440\u0438\u043B, \u0410\u0437\u04D9\u0440\u0431\u0430\u0458\u04B9\u0430\u043D)"
  },
  "az-Latn": {
    name: "Azerbaijani (Latin)",
    native: "az\u0259rbaycan (lat\u0131n)"
  },
  "az-Latn-AZ": {
    name: "Azerbaijani (Latin, Azerbaijan)",
    native: "az\u0259rbaycan (lat\u0131n, Az\u0259rbaycan)"
  },
  bas: {
    name: "Basaa",
    native: "\u0181\xE0s\xE0a"
  },
  "bas-CM": {
    name: "Basaa (Cameroon)",
    native: "\u0181\xE0s\xE0a (K\xE0m\u025B\u0300r\xFBn)"
  },
  be: {
    name: "Belarusian",
    native: "\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
  },
  "be-BY": {
    name: "Belarusian (Belarus)",
    native: "\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)"
  },
  bem: {
    name: "Bemba",
    native: "Ichibemba"
  },
  "bem-ZM": {
    name: "Bemba (Zambia)",
    native: "Ichibemba (Zambia)"
  },
  bez: {
    name: "Bena",
    native: "Hibena"
  },
  "bez-TZ": {
    name: "Bena (Tanzania)",
    native: "Hibena (Hutanzania)"
  },
  bg: {
    name: "Bulgarian",
    native: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
  },
  "bg-BG": {
    name: "Bulgarian (Bulgaria)",
    native: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)"
  },
  bm: {
    name: "Bambara",
    native: "bamanakan"
  },
  "bm-ML": {
    name: "Bambara (Mali)",
    native: "bamanakan (Mali)"
  },
  bn: {
    name: "Bangla",
    native: "\u09AC\u09BE\u0982\u09B2\u09BE"
  },
  "bn-BD": {
    name: "Bangla (Bangladesh)",
    native: "\u09AC\u09BE\u0982\u09B2\u09BE (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)"
  },
  "bn-IN": {
    name: "Bangla (India)",
    native: "\u09AC\u09BE\u0982\u09B2\u09BE (\u09AD\u09BE\u09B0\u09A4)"
  },
  bo: {
    name: "Tibetan",
    native: "\u0F56\u0F7C\u0F51\u0F0B\u0F66\u0F90\u0F51\u0F0B"
  },
  "bo-CN": {
    name: "Tibetan (China)",
    native: "\u0F56\u0F7C\u0F51\u0F0B\u0F66\u0F90\u0F51\u0F0B (\u0F62\u0F92\u0FB1\u0F0B\u0F53\u0F42)"
  },
  "bo-IN": {
    name: "Tibetan (India)",
    native: "\u0F56\u0F7C\u0F51\u0F0B\u0F66\u0F90\u0F51\u0F0B (\u0F62\u0F92\u0FB1\u0F0B\u0F42\u0F62\u0F0B)"
  },
  br: {
    name: "Breton",
    native: "brezhoneg"
  },
  "br-FR": {
    name: "Breton (France)",
    native: "brezhoneg (Fra\xF1s)"
  },
  brx: {
    name: "Bodo",
    native: "\u092C\u0921\u093C\u094B"
  },
  "brx-IN": {
    name: "Bodo (India)",
    native: "\u092C\u0921\u093C\u094B (\u092D\u093E\u0930\u0924)"
  },
  bs: {
    name: "Bosnian",
    native: "bosanski"
  },
  "bs-Cyrl": {
    name: "Bosnian (Cyrillic)",
    native: "\u0431\u043E\u0441\u0430\u043D\u0441\u043A\u0438 (\u045B\u0438\u0440\u0438\u043B\u0438\u0446\u0430)"
  },
  "bs-Cyrl-BA": {
    name: "Bosnian (Cyrillic, Bosnia & Herzegovina)",
    native: "\u0431\u043E\u0441\u0430\u043D\u0441\u043A\u0438 (\u045B\u0438\u0440\u0438\u043B\u0438\u0446\u0430, \u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)"
  },
  "bs-Latn": {
    name: "Bosnian (Latin)",
    native: "bosanski (latinica)"
  },
  "bs-Latn-BA": {
    name: "Bosnian (Latin, Bosnia & Herzegovina)",
    native: "bosanski (latinica, Bosna i Hercegovina)"
  },
  ca: {
    name: "Catalan",
    native: "catal\xE0"
  },
  "ca-AD": {
    name: "Catalan (Andorra)",
    native: "catal\xE0 (Andorra)"
  },
  "ca-ES": {
    name: "Catalan (Spain)",
    native: "catal\xE0 (Espanya)"
  },
  "ca-FR": {
    name: "Catalan (France)",
    native: "catal\xE0 (Fran\xE7a)"
  },
  "ca-IT": {
    name: "Catalan (Italy)",
    native: "catal\xE0 (It\xE0lia)"
  },
  ccp: {
    name: "Chakma",
    native: "\u{1110C}\u{1110B}\u{11134}\u{1111F}\u{11133}\u{11126}"
  },
  "ccp-BD": {
    name: "Chakma (Bangladesh)",
    native: "\u{1110C}\u{1110B}\u{11134}\u{1111F}\u{11133}\u{11126} (\u{1111D}\u{11101}\u{11123}\u{11118}\u{1112C}\u{1110C}\u{11134})"
  },
  "ccp-IN": {
    name: "Chakma (India)",
    native: "\u{1110C}\u{1110B}\u{11134}\u{1111F}\u{11133}\u{11126} (\u{1111E}\u{11122}\u{11127}\u{11116}\u{11134})"
  },
  ce: {
    name: "Chechen",
    native: "\u043D\u043E\u0445\u0447\u0438\u0439\u043D"
  },
  "ce-RU": {
    name: "Chechen (Russia)",
    native: "\u043D\u043E\u0445\u0447\u0438\u0439\u043D (\u0420\u043E\u0441\u0441\u0438)"
  },
  cgg: {
    name: "Chiga",
    native: "Rukiga"
  },
  "cgg-UG": {
    name: "Chiga (Uganda)",
    native: "Rukiga (Uganda)"
  },
  chr: {
    name: "Cherokee",
    native: "\u13E3\u13B3\u13A9"
  },
  "chr-US": {
    name: "Cherokee (United States)",
    native: "\u13E3\u13B3\u13A9 (\u13CC\u13CA \u13A2\u13F3\u13BE\u13B5\u13CD\u13D4\u13C5 \u13CD\u13A6\u13DA\u13A9)"
  },
  ckb: {
    name: "Central Kurdish",
    native: "\u06A9\u0648\u0631\u062F\u06CC\u06CC \u0646\u0627\u0648\u06D5\u0646\u062F\u06CC"
  },
  "ckb-IQ": {
    name: "Central Kurdish (Iraq)",
    native: "\u06A9\u0648\u0631\u062F\u06CC\u06CC \u0646\u0627\u0648\u06D5\u0646\u062F\u06CC (\u0639\u06CE\u0631\u0627\u0642)"
  },
  "ckb-IR": {
    name: "Central Kurdish (Iran)",
    native: "\u06A9\u0648\u0631\u062F\u06CC\u06CC \u0646\u0627\u0648\u06D5\u0646\u062F\u06CC (\u0626\u06CE\u0631\u0627\u0646)"
  },
  cs: {
    name: "Czech",
    native: "\u010De\u0161tina"
  },
  "cs-CZ": {
    name: "Czech (Czechia)",
    native: "\u010De\u0161tina (\u010Cesko)"
  },
  cy: {
    name: "Welsh",
    native: "Cymraeg"
  },
  "cy-GB": {
    name: "Welsh (United Kingdom)",
    native: "Cymraeg (Y Deyrnas Unedig)"
  },
  da: {
    name: "Danish",
    native: "dansk"
  },
  "da-DK": {
    name: "Danish (Denmark)",
    native: "dansk (Danmark)"
  },
  "da-GL": {
    name: "Danish (Greenland)",
    native: "dansk (Gr\xF8nland)"
  },
  dav: {
    name: "Taita",
    native: "Kitaita"
  },
  "dav-KE": {
    name: "Taita (Kenya)",
    native: "Kitaita (Kenya)"
  },
  de: {
    name: "German",
    native: "Deutsch"
  },
  "de-AT": {
    name: "German (Austria)",
    native: "Deutsch (\xD6sterreich)"
  },
  "de-BE": {
    name: "German (Belgium)",
    native: "Deutsch (Belgien)"
  },
  "de-CH": {
    name: "German (Switzerland)",
    native: "Deutsch (Schweiz)"
  },
  "de-DE": {
    name: "German (Germany)",
    native: "Deutsch (Deutschland)"
  },
  "de-IT": {
    name: "German (Italy)",
    native: "Deutsch (Italien)"
  },
  "de-LI": {
    name: "German (Liechtenstein)",
    native: "Deutsch (Liechtenstein)"
  },
  "de-LU": {
    name: "German (Luxembourg)",
    native: "Deutsch (Luxemburg)"
  },
  dje: {
    name: "Zarma",
    native: "Zarmaciine"
  },
  "dje-NE": {
    name: "Zarma (Niger)",
    native: "Zarmaciine (Ni\u017Eer)"
  },
  dsb: {
    name: "Lower Sorbian",
    native: "dolnoserb\u0161\u0107ina"
  },
  "dsb-DE": {
    name: "Lower Sorbian (Germany)",
    native: "dolnoserb\u0161\u0107ina (Nimska)"
  },
  dua: {
    name: "Duala",
    native: "du\xE1l\xE1"
  },
  "dua-CM": {
    name: "Duala (Cameroon)",
    native: "du\xE1l\xE1 (Cameroun)"
  },
  dyo: {
    name: "Jola-Fonyi",
    native: "joola"
  },
  "dyo-SN": {
    name: "Jola-Fonyi (Senegal)",
    native: "joola (Senegal)"
  },
  dz: {
    name: "Dzongkha",
    native: "\u0F62\u0FAB\u0F7C\u0F44\u0F0B\u0F41"
  },
  "dz-BT": {
    name: "Dzongkha (Bhutan)",
    native: "\u0F62\u0FAB\u0F7C\u0F44\u0F0B\u0F41\u0F0D (\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0D)"
  },
  ebu: {
    name: "Embu",
    native: "K\u0129embu"
  },
  "ebu-KE": {
    name: "Embu (Kenya)",
    native: "K\u0129embu (Kenya)"
  },
  ee: {
    name: "Ewe",
    native: "E\u028Begbe"
  },
  "ee-GH": {
    name: "Ewe (Ghana)",
    native: "E\u028Begbe (Ghana nutome)"
  },
  "ee-TG": {
    name: "Ewe (Togo)",
    native: "E\u028Begbe (Togo nutome)"
  },
  el: {
    name: "Greek",
    native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
  },
  "el-CY": {
    name: "Greek (Cyprus)",
    native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)"
  },
  "el-GR": {
    name: "Greek (Greece)",
    native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)"
  },
  en: {
    name: "English",
    native: "English"
  },
  "en-001": {
    name: "English (World)",
    native: "English (World)"
  },
  "en-150": {
    name: "English (Europe)",
    native: "English (Europe)"
  },
  "en-AG": {
    name: "English (Antigua & Barbuda)",
    native: "English (Antigua & Barbuda)"
  },
  "en-AI": {
    name: "English (Anguilla)",
    native: "English (Anguilla)"
  },
  "en-AS": {
    name: "English (American Samoa)",
    native: "English (American Samoa)"
  },
  "en-AT": {
    name: "English (Austria)",
    native: "English (Austria)"
  },
  "en-AU": {
    name: "English (Australia)",
    native: "English (Australia)"
  },
  "en-BB": {
    name: "English (Barbados)",
    native: "English (Barbados)"
  },
  "en-BE": {
    name: "English (Belgium)",
    native: "English (Belgium)"
  },
  "en-BI": {
    name: "English (Burundi)",
    native: "English (Burundi)"
  },
  "en-BM": {
    name: "English (Bermuda)",
    native: "English (Bermuda)"
  },
  "en-BS": {
    name: "English (Bahamas)",
    native: "English (Bahamas)"
  },
  "en-BW": {
    name: "English (Botswana)",
    native: "English (Botswana)"
  },
  "en-BZ": {
    name: "English (Belize)",
    native: "English (Belize)"
  },
  "en-CA": {
    name: "English (Canada)",
    native: "English (Canada)"
  },
  "en-CC": {
    name: "English (Cocos [Keeling] Islands)",
    native: "English (Cocos [Keeling] Islands)"
  },
  "en-CH": {
    name: "English (Switzerland)",
    native: "English (Switzerland)"
  },
  "en-CK": {
    name: "English (Cook Islands)",
    native: "English (Cook Islands)"
  },
  "en-CM": {
    name: "English (Cameroon)",
    native: "English (Cameroon)"
  },
  "en-CX": {
    name: "English (Christmas Island)",
    native: "English (Christmas Island)"
  },
  "en-CY": {
    name: "English (Cyprus)",
    native: "English (Cyprus)"
  },
  "en-DE": {
    name: "English (Germany)",
    native: "English (Germany)"
  },
  "en-DG": {
    name: "English (Diego Garcia)",
    native: "English (Diego Garcia)"
  },
  "en-DK": {
    name: "English (Denmark)",
    native: "English (Denmark)"
  },
  "en-DM": {
    name: "English (Dominica)",
    native: "English (Dominica)"
  },
  "en-ER": {
    name: "English (Eritrea)",
    native: "English (Eritrea)"
  },
  "en-FI": {
    name: "English (Finland)",
    native: "English (Finland)"
  },
  "en-FJ": {
    name: "English (Fiji)",
    native: "English (Fiji)"
  },
  "en-FK": {
    name: "English (Falkland Islands)",
    native: "English (Falkland Islands)"
  },
  "en-FM": {
    name: "English (Micronesia)",
    native: "English (Micronesia)"
  },
  "en-GB": {
    name: "English (United Kingdom)",
    native: "English (United Kingdom)"
  },
  "en-GD": {
    name: "English (Grenada)",
    native: "English (Grenada)"
  },
  "en-GG": {
    name: "English (Guernsey)",
    native: "English (Guernsey)"
  },
  "en-GH": {
    name: "English (Ghana)",
    native: "English (Ghana)"
  },
  "en-GI": {
    name: "English (Gibraltar)",
    native: "English (Gibraltar)"
  },
  "en-GM": {
    name: "English (Gambia)",
    native: "English (Gambia)"
  },
  "en-GU": {
    name: "English (Guam)",
    native: "English (Guam)"
  },
  "en-GY": {
    name: "English (Guyana)",
    native: "English (Guyana)"
  },
  "en-HK": {
    name: "English (Hong Kong SAR China)",
    native: "English (Hong Kong SAR China)"
  },
  "en-IE": {
    name: "English (Ireland)",
    native: "English (Ireland)"
  },
  "en-IL": {
    name: "English (Israel)",
    native: "English (Israel)"
  },
  "en-IM": {
    name: "English (Isle of Man)",
    native: "English (Isle of Man)"
  },
  "en-IN": {
    name: "English (India)",
    native: "English (India)"
  },
  "en-IO": {
    name: "English (British Indian Ocean Territory)",
    native: "English (British Indian Ocean Territory)"
  },
  "en-JE": {
    name: "English (Jersey)",
    native: "English (Jersey)"
  },
  "en-JM": {
    name: "English (Jamaica)",
    native: "English (Jamaica)"
  },
  "en-KE": {
    name: "English (Kenya)",
    native: "English (Kenya)"
  },
  "en-KI": {
    name: "English (Kiribati)",
    native: "English (Kiribati)"
  },
  "en-KN": {
    name: "English (St. Kitts & Nevis)",
    native: "English (St. Kitts & Nevis)"
  },
  "en-KY": {
    name: "English (Cayman Islands)",
    native: "English (Cayman Islands)"
  },
  "en-LC": {
    name: "English (St. Lucia)",
    native: "English (St. Lucia)"
  },
  "en-LR": {
    name: "English (Liberia)",
    native: "English (Liberia)"
  },
  "en-LS": {
    name: "English (Lesotho)",
    native: "English (Lesotho)"
  },
  "en-MG": {
    name: "English (Madagascar)",
    native: "English (Madagascar)"
  },
  "en-MH": {
    name: "English (Marshall Islands)",
    native: "English (Marshall Islands)"
  },
  "en-MO": {
    name: "English (Macau SAR China)",
    native: "English (Macau SAR China)"
  },
  "en-MP": {
    name: "English (Northern Mariana Islands)",
    native: "English (Northern Mariana Islands)"
  },
  "en-MS": {
    name: "English (Montserrat)",
    native: "English (Montserrat)"
  },
  "en-MT": {
    name: "English (Malta)",
    native: "English (Malta)"
  },
  "en-MU": {
    name: "English (Mauritius)",
    native: "English (Mauritius)"
  },
  "en-MW": {
    name: "English (Malawi)",
    native: "English (Malawi)"
  },
  "en-MY": {
    name: "English (Malaysia)",
    native: "English (Malaysia)"
  },
  "en-NA": {
    name: "English (Namibia)",
    native: "English (Namibia)"
  },
  "en-NF": {
    name: "English (Norfolk Island)",
    native: "English (Norfolk Island)"
  },
  "en-NG": {
    name: "English (Nigeria)",
    native: "English (Nigeria)"
  },
  "en-NL": {
    name: "English (Netherlands)",
    native: "English (Netherlands)"
  },
  "en-NR": {
    name: "English (Nauru)",
    native: "English (Nauru)"
  },
  "en-NU": {
    name: "English (Niue)",
    native: "English (Niue)"
  },
  "en-NZ": {
    name: "English (New Zealand)",
    native: "English (New Zealand)"
  },
  "en-PG": {
    name: "English (Papua New Guinea)",
    native: "English (Papua New Guinea)"
  },
  "en-PH": {
    name: "English (Philippines)",
    native: "English (Philippines)"
  },
  "en-PK": {
    name: "English (Pakistan)",
    native: "English (Pakistan)"
  },
  "en-PN": {
    name: "English (Pitcairn Islands)",
    native: "English (Pitcairn Islands)"
  },
  "en-PR": {
    name: "English (Puerto Rico)",
    native: "English (Puerto Rico)"
  },
  "en-PW": {
    name: "English (Palau)",
    native: "English (Palau)"
  },
  "en-RW": {
    name: "English (Rwanda)",
    native: "English (Rwanda)"
  },
  "en-SB": {
    name: "English (Solomon Islands)",
    native: "English (Solomon Islands)"
  },
  "en-SC": {
    name: "English (Seychelles)",
    native: "English (Seychelles)"
  },
  "en-SD": {
    name: "English (Sudan)",
    native: "English (Sudan)"
  },
  "en-SE": {
    name: "English (Sweden)",
    native: "English (Sweden)"
  },
  "en-SG": {
    name: "English (Singapore)",
    native: "English (Singapore)"
  },
  "en-SH": {
    name: "English (St. Helena)",
    native: "English (St. Helena)"
  },
  "en-SI": {
    name: "English (Slovenia)",
    native: "English (Slovenia)"
  },
  "en-SL": {
    name: "English (Sierra Leone)",
    native: "English (Sierra Leone)"
  },
  "en-SS": {
    name: "English (South Sudan)",
    native: "English (South Sudan)"
  },
  "en-SX": {
    name: "English (Sint Maarten)",
    native: "English (Sint Maarten)"
  },
  "en-SZ": {
    name: "English (Swaziland)",
    native: "English (Swaziland)"
  },
  "en-TC": {
    name: "English (Turks & Caicos Islands)",
    native: "English (Turks & Caicos Islands)"
  },
  "en-TK": {
    name: "English (Tokelau)",
    native: "English (Tokelau)"
  },
  "en-TO": {
    name: "English (Tonga)",
    native: "English (Tonga)"
  },
  "en-TT": {
    name: "English (Trinidad & Tobago)",
    native: "English (Trinidad & Tobago)"
  },
  "en-TV": {
    name: "English (Tuvalu)",
    native: "English (Tuvalu)"
  },
  "en-TZ": {
    name: "English (Tanzania)",
    native: "English (Tanzania)"
  },
  "en-UG": {
    name: "English (Uganda)",
    native: "English (Uganda)"
  },
  "en-UM": {
    name: "English (U.S. Outlying Islands)",
    native: "English (U.S. Outlying Islands)"
  },
  "en-US": {
    name: "English (United States)",
    native: "English (United States)",
    default: true
  },
  "en-US-POSIX": {
    name: "English (United States, Computer)",
    native: "English (United States, Computer)"
  },
  "en-VC": {
    name: "English (St. Vincent & Grenadines)",
    native: "English (St. Vincent & Grenadines)"
  },
  "en-VG": {
    name: "English (British Virgin Islands)",
    native: "English (British Virgin Islands)"
  },
  "en-VI": {
    name: "English (U.S. Virgin Islands)",
    native: "English (U.S. Virgin Islands)"
  },
  "en-VU": {
    name: "English (Vanuatu)",
    native: "English (Vanuatu)"
  },
  "en-WS": {
    name: "English (Samoa)",
    native: "English (Samoa)"
  },
  "en-ZA": {
    name: "English (South Africa)",
    native: "English (South Africa)"
  },
  "en-ZM": {
    name: "English (Zambia)",
    native: "English (Zambia)"
  },
  "en-ZW": {
    name: "English (Zimbabwe)",
    native: "English (Zimbabwe)"
  },
  eo: {
    name: "Esperanto",
    native: "esperanto"
  },
  es: {
    name: "Spanish",
    native: "espa\xF1ol"
  },
  "es-419": {
    name: "Spanish (Latin America)",
    native: "espa\xF1ol (Latinoam\xE9rica)"
  },
  "es-AR": {
    name: "Spanish (Argentina)",
    native: "espa\xF1ol (Argentina)"
  },
  "es-BO": {
    name: "Spanish (Bolivia)",
    native: "espa\xF1ol (Bolivia)"
  },
  "es-BR": {
    name: "Spanish (Brazil)",
    native: "espa\xF1ol (Brasil)"
  },
  "es-BZ": {
    name: "Spanish (Belize)",
    native: "espa\xF1ol (Belice)"
  },
  "es-CL": {
    name: "Spanish (Chile)",
    native: "espa\xF1ol (Chile)"
  },
  "es-CO": {
    name: "Spanish (Colombia)",
    native: "espa\xF1ol (Colombia)"
  },
  "es-CR": {
    name: "Spanish (Costa Rica)",
    native: "espa\xF1ol (Costa Rica)"
  },
  "es-CU": {
    name: "Spanish (Cuba)",
    native: "espa\xF1ol (Cuba)"
  },
  "es-DO": {
    name: "Spanish (Dominican Republic)",
    native: "espa\xF1ol (Rep\xFAblica Dominicana)"
  },
  "es-EA": {
    name: "Spanish (Ceuta & Melilla)",
    native: "espa\xF1ol (Ceuta y Melilla)"
  },
  "es-EC": {
    name: "Spanish (Ecuador)",
    native: "espa\xF1ol (Ecuador)"
  },
  "es-ES": {
    name: "Spanish (Spain)",
    native: "espa\xF1ol (Espa\xF1a)"
  },
  "es-GQ": {
    name: "Spanish (Equatorial Guinea)",
    native: "espa\xF1ol (Guinea Ecuatorial)"
  },
  "es-GT": {
    name: "Spanish (Guatemala)",
    native: "espa\xF1ol (Guatemala)"
  },
  "es-HN": {
    name: "Spanish (Honduras)",
    native: "espa\xF1ol (Honduras)"
  },
  "es-IC": {
    name: "Spanish (Canary Islands)",
    native: "espa\xF1ol (Canarias)"
  },
  "es-MX": {
    name: "Spanish (Mexico)",
    native: "espa\xF1ol (M\xE9xico)"
  },
  "es-NI": {
    name: "Spanish (Nicaragua)",
    native: "espa\xF1ol (Nicaragua)"
  },
  "es-PA": {
    name: "Spanish (Panama)",
    native: "espa\xF1ol (Panam\xE1)"
  },
  "es-PE": {
    name: "Spanish (Peru)",
    native: "espa\xF1ol (Per\xFA)"
  },
  "es-PH": {
    name: "Spanish (Philippines)",
    native: "espa\xF1ol (Filipinas)"
  },
  "es-PR": {
    name: "Spanish (Puerto Rico)",
    native: "espa\xF1ol (Puerto Rico)"
  },
  "es-PY": {
    name: "Spanish (Paraguay)",
    native: "espa\xF1ol (Paraguay)"
  },
  "es-SV": {
    name: "Spanish (El Salvador)",
    native: "espa\xF1ol (El Salvador)"
  },
  "es-US": {
    name: "Spanish (United States)",
    native: "espa\xF1ol (Estados Unidos)"
  },
  "es-UY": {
    name: "Spanish (Uruguay)",
    native: "espa\xF1ol (Uruguay)"
  },
  "es-VE": {
    name: "Spanish (Venezuela)",
    native: "espa\xF1ol (Venezuela)"
  },
  et: {
    name: "Estonian",
    native: "eesti"
  },
  "et-EE": {
    name: "Estonian (Estonia)",
    native: "eesti (Eesti)"
  },
  eu: {
    name: "Basque",
    native: "euskara"
  },
  "eu-ES": {
    name: "Basque (Spain)",
    native: "euskara (Espainia)"
  },
  ewo: {
    name: "Ewondo",
    native: "ewondo"
  },
  "ewo-CM": {
    name: "Ewondo (Cameroon)",
    native: "ewondo (Kam\u0259r\xFAn)"
  },
  fa: {
    name: "Persian",
    native: "\u0641\u0627\u0631\u0633\u06CC"
  },
  "fa-AF": {
    name: "Persian (Afghanistan)",
    native: "\u0641\u0627\u0631\u0633\u06CC (\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646)"
  },
  "fa-IR": {
    name: "Persian (Iran)",
    native: "\u0641\u0627\u0631\u0633\u06CC (\u0627\u06CC\u0631\u0627\u0646)"
  },
  ff: {
    name: "Fulah",
    native: "Pulaar"
  },
  "ff-CM": {
    name: "Fulah (Cameroon)",
    native: "Pulaar (Kameruun)"
  },
  "ff-GN": {
    name: "Fulah (Guinea)",
    native: "Pulaar (Gine)"
  },
  "ff-MR": {
    name: "Fulah (Mauritania)",
    native: "Pulaar (Muritani)"
  },
  "ff-SN": {
    name: "Fulah (Senegal)",
    native: "Pulaar (Senegaal)"
  },
  fi: {
    name: "Finnish",
    native: "suomi"
  },
  "fi-FI": {
    name: "Finnish (Finland)",
    native: "suomi (Suomi)"
  },
  fil: {
    name: "Filipino",
    native: "Filipino"
  },
  "fil-PH": {
    name: "Filipino (Philippines)",
    native: "Filipino (Pilipinas)"
  },
  fo: {
    name: "Faroese",
    native: "f\xF8royskt"
  },
  "fo-DK": {
    name: "Faroese (Denmark)",
    native: "f\xF8royskt (Danmark)"
  },
  "fo-FO": {
    name: "Faroese (Faroe Islands)",
    native: "f\xF8royskt (F\xF8royar)"
  },
  fr: {
    name: "French",
    native: "fran\xE7ais"
  },
  "fr-BE": {
    name: "French (Belgium)",
    native: "fran\xE7ais (Belgique)"
  },
  "fr-BF": {
    name: "French (Burkina Faso)",
    native: "fran\xE7ais (Burkina Faso)"
  },
  "fr-BI": {
    name: "French (Burundi)",
    native: "fran\xE7ais (Burundi)"
  },
  "fr-BJ": {
    name: "French (Benin)",
    native: "fran\xE7ais (B\xE9nin)"
  },
  "fr-BL": {
    name: "French (St. Barth\xE9lemy)",
    native: "fran\xE7ais (Saint-Barth\xE9lemy)"
  },
  "fr-CA": {
    name: "French (Canada)",
    native: "fran\xE7ais (Canada)"
  },
  "fr-CD": {
    name: "French (Congo - Kinshasa)",
    native: "fran\xE7ais (Congo-Kinshasa)"
  },
  "fr-CF": {
    name: "French (Central African Republic)",
    native: "fran\xE7ais (R\xE9publique centrafricaine)"
  },
  "fr-CG": {
    name: "French (Congo - Brazzaville)",
    native: "fran\xE7ais (Congo-Brazzaville)"
  },
  "fr-CH": {
    name: "French (Switzerland)",
    native: "fran\xE7ais (Suisse)"
  },
  "fr-CI": {
    name: "French (C\xF4te d\u2019Ivoire)",
    native: "fran\xE7ais (C\xF4te d\u2019Ivoire)"
  },
  "fr-CM": {
    name: "French (Cameroon)",
    native: "fran\xE7ais (Cameroun)"
  },
  "fr-DJ": {
    name: "French (Djibouti)",
    native: "fran\xE7ais (Djibouti)"
  },
  "fr-DZ": {
    name: "French (Algeria)",
    native: "fran\xE7ais (Alg\xE9rie)"
  },
  "fr-FR": {
    name: "French (France)",
    native: "fran\xE7ais (France)"
  },
  "fr-GA": {
    name: "French (Gabon)",
    native: "fran\xE7ais (Gabon)"
  },
  "fr-GF": {
    name: "French (French Guiana)",
    native: "fran\xE7ais (Guyane fran\xE7aise)"
  },
  "fr-GN": {
    name: "French (Guinea)",
    native: "fran\xE7ais (Guin\xE9e)"
  },
  "fr-GP": {
    name: "French (Guadeloupe)",
    native: "fran\xE7ais (Guadeloupe)"
  },
  "fr-GQ": {
    name: "French (Equatorial Guinea)",
    native: "fran\xE7ais (Guin\xE9e \xE9quatoriale)"
  },
  "fr-HT": {
    name: "French (Haiti)",
    native: "fran\xE7ais (Ha\xEFti)"
  },
  "fr-KM": {
    name: "French (Comoros)",
    native: "fran\xE7ais (Comores)"
  },
  "fr-LU": {
    name: "French (Luxembourg)",
    native: "fran\xE7ais (Luxembourg)"
  },
  "fr-MA": {
    name: "French (Morocco)",
    native: "fran\xE7ais (Maroc)"
  },
  "fr-MC": {
    name: "French (Monaco)",
    native: "fran\xE7ais (Monaco)"
  },
  "fr-MF": {
    name: "French (St. Martin)",
    native: "fran\xE7ais (Saint-Martin)"
  },
  "fr-MG": {
    name: "French (Madagascar)",
    native: "fran\xE7ais (Madagascar)"
  },
  "fr-ML": {
    name: "French (Mali)",
    native: "fran\xE7ais (Mali)"
  },
  "fr-MQ": {
    name: "French (Martinique)",
    native: "fran\xE7ais (Martinique)"
  },
  "fr-MR": {
    name: "French (Mauritania)",
    native: "fran\xE7ais (Mauritanie)"
  },
  "fr-MU": {
    name: "French (Mauritius)",
    native: "fran\xE7ais (Maurice)"
  },
  "fr-NC": {
    name: "French (New Caledonia)",
    native: "fran\xE7ais (Nouvelle-Cal\xE9donie)"
  },
  "fr-NE": {
    name: "French (Niger)",
    native: "fran\xE7ais (Niger)"
  },
  "fr-PF": {
    name: "French (French Polynesia)",
    native: "fran\xE7ais (Polyn\xE9sie fran\xE7aise)"
  },
  "fr-PM": {
    name: "French (St. Pierre & Miquelon)",
    native: "fran\xE7ais (Saint-Pierre-et-Miquelon)"
  },
  "fr-RE": {
    name: "French (R\xE9union)",
    native: "fran\xE7ais (La R\xE9union)"
  },
  "fr-RW": {
    name: "French (Rwanda)",
    native: "fran\xE7ais (Rwanda)"
  },
  "fr-SC": {
    name: "French (Seychelles)",
    native: "fran\xE7ais (Seychelles)"
  },
  "fr-SN": {
    name: "French (Senegal)",
    native: "fran\xE7ais (S\xE9n\xE9gal)"
  },
  "fr-SY": {
    name: "French (Syria)",
    native: "fran\xE7ais (Syrie)"
  },
  "fr-TD": {
    name: "French (Chad)",
    native: "fran\xE7ais (Tchad)"
  },
  "fr-TG": {
    name: "French (Togo)",
    native: "fran\xE7ais (Togo)"
  },
  "fr-TN": {
    name: "French (Tunisia)",
    native: "fran\xE7ais (Tunisie)"
  },
  "fr-VU": {
    name: "French (Vanuatu)",
    native: "fran\xE7ais (Vanuatu)"
  },
  "fr-WF": {
    name: "French (Wallis & Futuna)",
    native: "fran\xE7ais (Wallis-et-Futuna)"
  },
  "fr-YT": {
    name: "French (Mayotte)",
    native: "fran\xE7ais (Mayotte)"
  },
  fur: {
    name: "Friulian",
    native: "furlan"
  },
  "fur-IT": {
    name: "Friulian (Italy)",
    native: "furlan (Italie)"
  },
  fy: {
    name: "Western Frisian",
    native: "Frysk"
  },
  "fy-NL": {
    name: "Western Frisian (Netherlands)",
    native: "Frysk (Nederl\xE2n)"
  },
  ga: {
    name: "Irish",
    native: "Gaeilge"
  },
  "ga-IE": {
    name: "Irish (Ireland)",
    native: "Gaeilge (\xC9ire)"
  },
  gd: {
    name: "Scottish Gaelic",
    native: "G\xE0idhlig"
  },
  "gd-GB": {
    name: "Scottish Gaelic (United Kingdom)",
    native: "G\xE0idhlig (An R\xECoghachd Aonaichte)"
  },
  gl: {
    name: "Galician",
    native: "galego"
  },
  "gl-ES": {
    name: "Galician (Spain)",
    native: "galego (Espa\xF1a)"
  },
  gsw: {
    name: "Swiss German",
    native: "Schwiizert\xFC\xFCtsch"
  },
  "gsw-CH": {
    name: "Swiss German (Switzerland)",
    native: "Schwiizert\xFC\xFCtsch (Schwiiz)"
  },
  "gsw-FR": {
    name: "Swiss German (France)",
    native: "Schwiizert\xFC\xFCtsch (Frankriich)"
  },
  "gsw-LI": {
    name: "Swiss German (Liechtenstein)",
    native: "Schwiizert\xFC\xFCtsch (Li\xE4chtescht\xE4i)"
  },
  gu: {
    name: "Gujarati",
    native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
  },
  "gu-IN": {
    name: "Gujarati (India)",
    native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0 (\u0AAD\u0ABE\u0AB0\u0AA4)"
  },
  guz: {
    name: "Gusii",
    native: "Ekegusii"
  },
  "guz-KE": {
    name: "Gusii (Kenya)",
    native: "Ekegusii (Kenya)"
  },
  gv: {
    name: "Manx",
    native: "Gaelg"
  },
  "gv-IM": {
    name: "Manx (Isle of Man)",
    native: "Gaelg (Ellan Vannin)"
  },
  ha: {
    name: "Hausa",
    native: "Hausa"
  },
  "ha-GH": {
    name: "Hausa (Ghana)",
    native: "Hausa (Gana)"
  },
  "ha-NE": {
    name: "Hausa (Niger)",
    native: "Hausa (Nijar)"
  },
  "ha-NG": {
    name: "Hausa (Nigeria)",
    native: "Hausa (Najeriya)"
  },
  haw: {
    name: "Hawaiian",
    native: "\u02BB\u014Clelo Hawai\u02BBi"
  },
  "haw-US": {
    name: "Hawaiian (United States)",
    native: "\u02BB\u014Clelo Hawai\u02BBi (\u02BBAmelika Hui P\u016B \u02BBIa)"
  },
  he: {
    name: "Hebrew",
    native: "\u05E2\u05D1\u05E8\u05D9\u05EA"
  },
  "he-IL": {
    name: "Hebrew (Israel)",
    native: "\u05E2\u05D1\u05E8\u05D9\u05EA (\u05D9\u05E9\u05E8\u05D0\u05DC)"
  },
  hi: {
    name: "Hindi",
    native: "\u0939\u093F\u0928\u094D\u0926\u0940"
  },
  "hi-IN": {
    name: "Hindi (India)",
    native: "\u0939\u093F\u0928\u094D\u0926\u0940 (\u092D\u093E\u0930\u0924)"
  },
  hr: {
    name: "Croatian",
    native: "hrvatski"
  },
  "hr-BA": {
    name: "Croatian (Bosnia & Herzegovina)",
    native: "hrvatski (Bosna i Hercegovina)"
  },
  "hr-HR": {
    name: "Croatian (Croatia)",
    native: "hrvatski (Hrvatska)"
  },
  hsb: {
    name: "Upper Sorbian",
    native: "hornjoserb\u0161\u0107ina"
  },
  "hsb-DE": {
    name: "Upper Sorbian (Germany)",
    native: "hornjoserb\u0161\u0107ina (N\u011Bmska)"
  },
  hu: {
    name: "Hungarian",
    native: "magyar"
  },
  "hu-HU": {
    name: "Hungarian (Hungary)",
    native: "magyar (Magyarorsz\xE1g)"
  },
  hy: {
    name: "Armenian",
    native: "\u0570\u0561\u0575\u0565\u0580\u0565\u0576"
  },
  "hy-AM": {
    name: "Armenian (Armenia)",
    native: "\u0570\u0561\u0575\u0565\u0580\u0565\u0576 (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)"
  },
  id: {
    name: "Indonesian",
    native: "Indonesia"
  },
  "id-ID": {
    name: "Indonesian (Indonesia)",
    native: "Indonesia (Indonesia)"
  },
  ig: {
    name: "Igbo",
    native: "Igbo"
  },
  "ig-NG": {
    name: "Igbo (Nigeria)",
    native: "Igbo (Na\u1ECBj\u1ECBr\u1ECBa)"
  },
  ii: {
    name: "Sichuan Yi",
    native: "\uA188\uA320\uA259"
  },
  "ii-CN": {
    name: "Sichuan Yi (China)",
    native: "\uA188\uA320\uA259 (\uA34F\uA1E9)"
  },
  is: {
    name: "Icelandic",
    native: "\xEDslenska"
  },
  "is-IS": {
    name: "Icelandic (Iceland)",
    native: "\xEDslenska (\xCDsland)"
  },
  it: {
    name: "Italian",
    native: "italiano"
  },
  "it-CH": {
    name: "Italian (Switzerland)",
    native: "italiano (Svizzera)"
  },
  "it-IT": {
    name: "Italian (Italy)",
    native: "italiano (Italia)"
  },
  "it-SM": {
    name: "Italian (San Marino)",
    native: "italiano (San Marino)"
  },
  "it-VA": {
    name: "Italian (Vatican City)",
    native: "italiano (Citt\xE0 del Vaticano)"
  },
  ja: {
    name: "Japanese",
    native: "\u65E5\u672C\u8A9E"
  },
  "ja-JP": {
    name: "Japanese (Japan)",
    native: "\u65E5\u672C\u8A9E (\u65E5\u672C)"
  },
  jgo: {
    name: "Ngomba",
    native: "Nda\uA78Ca"
  },
  "jgo-CM": {
    name: "Ngomba (Cameroon)",
    native: "Nda\uA78Ca (Kam\u025Bl\xFBn)"
  },
  jmc: {
    name: "Machame",
    native: "Kimachame"
  },
  "jmc-TZ": {
    name: "Machame (Tanzania)",
    native: "Kimachame (Tanzania)"
  },
  ka: {
    name: "Georgian",
    native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
  },
  "ka-GE": {
    name: "Georgian (Georgia)",
    native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8 (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)"
  },
  kab: {
    name: "Kabyle",
    native: "Taqbaylit"
  },
  "kab-DZ": {
    name: "Kabyle (Algeria)",
    native: "Taqbaylit (Lezzayer)"
  },
  kam: {
    name: "Kamba",
    native: "Kikamba"
  },
  "kam-KE": {
    name: "Kamba (Kenya)",
    native: "Kikamba (Kenya)"
  },
  kde: {
    name: "Makonde",
    native: "Chimakonde"
  },
  "kde-TZ": {
    name: "Makonde (Tanzania)",
    native: "Chimakonde (Tanzania)"
  },
  kea: {
    name: "Kabuverdianu",
    native: "kabuverdianu"
  },
  "kea-CV": {
    name: "Kabuverdianu (Cape Verde)",
    native: "kabuverdianu (Kabu Verdi)"
  },
  khq: {
    name: "Koyra Chiini",
    native: "Koyra ciini"
  },
  "khq-ML": {
    name: "Koyra Chiini (Mali)",
    native: "Koyra ciini (Maali)"
  },
  ki: {
    name: "Kikuyu",
    native: "Gikuyu"
  },
  "ki-KE": {
    name: "Kikuyu (Kenya)",
    native: "Gikuyu (Kenya)"
  },
  kk: {
    name: "Kazakh",
    native: "\u049B\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456"
  },
  "kk-KZ": {
    name: "Kazakh (Kazakhstan)",
    native: "\u049B\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456 (\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D)"
  },
  kkj: {
    name: "Kako",
    native: "kak\u0254"
  },
  "kkj-CM": {
    name: "Kako (Cameroon)",
    native: "kak\u0254 (Kam\u025Brun)"
  },
  kl: {
    name: "Kalaallisut",
    native: "kalaallisut"
  },
  "kl-GL": {
    name: "Kalaallisut (Greenland)",
    native: "kalaallisut (Kalaallit Nunaat)"
  },
  kln: {
    name: "Kalenjin",
    native: "Kalenjin"
  },
  "kln-KE": {
    name: "Kalenjin (Kenya)",
    native: "Kalenjin (Emetab Kenya)"
  },
  km: {
    name: "Khmer",
    native: "\u1781\u17D2\u1798\u17C2\u179A"
  },
  "km-KH": {
    name: "Khmer (Cambodia)",
    native: "\u1781\u17D2\u1798\u17C2\u179A (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)"
  },
  kn: {
    name: "Kannada",
    native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
  },
  "kn-IN": {
    name: "Kannada (India)",
    native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1 (\u0CAD\u0CBE\u0CB0\u0CA4)"
  },
  ko: {
    name: "Korean",
    native: "\uD55C\uAD6D\uC5B4"
  },
  "ko-KP": {
    name: "Korean (North Korea)",
    native: "\uD55C\uAD6D\uC5B4(\uC870\uC120\uBBFC\uC8FC\uC8FC\uC758\uC778\uBBFC\uACF5\uD654\uAD6D)"
  },
  "ko-KR": {
    name: "Korean (South Korea)",
    native: "\uD55C\uAD6D\uC5B4(\uB300\uD55C\uBBFC\uAD6D)"
  },
  kok: {
    name: "Konkani",
    native: "\u0915\u094B\u0902\u0915\u0923\u0940"
  },
  "kok-IN": {
    name: "Konkani (India)",
    native: "\u0915\u094B\u0902\u0915\u0923\u0940 (\u092D\u093E\u0930\u0924)"
  },
  ks: {
    name: "Kashmiri",
    native: "\u06A9\u0672\u0634\u064F\u0631"
  },
  "ks-IN": {
    name: "Kashmiri (India)",
    native: "\u06A9\u0672\u0634\u064F\u0631 (\u06C1\u0650\u0646\u065B\u062F\u0648\u0633\u062A\u0627\u0646)"
  },
  ksb: {
    name: "Shambala",
    native: "Kishambaa"
  },
  "ksb-TZ": {
    name: "Shambala (Tanzania)",
    native: "Kishambaa (Tanzania)"
  },
  ksf: {
    name: "Bafia",
    native: "rikpa"
  },
  "ksf-CM": {
    name: "Bafia (Cameroon)",
    native: "rikpa (kam\u025Br\xFAn)"
  },
  ksh: {
    name: "Colognian",
    native: "K\xF6lsch"
  },
  "ksh-DE": {
    name: "Colognian (Germany)",
    native: "K\xF6lsch en Do\xFCtschland"
  },
  kw: {
    name: "Cornish",
    native: "kernewek"
  },
  "kw-GB": {
    name: "Cornish (United Kingdom)",
    native: "kernewek (Rywvaneth Unys)"
  },
  ky: {
    name: "Kyrgyz",
    native: "\u043A\u044B\u0440\u0433\u044B\u0437\u0447\u0430"
  },
  "ky-KG": {
    name: "Kyrgyz (Kyrgyzstan)",
    native: "\u043A\u044B\u0440\u0433\u044B\u0437\u0447\u0430 (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)"
  },
  lag: {
    name: "Langi",
    native: "K\u0268laangi"
  },
  "lag-TZ": {
    name: "Langi (Tanzania)",
    native: "K\u0268laangi (Taansan\xEDa)"
  },
  lb: {
    name: "Luxembourgish",
    native: "L\xEBtzebuergesch"
  },
  "lb-LU": {
    name: "Luxembourgish (Luxembourg)",
    native: "L\xEBtzebuergesch (L\xEBtzebuerg)"
  },
  lg: {
    name: "Ganda",
    native: "Luganda"
  },
  "lg-UG": {
    name: "Ganda (Uganda)",
    native: "Luganda (Yuganda)"
  },
  lkt: {
    name: "Lakota",
    native: "Lak\u021F\xF3l\u02BCiyapi"
  },
  "lkt-US": {
    name: "Lakota (United States)",
    native: "Lak\u021F\xF3l\u02BCiyapi (M\xEDlaha\u014Bska T\u021Fam\xE1k\u021Fo\u010Dhe)"
  },
  ln: {
    name: "Lingala",
    native: "ling\xE1la"
  },
  "ln-AO": {
    name: "Lingala (Angola)",
    native: "ling\xE1la (Ang\xF3la)"
  },
  "ln-CD": {
    name: "Lingala (Congo - Kinshasa)",
    native: "ling\xE1la (Republ\xEDki ya Kong\xF3 Demokrat\xEDki)"
  },
  "ln-CF": {
    name: "Lingala (Central African Republic)",
    native: "ling\xE1la (Repibiki ya Afr\xEDka ya K\xE1ti)"
  },
  "ln-CG": {
    name: "Lingala (Congo - Brazzaville)",
    native: "ling\xE1la (Kongo)"
  },
  lo: {
    name: "Lao",
    native: "\u0EA5\u0EB2\u0EA7"
  },
  "lo-LA": {
    name: "Lao (Laos)",
    native: "\u0EA5\u0EB2\u0EA7 (\u0EA5\u0EB2\u0EA7)"
  },
  lrc: {
    name: "Northern Luri",
    native: "\u0644\u06CA\u0631\u06CC \u0634\u0648\u0645\u0627\u0644\u06CC"
  },
  "lrc-IQ": {
    name: "Northern Luri (Iraq)",
    native: "\u0644\u06CA\u0631\u06CC \u0634\u0648\u0645\u0627\u0644\u06CC (IQ)"
  },
  "lrc-IR": {
    name: "Northern Luri (Iran)",
    native: "\u0644\u06CA\u0631\u06CC \u0634\u0648\u0645\u0627\u0644\u06CC (IR)"
  },
  lt: {
    name: "Lithuanian",
    native: "lietuvi\u0173"
  },
  "lt-LT": {
    name: "Lithuanian (Lithuania)",
    native: "lietuvi\u0173 (Lietuva)"
  },
  lu: {
    name: "Luba-Katanga",
    native: "Tshiluba"
  },
  "lu-CD": {
    name: "Luba-Katanga (Congo - Kinshasa)",
    native: "Tshiluba (Ditunga wa Kongu)"
  },
  luo: {
    name: "Luo",
    native: "Dholuo"
  },
  "luo-KE": {
    name: "Luo (Kenya)",
    native: "Dholuo (Kenya)"
  },
  luy: {
    name: "Luyia",
    native: "Luluhia"
  },
  "luy-KE": {
    name: "Luyia (Kenya)",
    native: "Luluhia (Kenya)"
  },
  lv: {
    name: "Latvian",
    native: "latvie\u0161u"
  },
  "lv-LV": {
    name: "Latvian (Latvia)",
    native: "latvie\u0161u (Latvija)"
  },
  mas: {
    name: "Masai",
    native: "Maa"
  },
  "mas-KE": {
    name: "Masai (Kenya)",
    native: "Maa (Kenya)"
  },
  "mas-TZ": {
    name: "Masai (Tanzania)",
    native: "Maa (Tansania)"
  },
  mer: {
    name: "Meru",
    native: "K\u0129m\u0129r\u0169"
  },
  "mer-KE": {
    name: "Meru (Kenya)",
    native: "K\u0129m\u0129r\u0169 (Kenya)"
  },
  mfe: {
    name: "Morisyen",
    native: "kreol morisien"
  },
  "mfe-MU": {
    name: "Morisyen (Mauritius)",
    native: "kreol morisien (Moris)"
  },
  mg: {
    name: "Malagasy",
    native: "Malagasy"
  },
  "mg-MG": {
    name: "Malagasy (Madagascar)",
    native: "Malagasy (Madagasikara)"
  },
  mgh: {
    name: "Makhuwa-Meetto",
    native: "Makua"
  },
  "mgh-MZ": {
    name: "Makhuwa-Meetto (Mozambique)",
    native: "Makua (Umozambiki)"
  },
  mgo: {
    name: "Meta\u02BC",
    native: "meta\u02BC"
  },
  "mgo-CM": {
    name: "Meta\u02BC (Cameroon)",
    native: "meta\u02BC (Kamalun)"
  },
  mk: {
    name: "Macedonian",
    native: "\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
  },
  "mk-MK": {
    name: "Macedonian (Macedonia)",
    native: "\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 (\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)"
  },
  ml: {
    name: "Malayalam",
    native: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"
  },
  "ml-IN": {
    name: "Malayalam (India)",
    native: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02 (\u0D07\u0D28\u0D4D\u0D24\u0D4D\u0D2F)"
  },
  mn: {
    name: "Mongolian",
    native: "\u043C\u043E\u043D\u0433\u043E\u043B"
  },
  "mn-MN": {
    name: "Mongolian (Mongolia)",
    native: "\u043C\u043E\u043D\u0433\u043E\u043B (\u041C\u043E\u043D\u0433\u043E\u043B)"
  },
  mr: {
    name: "Marathi",
    native: "\u092E\u0930\u093E\u0920\u0940"
  },
  "mr-IN": {
    name: "Marathi (India)",
    native: "\u092E\u0930\u093E\u0920\u0940 (\u092D\u093E\u0930\u0924)"
  },
  ms: {
    name: "Malay",
    native: "Melayu"
  },
  "ms-BN": {
    name: "Malay (Brunei)",
    native: "Melayu (Brunei)"
  },
  "ms-MY": {
    name: "Malay (Malaysia)",
    native: "Melayu (Malaysia)"
  },
  "ms-SG": {
    name: "Malay (Singapore)",
    native: "Melayu (Singapura)"
  },
  mt: {
    name: "Maltese",
    native: "Malti"
  },
  "mt-MT": {
    name: "Maltese (Malta)",
    native: "Malti (Malta)"
  },
  mua: {
    name: "Mundang",
    native: "MUNDA\u014A"
  },
  "mua-CM": {
    name: "Mundang (Cameroon)",
    native: "MUNDA\u014A (kameru\u014B)"
  },
  my: {
    name: "Burmese",
    native: "\u1019\u103C\u1014\u103A\u1019\u102C"
  },
  "my-MM": {
    name: "Burmese (Myanmar [Burma])",
    native: "\u1019\u103C\u1014\u103A\u1019\u102C (\u1019\u103C\u1014\u103A\u1019\u102C)"
  },
  mzn: {
    name: "Mazanderani",
    native: "\u0645\u0627\u0632\u0631\u0648\u0646\u06CC"
  },
  "mzn-IR": {
    name: "Mazanderani (Iran)",
    native: "\u0645\u0627\u0632\u0631\u0648\u0646\u06CC (\u0627\u06CC\u0631\u0627\u0646)"
  },
  naq: {
    name: "Nama",
    native: "Khoekhoegowab"
  },
  "naq-NA": {
    name: "Nama (Namibia)",
    native: "Khoekhoegowab (Namibiab)"
  },
  nb: {
    name: "Norwegian Bokm\xE5l",
    native: "norsk bokm\xE5l"
  },
  "nb-NO": {
    name: "Norwegian Bokm\xE5l (Norway)",
    native: "norsk bokm\xE5l (Norge)"
  },
  "nb-SJ": {
    name: "Norwegian Bokm\xE5l (Svalbard & Jan Mayen)",
    native: "norsk bokm\xE5l (Svalbard og Jan Mayen)"
  },
  nd: {
    name: "North Ndebele",
    native: "isiNdebele"
  },
  "nd-ZW": {
    name: "North Ndebele (Zimbabwe)",
    native: "isiNdebele (Zimbabwe)"
  },
  nds: {
    name: "Low German",
    native: "nds"
  },
  "nds-DE": {
    name: "Low German (Germany)",
    native: "nds (DE)"
  },
  "nds-NL": {
    name: "Low German (Netherlands)",
    native: "nds (NL)"
  },
  ne: {
    name: "Nepali",
    native: "\u0928\u0947\u092A\u093E\u0932\u0940"
  },
  "ne-IN": {
    name: "Nepali (India)",
    native: "\u0928\u0947\u092A\u093E\u0932\u0940 (\u092D\u093E\u0930\u0924)"
  },
  "ne-NP": {
    name: "Nepali (Nepal)",
    native: "\u0928\u0947\u092A\u093E\u0932\u0940 (\u0928\u0947\u092A\u093E\u0932)"
  },
  nl: {
    name: "Dutch",
    native: "Nederlands"
  },
  "nl-AW": {
    name: "Dutch (Aruba)",
    native: "Nederlands (Aruba)"
  },
  "nl-BE": {
    name: "Dutch (Belgium)",
    native: "Nederlands (Belgi\xEB)"
  },
  "nl-BQ": {
    name: "Dutch (Caribbean Netherlands)",
    native: "Nederlands (Caribisch Nederland)"
  },
  "nl-CW": {
    name: "Dutch (Cura\xE7ao)",
    native: "Nederlands (Cura\xE7ao)"
  },
  "nl-NL": {
    name: "Dutch (Netherlands)",
    native: "Nederlands (Nederland)"
  },
  "nl-SR": {
    name: "Dutch (Suriname)",
    native: "Nederlands (Suriname)"
  },
  "nl-SX": {
    name: "Dutch (Sint Maarten)",
    native: "Nederlands (Sint-Maarten)"
  },
  nmg: {
    name: "Kwasio",
    native: "nmg"
  },
  "nmg-CM": {
    name: "Kwasio (Cameroon)",
    native: "nmg (Kamerun)"
  },
  nn: {
    name: "Norwegian Nynorsk",
    native: "nynorsk"
  },
  "nn-NO": {
    name: "Norwegian Nynorsk (Norway)",
    native: "nynorsk (Noreg)"
  },
  nnh: {
    name: "Ngiemboon",
    native: "Shw\xF3\u014B\xF2 ngiemb\u0254\u0254n"
  },
  "nnh-CM": {
    name: "Ngiemboon (Cameroon)",
    native: "Shw\xF3\u014B\xF2 ngiemb\u0254\u0254n (K\xE0mal\xFBm)"
  },
  nus: {
    name: "Nuer",
    native: "Thok Nath"
  },
  "nus-SS": {
    name: "Nuer (South Sudan)",
    native: "Thok Nath (SS)"
  },
  nyn: {
    name: "Nyankole",
    native: "Runyankore"
  },
  "nyn-UG": {
    name: "Nyankole (Uganda)",
    native: "Runyankore (Uganda)"
  },
  om: {
    name: "Oromo",
    native: "Oromoo"
  },
  "om-ET": {
    name: "Oromo (Ethiopia)",
    native: "Oromoo (Itoophiyaa)"
  },
  "om-KE": {
    name: "Oromo (Kenya)",
    native: "Oromoo (Keeniyaa)"
  },
  or: {
    name: "Odia",
    native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
  },
  "or-IN": {
    name: "Odia (India)",
    native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06 (\u0B2D\u0B3E\u0B30\u0B24)"
  },
  os: {
    name: "Ossetic",
    native: "\u0438\u0440\u043E\u043D"
  },
  "os-GE": {
    name: "Ossetic (Georgia)",
    native: "\u0438\u0440\u043E\u043D (\u0413\u0443\u044B\u0440\u0434\u0437\u044B\u0441\u0442\u043E\u043D)"
  },
  "os-RU": {
    name: "Ossetic (Russia)",
    native: "\u0438\u0440\u043E\u043D (\u0423\u04D5\u0440\u04D5\u0441\u0435)"
  },
  pa: {
    name: "Punjabi",
    native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
  },
  "pa-Arab": {
    name: "Punjabi (Arabic)",
    native: "\u067E\u0646\u062C\u0627\u0628\u06CC (\u0639\u0631\u0628\u06CC)"
  },
  "pa-Arab-PK": {
    name: "Punjabi (Arabic, Pakistan)",
    native: "\u067E\u0646\u062C\u0627\u0628\u06CC (\u0639\u0631\u0628\u06CC, \u067E\u0627\u06A9\u0633\u062A\u0627\u0646)"
  },
  "pa-Guru": {
    name: "Punjabi (Gurmukhi)",
    native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40 (\u0A17\u0A41\u0A30\u0A2E\u0A41\u0A16\u0A40)"
  },
  "pa-Guru-IN": {
    name: "Punjabi (Gurmukhi, India)",
    native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40 (\u0A17\u0A41\u0A30\u0A2E\u0A41\u0A16\u0A40, \u0A2D\u0A3E\u0A30\u0A24)"
  },
  pl: {
    name: "Polish",
    native: "polski"
  },
  "pl-PL": {
    name: "Polish (Poland)",
    native: "polski (Polska)"
  },
  ps: {
    name: "Pashto",
    native: "\u067E\u069A\u062A\u0648"
  },
  "ps-AF": {
    name: "Pashto (Afghanistan)",
    native: "\u067E\u069A\u062A\u0648 (\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646)"
  },
  pt: {
    name: "Portuguese",
    native: "portugu\xEAs"
  },
  "pt-AO": {
    name: "Portuguese (Angola)",
    native: "portugu\xEAs (Angola)"
  },
  "pt-BR": {
    name: "Portuguese (Brazil)",
    native: "portugu\xEAs (Brasil)"
  },
  "pt-CH": {
    name: "Portuguese (Switzerland)",
    native: "portugu\xEAs (Su\xED\xE7a)"
  },
  "pt-CV": {
    name: "Portuguese (Cape Verde)",
    native: "portugu\xEAs (Cabo Verde)"
  },
  "pt-GQ": {
    name: "Portuguese (Equatorial Guinea)",
    native: "portugu\xEAs (Guin\xE9 Equatorial)"
  },
  "pt-GW": {
    name: "Portuguese (Guinea-Bissau)",
    native: "portugu\xEAs (Guin\xE9-Bissau)"
  },
  "pt-LU": {
    name: "Portuguese (Luxembourg)",
    native: "portugu\xEAs (Luxemburgo)"
  },
  "pt-MO": {
    name: "Portuguese (Macau SAR China)",
    native: "portugu\xEAs (Macau, RAE da China)"
  },
  "pt-MZ": {
    name: "Portuguese (Mozambique)",
    native: "portugu\xEAs (Mo\xE7ambique)"
  },
  "pt-PT": {
    name: "Portuguese (Portugal)",
    native: "portugu\xEAs (Portugal)"
  },
  "pt-ST": {
    name: "Portuguese (S\xE3o Tom\xE9 & Pr\xEDncipe)",
    native: "portugu\xEAs (S\xE3o Tom\xE9 e Pr\xEDncipe)"
  },
  "pt-TL": {
    name: "Portuguese (Timor-Leste)",
    native: "portugu\xEAs (Timor-Leste)"
  },
  qu: {
    name: "Quechua",
    native: "Runasimi"
  },
  "qu-BO": {
    name: "Quechua (Bolivia)",
    native: "Runasimi (Bolivia)"
  },
  "qu-EC": {
    name: "Quechua (Ecuador)",
    native: "Runasimi (Ecuador)"
  },
  "qu-PE": {
    name: "Quechua (Peru)",
    native: "Runasimi (Per\xFA)"
  },
  rm: {
    name: "Romansh",
    native: "rumantsch"
  },
  "rm-CH": {
    name: "Romansh (Switzerland)",
    native: "rumantsch (Svizra)"
  },
  rn: {
    name: "Rundi",
    native: "Ikirundi"
  },
  "rn-BI": {
    name: "Rundi (Burundi)",
    native: "Ikirundi (Uburundi)"
  },
  ro: {
    name: "Romanian",
    native: "rom\xE2n\u0103"
  },
  "ro-MD": {
    name: "Romanian (Moldova)",
    native: "rom\xE2n\u0103 (Republica Moldova)"
  },
  "ro-RO": {
    name: "Romanian (Romania)",
    native: "rom\xE2n\u0103 (Rom\xE2nia)"
  },
  rof: {
    name: "Rombo",
    native: "Kihorombo"
  },
  "rof-TZ": {
    name: "Rombo (Tanzania)",
    native: "Kihorombo (Tanzania)"
  },
  ru: {
    name: "Russian",
    native: "\u0440\u0443\u0441\u0441\u043A\u0438\u0439"
  },
  "ru-BY": {
    name: "Russian (Belarus)",
    native: "\u0440\u0443\u0441\u0441\u043A\u0438\u0439 (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)"
  },
  "ru-KG": {
    name: "Russian (Kyrgyzstan)",
    native: "\u0440\u0443\u0441\u0441\u043A\u0438\u0439 (\u041A\u0438\u0440\u0433\u0438\u0437\u0438\u044F)"
  },
  "ru-KZ": {
    name: "Russian (Kazakhstan)",
    native: "\u0440\u0443\u0441\u0441\u043A\u0438\u0439 (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)"
  },
  "ru-MD": {
    name: "Russian (Moldova)",
    native: "\u0440\u0443\u0441\u0441\u043A\u0438\u0439 (\u041C\u043E\u043B\u0434\u043E\u0432\u0430)"
  },
  "ru-RU": {
    name: "Russian (Russia)",
    native: "\u0440\u0443\u0441\u0441\u043A\u0438\u0439 (\u0420\u043E\u0441\u0441\u0438\u044F)"
  },
  "ru-UA": {
    name: "Russian (Ukraine)",
    native: "\u0440\u0443\u0441\u0441\u043A\u0438\u0439 (\u0423\u043A\u0440\u0430\u0438\u043D\u0430)"
  },
  rw: {
    name: "Kinyarwanda",
    native: "Kinyarwanda"
  },
  "rw-RW": {
    name: "Kinyarwanda (Rwanda)",
    native: "Kinyarwanda (U Rwanda)"
  },
  rwk: {
    name: "Rwa",
    native: "Kiruwa"
  },
  "rwk-TZ": {
    name: "Rwa (Tanzania)",
    native: "Kiruwa (Tanzania)"
  },
  sah: {
    name: "Sakha",
    native: "\u0441\u0430\u0445\u0430 \u0442\u044B\u043B\u0430"
  },
  "sah-RU": {
    name: "Sakha (Russia)",
    native: "\u0441\u0430\u0445\u0430 \u0442\u044B\u043B\u0430 (\u0410\u0440\u0430\u0441\u0441\u044B\u044B\u0439\u0430)"
  },
  saq: {
    name: "Samburu",
    native: "Kisampur"
  },
  "saq-KE": {
    name: "Samburu (Kenya)",
    native: "Kisampur (Kenya)"
  },
  sbp: {
    name: "Sangu",
    native: "Ishisangu"
  },
  "sbp-TZ": {
    name: "Sangu (Tanzania)",
    native: "Ishisangu (Tansaniya)"
  },
  se: {
    name: "Northern Sami",
    native: "davvis\xE1megiella"
  },
  "se-FI": {
    name: "Northern Sami (Finland)",
    native: "davvis\xE1megiella (Suopma)"
  },
  "se-NO": {
    name: "Northern Sami (Norway)",
    native: "davvis\xE1megiella (Norga)"
  },
  "se-SE": {
    name: "Northern Sami (Sweden)",
    native: "davvis\xE1megiella (Ruo\u0167\u0167a)"
  },
  seh: {
    name: "Sena",
    native: "sena"
  },
  "seh-MZ": {
    name: "Sena (Mozambique)",
    native: "sena (Mo\xE7ambique)"
  },
  ses: {
    name: "Koyraboro Senni",
    native: "Koyraboro senni"
  },
  "ses-ML": {
    name: "Koyraboro Senni (Mali)",
    native: "Koyraboro senni (Maali)"
  },
  sg: {
    name: "Sango",
    native: "S\xE4ng\xF6"
  },
  "sg-CF": {
    name: "Sango (Central African Republic)",
    native: "S\xE4ng\xF6 (K\xF6d\xF6r\xF6s\xEAse t\xEE B\xEAafr\xEEka)"
  },
  shi: {
    name: "Tachelhit",
    native: "\u2D5C\u2D30\u2D5B\u2D4D\u2D43\u2D49\u2D5C"
  },
  "shi-Latn": {
    name: "Tachelhit (Latin)",
    native: "Tashel\u1E25iyt (Latn)"
  },
  "shi-Latn-MA": {
    name: "Tachelhit (Latin, Morocco)",
    native: "Tashel\u1E25iyt (Latn, lm\u0263rib)"
  },
  "shi-Tfng": {
    name: "Tachelhit (Tifinagh)",
    native: "\u2D5C\u2D30\u2D5B\u2D4D\u2D43\u2D49\u2D5C (Tfng)"
  },
  "shi-Tfng-MA": {
    name: "Tachelhit (Tifinagh, Morocco)",
    native: "\u2D5C\u2D30\u2D5B\u2D4D\u2D43\u2D49\u2D5C (Tfng, \u2D4D\u2D4E\u2D56\u2D54\u2D49\u2D31)"
  },
  si: {
    name: "Sinhala",
    native: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"
  },
  "si-LK": {
    name: "Sinhala (Sri Lanka)",
    native: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)"
  },
  sk: {
    name: "Slovak",
    native: "sloven\u010Dina"
  },
  "sk-SK": {
    name: "Slovak (Slovakia)",
    native: "sloven\u010Dina (Slovensko)"
  },
  sl: {
    name: "Slovenian",
    native: "sloven\u0161\u010Dina"
  },
  "sl-SI": {
    name: "Slovenian (Slovenia)",
    native: "sloven\u0161\u010Dina (Slovenija)"
  },
  smn: {
    name: "Inari Sami",
    native: "anar\xE2\u0161kiel\xE2"
  },
  "smn-FI": {
    name: "Inari Sami (Finland)",
    native: "anar\xE2\u0161kiel\xE2 (Suom\xE2)"
  },
  sn: {
    name: "Shona",
    native: "chiShona"
  },
  "sn-ZW": {
    name: "Shona (Zimbabwe)",
    native: "chiShona (Zimbabwe)"
  },
  so: {
    name: "Somali",
    native: "Soomaali"
  },
  "so-DJ": {
    name: "Somali (Djibouti)",
    native: "Soomaali (Jabuuti)"
  },
  "so-ET": {
    name: "Somali (Ethiopia)",
    native: "Soomaali (Itoobiya)"
  },
  "so-KE": {
    name: "Somali (Kenya)",
    native: "Soomaali (Kiiniya)"
  },
  "so-SO": {
    name: "Somali (Somalia)",
    native: "Soomaali (Soomaaliya)"
  },
  sq: {
    name: "Albanian",
    native: "shqip"
  },
  "sq-AL": {
    name: "Albanian (Albania)",
    native: "shqip (Shqip\xEBri)"
  },
  "sq-MK": {
    name: "Albanian (Macedonia)",
    native: "shqip (Maqedoni)"
  },
  "sq-XK": {
    name: "Albanian (Kosovo)",
    native: "shqip (Kosov\xEB)"
  },
  sr: {
    name: "Serbian",
    native: "\u0441\u0440\u043F\u0441\u043A\u0438"
  },
  "sr-Cyrl": {
    name: "Serbian (Cyrillic)",
    native: "\u0441\u0440\u043F\u0441\u043A\u0438 (\u045B\u0438\u0440\u0438\u043B\u0438\u0446\u0430)"
  },
  "sr-Cyrl-BA": {
    name: "Serbian (Cyrillic, Bosnia & Herzegovina)",
    native: "\u0441\u0440\u043F\u0441\u043A\u0438 (\u045B\u0438\u0440\u0438\u043B\u0438\u0446\u0430, \u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)"
  },
  "sr-Cyrl-ME": {
    name: "Serbian (Cyrillic, Montenegro)",
    native: "\u0441\u0440\u043F\u0441\u043A\u0438 (\u045B\u0438\u0440\u0438\u043B\u0438\u0446\u0430, \u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430)"
  },
  "sr-Cyrl-RS": {
    name: "Serbian (Cyrillic, Serbia)",
    native: "\u0441\u0440\u043F\u0441\u043A\u0438 (\u045B\u0438\u0440\u0438\u043B\u0438\u0446\u0430, \u0421\u0440\u0431\u0438\u0458\u0430)"
  },
  "sr-Cyrl-XK": {
    name: "Serbian (Cyrillic, Kosovo)",
    native: "\u0441\u0440\u043F\u0441\u043A\u0438 (\u045B\u0438\u0440\u0438\u043B\u0438\u0446\u0430, \u041A\u043E\u0441\u043E\u0432\u043E)"
  },
  "sr-Latn": {
    name: "Serbian (Latin)",
    native: "srpski (latinica)"
  },
  "sr-Latn-BA": {
    name: "Serbian (Latin, Bosnia & Herzegovina)",
    native: "srpski (latinica, Bosna i Hercegovina)"
  },
  "sr-Latn-ME": {
    name: "Serbian (Latin, Montenegro)",
    native: "srpski (latinica, Crna Gora)"
  },
  "sr-Latn-RS": {
    name: "Serbian (Latin, Serbia)",
    native: "srpski (latinica, Srbija)"
  },
  "sr-Latn-XK": {
    name: "Serbian (Latin, Kosovo)",
    native: "srpski (latinica, Kosovo)"
  },
  sv: {
    name: "Swedish",
    native: "svenska"
  },
  "sv-AX": {
    name: "Swedish (\xC5land Islands)",
    native: "svenska (\xC5land)"
  },
  "sv-FI": {
    name: "Swedish (Finland)",
    native: "svenska (Finland)"
  },
  "sv-SE": {
    name: "Swedish (Sweden)",
    native: "svenska (Sverige)"
  },
  sw: {
    name: "Swahili",
    native: "Kiswahili"
  },
  "sw-CD": {
    name: "Swahili (Congo - Kinshasa)",
    native: "Kiswahili (Jamhuri ya Kidemokrasia ya Kongo)"
  },
  "sw-KE": {
    name: "Swahili (Kenya)",
    native: "Kiswahili (Kenya)"
  },
  "sw-TZ": {
    name: "Swahili (Tanzania)",
    native: "Kiswahili (Tanzania)"
  },
  "sw-UG": {
    name: "Swahili (Uganda)",
    native: "Kiswahili (Uganda)"
  },
  ta: {
    name: "Tamil",
    native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
  },
  "ta-IN": {
    name: "Tamil (India)",
    native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD (\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE)"
  },
  "ta-LK": {
    name: "Tamil (Sri Lanka)",
    native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD (\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8)"
  },
  "ta-MY": {
    name: "Tamil (Malaysia)",
    native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD (\u0BAE\u0BB2\u0BC7\u0B9A\u0BBF\u0BAF\u0BBE)"
  },
  "ta-SG": {
    name: "Tamil (Singapore)",
    native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD (\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD)"
  },
  te: {
    name: "Telugu",
    native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
  },
  "te-IN": {
    name: "Telugu (India)",
    native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 (\u0C2D\u0C3E\u0C30\u0C24\u0C26\u0C47\u0C36\u0C02)"
  },
  teo: {
    name: "Teso",
    native: "Kiteso"
  },
  "teo-KE": {
    name: "Teso (Kenya)",
    native: "Kiteso (Kenia)"
  },
  "teo-UG": {
    name: "Teso (Uganda)",
    native: "Kiteso (Uganda)"
  },
  tg: {
    name: "Tajik",
    native: "\u0442\u043E\u04B7\u0438\u043A\u04E3"
  },
  "tg-TJ": {
    name: "Tajik (Tajikistan)",
    native: "\u0442\u043E\u04B7\u0438\u043A\u04E3 (\u0422\u043E\u04B7\u0438\u043A\u0438\u0441\u0442\u043E\u043D)"
  },
  th: {
    name: "Thai",
    native: "\u0E44\u0E17\u0E22"
  },
  "th-TH": {
    name: "Thai (Thailand)",
    native: "\u0E44\u0E17\u0E22 (\u0E44\u0E17\u0E22)"
  },
  ti: {
    name: "Tigrinya",
    native: "\u1275\u130D\u122D\u129B"
  },
  "ti-ER": {
    name: "Tigrinya (Eritrea)",
    native: "\u1275\u130D\u122D\u129B (\u12A4\u122D\u1275\u122B)"
  },
  "ti-ET": {
    name: "Tigrinya (Ethiopia)",
    native: "\u1275\u130D\u122D\u129B (\u12A2\u1275\u12EE\u1335\u12EB)"
  },
  to: {
    name: "Tongan",
    native: "lea fakatonga"
  },
  "to-TO": {
    name: "Tongan (Tonga)",
    native: "lea fakatonga (Tonga)"
  },
  tr: {
    name: "Turkish",
    native: "T\xFCrk\xE7e"
  },
  "tr-CY": {
    name: "Turkish (Cyprus)",
    native: "T\xFCrk\xE7e (K\u0131br\u0131s)"
  },
  "tr-TR": {
    name: "Turkish (Turkey)",
    native: "T\xFCrk\xE7e (T\xFCrkiye)"
  },
  tt: {
    name: "Tatar",
    native: "\u0442\u0430\u0442\u0430\u0440"
  },
  "tt-RU": {
    name: "Tatar (Russia)",
    native: "\u0442\u0430\u0442\u0430\u0440 (\u0420\u043E\u0441\u0441\u0438\u044F)"
  },
  twq: {
    name: "Tasawaq",
    native: "Tasawaq senni"
  },
  "twq-NE": {
    name: "Tasawaq (Niger)",
    native: "Tasawaq senni (Ni\u017Eer)"
  },
  tzm: {
    name: "Central Atlas Tamazight",
    native: "Tamazi\u0263t n la\u1E6Dla\u1E63"
  },
  "tzm-MA": {
    name: "Central Atlas Tamazight (Morocco)",
    native: "Tamazi\u0263t n la\u1E6Dla\u1E63 (Me\u1E5B\u1E5Buk)"
  },
  ug: {
    name: "Uyghur",
    native: "\u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5"
  },
  "ug-CN": {
    name: "Uyghur (China)",
    native: "\u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5 (\u062C\u06C7\u06AD\u06AF\u0648)"
  },
  uk: {
    name: "Ukrainian",
    native: "\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
  },
  "uk-UA": {
    name: "Ukrainian (Ukraine)",
    native: "\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)"
  },
  ur: {
    name: "Urdu",
    native: "\u0627\u0631\u062F\u0648"
  },
  "ur-IN": {
    name: "Urdu (India)",
    native: "\u0627\u0631\u062F\u0648 (\u0628\u06BE\u0627\u0631\u062A)"
  },
  "ur-PK": {
    name: "Urdu (Pakistan)",
    native: "\u0627\u0631\u062F\u0648 (\u067E\u0627\u06A9\u0633\u062A\u0627\u0646)"
  },
  uz: {
    name: "Uzbek",
    native: "o\u2018zbek"
  },
  "uz-Arab": {
    name: "Uzbek (Arabic)",
    native: "\u0627\u0648\u0632\u0628\u06CC\u06A9 (\u0639\u0631\u0628\u06CC)"
  },
  "uz-Arab-AF": {
    name: "Uzbek (Arabic, Afghanistan)",
    native: "\u0627\u0648\u0632\u0628\u06CC\u06A9 (\u0639\u0631\u0628\u06CC, \u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646)"
  },
  "uz-Cyrl": {
    name: "Uzbek (Cyrillic)",
    native: "\u045E\u0437\u0431\u0435\u043A\u0447\u0430 (\u041A\u0438\u0440\u0438\u043B)"
  },
  "uz-Cyrl-UZ": {
    name: "Uzbek (Cyrillic, Uzbekistan)",
    native: "\u045E\u0437\u0431\u0435\u043A\u0447\u0430 (\u041A\u0438\u0440\u0438\u043B, \u040E\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u043E\u043D)"
  },
  "uz-Latn": {
    name: "Uzbek (Latin)",
    native: "o\u2018zbek (lotin)"
  },
  "uz-Latn-UZ": {
    name: "Uzbek (Latin, Uzbekistan)",
    native: "o\u2018zbek (lotin, O\u02BBzbekiston)"
  },
  vai: {
    name: "Vai",
    native: "\uA559\uA524"
  },
  "vai-Latn": {
    name: "Vai (Latin)",
    native: "Vai (Latn)"
  },
  "vai-Latn-LR": {
    name: "Vai (Latin, Liberia)",
    native: "Vai (Latn, Laibhiya)"
  },
  "vai-Vaii": {
    name: "Vai (Vai)",
    native: "\uA559\uA524 (Vaii)"
  },
  "vai-Vaii-LR": {
    name: "Vai (Vai, Liberia)",
    native: "\uA559\uA524 (Vaii, \uA55E\uA524\uA52B\uA569)"
  },
  vi: {
    name: "Vietnamese",
    native: "Ti\u1EBFng Vi\u1EC7t"
  },
  "vi-VN": {
    name: "Vietnamese (Vietnam)",
    native: "Ti\u1EBFng Vi\u1EC7t (Vi\u1EC7t Nam)"
  },
  vun: {
    name: "Vunjo",
    native: "Kyivunjo"
  },
  "vun-TZ": {
    name: "Vunjo (Tanzania)",
    native: "Kyivunjo (Tanzania)"
  },
  wae: {
    name: "Walser",
    native: "Walser"
  },
  "wae-CH": {
    name: "Walser (Switzerland)",
    native: "Walser (Schwiz)"
  },
  wo: {
    name: "Wolof",
    native: "Wolof"
  },
  "wo-SN": {
    name: "Wolof (Senegal)",
    native: "Wolof (Senegaal)"
  },
  xog: {
    name: "Soga",
    native: "Olusoga"
  },
  "xog-UG": {
    name: "Soga (Uganda)",
    native: "Olusoga (Yuganda)"
  },
  yav: {
    name: "Yangben",
    native: "nuasue"
  },
  "yav-CM": {
    name: "Yangben (Cameroon)",
    native: "nuasue (Kemel\xFAn)"
  },
  yi: {
    name: "Yiddish",
    native: "\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9"
  },
  "yi-001": {
    name: "Yiddish (World)",
    native: "\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9 (\u05D5\u05D5\u05E2\u05DC\u05D8)"
  },
  yo: {
    name: "Yoruba",
    native: "\xC8d\xE8 Yor\xF9b\xE1"
  },
  "yo-BJ": {
    name: "Yoruba (Benin)",
    native: "\xC8d\xE8 Yor\xF9b\xE1 (Or\xEDl\u025B\u0301\xE8de B\u025B\u0300n\u025B\u0300)"
  },
  "yo-NG": {
    name: "Yoruba (Nigeria)",
    native: "\xC8d\xE8 Yor\xF9b\xE1 (Or\xEDl\u1EB9\u0301\xE8de N\xE0\xECj\xEDr\xED\xE0)"
  },
  yue: {
    name: "Cantonese",
    native: "\u7CB5\u8A9E"
  },
  "yue-Hans": {
    name: "Cantonese (Simplified)",
    native: "\u7CA4\u8BED (\u7B80\u4F53)"
  },
  "yue-Hans-CN": {
    name: "Cantonese (Simplified, China)",
    native: "\u7CA4\u8BED (\u7B80\u4F53\uFF0C\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD)"
  },
  "yue-Hant": {
    name: "Cantonese (Traditional)",
    native: "\u7CB5\u8A9E (\u7E41\u9AD4)"
  },
  "yue-Hant-HK": {
    name: "Cantonese (Traditional, Hong Kong SAR China)",
    native: "\u7CB5\u8A9E (\u7E41\u9AD4\uFF0C\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u570B\u9999\u6E2F\u7279\u5225\u884C\u653F\u5340)"
  },
  zgh: {
    name: "Standard Moroccan Tamazight",
    native: "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C"
  },
  "zgh-MA": {
    name: "Standard Moroccan Tamazight (Morocco)",
    native: "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C (\u2D4D\u2D4E\u2D56\u2D54\u2D49\u2D31)"
  },
  zh: {
    name: "Chinese",
    native: "\u4E2D\u6587"
  },
  "zh-Hans": {
    name: "Chinese (Simplified)",
    native: "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09"
  },
  "zh-Hans-CN": {
    name: "Chinese (Simplified, China)",
    native: "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF0C\u4E2D\u56FD\uFF09"
  },
  "zh-Hans-HK": {
    name: "Chinese (Simplified, Hong Kong SAR China)",
    native: "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF0C\u4E2D\u56FD\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A\uFF09"
  },
  "zh-Hans-MO": {
    name: "Chinese (Simplified, Macau SAR China)",
    native: "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF0C\u4E2D\u56FD\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A\uFF09"
  },
  "zh-Hans-SG": {
    name: "Chinese (Simplified, Singapore)",
    native: "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF0C\u65B0\u52A0\u5761\uFF09"
  },
  "zh-Hant": {
    name: "Chinese (Traditional)",
    native: "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09"
  },
  "zh-Hant-HK": {
    name: "Chinese (Traditional, Hong Kong SAR China)",
    native: "\u4E2D\u6587\uFF08\u7E41\u9AD4\u5B57\uFF0C\u4E2D\u570B\u9999\u6E2F\u7279\u5225\u884C\u653F\u5340\uFF09"
  },
  "zh-Hant-MO": {
    name: "Chinese (Traditional, Macau SAR China)",
    native: "\u4E2D\u6587\uFF08\u7E41\u9AD4\u5B57\uFF0C\u4E2D\u570B\u6FB3\u9580\u7279\u5225\u884C\u653F\u5340\uFF09"
  },
  "zh-Hant-TW": {
    name: "Chinese (Traditional, Taiwan)",
    native: "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF0C\u53F0\u7063\uFF09"
  },
  zu: {
    name: "Zulu",
    native: "isiZulu"
  },
  "zu-ZA": {
    name: "Zulu (South Africa)",
    native: "isiZulu (iNingizimu Afrika)"
  }
};
const ALL_LANGUAGES = Object.keys(LOCALES).map(locale => {
  return {
    id: locale.replace(/-/g, "_"),
    title: LOCALES[locale].name,
    isDefault: !!LOCALES[locale].default
  };
});
const postLocalesQuery = '*[_type == "post" && _id == $postId][0] {\n  "slug": slug.current,\n  "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{\n    title,\n    slug,\n    language\n  },\n}';
const usePostLocalesQuery = opts => {
  return sanityPluginUtils.useListeningQuery(postLocalesQuery, {
    params: {
      postId: opts.postId
    },
    initialValue: null
  });
};
const supportedLanguagesQuery = '*[_type == "supportedLanguages"]{id, title}';
const useSupportedLanguagesQuery = () => {
  return sanityPluginUtils.useListeningQuery(supportedLanguagesQuery, {
    initialValue: []
  });
};
const SupportedLanguagesContext = react.createContext(null);
const useSupportedLanguages = () => {
  const {
    data,
    error,
    loading
  } = useSupportedLanguagesQuery();
  const [selectedLocale, setSelectedLocale] = react.useState("");
  const onLocaleChange = react.useCallback(locale => {
    setSelectedLocale(locale);
  }, []);
  const onLocaleReset = react.useCallback(() => {
    setSelectedLocale("");
  }, []);
  return {
    error,
    loading,
    selectedLocale,
    supportedLanguages: data || [],
    handleLocaleChange: onLocaleChange,
    handleLocaleReset: onLocaleReset
  };
};
const SupportedLanguagesContextProvider = props => {
  const {
    children
  } = props;
  const value = useSupportedLanguages();
  return /* @__PURE__ */jsxRuntime.jsx(SupportedLanguagesContext.Provider, {
    value,
    children
  });
};
const useSupportedLanguagesContext = () => {
  const context = react.useContext(SupportedLanguagesContext);
  if (context === null) {
    throw new Error("useSupportedLanguagesContext must be used within a SupportedLanguagesContextProvider");
  }
  return context;
};
const TranslationServiceContext = react.createContext(DEFAULT_CONFIG);
function useTranslationServiceContext() {
  return react.useContext(TranslationServiceContext);
}
function TranslationServiceProvider(props) {
  const {
    pluginConfig
  } = props;
  return /* @__PURE__ */jsxRuntime.jsx(TranslationServiceContext.Provider, {
    value: {
      ...pluginConfig
    },
    children: /* @__PURE__ */jsxRuntime.jsx(SupportedLanguagesContextProvider, {
      children: props.renderDefault(props)
    })
  });
}
const DefaultComponentInput = props => {
  return props.renderDefault(props);
};
const RootComponentInput = props => {
  const {
    supportedLanguages,
    error,
    loading,
    selectedLocale,
    handleLocaleChange,
    handleLocaleReset
  } = useSupportedLanguagesContext();
  const onLocaleChange = react.useCallback(event => {
    const locale = event.target.value;
    handleLocaleChange(locale);
  }, [handleLocaleChange]);
  const selectDisabled = loading || error || !supportedLanguages.length;
  return /* @__PURE__ */jsxRuntime.jsxs(ui.Stack, {
    space: 4,
    children: [/* @__PURE__ */jsxRuntime.jsx(ui.Flex, {
      justify: "flex-end",
      children: /* @__PURE__ */jsxRuntime.jsxs(ui.Inline, {
        space: 3,
        children: [/* @__PURE__ */jsxRuntime.jsxs(ui.Select, {
          disabled: selectDisabled,
          onChange: onLocaleChange,
          value: selectedLocale,
          style: {
            maxWidth: "275px"
          },
          children: [/* @__PURE__ */jsxRuntime.jsx("option", {
            value: "",
            children: "Select a locale"
          }), supportedLanguages.map(locale => {
            const emoji = localeEmoji__default.default(locale.id);
            const displayName = LOCALES[locale.id.replace("_", "-")].name;
            return /* @__PURE__ */jsxRuntime.jsxs("option", {
              value: locale.id,
              children: [emoji, " ", displayName]
            }, locale.id);
          })]
        }), /* @__PURE__ */jsxRuntime.jsx(ui.Button, {
          text: "Reset",
          icon: icons.RefreshIcon,
          tone: "caution",
          disabled: selectedLocale === "",
          onClick: handleLocaleReset
        })]
      })
    }), /* @__PURE__ */jsxRuntime.jsx(ui.Box, {
      children: props.renderDefault(props)
    })]
  });
};
const SanityDocumentInputComponent = props => {
  const documentType = sanity.useFormValue(["_type"]);
  const inputId = props.id;
  if (documentType === "post" && inputId === "root") {
    return /* @__PURE__ */jsxRuntime.jsx(RootComponentInput, {
      ...props
    });
  }
  return /* @__PURE__ */jsxRuntime.jsx(DefaultComponentInput, {
    ...props
  });
};
const LocaleField = props => {
  const {
    members,
    id
  } = props;
  const [supportedLanguages, setSupportedLanguages] = react.useState([]);
  const {
    supportedLanguages: supportedLanguageDocuments,
    selectedLocale
  } = useSupportedLanguagesContext();
  react.useEffect(() => {
    if (supportedLanguageDocuments.length) {
      const result = members && members.filter(member => {
        return supportedLanguageDocuments.some(d => {
          return member.name === d.id;
        });
      });
      return setSupportedLanguages(result);
    }
  }, [members, supportedLanguageDocuments]);
  const supportedLanguageFields = !selectedLocale ? supportedLanguages : supportedLanguages.filter(languageField => {
    return languageField.key === "field-".concat(selectedLocale);
  });
  return /* @__PURE__ */jsxRuntime.jsx(ui.Stack, {
    space: 2,
    children: supportedLanguageFields == null ? void 0 : supportedLanguageFields.map(language => {
      if (id === "localeTitle") {
        return /* @__PURE__ */react.createElement(sanity.MemberField, {
          ...props,
          key: language.key,
          member: language,
          renderInput: () => /* @__PURE__ */jsxRuntime.jsx(sanity.FormInput, {
            ...props,
            absolutePath: language.field.path
          }),
          renderField: props.renderField,
          renderItem: props.renderItem,
          renderPreview: props.renderPreview
        });
      }
      return /* @__PURE__ */react.createElement(sanity.MemberField, {
        ...props,
        key: language.key,
        member: language,
        renderInput: props.renderInput,
        renderField: props.renderField,
        renderItem: props.renderItem,
        renderPreview: props.renderPreview
      });
    })
  });
};
const DefaultLanguage = props => {
  const {
    apiVersion
  } = useTranslationServiceContext();
  const client = sanity.useClient({
    apiVersion
  });
  const docId = sanity.useFormValue(["_id"]);
  const isDefaultLanguage = sanity.useFormValue(["default"]);
  const [doc, setDoc] = react.useState();
  react.useEffect(() => {
    let isMounted = true;
    const fetchDocument = async () => {
      const id = docId.replace(/^drafts\./, "");
      const params = {
        type: "supportedLanguages",
        draft: "drafts.".concat(id),
        default: true
      };
      const query = "*[!(_id in [$draft]) && _type == $type && default == $default][0]";
      return client.fetch(query, params);
    };
    fetchDocument().then(document => isMounted && setDoc(document)).catch(error => console.error("Error fetching document:", error));
    return () => {
      isMounted = false;
    };
  }, [client, docId]);
  return /* @__PURE__ */jsxRuntime.jsxs(ui.Stack, {
    space: 2,
    children: [/* @__PURE__ */jsxRuntime.jsx("div", {
      children: props.renderDefault(props)
    }), /* @__PURE__ */jsxRuntime.jsx(ui.Card, {
      tone: "caution",
      padding: 2,
      radius: 2,
      children: /* @__PURE__ */jsxRuntime.jsx(ui.Text, {
        size: 1,
        muted: true,
        children: isDefaultLanguage ? "This is the default language" : "The default language is set as ".concat(doc == null ? void 0 : doc.id)
      })
    })]
  });
};
const ModalFooter = props => {
  const {
    onClose,
    onTranslate,
    disabled = false
  } = props;
  return /* @__PURE__ */jsxRuntime.jsx(ui.Flex, {
    width: "100%",
    justify: "flex-end",
    children: /* @__PURE__ */jsxRuntime.jsxs(ui.Inline, {
      space: 2,
      children: [/* @__PURE__ */jsxRuntime.jsx(ui.Button, {
        icon: icons.CloseCircleIcon,
        onClick: onClose,
        text: "Cancel",
        tone: "critical"
      }), /* @__PURE__ */jsxRuntime.jsx(ui.Button, {
        icon: icons.TransferIcon,
        onClick: onTranslate,
        text: "Translate",
        tone: "primary",
        disabled
      })]
    })
  });
};
const ModalContent = props => {
  const {
    locales,
    disabled = false,
    handleLocaleChange
  } = props;
  return /* @__PURE__ */jsxRuntime.jsxs(ui.Stack, {
    space: 4,
    children: [/* @__PURE__ */jsxRuntime.jsxs(ui.Stack, {
      space: 3,
      children: [/* @__PURE__ */jsxRuntime.jsx(ui.Text, {
        muted: true,
        size: 1,
        children: "This document has already been translated for the following locales:"
      }), /* @__PURE__ */jsxRuntime.jsx(ui.Inline, {
        space: 2,
        children: locales.map(locale => {
          return /* @__PURE__ */jsxRuntime.jsx(ui.Badge, {
            tone: "primary",
            children: locale
          }, locale);
        })
      })]
    }), /* @__PURE__ */jsxRuntime.jsxs(ui.Stack, {
      space: 3,
      children: [/* @__PURE__ */jsxRuntime.jsxs(ui.Stack, {
        space: 2,
        children: [/* @__PURE__ */jsxRuntime.jsx(ui.Text, {
          size: 1,
          weight: "semibold",
          children: "Select Locale"
        }), /* @__PURE__ */jsxRuntime.jsx(ui.Text, {
          size: 1,
          muted: true,
          children: "Choose which locale you wish to translate this document to"
        })]
      }), /* @__PURE__ */jsxRuntime.jsxs(ui.Select, {
        disabled,
        onChange: handleLocaleChange,
        children: [/* @__PURE__ */jsxRuntime.jsx("option", {
          value: "",
          children: "Select a locale"
        }), Object.keys(LOCALES).filter(locale => !locales.includes(locale)).map(locale => {
          const emoji = localeEmoji__default.default(locale);
          return /* @__PURE__ */jsxRuntime.jsxs("option", {
            value: locale,
            children: [emoji, " ", LOCALES[locale].name]
          }, locale);
        })]
      })]
    })]
  });
};
const TranslationServiceAction = props => {
  var _a;
  const {
    apiVersion
  } = useTranslationServiceContext();
  const {
    id,
    published,
    draft
  } = props;
  const doc = draft || published;
  const toast = ui.useToast();
  const [modalOpen, setModalOpen] = react.useState(false);
  const [locale, setLocale] = react.useState("");
  const {
    data,
    loading,
    error
  } = usePostLocalesQuery({
    postId: id
  });
  const client = sanity.useClient({
    apiVersion
  });
  const onClose = react.useCallback(() => {
    setModalOpen(false);
  }, []);
  const onLocaleChange = react.useCallback(event => {
    const {
      value
    } = event.target;
    const formattedLocale = value.replace("-", "_");
    setLocale(formattedLocale);
  }, []);
  const sendTranslation = value => {
    return fetch("http://localhost:3000/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        post: doc,
        locale: value
      })
    });
  };
  const onTranslate = async () => {
    try {
      await client.patch(doc._id).set({
        translationProcessing: true
      }).commit();
      sendTranslation(locale);
      onClose();
      toast.push({
        closable: true,
        status: "success",
        title: "Translation Started!",
        description: "Your document is being translated. You will be notified when it is complete."
      });
    } catch (err) {
      toast.push({
        closable: true,
        status: "error",
        title: "Error",
        description: "There was an error translating this document. Please try again."
      });
    }
  };
  const disabled = !data || loading || (doc == null ? void 0 : doc.translationProcessing);
  const locales = ((_a = data == null ? void 0 : data._translations) == null ? void 0 : _a.map(t => t.language)) || [];
  return {
    disabled,
    icon: icons.TranslateIcon,
    label: "Translate",
    tone: "primary",
    onHandle: () => {
      setModalOpen(true);
    },
    dialog: modalOpen && {
      type: "dialog",
      header: "Translate Document",
      content: /* @__PURE__ */jsxRuntime.jsx(ModalContent, {
        locales,
        handleLocaleChange: onLocaleChange,
        disabled: !!error
      }),
      footer: /* @__PURE__ */jsxRuntime.jsx(ModalFooter, {
        onClose,
        onTranslate,
        disabled: !!error || !locale
      }),
      showCloseButton: true,
      onClose
    }
  };
};
var localeBlockContent = sanity.defineType({
  title: "Localized block content",
  name: "localeBlockContent",
  type: "object",
  components: {
    input: LocaleField
  },
  fields: ALL_LANGUAGES.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "array",
    of: [{
      title: "content",
      type: "block"
    }]
  }))
});
var localeTitle = sanity.defineType({
  title: "Localized string",
  name: "localeTitle",
  type: "object",
  components: {
    input: LocaleField
  },
  fields: ALL_LANGUAGES.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "string"
  }))
});
var supportedLanguages = sanity.defineType({
  name: "supportedLanguages",
  title: "Languages",
  type: "document",
  icon: icons.TranslateIcon,
  fields: [sanity.defineField({
    name: "id",
    title: "Id",
    type: "string"
  }), sanity.defineField({
    name: "title",
    title: "Title",
    type: "string"
  }), sanity.defineField({
    name: "default",
    title: "Default",
    type: "boolean",
    readOnly: true,
    components: {
      field: DefaultLanguage
    }
  })],
  preview: {
    select: {
      title: "id",
      description: "title"
    }
  }
});
const schemaTypes = [localeTitle, localeBlockContent, supportedLanguages];
const sanityPluginTranslation = sanity.definePlugin(function () {
  let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    apiKey: "",
    apiVersion: ( /* @__PURE__ */new Date()).toISOString().split("T")[0]
  };
  const pluginConfig = {
    ...DEFAULT_CONFIG,
    ...config
  };
  return {
    name: "sanity-plugin-translation",
    studio: {
      components: {
        layout: props => TranslationServiceProvider({
          ...props,
          pluginConfig
        })
      }
    },
    document: {
      actions: (prev, context) => {
        return context.schemaType === "post" ? [...prev, TranslationServiceAction] : prev;
      }
    },
    schema: {
      types: schemaTypes
    },
    form: {
      components: {
        input: SanityDocumentInputComponent
      }
    }
  };
});
exports.sanityPluginTranslation = sanityPluginTranslation;
//# sourceMappingURL=index.js.map
