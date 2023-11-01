import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./dropdown-list.css";

DropdownList.propTypes = {
  items: PropTypes.array.isRequired,
  filterOn: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  keyResolver: PropTypes.func.isRequired,
  valueChange: PropTypes.func.isRequired,
};
export function DropdownList({
  items,
  filterOn,
  keyResolver,
  placeholder,
  valueChange,
}) {
  const [text, setText] = useState("");
  const [showFilteredList, setShowFilteredList] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  
  const onItemSelected = (item) => {
    setText(item[filterOn])
    valueChange(item)
  }

  const onInputBlur = () => {
    const timeout = setTimeout(() => {
      setShowFilteredList(false)
      clearTimeout(timeout)
    }, 200);
  }

  useEffect(() => {
    const trimmedText = text.trim();
    if (trimmedText) {
      const matchRegex = new RegExp(`(${text.trim()})`, "ig");
      const fItems = items.reduce((acc, next) => {
        if (next[filterOn].match(matchRegex)) {
          acc.push({
            item: next,
            htmlText: next[filterOn].replace(
              matchRegex,
              (captureText) => `<b class='match'>${captureText}</b>`
            ),
          });
        }
        return acc;
      }, []);
      setFilteredItems(fItems);
    } else setFilteredItems([]);
  }, [text, filterOn, items]);

  return (
    <div className="dropdown-list">
      <input
        placeholder={placeholder}
        type="text"
        value={text}
        onFocus={() => setShowFilteredList(true)}
        onBlur={() => onInputBlur()}
        onChange={(e) => setText(e.target.value)}
      />
      {showFilteredList && filteredItems.length > 0 && (
        <ul>
          {filteredItems.map(({ item, htmlText }) => (
            <li
              onClick={() => onItemSelected(item)}
              key={keyResolver(item)}
              dangerouslySetInnerHTML={{ __html: htmlText }}
            ></li>
          ))}
        </ul>
      )}
      
    </div>
  );
}
