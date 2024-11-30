import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools"
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme";
import { ButtonStyle, GlobalStyle, StyledBsFillMoonFill, StyledBsFillSunFill } from "./component";


function App() {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode((props) => !(props));
	}
	return (
		<>
			<Helmet>
				<link href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap' rel="stylesheet" />
			</Helmet>
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<GlobalStyle />
				<ButtonStyle>
					<p onClick={() => toggleDarkMode()}>
						{darkMode ? <StyledBsFillSunFill color="white" /> : <StyledBsFillMoonFill color="black" />}
					</p>
				</ButtonStyle>
				<Router />
				{/* <ReactQueryDevtools initialIsOpen={true} /> */}
			</ThemeProvider >
		</>

	)
}


export default App;