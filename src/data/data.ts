import pic_1 from "./pictures/pic_1.jpg";
import pic_2 from "./pictures/pic_2.jpg";
import pic_3 from "./pictures/pic_3.jpg";
import pic_4 from "./pictures/pic_4.jpg";
import pic_5 from "./pictures/pic_5.jpg";
import pic_6 from "./pictures/pic_6.jpg";
import pic_7 from "./pictures/pic_7.jpg";
import pic_8 from "./pictures/pic_8.jpg";
import { queryToken } from "../Startpage/Searchbar/Searchbar";

export interface dataElem {
  label: string;
  value: string;
}

export interface linkGroup {
  title: string;
  links: dataElem[];
}

/* eslint-disable */
/*
──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀▀▀▌
───▄▄██▌█ BEEP BEEP
▄▄▄▌▐██▌█ CODE DELIVERY
███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄​▄▄▄▄▄▄▌
▀(@)▀▀▀▀▀▀▀(@)(@)▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀(@)▀
*/
/* eslint-enable */

export const links: linkGroup[] = [
  {
    title: "Lookup",
    links: [
      {
        label: "Regional Ecosystems",
        value: "https://apps.des.qld.gov.au/regional-ecosystems/",
      },
      {
        label: "WildNet",
        value: "https://wildnet.science-data.qld.gov.au/",
      },
      {
        label: "SPRAT",
        value: "https://www.environment.gov.au/cgi-bin/sprat/public/sprat.pl",
      },
      {
        label: "QLD Globe",
        value: "https://qldglobe.information.qld.gov.au/",
      },
    ],
  },
  {
    title: "Searches",
    links: [
      {
        label: "Atlas of Living Australia",
        value: "https://www.ala.org.au/",
      },
      {
        label: "PMST",
        value:
          "https://www.dcceew.gov.au/environment/epbc/protected-matters-search-tool",
      },
      {
        label: "Enviro Reports",
        value:
          "https://www.qld.gov.au/environment/management/environmental/environmental-reports-online",
      },
      {
        label: "Vegetation Reports",
        value:
          "https://www.qld.gov.au/environment/land/management/vegetation/maps/map-request/vegetation-map-request-form",
      },
    ],
  },
  {
    title: "Methodologies",
    links: [
      {
        label: "Surveying and Mapping Regional Eocsystems",
        value:
          "https://www.publications.qld.gov.au/dataset/methodology-for-surveying-and-mapping-regional-ecosystems-and-vegetation-communities-in-queensland",
      },
      {
        label: "Guide to Determining Terrestrial Habitat Quality v1.3",
        value:
          "https://environment.desi.qld.gov.au/__data/assets/pdf_file/0017/102833/habitat-quality-assessment-guide-v1-3.pdf",
      },
      {
        label: "BioCondition Assessment Manual v2.2",
        value:
          "https://www.qld.gov.au/__data/assets/pdf_file/0029/68726/biocondition-assessment-manual.pdf",
      },
      {
        label: "Protected Plants Survey Guideline v2.03",
        value:
          "https://www.des.qld.gov.au/policies?a=272936:policy_registry/gl-wl-pp-flora-survey.pdf",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        label: "HeadsUp",
        value:
          "https://basecg.headsup.com.au/Login.aspx?ReturnUrl=%2fTimesheetEntry.aspx",
      },
      {
        label: "Fulcrum",
        value: "https://web.fulcrumapp.com/apps",
      },
      {
        label: "SharePoint",
        value: "https://basecg.sharepoint.com/_layouts/15/sharepoint.aspx",
      },
      {
        label: "QANTAS Business",
        value: "https://accounts.qantas.com/auth/web/qbr-secure-login",
      },
    ],
  },
  {
    title: "Personal",
    links: [
      {
        label: "Link 1",
        value: "https://www.google.com/",
      },
      {
        label: "Link 2",
        value: "https://www.google.com/",
      },
      {
        label: "Link 3",
        value: "https://www.google.com/",
      },
      {
        label: "Link 4",
        value: "https://www.google.com/",
      },
      {
        label: "Link 5",
        value: "https://www.google.com/",
      },
      {
        label: "Link 6",
        value: "https://www.google.com/",
      },
    ],
  },
];

export const images: dataElem[] = [
  { label: "pic_1", value: pic_1 },
  { label: "pic_2", value: pic_2 },
  { label: "pic_3", value: pic_3 },
  { label: "pic_4", value: pic_4 },
  { label: "pic_5", value: pic_5 },
  { label: "pic_6", value: pic_6 },
  { label: "pic_7", value: pic_7 },
  { label: "pic_8", value: pic_8 },
];

export const searchEngines: dataElem[] = [
  {
    label: "Google",
    value: `https://www.google.com/search?q=${queryToken}`,
  },
  {
    label: "DuckDuckGo",
    value: `https://duckduckgo.com/?q=${queryToken}`,
  },
  {
    label: "Qwant",
    value: `https://qwant.com/?q=${queryToken}`,
  },
  {
    label: "Ecosia",
    value: `https://ecosia.org/search/?q=${queryToken}`,
  },
];

export type FastForwards = Record<string, string>;

export interface Search {
  engine: string;
  fastForward: FastForwards;
}

export const searchSettings: Search = {
  engine: searchEngines[0].value,
  fastForward: {
    maps: "https://google.de/maps/",
  },
};

export interface colorsType {
  [key: string]: string;
  "--bg-color": string;
  "--default-color": string;
  "--accent-color": string;
  "--accent-color2": string;
}

export interface Theme {
  name: string;
  colors: colorsType;
  image: string;
}

export const themes: Theme[] = [
  {
    name: "Flora",
    image: pic_1,
    colors: {
      "--bg-color": "#2D3F32",
      "--default-color": "#F0F0F0",
      "--accent-color": "#797054",
      "--accent-color2": "#132C09",
    },
  },
];
