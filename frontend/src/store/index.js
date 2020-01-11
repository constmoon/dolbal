import React from 'react'
import { getAccidentList } from 'api'


const useAccidentList = () => {
    const [accidentList, setAccidentList] = React.useState([])

    React.useEffect(() => {
        (async () => {
            setAccidentList(await getAccidentList())
        })()
    }, [])

    return [accidentList]
}


export {
    useAccidentList
}
