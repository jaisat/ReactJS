import React from 'react'
import Person from './Person'

function NameList() {
    const names = ["Satyam","Bruce","Kratos","Kakashi"]
    const nameList =  names.map(name => <Person person = {name} />)
    return (
        <div>{nameList}</div>
    )
}

export default NameList
