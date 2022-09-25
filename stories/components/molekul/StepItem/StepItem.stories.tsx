import { Meta } from '@storybook/react';
import StepItems, { StepItemProps } from '../../../../components/molekul/StepItems';
export default {
	title: 'Components/Molekul/StepItems',
	component: StepItems,
} as Meta;

const Template = (args: StepItemProps) => <StepItems {...args} />;

export const Default = Template.bind({});

Default.args = {
	icon: 'step1',
	title: '1. Start',
	desc1: 'Pilih salah satu game',
	desc2: 'yang ingin kamu top up',
};
