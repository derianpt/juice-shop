/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Add this to the VERY top of the first file loaded in your app
require('elastic-apm-node').start({

  // Override the service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'juice-shop-elastic',

  // Use if APM Server requires a secret token
  secretToken: '',

  // Set the custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200',

  // Set the service environment
  environment: 'local'
})

require('./lib/startup/validateDependencies')().then(() => {
  const server = require('./server')
  server.start()
})
