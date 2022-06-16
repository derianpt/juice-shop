/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

import { datadogRum } from '@datadog/browser-rum';
datadogRum.init({
    applicationId: 'd2ee51ac-c307-4e46-b7c5-2a3901ca05e5',
    clientToken: 'pubeaf4350dc0d58a58528864c197dd238f',
    site: 'datadoghq.com',
    service:'juice-shop',
    allowedTracingOrigins: [location.origin],
    env:'juice',
    // version: '1.0.0',
    sampleRate: 100,
    premiumSampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel:'allow'
});
console.log ("Datadog RUM installed successfully!!!!");
datadogRum.startSessionReplayRecording();

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: Error) => console.log(err))
