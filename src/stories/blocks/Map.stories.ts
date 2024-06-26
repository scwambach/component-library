import { Map as MapItem } from '@components/blocks'
import type { Meta, StoryObj } from '@storybook/react'
import mapStyle from '../../utils/mapStyles'

const meta: Meta<typeof MapItem> = {
  title: 'Components/Blocks',
  component: MapItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MapItem>

export const Map: Story = {
  args: {
    mapStyle,
    googleMapsApiKey: 'AIzaSyCWdtdxYMqxuFjeCYJ9Fe1mAIL3KdPybg8',
    markers: [
      {
        lat: 37.963211,
        lng: -87.56678,
      },
      {
        lat: 37.961391,
        lng: -87.565758,
      },
    ],
  },
}
