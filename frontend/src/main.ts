/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'
import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: "b42307fb-ff98-46d6-8e9a-775835859486",
  clientToken: "pub32fa20c16ad226ea6d50b8170b4bf5d5",
  site: "datadoghq.com",
  // to differentiate from BE service which is `juice-shop`
  service: "juice-shop-fe",
  env: "dev",
  sampleRate: 100,
  premiumSampleRate: 100,
  trackInteractions: true,
  defaultPrivacyLevel: "mask-user-input",
});

datadogRum.startSessionReplayRecording();

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: Error) => console.log(err))
