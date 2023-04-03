import React from 'react'
import NavBarTest from '../Components/Navbar/NavBarTest'
import AgentInfo from '../Components/AgentInfo/AgentInfo'

import { useParams } from 'react-router-dom'

function AgentDetails() {
    const { id } = useParams()

    return (
        <div>
            <NavBarTest />
            <AgentInfo />
        </div>
    )
}

export default AgentDetails
