/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/AttributesList/AttributesList.js":
/*!*********************************************************!*\
  !*** ./src/components/AttributesList/AttributesList.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AttributesList)
/* harmony export */ });
/* harmony import */ var _AttributesList_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttributesList.module.scss */ "./src/components/AttributesList/AttributesList.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function AttributesList() {
  const attributes = ['Critical Thinker', 'Leadership Mentality', 'Strong Communicator', 'Careful Organizer', 'Effective Public Speaker', 'Creative Problem Solver', 'Interpersonal Manager', 'Versatile Skillset', 'Team Player', 'Fun Guy'];
  const [attribute, setAttribute] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(attributes[0]);
  const [num, setNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [run, setRun] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const className = toggle ? "".concat(_AttributesList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].displayFade) : "".concat(_AttributesList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    const att = document.getElementById('display');
    console.log(att);
    if (attribute === attributes[9]) {
      setAttribute(attributes[0]);
      setNum(1);
    } else {
      setAttribute(attributes[num]);
      setNum(num + 1);
    }
    setTimeout(displayAttribute, 4950);
    function displayAttribute() {
      setToggle(false);
      console.log(att);
      setTimeout(() => {
        setRun(!run);
        setToggle(true);
      }, 50);
    }
  }, [run]);
  return /*#__PURE__*/React.createElement("div", {
    className: _AttributesList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].attributesList
  }, /*#__PURE__*/React.createElement("p", {
    className: className,
    id: "display"
  }, attribute));
}

/***/ }),

/***/ "./src/components/ContactForm/ContactForm.js":
/*!***************************************************!*\
  !*** ./src/components/ContactForm/ContactForm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactForm.module.scss */ "./src/components/ContactForm/ContactForm.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_contacts_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/contacts-api */ "./src/utilities/contacts-api.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



function ContactForm() {
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: '',
    email: '',
    message: ''
  });
  const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const handleSubmit = async e => {
    e.preventDefault();
    if (formData.name !== '' && formData.email !== '') {
      try {
        await _utilities_contacts_api__WEBPACK_IMPORTED_MODULE_2__.createContact(formData);
        setToggle(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please leave a name and email if you would like to reach out. Thank you!');
    }
  };
  const handleChange = e => {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [e.target.name]: e.target.value
    }));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    async function toggleTrue() {
      setToggle(true);
    }
    toggleTrue();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ContactForm
  }, /*#__PURE__*/React.createElement("h2", {
    className: _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].formHeader
  }, "Contact Form"), toggle ? /*#__PURE__*/React.createElement("div", {
    className: _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].formContainer
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    autoComplete: "off",
    className: _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].contactForm
  }, /*#__PURE__*/React.createElement("input", {
    className: _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].formInput,
    value: formData.name,
    placeholder: "Name",
    type: "text",
    name: "name",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("input", {
    className: _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].formInput,
    value: formData.email,
    placeholder: "Email",
    type: "text",
    name: "email",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("textarea", {
    rows: "5",
    cols: "19",
    className: _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].formInput,
    value: formData.message,
    placeholder: "Message",
    type: "text",
    name: "message",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("button", {
    className: _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].formSubmit,
    type: "submit"
  }, "Submit"))) : /*#__PURE__*/React.createElement("h3", null, "Thank you for reaching out! I'll be in touch soon."));
}

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


const NavBar = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].NavBar
  }, /*#__PURE__*/React.createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].linkContainer
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/home",
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navLink
  }, "Home"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/about",
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navLink
  }, "About"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/projects",
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navLink
  }, "Projects"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/contact",
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navLink
  }, "Contact"), /*#__PURE__*/React.createElement("p", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].signature
  }, "Paul Shephard")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/components/NavFooter/NavFooter.js":
/*!***********************************************!*\
  !*** ./src/components/NavFooter/NavFooter.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavFooter)
/* harmony export */ });
/* harmony import */ var _NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavFooter.module.scss */ "./src/components/NavFooter/NavFooter.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function NavFooter() {
  return /*#__PURE__*/React.createElement("div", {
    className: _NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].NavFooter
  }, /*#__PURE__*/React.createElement("p", {
    className: _NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].Copyright
  }, "\xA9 Paul Shephard 2024"), /*#__PURE__*/React.createElement("a", {
    href: "",
    className: _NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].footerLink,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/5j7wzpH.png",
    title: "Resume",
    className: _NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].footerIcon
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/pshephardiii",
    className: _NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].footerLink,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/wVqeaFz.png",
    title: "GitHub",
    className: _NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].footerIcon
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/paulshephard76/",
    className: _NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].footerLink,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/gLaHV9t.png",
    title: "LinkedIn",
    className: _NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].footerIcon
  })));
}

/***/ }),

/***/ "./src/components/ProjectItem/ProjectItem.js":
/*!***************************************************!*\
  !*** ./src/components/ProjectItem/ProjectItem.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectItem)
/* harmony export */ });
/* harmony import */ var _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.module.scss */ "./src/components/ProjectItem/ProjectItem.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ProjectItem(_ref) {
  let {
    project
  } = _ref;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, project.name), /*#__PURE__*/React.createElement("h3", null, project.summary), /*#__PURE__*/React.createElement("p", null, project.tools), /*#__PURE__*/React.createElement("img", {
    src: "".concat(project.image)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "".concat(project.githubLink)
  }, "GitHub Repository"), /*#__PURE__*/React.createElement("a", {
    href: "".concat(project.liveProjectLink)
  }, "Live Project Link")), /*#__PURE__*/React.createElement("p", null, project.description));
}

/***/ }),

/***/ "./src/components/ProjectList/ProjectList.js":
/*!***************************************************!*\
  !*** ./src/components/ProjectList/ProjectList.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList.module.scss */ "./src/components/ProjectList/ProjectList.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_projects_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/projects-api */ "./src/utilities/projects-api.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function ProjectList() {
  const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [toggle0, setToggle0] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [toggle1, setToggle1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [toggle2, setToggle2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const imageClass0 = toggle0 ? "".concat(_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectImageVisible) : "".concat(_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectImageInvisible);
  const popupClass0 = toggle0 ? "".concat(_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectPopupInvisible) : "".concat(_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectPopupVisible);
  const imageClass1 = toggle1 ? "".concat(_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectImageVisible) : "".concat(_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectImageInvisible);
  const popupClass1 = toggle1 ? "".concat(_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectPopupInvisible) : "".concat(_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectPopupVisible);
  const imageClass2 = toggle2 ? "".concat(_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectImageVisible) : "".concat(_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectImageInvisible);
  const popupClass2 = toggle2 ? "".concat(_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectPopupInvisible) : "".concat(_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectPopupVisible);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    async function getProjects() {
      try {
        const allProjects = await _utilities_projects_api__WEBPACK_IMPORTED_MODULE_2__.indexProjects();
        setProjects(allProjects);
      } catch (error) {
        console.error(error);
      }
    }
    getProjects();
  }, [projects.length === 0]);
  async function togglePopup0() {
    setToggle0(!toggle0);
  }
  async function togglePopup1() {
    setToggle1(!toggle1);
  }
  async function togglePopup2() {
    setToggle2(!toggle2);
  }
  if (projects.length !== 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectList
    }, /*#__PURE__*/React.createElement("div", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectContainer
    }, /*#__PURE__*/React.createElement("h3", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectName
    }, projects[0].name), /*#__PURE__*/React.createElement("p", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectLinks
    }, /*#__PURE__*/React.createElement("a", {
      href: projects[0].liveProjectLink,
      target: "_blank",
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link
    }, "Live Project"), " --- ", /*#__PURE__*/React.createElement("a", {
      href: projects[0].githubLink,
      target: "_blank",
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link
    }, "GitHub Repo")), /*#__PURE__*/React.createElement("img", {
      src: projects[0].image,
      className: imageClass0,
      onClick: togglePopup0
    }), /*#__PURE__*/React.createElement("p", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectSummary
    }, projects[0].summary), /*#__PURE__*/React.createElement("div", {
      className: popupClass0,
      onClick: togglePopup0
    }, /*#__PURE__*/React.createElement("p", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectTools
    }, projects[0].tools), /*#__PURE__*/React.createElement("p", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectDecription
    }, projects[0].description))), /*#__PURE__*/React.createElement("div", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectContainer
    }, /*#__PURE__*/React.createElement("h3", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectName
    }, projects[1].name), /*#__PURE__*/React.createElement("p", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectLinks
    }, /*#__PURE__*/React.createElement("a", {
      href: projects[1].liveProjectLink,
      target: "_blank",
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link
    }, "Live Project"), " --- ", /*#__PURE__*/React.createElement("a", {
      href: projects[1].githubLink,
      target: "_blank",
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link
    }, "GitHub Repo")), /*#__PURE__*/React.createElement("img", {
      src: projects[1].image,
      className: imageClass1,
      onClick: togglePopup1
    }), /*#__PURE__*/React.createElement("p", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectSummary
    }, projects[1].summary), /*#__PURE__*/React.createElement("div", {
      className: popupClass1,
      onClick: togglePopup1
    }, /*#__PURE__*/React.createElement("p", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectTools
    }, projects[1].tools), /*#__PURE__*/React.createElement("p", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectDecription
    }, projects[1].description))), /*#__PURE__*/React.createElement("div", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectContainer
    }, /*#__PURE__*/React.createElement("h3", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectName
    }, projects[2].name), /*#__PURE__*/React.createElement("p", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectLinks
    }, /*#__PURE__*/React.createElement("a", {
      href: projects[2].liveProjectLink,
      target: "_blank",
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link
    }, "Live Project"), " --- ", /*#__PURE__*/React.createElement("a", {
      href: projects[2].githubLink,
      target: "_blank",
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].link
    }, "GitHub Repo")), /*#__PURE__*/React.createElement("img", {
      src: projects[2].image,
      className: imageClass2,
      onClick: togglePopup2
    }), /*#__PURE__*/React.createElement("p", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectSummary
    }, projects[2].summary), /*#__PURE__*/React.createElement("div", {
      className: popupClass2,
      onClick: togglePopup2
    }, /*#__PURE__*/React.createElement("p", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectTools
    }, projects[2].tools), /*#__PURE__*/React.createElement("p", {
      className: _ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectDecription
    }, projects[2].description))));
  }
}

