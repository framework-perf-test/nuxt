module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
    },
    assert: {
      assertions: {
        "uses-long-cache-ttl": "off",
        "uses-http2": "off"
      }
    },
    upload: {
      target: "filesystem",
      outputDir: "./dist/lighthouse"
    },
  },
};