import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetSingleGame } from "../../managers/GameManager"
import { GetReviews } from "../../managers/ReviewManager"

export const GameDetails = () => {

    const { gameId } = useParams()
    const Navigate = useNavigate()

    const [ game, setGame] = useState({})
    const [ reviews, setReviews ] = useState([])
    const [ filteredReviews, setfilteredReviews] = useState([])

    useEffect(() => {
        GetSingleGame(gameId).then(setGame)
    }, [gameId])

    useEffect(() => {
        GetReviews().then(data => setReviews(data))
    }, [])

    useEffect(() => {
        const gameReviews = reviews.filter(review => review.gameId = gameId )
        setfilteredReviews(gameReviews)
    },
    [reviews]
    )



    return(
        <>
        <h1> Game Details </h1>
        <article className="game" key={`game--${game.id}`}>
            <header>
                <h3>{game.title}</h3>
            </header>
                <div>
                    <ul>
                        <li> Maker: {game.maker}</li>
                        <li> Released: {game.year_released}</li>
                        <li> Description: {game.description}</li>
                        <li> Recommended Age: {game.minimum_age} minutes </li>
                        <li> Average Duration: {game.avg_time} </li>
                        <li> Categories:
                    
                        {game.categories?.map(cat => {
                            return <div key={`cat--${cat?.id}`}>- {cat?.name}</div>
                        })
                    }
                        </li>
                    </ul>
                </div>
        </article>
        <button onClick={(() => Navigate(`/games/${game.id}/review`))}> Review Game </button>
        <h2>Reviews</h2>
        <section className="reviews">
            {filteredReviews.map(
                (review) => {
                    return <article className="review" key={`review--${review.id}`}>
                        <p>{review.review}</p>
                    </article>
                }
            )}
        </section>

        </>
    )
}