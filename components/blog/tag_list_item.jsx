import React, { useState } from "react";
import styles from "./tag_list_item.module.css";

export default function TagListItem({
  tag,
  selected,
  setSelected,
  numberByTag,
}) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    if (isActive) {
      setIsActive(false);
      setSelected(
        selected.filter((item) => {
          return item != tag;
        })
      );
    } else {
      setIsActive(true);

      const newTagList = [...selected];
      newTagList.push(tag);
      setSelected(newTagList);
    }
  };
  return (
    <li
      className={styles.container}
      onClick={() => {
        toggleActive();
      }}
    >
      <span className={isActive ? styles.active : styles.inactive}>
        {tag} ({numberByTag(tag)}) {isActive && "x"}
      </span>
    </li>
  );
}
