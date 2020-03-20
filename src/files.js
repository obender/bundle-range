const fs = require("fs");
const bytes = require("bytes");
const glob = require("glob");
const { error } = require("prettycli");
const config = require("./config");
const debug = require("./debug");
const compressedSize = require("./compressed-size");
const files = [];

function getFiles(path, conf) {
  const paths = glob.sync(path);
  if (!paths.length) {
    error(`There is no matching file for ${path} in ${process.cwd()}`, {
      silent: true
    });
  } else {
    paths.map(path => {
      const maxSize = bytes(conf.maxSize) || Infinity;
      const minSize = bytes(conf.minSize) || 0;
      const compression = conf.compression || "gzip";
      const size = compressedSize(fs.readFileSync(path, "utf8"), compression);
      files.push({ maxSize, minSize, path, size, compression });
    });
  }
}
config.map(file => {
  if (Array.isArray(file.path)) {
    file.path.map(item => {
      getFiles(item, file);
    });
  } else getFiles(file.path, file);
});

debug("files", files);

module.exports = files;
