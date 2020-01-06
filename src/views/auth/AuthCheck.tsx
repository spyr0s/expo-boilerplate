import React from 'react';
import { connect } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import Container from 'app/app/components/containers/Container';
import i18n from 'i18n-js';
import Text from 'components/elements/Text';
import { Appearance } from 'react-native-appearance';
import { ThemeConsumer, Button } from 'react-native-elements';
import { light, dark } from 'app/app/styles/themes';

export interface AuthCheckNavParams {}
export interface AuthCheckProps {}

interface StateProps {}

interface DispatchProps {}

interface State {}

type Props = AuthCheckProps &
    StateProps &
    DispatchProps &
    NavigationStackScreenProps<AuthCheckNavParams>;

class AuthCheck extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Text>{i18n.t('AUTH_CHECK')}</Text>
                <ThemeConsumer>
                    {({ replaceTheme }) => (
                        <Button
                            title={i18n.t('CHANGE_THEME')}
                            onPress={() => {
                                const scheme = Appearance.getColorScheme();
                                Appearance.set({
                                    colorScheme:
                                        scheme === 'dark' ? 'light' : 'dark'
                                });
                                replaceTheme({
                                    colors: scheme === 'dark' ? light : dark
                                });
                            }}
                        />
                    )}
                </ThemeConsumer>
            </Container>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthCheck);
