/* eslint-disable no-console */
/* eslint-disable no-undef */
// scripts/build-react-pdf.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create a temp directory
const tempDir = path.join(__dirname, '../temp-react-pdf');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

try {
  // Clone the repository
  execSync(
    `git clone --depth 1 -b master https://github.com/romenmedina-aircury/react-pdf.git ${tempDir}`,
  );

  // Install dependencies and build
  execSync('npm install && npm run build', { cwd: tempDir });

  // Copy the built files to node_modules
  const targetDir = path.join(
    __dirname,
    '../node_modules/@smartgrade-pdf/renderer',
  );
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Copy built files - adjust paths as needed based on the actual build output location
  execSync(`cp -r ${tempDir}/packages/renderer/dist/* ${targetDir}/`);

  // Copy package.json
  execSync(`cp ${tempDir}/packages/renderer/package.json ${targetDir}/`);

  console.log('Successfully built and installed @smartgrade-pdf/renderer');
} catch (error) {
  console.error('Failed to build react-pdf:', error);
  process.exit(1);
} finally {
  // Clean up
  fs.rmSync(tempDir, { recursive: true, force: true });
}
