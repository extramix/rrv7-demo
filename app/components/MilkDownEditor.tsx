import type { FC } from "react";

import { Crepe } from "@milkdown/crepe";
import { Milkdown, useEditor } from "@milkdown/react";

import "@milkdown/crepe/theme/common/style.css";
import "@milkdown/crepe/theme/frame.css";

const markdown = `# React Router v7 Demo

A demo for using Milkdown with React Router v7.`;

export const MilkdownEditor: FC = () => {
  useEditor((root) => {
    const crepe = new Crepe({
      root,
      defaultValue: markdown,
    });
    return crepe;
  }, []);

  return <Milkdown />;
};
