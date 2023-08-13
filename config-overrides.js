module.exports = function override(config, env) {
    console.log("React app rewired works!")
    config.resolve.fallback = {
        crypto: false,
        fs: false,
        path: false,
        os: false,
        net: false,
        stream: false,
        tls: false
    };
    return config;
  };