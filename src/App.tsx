import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import Router from "./Router";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme";
import { ButtonStyle, GlobalStyle, StyledBsFillMoonFill, StyledBsFillSunFill } from "./component";


function App() {
	const [isDark, setIsDark] = useState(false);
	const toggleDark = () => {
		setIsDark((current) => !(current));
	}
	return (
		<>
			<Helmet>
				<link href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap' rel="stylesheet" />
			</Helmet>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<GlobalStyle />
				<ButtonStyle>
					<p onClick={() => toggleDark()}>
						{isDark ? <StyledBsFillSunFill color="white" /> : <StyledBsFillMoonFill color="black" />}
					</p>
				</ButtonStyle>
				<Router isDark={isDark} />
			</ThemeProvider >
		</>

	)
}


export default App;