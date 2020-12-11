import React from "react";
import { TextButton } from "../../styles/generic/Button";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";

const PaginationNav = ({
	totalProducts,
	currentPage,
	maxPerPage,
	onNext,
	onPrev,
}) => {
	return (
		<S.navWrapper>
			<S.buttonWrapper>
				{currentPage > 1 && (
					<S.arrow icon={faCaretLeft} onClick={() => onPrev()} size="6x" />
				)}
			</S.buttonWrapper>

			<p style={{ color: "white", fontWeight: "bold" }}>{currentPage}</p>
			<S.buttonWrapper>
				{totalProducts / currentPage > maxPerPage && (
					<S.arrow icon={faCaretRight} onClick={() => onNext()} size="6x" />
				)}
			</S.buttonWrapper>
		</S.navWrapper>
	);
};

export default PaginationNav;
