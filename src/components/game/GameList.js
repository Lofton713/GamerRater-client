import { useEffect, useState } from "react"
import { useNavigate, Link, useParams } from "react-router-dom"
import { GetGames } from "../../managers/GameManager"
import "./GameList.css"

export const GameList = () => {

    const [ games, setGames] = useState([])
    const { gameId } = useParams()
    const Navigate = useNavigate()
    

    useEffect(() => {
        GetGames().then(data => setGames(data))
    }, [])

    return (
        <>
        <button onClick={(() => Navigate('/games/new'))}> Add New Game </button>
        <h1>Games</h1>
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div>
                        {
                            localStorage.getItem("gamerId") == game?.player?.id
                                ?
                                <>
                                    <button onClick={(() => Navigate(`/games/${game.id}/edit`))}>⚙️</button >
                                </>
                                :
                                ""
                        }
                            <Link className="game__title" to={`/games/${game.id}`}>{game.title}</Link></div>
                        
                    </section>
                })
            }

        </article>
        </>
    )
}