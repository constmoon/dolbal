import { KAKAO_API } from 'settings'


const GRS80toWGS84 = async (x, y) => {
    const url = `${KAKAO_API.BASE_URL}/transcoord.json?x=${x}&y=${y}&input_coord=WTM&output_coord=WGS84`
    const response = await fetch(url, {
        headers: {'Authorization': `KakaoAK ${KAKAO_API.APP_KEY}`}
    })
    const data = await response.json()
    const position = data.documents[0]
    return {longitude: position.x, latitude: position.y}
}


export default {
    GRS80toWGS84
}

export {
    GRS80toWGS84
}
