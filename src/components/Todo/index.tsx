import { useContext, useState } from "react";
import ThemeContext from "../../context/themeContext";
import IconMoon from "../../assets/icon-moon.svg";
import IconSun from "../../assets/icon-sun.svg";
import NewItem from "./NewItem";
import Item, { TItem } from "./Item";
import { StyledWrapper, StyledHeader, StyledTitle, StyledIcon, StyledItemList } from "./styles";

const Todo = () => {
  const [items, setItems] = useState<TItem[]>([{ title: "Todo 1", done: false }]);
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
      <NewItem createItem={createItem} />
      <StyledItemList>
        {!!items.length &&
          items.map((item, i) => <Item done={item.done} onClick={() => toggleDone(i)} key={i} title={item.title} />)}
      </StyledItemList>
    </StyledWrapper>
  );
};

export default Todo;
