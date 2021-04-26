import tw, { styled } from "twin.macro";

export const StyledWrapper = tw.div`box-content space-y-6`;

export const StyledHeader = tw.div`flex justify-between items-center`;

export const StyledTitle = styled.h1(() => [tw`text-white font-bold`], `font-size: 2.5rem; letter-spacing: 0.4em;`);

export const StyledIcon = tw.img`text-white w-6 h-6`;

export const StyledItemList = tw.ul`flex flex-col rounded-md overflow-hidden divide-y divide-gray-200 dark:divide-gray-700 divide-solid shadow-xl`;
