import React from "react";
import "@mantine/core/styles.css";

import {
  MantineProvider,
  Text,
  Stack,
  Avatar,
  AppShell,
  Group,
  Center,
  Divider,
  Anchor,
} from "@mantine/core";
import { PublicationCard } from "./site/PublicationCard";
import { publications, publicationsJsonLd } from "./publications";

export function App() {
  return (
    <MantineProvider>
      <AppShell style={{ height: "100%", width: "100%" }}>
        <Center>
          <Stack
            style={{ height: "100%", width: "1200px" }}
            py="xl"
            mx="xl"
            my="xl"
          >
            <Group wrap="nowrap" align="stretch">
              <Stack gap="xs">
                <Avatar
                  style={{ width: "200px", height: "200px" }}
                  src="./zach-cutler.jpg"
                  alt="Zach Cutler headshot"
                />
                <Text fw={700}>Contact</Text>
                <Text>zach.t.cutler@gmail.com</Text>
                <Anchor fw={700} href="./zach-cutler-cv.pdf">
                  Curriculum Vitae
                </Anchor>
                <Anchor
                  fw={700}
                  href="https://scholar.google.com/citations?user=1EmG6PMAAAAJ"
                  rel="me"
                >
                  Google Scholar
                </Anchor>
              </Stack>
              <Stack gap="xs" justify="start" align="start">
                <Text component="h1" size="xl" fw={800} style={{ margin: 0 }}>
                  Zach Cutler
                </Text>
                <Text>
                  I’m a fourth year PhD student working with{" "}
                  <Anchor href="https://www.visdesignlab.net/team/lex/">
                    Alexander Lex
                  </Anchor>{" "}
                  and{" "}
                  <Anchor href="https://www.mcnutt.in/">Andrew McNutt</Anchor>{" "}
                  as part of the{" "}
                  <Anchor href="https://www.visdesignlab.net/">
                    Visualization Design Lab
                  </Anchor>{" "}
                  at the University of Utah. My current research is focused on
                  making user studies easier to design, run, and analyze for the
                  visualization community. I am part of a larger team which
                  develops and maintains{" "}
                  <Anchor href="https://revisit.dev">reVISit</Anchor>, our
                  framework for creating user studies. I am also interested in
                  empirical research focusing on visualization literacy, trust
                  in visualization, belief and belief elicitation, and
                  misinformation.
                </Text>
                <Text>
                  I have previously worked on provenance in visualization
                  systems, and helped develop and currently maintain both{" "}
                  <Anchor href="https://www.visdesignlab.net/blog/2020/10/28/trrack/">
                    Trrack
                  </Anchor>{" "}
                  and{" "}
                  <Anchor href="https://www.chromatic.com/library?appId=63ee57592a53ae7413d27e43">
                    Trrack-Vis
                  </Anchor>
                </Text>
              </Stack>
            </Group>
            <Divider />
            <Stack>
              <Text component="h2" size="xl" fw={800} style={{ margin: 0 }}>
                Publications
              </Text>
              {publications.map((p) => (
                <PublicationCard key={p.link} {...p} />
              ))}
              <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(publicationsJsonLd()),
                }}
              />
            </Stack>
          </Stack>
        </Center>
      </AppShell>
    </MantineProvider>
  );
}