/***/ }),

/***/ "./src/components/SkillList/SkillList.js":
/*!***********************************************!*\
  !*** ./src/components/SkillList/SkillList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SkillList)
/* harmony export */ });
/* harmony import */ var _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SkillList.module.scss */ "./src/components/SkillList/SkillList.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function SkillList() {
  const skills = ['JavaScript', 'HTML', 'CSS', 'MongoDB', 'JSON', 'React', 'Express.js', 'JSX', 'Sass'];
  const skillsIcons = ['https://i.imgur.com/fNTr29D.png', 'https://i.imgur.com/LwpNbJR.png', 'https://i.imgur.com/pAxoxNC.png', 'https://i.imgur.com/xPPh7jP.png', 'https://i.imgur.com/CyBT2em.png', 'https://i.imgur.com/Zw00kc0.png', 'https://i.imgur.com/FsLutvP.png', 'https://i.imgur.com/IgCH7Hq.png', 'https://i.imgur.com/YVCimXg.png'];
  return /*#__PURE__*/React.createElement("div", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillListContainer
  }, /*#__PURE__*/React.createElement("ul", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillList
  }, /*#__PURE__*/React.createElement("li", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillItem
  }, /*#__PURE__*/React.createElement("img", {
    src: skillsIcons[0],
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].icon,
    title: skills[0]
  }), /*#__PURE__*/React.createElement("p", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillName
  }, "Javascript")), /*#__PURE__*/React.createElement("li", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillItem
  }, /*#__PURE__*/React.createElement("img", {
    src: skillsIcons[1],
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].icon,
    title: skills[1]
  }), /*#__PURE__*/React.createElement("p", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillName
  }, "HTML5")), /*#__PURE__*/React.createElement("li", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillItem
  }, /*#__PURE__*/React.createElement("img", {
    src: skillsIcons[2],
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].icon,
    title: skills[2]
  }), /*#__PURE__*/React.createElement("p", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillName
  }, "CSS")), /*#__PURE__*/React.createElement("li", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillItem
  }, /*#__PURE__*/React.createElement("img", {
    src: skillsIcons[3],
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].icon,
    title: skills[3]
  }), /*#__PURE__*/React.createElement("p", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillName
  }, "MongoDB")), /*#__PURE__*/React.createElement("li", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillItem
  }, /*#__PURE__*/React.createElement("img", {
    src: skillsIcons[4],
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].icon,
    title: skills[4]
  }), " ", /*#__PURE__*/React.createElement("p", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillName
  }, "JSON")), /*#__PURE__*/React.createElement("li", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillItem
  }, /*#__PURE__*/React.createElement("img", {
    src: skillsIcons[5],
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].icon,
    title: skills[5]
  }), " ", /*#__PURE__*/React.createElement("p", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillName
  }, "React")), /*#__PURE__*/React.createElement("li", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillItem
  }, /*#__PURE__*/React.createElement("img", {
    src: skillsIcons[6],
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].icon,
    title: skills[6]
  }), /*#__PURE__*/React.createElement("p", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillName
  }, "Express.js")), /*#__PURE__*/React.createElement("li", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillItem
  }, /*#__PURE__*/React.createElement("img", {
    src: skillsIcons[7],
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].icon,
    title: skills[7]
  }), /*#__PURE__*/React.createElement("p", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillName
  }, "JSX")), /*#__PURE__*/React.createElement("li", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillItem
  }, /*#__PURE__*/React.createElement("img", {
    src: skillsIcons[8],
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].icon,
    title: skills[8]
  }), /*#__PURE__*/React.createElement("p", {
    className: _SkillList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].skillName
  }, "Sass"))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_router__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./src/pages/AboutPage/AboutPage.js":
/*!******************************************!*\
  !*** ./src/pages/AboutPage/AboutPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutPage.module.scss */ "./src/pages/AboutPage/AboutPage.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function AboutPage() {
  return /*#__PURE__*/React.createElement("main", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].AboutPage
  }, /*#__PURE__*/React.createElement("h1", null, "About Me"), /*#__PURE__*/React.createElement("div", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mainContent
  }, /*#__PURE__*/React.createElement("div", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].aboutPageTop
  }, /*#__PURE__*/React.createElement("div", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].picAndCap
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/hWb88UB.jpeg",
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].aboutImage,
    title: "Paul and Baxter",
    alt: "A man sitting on a chair with a Yorkie on his lap"
  }), /*#__PURE__*/React.createElement("p", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].aboutCaption
  }, "Pictured: My dog Baxter and I")), /*#__PURE__*/React.createElement("div", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].aboutQuoteAndStrengths
  }, /*#__PURE__*/React.createElement("p", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].aboutQuote
  }, "\"Paul is the greatest coder alive.\" - Baxter, Ph.D"), /*#__PURE__*/React.createElement("div", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].aboutStrengths
  }, /*#__PURE__*/React.createElement("p", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].strengthsHeader
  }, "Strengths Include:"), /*#__PURE__*/React.createElement("ul", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].aboutStrengthsList
  }, /*#__PURE__*/React.createElement("li", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItem
  }, "Logic-based languages and problem-solving"), /*#__PURE__*/React.createElement("li", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItem
  }, "Backend model attribution and functionality"), /*#__PURE__*/React.createElement("li", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItem
  }, "Component dataflow, structure, and design"))))), /*#__PURE__*/React.createElement("div", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].aboutSummary
  }, /*#__PURE__*/React.createElement("p", null, "I've spent a majority of my life in higher education earning a Bachelor's, Master's, and PhD in Philosophy (although I double-majored in Economics as an undergraduate!). While I've ultimately decided to part ways with academia, I've learned a lot through my experiences that can be applied to, and benefit, the wonderful world of tech."), /*#__PURE__*/React.createElement("p", null, "My background in classical logic has helped me learn logic-based coding languages (like Javascript!) much easier and allows me to solve problems in creative and novel ways. My primary research area, which centered on the philosophy and epistemology of information transmission on social media, forced me to grabble with tough practical and ethical issues facing the digital world, including the ethics of data mining and profiling, digital \"nudging,\" and the use of algorithms to determine content viewability."), /*#__PURE__*/React.createElement("p", null, "My teaching experience taught me organization, patience, clarity of explanation, interpersonal skills, and, most importantly, how to tackle unforeseen challenges with quick-thinking and decisive action. Finally, my familiarity with professional conference presentations has drastically improved my public speaking skills, confidence, and my ability to \"read a room.\""), /*#__PURE__*/React.createElement("p", null, "It's been a long journey to get to where I am, but I'm thrilled to be able to apply a unique set of skills to the software development landscape!"), /*#__PURE__*/React.createElement("p", null, "To take a look at my resume, click ", /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "here!")))));
}

/***/ }),

/***/ "./src/pages/ContactPage/ContactPage.js":
/*!**********************************************!*\
  !*** ./src/pages/ContactPage/ContactPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var _components_ContactForm_ContactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ContactForm/ContactForm */ "./src/components/ContactForm/ContactForm.js");
/* harmony import */ var _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactPage.module.scss */ "./src/pages/ContactPage/ContactPage.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ContactPage() {
  return /*#__PURE__*/React.createElement("main", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ContactPage
  }, /*#__PURE__*/React.createElement("h1", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contactPageHeading
  }, "Please fill out the form below or send me an email at ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:paulshephard598@gmail.com"
  }, "paulshephard598@gmail.com")), /*#__PURE__*/React.createElement(_components_ContactForm_ContactForm__WEBPACK_IMPORTED_MODULE_0__["default"], null));
}

