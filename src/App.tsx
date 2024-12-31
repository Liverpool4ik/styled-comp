import React from "react";
import "./App.css";
import styled from "styled-components";
import { StyledBtn } from "./components/StyledButtonComp";
import { Link } from "./components/Link";
import { Menu } from "./components/Menu";
import { WrapperBox } from "./components/WrapperBox";
import { colorTheme } from "./styles/vars/ThemeVars";

function App() {
	return (
		<div className="App">
			<Menu>
				<ul>
					<li>
						<a href="#">Menu-item 1</a>
					</li>
					<li>
						<a href="#">Menu-item 2</a>
					</li>
					<li>
						<a href="#">Menu-item 3</a>
					</li>
				</ul>
			</Menu>
			<WrapperBox>
				{/* <StyledBtn
					as="a"
					href="https://superleagueua.com.ua/tournament/1024917/tables"
				>
					LinkBtn
				</StyledBtn> */}
				{/* <SuperButton>SuperButton</SuperButton> */}
				{/* <StyledBtn as={Link}>Like-Link_componenta</StyledBtn> */}
				{/* <StyledBtn clr="green" fontSize={"30px"} fontStyle="italic">
					Hello
				</StyledBtn>
				<StyledBtn clr="red">Hello</StyledBtn>
				<StyledBtn fontSize={"45px"}>default</StyledBtn> */}
				<StyledBtn
					clr={colorTheme.colors.primeColor}
					btnType={"primary"}
					isActive
				>
					{" "}
					default
				</StyledBtn>
				<StyledBtn clr={colorTheme.colors.secondaryColor} btnType={"outlined"}>
					default
				</StyledBtn>
			</WrapperBox>
		</div>
	);
}

export default App;
