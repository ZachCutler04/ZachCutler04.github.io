import React from "react";
import "@mantine/core/styles.css";
import { IconStarFilled } from "@tabler/icons-react";

import {
  MantineProvider,
  Text,
  Stack,
  Avatar,
  AppShell,
  Image,
  Group,
  Center,
  Divider,
  Card,
  Anchor,
  Highlight,
} from "@mantine/core";

export function PublicationCard({
  name,
  picture,
  link,
  authors,
  venue,
  award,
}: {
  name: string;
  picture: string;
  link: string;
  authors: string;
  venue: string;
  award?: string;
}) {
  return (
    <Group wrap="nowrap" align="start">
      <Card shadow="lg" style={{ width: "20%" }}>
        <Image src={picture} />
      </Card>

      <Stack gap="5">
        <Anchor href={link} fw={700}>
          {name}
        </Anchor>
        <Highlight
          size="sm"
          highlight={["Zach Cutler"]}
          highlightStyles={{
            backgroundColor: "var(--mantine-color-blue-6)",
            fontWeight: 900,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {authors}
        </Highlight>
        <Text size="sm">{venue}</Text>
        {award && (
          <Text size="sm" c="orange">
            <IconStarFilled size={12} /> {award}
          </Text>
        )}
      </Stack>
    </Group>
  );
}
