import Head from 'next/head'
import Layout from '../components/layout';
import TempAccList from './tempAccList';
import Map from '../components/map';
import accList, { getAccType } from '../data';
import { toAccidentWithPosition } from '../api';
import { useEffect, useState } from 'react';
// TODO: api 분리

export default () => {
  const [accListWithPosition, setAccListWithPosition] = useState([]);

  useEffect(() => {
    async function setAccList() {
      const accListwithP = await Promise.all(accList.map(toAccidentWithPosition));
      setAccListWithPosition(accListwithP)
    }
    setAccList();
  }, []);

  return (
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
          <Map
            accList={accList}
            posList={accListWithPosition}
          />
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
}
