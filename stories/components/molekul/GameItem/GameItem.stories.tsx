import { Meta } from '@storybook/react';
import GameItem, { GameItemProps } from '../../../../components/molekul/GameItem';

export default {
	title: 'Components/Molekul/GameItem',
	component: GameItem,
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});

Default.args = {
	title: 'Mobile Legends',
	category: 'Mobile',
	thumbnail: '/img/Thumbnail-1.png',
};
