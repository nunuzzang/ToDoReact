import { Switch, Route, useLocation, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Chart from "./Chart";
import Price from "./price";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import { Helmet } from "react-helmet";
import { RouteParams, RouteState, InfoData, PriceData } from "../interface";
import { CoinContainer, CoinHeader, CoinLoader, CoinTitle, Description, HomeIcon, Overview, OverviewItem, Tab, Tabs } from "../component";

function Coin() {
    const { coinId } = useParams<RouteParams>();
    const { state } = useLocation<RouteState>();
    const priceMatch = useRouteMatch("/:coinId/price");
    const chartMatch = useRouteMatch("/:coinId/chart");
    const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(["info", coinId], () => fetchCoinInfo(coinId));
    const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(["tickers", coinId], () => fetchCoinTickers(coinId), {
        refetchInterval: 5000,
    });
    const loading = infoLoading || tickersLoading;
    return (
        <CoinContainer>
            <Helmet>
                <title>
                    {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
                </title>
            </Helmet>
            <CoinHeader>
                <CoinTitle>
                    {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
                </CoinTitle>
                <Link to={"/"}>
                    <HomeIcon />
                </Link >
            </CoinHeader>
            {loading ? (
                <CoinLoader />
            ) : (
                <>
                    <Overview>
                        <OverviewItem>
                            <span>Rank:</span>
                            <span>{infoData?.rank}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Symbol:</span>
                            <span>${infoData?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Price:</span>
                            <span>{`$${tickersData?.quotes.USD.price.toFixed(2)}`}</span>

                        </OverviewItem>
                    </Overview>
                    <Description>{infoData?.description}</Description>
                    <Overview>
                        <OverviewItem>
                            <span>Total Suply:</span>
                            <span>{tickersData?.total_supply}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Max Supply:</span>
                            <span>{tickersData?.max_supply}</span>
                        </OverviewItem>
                    </Overview>

                    <Tabs>
                        <Tab isActive={chartMatch !== null}>
                            <Link to={`/${coinId}/chart`}>Chart</Link>
                        </Tab>
                        <Tab isActive={priceMatch !== null}>
                            <Link to={`/${coinId}/price`}>Price</Link>
                        </Tab>
                    </Tabs>

                    <Switch>
                        <Route path={`/:coinId/price`}>
                            <Price coinId={coinId}
                                ath_price={tickersData?.quotes.USD.ath_price}
                                ath_date={tickersData?.quotes.USD.ath_date}
                                percent_change_30m={tickersData?.quotes.USD.percent_change_30m}
                                percent_change_1h={tickersData?.quotes.USD.percent_change_1h}
                                percent_change_24h={tickersData?.quotes.USD.percent_change_24h}
                                percent_change_7d={tickersData?.quotes.USD.percent_change_7d}
                                percent_change_30d={tickersData?.quotes.USD.percent_change_30d}
                                percent_change_1y={tickersData?.quotes.USD.percent_change_1y}
                                percent_from_price_ath={tickersData?.quotes.USD.percent_from_price_ath} />
                        </Route>
                        <Route path={`/:coinId/chart`}>
                            <Chart coinId={coinId} />
                        </Route>
                    </Switch>
                </>
            )}
        </CoinContainer>
    );
}
export default Coin;