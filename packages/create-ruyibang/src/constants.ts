export enum AppType {
  ReactSPA = 1,
  NodeAPI = 3,
  NodeLib = 4,
  TaroMiniApp = 0,
  ReactSSR = 2,
}

export const applicationTypes = [
  {
    title: 'react-spa',
    description: 'A starter react SPA',
    value: AppType.ReactSPA,
  },
  {
    title: 'node-api',
    description: 'An API server created with node.js',
    value: AppType.NodeAPI,
  },
  {
    title: 'node-lib',
    description: 'A node library',
    value: AppType.NodeLib,
  },
  {
    title: 'react-ssr',
    description: 'A starter react ssr app',
    value: AppType.ReactSSR,
  },
];
