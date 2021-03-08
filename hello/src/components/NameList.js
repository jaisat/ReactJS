import React from 'react'
import Person from './Person'

function NameList() {
    const names = ["Satyam","Bruce","Kratos","Kakashi"]
    const nameList =  names.map(name => <Person key ={name} person = {name} />)
    return (
        <div>{nameList}</div>
    )
}

export default NameList
