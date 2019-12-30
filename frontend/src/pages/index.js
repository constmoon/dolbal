import Head from 'next/head'
import Layout from '../components/layout';
import TempAccList from './tempAccList';
import Map from '../components/map';
import accList, { getAccType } from '../data';
import { getAccidentPosition } from '../api';
import { useEffect, useState } from 'react';

export default () => {
  const [accListwithPosition, setAccListWithPosition] = useState([]);

  useEffect(() => {
    async function setAccList() {
      const positionList = await Promise.all(accList.map(getAccidentPosition));
      setAccListWithPosition(positionList);
    }
    setAccList();
  },[]);

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
          {/*TODO: accList에 바뀐 postion도 포함하기 */}
          <Map
            accList={accList}
            posList={accListwithPosition}
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