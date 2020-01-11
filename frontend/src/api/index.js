import { MODE, API_SERVER } from 'settings'
import { TYPES } from 'api/conts'
import { SAMPLE_API_RESULT } from 'api/sampledata'
import locationConverter from 'api/location'


const TYPE_NAME_MAP = Object.fromEntries(TYPES.map(entry => [entry.acc_type, entry.acc_type_nm]))

const getTypeName = accident => TYPE_NAME_MAP[accident.acc_type]


const setAdditionalFields = async accident => {
    const {longitude, latitude} = await locationConverter.GRS80toWGS84(accident.x_coordinate, accident.y_coordinate)
    accident.name = getTypeName(accident)
    accident.longitude = longitude
    accident.latitude = latitude
    return accident
}


const getRawAccidentList = async () => {
    if (MODE === 'development') {
        return Promise.resolve(SAMPLE_API_RESULT)
    }

    const response = await fetch(`${API_SERVER.BASE_URL}/accidents`)
    const data = await response.json()
    return data.data
}


const getAccidentList = async () => {
    const accidentList = await getRawAccidentList()
    return await Promise.all(
        accidentList.map(setAdditionalFields)
    )
}


export {
    getAccidentList
}
