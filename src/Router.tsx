import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./routes/Coins"
import Coin from "./routes/Coin"
import { IisDark } from "./interface";

function Router({ isDark }: IisDark) {
    return <BrowserRouter basename="/CoinTrackerClone">
        <Switch>
            <Route path="/:coinId">
                <Coin isDark={isDark} />
            </Route>
            <Route exact path="/">
                <Coins />
            </Route>
        </Switch>
    </BrowserRouter>
}
export default Router;