export const GetGames = () => {
    return fetch("http://localhost:8000/games", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gamer_token")}`
        }
    })
    .then(res => res.json())
}

export const GetSingleGame = (gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("gamer_token")}`
        }
    })
    .then(response => response.json())
}

export const CreateGame = (game) => {
    return fetch("http://localhost:8000/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("gamer_token")}`
        },
        body: JSON.stringify(game)
    }).then(GetGames)
}