import type { ReactNode } from "react";
import "../pages/All.css";

export type RandomComponentItem = {
  id: number;
  name: string;
  preview: ReactNode;
  html: string;
  css: string;
};

export const randomComponents: RandomComponentItem[] = [
  {
    id: 4233,
    name: "Gradient Badge",
    preview: <span className="random-component-4233">New Feature</span>,
    html: `<span class="RandomBadge">New Feature</span>`,
    css: `.RandomBadge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 999px;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    transition: transform 0.2s ease;
}
.RandomBadge:hover {
    transform: translateY(-3px);
}`,
  },
];
