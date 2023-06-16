import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react/src'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Teste de elemento box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
