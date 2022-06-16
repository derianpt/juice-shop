/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import winston = require('winston')

module.exports = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === "test" ? "error" : "info",
    }),
    new winston.transports.File({
      filename: `/home/ubuntu/juice-shop/logs/app.log`,
    }),
  ],
  format: winston.format.json(),
  exitOnError: false,
});
