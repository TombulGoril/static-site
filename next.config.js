const { PHASE_EXPORT } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_EXPORT) {
    return {
      basePath: "/export",
    };
  }
  return defaultConfig;
};
