import {
  Group,
  NavLink,
  Switch,
  rem,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { MouseEvent } from "react";
import { menuItems } from "./menuItems";

const yOffset = -60;

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

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
      <Switch
        aria-label="Toggle dark mode"
        size="md"
        onLabel={moonIcon}
        offLabel={sunIcon}
        checked={colorScheme === "dark"}
        onChange={toggleColorScheme}
      />
    </Group>
  );
}
