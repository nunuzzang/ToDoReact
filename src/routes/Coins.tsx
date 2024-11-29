import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";

const ThemeToggle = styled.input`

`;
const Container = styled.div`
    padding: 0px 20px;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinsList = styled.ul`
`;

const Coin = styled.li`
    max-width: 480px;
    margin: 0 auto;
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
    margin-bottom: 10px;
    a{
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.2s ease-in;
        color: ${(props) => props.theme.almightyColor}
    }
    &:hover{
        a{
            color: ${(props) => props.theme.accentColor};
        }
    }
`;


const Title = styled.h1`
font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;


interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins() {
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
    return (
        <Container>
            <Helmet>
                <title>코인</title>
            </Helmet>
            <Header>
                <Title>코인</Title>
            </Header>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <CoinsList>
                    {data?.slice(0, 100).map((coin) => (
                        <Coin key={coin.id}>
                            <Link to={{
                                pathname: `/${coin.id}`,
                                state: { name: coin.name }
                            }}>
                                <Img src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`} />
                                {coin.name}</Link >
                        </Coin>
                    ))}
                </CoinsList>
            )
            }
        </Container >
    )
}

export default Coins;