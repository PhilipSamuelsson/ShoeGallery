import React from 'react'
import HeadingText from './HeadingText/HeadingText'
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
        return null // or loading spinner or placeholder text
    }

    return (
        <div className="DetailsWrapper">
            <HeadingText sx={{ t: 2 }} title={data.data.displayName} />
            <img
                className="AgentImage"
                src={data.data.fullPortraitV2 || ''}
                alt="AgentImage"
            />
            {
                <div className="abilities">
                    <div className="ability" key="ability1">
                        <img
                            src={data.data.abilities[0].displayIcon || ''}
                            alt="Ability 1"
                        />
                    </div>
                    <div className="ability" key="ability2">
                        <img
                            src={data.data.abilities[1].displayIcon || ''}
                            alt="Ability 2"
                        />
                    </div>
                    <div className="ability" key="ability3">
                        <img
                            src={data.data.abilities[2].displayIcon || ''}
                            alt="Ability 3"
                        />
                    </div>
                    <div className="ability" key="ultimate">
                        <img
                            src={data.data.abilities[3].displayIcon || ''}
                            alt="Ultimate"
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default AgentInfo
