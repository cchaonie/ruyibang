export enum AppType {
  TaroMiniApp = 0,
  ReactSPA = 1,
  ReactSSR = 2,
  NodeAPI = 3,
  NodeLib = 4,
}

export const applicationTypes = [
  // {
  //   title: 'taro-mini-app',
  //   description: 'A starter mini app created by taro',
  //   value: AppType.TaroMiniApp,
  // },
  {
    title: 'react-spa',
    description: 'A starter react SPA',
    value: AppType.ReactSPA,
  },
  // {
  //   title: 'react-ssr',
  //   description: 'A starter react ssr app',
  //   value: AppType.ReactSSR,
  // },
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
];
