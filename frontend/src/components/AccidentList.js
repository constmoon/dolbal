import React from 'react'


function getColor(accident) {
    switch (accident.type) {
        case '집회및행사': return '#F02928'
        case '기타': return '#2C873A'
        default: return '#1234A8'
    }
}


const AccidentListItem = ({accident}) => {
    const color = getColor(accident)

    return (
        <div>
            <h3>{accident.title}</h3>
            <p>{accident.description}</p>
            <button style={{color: color}}>상세보기</button>
        </div>
    )
}


const AccidentList = ({accidentList}) => {
    return (
        <ul>
            {accidentList.map((accident, i) => (
                <li key={`list-item-${i}`}>
                    <AccidentListItem accident={accident} />
                </li>
            ))}
        </ul>
    )
}


export default AccidentList
