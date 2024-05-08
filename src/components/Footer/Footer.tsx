import { ActionIcon, Flex } from "@mantine/core";
import { IconCircleArrowUp } from "@tabler/icons-react";

export function Footer() {
  return (
    <Flex direction="row" justify="flex-end">
      <ActionIcon
        variant="light"
        size="xl"
        aria-label="Back to top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <IconCircleArrowUp stroke={1.5} />
      </ActionIcon>
    </Flex>
  );
}
