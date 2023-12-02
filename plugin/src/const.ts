import {Locale} from './types'

export const DEFAULT_CONFIG = {
  apiKey: '',
  sanityToken: '',
  sanityApiVersion: new Date().toISOString().split('T')[0],
  schemaTypes: [],
}

export const LOCALES: Record<string, Locale> = {
  'zh-CN': {
    name: 'Chinese (China)',
    native: '中文(中国)',
  },
  'zh-TW': {
    name: 'Chinese (Traditional, Taiwan)',
    native: '中文（繁體，台灣）',
  },
  af: {
    name: 'Afrikaans',
    native: 'Afrikaans',
  },
  'af-NA': {
    name: 'Afrikaans (Namibia)',
    native: 'Afrikaans (Namibië)',
  },
  'af-ZA': {
    name: 'Afrikaans (South Africa)',
    native: 'Afrikaans (Suid-Afrika)',
  },
  agq: {
    name: 'Aghem',
    native: 'Aghem',
  },
  'agq-CM': {
    name: 'Aghem (Cameroon)',
    native: 'Aghem (Kàmàlûŋ)',
  },
  ak: {
    name: 'Akan',
    native: 'Akan',
  },
  'ak-GH': {
    name: 'Akan (Ghana)',
    native: 'Akan (Gaana)',
  },
  am: {
    name: 'Amharic',
    native: 'አማርኛ',
  },
  'am-ET': {
    name: 'Amharic (Ethiopia)',
    native: 'አማርኛ (ኢትዮጵያ)',
  },
  ar: {
    name: 'Arabic',
    native: 'العربية',
  },
  'ar-001': {
    name: 'Arabic (World)',
    native: 'العربية (العالم)',
  },
  'ar-AE': {
    name: 'Arabic (United Arab Emirates)',
    native: 'العربية (الإمارات العربية المتحدة)',
  },
  'ar-BH': {
    name: 'Arabic (Bahrain)',
    native: 'العربية (البحرين)',
  },
  'ar-DJ': {
    name: 'Arabic (Djibouti)',
    native: 'العربية (جيبوتي)',
  },
  'ar-DZ': {
    name: 'Arabic (Algeria)',
    native: 'العربية (الجزائر)',
  },
  'ar-EG': {
    name: 'Arabic (Egypt)',
    native: 'العربية (مصر)',
  },
  'ar-EH': {
    name: 'Arabic (Western Sahara)',
    native: 'العربية (الصحراء الغربية)',
  },
  'ar-ER': {
    name: 'Arabic (Eritrea)',
    native: 'العربية (إريتريا)',
  },
  'ar-IL': {
    name: 'Arabic (Israel)',
    native: 'العربية (إسرائيل)',
  },
  'ar-IQ': {
    name: 'Arabic (Iraq)',
    native: 'العربية (العراق)',
  },
  'ar-JO': {
    name: 'Arabic (Jordan)',
    native: 'العربية (الأردن)',
  },
  'ar-KM': {
    name: 'Arabic (Comoros)',
    native: 'العربية (جزر القمر)',
  },
  'ar-KW': {
    name: 'Arabic (Kuwait)',
    native: 'العربية (الكويت)',
  },
  'ar-LB': {
    name: 'Arabic (Lebanon)',
    native: 'العربية (لبنان)',
  },
  'ar-LY': {
    name: 'Arabic (Libya)',
    native: 'العربية (ليبيا)',
  },
  'ar-MA': {
    name: 'Arabic (Morocco)',
    native: 'العربية (المغرب)',
  },
  'ar-MR': {
    name: 'Arabic (Mauritania)',
    native: 'العربية (موريتانيا)',
  },
  'ar-OM': {
    name: 'Arabic (Oman)',
    native: 'العربية (عُمان)',
  },
  'ar-PS': {
    name: 'Arabic (Palestinian Territories)',
    native: 'العربية (الأراضي الفلسطينية)',
  },
  'ar-QA': {
    name: 'Arabic (Qatar)',
    native: 'العربية (قطر)',
  },
  'ar-SA': {
    name: 'Arabic (Saudi Arabia)',
    native: 'العربية (المملكة العربية السعودية)',
  },
  'ar-SD': {
    name: 'Arabic (Sudan)',
    native: 'العربية (السودان)',
  },
  'ar-SO': {
    name: 'Arabic (Somalia)',
    native: 'العربية (الصومال)',
  },
  'ar-SS': {
    name: 'Arabic (South Sudan)',
    native: 'العربية (جنوب السودان)',
  },
  'ar-SY': {
    name: 'Arabic (Syria)',
    native: 'العربية (سوريا)',
  },
  'ar-TD': {
    name: 'Arabic (Chad)',
    native: 'العربية (تشاد)',
  },
  'ar-TN': {
    name: 'Arabic (Tunisia)',
    native: 'العربية (تونس)',
  },
  'ar-YE': {
    name: 'Arabic (Yemen)',
    native: 'العربية (اليمن)',
  },
  as: {
    name: 'Assamese',
    native: 'অসমীয়া',
  },
  'as-IN': {
    name: 'Assamese (India)',
    native: 'অসমীয়া (ভারত)',
  },
  asa: {
    name: 'Asu',
    native: 'Kipare',
  },
  'asa-TZ': {
    name: 'Asu (Tanzania)',
    native: 'Kipare (Tadhania)',
  },
  ast: {
    name: 'Asturian',
    native: 'asturianu',
  },
  'ast-ES': {
    name: 'Asturian (Spain)',
    native: 'asturianu (España)',
  },
  az: {
    name: 'Azerbaijani',
    native: 'azərbaycan',
  },
  'az-Cyrl': {
    name: 'Azerbaijani (Cyrillic)',
    native: 'азәрбајҹан (Кирил)',
  },
  'az-Cyrl-AZ': {
    name: 'Azerbaijani (Cyrillic, Azerbaijan)',
    native: 'азәрбајҹан (Кирил, Азәрбајҹан)',
  },
  'az-Latn': {
    name: 'Azerbaijani (Latin)',
    native: 'azərbaycan (latın)',
  },
  'az-Latn-AZ': {
    name: 'Azerbaijani (Latin, Azerbaijan)',
    native: 'azərbaycan (latın, Azərbaycan)',
  },
  bas: {
    name: 'Basaa',
    native: 'Ɓàsàa',
  },
  'bas-CM': {
    name: 'Basaa (Cameroon)',
    native: 'Ɓàsàa (Kàmɛ̀rûn)',
  },
  be: {
    name: 'Belarusian',
    native: 'беларуская',
  },
  'be-BY': {
    name: 'Belarusian (Belarus)',
    native: 'беларуская (Беларусь)',
  },
  bem: {
    name: 'Bemba',
    native: 'Ichibemba',
  },
  'bem-ZM': {
    name: 'Bemba (Zambia)',
    native: 'Ichibemba (Zambia)',
  },
  bez: {
    name: 'Bena',
    native: 'Hibena',
  },
  'bez-TZ': {
    name: 'Bena (Tanzania)',
    native: 'Hibena (Hutanzania)',
  },
  bg: {
    name: 'Bulgarian',
    native: 'български',
  },
  'bg-BG': {
    name: 'Bulgarian (Bulgaria)',
    native: 'български (България)',
  },
  bm: {
    name: 'Bambara',
    native: 'bamanakan',
  },
  'bm-ML': {
    name: 'Bambara (Mali)',
    native: 'bamanakan (Mali)',
  },
  bn: {
    name: 'Bangla',
    native: 'বাংলা',
  },
  'bn-BD': {
    name: 'Bangla (Bangladesh)',
    native: 'বাংলা (বাংলাদেশ)',
  },
  'bn-IN': {
    name: 'Bangla (India)',
    native: 'বাংলা (ভারত)',
  },
  bo: {
    name: 'Tibetan',
    native: 'བོད་སྐད་',
  },
  'bo-CN': {
    name: 'Tibetan (China)',
    native: 'བོད་སྐད་ (རྒྱ་ནག)',
  },
  'bo-IN': {
    name: 'Tibetan (India)',
    native: 'བོད་སྐད་ (རྒྱ་གར་)',
  },
  br: {
    name: 'Breton',
    native: 'brezhoneg',
  },
  'br-FR': {
    name: 'Breton (France)',
    native: 'brezhoneg (Frañs)',
  },
  brx: {
    name: 'Bodo',
    native: 'बड़ो',
  },
  'brx-IN': {
    name: 'Bodo (India)',
    native: 'बड़ो (भारत)',
  },
  bs: {
    name: 'Bosnian',
    native: 'bosanski',
  },
  'bs-Cyrl': {
    name: 'Bosnian (Cyrillic)',
    native: 'босански (ћирилица)',
  },
  'bs-Cyrl-BA': {
    name: 'Bosnian (Cyrillic, Bosnia & Herzegovina)',
    native: 'босански (ћирилица, Босна и Херцеговина)',
  },
  'bs-Latn': {
    name: 'Bosnian (Latin)',
    native: 'bosanski (latinica)',
  },
  'bs-Latn-BA': {
    name: 'Bosnian (Latin, Bosnia & Herzegovina)',
    native: 'bosanski (latinica, Bosna i Hercegovina)',
  },
  ca: {
    name: 'Catalan',
    native: 'català',
  },
  'ca-AD': {
    name: 'Catalan (Andorra)',
    native: 'català (Andorra)',
  },
  'ca-ES': {
    name: 'Catalan (Spain)',
    native: 'català (Espanya)',
  },
  'ca-FR': {
    name: 'Catalan (France)',
    native: 'català (França)',
  },
  'ca-IT': {
    name: 'Catalan (Italy)',
    native: 'català (Itàlia)',
  },
  ccp: {
    name: 'Chakma',
    native: '𑄌𑄋𑄴𑄟𑄳𑄦',
  },
  'ccp-BD': {
    name: 'Chakma (Bangladesh)',
    native: '𑄌𑄋𑄴𑄟𑄳𑄦 (𑄝𑄁𑄣𑄘𑄬𑄌𑄴)',
  },
  'ccp-IN': {
    name: 'Chakma (India)',
    native: '𑄌𑄋𑄴𑄟𑄳𑄦 (𑄞𑄢𑄧𑄖𑄴)',
  },
  ce: {
    name: 'Chechen',
    native: 'нохчийн',
  },
  'ce-RU': {
    name: 'Chechen (Russia)',
    native: 'нохчийн (Росси)',
  },
  cgg: {
    name: 'Chiga',
    native: 'Rukiga',
  },
  'cgg-UG': {
    name: 'Chiga (Uganda)',
    native: 'Rukiga (Uganda)',
  },
  chr: {
    name: 'Cherokee',
    native: 'ᏣᎳᎩ',
  },
  'chr-US': {
    name: 'Cherokee (United States)',
    native: 'ᏣᎳᎩ (ᏌᏊ ᎢᏳᎾᎵᏍᏔᏅ ᏍᎦᏚᎩ)',
  },
  ckb: {
    name: 'Central Kurdish',
    native: 'کوردیی ناوەندی',
  },
  'ckb-IQ': {
    name: 'Central Kurdish (Iraq)',
    native: 'کوردیی ناوەندی (عێراق)',
  },
  'ckb-IR': {
    name: 'Central Kurdish (Iran)',
    native: 'کوردیی ناوەندی (ئێران)',
  },
  cs: {
    name: 'Czech',
    native: 'čeština',
  },
  'cs-CZ': {
    name: 'Czech (Czechia)',
    native: 'čeština (Česko)',
  },
  cy: {
    name: 'Welsh',
    native: 'Cymraeg',
  },
  'cy-GB': {
    name: 'Welsh (United Kingdom)',
    native: 'Cymraeg (Y Deyrnas Unedig)',
  },
  da: {
    name: 'Danish',
    native: 'dansk',
  },
  'da-DK': {
    name: 'Danish (Denmark)',
    native: 'dansk (Danmark)',
  },
  'da-GL': {
    name: 'Danish (Greenland)',
    native: 'dansk (Grønland)',
  },
  dav: {
    name: 'Taita',
    native: 'Kitaita',
  },
  'dav-KE': {
    name: 'Taita (Kenya)',
    native: 'Kitaita (Kenya)',
  },
  de: {
    name: 'German',
    native: 'Deutsch',
  },
  'de-AT': {
    name: 'German (Austria)',
    native: 'Deutsch (Österreich)',
  },
  'de-BE': {
    name: 'German (Belgium)',
    native: 'Deutsch (Belgien)',
  },
  'de-CH': {
    name: 'German (Switzerland)',
    native: 'Deutsch (Schweiz)',
  },
  'de-DE': {
    name: 'German (Germany)',
    native: 'Deutsch (Deutschland)',
  },
  'de-IT': {
    name: 'German (Italy)',
    native: 'Deutsch (Italien)',
  },
  'de-LI': {
    name: 'German (Liechtenstein)',
    native: 'Deutsch (Liechtenstein)',
  },
  'de-LU': {
    name: 'German (Luxembourg)',
    native: 'Deutsch (Luxemburg)',
  },
  dje: {
    name: 'Zarma',
    native: 'Zarmaciine',
  },
  'dje-NE': {
    name: 'Zarma (Niger)',
    native: 'Zarmaciine (Nižer)',
  },
  dsb: {
    name: 'Lower Sorbian',
    native: 'dolnoserbšćina',
  },
  'dsb-DE': {
    name: 'Lower Sorbian (Germany)',
    native: 'dolnoserbšćina (Nimska)',
  },
  dua: {
    name: 'Duala',
    native: 'duálá',
  },
  'dua-CM': {
    name: 'Duala (Cameroon)',
    native: 'duálá (Cameroun)',
  },
  dyo: {
    name: 'Jola-Fonyi',
    native: 'joola',
  },
  'dyo-SN': {
    name: 'Jola-Fonyi (Senegal)',
    native: 'joola (Senegal)',
  },
  dz: {
    name: 'Dzongkha',
    native: 'རྫོང་ཁ',
  },
  'dz-BT': {
    name: 'Dzongkha (Bhutan)',
    native: 'རྫོང་ཁ། (འབྲུག།)',
  },
  ebu: {
    name: 'Embu',
    native: 'Kĩembu',
  },
  'ebu-KE': {
    name: 'Embu (Kenya)',
    native: 'Kĩembu (Kenya)',
  },
  ee: {
    name: 'Ewe',
    native: 'Eʋegbe',
  },
  'ee-GH': {
    name: 'Ewe (Ghana)',
    native: 'Eʋegbe (Ghana nutome)',
  },
  'ee-TG': {
    name: 'Ewe (Togo)',
    native: 'Eʋegbe (Togo nutome)',
  },
  el: {
    name: 'Greek',
    native: 'Ελληνικά',
  },
  'el-CY': {
    name: 'Greek (Cyprus)',
    native: 'Ελληνικά (Κύπρος)',
  },
  'el-GR': {
    name: 'Greek (Greece)',
    native: 'Ελληνικά (Ελλάδα)',
  },
  en: {
    name: 'English',
    native: 'English',
  },
  'en-001': {
    name: 'English (World)',
    native: 'English (World)',
  },
  'en-150': {
    name: 'English (Europe)',
    native: 'English (Europe)',
  },
  'en-AG': {
    name: 'English (Antigua & Barbuda)',
    native: 'English (Antigua & Barbuda)',
  },
  'en-AI': {
    name: 'English (Anguilla)',
    native: 'English (Anguilla)',
  },
  'en-AS': {
    name: 'English (American Samoa)',
    native: 'English (American Samoa)',
  },
  'en-AT': {
    name: 'English (Austria)',
    native: 'English (Austria)',
  },
  'en-AU': {
    name: 'English (Australia)',
    native: 'English (Australia)',
  },
  'en-BB': {
    name: 'English (Barbados)',
    native: 'English (Barbados)',
  },
  'en-BE': {
    name: 'English (Belgium)',
    native: 'English (Belgium)',
  },
  'en-BI': {
    name: 'English (Burundi)',
    native: 'English (Burundi)',
  },
  'en-BM': {
    name: 'English (Bermuda)',
    native: 'English (Bermuda)',
  },
  'en-BS': {
    name: 'English (Bahamas)',
    native: 'English (Bahamas)',
  },
  'en-BW': {
    name: 'English (Botswana)',
    native: 'English (Botswana)',
  },
  'en-BZ': {
    name: 'English (Belize)',
    native: 'English (Belize)',
  },
  'en-CA': {
    name: 'English (Canada)',
    native: 'English (Canada)',
  },
  'en-CC': {
    name: 'English (Cocos [Keeling] Islands)',
    native: 'English (Cocos [Keeling] Islands)',
  },
  'en-CH': {
    name: 'English (Switzerland)',
    native: 'English (Switzerland)',
  },
  'en-CK': {
    name: 'English (Cook Islands)',
    native: 'English (Cook Islands)',
  },
  'en-CM': {
    name: 'English (Cameroon)',
    native: 'English (Cameroon)',
  },
  'en-CX': {
    name: 'English (Christmas Island)',
    native: 'English (Christmas Island)',
  },
  'en-CY': {
    name: 'English (Cyprus)',
    native: 'English (Cyprus)',
  },
  'en-DE': {
    name: 'English (Germany)',
    native: 'English (Germany)',
  },
  'en-DG': {
    name: 'English (Diego Garcia)',
    native: 'English (Diego Garcia)',
  },
  'en-DK': {
    name: 'English (Denmark)',
    native: 'English (Denmark)',
  },
  'en-DM': {
    name: 'English (Dominica)',
    native: 'English (Dominica)',
  },
  'en-ER': {
    name: 'English (Eritrea)',
    native: 'English (Eritrea)',
  },
  'en-FI': {
    name: 'English (Finland)',
    native: 'English (Finland)',
  },
  'en-FJ': {
    name: 'English (Fiji)',
    native: 'English (Fiji)',
  },
  'en-FK': {
    name: 'English (Falkland Islands)',
    native: 'English (Falkland Islands)',
  },
  'en-FM': {
    name: 'English (Micronesia)',
    native: 'English (Micronesia)',
  },
  'en-GB': {
    name: 'English (United Kingdom)',
    native: 'English (United Kingdom)',
  },
  'en-GD': {
    name: 'English (Grenada)',
    native: 'English (Grenada)',
  },
  'en-GG': {
    name: 'English (Guernsey)',
    native: 'English (Guernsey)',
  },
  'en-GH': {
    name: 'English (Ghana)',
    native: 'English (Ghana)',
  },
  'en-GI': {
    name: 'English (Gibraltar)',
    native: 'English (Gibraltar)',
  },
  'en-GM': {
    name: 'English (Gambia)',
    native: 'English (Gambia)',
  },
  'en-GU': {
    name: 'English (Guam)',
    native: 'English (Guam)',
  },
  'en-GY': {
    name: 'English (Guyana)',
    native: 'English (Guyana)',
  },
  'en-HK': {
    name: 'English (Hong Kong SAR China)',
    native: 'English (Hong Kong SAR China)',
  },
  'en-IE': {
    name: 'English (Ireland)',
    native: 'English (Ireland)',
  },
  'en-IL': {
    name: 'English (Israel)',
    native: 'English (Israel)',
  },
  'en-IM': {
    name: 'English (Isle of Man)',
    native: 'English (Isle of Man)',
  },
  'en-IN': {
    name: 'English (India)',
    native: 'English (India)',
  },
  'en-IO': {
    name: 'English (British Indian Ocean Territory)',
    native: 'English (British Indian Ocean Territory)',
  },
  'en-JE': {
    name: 'English (Jersey)',
    native: 'English (Jersey)',
  },
  'en-JM': {
    name: 'English (Jamaica)',
    native: 'English (Jamaica)',
  },
  'en-KE': {
    name: 'English (Kenya)',
    native: 'English (Kenya)',
  },
  'en-KI': {
    name: 'English (Kiribati)',
    native: 'English (Kiribati)',
  },
  'en-KN': {
    name: 'English (St. Kitts & Nevis)',
    native: 'English (St. Kitts & Nevis)',
  },
  'en-KY': {
    name: 'English (Cayman Islands)',
    native: 'English (Cayman Islands)',
  },
  'en-LC': {
    name: 'English (St. Lucia)',
    native: 'English (St. Lucia)',
  },
  'en-LR': {
    name: 'English (Liberia)',
    native: 'English (Liberia)',
  },
  'en-LS': {
    name: 'English (Lesotho)',
    native: 'English (Lesotho)',
  },
  'en-MG': {
    name: 'English (Madagascar)',
    native: 'English (Madagascar)',
  },
  'en-MH': {
    name: 'English (Marshall Islands)',
    native: 'English (Marshall Islands)',
  },
  'en-MO': {
    name: 'English (Macau SAR China)',
    native: 'English (Macau SAR China)',
  },
  'en-MP': {
    name: 'English (Northern Mariana Islands)',
    native: 'English (Northern Mariana Islands)',
  },
  'en-MS': {
    name: 'English (Montserrat)',
    native: 'English (Montserrat)',
  },
  'en-MT': {
    name: 'English (Malta)',
    native: 'English (Malta)',
  },
  'en-MU': {
    name: 'English (Mauritius)',
    native: 'English (Mauritius)',
  },
  'en-MW': {
    name: 'English (Malawi)',
    native: 'English (Malawi)',
  },
  'en-MY': {
    name: 'English (Malaysia)',
    native: 'English (Malaysia)',
  },
  'en-NA': {
    name: 'English (Namibia)',
    native: 'English (Namibia)',
  },
  'en-NF': {
    name: 'English (Norfolk Island)',
    native: 'English (Norfolk Island)',
  },
  'en-NG': {
    name: 'English (Nigeria)',
    native: 'English (Nigeria)',
  },
  'en-NL': {
    name: 'English (Netherlands)',
    native: 'English (Netherlands)',
  },
  'en-NR': {
    name: 'English (Nauru)',
    native: 'English (Nauru)',
  },
  'en-NU': {
    name: 'English (Niue)',
    native: 'English (Niue)',
  },
  'en-NZ': {
    name: 'English (New Zealand)',
    native: 'English (New Zealand)',
  },
  'en-PG': {
    name: 'English (Papua New Guinea)',
    native: 'English (Papua New Guinea)',
  },
  'en-PH': {
    name: 'English (Philippines)',
    native: 'English (Philippines)',
  },
  'en-PK': {
    name: 'English (Pakistan)',
    native: 'English (Pakistan)',
  },
  'en-PN': {
    name: 'English (Pitcairn Islands)',
    native: 'English (Pitcairn Islands)',
  },
  'en-PR': {
    name: 'English (Puerto Rico)',
    native: 'English (Puerto Rico)',
  },
  'en-PW': {
    name: 'English (Palau)',
    native: 'English (Palau)',
  },
  'en-RW': {
    name: 'English (Rwanda)',
    native: 'English (Rwanda)',
  },
  'en-SB': {
    name: 'English (Solomon Islands)',
    native: 'English (Solomon Islands)',
  },
  'en-SC': {
    name: 'English (Seychelles)',
    native: 'English (Seychelles)',
  },
  'en-SD': {
    name: 'English (Sudan)',
    native: 'English (Sudan)',
  },
  'en-SE': {
    name: 'English (Sweden)',
    native: 'English (Sweden)',
  },
  'en-SG': {
    name: 'English (Singapore)',
    native: 'English (Singapore)',
  },
  'en-SH': {
    name: 'English (St. Helena)',
    native: 'English (St. Helena)',
  },
  'en-SI': {
    name: 'English (Slovenia)',
    native: 'English (Slovenia)',
  },
  'en-SL': {
    name: 'English (Sierra Leone)',
    native: 'English (Sierra Leone)',
  },
  'en-SS': {
    name: 'English (South Sudan)',
    native: 'English (South Sudan)',
  },
  'en-SX': {
    name: 'English (Sint Maarten)',
    native: 'English (Sint Maarten)',
  },
  'en-SZ': {
    name: 'English (Swaziland)',
    native: 'English (Swaziland)',
  },
  'en-TC': {
    name: 'English (Turks & Caicos Islands)',
    native: 'English (Turks & Caicos Islands)',
  },
  'en-TK': {
    name: 'English (Tokelau)',
    native: 'English (Tokelau)',
  },
  'en-TO': {
    name: 'English (Tonga)',
    native: 'English (Tonga)',
  },
  'en-TT': {
    name: 'English (Trinidad & Tobago)',
    native: 'English (Trinidad & Tobago)',
  },
  'en-TV': {
    name: 'English (Tuvalu)',
    native: 'English (Tuvalu)',
  },
  'en-TZ': {
    name: 'English (Tanzania)',
    native: 'English (Tanzania)',
  },
  'en-UG': {
    name: 'English (Uganda)',
    native: 'English (Uganda)',
  },
  'en-UM': {
    name: 'English (U.S. Outlying Islands)',
    native: 'English (U.S. Outlying Islands)',
  },
  'en-US': {
    name: 'English (United States)',
    native: 'English (United States)',
    default: true,
  },
  'en-US-POSIX': {
    name: 'English (United States, Computer)',
    native: 'English (United States, Computer)',
  },
  'en-VC': {
    name: 'English (St. Vincent & Grenadines)',
    native: 'English (St. Vincent & Grenadines)',
  },
  'en-VG': {
    name: 'English (British Virgin Islands)',
    native: 'English (British Virgin Islands)',
  },
  'en-VI': {
    name: 'English (U.S. Virgin Islands)',
    native: 'English (U.S. Virgin Islands)',
  },
  'en-VU': {
    name: 'English (Vanuatu)',
    native: 'English (Vanuatu)',
  },
  'en-WS': {
    name: 'English (Samoa)',
    native: 'English (Samoa)',
  },
  'en-ZA': {
    name: 'English (South Africa)',
    native: 'English (South Africa)',
  },
  'en-ZM': {
    name: 'English (Zambia)',
    native: 'English (Zambia)',
  },
  'en-ZW': {
    name: 'English (Zimbabwe)',
    native: 'English (Zimbabwe)',
  },
  eo: {
    name: 'Esperanto',
    native: 'esperanto',
  },
  es: {
    name: 'Spanish',
    native: 'español',
  },
  'es-419': {
    name: 'Spanish (Latin America)',
    native: 'español (Latinoamérica)',
  },
  'es-AR': {
    name: 'Spanish (Argentina)',
    native: 'español (Argentina)',
  },
  'es-BO': {
    name: 'Spanish (Bolivia)',
    native: 'español (Bolivia)',
  },
  'es-BR': {
    name: 'Spanish (Brazil)',
    native: 'español (Brasil)',
  },
  'es-BZ': {
    name: 'Spanish (Belize)',
    native: 'español (Belice)',
  },
  'es-CL': {
    name: 'Spanish (Chile)',
    native: 'español (Chile)',
  },
  'es-CO': {
    name: 'Spanish (Colombia)',
    native: 'español (Colombia)',
  },
  'es-CR': {
    name: 'Spanish (Costa Rica)',
    native: 'español (Costa Rica)',
  },
  'es-CU': {
    name: 'Spanish (Cuba)',
    native: 'español (Cuba)',
  },
  'es-DO': {
    name: 'Spanish (Dominican Republic)',
    native: 'español (República Dominicana)',
  },
  'es-EA': {
    name: 'Spanish (Ceuta & Melilla)',
    native: 'español (Ceuta y Melilla)',
  },
  'es-EC': {
    name: 'Spanish (Ecuador)',
    native: 'español (Ecuador)',
  },
  'es-ES': {
    name: 'Spanish (Spain)',
    native: 'español (España)',
  },
  'es-GQ': {
    name: 'Spanish (Equatorial Guinea)',
    native: 'español (Guinea Ecuatorial)',
  },
  'es-GT': {
    name: 'Spanish (Guatemala)',
    native: 'español (Guatemala)',
  },
  'es-HN': {
    name: 'Spanish (Honduras)',
    native: 'español (Honduras)',
  },
  'es-IC': {
    name: 'Spanish (Canary Islands)',
    native: 'español (Canarias)',
  },
  'es-MX': {
    name: 'Spanish (Mexico)',
    native: 'español (México)',
  },
  'es-NI': {
    name: 'Spanish (Nicaragua)',
    native: 'español (Nicaragua)',
  },
  'es-PA': {
    name: 'Spanish (Panama)',
    native: 'español (Panamá)',
  },
  'es-PE': {
    name: 'Spanish (Peru)',
    native: 'español (Perú)',
  },
  'es-PH': {
    name: 'Spanish (Philippines)',
    native: 'español (Filipinas)',
  },
  'es-PR': {
    name: 'Spanish (Puerto Rico)',
    native: 'español (Puerto Rico)',
  },
  'es-PY': {
    name: 'Spanish (Paraguay)',
    native: 'español (Paraguay)',
  },
  'es-SV': {
    name: 'Spanish (El Salvador)',
    native: 'español (El Salvador)',
  },
  'es-US': {
    name: 'Spanish (United States)',
    native: 'español (Estados Unidos)',
  },
  'es-UY': {
    name: 'Spanish (Uruguay)',
    native: 'español (Uruguay)',
  },
  'es-VE': {
    name: 'Spanish (Venezuela)',
    native: 'español (Venezuela)',
  },
  et: {
    name: 'Estonian',
    native: 'eesti',
  },
  'et-EE': {
    name: 'Estonian (Estonia)',
    native: 'eesti (Eesti)',
  },
  eu: {
    name: 'Basque',
    native: 'euskara',
  },
  'eu-ES': {
    name: 'Basque (Spain)',
    native: 'euskara (Espainia)',
  },
  ewo: {
    name: 'Ewondo',
    native: 'ewondo',
  },
  'ewo-CM': {
    name: 'Ewondo (Cameroon)',
    native: 'ewondo (Kamərún)',
  },
  fa: {
    name: 'Persian',
    native: 'فارسی',
  },
  'fa-AF': {
    name: 'Persian (Afghanistan)',
    native: 'فارسی (افغانستان)',
  },
  'fa-IR': {
    name: 'Persian (Iran)',
    native: 'فارسی (ایران)',
  },
  ff: {
    name: 'Fulah',
    native: 'Pulaar',
  },
  'ff-CM': {
    name: 'Fulah (Cameroon)',
    native: 'Pulaar (Kameruun)',
  },
  'ff-GN': {
    name: 'Fulah (Guinea)',
    native: 'Pulaar (Gine)',
  },
  'ff-MR': {
    name: 'Fulah (Mauritania)',
    native: 'Pulaar (Muritani)',
  },
  'ff-SN': {
    name: 'Fulah (Senegal)',
    native: 'Pulaar (Senegaal)',
  },
  fi: {
    name: 'Finnish',
    native: 'suomi',
  },
  'fi-FI': {
    name: 'Finnish (Finland)',
    native: 'suomi (Suomi)',
  },
  fil: {
    name: 'Filipino',
    native: 'Filipino',
  },
  'fil-PH': {
    name: 'Filipino (Philippines)',
    native: 'Filipino (Pilipinas)',
  },
  fo: {
    name: 'Faroese',
    native: 'føroyskt',
  },
  'fo-DK': {
    name: 'Faroese (Denmark)',
    native: 'føroyskt (Danmark)',
  },
  'fo-FO': {
    name: 'Faroese (Faroe Islands)',
    native: 'føroyskt (Føroyar)',
  },
  fr: {
    name: 'French',
    native: 'français',
  },
  'fr-BE': {
    name: 'French (Belgium)',
    native: 'français (Belgique)',
  },
  'fr-BF': {
    name: 'French (Burkina Faso)',
    native: 'français (Burkina Faso)',
  },
  'fr-BI': {
    name: 'French (Burundi)',
    native: 'français (Burundi)',
  },
  'fr-BJ': {
    name: 'French (Benin)',
    native: 'français (Bénin)',
  },
  'fr-BL': {
    name: 'French (St. Barthélemy)',
    native: 'français (Saint-Barthélemy)',
  },
  'fr-CA': {
    name: 'French (Canada)',
    native: 'français (Canada)',
  },
  'fr-CD': {
    name: 'French (Congo - Kinshasa)',
    native: 'français (Congo-Kinshasa)',
  },
  'fr-CF': {
    name: 'French (Central African Republic)',
    native: 'français (République centrafricaine)',
  },
  'fr-CG': {
    name: 'French (Congo - Brazzaville)',
    native: 'français (Congo-Brazzaville)',
  },
  'fr-CH': {
    name: 'French (Switzerland)',
    native: 'français (Suisse)',
  },
  'fr-CI': {
    name: 'French (Côte d’Ivoire)',
    native: 'français (Côte d’Ivoire)',
  },
  'fr-CM': {
    name: 'French (Cameroon)',
    native: 'français (Cameroun)',
  },
  'fr-DJ': {
    name: 'French (Djibouti)',
    native: 'français (Djibouti)',
  },
  'fr-DZ': {
    name: 'French (Algeria)',
    native: 'français (Algérie)',
  },
  'fr-FR': {
    name: 'French (France)',
    native: 'français (France)',
  },
  'fr-GA': {
    name: 'French (Gabon)',
    native: 'français (Gabon)',
  },
  'fr-GF': {
    name: 'French (French Guiana)',
    native: 'français (Guyane française)',
  },
  'fr-GN': {
    name: 'French (Guinea)',
    native: 'français (Guinée)',
  },
  'fr-GP': {
    name: 'French (Guadeloupe)',
    native: 'français (Guadeloupe)',
  },
  'fr-GQ': {
    name: 'French (Equatorial Guinea)',
    native: 'français (Guinée équatoriale)',
  },
  'fr-HT': {
    name: 'French (Haiti)',
    native: 'français (Haïti)',
  },
  'fr-KM': {
    name: 'French (Comoros)',
    native: 'français (Comores)',
  },
  'fr-LU': {
    name: 'French (Luxembourg)',
    native: 'français (Luxembourg)',
  },
  'fr-MA': {
    name: 'French (Morocco)',
    native: 'français (Maroc)',
  },
  'fr-MC': {
    name: 'French (Monaco)',
    native: 'français (Monaco)',
  },
  'fr-MF': {
    name: 'French (St. Martin)',
    native: 'français (Saint-Martin)',
  },
  'fr-MG': {
    name: 'French (Madagascar)',
    native: 'français (Madagascar)',
  },
  'fr-ML': {
    name: 'French (Mali)',
    native: 'français (Mali)',
  },
  'fr-MQ': {
    name: 'French (Martinique)',
    native: 'français (Martinique)',
  },
  'fr-MR': {
    name: 'French (Mauritania)',
    native: 'français (Mauritanie)',
  },
  'fr-MU': {
    name: 'French (Mauritius)',
    native: 'français (Maurice)',
  },
  'fr-NC': {
    name: 'French (New Caledonia)',
    native: 'français (Nouvelle-Calédonie)',
  },
  'fr-NE': {
    name: 'French (Niger)',
    native: 'français (Niger)',
  },
  'fr-PF': {
    name: 'French (French Polynesia)',
    native: 'français (Polynésie française)',
  },
  'fr-PM': {
    name: 'French (St. Pierre & Miquelon)',
    native: 'français (Saint-Pierre-et-Miquelon)',
  },
  'fr-RE': {
    name: 'French (Réunion)',
    native: 'français (La Réunion)',
  },
  'fr-RW': {
    name: 'French (Rwanda)',
    native: 'français (Rwanda)',
  },
  'fr-SC': {
    name: 'French (Seychelles)',
    native: 'français (Seychelles)',
  },
  'fr-SN': {
    name: 'French (Senegal)',
    native: 'français (Sénégal)',
  },
  'fr-SY': {
    name: 'French (Syria)',
    native: 'français (Syrie)',
  },
  'fr-TD': {
    name: 'French (Chad)',
    native: 'français (Tchad)',
  },
  'fr-TG': {
    name: 'French (Togo)',
    native: 'français (Togo)',
  },
  'fr-TN': {
    name: 'French (Tunisia)',
    native: 'français (Tunisie)',
  },
  'fr-VU': {
    name: 'French (Vanuatu)',
    native: 'français (Vanuatu)',
  },
  'fr-WF': {
    name: 'French (Wallis & Futuna)',
    native: 'français (Wallis-et-Futuna)',
  },
  'fr-YT': {
    name: 'French (Mayotte)',
    native: 'français (Mayotte)',
  },
  fur: {
    name: 'Friulian',
    native: 'furlan',
  },
  'fur-IT': {
    name: 'Friulian (Italy)',
    native: 'furlan (Italie)',
  },
  fy: {
    name: 'Western Frisian',
    native: 'Frysk',
  },
  'fy-NL': {
    name: 'Western Frisian (Netherlands)',
    native: 'Frysk (Nederlân)',
  },
  ga: {
    name: 'Irish',
    native: 'Gaeilge',
  },
  'ga-IE': {
    name: 'Irish (Ireland)',
    native: 'Gaeilge (Éire)',
  },
  gd: {
    name: 'Scottish Gaelic',
    native: 'Gàidhlig',
  },
  'gd-GB': {
    name: 'Scottish Gaelic (United Kingdom)',
    native: 'Gàidhlig (An Rìoghachd Aonaichte)',
  },
  gl: {
    name: 'Galician',
    native: 'galego',
  },
  'gl-ES': {
    name: 'Galician (Spain)',
    native: 'galego (España)',
  },
  gsw: {
    name: 'Swiss German',
    native: 'Schwiizertüütsch',
  },
  'gsw-CH': {
    name: 'Swiss German (Switzerland)',
    native: 'Schwiizertüütsch (Schwiiz)',
  },
  'gsw-FR': {
    name: 'Swiss German (France)',
    native: 'Schwiizertüütsch (Frankriich)',
  },
  'gsw-LI': {
    name: 'Swiss German (Liechtenstein)',
    native: 'Schwiizertüütsch (Liächteschtäi)',
  },
  gu: {
    name: 'Gujarati',
    native: 'ગુજરાતી',
  },
  'gu-IN': {
    name: 'Gujarati (India)',
    native: 'ગુજરાતી (ભારત)',
  },
  guz: {
    name: 'Gusii',
    native: 'Ekegusii',
  },
  'guz-KE': {
    name: 'Gusii (Kenya)',
    native: 'Ekegusii (Kenya)',
  },
  gv: {
    name: 'Manx',
    native: 'Gaelg',
  },
  'gv-IM': {
    name: 'Manx (Isle of Man)',
    native: 'Gaelg (Ellan Vannin)',
  },
  ha: {
    name: 'Hausa',
    native: 'Hausa',
  },
  'ha-GH': {
    name: 'Hausa (Ghana)',
    native: 'Hausa (Gana)',
  },
  'ha-NE': {
    name: 'Hausa (Niger)',
    native: 'Hausa (Nijar)',
  },
  'ha-NG': {
    name: 'Hausa (Nigeria)',
    native: 'Hausa (Najeriya)',
  },
  haw: {
    name: 'Hawaiian',
    native: 'ʻŌlelo Hawaiʻi',
  },
  'haw-US': {
    name: 'Hawaiian (United States)',
    native: 'ʻŌlelo Hawaiʻi (ʻAmelika Hui Pū ʻIa)',
  },
  he: {
    name: 'Hebrew',
    native: 'עברית',
  },
  'he-IL': {
    name: 'Hebrew (Israel)',
    native: 'עברית (ישראל)',
  },
  hi: {
    name: 'Hindi',
    native: 'हिन्दी',
  },
  'hi-IN': {
    name: 'Hindi (India)',
    native: 'हिन्दी (भारत)',
  },
  hr: {
    name: 'Croatian',
    native: 'hrvatski',
  },
  'hr-BA': {
    name: 'Croatian (Bosnia & Herzegovina)',
    native: 'hrvatski (Bosna i Hercegovina)',
  },
  'hr-HR': {
    name: 'Croatian (Croatia)',
    native: 'hrvatski (Hrvatska)',
  },
  hsb: {
    name: 'Upper Sorbian',
    native: 'hornjoserbšćina',
  },
  'hsb-DE': {
    name: 'Upper Sorbian (Germany)',
    native: 'hornjoserbšćina (Němska)',
  },
  hu: {
    name: 'Hungarian',
    native: 'magyar',
  },
  'hu-HU': {
    name: 'Hungarian (Hungary)',
    native: 'magyar (Magyarország)',
  },
  hy: {
    name: 'Armenian',
    native: 'հայերեն',
  },
  'hy-AM': {
    name: 'Armenian (Armenia)',
    native: 'հայերեն (Հայաստան)',
  },
  id: {
    name: 'Indonesian',
    native: 'Indonesia',
  },
  'id-ID': {
    name: 'Indonesian (Indonesia)',
    native: 'Indonesia (Indonesia)',
  },
  ig: {
    name: 'Igbo',
    native: 'Igbo',
  },
  'ig-NG': {
    name: 'Igbo (Nigeria)',
    native: 'Igbo (Naịjịrịa)',
  },
  ii: {
    name: 'Sichuan Yi',
    native: 'ꆈꌠꉙ',
  },
  'ii-CN': {
    name: 'Sichuan Yi (China)',
    native: 'ꆈꌠꉙ (ꍏꇩ)',
  },
  is: {
    name: 'Icelandic',
    native: 'íslenska',
  },
  'is-IS': {
    name: 'Icelandic (Iceland)',
    native: 'íslenska (Ísland)',
  },
  it: {
    name: 'Italian',
    native: 'italiano',
  },
  'it-CH': {
    name: 'Italian (Switzerland)',
    native: 'italiano (Svizzera)',
  },
  'it-IT': {
    name: 'Italian (Italy)',
    native: 'italiano (Italia)',
  },
  'it-SM': {
    name: 'Italian (San Marino)',
    native: 'italiano (San Marino)',
  },
  'it-VA': {
    name: 'Italian (Vatican City)',
    native: 'italiano (Città del Vaticano)',
  },
  ja: {
    name: 'Japanese',
    native: '日本語',
  },
  'ja-JP': {
    name: 'Japanese (Japan)',
    native: '日本語 (日本)',
  },
  jgo: {
    name: 'Ngomba',
    native: 'Ndaꞌa',
  },
  'jgo-CM': {
    name: 'Ngomba (Cameroon)',
    native: 'Ndaꞌa (Kamɛlûn)',
  },
  jmc: {
    name: 'Machame',
    native: 'Kimachame',
  },
  'jmc-TZ': {
    name: 'Machame (Tanzania)',
    native: 'Kimachame (Tanzania)',
  },
  ka: {
    name: 'Georgian',
    native: 'ქართული',
  },
  'ka-GE': {
    name: 'Georgian (Georgia)',
    native: 'ქართული (საქართველო)',
  },
  kab: {
    name: 'Kabyle',
    native: 'Taqbaylit',
  },
  'kab-DZ': {
    name: 'Kabyle (Algeria)',
    native: 'Taqbaylit (Lezzayer)',
  },
  kam: {
    name: 'Kamba',
    native: 'Kikamba',
  },
  'kam-KE': {
    name: 'Kamba (Kenya)',
    native: 'Kikamba (Kenya)',
  },
  kde: {
    name: 'Makonde',
    native: 'Chimakonde',
  },
  'kde-TZ': {
    name: 'Makonde (Tanzania)',
    native: 'Chimakonde (Tanzania)',
  },
  kea: {
    name: 'Kabuverdianu',
    native: 'kabuverdianu',
  },
  'kea-CV': {
    name: 'Kabuverdianu (Cape Verde)',
    native: 'kabuverdianu (Kabu Verdi)',
  },
  khq: {
    name: 'Koyra Chiini',
    native: 'Koyra ciini',
  },
  'khq-ML': {
    name: 'Koyra Chiini (Mali)',
    native: 'Koyra ciini (Maali)',
  },
  ki: {
    name: 'Kikuyu',
    native: 'Gikuyu',
  },
  'ki-KE': {
    name: 'Kikuyu (Kenya)',
    native: 'Gikuyu (Kenya)',
  },
  kk: {
    name: 'Kazakh',
    native: 'қазақ тілі',
  },
  'kk-KZ': {
    name: 'Kazakh (Kazakhstan)',
    native: 'қазақ тілі (Қазақстан)',
  },
  kkj: {
    name: 'Kako',
    native: 'kakɔ',
  },
  'kkj-CM': {
    name: 'Kako (Cameroon)',
    native: 'kakɔ (Kamɛrun)',
  },
  kl: {
    name: 'Kalaallisut',
    native: 'kalaallisut',
  },
  'kl-GL': {
    name: 'Kalaallisut (Greenland)',
    native: 'kalaallisut (Kalaallit Nunaat)',
  },
  kln: {
    name: 'Kalenjin',
    native: 'Kalenjin',
  },
  'kln-KE': {
    name: 'Kalenjin (Kenya)',
    native: 'Kalenjin (Emetab Kenya)',
  },
  km: {
    name: 'Khmer',
    native: 'ខ្មែរ',
  },
  'km-KH': {
    name: 'Khmer (Cambodia)',
    native: 'ខ្មែរ (កម្ពុជា)',
  },
  kn: {
    name: 'Kannada',
    native: 'ಕನ್ನಡ',
  },
  'kn-IN': {
    name: 'Kannada (India)',
    native: 'ಕನ್ನಡ (ಭಾರತ)',
  },
  ko: {
    name: 'Korean',
    native: '한국어',
  },
  'ko-KP': {
    name: 'Korean (North Korea)',
    native: '한국어(조선민주주의인민공화국)',
  },
  'ko-KR': {
    name: 'Korean (South Korea)',
    native: '한국어(대한민국)',
  },
  kok: {
    name: 'Konkani',
    native: 'कोंकणी',
  },
  'kok-IN': {
    name: 'Konkani (India)',
    native: 'कोंकणी (भारत)',
  },
  ks: {
    name: 'Kashmiri',
    native: 'کٲشُر',
  },
  'ks-IN': {
    name: 'Kashmiri (India)',
    native: 'کٲشُر (ہِنٛدوستان)',
  },
  ksb: {
    name: 'Shambala',
    native: 'Kishambaa',
  },
  'ksb-TZ': {
    name: 'Shambala (Tanzania)',
    native: 'Kishambaa (Tanzania)',
  },
  ksf: {
    name: 'Bafia',
    native: 'rikpa',
  },
  'ksf-CM': {
    name: 'Bafia (Cameroon)',
    native: 'rikpa (kamɛrún)',
  },
  ksh: {
    name: 'Colognian',
    native: 'Kölsch',
  },
  'ksh-DE': {
    name: 'Colognian (Germany)',
    native: 'Kölsch en Doütschland',
  },
  kw: {
    name: 'Cornish',
    native: 'kernewek',
  },
  'kw-GB': {
    name: 'Cornish (United Kingdom)',
    native: 'kernewek (Rywvaneth Unys)',
  },
  ky: {
    name: 'Kyrgyz',
    native: 'кыргызча',
  },
  'ky-KG': {
    name: 'Kyrgyz (Kyrgyzstan)',
    native: 'кыргызча (Кыргызстан)',
  },
  lag: {
    name: 'Langi',
    native: 'Kɨlaangi',
  },
  'lag-TZ': {
    name: 'Langi (Tanzania)',
    native: 'Kɨlaangi (Taansanía)',
  },
  lb: {
    name: 'Luxembourgish',
    native: 'Lëtzebuergesch',
  },
  'lb-LU': {
    name: 'Luxembourgish (Luxembourg)',
    native: 'Lëtzebuergesch (Lëtzebuerg)',
  },
  lg: {
    name: 'Ganda',
    native: 'Luganda',
  },
  'lg-UG': {
    name: 'Ganda (Uganda)',
    native: 'Luganda (Yuganda)',
  },
  lkt: {
    name: 'Lakota',
    native: 'Lakȟólʼiyapi',
  },
  'lkt-US': {
    name: 'Lakota (United States)',
    native: 'Lakȟólʼiyapi (Mílahaŋska Tȟamákȟočhe)',
  },
  ln: {
    name: 'Lingala',
    native: 'lingála',
  },
  'ln-AO': {
    name: 'Lingala (Angola)',
    native: 'lingála (Angóla)',
  },
  'ln-CD': {
    name: 'Lingala (Congo - Kinshasa)',
    native: 'lingála (Republíki ya Kongó Demokratíki)',
  },
  'ln-CF': {
    name: 'Lingala (Central African Republic)',
    native: 'lingála (Repibiki ya Afríka ya Káti)',
  },
  'ln-CG': {
    name: 'Lingala (Congo - Brazzaville)',
    native: 'lingála (Kongo)',
  },
  lo: {
    name: 'Lao',
    native: 'ລາວ',
  },
  'lo-LA': {
    name: 'Lao (Laos)',
    native: 'ລາວ (ລາວ)',
  },
  lrc: {
    name: 'Northern Luri',
    native: 'لۊری شومالی',
  },
  'lrc-IQ': {
    name: 'Northern Luri (Iraq)',
    native: 'لۊری شومالی (IQ)',
  },
  'lrc-IR': {
    name: 'Northern Luri (Iran)',
    native: 'لۊری شومالی (IR)',
  },
  lt: {
    name: 'Lithuanian',
    native: 'lietuvių',
  },
  'lt-LT': {
    name: 'Lithuanian (Lithuania)',
    native: 'lietuvių (Lietuva)',
  },
  lu: {
    name: 'Luba-Katanga',
    native: 'Tshiluba',
  },
  'lu-CD': {
    name: 'Luba-Katanga (Congo - Kinshasa)',
    native: 'Tshiluba (Ditunga wa Kongu)',
  },
  luo: {
    name: 'Luo',
    native: 'Dholuo',
  },
  'luo-KE': {
    name: 'Luo (Kenya)',
    native: 'Dholuo (Kenya)',
  },
  luy: {
    name: 'Luyia',
    native: 'Luluhia',
  },
  'luy-KE': {
    name: 'Luyia (Kenya)',
    native: 'Luluhia (Kenya)',
  },
  lv: {
    name: 'Latvian',
    native: 'latviešu',
  },
  'lv-LV': {
    name: 'Latvian (Latvia)',
    native: 'latviešu (Latvija)',
  },
  mas: {
    name: 'Masai',
    native: 'Maa',
  },
  'mas-KE': {
    name: 'Masai (Kenya)',
    native: 'Maa (Kenya)',
  },
  'mas-TZ': {
    name: 'Masai (Tanzania)',
    native: 'Maa (Tansania)',
  },
  mer: {
    name: 'Meru',
    native: 'Kĩmĩrũ',
  },
  'mer-KE': {
    name: 'Meru (Kenya)',
    native: 'Kĩmĩrũ (Kenya)',
  },
  mfe: {
    name: 'Morisyen',
    native: 'kreol morisien',
  },
  'mfe-MU': {
    name: 'Morisyen (Mauritius)',
    native: 'kreol morisien (Moris)',
  },
  mg: {
    name: 'Malagasy',
    native: 'Malagasy',
  },
  'mg-MG': {
    name: 'Malagasy (Madagascar)',
    native: 'Malagasy (Madagasikara)',
  },
  mgh: {
    name: 'Makhuwa-Meetto',
    native: 'Makua',
  },
  'mgh-MZ': {
    name: 'Makhuwa-Meetto (Mozambique)',
    native: 'Makua (Umozambiki)',
  },
  mgo: {
    name: 'Metaʼ',
    native: 'metaʼ',
  },
  'mgo-CM': {
    name: 'Metaʼ (Cameroon)',
    native: 'metaʼ (Kamalun)',
  },
  mk: {
    name: 'Macedonian',
    native: 'македонски',
  },
  'mk-MK': {
    name: 'Macedonian (Macedonia)',
    native: 'македонски (Македонија)',
  },
  ml: {
    name: 'Malayalam',
    native: 'മലയാളം',
  },
  'ml-IN': {
    name: 'Malayalam (India)',
    native: 'മലയാളം (ഇന്ത്യ)',
  },
  mn: {
    name: 'Mongolian',
    native: 'монгол',
  },
  'mn-MN': {
    name: 'Mongolian (Mongolia)',
    native: 'монгол (Монгол)',
  },
  mr: {
    name: 'Marathi',
    native: 'मराठी',
  },
  'mr-IN': {
    name: 'Marathi (India)',
    native: 'मराठी (भारत)',
  },
  ms: {
    name: 'Malay',
    native: 'Melayu',
  },
  'ms-BN': {
    name: 'Malay (Brunei)',
    native: 'Melayu (Brunei)',
  },
  'ms-MY': {
    name: 'Malay (Malaysia)',
    native: 'Melayu (Malaysia)',
  },
  'ms-SG': {
    name: 'Malay (Singapore)',
    native: 'Melayu (Singapura)',
  },
  mt: {
    name: 'Maltese',
    native: 'Malti',
  },
  'mt-MT': {
    name: 'Maltese (Malta)',
    native: 'Malti (Malta)',
  },
  mua: {
    name: 'Mundang',
    native: 'MUNDAŊ',
  },
  'mua-CM': {
    name: 'Mundang (Cameroon)',
    native: 'MUNDAŊ (kameruŋ)',
  },
  my: {
    name: 'Burmese',
    native: 'မြန်မာ',
  },
  'my-MM': {
    name: 'Burmese (Myanmar [Burma])',
    native: 'မြန်မာ (မြန်မာ)',
  },
  mzn: {
    name: 'Mazanderani',
    native: 'مازرونی',
  },
  'mzn-IR': {
    name: 'Mazanderani (Iran)',
    native: 'مازرونی (ایران)',
  },
  naq: {
    name: 'Nama',
    native: 'Khoekhoegowab',
  },
  'naq-NA': {
    name: 'Nama (Namibia)',
    native: 'Khoekhoegowab (Namibiab)',
  },
  nb: {
    name: 'Norwegian Bokmål',
    native: 'norsk bokmål',
  },
  'nb-NO': {
    name: 'Norwegian Bokmål (Norway)',
    native: 'norsk bokmål (Norge)',
  },
  'nb-SJ': {
    name: 'Norwegian Bokmål (Svalbard & Jan Mayen)',
    native: 'norsk bokmål (Svalbard og Jan Mayen)',
  },
  nd: {
    name: 'North Ndebele',
    native: 'isiNdebele',
  },
  'nd-ZW': {
    name: 'North Ndebele (Zimbabwe)',
    native: 'isiNdebele (Zimbabwe)',
  },
  nds: {
    name: 'Low German',
    native: 'nds',
  },
  'nds-DE': {
    name: 'Low German (Germany)',
    native: 'nds (DE)',
  },
  'nds-NL': {
    name: 'Low German (Netherlands)',
    native: 'nds (NL)',
  },
  ne: {
    name: 'Nepali',
    native: 'नेपाली',
  },
  'ne-IN': {
    name: 'Nepali (India)',
    native: 'नेपाली (भारत)',
  },
  'ne-NP': {
    name: 'Nepali (Nepal)',
    native: 'नेपाली (नेपाल)',
  },
  nl: {
    name: 'Dutch',
    native: 'Nederlands',
  },
  'nl-AW': {
    name: 'Dutch (Aruba)',
    native: 'Nederlands (Aruba)',
  },
  'nl-BE': {
    name: 'Dutch (Belgium)',
    native: 'Nederlands (België)',
  },
  'nl-BQ': {
    name: 'Dutch (Caribbean Netherlands)',
    native: 'Nederlands (Caribisch Nederland)',
  },
  'nl-CW': {
    name: 'Dutch (Curaçao)',
    native: 'Nederlands (Curaçao)',
  },
  'nl-NL': {
    name: 'Dutch (Netherlands)',
    native: 'Nederlands (Nederland)',
  },
  'nl-SR': {
    name: 'Dutch (Suriname)',
    native: 'Nederlands (Suriname)',
  },
  'nl-SX': {
    name: 'Dutch (Sint Maarten)',
    native: 'Nederlands (Sint-Maarten)',
  },
  nmg: {
    name: 'Kwasio',
    native: 'nmg',
  },
  'nmg-CM': {
    name: 'Kwasio (Cameroon)',
    native: 'nmg (Kamerun)',
  },
  nn: {
    name: 'Norwegian Nynorsk',
    native: 'nynorsk',
  },
  'nn-NO': {
    name: 'Norwegian Nynorsk (Norway)',
    native: 'nynorsk (Noreg)',
  },
  nnh: {
    name: 'Ngiemboon',
    native: 'Shwóŋò ngiembɔɔn',
  },
  'nnh-CM': {
    name: 'Ngiemboon (Cameroon)',
    native: 'Shwóŋò ngiembɔɔn (Kàmalûm)',
  },
  nus: {
    name: 'Nuer',
    native: 'Thok Nath',
  },
  'nus-SS': {
    name: 'Nuer (South Sudan)',
    native: 'Thok Nath (SS)',
  },
  nyn: {
    name: 'Nyankole',
    native: 'Runyankore',
  },
  'nyn-UG': {
    name: 'Nyankole (Uganda)',
    native: 'Runyankore (Uganda)',
  },
  om: {
    name: 'Oromo',
    native: 'Oromoo',
  },
  'om-ET': {
    name: 'Oromo (Ethiopia)',
    native: 'Oromoo (Itoophiyaa)',
  },
  'om-KE': {
    name: 'Oromo (Kenya)',
    native: 'Oromoo (Keeniyaa)',
  },
  or: {
    name: 'Odia',
    native: 'ଓଡ଼ିଆ',
  },
  'or-IN': {
    name: 'Odia (India)',
    native: 'ଓଡ଼ିଆ (ଭାରତ)',
  },
  os: {
    name: 'Ossetic',
    native: 'ирон',
  },
  'os-GE': {
    name: 'Ossetic (Georgia)',
    native: 'ирон (Гуырдзыстон)',
  },
  'os-RU': {
    name: 'Ossetic (Russia)',
    native: 'ирон (Уӕрӕсе)',
  },
  pa: {
    name: 'Punjabi',
    native: 'ਪੰਜਾਬੀ',
  },
  'pa-Arab': {
    name: 'Punjabi (Arabic)',
    native: 'پنجابی (عربی)',
  },
  'pa-Arab-PK': {
    name: 'Punjabi (Arabic, Pakistan)',
    native: 'پنجابی (عربی, پاکستان)',
  },
  'pa-Guru': {
    name: 'Punjabi (Gurmukhi)',
    native: 'ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ)',
  },
  'pa-Guru-IN': {
    name: 'Punjabi (Gurmukhi, India)',
    native: 'ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ, ਭਾਰਤ)',
  },
  pl: {
    name: 'Polish',
    native: 'polski',
  },
  'pl-PL': {
    name: 'Polish (Poland)',
    native: 'polski (Polska)',
  },
  ps: {
    name: 'Pashto',
    native: 'پښتو',
  },
  'ps-AF': {
    name: 'Pashto (Afghanistan)',
    native: 'پښتو (افغانستان)',
  },
  pt: {
    name: 'Portuguese',
    native: 'português',
  },
  'pt-AO': {
    name: 'Portuguese (Angola)',
    native: 'português (Angola)',
  },
  'pt-BR': {
    name: 'Portuguese (Brazil)',
    native: 'português (Brasil)',
  },
  'pt-CH': {
    name: 'Portuguese (Switzerland)',
    native: 'português (Suíça)',
  },
  'pt-CV': {
    name: 'Portuguese (Cape Verde)',
    native: 'português (Cabo Verde)',
  },
  'pt-GQ': {
    name: 'Portuguese (Equatorial Guinea)',
    native: 'português (Guiné Equatorial)',
  },
  'pt-GW': {
    name: 'Portuguese (Guinea-Bissau)',
    native: 'português (Guiné-Bissau)',
  },
  'pt-LU': {
    name: 'Portuguese (Luxembourg)',
    native: 'português (Luxemburgo)',
  },
  'pt-MO': {
    name: 'Portuguese (Macau SAR China)',
    native: 'português (Macau, RAE da China)',
  },
  'pt-MZ': {
    name: 'Portuguese (Mozambique)',
    native: 'português (Moçambique)',
  },
  'pt-PT': {
    name: 'Portuguese (Portugal)',
    native: 'português (Portugal)',
  },
  'pt-ST': {
    name: 'Portuguese (São Tomé & Príncipe)',
    native: 'português (São Tomé e Príncipe)',
  },
  'pt-TL': {
    name: 'Portuguese (Timor-Leste)',
    native: 'português (Timor-Leste)',
  },
  qu: {
    name: 'Quechua',
    native: 'Runasimi',
  },
  'qu-BO': {
    name: 'Quechua (Bolivia)',
    native: 'Runasimi (Bolivia)',
  },
  'qu-EC': {
    name: 'Quechua (Ecuador)',
    native: 'Runasimi (Ecuador)',
  },
  'qu-PE': {
    name: 'Quechua (Peru)',
    native: 'Runasimi (Perú)',
  },
  rm: {
    name: 'Romansh',
    native: 'rumantsch',
  },
  'rm-CH': {
    name: 'Romansh (Switzerland)',
    native: 'rumantsch (Svizra)',
  },
  rn: {
    name: 'Rundi',
    native: 'Ikirundi',
  },
  'rn-BI': {
    name: 'Rundi (Burundi)',
    native: 'Ikirundi (Uburundi)',
  },
  ro: {
    name: 'Romanian',
    native: 'română',
  },
  'ro-MD': {
    name: 'Romanian (Moldova)',
    native: 'română (Republica Moldova)',
  },
  'ro-RO': {
    name: 'Romanian (Romania)',
    native: 'română (România)',
  },
  rof: {
    name: 'Rombo',
    native: 'Kihorombo',
  },
  'rof-TZ': {
    name: 'Rombo (Tanzania)',
    native: 'Kihorombo (Tanzania)',
  },
  ru: {
    name: 'Russian',
    native: 'русский',
  },
  'ru-BY': {
    name: 'Russian (Belarus)',
    native: 'русский (Беларусь)',
  },
  'ru-KG': {
    name: 'Russian (Kyrgyzstan)',
    native: 'русский (Киргизия)',
  },
  'ru-KZ': {
    name: 'Russian (Kazakhstan)',
    native: 'русский (Казахстан)',
  },
  'ru-MD': {
    name: 'Russian (Moldova)',
    native: 'русский (Молдова)',
  },
  'ru-RU': {
    name: 'Russian (Russia)',
    native: 'русский (Россия)',
  },
  'ru-UA': {
    name: 'Russian (Ukraine)',
    native: 'русский (Украина)',
  },
  rw: {
    name: 'Kinyarwanda',
    native: 'Kinyarwanda',
  },
  'rw-RW': {
    name: 'Kinyarwanda (Rwanda)',
    native: 'Kinyarwanda (U Rwanda)',
  },
  rwk: {
    name: 'Rwa',
    native: 'Kiruwa',
  },
  'rwk-TZ': {
    name: 'Rwa (Tanzania)',
    native: 'Kiruwa (Tanzania)',
  },
  sah: {
    name: 'Sakha',
    native: 'саха тыла',
  },
  'sah-RU': {
    name: 'Sakha (Russia)',
    native: 'саха тыла (Арассыыйа)',
  },
  saq: {
    name: 'Samburu',
    native: 'Kisampur',
  },
  'saq-KE': {
    name: 'Samburu (Kenya)',
    native: 'Kisampur (Kenya)',
  },
  sbp: {
    name: 'Sangu',
    native: 'Ishisangu',
  },
  'sbp-TZ': {
    name: 'Sangu (Tanzania)',
    native: 'Ishisangu (Tansaniya)',
  },
  se: {
    name: 'Northern Sami',
    native: 'davvisámegiella',
  },
  'se-FI': {
    name: 'Northern Sami (Finland)',
    native: 'davvisámegiella (Suopma)',
  },
  'se-NO': {
    name: 'Northern Sami (Norway)',
    native: 'davvisámegiella (Norga)',
  },
  'se-SE': {
    name: 'Northern Sami (Sweden)',
    native: 'davvisámegiella (Ruoŧŧa)',
  },
  seh: {
    name: 'Sena',
    native: 'sena',
  },
  'seh-MZ': {
    name: 'Sena (Mozambique)',
    native: 'sena (Moçambique)',
  },
  ses: {
    name: 'Koyraboro Senni',
    native: 'Koyraboro senni',
  },
  'ses-ML': {
    name: 'Koyraboro Senni (Mali)',
    native: 'Koyraboro senni (Maali)',
  },
  sg: {
    name: 'Sango',
    native: 'Sängö',
  },
  'sg-CF': {
    name: 'Sango (Central African Republic)',
    native: 'Sängö (Ködörösêse tî Bêafrîka)',
  },
  shi: {
    name: 'Tachelhit',
    native: 'ⵜⴰⵛⵍⵃⵉⵜ',
  },
  'shi-Latn': {
    name: 'Tachelhit (Latin)',
    native: 'Tashelḥiyt (Latn)',
  },
  'shi-Latn-MA': {
    name: 'Tachelhit (Latin, Morocco)',
    native: 'Tashelḥiyt (Latn, lmɣrib)',
  },
  'shi-Tfng': {
    name: 'Tachelhit (Tifinagh)',
    native: 'ⵜⴰⵛⵍⵃⵉⵜ (Tfng)',
  },
  'shi-Tfng-MA': {
    name: 'Tachelhit (Tifinagh, Morocco)',
    native: 'ⵜⴰⵛⵍⵃⵉⵜ (Tfng, ⵍⵎⵖⵔⵉⴱ)',
  },
  si: {
    name: 'Sinhala',
    native: 'සිංහල',
  },
  'si-LK': {
    name: 'Sinhala (Sri Lanka)',
    native: 'සිංහල (ශ්‍රී ලංකාව)',
  },
  sk: {
    name: 'Slovak',
    native: 'slovenčina',
  },
  'sk-SK': {
    name: 'Slovak (Slovakia)',
    native: 'slovenčina (Slovensko)',
  },
  sl: {
    name: 'Slovenian',
    native: 'slovenščina',
  },
  'sl-SI': {
    name: 'Slovenian (Slovenia)',
    native: 'slovenščina (Slovenija)',
  },
  smn: {
    name: 'Inari Sami',
    native: 'anarâškielâ',
  },
  'smn-FI': {
    name: 'Inari Sami (Finland)',
    native: 'anarâškielâ (Suomâ)',
  },
  sn: {
    name: 'Shona',
    native: 'chiShona',
  },
  'sn-ZW': {
    name: 'Shona (Zimbabwe)',
    native: 'chiShona (Zimbabwe)',
  },
  so: {
    name: 'Somali',
    native: 'Soomaali',
  },
  'so-DJ': {
    name: 'Somali (Djibouti)',
    native: 'Soomaali (Jabuuti)',
  },
  'so-ET': {
    name: 'Somali (Ethiopia)',
    native: 'Soomaali (Itoobiya)',
  },
  'so-KE': {
    name: 'Somali (Kenya)',
    native: 'Soomaali (Kiiniya)',
  },
  'so-SO': {
    name: 'Somali (Somalia)',
    native: 'Soomaali (Soomaaliya)',
  },
  sq: {
    name: 'Albanian',
    native: 'shqip',
  },
  'sq-AL': {
    name: 'Albanian (Albania)',
    native: 'shqip (Shqipëri)',
  },
  'sq-MK': {
    name: 'Albanian (Macedonia)',
    native: 'shqip (Maqedoni)',
  },
  'sq-XK': {
    name: 'Albanian (Kosovo)',
    native: 'shqip (Kosovë)',
  },
  sr: {
    name: 'Serbian',
    native: 'српски',
  },
  'sr-Cyrl': {
    name: 'Serbian (Cyrillic)',
    native: 'српски (ћирилица)',
  },
  'sr-Cyrl-BA': {
    name: 'Serbian (Cyrillic, Bosnia & Herzegovina)',
    native: 'српски (ћирилица, Босна и Херцеговина)',
  },
  'sr-Cyrl-ME': {
    name: 'Serbian (Cyrillic, Montenegro)',
    native: 'српски (ћирилица, Црна Гора)',
  },
  'sr-Cyrl-RS': {
    name: 'Serbian (Cyrillic, Serbia)',
    native: 'српски (ћирилица, Србија)',
  },
  'sr-Cyrl-XK': {
    name: 'Serbian (Cyrillic, Kosovo)',
    native: 'српски (ћирилица, Косово)',
  },
  'sr-Latn': {
    name: 'Serbian (Latin)',
    native: 'srpski (latinica)',
  },
  'sr-Latn-BA': {
    name: 'Serbian (Latin, Bosnia & Herzegovina)',
    native: 'srpski (latinica, Bosna i Hercegovina)',
  },
  'sr-Latn-ME': {
    name: 'Serbian (Latin, Montenegro)',
    native: 'srpski (latinica, Crna Gora)',
  },
  'sr-Latn-RS': {
    name: 'Serbian (Latin, Serbia)',
    native: 'srpski (latinica, Srbija)',
  },
  'sr-Latn-XK': {
    name: 'Serbian (Latin, Kosovo)',
    native: 'srpski (latinica, Kosovo)',
  },
  sv: {
    name: 'Swedish',
    native: 'svenska',
  },
  'sv-AX': {
    name: 'Swedish (Åland Islands)',
    native: 'svenska (Åland)',
  },
  'sv-FI': {
    name: 'Swedish (Finland)',
    native: 'svenska (Finland)',
  },
  'sv-SE': {
    name: 'Swedish (Sweden)',
    native: 'svenska (Sverige)',
  },
  sw: {
    name: 'Swahili',
    native: 'Kiswahili',
  },
  'sw-CD': {
    name: 'Swahili (Congo - Kinshasa)',
    native: 'Kiswahili (Jamhuri ya Kidemokrasia ya Kongo)',
  },
  'sw-KE': {
    name: 'Swahili (Kenya)',
    native: 'Kiswahili (Kenya)',
  },
  'sw-TZ': {
    name: 'Swahili (Tanzania)',
    native: 'Kiswahili (Tanzania)',
  },
  'sw-UG': {
    name: 'Swahili (Uganda)',
    native: 'Kiswahili (Uganda)',
  },
  ta: {
    name: 'Tamil',
    native: 'தமிழ்',
  },
  'ta-IN': {
    name: 'Tamil (India)',
    native: 'தமிழ் (இந்தியா)',
  },
  'ta-LK': {
    name: 'Tamil (Sri Lanka)',
    native: 'தமிழ் (இலங்கை)',
  },
  'ta-MY': {
    name: 'Tamil (Malaysia)',
    native: 'தமிழ் (மலேசியா)',
  },
  'ta-SG': {
    name: 'Tamil (Singapore)',
    native: 'தமிழ் (சிங்கப்பூர்)',
  },
  te: {
    name: 'Telugu',
    native: 'తెలుగు',
  },
  'te-IN': {
    name: 'Telugu (India)',
    native: 'తెలుగు (భారతదేశం)',
  },
  teo: {
    name: 'Teso',
    native: 'Kiteso',
  },
  'teo-KE': {
    name: 'Teso (Kenya)',
    native: 'Kiteso (Kenia)',
  },
  'teo-UG': {
    name: 'Teso (Uganda)',
    native: 'Kiteso (Uganda)',
  },
  tg: {
    name: 'Tajik',
    native: 'тоҷикӣ',
  },
  'tg-TJ': {
    name: 'Tajik (Tajikistan)',
    native: 'тоҷикӣ (Тоҷикистон)',
  },
  th: {
    name: 'Thai',
    native: 'ไทย',
  },
  'th-TH': {
    name: 'Thai (Thailand)',
    native: 'ไทย (ไทย)',
  },
  ti: {
    name: 'Tigrinya',
    native: 'ትግርኛ',
  },
  'ti-ER': {
    name: 'Tigrinya (Eritrea)',
    native: 'ትግርኛ (ኤርትራ)',
  },
  'ti-ET': {
    name: 'Tigrinya (Ethiopia)',
    native: 'ትግርኛ (ኢትዮጵያ)',
  },
  to: {
    name: 'Tongan',
    native: 'lea fakatonga',
  },
  'to-TO': {
    name: 'Tongan (Tonga)',
    native: 'lea fakatonga (Tonga)',
  },
  tr: {
    name: 'Turkish',
    native: 'Türkçe',
  },
  'tr-CY': {
    name: 'Turkish (Cyprus)',
    native: 'Türkçe (Kıbrıs)',
  },
  'tr-TR': {
    name: 'Turkish (Turkey)',
    native: 'Türkçe (Türkiye)',
  },
  tt: {
    name: 'Tatar',
    native: 'татар',
  },
  'tt-RU': {
    name: 'Tatar (Russia)',
    native: 'татар (Россия)',
  },
  twq: {
    name: 'Tasawaq',
    native: 'Tasawaq senni',
  },
  'twq-NE': {
    name: 'Tasawaq (Niger)',
    native: 'Tasawaq senni (Nižer)',
  },
  tzm: {
    name: 'Central Atlas Tamazight',
    native: 'Tamaziɣt n laṭlaṣ',
  },
  'tzm-MA': {
    name: 'Central Atlas Tamazight (Morocco)',
    native: 'Tamaziɣt n laṭlaṣ (Meṛṛuk)',
  },
  ug: {
    name: 'Uyghur',
    native: 'ئۇيغۇرچە',
  },
  'ug-CN': {
    name: 'Uyghur (China)',
    native: 'ئۇيغۇرچە (جۇڭگو)',
  },
  uk: {
    name: 'Ukrainian',
    native: 'українська',
  },
  'uk-UA': {
    name: 'Ukrainian (Ukraine)',
    native: 'українська (Україна)',
  },
  ur: {
    name: 'Urdu',
    native: 'اردو',
  },
  'ur-IN': {
    name: 'Urdu (India)',
    native: 'اردو (بھارت)',
  },
  'ur-PK': {
    name: 'Urdu (Pakistan)',
    native: 'اردو (پاکستان)',
  },
  uz: {
    name: 'Uzbek',
    native: 'o‘zbek',
  },
  'uz-Arab': {
    name: 'Uzbek (Arabic)',
    native: 'اوزبیک (عربی)',
  },
  'uz-Arab-AF': {
    name: 'Uzbek (Arabic, Afghanistan)',
    native: 'اوزبیک (عربی, افغانستان)',
  },
  'uz-Cyrl': {
    name: 'Uzbek (Cyrillic)',
    native: 'ўзбекча (Кирил)',
  },
  'uz-Cyrl-UZ': {
    name: 'Uzbek (Cyrillic, Uzbekistan)',
    native: 'ўзбекча (Кирил, Ўзбекистон)',
  },
  'uz-Latn': {
    name: 'Uzbek (Latin)',
    native: 'o‘zbek (lotin)',
  },
  'uz-Latn-UZ': {
    name: 'Uzbek (Latin, Uzbekistan)',
    native: 'o‘zbek (lotin, Oʻzbekiston)',
  },
  vai: {
    name: 'Vai',
    native: 'ꕙꔤ',
  },
  'vai-Latn': {
    name: 'Vai (Latin)',
    native: 'Vai (Latn)',
  },
  'vai-Latn-LR': {
    name: 'Vai (Latin, Liberia)',
    native: 'Vai (Latn, Laibhiya)',
  },
  'vai-Vaii': {
    name: 'Vai (Vai)',
    native: 'ꕙꔤ (Vaii)',
  },
  'vai-Vaii-LR': {
    name: 'Vai (Vai, Liberia)',
    native: 'ꕙꔤ (Vaii, ꕞꔤꔫꕩ)',
  },
  vi: {
    name: 'Vietnamese',
    native: 'Tiếng Việt',
  },
  'vi-VN': {
    name: 'Vietnamese (Vietnam)',
    native: 'Tiếng Việt (Việt Nam)',
  },
  vun: {
    name: 'Vunjo',
    native: 'Kyivunjo',
  },
  'vun-TZ': {
    name: 'Vunjo (Tanzania)',
    native: 'Kyivunjo (Tanzania)',
  },
  wae: {
    name: 'Walser',
    native: 'Walser',
  },
  'wae-CH': {
    name: 'Walser (Switzerland)',
    native: 'Walser (Schwiz)',
  },
  wo: {
    name: 'Wolof',
    native: 'Wolof',
  },
  'wo-SN': {
    name: 'Wolof (Senegal)',
    native: 'Wolof (Senegaal)',
  },
  xog: {
    name: 'Soga',
    native: 'Olusoga',
  },
  'xog-UG': {
    name: 'Soga (Uganda)',
    native: 'Olusoga (Yuganda)',
  },
  yav: {
    name: 'Yangben',
    native: 'nuasue',
  },
  'yav-CM': {
    name: 'Yangben (Cameroon)',
    native: 'nuasue (Kemelún)',
  },
  yi: {
    name: 'Yiddish',
    native: 'ייִדיש',
  },
  'yi-001': {
    name: 'Yiddish (World)',
    native: 'ייִדיש (וועלט)',
  },
  yo: {
    name: 'Yoruba',
    native: 'Èdè Yorùbá',
  },
  'yo-BJ': {
    name: 'Yoruba (Benin)',
    native: 'Èdè Yorùbá (Orílɛ́ède Bɛ̀nɛ̀)',
  },
  'yo-NG': {
    name: 'Yoruba (Nigeria)',
    native: 'Èdè Yorùbá (Orílẹ́ède Nàìjíríà)',
  },
  yue: {
    name: 'Cantonese',
    native: '粵語',
  },
  'yue-Hans': {
    name: 'Cantonese (Simplified)',
    native: '粤语 (简体)',
  },
  'yue-Hans-CN': {
    name: 'Cantonese (Simplified, China)',
    native: '粤语 (简体，中华人民共和国)',
  },
  'yue-Hant': {
    name: 'Cantonese (Traditional)',
    native: '粵語 (繁體)',
  },
  'yue-Hant-HK': {
    name: 'Cantonese (Traditional, Hong Kong SAR China)',
    native: '粵語 (繁體，中華人民共和國香港特別行政區)',
  },
  zgh: {
    name: 'Standard Moroccan Tamazight',
    native: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
  },
  'zgh-MA': {
    name: 'Standard Moroccan Tamazight (Morocco)',
    native: 'ⵜⴰⵎⴰⵣⵉⵖⵜ (ⵍⵎⵖⵔⵉⴱ)',
  },
  zh: {
    name: 'Chinese',
    native: '中文',
  },
  'zh-Hans': {
    name: 'Chinese (Simplified)',
    native: '中文（简体）',
  },
  'zh-Hans-CN': {
    name: 'Chinese (Simplified, China)',
    native: '中文（简体，中国）',
  },
  'zh-Hans-HK': {
    name: 'Chinese (Simplified, Hong Kong SAR China)',
    native: '中文（简体，中国香港特别行政区）',
  },
  'zh-Hans-MO': {
    name: 'Chinese (Simplified, Macau SAR China)',
    native: '中文（简体，中国澳门特别行政区）',
  },
  'zh-Hans-SG': {
    name: 'Chinese (Simplified, Singapore)',
    native: '中文（简体，新加坡）',
  },
  'zh-Hant': {
    name: 'Chinese (Traditional)',
    native: '中文（繁體）',
  },
  'zh-Hant-HK': {
    name: 'Chinese (Traditional, Hong Kong SAR China)',
    native: '中文（繁體字，中國香港特別行政區）',
  },
  'zh-Hant-MO': {
    name: 'Chinese (Traditional, Macau SAR China)',
    native: '中文（繁體字，中國澳門特別行政區）',
  },
  'zh-Hant-TW': {
    name: 'Chinese (Traditional, Taiwan)',
    native: '中文（繁體，台灣）',
  },
  zu: {
    name: 'Zulu',
    native: 'isiZulu',
  },
  'zu-ZA': {
    name: 'Zulu (South Africa)',
    native: 'isiZulu (iNingizimu Afrika)',
  },
}

export const ALL_LANGUAGES = Object.keys(LOCALES).map((locale) => {
  return {
    id: locale.replace(/-/g, '_'),
    title: LOCALES[locale].name,
  }
})
