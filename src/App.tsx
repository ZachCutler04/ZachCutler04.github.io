import React from 'react';
import './App.css';
import '@mantine/core/styles.css';


import { MantineProvider, Text, Stack, Avatar, AppShell, Group, Center, Divider, Anchor } from '@mantine/core' 

export function App() {
  return (
    <MantineProvider>
      <AppShell style={{height: '100%', width: '100%'}}>
      <Center>

        <Stack style={{height: '100%', width: '700px'}} py={'xl'} mx={'xl'} my={'xl'}>
          <Group wrap="nowrap">
            <Stack gap={'xs'}>
              <Avatar style={{width: '50px', height: '50px'}} src={'logo.svg'}/>
              <Text size="xl" fw={800}>Zach Cutler</Text>
              <Text fw={700}>Contact</Text>
              <Text>zach.t.cutler@gmail.com</Text>
              <Anchor href="https://twitter.com/Cutlerzach">Twitter</Anchor>
            </Stack>
            <Text>I’m a first year PhD student at the School of Computing working with Alexander Lex. My current research is focused on making user studies easier to design, run, and analyze. I’ve previously worked mostly on provenance in visualization systems, and helped develop both Trrack and Trrack-Vis</Text>
          </Group>
          <Divider></Divider>
          <Stack>
            <Text size="xl" fw={800}>Publications</Text>

          </Stack>
        </Stack>
        </Center>

      </AppShell>
    </MantineProvider>
  );
}
