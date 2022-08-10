import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const GameDetails = () => {

    const { gameId } = useParams()
    const Navigate = useNavigate()

    const [ game, setGame] = useState([])

    useEffect(() => {
        
    })



    return(
        <h1> Game Details </h1>
    )
}