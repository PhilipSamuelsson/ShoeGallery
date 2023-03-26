import * as React from 'react'
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import './GalleryGrid.css'
import axios from 'axios'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}))

function GalleryGrid() {
    /*  const [shoe, setShoe] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: /* 'https://shoes-collections.p.rapidapi.com/shoes/',
                headers: {
                    'X-RapidAPI-Key':
                        '9826ca2652msh24bb25e663de157p19db70jsn86f5c1f87dd7',
                    'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
                }
            }

            const response = await axios.request(options)
            setShoe(response.data)
            console.log(shoe[0])
        }

        fetchData()
    }, [])
 */
    return (
        <div className="wrap-container">
            <Grid container spacing={4}>
                <Grid xs={6} md={4}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid xs={6} md={4}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid xs={6} md={4}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid xs={6} md={4}>
                    <Item>xs=6</Item>
                </Grid>
            </Grid>
        </div>
    )
}

export default GalleryGrid
