import Head from 'next/head'
import Layout from '../components/layout';
import TempAccList from './tempAccList';
import Map from '../components/map';
import accList, { getAccType } from '../data';
// TODO: api 분리

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Layout>
      <h1>DOLBAL Informations</h1>
      <div className="wrap">
        <TempAccList
          data={accList}
          getAccidentType={getAccType}
        />
        <Map />
      </div>
    </Layout>
    <style jsx global>{`
      html, body, ul, li, div, p {
        margin: 0;
        padding: 0;
      }
      body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 1rem;
        line-height: 1.4;
        word-break: keep-all;
      }
      li {
        list-style: none;
      }
      .wrap {
        display: flex;
        height: 600px;
      }
    `}</style>
  </div>
)