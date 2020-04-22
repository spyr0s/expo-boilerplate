import React from 'react';
import { ButtonProps, Button, ThemeConsumer } from 'react-native-elements';
import { Theme } from 'styles/themes';

export interface ClearButtonProps extends ButtonProps {}

const ClearButton = (props: ClearButtonProps) => {
    const backgroundColor = 'transparent';
    const { buttonStyle, titleStyle } = props;
    return (
        <ThemeConsumer<Theme>>
            {({ theme: { colors } }) => {
                return (
                    <Button
                        {...props}
                        titleStyle={[{ color: colors.primary }, titleStyle]}
                        buttonStyle={[
                            {
                                backgroundColor
                            },
                            buttonStyle
                        ]}
                    />
                );
            }}
        </ThemeConsumer>
    );
};

export default React.memo(ClearButton);
