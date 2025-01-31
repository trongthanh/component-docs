/* @flow */
/* eslint-disable react/no-danger */

import * as React from 'react';
import mime from 'mime-types';

type Props = {
  title: string,
  description: string,
  body: string,
  sheets: string[],
  favicon: string,
};

export default function HTML({
  title,
  description,
  body,
  sheets,
  favicon,
}: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type={mime.lookup(favicon)} href={favicon} />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta name="description" content={description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <title>{title}</title>

        {sheets.map(sheet => (
          <link key={sheet} type="text/css" rel="stylesheet" href={sheet} />
        ))}
      </head>
      <body dangerouslySetInnerHTML={{ __html: body }} />
    </html>
  );
}
