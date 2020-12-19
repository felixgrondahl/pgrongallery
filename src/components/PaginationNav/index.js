import React from "react";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";
import PropTypes from "prop-types";

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

			<p style={{ color: "rgba(0, 0, 0, 0.8)", fontWeight: "bold" }}>{currentPage}</p>
			<S.buttonWrapper>
				{totalProducts / currentPage > maxPerPage && (
					<S.arrow icon={faCaretRight} onClick={() => onNext()} size="6x" />
				)}
			</S.buttonWrapper>
		</S.navWrapper>
	);
};

PaginationNav.propTypes = {
	totalProducts: PropTypes.number,
	currentPage: PropTypes.number,
	maxPerPage: PropTypes.number,
	onNext: PropTypes.func,
	onPrev: PropTypes.func 
}

export default PaginationNav;
