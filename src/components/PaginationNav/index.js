import React from "react";
import * as S from "./style";
import PropTypes from "prop-types";
import { ReactComponent as Arrow } from "../../assets/icons/iconmonstr-arrow-51.svg";

const PaginationNav = ({ totalProducts, currentPage, maxPerPage, onNext, onPrev }) => {
	return (
		<S.navWrapper left={false}>
			<S.buttonWrapper>
				{currentPage > 1 && (
					<Arrow  onClick={() => onPrev()} />
				)}
			</S.buttonWrapper>

			<S.PageNumber>
				<p>{currentPage}</p>
			</S.PageNumber>

			<S.buttonWrapper left={true}>
				{totalProducts / currentPage > maxPerPage && (
					<Arrow onClick={() => onNext()} />
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
	onPrev: PropTypes.func,
};

export default PaginationNav;
