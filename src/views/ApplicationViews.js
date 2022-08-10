import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { GameDetails } from "../components/game/GameDetail"
import { GameList } from "../components/game/GameList"
import { Authorized } from "./Authorized"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<GameList/>} />
                <Route path="/games" element={<GameList />} />
                <Route path="/games/:gameId" element={<GameDetails />} /> 
            </Route>
        </Routes>
    </>
}