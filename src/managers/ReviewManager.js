export const CreateReview = (review) => {
    return fetch(`http://localhost:8000/reviews`, {
        method: "POST",
        headers: {
                "Authorization": `Token ${localStorage.getItem("gamer_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
}