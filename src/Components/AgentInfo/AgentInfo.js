import React from 'react'
import './AgentInfo.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AgentInfo() {
    const [data, setData] = useState(null)
    const { agentUuid } = useParams()

    useEffect(() => {
        fetch(`https://valorant-api.com/v1/agents/${agentUuid}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])

    console.log(data)

    if (!data) {
        return null
    }

    return (
        <div className="DetailsWrapper">
            <h2 className="AgentName">{data.data.displayName}</h2>
            <img
                className="AgentImage"
                src={data.data.fullPortraitV2 || ''}
                alt="AgentImage"
            />

            <h2 className="AbilitiesHeading">Abilities</h2>
            {
                <div className="abilities">
                    <div className="ability" key="ability1">
                        <img
                            src={data.data.abilities[0].displayIcon || ''}
                            alt="Ability 1"
                        />
                        <h4 className="Ability">
                            {data.data.abilities[0].displayName}
                        </h4>
                    </div>
                    <div className="ability" key="ability2">
                        <img
                            src={data.data.abilities[1].displayIcon || ''}
                            alt="Ability 2"
                        />
                        <h4 className="Ability">
                            {data.data.abilities[1].displayName}
                        </h4>
                    </div>
                    <div className="ability" key="ability3">
                        <img
                            src={data.data.abilities[2].displayIcon || ''}
                            alt="Ability 3"
                        />
                        <h4 className="Ability">
                            {data.data.abilities[2].displayName}
                        </h4>
                    </div>
                    <div className="ability" key="ultimate">
                        <img
                            src={data.data.abilities[3].displayIcon || ''}
                            alt="Ultimate"
                        />
                        <h4 className="Ability">
                            {data.data.abilities[3].displayName}
                        </h4>
                    </div>
                </div>
            }
        </div>
    )
}

export default AgentInfo
