import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { CreateReview } from "../../managers/ReviewManager"

export const ReviewForm = () => {

    const { gameId } = useParams()
    const Navigate = useNavigate()

    const [review, setReview] = useState({

        review: ""
    })

    const changeReviewState = (domEvent) => {
        const copy = {...review}
        copy[domEvent.target.name] = domEvent.target.value
        setReview(copy)
    }

    return(
            <>
        <h1>Review form</h1>
        <form className="gameForm">
            <h2>Leave your review below</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="review">Review:</label>
                    <textarea name="review" required autoFocus className="form-control" value={review.review}
                        onChange={changeReviewState} />
                </div>
            </fieldset>
            <button type="submit" onClick={evt => {
                // prevents the form from being submitted
                evt.preventDefault()

                const postReview = {
                    review: review.review,
                    game: gameId
                }
                // Send POST request to API
                CreateReview(postReview)
                    .then(() => Navigate(`/games/${gameId}`))
            }}
                className="btn btn-primary">Create</button>
        </form>
    </>
    )
}