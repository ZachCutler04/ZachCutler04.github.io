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
                  and{" "}
                  <Anchor href="https://www.mcnutt.in/">Andrew McNutt</Anchor>{" "}
                  as part of the{" "}
                  <Anchor href="https://vdl.sci.utah.edu/">
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
                link="https://vdl.sci.utah.edu/publications/2025_chi_crowdaloud/"
                name="Crowdsourced Think-Aloud Studies"
                picture="./2025_chi_crowdaloud_teaser.png"
                authors="Zach Cutler, Lane Harrison, Carolina Nobre, Alexander Lex"
                venue="SIGCHI Conference on Human Factors in Computing Systems (CHI), 2025"
              />
              <PublicationCard
                link="https://vdl.sci.utah.edu/publications/2025_chi_guardrails/"
                name="Visualization Guardrails: Designing Interventions Against Cherry-Picking in Interactive Data Explorers"
                picture="./2025_chi_guardrails_teaser.png"
                authors="Maxim Lisnic, Zach Cutler, Marina Kogan, Alexander Lex"
                venue="SIGCHI Conference on Human Factors in Computing Systems (CHI), 2025"
              />
              <PublicationCard
                link="https://vdl.sci.utah.edu/publications/2024_eurovis_persist/"
                name="Persist: Persistent and Reusable Interactions in Computational Notebooks"
                picture="./2024_preprint_persist_teaser.png"
                authors="Kiran Gadhave, Zach Cutler, Alexander Lex"
                venue="Computer Graphics Forum (EuroVis), 2024"
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
