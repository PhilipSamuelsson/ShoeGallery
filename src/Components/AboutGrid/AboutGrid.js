import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import './AboutGrid.css'
import HeadingText from '../HeadingText/HeadingText'

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center'
}))

const AgentImage =
    'https://www.mandatory.gg/wp-content/uploads/valorant-news-agent-neon-3d.png'

export default function ColumnsGrid() {
    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', border: 0 }}>
            <Grid container spacing={12} columns={16}>
                <Grid xs={16} lg={8}>
                    <Item>
                        <img
                            className="neonImage"
                            src={AgentImage}
                            alt="neon"
                        />
                    </Item>
                </Grid>
                <Grid xs={16} lg={8}>
                    <Item sx={{ border: 'none' }} className="AboutText">
                        Valorant is a free-to-play online multiplayer
                        first-person shooter game developed by Riot Games. The
                        game takes place in a near-future version of Earth,
                        where players choose to play as either attackers or
                        defenders in a series of rounds, with the ultimate goal
                        of winning the match by completing objectives or
                        eliminating the enemy team. Each player selects a unique
                        agent, each with their own abilities and playstyle, and
                        utilizes a combination of gunplay and abilities to
                        outsmart and defeat the opposition. The game features a
                        high level of strategy and teamwork, and has gained
                        popularity as an esports title since its release in
                        2020.
                    </Item>
                </Grid>
            </Grid>
            <HeadingText title="Who are we?" />
            <Grid container spacing={12} columns={16}>
                <Grid xs={16} lg={8}>
                    <Item>
                        <img
                            className="neonImage"
                            src="https://download.logo.wine/logo/Riot_Games/Riot_Games-Logo.wine.png"
                            alt="neon"
                        />
                    </Item>
                </Grid>
                <Grid xs={16} lg={8}>
                    <Item className="AboutText">
                        Riot Games is an American video game developer and
                        publisher, known for creating popular games such as
                        League of Legends, Valorant, and Teamfight Tactics.
                        Founded in 2006, Riot Games is headquartered in Los
                        Angeles, California, and has additional offices in
                        various locations around the world.
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}
