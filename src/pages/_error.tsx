import { NextPageContext } from 'next'
import Head from 'next/head'

const Error = ({ statusCode }: any) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : `An error occurred on client`}
      </p>
    </>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
