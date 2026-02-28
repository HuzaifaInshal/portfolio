"use client";

import { useTheme } from "next-themes";
import ActionItem from "@/components/action-item.component";

const ThemeSwitcher = () => {
    const { theme, setTheme, systemTheme } = useTheme();

    const effectiveTheme = theme === "system" ? systemTheme : theme;

    const toggleTheme = () => {
        setTheme(effectiveTheme === "dark" ? "light" : "dark");
    };

    const toggleText = effectiveTheme === "dark" ? "Light Mode" : "Dark Mode";

    return (
        <ActionItem
            title="Switch to"
            onClick={{ click: toggleTheme, text: toggleText }}
        />
    );
};

export default ThemeSwitcher;
