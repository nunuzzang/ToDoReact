import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { ICoin } from "../interface";
import { CoinsList, CoinsContainer, Container, Header, Img, Loader, Title, Coin, } from "../component";

function Coins() {
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
    return (
        <Container>
            <Helmet>
                <title>Coin List</title>
            </Helmet>
            <Header>
                <Title>Coin List</Title>
            </Header>
            {isLoading ? (
                <Loader />
            ) : (
                <CoinsContainer>
                    <CoinsList>
                        {data?.slice(0, 100).map((coin) => (
                            <Coin key={coin.id}>
                                <Link to={{
                                    pathname: `/${coin.id}`,
                                    state: { name: coin.name }
                                }}>
                                    <Img src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`} />
                                    {coin.name}
                                </Link >
                            </Coin>
                        ))}
                    </CoinsList>
                </CoinsContainer>
            )
            }
        </Container >
    )
}

export default Coins;