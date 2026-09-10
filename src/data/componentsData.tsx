import { buttons } from "./buttonsData";
import { checkboxes } from "./checkboxesData";
import { toggles } from "./togglesData";
import { cards } from "./cardsData";
import { loaders } from "./loadersData";
import { inputs } from "./inputsData";
import { radiobuttons } from "./radioButtonsData";
import { forms } from "./formsData";
import { patterns } from "./patternsData";
import { tooltips } from "./tooltipsData";
import { navbar } from "./navbarData";
import { logins } from "./loginsData";
import { dropdowns } from "./dropdownsData";
import { modals } from "./modalsData";
import { alerts } from "./alertsData";
import { badges } from "./badgesData";
import { avatars } from "./avatarsData";
import { tabs } from "./tabsData";
import { breadcrumbs } from "./breadcrumbsData";
import { pagination } from "./paginationData";
import { skeletons } from "./skeletonsData";
import { sidebars } from "./sidebarsData";
import { heroSections } from "./heroSectionsData";
import { iphones } from "./iphonesData";
import { toasts } from "./ToastsData";
import { accordions } from "./AccordionsData";
import { carousels } from "./CarouselsData";
import { progressBars } from "./ProgressBarsData";
import { tables } from "./TablesData";

export {
  buttons,
  checkboxes,
  toggles,
  cards,
  loaders,
  inputs,
  radiobuttons,
  forms,
  patterns,
  tooltips,
  navbar,
  logins,
  dropdowns,
  modals,
  alerts,
  badges,
  avatars,
  tabs,
  breadcrumbs,
  pagination,
  skeletons,
  sidebars,
  heroSections,
  iphones,
  toasts,
  accordions,
  carousels,
  progressBars,
  tables,
};

export const allComponents = [
  ...buttons,
  ...checkboxes,
  ...toggles,
  ...cards,
  ...loaders,
  ...inputs,
  ...radiobuttons,
  ...forms,
  ...patterns,
  ...tooltips,
  ...navbar,
  ...logins,
  ...dropdowns,
  ...modals,
  ...alerts,
  ...badges,
  ...avatars,
  ...tabs,
  ...breadcrumbs,
  ...pagination,
  ...skeletons,
  ...sidebars,
  ...heroSections,
  ...iphones,
  ...toasts,
  ...accordions,
  ...carousels,
  ...progressBars,
  ...tables,
];
// { dit de de voorbeeld
// id: 1, name: "wat de naam ook maar is", preview: <button className="wat de naam ook maar is">Get started</button>,
// html: `<button class="Button">click here</button>`,
// css: `.Button {
// color: #fff;
// }
// .Button:hover {
//     opacity: 0.85;
// }`
// },

// dit is een voorbeeld van het begin van een components ding
// export const checkboxes = [
//     {
//         id: 5, name: "Checkbox", preview: (
//             <div className="prev-checkbox-group">
//                 <label className="prev-checkbox"><input type="checkbox" defaultChecked /><span>Option 1</span></label>
//                 <label className="prev-checkbox"><input type="checkbox" /><span>Option 2</span></label>
//                 <label className="prev-checkbox"><input type="checkbox" /><span>Option 3</span></label>
//             </div>
//         ),
//         html: `<div class="Checkbox-group">
//     <label class="Checkbox"><input type="checkbox" checked /><span>Option 1</span></label>
//     <label class="Checkbox"><input type="checkbox" /><span>Option 2</span></label>
//     <label class="Checkbox"><input type="checkbox" /><span>Option 3</span></label>
// </div>`,
//         css: `.Checkbox-group {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
// }
// .Checkbox {
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     font-size: 14px;
//     color: #a1a1aa;
//     cursor: pointer;
// }
// .Checkbox input[type="checkbox"] {
//     width: 16px;
//     height: 16px;
//     accent-color: #7c3aed;
//     cursor: pointer;
// }`
//     },{
//         id: 15, name: "Checkbox", preview: (
//             <label className="cb-15">
//                 <input defaultChecked type="checkbox" />
//                 <div className="cb-15__mark"></div>
//             </label>
//         ),
//         html: `<label class="Checkbox">
//     <input type="checkbox" checked />
//     <div class="Checkbox__mark"></div>
// </label>`,
//         css: `.Checkbox input {
//     display: none;
// }
// .Checkbox {
//     display: block;
//     position: relative;
//     cursor: pointer;
//     font-size: 20px;
//     user-select: none;
//     -webkit-tap-highlight-color: transparent;
// }
// .Checkbox__mark {
//     position: relative;
//     top: 0;
//     left: 0;
//     height: 1.3em;
//     width: 1.3em;
//     background-color: #2196F300;
//     border-radius: 0.25em;
//     transition: all 0.25s;
// }
// .Checkbox input:checked~.Checkbox__mark {
//     background-color: #2196F3;
// }
// .Checkbox__mark::after {
//     content: "";
//     position: absolute;
//     transform: rotate(0deg);
//     border: 0.1em solid black;
//     left: 0;
//     top: 0;
//     width: 1.05em;
//     height: 1.05em;
//     border-radius: 0.25em;
//     transition: all 0.25s, border-width 0.1s;
// }
// .Checkbox input:checked~.Checkbox__mark::after {
//     left: 0.45em;
//     top: 0.25em;
//     width: 0.25em;
//     height: 0.5em;
//     border-color: #fff0 white white #fff0;
//     border-width: 0 0.15em 0.15em 0;
//     border-radius: 0em;
//     transform: rotate(45deg);
// }`
//     },
// ];
