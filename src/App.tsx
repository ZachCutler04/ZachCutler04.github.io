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
            <Group wrap="nowrap">
              <Stack gap="xs">
                <Avatar
                  style={{ width: "100px", height: "100px" }}
                  src="./zcutler.jpg"
                />
                <Text fw={700}>Contact</Text>
                <Text>zach.t.cutler@gmail.com</Text>
                <Anchor fw={700} href="./phdAppsResume.pdf">
                  Curriculum Vitae
                </Anchor>
                <Anchor href="https://twitter.com/Cutlerzach">Twitter</Anchor>
              </Stack>
              <Stack gap="xs">
                <Text size="xl" fw={800}>
                  Zach Cutler
                </Text>
                <Text>
                  I’m a third year PhD student working with{" "}
                  <Anchor href="https://vdl.sci.utah.edu/team/lex/">
                    Alexander Lex
                  </Anchor>{" "}
                  as part of the{" "}
                  <Anchor href="https://vdl.sci.utah.edu/">
                    Visualization Design Lab
                  </Anchor>{" "}
                  at the University of Utah. My current research is focused on
                  making user studies easier to design, run, and analyze. I’ve
                  previously worked mostly on provenance in visualization
                  systems, and helped develop both{" "}
                  <Anchor href="https://vdl.sci.utah.edu/blog/2020/10/28/trrack/">
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
              <Text size="xl" fw={800}>
                Publications
              </Text>
              <PublicationCard
                link="https://vdl.sci.utah.edu/publications/2022_eurovis_reusing_workflows/"
                name="Reusing Interactive Analysis Workflows"
                picture="./2022_eurovis_reusing_intent.png"
                authors="Kiran Gadhave, Zach Cutler, Alexander Lex"
                venue="Computer Graphics Forum (EuroVis), 2022"
              />
              <PublicationCard
                link="https://vdl.sci.utah.edu/publications/2022_eurovis_reusing_workflows/"
                name="Reusing Interactive Analysis Workflows"
                picture="./2022_eurovis_reusing_intent.png"
                authors="Kiran Gadhave, Zach Cutler, Alexander Lex"
                venue="Computer Graphics Forum (EuroVis), 2022"
              />
              <PublicationCard
                link="https://vdl.sci.utah.edu/publications/2022_eurovis_reusing_workflows/"
                name="Reusing Interactive Analysis Workflows"
                picture="./2022_eurovis_reusing_intent.png"
                authors="Kiran Gadhave, Zach Cutler, Alexander Lex"
                venue="Computer Graphics Forum (EuroVis), 2022"
              />
              <PublicationCard
                link="https://vdl.sci.utah.edu/publications/2022_eurovis_reusing_workflows/"
                name="Reusing Interactive Analysis Workflows"
                picture="./2022_eurovis_reusing_intent.png"
                authors="Kiran Gadhave, Zach Cutler, Alexander Lex"
                venue="Computer Graphics Forum (EuroVis), 2022"
              />
              <PublicationCard
                link="https://vdl.sci.utah.edu/publications/2022_eurovis_reusing_workflows/"
                name="Reusing Interactive Analysis Workflows"
                picture="./2022_eurovis_reusing_intent.png"
                authors="Kiran Gadhave, Zach Cutler, Alexander Lex"
                venue="Computer Graphics Forum (EuroVis), 2022"
              />
              <PublicationCard
                link="https://vdl.sci.utah.edu/publications/2021_ivi_intent/"
                name="Predicting Intent Behind Selections in Scatterplot Visualizations"
                picture="./2021_ivi_intent_teaser.png"
                authors="Kiran Gadhave, Jochen Görtler, Zach Cutler, Carolina Nobre, Oliver Deussen, Miriah Meyer, Jeff Phillips, Alexander Lex"
                venue="Information Visualization, 2021"
              />{" "}
              <PublicationCard
                link="https://vdl.sci.utah.edu/publications/2021_chi_revisit/"
                name="reVISit: Looking Under the Hood of Interactive Visualization Studies"
                picture="./2021_chi_revisit_teaser.png"
                authors="Carolina Nobre, Dylan Wootton, Zach Cutler, Lane Harrison, Hanspeter Pfister, Alexander Lex"
                venue="SIGCHI Conference on Human Factors in Computing Systems (CHI), 2021"
              />{" "}
              <PublicationCard
                link="https://vdl.sci.utah.edu/publications/2020_visshort_trrack/"
                name="Trrack: A Library for Provenance-Tracking in Web-Based Visualizations"
                picture="./2020-10_infovis_trrack_teaser.png"
                authors="Zach Cutler, Kiran Gadhave, Alexander Lex"
                venue="IEEE Visualization Conference (VIS), 2020"
              />
            </Stack>
          </Stack>
        </Center>
      </AppShell>
    </MantineProvider>
  );
}
