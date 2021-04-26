import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../context/themeContext";
import IconMoon from "../../assets/icon-moon.svg";
import IconSun from "../../assets/icon-sun.svg";
import NewItem from "./NewItem";
import Item, { TItem } from "./Item";
import ItemsActions from "./ItemsActions";
import { StyledWrapper, StyledHeader, StyledTitle, StyledIcon, StyledItemList } from "./styles";

const Todo = () => {
  const themeContext = useContext(ThemeContext);
  const [items, setItems] = useState<TItem[]>([]);

  useEffect(() => {
    const localStorageItems: TItem[] = JSON.parse(localStorage.getItem("todoitems") || "null");
    if (localStorageItems) setItems([...localStorageItems]);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoitems", JSON.stringify([...items]));
  }, [items]);

  const createItem = (val: string) => setItems([...items, { title: val, done: false }]);
  const toggleDone = (i: number) => {
    const tempArray = [...items];
    tempArray[i].done = !tempArray[i].done;
    setItems(tempArray);
  };
  const clearCompleted = () => {
    setItems([...items.filter((item) => !item.done)]);
  };

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
      {!!items.length && (
        <StyledItemList>
          {items.map((item, i) => (
            <Item done={item.done} onClick={() => toggleDone(i)} key={i} title={item.title} />
          ))}
          <ItemsActions itemsQuantity={items.length} onClearCompleted={clearCompleted} />
        </StyledItemList>
      )}
    </StyledWrapper>
  );
};

export default Todo;