/***/ }),

/***/ "./src/pages/HomePage/HomePage.js":
/*!****************************************!*\
  !*** ./src/pages/HomePage/HomePage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _components_SkillList_SkillList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/SkillList/SkillList */ "./src/components/SkillList/SkillList.js");
/* harmony import */ var _components_AttributesList_AttributesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/AttributesList/AttributesList */ "./src/components/AttributesList/AttributesList.js");
/* harmony import */ var _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage.module.scss */ "./src/pages/HomePage/HomePage.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




function HomePage() {
  return /*#__PURE__*/React.createElement("main", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].HomePage
  }, /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].topLeftAndImage
  }, /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].topLeftMaterial
  }, /*#__PURE__*/React.createElement("h1", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].homeName
  }, "Paul Shephard"), /*#__PURE__*/React.createElement("h2", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].homeTitle
  }, "Full-Stack Software Developer"), /*#__PURE__*/React.createElement("h3", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].homeDescription
  }, "A PHILOSOPHER TURNED CODER"), /*#__PURE__*/React.createElement(_components_AttributesList_AttributesList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].attList
  })), /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/yZqYVPi.png",
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].profileImage
  })), /*#__PURE__*/React.createElement("p", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].footerNod
  }, "For my Resume, GitHub, and LinkedIn Profile, please click on the icons in the footer below!"), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].experienceLists
  }, /*#__PURE__*/React.createElement("ul", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].homeList
  }, /*#__PURE__*/React.createElement("li", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].homeListItem
  }, "500+ hours of Software Engineering Bootcamp at General Assembly"), /*#__PURE__*/React.createElement("li", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].homeListItem
  }, "Background in Academic Research and Education"), /*#__PURE__*/React.createElement("li", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].homeListItem
  }, "Granted Full-Stack Unit MVP and Cleanest Code Award"), /*#__PURE__*/React.createElement("li", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].homeListItem
  }, "Expertise includes Formal Logic and Digital Ethics"), /*#__PURE__*/React.createElement("li", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].homeListItem
  }, "Served as Team Leader and GitHub Manager"), /*#__PURE__*/React.createElement("li", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].homeListItem
  }, "300+ students taught with a 90% recommendation rate"))), /*#__PURE__*/React.createElement(_components_SkillList_SkillList__WEBPACK_IMPORTED_MODULE_0__["default"], null));
}

/***/ }),

/***/ "./src/pages/ProjectShowPage/ProjectShowPage.js":
/*!******************************************************!*\
  !*** ./src/pages/ProjectShowPage/ProjectShowPage.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectShowPage)
/* harmony export */ });
/* harmony import */ var _components_ProjectItem_ProjectItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ProjectItem/ProjectItem */ "./src/components/ProjectItem/ProjectItem.js");
/* harmony import */ var _ProjectShowPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectShowPage.module.scss */ "./src/pages/ProjectShowPage/ProjectShowPage.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_projects_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/projects-api */ "./src/utilities/projects-api.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





function ProjectShowPage() {
  const [project, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    name: '',
    summary: '',
    tools: '',
    image: '',
    description: '',
    githubLink: '',
    liveProjectLink: ''
  });
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    async function getProject() {
      try {
        const showProject = await _utilities_projects_api__WEBPACK_IMPORTED_MODULE_4__.showProject(id);
        setProject(showProject);
      } catch (error) {
        console.error(error);
      }
    }
    getProject();
  }, [project.name === '']);
  if (project.name !== '') {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_components_ProjectItem_ProjectItem__WEBPACK_IMPORTED_MODULE_0__["default"], {
      project: project
    }));
  }
}

/***/ }),

/***/ "./src/pages/ProjectsPage/ProjectsPage.js":
/*!************************************************!*\
  !*** ./src/pages/ProjectsPage/ProjectsPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectsPage)
/* harmony export */ });
/* harmony import */ var _ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectsPage.module.scss */ "./src/pages/ProjectsPage/ProjectsPage.module.scss");
/* harmony import */ var _components_ProjectList_ProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ProjectList/ProjectList */ "./src/components/ProjectList/ProjectList.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ProjectsPage() {
  return /*#__PURE__*/React.createElement("main", {
    className: _ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectsPage
  }, /*#__PURE__*/React.createElement("h1", {
    className: _ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectsHeadline
  }, "Projects"), /*#__PURE__*/React.createElement("p", null, "Click on image or links for more!"), /*#__PURE__*/React.createElement(_components_ProjectList_ProjectList__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/router/routes.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _components_NavFooter_NavFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavFooter/NavFooter */ "./src/components/NavFooter/NavFooter.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.module.scss */ "./src/router/App.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





const AppRouter = () => {
  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/React.createElement("main", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].App
  }, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Routes
  }, _routes__WEBPACK_IMPORTED_MODULE_0__["default"].map(_ref => {
    let {
      Component,
      key,
      path
    } = _ref;
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
      key: key,
      path: path,
      element: /*#__PURE__*/React.createElement(Component, {
        page: key
      })
    });
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/*",
    element: /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Navigate, {
      to: "/home"
    })
  })), /*#__PURE__*/React.createElement(_components_NavFooter_NavFooter__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRouter);

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/HomePage/HomePage */ "./src/pages/HomePage/HomePage.js");
/* harmony import */ var _pages_AboutPage_AboutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/AboutPage/AboutPage */ "./src/pages/AboutPage/AboutPage.js");
/* harmony import */ var _pages_ProjectsPage_ProjectsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/ProjectsPage/ProjectsPage */ "./src/pages/ProjectsPage/ProjectsPage.js");
/* harmony import */ var _pages_ContactPage_ContactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/ContactPage/ContactPage */ "./src/pages/ContactPage/ContactPage.js");
/* harmony import */ var _pages_ProjectShowPage_ProjectShowPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/ProjectShowPage/ProjectShowPage */ "./src/pages/ProjectShowPage/ProjectShowPage.js");





const routes = [{
  Component: _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_0__["default"],
  key: 'Home',
  path: '/home'
}, {
  Component: _pages_AboutPage_AboutPage__WEBPACK_IMPORTED_MODULE_1__["default"],
  key: 'About',
  path: '/about'
}, {
  Component: _pages_ProjectsPage_ProjectsPage__WEBPACK_IMPORTED_MODULE_2__["default"],
  key: 'Projects',
  path: '/projects'
}, {
  Component: _pages_ContactPage_ContactPage__WEBPACK_IMPORTED_MODULE_3__["default"],
  key: 'Contact',
  path: '/contact'
}, {
  Component: _pages_ProjectShowPage_ProjectShowPage__WEBPACK_IMPORTED_MODULE_4__["default"],
  key: 'Project',
  path: '/projects/:id'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/utilities/contacts-api.js":
/*!***************************************!*\
  !*** ./src/utilities/contacts-api.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContact: () => (/* binding */ createContact)
/* harmony export */ });
const BASE_URL = '/api/contacts';
async function createContact(data) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const formData = await response.json();
    return formData;
  } catch (error) {
    console.error(error);
  }
}

/***/ }),

/***/ "./src/utilities/projects-api.js":
/*!***************************************!*\
  !*** ./src/utilities/projects-api.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   indexProjects: () => (/* binding */ indexProjects),
