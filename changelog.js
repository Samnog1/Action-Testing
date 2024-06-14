"use strict";
const config = require("conventional-changelog-conventionalcommits");

module.exports = config({
  types: [
    { type: "feat", section: "New Features" },
    { type: "fix", section: "Bugs" },
    { type: "perf", section: "Performance Improvements" },
    { type: "test", section: "Tests" },
    { type: "chore", section: "Miscellaneous Chores" },
    { type: "revert", section: "Reverts" },
    { type: "docs", section: "Documentation" },
    { type: "style", section: "Styles" },
    { type: "ci", section: "CI" },
    { type: "chore", section: "Chores" },
  ],
});
