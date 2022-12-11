import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import Cards from "../../Componentes/Cards/Cards"

const Home = () => {
   let url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    const [data, setData] = useState([])

    const getPokemon= async () => {
        const response = await fetch(url)
        const poke =  await response.json()

        setData(poke.results)

        var cadaUm=[];
        for(var i=1; i<10;i++){
          cadaUm.push('https://pokeapi.co/api/v2/pokemon/$(i)/');
        }
        
    }

    useEffect( () => {
        getPokemon()
    }, [])

    return <>
        <section>
        
        <Container maxWidth="xg">
        <Grid container>
        {data.map((c,key)=> (
            
            <Grid item xs={3} key={key}>
            <Cards name={c.name} url={c.url} />
            </Grid>
        ) )}
        </Grid>
        </Container>
        </section>
         
    </>
}

export default Home;