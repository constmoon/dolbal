import Head from 'next/head'
// TODO: 절대경로로 바꾸기
import Layout from '../components/layout';
import AccidentList from '../components/accidentList';
import Map from '../components/map';
import { useAccidentList } from '../api';

export default () => {
  const [accidentList] = useAccidentList();
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Layout>
        <h1>DOLBAL Informations</h1>
        <div className="wrap">
          <AccidentList accidentList={accidentList} />
          <Map accidentList={accidentList} />
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
  );
};