import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from 'axios';
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"

export default function App() {
    const [listaFilmes, setListaFilmes] = useState([])
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then(resp => {
            const x = resp.data
            setListaFilmes(x)
            console.log("x",x)
        })
        promise.catch(() => console.log("deu ruim"))
    }, [])
    return (
        <>
            <NavContainer>CINEFLEX</NavContainer>

            <HomePage listaFilmes={listaFilmes} setListaFilmes={setListaFilmes} />
            
        </>
    )
}
//<SeatsPage />
//<SessionsPage />
//<SuccessPage />
const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
