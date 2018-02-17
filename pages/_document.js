/* eslint-disable react/no-danger */
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import FontAwesome from '@fortawesome/fontawesome'

import { baseUrl } from '../util'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const {
      html,
      head,
      errorHtml,
      chunks,
    } = renderPage()
    const styles = flush()
    return {
      html,
      head,
      errorHtml,
      chunks,
      styles,
    }
  }

  render() {
    // If we're deployed to anywhere other than the server root, we'll have to
    // store our root path that here so that the client can access it.
    const script = {
      __html: `window.BASE_URL = '${baseUrl}';`,
    }
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossOrigin="anonymous" />
          {/* <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/all.js"></script> */}
          <style>{FontAwesome.dom.css()}</style>
          <title>CS@Illinois Queues</title>
          <link rel="icon" href="/static/favicon.ico" type="image/png"></link>
          {baseUrl && <script dangerouslySetInnerHTML={script} />}
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
