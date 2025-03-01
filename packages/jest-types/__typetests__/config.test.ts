/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {expectAssignable, expectError, expectNotAssignable} from 'tsd-lite';
import type {Config} from '@jest/types';

expectAssignable<Config.InitialOptions>({});

expectAssignable<Config.InitialOptions>({
  coverageThreshold: {
    './src/api/very-important-module.js': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    './src/components/': {
      branches: 40,
      statements: 40,
    },
    './src/reducers/**/*.js': {
      statements: 90,
    },
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  projects: [
    // projects can be globs or objects
    './src/**',
    {
      displayName: 'A Project',
      rootDir: './src/components',
    },
  ],
});

const doNotFake: Array<Config.FakeableAPI> = [
  'Date',
  'hrtime',
  'nextTick',
  'performance',
  'queueMicrotask',
  'requestAnimationFrame',
  'cancelAnimationFrame',
  'requestIdleCallback',
  'cancelIdleCallback',
  'setImmediate',
  'clearImmediate',
  'setInterval',
  'clearInterval',
  'setTimeout',
  'clearTimeout',
];

expectAssignable<Config.InitialOptions>({
  fakeTimers: {
    advanceTimers: true,
    doNotFake,
    enableGlobally: true,
    now: 1483228800000,
    timerLimit: 1000,
  },
});

expectAssignable<Config.InitialOptions>({
  fakeTimers: {
    advanceTimers: 40,
    now: Date.now(),
  },
});

expectError<Config.InitialOptions>({
  fakeTimers: {
    now: new Date(),
  },
});

expectAssignable<Config.InitialOptions>({
  fakeTimers: {
    enableGlobally: true,
    legacyFakeTimers: true,
  },
});

expectError<Config.InitialOptions>({
  fakeTimers: {
    advanceTimers: true,
    legacyFakeTimers: true,
  },
});

expectError<Config.InitialOptions>({
  fakeTimers: {
    doNotFake,
    legacyFakeTimers: true,
  },
});

expectError<Config.InitialOptions>({
  fakeTimers: {
    legacyFakeTimers: true,
    now: 1483228800000,
  },
});

expectError<Config.InitialOptions>({
  fakeTimers: {
    legacyFakeTimers: true,
    timerLimit: 1000,
  },
});
