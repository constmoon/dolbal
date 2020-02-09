import Head from 'next/head'
// TODO: 절대경로로 바꾸기
import SideLayout from '../components/sideLayout';
import SiteInformation from '../components/title';
import AccidentList from '../components/accidentList';
import Map from '../components/map';
import { useAccidentList } from '../api/accident';

export default () => {
  const [accidentList] = useAccidentList();
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Map accidentList={accidentList} />
      <SideLayout>
        <SiteInformation />
        <AccidentList accidentList={accidentList} />
      </SideLayout>
      <style jsx global>{`
      html, body, h1, h2, h3, h4, h5, ul, li, div, p {
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
    `}</style>
    </div>
  );
};