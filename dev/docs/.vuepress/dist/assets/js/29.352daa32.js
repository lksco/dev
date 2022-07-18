(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{411:function(t,e,s){"use strict";s.r(e);var r=s(27),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[t._v("#")]),t._v(" Structure")]),t._v(" "),s("p",[t._v("The "),s("strong",[t._v("Overview")]),t._v(" Part of this document is the reading guide of ScoreList. If you only intend to learn about the ScoreList, these pages are enough for you. If you should learn to operate on the ScoreList, knowledge from this part will be necessary for reading "),s("strong",[t._v("Operations")]),t._v(".")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#google-sheets-document-structure"}},[t._v("Google Sheets Document Structure")])]),s("li",[s("a",{attrs:{href:"#score-groups"}},[t._v("Score Groups")])]),s("li",[s("a",{attrs:{href:"#box-system"}},[t._v("Box System")])]),s("li",[s("a",{attrs:{href:"#score-status"}},[t._v("Score Status")])]),s("li",[s("a",{attrs:{href:"#related-pages"}},[t._v("Related Pages")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"google-sheets-document-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-sheets-document-structure"}},[t._v("#")]),t._v(" Google Sheets Document Structure")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Home\n├── Regular Score List\n│   ├── Score Input Sheet\n│   ├── Hidden Layer (I) [HL(I)]\n│   └── Hidden Layer (II) [HL(II)]\n└── Special Score List\n")])])]),s("p",[t._v("Note: Names in square brackets ("),s("code",[t._v("[]")]),t._v(") are actual namings shown on ScoreList.")]),t._v(" "),s("p",[t._v("There are two main lists that hold all the score information, "),s("regular-score-list"),t._v(" and "),s("special-score-list"),t._v(".")],1),t._v(" "),s("p",[s("score-input-sheet"),t._v(" can be edited to change data on "),s("regular-score-list"),t._v(". The hidden layers are entirely for data processing and are not likely to be viewed or modified.")],1),t._v(" "),s("p",[s("special-score-list"),t._v(" can be edited directly.")],1),t._v(" "),s("h2",{attrs:{id:"score-groups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#score-groups"}},[t._v("#")]),t._v(" Score Groups")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Group Classification")]),t._v(" "),s("th",[t._v("Sheet")]),t._v(" "),s("th",[t._v("Detail")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("regular-scores")],1),t._v(" "),s("td",[s("regular-score-list")],1),t._v(" "),s("td",[t._v("Consists of most scores. The only class that implements a code system for sorting and placement.")])]),t._v(" "),s("tr",[s("td",[s("oversized-scores")],1),t._v(" "),s("td",[s("special-score-list")],1),t._v(" "),s("td",[t._v("Scores that do not fit normally in regular transparent folders. The only class not stored in Standard Folders.")])]),t._v(" "),s("tr",[s("td",[s("technical-papers")],1),t._v(" "),s("td",[s("special-score-list")],1),t._v(" "),s("td",[t._v("An archive of materials or unnamed/unidentified scores. Stored with Categories.")])])])]),t._v(" "),s("p",[t._v("Scores are classified into 3 groups in the ScoreList system.")]),t._v(" "),s("p",[t._v("Only "),s("regular-scores"),t._v(" are recorded on "),s("regular-score-list"),t._v(", while "),s("technical-papers"),t._v(" and "),s("oversized-scores"),t._v(" are recorded on "),s("special-score-list"),t._v(", with "),s("technical-papers"),t._v(" first.")],1),t._v(" "),s("h2",{attrs:{id:"box-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box-system"}},[t._v("#")]),t._v(" Box System")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Box Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Sheet")]),t._v(" "),s("th",[t._v("Scores Stored")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("T1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("regular-score-list")],1),t._v(" "),s("td",[s("regular-scores"),t._v(" of type .EN. and 01*")],1)]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("T2 to T7")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("regular-score-list")],1),t._v(" "),s("td",[s("regular-scores"),t._v(" of type 02, 03, 04, 05, 06, 07*")],1)]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("T8+")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("regular-score-list")],1),t._v(" "),s("td",[s("regular-scores"),t._v(" of type 08 or Above*")],1)]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("SP")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("special-score-list")],1),t._v(" "),s("td",[s("technical-papers"),t._v(" and "),s("oversized-scores")],1)])])]),t._v(" "),s("p",[s("em",[t._v("(*"),s("regular-scores"),t._v(" have 'score types'. This will be explained later in "),s("a",{attrs:{href:"./regular-score-list#code-system"}},[t._v("Code System")]),t._v(".)")],1)]),t._v(" "),s("p",[t._v("Boxes are classified into different box types. Each box is assigned with one specific box type, marked on the box. Multiple boxes can be added to one box type: #1 is the First Box, #2 is the Second, and so on.")]),t._v(" "),s("blockquote",[s("h4",{attrs:{id:"format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format"}},[t._v("#")]),t._v(" Format")]),t._v(" "),s("p",[s("img",{attrs:{src:"/dev/assets/img/box-naming.png",alt:"Box Code Naming"}}),s("br"),t._v("\n(3rd Box of Type T5)")])]),t._v(" "),s("p",[t._v("Within one type, scores are stored in the exact order as in "),s("regular-score-list"),t._v(" or "),s("special-score-list"),t._v(", starting from "),s("em",[t._v("top to bottom")]),t._v(" of Box #1, then from "),s("em",[t._v("top to bottom")]),t._v(" of Box #2, etc.")],1),t._v(" "),s("blockquote",[s("h4",{attrs:{id:"correct-score-placement-in-a-box"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#correct-score-placement-in-a-box"}},[t._v("#")]),t._v(" Correct Score Placement in a Box")]),t._v(" "),s("p",[s("img",{attrs:{src:"/dev/assets/img/box-photo.png",alt:"An Actual Box"}}),s("br"),t._v("\nWith items for this box, the topmost on the ScoreList goes in the front of the box, all the way to the bottommost item at the back.")])]),t._v(" "),s("h2",{attrs:{id:"score-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#score-status"}},[t._v("#")]),t._v(" Score Status")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Status Type")]),t._v(" "),s("th",[t._v("Column")]),t._v(" "),s("th",[t._v("Detail")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Volatile Score Status")]),t._v(" "),s("td",[s("code",[t._v("STATUS|MARKING")])]),t._v(" "),s("td",[t._v("A status that is volatile (more temporary).")])]),t._v(" "),s("tr",[s("td",[t._v("Lasting Score Status")]),t._v(" "),s("td",[s("code",[t._v("Remarks")])]),t._v(" "),s("td",[t._v("A status that is lasting (more permanent).")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("General Note-taking")])]),t._v(" "),s("td",[s("code",[t._v("STATUS|MARKING")])]),t._v(" "),s("td",[t._v("Any notes can be marked on "),s("code",[t._v("STATUS|MARKING")]),t._v(".")])])])]),t._v(" "),s("p",[t._v("Score Status is divided into two types. Volatile Score Status like 'Borrowed' Status are marked and tracked "),s("strong",[t._v("on paper")]),t._v(". Lasting Score Status like 'Missing' Status are marked and tracked "),s("strong",[t._v("on Google Sheets, not on paper")]),t._v(".")]),t._v(" "),s("p",[s("regular-score-list"),t._v(" and "),s("special-score-list"),t._v(" have the corresponding columns for both types of score status.")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("STATUS|MARKING")]),t._v(" is for handwritten notes on Hard-copy only. There is no way of editing it on Google Sheet."),s("br"),t._v("\nIn the Storeroom, it is convenient to note down things on Hard-copy that you need to remember for later, like things to change on the Sheet.")])]),t._v(" "),s("h2",{attrs:{id:"related-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-pages"}},[t._v("#")]),t._v(" Related Pages")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"./handling-existing-scores#folder-change"}},[t._v("Folder Change")])]),t._v(" "),s("li",[s("a",{attrs:{href:"./handling-existing-scores#box-change"}},[t._v("Box Change")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);