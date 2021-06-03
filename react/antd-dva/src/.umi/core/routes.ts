// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'G:/application/vscode/workspace/zez_fullstack/react/antd-dva/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('G:/application/vscode/workspace/zez_fullstack/react/antd-dva/src/layout').default,
    "routes": [
      {
        "path": "/helloworld",
        "component": require('G:/application/vscode/workspace/zez_fullstack/react/antd-dva/src/page/HelloWorld').default,
        "exact": true
      },
      {
        "path": "/puzzlecards",
        "component": require('G:/application/vscode/workspace/zez_fullstack/react/antd-dva/src/page/puzzlecards').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
