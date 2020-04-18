import React from 'react';
import HeaderIcon from './HeaderIcon';

export interface CloseProps {
    onPress: () => void;
}

type Props = CloseProps;
const Close = ({ onPress }: Props) => {
    return <HeaderIcon name="x" onPress={onPress} />;
};

export default Close;
