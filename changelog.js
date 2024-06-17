"use strict";

async function getConfig() {
  const config = await import("conventional-changelog-conventionalcommits");

  return config.default({
    types: [
      { type: "ci", section: "Continuous Integration" },
      { type: "chore", section: "Miscellaneous Chore" },
      { type: "docs", section: "Documentation" },
      { type: "feat", section: "Feature" },
      { type: "feature", section: "Feature" },
      { type: "fix", section: "Fixed" },
      { type: "perf", section: "Performance" },
      { type: "refactor", section: "Code Refactoring" },
      { type: "style", section: "Styles" },
      { type: "test", section: "Tests" },
    ],
  });
}

module.exports = getConfig;
