import styled, { css } from "styled-components";
import { BtnRotateAnimation } from "../styles/animations/Animations";

type StyledBtnPropsType = {
	clr?: string;
	fontSize?: string;
	fontStyle?: string;
	btnType: "primary" | "outlined";
	isActive?: boolean;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`

   border: none;
   border-radius: 10px;
	padding: 10px 20px;
	font-size: ${(props) => props.fontSize || "2rem"};
	font-weight: bold;
   


   ${(props) =>
			props.btnType === "outlined" &&
			css<StyledBtnPropsType>`
				border: 2px solid ${(props) => props.clr || "#fb3f78"};
				color: ${(props) => props.clr || "#fb3f78"};
				background-color: transparent;

				&:hover {
					border-color: "#4053cc";
					color: #4053cc;
					background-color: transparent;
				}
			`}


   ${(props) =>
			props.btnType === "primary" &&
			css<StyledBtnPropsType>`
				background-color: ${(props) => props.clr || "#fb3f78"};
				color: snow;

				&:hover {
					background-color: #4053cc;
				}
			`}


   ${(props) =>
			props.isActive &&
			css<StyledBtnPropsType>`
				box-shadow: 5px 5px 5px 5px rgba(37, 37, 44, 0.6);
			`}



	// &:last-child {
	// 	background-color: rgb(0, 251, 0);

		// &:hover {
		// 	zoom: 120%;
		// }
	}
`;

// export const SuperButton = styled(StyledBtn)`
// 	border-radius: 20px;
// 	background-color: #bd3a12;
// 	color: #88f905;
// 	&:hover {
// 		animation: ${BtnRotateAnimation} 2s ease;
// 	}
// `;
