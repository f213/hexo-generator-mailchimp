/* global hexo */
'use strict';

var assign = require('object-assign');
var pathFn = require('path');

var config = hexo.config.mailchimp = assign({
  type: 'rss2',
  limit: 5,
  content: true
}, hexo.config.mailchimp);

// Set default feed path
if (!config.path) {
  config.path = config.type + '.xml';
}

// Add extension name if don't have
if (!pathFn.extname(config.path)) {
  config.path += '.xml';
}

hexo.extend.generator.register('mailchimp', require('./lib/generator'));
