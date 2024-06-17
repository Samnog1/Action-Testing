const config = require("conventional-changelog-conventionalcommits");

module.exports = config({
  types: [
    { type: "ci", section: "Continuous Integration ⚙️" },
    { type: "chore", section: "Chores 🧹" },
    { type: "docs", section: "Documentation 📖" },
    { type: "feat", section: "Feature 🎉" },
    { type: "fix", section: "Bug Fix 🐛" },
    { type: "perf", section: "Performance Improvements ⚡" },
    { type: "refactor", section: "Code Refactoring 🔨" },
    { type: "style", section: "Styles 🎨" },
    { type: "test", section: "Tests ✅" },
  ],
});
