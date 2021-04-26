import tw, { styled } from "twin.macro";
import CheckBox from "../Checkbox";

export type TItem = {
  title: string;
  done: boolean;
};

const StyledItem = tw.li`bg-white dark:bg-gray-800 w-full p-4 px-6 flex items-center`;

const StyledTextItem = styled.span(({ done }: { done?: boolean }) => [
  tw`ml-4`,
  done ? tw`line-through text-gray-300 dark:text-gray-500` : tw`text-black dark:text-white`,
]);

const Item = ({ title, done = false, onClick }: TItem & { onClick: () => void }) => {
  return (
    <StyledItem>
      <CheckBox checked={done} onChange={onClick} />
      <StyledTextItem done={done}>{title}</StyledTextItem>
    </StyledItem>
  );
};

export default Item;