/* harmony export */   showProject: () => (/* binding */ showProject)
/* harmony export */ });
const BASE_URL = '/api/projects';
async function indexProjects() {
  try {
    const response = await fetch(BASE_URL);
    const formData = await response.json();
    return formData;
  } catch (error) {
    console.error(error);
  }
}
async function showProject(id) {
  try {
    const response = await fetch("".concat(BASE_URL, "/").concat(id));
    const formData = await response.json();
    return formData;
  } catch (error) {
    console.error(error);
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AttributesList/AttributesList.module.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AttributesList/AttributesList.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes cHTjXpCQRt3P5Ps9uofS {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.cpBhSBxa_1hjqWyjxJVH {
  height: 8rem;
  text-align: center;
}
.cpBhSBxa_1hjqWyjxJVH ._oETPRO9bgRtAEaJt69J {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 2px black;
  animation: cHTjXpCQRt3P5Ps9uofS 5s linear;
}
.cpBhSBxa_1hjqWyjxJVH .DuDkOPd7Rxcm3oZBtmzQ {
  opacity: 0;
}`, "",{"version":3,"sources":["webpack://./src/components/AttributesList/AttributesList.module.scss"],"names":[],"mappings":"AAAA;EACI;IACI,UAAA;EACN;EACE;IACI,UAAA;EACN;EACE;IACI,UAAA;EACN;EACE;IACI,UAAA;EACN;AACF;AAEA;EAEI,YAAA;EACA,kBAAA;AADJ;AAII;EACI,eAAA;EACA,iBAAA;EACA,YAAA;EACA,8BAAA;EACA,yCAAA;AAFR;AAII;EACI,UAAA;AAFR","sourcesContent":["@keyframes fadeInAndOut {\n    0% {\n        opacity: 0\n    }\n    20% {\n        opacity: 1\n    }\n    80% {\n        opacity: 1\n    }\n    100% {\n        opacity: 0\n    }\n}\n\n.attributesList {\n    \n    height: 8rem;\n    text-align: center;\n \n\n    .displayFade {\n        font-size: 2rem;\n        font-weight: bold;\n        color: white;\n        text-shadow: 2px 2px 2px black;\n        animation: fadeInAndOut 5s linear\n    }\n    .null {\n        opacity: .0\n    }\n\n    \n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"attributesList": `cpBhSBxa_1hjqWyjxJVH`,
	"displayFade": `_oETPRO9bgRtAEaJt69J`,
	"fadeInAndOut": `cHTjXpCQRt3P5Ps9uofS`,
	"null": `DuDkOPd7Rxcm3oZBtmzQ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ContactForm/ContactForm.module.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ContactForm/ContactForm.module.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.rXtzMJoGkU1rsQf4DiH2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
}
.rXtzMJoGkU1rsQf4DiH2 .aOC3kt4av4_f8FLVoINA {
  font-family: "Courier Prime", monospace;
  font-weight: lighter;
  font-size: clamp(1.25rem, 2.5vw, 2.5rem);
}
.rXtzMJoGkU1rsQf4DiH2 .t1tgf9a8BtfZ8nzZ5Dm3 {
  background-color: whitesmoke;
  border-radius: 10px;
  border: 2px solid darkblue;
  padding: 2rem;
  box-shadow: 2px 2px 2px darkblue;
}
.rXtzMJoGkU1rsQf4DiH2 .t1tgf9a8BtfZ8nzZ5Dm3 .EY__rqRg4_GocB6j5aUc {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.rXtzMJoGkU1rsQf4DiH2 .t1tgf9a8BtfZ8nzZ5Dm3 .EY__rqRg4_GocB6j5aUc .LuJGcJyqVXNENEzbXHTc {
  border-radius: 5px;
  border: 2px solid darkblue;
  font-family: "Courier Prime", monospace;
  font-size: clamp(1rem, 2vw, 1.5rem);
}
.rXtzMJoGkU1rsQf4DiH2 .t1tgf9a8BtfZ8nzZ5Dm3 .EY__rqRg4_GocB6j5aUc .gbfllMzkJzCE9MlDNbup {
  font-family: "Montserrat", serif;
  font-weight: bolder;
  background-color: lightgray;
  border: 2px solid darkblue;
  border-radius: 5px;
  font-size: clamp(1rem, 2vw, 1.5rem);
  width: 10rem;
}
.rXtzMJoGkU1rsQf4DiH2 .t1tgf9a8BtfZ8nzZ5Dm3 .EY__rqRg4_GocB6j5aUc .gbfllMzkJzCE9MlDNbup:hover {
  color: white;
  background-color: darkblue;
  border: 2px solid lightgray;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/components/ContactForm/ContactForm.module.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;AAAJ;AAEI;EACI,uCAAA;EACA,oBAAA;EACA,wCAAA;AAAR;AAGI;EACI,4BAAA;EACA,mBAAA;EACA,0BAAA;EACA,aAAA;EACA,gCAAA;AADR;AAGQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AADZ;AAGY;EACI,kBAAA;EACA,0BAAA;EACA,uCAAA;EACA,mCAAA;AADhB;AAKY;EACI,gCAAA;EACA,mBAAA;EACA,2BAAA;EACA,0BAAA;EACA,kBAAA;EACA,mCAAA;EACA,YAAA;AAHhB;AAKY;EACI,YAAA;EACA,0BAAA;EACA,2BAAA;EACA,eAAA;AAHhB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');\n\n.ContactForm {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 3rem;\n\n    .formHeader {\n        font-family: \"Courier Prime\", monospace;\n        font-weight: lighter;\n        font-size: clamp(1.25rem, 2.5vw, 2.5rem);\n    }\n\n    .formContainer {\n        background-color: whitesmoke;\n        border-radius: 10px;\n        border: 2px solid darkblue;\n        padding: 2rem;\n        box-shadow: 2px 2px 2px darkblue;\n\n        .contactForm {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 2rem;\n\n            .formInput {\n                border-radius: 5px;\n                border: 2px solid darkblue;\n                font-family: 'Courier Prime', monospace;\n                font-size: clamp(1rem, 2vw, 1.5rem);\n                \n            }\n\n            .formSubmit {\n                font-family: \"Montserrat\", serif;\n                font-weight: bolder;\n                background-color: lightgray;\n                border: 2px solid darkblue;\n                border-radius: 5px;\n                font-size: clamp(1rem, 2vw, 1.5rem);\n                width: 10rem;\n            }\n            .formSubmit:hover {\n                color: white;\n                background-color: darkblue;\n                border: 2px solid lightgray;\n                cursor: pointer;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ContactForm": `rXtzMJoGkU1rsQf4DiH2`,
	"formHeader": `aOC3kt4av4_f8FLVoINA`,
	"formContainer": `t1tgf9a8BtfZ8nzZ5Dm3`,
	"contactForm": `EY__rqRg4_GocB6j5aUc`,
	"formInput": `LuJGcJyqVXNENEzbXHTc`,
	"formSubmit": `gbfllMzkJzCE9MlDNbup`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=MonteCarlo&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.QpVD3qAS0nYBtoQqAYoe {
  background-color: lightgrey;
  width: 100vw;
  height: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  font-family: "Roboto Slab", serif;
  border-bottom: 1px solid black;
  z-index: 1000;
}
.QpVD3qAS0nYBtoQqAYoe .xONuz4U1rd7MPGPmcxft {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5vw;
  height: 100%;
  width: 100%;
  margin-left: 5rem;
}
.QpVD3qAS0nYBtoQqAYoe .xONuz4U1rd7MPGPmcxft .GRGR9aSk5WYAhblWf8Yl {
  font-size: clamp(1rem, 2vw, 1.5rem);
  text-decoration: none;
  color: black;
}
.QpVD3qAS0nYBtoQqAYoe .xONuz4U1rd7MPGPmcxft .GRGR9aSk5WYAhblWf8Yl:hover {
  color: white;
}
.QpVD3qAS0nYBtoQqAYoe .mW8_jbYVqUl59UscNYFa {
  position: fixed;
  right: 3rem;
  top: 0;
  margin-top: 0;
  font-family: "MonteCarlo", cursive;
  font-size: 1.25rem;
}

@media screen and (width < 35rem) {
  .mW8_jbYVqUl59UscNYFa {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/NavBar/NavBar.module.scss"],"names":[],"mappings":"AAGA;EACI,2BAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,iCAAA;EACA,8BAAA;EACA,aAAA;AAAJ;AAEI;EACA,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,QAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;AAAJ;AAEQ;EACI,mCAAA;EACA,qBAAA;EACA,YAAA;AAAZ;AAEQ;EACI,YAAA;AAAZ;AAKI;EACI,eAAA;EACA,WAAA;EACA,MAAA;EACA,aAAA;EACA,kCAAA;EACA,kBAAA;AAHR;;AAOA;EACI;IACI,aAAA;EAJN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=MonteCarlo&display=swap');\n\n.NavBar {\n    background-color: lightgrey;\n    width: 100vw;\n    height: 2rem;\n    position: fixed;\n    top: 0;\n    left: 0;\n    font-family: 'Roboto Slab', serif;\n    border-bottom: 1px solid black;\n    z-index: 1000;\n\n    .linkContainer {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 5vw;\n    height: 100%;\n    width: 100%;\n    margin-left: 5rem;\n\n        .navLink {\n            font-size: clamp(1rem, 2vw, 1.5rem);\n            text-decoration: none;\n            color: black;\n        }\n        .navLink:hover {\n            color: white;\n        }\n\n    }\n\n    .signature {\n        position: fixed;\n        right: 3rem;\n        top: 0;\n        margin-top: 0;\n        font-family: \"MonteCarlo\", cursive;\n        font-size: 1.25rem;\n    }\n}\n\n@media screen and (width < 35rem) {\n    .signature {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"NavBar": `QpVD3qAS0nYBtoQqAYoe`,
	"linkContainer": `xONuz4U1rd7MPGPmcxft`,
	"navLink": `GRGR9aSk5WYAhblWf8Yl`,
	"signature": `mW8_jbYVqUl59UscNYFa`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavFooter/NavFooter.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavFooter/NavFooter.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Bb3ND5DsBlpFzlNbzVHu {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 100%;
  background-color: lightgrey;
  position: fixed;
  bottom: 0;
  left: 0;
  gap: 7.5rem;
  border-top: 1px solid black;
}
.Bb3ND5DsBlpFzlNbzVHu .gqx_VKknoy57wOzb7JcS {
  position: absolute;
  left: 1rem;
  bottom: 0;
}
.Bb3ND5DsBlpFzlNbzVHu .rc6OcOz_ssuzPFYDVHuK {
  display: flex;
  align-items: center;
  justify-content: center;
}
.Bb3ND5DsBlpFzlNbzVHu .rc6OcOz_ssuzPFYDVHuK .OCIWcgbb2IohLipUQV1I {
  height: 2.75rem;
  position: absolute;
}
.Bb3ND5DsBlpFzlNbzVHu .rc6OcOz_ssuzPFYDVHuK .OCIWcgbb2IohLipUQV1I:hover {
  height: 3rem;
}

@media screen and (width < 45rem) and (width > 25rem) {
  .Bb3ND5DsBlpFzlNbzVHu {
    gap: 5rem;
  }
  .gqx_VKknoy57wOzb7JcS {
    position: static !important;
  }
}
@media screen and (width <= 25rem) {
  .Bb3ND5DsBlpFzlNbzVHu {
    gap: 3rem;
  }
  .gqx_VKknoy57wOzb7JcS {
    position: static !important;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/NavFooter/NavFooter.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,2BAAA;EACA,eAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,2BAAA;AACJ;AACI;EACI,kBAAA;EACA,UAAA;EACA,SAAA;AACR;AAEI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;AAAR;AAEQ;EACI,eAAA;EACA,kBAAA;AAAZ;AAEQ;EACI,YAAA;AAAZ;;AAKA;EACI;IACI,SAAA;EAFN;EAKE;IACI,2BAAA;EAHN;AACF;AAMA;EACI;IACI,SAAA;EAJN;EAME;IACI,2BAAA;EAJN;AACF","sourcesContent":[".NavFooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 3rem;\n    width: 100%;\n    background-color: lightgrey;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    gap: 7.5rem;\n    border-top: 1px solid black;\n\n    .Copyright {\n        position: absolute;\n        left: 1rem;\n        bottom: 0;\n    }\n\n    .footerLink {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    \n        .footerIcon {\n            height: 2.75rem; \n            position: absolute;\n        }\n        .footerIcon:hover {\n            height: 3rem;\n        }\n    }\n}\n\n@media screen and (width < 45rem) and (width > 25rem) {\n    .NavFooter {\n        gap: 5rem;\n    }\n\n    .Copyright {\n        position: static !important;\n    }\n}\n\n@media screen and (width <= 25rem) {\n    .NavFooter {\n        gap: 3rem;\n    }\n    .Copyright {\n        position: static !important;\n    }\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"NavFooter": `Bb3ND5DsBlpFzlNbzVHu`,
	"Copyright": `gqx_VKknoy57wOzb7JcS`,
	"footerLink": `rc6OcOz_ssuzPFYDVHuK`,
	"footerIcon": `OCIWcgbb2IohLipUQV1I`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProjectItem/ProjectItem.module.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProjectItem/ProjectItem.module.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProjectList/ProjectList.module.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProjectList/ProjectList.module.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.JHKOwgw57XWKRmWEcOoS {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 95vw;
}
.JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 42rem;
  height: 40rem;
  margin: 0 2rem;
  border-top: 4px dotted white;
}
.JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN .qyjsO88M5Zk6_RHHlYLT {
  font-size: 2rem;
  height: 1.75rem;
}
.JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN .PVVdgIVykr3De_euNVVH {
  font-size: 1.5rem;
  text-align: center;
}
.JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN .gH_sXGDoYMrrU0PqFa8o {
  font-size: 1.5rem;
}
.JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN .nwz3gDLOU0GR00QQGvZn:hover {
  color: white;
  text-shadow: 1px 1px 1px blue;
}
.JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN .v20QUUrVOvZ6R7iVz5Wr {
  width: 40rem;
  border-radius: 10px;
  box-shadow: 2px 2px 1px black;
  opacity: 1;
}
.JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN .v20QUUrVOvZ6R7iVz5Wr:hover {
  box-shadow: 2px 2px 1px white;
  opacity: 0.8;
  cursor: pointer;
}
.JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN .OG_58bK6KgGnHwZ5RqwY {
  width: 40rem;
  border-radius: 5%;
  box-shadow: 2px 2px 1px black;
  opacity: 0.1;
}
.JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN .OG_58bK6KgGnHwZ5RqwY:hover {
  cursor: pointer;
}
.JHKOwgw57XWKRmWEcOoS .p5GA4VhZeJoeeSNsdLnJ {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 28rem;
  width: 38rem;
  font-size: 1.25rem;
  font-weight: bold;
  z-index: 20000;
  cursor: pointer;
}
.JHKOwgw57XWKRmWEcOoS .tkRmNQSyjZW3ZOoyTLwl {
  display: none;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 28rem;
  width: 38rem;
  font-size: 1.25rem;
  z-index: 20000;
}

@media screen and (width < 45rem) {
  .JHKOwgw57XWKRmWEcOoS {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN {
    width: 27rem;
    height: 27rem;
    margin: 0 2rem;
  }
  .JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN .qyjsO88M5Zk6_RHHlYLT {
    font-size: 1.5rem;
  }
  .JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN .PVVdgIVykr3De_euNVVH {
    font-size: 1rem;
  }
  .JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN .gH_sXGDoYMrrU0PqFa8o {
    font-size: 1rem;
  }
  .JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN .v20QUUrVOvZ6R7iVz5Wr {
    width: 25rem;
  }
  .JHKOwgw57XWKRmWEcOoS .vR5nBBaIVoqpGEr4TnRN .OG_58bK6KgGnHwZ5RqwY {
    width: 25rem;
  }
  .JHKOwgw57XWKRmWEcOoS .p5GA4VhZeJoeeSNsdLnJ {
    font-size: 0.9rem;
    width: 22rem;
    bottom: 20rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/ProjectList/ProjectList.module.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,mBAAA;EACA,WAAA;AACJ;AACI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,4BAAA;AACR;AACQ;EACI,eAAA;EACA,eAAA;AACZ;AAEQ;EACI,iBAAA;EACA,kBAAA;AAAZ;AAGQ;EACI,iBAAA;AADZ;AAIQ;EACI,YAAA;EACA,6BAAA;AAFZ;AAMQ;EACI,YAAA;EACA,mBAAA;EACA,6BAAA;EACA,UAAA;AAJZ;AAOQ;EACI,6BAAA;EACA,YAAA;EACA,eAAA;AALZ;AAQQ;EACI,YAAA;EACA,iBAAA;EACA,6BAAA;EACA,YAAA;AANZ;AASQ;EACI,eAAA;AAPZ;AAWI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,cAAA;EACA,eAAA;AATR;AAYI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;AAVR;;AAeA;EACI;IACI,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,SAAA;EAZN;EAcM;IACI,YAAA;IACA,aAAA;IACA,cAAA;EAZV;EAcU;IACI,iBAAA;EAZd;EAeU;IACI,eAAA;EAbd;EAgBU;IACI,eAAA;EAdd;EAiBU;IACI,YAAA;EAfd;EAkBU;IACI,YAAA;EAhBd;EAoBM;IACI,iBAAA;IACA,YAAA;IACA,aAAA;EAlBV;AACF","sourcesContent":[".ProjectList {\n    margin-bottom: 3rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    align-items: center;\n    width: 95vw;\n    \n    .projectContainer {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 42rem;\n        height: 40rem;\n        margin: 0 2rem;\n        border-top: 4px dotted white;\n\n        .projectName {\n            font-size: 2rem;\n            height: 1.75rem;\n        }\n\n        .projectSummary {\n            font-size: 1.5rem;\n            text-align: center;\n        }\n\n        .projectLinks {\n            font-size: 1.5rem;\n        }\n\n        .link:hover {\n            color: white;\n            text-shadow: 1px 1px 1px blue;\n\n        }\n\n        .projectImageVisible {\n            width: 40rem;\n            border-radius: 10px;\n            box-shadow: 2px 2px 1px black;\n            opacity: 1;\n        }\n\n        .projectImageVisible:hover {\n            box-shadow: 2px 2px 1px white;\n            opacity: .8;\n            cursor: pointer;\n        }\n\n        .projectImageInvisible {\n            width: 40rem;\n            border-radius: 5%;\n            box-shadow: 2px 2px 1px black;\n            opacity: .1;\n        }\n\n        .projectImageInvisible:hover {\n            cursor: pointer;\n        }\n    }\n\n    .projectPopupVisible {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        position: relative;\n        bottom: 28rem;\n        width: 38rem;\n        font-size: 1.25rem;\n        font-weight: bold;\n        z-index: 20000; \n        cursor: pointer;\n    }\n\n    .projectPopupInvisible {\n        display: none;\n        flex-direction: column;\n        align-items: center;\n        position: relative;\n        bottom: 28rem;\n        width: 38rem;\n        font-size: 1.25rem;\n        z-index: 20000;\n        \n    }\n}\n\n@media screen and (width < 45rem) {\n    .ProjectList {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 1rem;\n\n        .projectContainer {\n            width: 27rem;\n            height: 27rem;\n            margin: 0 2rem;\n\n            .projectName {\n                font-size: 1.5rem;\n            }\n\n            .projectSummary {\n                font-size: 1rem;\n            }\n\n            .projectLinks {\n                font-size: 1rem;\n            }\n\n            .projectImageVisible {\n                width: 25rem;\n            }\n\n            .projectImageInvisible {\n                width: 25rem;\n            }\n        }\n\n        .projectPopupVisible {\n            font-size: .9rem;\n            width: 22rem;\n            bottom: 20rem;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ProjectList": `JHKOwgw57XWKRmWEcOoS`,
	"projectContainer": `vR5nBBaIVoqpGEr4TnRN`,
	"projectName": `qyjsO88M5Zk6_RHHlYLT`,
	"projectSummary": `PVVdgIVykr3De_euNVVH`,
	"projectLinks": `gH_sXGDoYMrrU0PqFa8o`,
	"link": `nwz3gDLOU0GR00QQGvZn`,
	"projectImageVisible": `v20QUUrVOvZ6R7iVz5Wr`,
	"projectImageInvisible": `OG_58bK6KgGnHwZ5RqwY`,
	"projectPopupVisible": `p5GA4VhZeJoeeSNsdLnJ`,
	"projectPopupInvisible": `tkRmNQSyjZW3ZOoyTLwl`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SkillList/SkillList.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SkillList/SkillList.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.TgdELLR1YDwmFP4lxegJ {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom left, #FFFDD0, #e3be9b);
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px black;
  margin-bottom: 5rem;
}
.TgdELLR1YDwmFP4lxegJ .s6wolvpV50cfcaoAIN0U {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2rem;
  -moz-column-gap: 2rem;
  column-gap: 2rem;
  place-items: center;
  padding: 0;
}
.TgdELLR1YDwmFP4lxegJ .s6wolvpV50cfcaoAIN0U .jLKAruXAQvpHs1rYOKQx {
  box-shadow: 1px 1px 1px black;
  border-radius: 5px;
  display: flex;
  gap: 5px;
  width: 9rem;
  background-color: lightgrey;
  padding: 2px 1px;
}
.TgdELLR1YDwmFP4lxegJ .s6wolvpV50cfcaoAIN0U .ww96wplc3iiswNHki006 {
  max-width: 3rem;
}
.TgdELLR1YDwmFP4lxegJ .s6wolvpV50cfcaoAIN0U .UTEmCPet931KAoQhyEWd {
  font-weight: bolder;
}

@media screen and (width < 40rem) and (width > 30rem) {
  .TgdELLR1YDwmFP4lxegJ {
    width: 90vw;
  }
  .TgdELLR1YDwmFP4lxegJ .s6wolvpV50cfcaoAIN0U {
    width: 90vw;
    row-gap: 1rem;
    -moz-column-gap: 1rem;
    column-gap: 1rem;
  }
  .TgdELLR1YDwmFP4lxegJ .s6wolvpV50cfcaoAIN0U .jLKAruXAQvpHs1rYOKQx {
    width: 8rem;
    font-size: 12px;
  }
}
@media screen and (width <= 30rem) {
  .TgdELLR1YDwmFP4lxegJ {
    width: 90vw;
  }
  .TgdELLR1YDwmFP4lxegJ .s6wolvpV50cfcaoAIN0U {
    width: 90vw;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
    -moz-column-gap: 1rem;
    column-gap: 1rem;
  }
  .TgdELLR1YDwmFP4lxegJ .s6wolvpV50cfcaoAIN0U .jLKAruXAQvpHs1rYOKQx {
    width: 8rem;
    font-size: 12px;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/SkillList/SkillList.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mEAAA;EACA,kBAAA;EACA,mBAAA;EACA,iCAAA;EACA,mBAAA;AACJ;AACI;EACI,gBAAA;EACA,aAAA;EACA,kCAAA;EACA,aAAA;EACA,qBAAA;EACK,gBAAA;EACL,mBAAA;EACA,UAAA;AACR;AACQ;EACI,6BAAA;EACA,kBAAA;EACA,aAAA;EACA,QAAA;EACA,WAAA;EACA,2BAAA;EACA,gBAAA;AACZ;AAEY;EACI,eAAA;AAAhB;AAGY;EACI,mBAAA;AADhB;;AAMA;EACI;IACI,WAAA;EAHN;EAKM;IACI,WAAA;IACA,aAAA;IACA,qBAAA;IACK,gBAAA;EAHf;EAKU;IACI,WAAA;IACA,eAAA;EAHd;AACF;AAQA;EACI;IACI,WAAA;EANN;EAQM;IACI,WAAA;IACA,8BAAA;IACA,aAAA;IACA,qBAAA;IACK,gBAAA;EANf;EAQU;IACI,WAAA;IACA,eAAA;EANd;AACF","sourcesContent":[".skillListContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: linear-gradient(to bottom left, #FFFDD0, #e3be9b);\n    padding: 1rem 2rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px 2px black;\n    margin-bottom: 5rem;\n    \n    .skillList {\n        list-style: none;\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        row-gap: 2rem;\n        -moz-column-gap: 2rem;\n             column-gap: 2rem;\n        place-items: center;\n        padding: 0;\n\n        .skillItem {\n            box-shadow: 1px 1px 1px black;\n            border-radius: 5px;\n            display: flex;\n            gap: 5px;\n            width: 9rem;\n            background-color: lightgrey;\n            padding: 2px 1px;\n        }\n\n            .icon {\n                max-width: 3rem;\n            }\n\n            .skillName {\n                font-weight: bolder;\n            }\n    }\n}\n\n@media screen and (width < 40rem) and (width > 30rem) {\n    .skillListContainer {\n        width: 90vw;\n\n        .skillList {\n            width: 90vw;\n            row-gap: 1rem;\n            -moz-column-gap: 1rem;\n                 column-gap: 1rem;\n\n            .skillItem {\n                width: 8rem;\n                font-size: 12px;\n            }\n        }\n    }\n}\n\n@media screen and (width <= 30rem) {\n    .skillListContainer {\n        width: 90vw;\n\n        .skillList {\n            width: 90vw;\n            grid-template-columns: 1fr 1fr;\n            row-gap: 1rem;\n            -moz-column-gap: 1rem;\n                 column-gap: 1rem;\n\n            .skillItem {\n                width: 8rem;\n                font-size: 12px;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"skillListContainer": `TgdELLR1YDwmFP4lxegJ`,
	"skillList": `s6wolvpV50cfcaoAIN0U`,
	"skillItem": `jLKAruXAQvpHs1rYOKQx`,
	"icon": `ww96wplc3iiswNHki006`,
	"skillName": `UTEmCPet931KAoQhyEWd`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutPage/AboutPage.module.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutPage/AboutPage.module.scss ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.lkSfnDUQxn7c_fywXKpE {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: "Montserrat", serif;
}
.lkSfnDUQxn7c_fywXKpE .YRGcFBfG_CrTzfeZl00z {
  font-weight: normal;
}
.lkSfnDUQxn7c_fywXKpE .VtlIqFYCMAGmwCPumyEz {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3rem;
  margin-right: 3rem;
  gap: 2rem;
}
.lkSfnDUQxn7c_fywXKpE .VtlIqFYCMAGmwCPumyEz .OuIChOJDCpXfENqVXqFt {
  margin-bottom: 3rem;
  width: 90vw;
  margin-left: 2rem;
  margin-right: 2rem;
}
.lkSfnDUQxn7c_fywXKpE .VtlIqFYCMAGmwCPumyEz .ezCuwE4LBXhXa9Vq95yW {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}
.lkSfnDUQxn7c_fywXKpE .VtlIqFYCMAGmwCPumyEz .ezCuwE4LBXhXa9Vq95yW .s5OeKKoKnpZOe0f2mTel {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
}
.lkSfnDUQxn7c_fywXKpE .VtlIqFYCMAGmwCPumyEz .ezCuwE4LBXhXa9Vq95yW .s5OeKKoKnpZOe0f2mTel .BAWeDeT602tzkjcoKgb6 {
  width: 25vw;
  min-width: 17rem;
  border-radius: 70px;
  box-shadow: 5px 5px 5px 5px skyblue;
}
.lkSfnDUQxn7c_fywXKpE .VtlIqFYCMAGmwCPumyEz .ezCuwE4LBXhXa9Vq95yW .OMVzCXBVYRgO9rXmSKGJ {
  font-style: italic;
}
.lkSfnDUQxn7c_fywXKpE .VtlIqFYCMAGmwCPumyEz .XgkwmsjZQTxNgQxnbBKl {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lkSfnDUQxn7c_fywXKpE .VtlIqFYCMAGmwCPumyEz .XgkwmsjZQTxNgQxnbBKl .maYgZBbSPNX4mu9_CsqA {
  font-size: clamp(1.25rem, 2vw, 2rem);
  font-family: "Gloria Hallelujah", cursive;
  text-shadow: 2px 2px 2px white;
  margin-right: 2rem;
}
.lkSfnDUQxn7c_fywXKpE .VtlIqFYCMAGmwCPumyEz .XgkwmsjZQTxNgQxnbBKl .n8qGURuG00xCJb0iYId0 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
}
.lkSfnDUQxn7c_fywXKpE .VtlIqFYCMAGmwCPumyEz .XgkwmsjZQTxNgQxnbBKl .n8qGURuG00xCJb0iYId0 .IwzStA7Xzwr7JTPnQ4fh {
  font-size: clamp(1.25rem, 2vw, 2rem);
}
.lkSfnDUQxn7c_fywXKpE .VtlIqFYCMAGmwCPumyEz .XgkwmsjZQTxNgQxnbBKl .n8qGURuG00xCJb0iYId0 .P0jevH_Mip0MECWmNgyg {
  list-style: circle;
}
.lkSfnDUQxn7c_fywXKpE .VtlIqFYCMAGmwCPumyEz .XgkwmsjZQTxNgQxnbBKl .n8qGURuG00xCJb0iYId0 .P0jevH_Mip0MECWmNgyg .fgPEHcRDC1kcnEqMXLO6 {
  font-size: clamp(1.25rem, 2vw, 2rem);
}

@media screen and (width < 40rem) {
  .ezCuwE4LBXhXa9Vq95yW {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/AboutPage/AboutPage.module.scss"],"names":[],"mappings":"AAGA;EACI,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gCAAA;AAAJ;AAGI;EACI,mBAAA;AADR;AAII;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,SAAA;AAFR;AAII;EACI,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;AAFR;AAKI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAHR;AAKQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;AAHZ;AAKY;EACI,WAAA;EACA,gBAAA;EACA,mBAAA;EACA,mCAAA;AAHhB;AAOY;EACI,kBAAA;AALhB;AAUQ;EAEI,aAAA;EACA,sBAAA;EACA,mBAAA;AATZ;AAWY;EACI,oCAAA;EACA,yCAAA;EACA,8BAAA;EACA,kBAAA;AAThB;AAYY;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AAVhB;AAYgB;EACI,oCAAA;AAVpB;AAagB;EACI,kBAAA;AAXpB;AAaoB;EACI,oCAAA;AAXxB;;AAoBA;EACI;IACI,aAAA;IACA,sBAAA;IACA,mBAAA;EAjBN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');\n\n.AboutPage {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Montserrat', serif;\n\n\n    .aboutHeadline {\n        font-weight: normal;\n    }\n\n    .mainContent {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        margin-left: 3rem;\n        margin-right: 3rem;\n        gap: 2rem;\n\n    .aboutSummary {\n        margin-bottom: 3rem;\n        width: 90vw;\n        margin-left: 2rem;\n        margin-right: 2rem;\n    }\n\n    .aboutPageTop {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 3rem;\n\n        .picAndCap {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            margin-left: 2rem;\n\n            .aboutImage {\n                width: 25vw;\n                min-width: 17rem;\n                border-radius: 70px;\n                box-shadow: 5px 5px 5px 5px skyblue;\n           \n            }\n        }\n            .aboutCaption {\n                font-style: italic;\n\n            }\n        }\n\n        .aboutQuoteAndStrengths {\n\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n\n            .aboutQuote {\n                font-size: clamp(1.25rem, 2vw, 2rem);\n                font-family: \"Gloria Hallelujah\", cursive;\n                text-shadow: 2px 2px 2px white;\n                margin-right: 2rem;\n            }\n\n            .aboutStrengths {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                margin-right: 2rem;\n\n                .strengthsHeader {\n                    font-size: clamp(1.25rem, 2vw, 2rem);\n                }\n\n                .aboutStrengthsList {\n                    list-style: circle;\n\n                    .listItem {\n                        font-size: clamp(1.25rem, 2vw, 2rem);\n                    }\n                }\n            }\n        }\n    }\n    \n}\n\n@media screen and (width < 40rem) {\n    .aboutPageTop {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"AboutPage": `lkSfnDUQxn7c_fywXKpE`,
	"aboutHeadline": `YRGcFBfG_CrTzfeZl00z`,
	"mainContent": `VtlIqFYCMAGmwCPumyEz`,
	"aboutSummary": `OuIChOJDCpXfENqVXqFt`,
	"aboutPageTop": `ezCuwE4LBXhXa9Vq95yW`,
	"picAndCap": `s5OeKKoKnpZOe0f2mTel`,
	"aboutImage": `BAWeDeT602tzkjcoKgb6`,
	"aboutCaption": `OMVzCXBVYRgO9rXmSKGJ`,
	"aboutQuoteAndStrengths": `XgkwmsjZQTxNgQxnbBKl`,
	"aboutQuote": `maYgZBbSPNX4mu9_CsqA`,
	"aboutStrengths": `n8qGURuG00xCJb0iYId0`,
	"strengthsHeader": `IwzStA7Xzwr7JTPnQ4fh`,
	"aboutStrengthsList": `P0jevH_Mip0MECWmNgyg`,
	"listItem": `fgPEHcRDC1kcnEqMXLO6`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ContactPage/ContactPage.module.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ContactPage/ContactPage.module.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.YLhl5O0tSVyQw_Ud6GeH {
  display: flex;
  flex-direction: column;
  gap: 8vh;
  align-items: center;
  font-family: "Montserrat", serif;
  margin-left: 3rem;
  margin-right: 3rem;
}
.YLhl5O0tSVyQw_Ud6GeH .LF94QYnFu9nPPxg2jz5E {
  font-size: clamp(1rem, 2vw, 1.5rem);
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/pages/ContactPage/ContactPage.module.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,sBAAA;EACA,QAAA;EACA,mBAAA;EACA,gCAAA;EACA,iBAAA;EACA,kBAAA;AAAJ;AAEI;EACI,mCAAA;EACA,kBAAA;AAAR","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap');\n\n.ContactPage {\n    display: flex;\n    flex-direction: column;\n    gap: 8vh;\n    align-items: center;\n    font-family: 'Montserrat', serif;\n    margin-left: 3rem;\n    margin-right: 3rem;\n\n    .contactPageHeading {\n        font-size: clamp(1rem, 2vw, 1.5rem);\n        text-align: center;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ContactPage": `YLhl5O0tSVyQw_Ud6GeH`,
	"contactPageHeading": `LF94QYnFu9nPPxg2jz5E`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.luBJirBC3AbIwQNsEypk {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: "Montserrat", serif;
  margin-left: 3rem;
  margin-right: 3rem;
}
.luBJirBC3AbIwQNsEypk .I69qLupTb0lXMgtHVWRj {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  border-bottom: 4px dotted white;
}
.luBJirBC3AbIwQNsEypk .I69qLupTb0lXMgtHVWRj .KAdFYwUkxuH3AfGOPQF8 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
}
.luBJirBC3AbIwQNsEypk .I69qLupTb0lXMgtHVWRj .KAdFYwUkxuH3AfGOPQF8 .Aw5sO1dBoOHwTQxLLb2m {
  text-shadow: 2px 2px 2px white;
}
.luBJirBC3AbIwQNsEypk .I69qLupTb0lXMgtHVWRj .KAdFYwUkxuH3AfGOPQF8 .pH3hxSOBP1V_K2z2Qfsi {
  text-shadow: 2px 2px 2px white;
}
.luBJirBC3AbIwQNsEypk .I69qLupTb0lXMgtHVWRj .KAdFYwUkxuH3AfGOPQF8 .faqTb21Nz7osoFxnsTb4 {
  font-family: "Philosopher", sans-serif;
}
.luBJirBC3AbIwQNsEypk .I69qLupTb0lXMgtHVWRj .SdE0OzVYSyWibKlylqhD {
  height: 40vw;
  margin-bottom: 2rem;
  margin-top: 2rem;
  border-radius: 50%;
  box-shadow: 2px 2px 10px 2px black;
  background-image: linear-gradient(to bottom left, #FFFDD0, #e3be9b);
}
.luBJirBC3AbIwQNsEypk .bIC53aZ1YbYkKKHJLNZV {
  font-weight: bold;
  text-align: center;
}
.luBJirBC3AbIwQNsEypk .agtVcU5x6yqGpyvpV7G0 {
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.luBJirBC3AbIwQNsEypk .agtVcU5x6yqGpyvpV7G0 .S1HmR7yheTytiIHpiMGB {
  width: 90vw;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  -moz-column-gap: 2rem;
  column-gap: 2rem;
  align-content: flex-start;
  padding: 0;
}
.luBJirBC3AbIwQNsEypk .agtVcU5x6yqGpyvpV7G0 .S1HmR7yheTytiIHpiMGB .eLxNMbsTFENT7X9xuYCQ {
  margin-bottom: 2rem;
  font-size: 1.5rem;
  background-image: linear-gradient(to bottom left, #FFFDD0, #e3be9b);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px black;
  color: black;
  text-shadow: 1px 1px 1px white;
  justify-self: center;
}

@media screen and (width < 40rem) {
  .agtVcU5x6yqGpyvpV7G0 {
    gap: 2rem !important;
  }
  .agtVcU5x6yqGpyvpV7G0 .S1HmR7yheTytiIHpiMGB .eLxNMbsTFENT7X9xuYCQ {
    font-size: 1rem !important;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/HomePage/HomePage.module.scss"],"names":[],"mappings":"AAGA;EACI,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gCAAA;EACA,iBAAA;EACA,kBAAA;AAAJ;AAEI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,+BAAA;AAAR;AAEQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;AAAZ;AAEY;EACI,8BAAA;AAAhB;AAGY;EACI,8BAAA;AADhB;AAIY;EACI,sCAAA;AAFhB;AAMQ;EACI,YAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kCAAA;EACA,mEAAA;AAJZ;AAWI;EACI,iBAAA;EACA,kBAAA;AATR;AAYI;EACI,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAVR;AAYQ;EACI,WAAA;EACA,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;EACK,gBAAA;EACL,yBAAA;EACA,UAAA;AAVZ;AAYY;EACI,mBAAA;EACA,iBAAA;EACA,mEAAA;EACA,aAAA;EACA,mBAAA;EACA,iCAAA;EACA,YAAA;EACA,8BAAA;EAEA,oBAAA;AAXhB;;AAiBA;EACI;IACI,oBAAA;EAdN;EAkBU;IACI,0BAAA;EAhBd;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap');\n\n.HomePage {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Montserrat', serif;\n    margin-left: 3rem;\n    margin-right: 3rem;\n\n    .topLeftAndImage {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 5rem;\n        border-bottom: 4px dotted white;\n    \n        .topLeftMaterial {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            width: 40vw;\n\n            .homeName {\n                text-shadow: 2px 2px 2px white;\n            }\n\n            .homeTitle {\n                text-shadow: 2px 2px 2px white;\n            }\n\n            .homeDescription {\n                font-family: \"Philosopher\", sans-serif;\n            }\n        }\n\n        .profileImage {\n            height: 40vw;\n            margin-bottom: 2rem;\n            margin-top: 2rem;\n            border-radius: 50%;\n            box-shadow: 2px 2px 10px 2px black;\n            background-image: linear-gradient(to bottom left, #FFFDD0, #e3be9b);\n            \n            \n        }\n\n    }\n\n    .footerNod {\n        font-weight: bold;\n        text-align: center;\n    }\n\n    .experienceLists {\n        width: 90vw;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        .homeList {\n            width: 90vw;\n            list-style: none;\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            -moz-column-gap: 2rem;\n                 column-gap: 2rem;\n            align-content: flex-start;\n            padding: 0;\n            \n            .homeListItem {\n                margin-bottom: 2rem;\n                font-size: 1.5rem;\n                background-image: linear-gradient(to bottom left, #FFFDD0, #e3be9b);\n                padding: 1rem;\n                border-radius: 10px;\n                box-shadow: 2px 2px 2px 2px black;\n                color: black;\n                text-shadow: 1px 1px 1px white;\n                \n                justify-self: center;\n            }\n        }\n    }\n}\n\n@media screen and (width < 40rem) {\n    .experienceLists {\n        gap: 2rem !important;\n\n        .homeList {\n            \n            .homeListItem {\n                font-size: 1rem !important;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"HomePage": `luBJirBC3AbIwQNsEypk`,
	"topLeftAndImage": `I69qLupTb0lXMgtHVWRj`,
	"topLeftMaterial": `KAdFYwUkxuH3AfGOPQF8`,
	"homeName": `Aw5sO1dBoOHwTQxLLb2m`,
	"homeTitle": `pH3hxSOBP1V_K2z2Qfsi`,
	"homeDescription": `faqTb21Nz7osoFxnsTb4`,
	"profileImage": `SdE0OzVYSyWibKlylqhD`,
	"footerNod": `bIC53aZ1YbYkKKHJLNZV`,
	"experienceLists": `agtVcU5x6yqGpyvpV7G0`,
	"homeList": `S1HmR7yheTytiIHpiMGB`,
	"homeListItem": `eLxNMbsTFENT7X9xuYCQ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProjectShowPage/ProjectShowPage.module.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProjectShowPage/ProjectShowPage.module.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProjectsPage/ProjectsPage.module.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProjectsPage/ProjectsPage.module.scss ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Hm5lrRZJnIjLwwBLaW3Z {
  font-family: "Montserrat", serif;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.Hm5lrRZJnIjLwwBLaW3Z .ciXDBHa6iQAWtLR1heZQ {
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/pages/ProjectsPage/ProjectsPage.module.scss"],"names":[],"mappings":"AAGA;EACI,gCAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;AADJ;AAEI;EACI,kBAAA;AAAR","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap');\n\n.ProjectsPage {\n    font-family: 'Montserrat', serif;\n    margin-bottom: 3rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    .projectsHeadline {\n        text-align: center;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ProjectsPage": `Hm5lrRZJnIjLwwBLaW3Z`,
	"projectsHeadline": `ciXDBHa6iQAWtLR1heZQ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/router/App.module.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/router/App.module.scss ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.h4sw0heY3w56dx3JSYE_ {
  margin-top: 2.5rem;
  overflow-x: hidden;
}
.h4sw0heY3w56dx3JSYE_ .xZXiQHG3CSk5ExPOE7jX {
  height: 100%;
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/router/App.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,kBAAA;AACJ;AACI;EACI,YAAA;EACA,WAAA;AACR","sourcesContent":[".App {\n    margin-top: 2.5rem;\n    overflow-x: hidden;\n\n    .Routes {\n        height: 100%;\n        width: 100%;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"App": `h4sw0heY3w56dx3JSYE_`,
	"Routes": `xZXiQHG3CSk5ExPOE7jX`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/AttributesList/AttributesList.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/AttributesList/AttributesList.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AttributesList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AttributesList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AttributesList/AttributesList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AttributesList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AttributesList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AttributesList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AttributesList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ContactForm/ContactForm.module.scss":
/*!************************************************************!*\
  !*** ./src/components/ContactForm/ContactForm.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ContactForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ContactForm/ContactForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NavBar/NavBar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/NavBar/NavBar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavBar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NavFooter/NavFooter.module.scss":
/*!********************************************************!*\
  !*** ./src/components/NavFooter/NavFooter.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavFooter.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavFooter/NavFooter.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavFooter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ProjectItem/ProjectItem.module.scss":
/*!************************************************************!*\
  !*** ./src/components/ProjectItem/ProjectItem.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProjectItem.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProjectItem/ProjectItem.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ProjectList/ProjectList.module.scss":
/*!************************************************************!*\
  !*** ./src/components/ProjectList/ProjectList.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProjectList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProjectList/ProjectList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SkillList/SkillList.module.scss":
/*!********************************************************!*\
  !*** ./src/components/SkillList/SkillList.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SkillList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SkillList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SkillList/SkillList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SkillList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SkillList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SkillList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SkillList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/AboutPage/AboutPage.module.scss":
/*!***************************************************!*\
  !*** ./src/pages/AboutPage/AboutPage.module.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AboutPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutPage/AboutPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ContactPage/ContactPage.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/ContactPage/ContactPage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ContactPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ContactPage/ContactPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/HomePage/HomePage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/HomePage/HomePage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./HomePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ProjectShowPage/ProjectShowPage.module.scss":
/*!***************************************************************!*\
  !*** ./src/pages/ProjectShowPage/ProjectShowPage.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectShowPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProjectShowPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProjectShowPage/ProjectShowPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectShowPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectShowPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectShowPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectShowPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ProjectsPage/ProjectsPage.module.scss":
/*!*********************************************************!*\
  !*** ./src/pages/ProjectsPage/ProjectsPage.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProjectsPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProjectsPage/ProjectsPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/router/App.module.scss":
/*!************************************!*\
  !*** ./src/router/App.module.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./App.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/router/App.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-354ecd"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.4916b586e2fee8ec8395c94a418e33f4.js.map