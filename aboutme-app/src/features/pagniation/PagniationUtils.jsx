import {useMemo} from "react";

export const pagniationRange = (start, end) => {
	let length = end - start + 1;
	return Array.from({length}, (_, index) => index + start);
}

export const DOTS = "...";

export const usePagination = ({
	totalEntries,
	entriesPerPage,
	siblingCount = 1,
	currentPage
}) => {
	const pageRange = useMemo(() => {
		// total entries to be displayed over how long we want the pages to be
		// also using ceiling to find the nearest page
		const totalPageCount = Math.ceil(totalEntries/entriesPerPage);

		const totalPageNumbers = siblingCount + 5;

		// case 1 pages less than what we show in the comp
		if (totalPageNumbers >= totalPageCount){
				return pagniationRange(1, totalPageCount);
		}
		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(
			currentPage + siblingCount,
			totalPageCount
		);
		
		// which side dots to show?
		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPageCount;

		// case 2 no right only left
		if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRange = pagniationRange(1, leftItemCount);

			return [...leftRange, DOTS, totalPageCount];
		}

		// case 3 nop right only left
		if (shouldShowLeftDots && !shouldShowRightDots) {

			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = pagniationRange(
				totalPageCount - rightItemCount + 1,
				totalPageCount
			);
			return [firstPageIndex, DOTS, ...rightRange];
		}

		/*
			Case 4: Both left and right dots to be shown
		*/
		if (shouldShowLeftDots && shouldShowRightDots) {
			let middleRange = pagniationRange(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}
		

	}, [totalEntries, entriesPerPage, siblingCount, currentPage])
	return pageRange
};