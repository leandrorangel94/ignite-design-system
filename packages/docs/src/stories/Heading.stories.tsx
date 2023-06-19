import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react/src'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: '',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o Heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
