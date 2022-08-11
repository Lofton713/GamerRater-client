import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCategories } from "../../managers/CategoryManager"
import { editGame, GetSingleGame } from "../../managers/GameManager"

export const EditForm = () => {

    const { gameId } = useParams()
    const Navigate = useNavigate()

    const [ game, setGame ] =useState({})
    
    const [ categories, setCategories ] = useState([])

    useEffect(
        () => {
            getCategories().then(setCategories)
        }, []
    )

    useEffect(() => {
        GetSingleGame(gameId).then(setGame)
    }, [gameId])

    const changeGameState = (domEvent) => {
        const updatedGame = {...game}
        updatedGame[domEvent.target.name] = domEvent.target.value
        setGame(updatedGame)
    }

    return(
    <>
        <h1>Edit Form</h1>
        <form className="gameForm">
            <h2 className="gameForm__title">Edit {game.title}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" required autoFocus className="form-control" value={game.title}
                        onChange={changeGameState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="maker">Maker:</label>
                    <input type="text" name="maker" required className="form-control" value={game.maker}
                        onChange={changeGameState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" required className="form-control" value={game.description}
                        onChange={changeGameState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Number of Players Needed:</label>
                    <input type="number" name="number_of_players" required className="form-control" min="1" max="50" value={game.number_of_players}
                        onChange={changeGameState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="estTimeToPlay">Estimated Time To Play:</label>
                    <input type="number" name="avg_time" required className="form-control" value={game.avg_time}
                        onChange={changeGameState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="recAge">Minimum Age:</label>
                    <input type="number" name="minimum_age" required className="form-control" min="1" value={game.minimum_age}
                        onChange={changeGameState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="yearReleased">Year Released:</label>
                    <input type="number" name="year_released" required className="form-control" value={game.year_released}
                        onChange={changeGameState} />
                </div>
            </fieldset>
            {/* cat name does not appear, but some of them have multiple items selected, so that causing issues, since it is a select and not checkboxes*/}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categories">Category:</label>
                    <select className="form-control" name="categories" value={game.categories} required onChange={changeGameState}>
                        {/* <option value="0">Choose Game Category:</option> */}
                        {
                            categories.map(cat => {
                                return <option value={cat.id} key={`cat--${cat.id}`}>{cat.name}</option>
                            })
                        }
                    </select>
                </div>
            </fieldset>

            <button type="submit" onClick={evt => {
                // prevents the form from being submitted
                evt.preventDefault()
                
                
                const updatedGame = {
                    title: game.title,
                    maker: game.maker,
                    description: game.description,
                    number_of_players: parseInt(game.number_of_players),
                    avg_time: parseInt(game.avg_time),
                    minimum_age: parseInt(game.minimum_age),
                    year_released: parseInt(game.year_released),
                    player: game?.player?.id,
                    categories: parseInt(game.categories)
                }
                // Send POST request to API
                editGame(gameId, updatedGame)
                .then(() => Navigate(`/games/${gameId}`))
            }}
            className="btn btn-primary">Create</button>
        </form>
    </>
    )
}