#!/usr/bin/node

/**
 * This script gets the contents of a webpage and stores it in a file, UTF-8 encoded.
 *
 * Usage:
 * $ node 3-request_store.js <URL> <file path>
 *
 * Example:
 * $ node 3-request_store.js https://google.com ./google.com.html
 */

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error('Usage: node 3-request_store.js <URL> <file path>');
  process.exit(1);
}

request.get(url, async (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  try {
    await fs.promises.writeFile(filePath, body, { encoding: 'utf8' });
    console.log();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
