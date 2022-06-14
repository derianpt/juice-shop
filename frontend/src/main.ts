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
  applicationId: "b5d37a1f-2cd1-443d-9f94-9e1272d9c5c8",
  clientToken: "pub9e3ca1c02e83197c770e2172316c6515",
  site: "datadoghq.com",
  service: "juiceshop",
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
