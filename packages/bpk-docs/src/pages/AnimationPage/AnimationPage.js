/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import TOKENS from 'bpk-tokens/tokens/base.raw.json';
import IOS_TOKENS from 'bpk-tokens/tokens/base.raw.ios.json';
import ANDROID_TOKENS from 'bpk-tokens/tokens/base.raw.android.json';

import DocsPageBuilder from './../../components/DocsPageBuilder';
import { getPlatformTokens } from './../../helpers/tokens-helper';

const AnimationPage = () => (<DocsPageBuilder
  title="Animation"
  tokenMap={getPlatformTokens(TOKENS, IOS_TOKENS, ANDROID_TOKENS, ({ category }) => category === 'animations')}
/>);

export default AnimationPage;
