import React from 'react'
import Head from 'next/head'
import AccidentMap from 'components/AccidentMap'
import AccidentList from 'components/AccidentList'
import { useAccidentList } from 'store'
import style from './index.css'


export default () => {
    const [accidentList] = useAccidentList()

    return (
        <div className={style.app}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <div className={style.listContainer}>
                <AccidentList accidentList={accidentList} />
            </div>
            <div className={style.mapContainer}>
                <AccidentMap accidentList={accidentList} />
            </div>
        </div>
    )
}
