import styled, { createGlobalStyle } from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
// App.tsx
export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-family: "Roboto Slab",sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}
a{
  text-decoration: none;
  color:inherit;
}
`;

export const ButtonStyle = styled.div`
    padding: 0px 20px; //상하는 0, 좌우는 20
    max-width: 480px; // max-width랑 margin 설정으로 화면을 크게 해도 모바일 화면처럼 가운데에 위치하게 됨.
    margin: 0 auto;
    margin-top: 30px;
    align-items: center;
    display: flex;
    justify-content: center;
`;
export const StyledBsFillMoonFill = styled(BsFillMoonFill)`
  width: 30px;
  height: 30px;
`;

export const StyledBsFillSunFill = styled(BsFillSunFill)`
  width: 30px;
  height: 30px;
`;

// Coins.tsx
export const Container = styled.div`
    padding: 0px 20px;
`;

export const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CoinsContainer = styled.div`
  display: flex;
  justify-content: center;
`;


export const CoinsList = styled.ul`
  display: flex;
  justify-content: center;
  max-width: 450px;
  flex-wrap: wrap;
  `;

export const Coin = styled.li`
    width: 120px;
    height: 120px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.coinColor};
    color: ${(props) => props.theme.textColor};
    border-radius: 15px;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    a{
        width: 120px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 20px;
        transition: color 0.2s ease-in;
        text-align: center;
    }
    &:hover{
        transform: scale(1.05); // 약간 확대
        a{
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

export const Title = styled.h1`
font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

export const Loader = styled.span`
    height: 50px;
    width: 50px;
    position: absolute;
    right: 50%;
    bottom: 50%;
    border: 3px solid #37474f;
    border-radius: 50%;
    border-top-color: #6399D8;
    animation: spin 0.5s ease-in-out infinite;
  @keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`;

export const Img = styled.img`
    width: 40px;
    height: 40px;
`;

// Coin.tsx
export const CoinTitle = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

export const CoinLoader = styled.span`
    height: 50px;
    width: 50px;
    position: absolute;
    right: 50%;
    bottom: 50%;
    border: 3px solid #37474f;
    border-radius: 50%;
    border-top-color: #6399D8;
    animation: spin 0.5s ease-in-out infinite;
  @keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`;

export const CoinContainer = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin:  0 auto;
`;

export const CoinHeader = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
export const Description = styled.p`
  margin: 20px 0px;
  line-height: 1.5;
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;
export const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
    transition: color 0.2s ease-in;
    &:hover{
    color: ${(props) => props.theme.accentColor
  }
    }
  }
`;
export const HomeIcon = styled(AiOutlineHome)`
  width: 30px;
  height: 30px;
  margin-top: 20px;
  margin-left: 10px;
  transition: color 0.2s ease-in;
  &:hover{
    color: ${(props) => props.theme.accentColor
  }
  }
`;

//  Price.tsx
export const MaxContainer = styled.div`
  display: grid;
  justify-items: center;  
`;

export const MaxBox = styled.div`
  background-color: ${(props) => props.theme.divColor};
  padding: 10px;
  border-radius: 15px;
  width: 100%;
  margin-bottom: 20px;
`;

export const MaxStyle = styled.span`
  font-size: 14px;
  display: grid;
  justify-content: center;
  text-align: left;
  color: ${(props) => props.theme.grayText};
  font-weight: 600;
`;

export const BoxContainter = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);  
  margin-block-end: 10%;
`;


export const Box = styled.div`
  background-color: ${(props) => props.theme.divColor};
  padding: 20px;
  border-radius: 15px;
  width: 100%;
`;

export const PercentBox = styled.div<{ percent: number | undefined }>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) =>
    props.percent
      ? props.percent > 0
        ? "#DA5157"
        : props.percent < 0
          ? "#4880EE"
          : "#000"
      : "none"};
`;

export const Time = styled.span`
  font-size: 13px;
  display: block;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
  color: ${(props) => props.theme.grayText};
  font-weight: 600;
`;

export const Percent = styled.span`
  font-size: 35px;
  font-weight: 600;
`;