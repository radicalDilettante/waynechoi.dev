/* eslint-disable react/no-children-prop */
import React, { useRef, useEffect } from "react";
import highlightJs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";
import marked from "marked";
import styles from "./style.module.css";

interface IProps {
  content: string;
}

export default function MarkdownRender({ content }: IProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parsedMarkdown = document.createElement("div");
    parsedMarkdown.innerHTML = marked(content);
    rootRef.current!.appendChild(parsedMarkdown);

    rootRef
      .current!.querySelectorAll<HTMLElement>("pre code")
      .forEach((block) => {
        highlightJs.highlightElement(block);
      });
  }, [content]);
  return <div ref={rootRef} className={styles.container}></div>;
}
