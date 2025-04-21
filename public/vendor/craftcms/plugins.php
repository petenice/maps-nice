<?php

$vendorDir = dirname(__DIR__);
$rootDir = dirname(dirname(__DIR__));

return array (
  'craftcms/feed-me' => 
  array (
    'class' => 'craft\\feedme\\Plugin',
    'basePath' => $vendorDir . '/craftcms/feed-me/src',
    'handle' => 'feed-me',
    'aliases' => 
    array (
      '@craft/feedme' => $vendorDir . '/craftcms/feed-me/src',
    ),
    'name' => 'Feed Me',
    'version' => '4.4.2',
    'description' => 'Import content from XML, RSS, CSV or JSON feeds into entries, categories, Craft Commerce products, and more.',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://docs.craftcms.com/feed-me/v4/',
  ),
  'craftcms/redactor' => 
  array (
    'class' => 'craft\\redactor\\Plugin',
    'basePath' => $vendorDir . '/craftcms/redactor/src',
    'handle' => 'redactor',
    'aliases' => 
    array (
      '@craft/redactor' => $vendorDir . '/craftcms/redactor/src',
    ),
    'name' => 'Redactor',
    'version' => '2.10.5',
    'description' => 'Edit rich text content in Craft CMS using Redactor by Imperavi.',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/redactor/blob/v2/README.md',
  ),
  'luwes/craft3-codemirror' => 
  array (
    'class' => 'luwes\\codemirror\\CodeMirror',
    'basePath' => $vendorDir . '/luwes/craft3-codemirror/src',
    'handle' => 'code-mirror',
    'aliases' => 
    array (
      '@luwes/codemirror' => $vendorDir . '/luwes/craft3-codemirror/src',
    ),
    'name' => 'CodeMirror',
    'version' => '1.0.2',
    'description' => 'Add the awesome in-browser code editor CodeMirror as a field type.',
    'developer' => 'Wesley Luyten',
    'developerUrl' => 'https://wesleyluyten.com',
    'documentationUrl' => 'https://github.com/luwes/craft3-codemirror/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/luwes/craft3-codemirror/master/CHANGELOG.md',
  ),
);
