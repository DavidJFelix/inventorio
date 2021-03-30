import * as React from 'react'
import {Box, Center, Flex, Heading} from '@chakra-ui/react'

export interface AppShellProps {
  children?: React.ReactNode
}

export function AppShell({children}: AppShellProps) {
  return (
    <Flex direction="column">
      <Center backgroundColor="red.300">
        <Flex alignItems="center" height={16} width={['6xl']}>
          <Heading marginLeft={8} color="white">
            Inventurey
          </Heading>
        </Flex>
      </Center>
      <Box>{children}</Box>
    </Flex>
  )
}
