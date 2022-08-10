import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
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
                        <div>
                            <Link className="game__title" to={`/games/${game.id}`}>{game.title}</Link></div>
                        
                    </section>
                })
            }
        </article>
    )
}