# hexo-generator-mailchimp

Generate Atom 1.0 or RSS 2.0 feed for mailchimp RSS-to-email campaign.

This module is in fact a little customized hexo-generator-feed

## Install

``` bash
$ npm install f213/hexo-generator-mailchimp --save
```

## Options

You can configure this plugin in `_config.yml`.

``` yaml
mailchimp:
  type: rss2
  path: rss/mailchimp.xml
  limit: 5
```

- **type** - Feed type. (atom/rss2)
- **path** - Feed path. (Default: atom.xml/rss2.xml)
- **limit** - Maximum number of posts in the feed (Use `0` or `false` to show all posts)
