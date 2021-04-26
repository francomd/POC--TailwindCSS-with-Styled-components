import { useContext, useState } from "react";
import tw, { styled } from "twin.macro";
import IconMoon from "../assets/icon-moon.svg";
import IconSun from "../assets/icon-sun.svg";
import ThemeContext from "../context/themeContext";

const StyledWrapper = tw.div`box-content space-y-6`;
const StyledHeader = tw.div`flex justify-between items-center`;
const StyledTitle = styled.h1(() => [tw`text-white text-4xl font-bold`], `letter-spacing: 0.4em`);
const StyledIcon = tw.img`text-white w-6 h-6`;
const StyledNewItem = tw.div`bg-white dark:bg-gray-800 rounded-md w-full p-4 px-6 flex items-center`;
const StyledItemList = tw.ul`flex flex-col rounded-md overflow-hidden divide-y divide-gray-200 dark:divide-gray-600 divide-solid`;
const StyledItem = tw.li`bg-white dark:bg-gray-800 w-full p-4 px-6 flex items-center`;
const StyledTextItem = styled.span(({ done }: { done?: boolean }) => [
  tw`ml-4`,
  done ? tw`line-through text-gray-300 dark:text-gray-500` : tw`text-black dark:text-white`,
]);
const StyledInput = tw.input`bg-white dark:bg-gray-800 dark:text-white rounded-lg flex-grow ml-4 outline-none`;
const StyledCheckbox = styled.span`
  width: 20px;
  height: 20px;
  [type="checkbox"] {
    &:checked,
    &:not(:checked) {
      position: absolute;
      left: -9999px;
      &:hover + span:before {
        border-color: rgba(146, 130, 243, 1);
      }
      &:focus-visible + span:before {
        box-shadow: 0 0 0 2px white, 0 0 0 4px blue;
      }
      & + span {
        position: relative;
        display: inline-block;
        padding-left: 36px;
        height: 20px;
        width: 20px;
        cursor: pointer;
        font-size: 11px;
        line-height: 16px;
        color: black;
        &:before {
          position: absolute;
          content: "";
          left: 0;
          top: 0;
          width: 20px;
          height: 20px;
          border: 1px solid #d6d6d6;
          border-radius: 100%;
          background: linear-gradient(164deg, rgba(112, 164, 250, 1) 0%, rgba(180, 96, 236, 1) 100%);
          transition: all 300ms ease;
        }
      }
    }
  }
  [type="checkbox"] {
    &:checked,
    &:not(:checked) {
      & + span:after {
        position: absolute;
        content: "";
        top: 5px;
        left: 8px;
        width: 4px;
        height: 8px;
        border: solid #fff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        transition: all 300ms ease;
      }
    }
    &:not(:checked) {
      & + span:after {
        opacity: 0;
        transform: scale(0);
      }
      & + span:before {
        background: transparent;
      }
    }
    &:checked {
      & + span:before {
        border-color: rgba(146, 130, 243, 1);
      }
      & + span:after {
        opacity: 1;
        transform: scale(1) rotate(45deg);
      }
    }
    &:disabled {
      & + span:before {
        border: 1px solid darkgray;
        background: darkgray;
      }
      & + span:after {
        border-color: darkgray;
      }
      &:not(:checked) + span {
        color: gray;
      }
    }
    &[readonly] + span:hover {
      cursor: unset;
    }
  }
`;

const CheckBox = ({
  checked = false,
  readOnly = false,
  onChange,
}: {
  checked?: boolean;
  readOnly?: boolean;
  onChange?: (val: boolean) => void;
}) => (
  <StyledCheckbox>
    <input
      type="checkbox"
      checked={checked}
      readOnly={readOnly}
      onChange={(e: any) => !readOnly && onChange && onChange(e?.target?.checked)}
    />
    <span onClick={() => !readOnly && onChange && onChange(!checked)} />
  </StyledCheckbox>
);

const TodoNewItem = ({ createItem }: { createItem: (val: string) => void }) => {
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
        onKeyPress={handleCreateItem}
      />
    </StyledNewItem>
  );
};

const TodoItem = ({ title, done = false, onClick }: { title: string; done: boolean; onClick: () => void }) => {
  return (
    <StyledItem>
      <CheckBox checked={done} onChange={onClick} />
      <StyledTextItem done={done}>{title}</StyledTextItem>
    </StyledItem>
  );
};

type Item = {
  title: string;
  done: boolean;
};

const Todo = () => {
  const [items, setItems] = useState<Item[]>([{ title: "Todo 1", done: false }]);
  const toggleDone = (i: number) => {
    const tempArray = [...items];
    tempArray[i].done = !items[i].done;
    setItems(tempArray);
  };
  const createItem = (val: string) => setItems([...items, { title: val, done: false }]);
  const themeContext = useContext(ThemeContext);

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledTitle>TODO</StyledTitle>
        <StyledIcon
          src={themeContext.theme === "dark" ? IconSun : IconMoon}
          onClick={() => themeContext.toggleTheme()}
        />
      </StyledHeader>
      <TodoNewItem createItem={createItem} />
      <StyledItemList>
        {!!items.length &&
          items.map((item, i) => (
            <TodoItem done={item.done} onClick={() => toggleDone(i)} key={i} title={item.title} />
          ))}
      </StyledItemList>
    </StyledWrapper>
  );
};

export default Todo;
