import styled from "styled-components";
import { Link } from "./Link";
import { colorTheme } from "../styles/vars/ThemeVars";

export const WrapperBox = styled.div`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	gap: 20px;

	button {
		cursor: pointer;
	}
	${Link} {
		cursor: zoom-in;
	}

	@media ${colorTheme.media.tablet} {
		flex-direction: column;
	}
`;
