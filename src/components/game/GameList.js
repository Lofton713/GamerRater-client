import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GetGames } from "../../managers/GameManager"
import "./GameList.css"

export const GameList = () => {

    const [ games, setGames] = useState([])

    const Navigate = useNavigate()

    useEffect(() => {
        GetGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} by {game.maker}</div>
                        
                    </section>
                })
            }
        </article>
    )
}