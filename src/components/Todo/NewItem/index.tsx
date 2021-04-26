import { useState } from "react";
import tw from "twin.macro";
import CheckBox from "../Checkbox";

const StyledNewItem = tw.div`bg-white dark:bg-gray-800 rounded-md w-full p-4 px-6 flex items-center`;
const StyledInput = tw.input`bg-white dark:bg-gray-800 dark:text-white rounded-lg flex-grow ml-4 outline-none`;

const NewItem = ({ createItem }: { createItem: (val: string) => void }) => {
  const [text, setText] = useState("");
  const handleCreateItem = (e: any) => {
    if ((e?.keyCode === 13 || e?.code === "Enter") && !!text.trim()) {
      createItem(text.trim());
      setText("");
    }
  };

  return (
    <StyledNewItem>
      <CheckBox readOnly={true} />
      <StyledInput
        placeholder="Write something to do"
        value={text}
        onChange={(e: any): void => setText(e?.target?.value || "")}
        onKeyUp={handleCreateItem}
      />
    </StyledNewItem>
  );
};

export default NewItem;
