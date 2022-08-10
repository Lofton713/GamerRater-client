export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("gamer_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleCategory = (id) => {
    return fetch(`http://localhost:8000/categories/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("gamer_token")}`
        }
    })
        .then(response => response.json())
}