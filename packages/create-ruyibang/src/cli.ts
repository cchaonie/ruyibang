import prompts from 'prompts';

import { applicationTypes } from './constants.js';
import { generate } from './generate.js';

const getAppName = async () =>
  await prompts({
    type: 'text',
    name: 'appName',
    message: 'Please enter the name of your application',
  });

const selectAppType = async () =>
  await prompts({
    type: 'select',
    name: 'appType',
    message: 'Please the type of your application',
    choices: applicationTypes,
  });

export const run = async () => {
  const { appName } = await getAppName();
  const { appType } = await selectAppType();

  generate(appName, appType);
};
