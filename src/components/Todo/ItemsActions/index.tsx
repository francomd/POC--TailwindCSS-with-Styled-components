import tw from "twin.macro";

const StyledWrapper = tw.li`bg-white dark:bg-gray-800 w-full p-4 px-6 flex justify-between items-center`;

const StyledTextHidden = tw.span`text-gray-400 dark:text-gray-500 text-sm`;

const StyledTextItem = tw.span`text-black dark:text-white hover:text-gray-500 hover:dark:text-gray-300 cursor-pointer text-sm`;

const ItemsActions = ({ itemsQuantity, onClearCompleted }: { itemsQuantity: number; onClearCompleted: () => void }) => {
  return (
    <StyledWrapper>
      <StyledTextHidden>{`${itemsQuantity} ${itemsQuantity === 1 ? "item left" : "items left"}`}</StyledTextHidden>
      <StyledTextItem onClick={onClearCompleted}>Clear Completed</StyledTextItem>
    </StyledWrapper>
  );
};

export default ItemsActions;
