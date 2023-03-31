import * as React from 'react'
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import './GalleryGrid.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}))

function GalleryGrid() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])

    console.log(data)

    return (
        <div className="wrap-container">
            <Grid container spacing={2}>
                {data &&
                    data.data.map((agent) => (
                        <Grid key={agent.id} item xs={12} md={6} lg={4}>
                            <Item>
                                <h3>{agent.displayName}</h3>
                                <img
                                    src={agent.fullPortrait}
                                    alt={agent.displayName}
                                />
                                <Link
                                    className="link"
                                    to={`/agent/${agent.uuid}`}
                                >
                                    <Button
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                        variant="contained"
                                        color="primary"
                                    >
                                        Read more
                                    </Button>
                                </Link>
                            </Item>
                        </Grid>
                    ))}
            </Grid>
        </div>
    )
}

export default GalleryGrid
