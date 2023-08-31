const fs = require("fs-extra");
const path = require("path");

const filesToCollect = [
  "packages/lib-base/temp/lib-base-u.api.json",
  "packages/lib-ethers/temp/lib-ethers-u.api.json"
];

const outputDir = "temp/sdk-apis";

fs.removeSync(outputDir);
fs.mkdirSync(outputDir, { recursive: true });

filesToCollect.forEach(file => fs.copyFileSync(file, path.join(outputDir, path.basename(file))));
