import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { AppType, applicationTypes } from './constants.js';

// 1. check if the directory exist, if not, create it
// 2. get the template
// 3. copy the template to the appName directory
export const generate = (appName: string, appType: AppType) => {
  const cwd = process.cwd();
  const libDir = fileURLToPath(import.meta.url);

  const templatesDirectory = path.resolve(libDir, '../..', 'templates');
  const targetDir = path.join(cwd, appName);

  const applicationType = applicationTypes.find(
    (applicationType) => applicationType.value === appType,
  );
  if (applicationType) {
    const { title } = applicationType;
    const templateName = `${title}`;

    if (fs.existsSync(targetDir)) {
      throw Error(`Target directory ${targetDir} exists!`);
    }

    fs.mkdirSync(targetDir);

    fs.cpSync(path.join(templatesDirectory, templateName), targetDir, {
      recursive: true,
    });
    console.log('Generation is successful ~^_^~');
  } else {
    throw Error(`The application type does not exist.`);
  }
};
