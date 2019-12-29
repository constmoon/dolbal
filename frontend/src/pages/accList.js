import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Layout from '../components/layout';

const AccList = (props) => {
  const [result, setResult] = React.useState(props.data)
  // const fetchData = async () => {
  //   const res = await axios.get('http://localhost:8000/accidents');
  //   console.log(res.data.data)
  //   setResult(res.data.data)
  // }

  // React.useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <Layout>
      <h1>DOLBAL Informations</h1>
      <ul>
        {result.map((row, i) => (
          <li key={`row-${i}`}>
            <Link href={`/acc?id=${row.id}`}>
              <a>{row.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

AccList.getInitialProps = async function() {
  const res = await axios.get('http://localhost:8000/accidents');
  const data = res.data.data

  // TODO: 돌발 정보가 없을 경우 현재 돌발 정보가 없음을 표시
  return {
    data
  }
};

export default AccList;
