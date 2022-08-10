import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCategories } from "../../managers/CategoryManager"
import { CreateGame } from "../../managers/GameManager"

export const GameForm = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [newGame, setnewGame] = useState({
        title: "",
        description: "",
        maker: "",
        year_released: 0,
        number_of_players: 0,
        avg_time: 0,
        minimum_age: 0,
        categories: 0
    })
    
    useEffect(
        () => {
            getCategories().then(setCategories)
        }, []
    )

    const changeGameState = (domEvent) => {
        const copy = {...newGame}
        copy[domEvent.target.name] = domEvent.target.value
        setnewGame(copy)
    }

    return (
        <>
        <form className="gameForm">
            <h2 className="gameForm__title">Add A New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form=control"
                        value={newGame.title}
                        onChange={changeGameState}
                    />
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form=control"
                        value={newGame.description}
                        onChange={changeGameState}
                    />
                    
                    <label htmlFor="maker">Maker</label>
                    <input type="text" name="maker" required autoFocus className="form=control"
                        value={newGame.maker}
                        onChange={changeGameState}/>
                    <label htmlFor="year_released">Release Year: </label>
                    <input type="number" name="year_released" required autoFocus className="form=control"
                        value={newGame.year_released}
                        onChange={changeGameState}/>
                    <label htmlFor="number_of_players">Players: </label>
                    <input type="number" name="number_of_players" required autoFocus className="form=control"
                        value={newGame.number_of_players}
                        onChange={changeGameState}/>
                    <label htmlFor="avg_time">Time to Complete: </label>
                    <input type="number" name="avg_time" required autoFocus className="form=control"
                        value={newGame.avg_time}
                        onChange={changeGameState}/>
                    <label htmlFor="minimum_age">Minimum Age: </label>
                    <input type="number" name="minimum_age" required autoFocus className="form=control"
                        value={newGame.minimum_age}
                        onChange={changeGameState}/>
                    <label htmlFor="categories">Categories: </label>
                    <select name="categories" required autoFocus className="form-control"
                        value={newGame.categories}
                        onChange={changeGameState}
                    >
                        <option value="0" selected disabled hidden>Select a Category</option>
                        {categories.map(category => <option key={`category--${category.id}`} value={category.id}>{category.name}</option>)}
                    </select>
                </div>
            </fieldset>
        <button onClick={(evt) => {
            evt. preventDefault()
            
            const game = {
                title: newGame.title,
                description: newGame.description,
                maker: newGame.maker,
                year_released: parseInt(newGame.year_released),
                number_of_players: parseInt(newGame.number_of_players),
                avg_time: parseInt(newGame.avg_time),
                minimum_age: parseInt(newGame.minimum_age),
                categories: parseInt(newGame.categories)
            }
            CreateGame(game).then(()=> navigate("/games"))
        }}>Save</button>
        </form>
        </>
    )
}