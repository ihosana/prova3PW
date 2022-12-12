import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import Cards from "../Componentes/Cards/Cards"
import axios from "axios";
const Home = () => {
   let url = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0"

    const [data, setData] = useState([])
    useEffect( () => {
        getPokemon()
    }, [])
    
    const getPokemon= async () => {
        const response = await fetch(url)
        const poke =  await response.json()

        setData(poke.results)  
    }
    return <>
        <div>
        <Container maxWidth="xg">
        <Grid container>
        {data.map((c,key)=> (
            
            <Grid item xs={3} key={key}>
            <Cards name={c.name} url={c.url} />
            </Grid>
        ) )}
        </Grid>
        </Container>
        </div>
         
    </>
}

export default Home;