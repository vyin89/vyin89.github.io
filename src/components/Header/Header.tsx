import {
  ActionIcon,
  Group,
  NavLink,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { MouseEvent } from "react";
import { menuItems } from "./menuItems";

const yOffset = -60;

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const scrollToSection = (sectionId: string) => (event: MouseEvent) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Group
      justify="space-between"
      align="center"
      style={{ padding: "10px 16px" }}
    >
      <Group>
        {menuItems.map((item) => (
          <div key={item.label}>
            <NavLink
              href={`#${item.href}`}
              onClick={scrollToSection(item.href)}
              label={item.label}
              style={{ borderRadius: 6 }}
            />
          </div>
        ))}
      </Group>
      <ActionIcon
        aria-label="toggle dark mode"
        variant="subtle"
        onClick={toggleColorScheme}
        size={24}
      >
        {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
      </ActionIcon>
    </Group>
  );
}
