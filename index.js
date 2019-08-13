#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const bioFile = path.join(__dirname, 'info.json');

fs.readFile(bioFile, 'utf-8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
