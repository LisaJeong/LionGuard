import * as React from 'react';
import { View } from 'react-native';
import { ThemeProvider, Button, Text, Input } from 'react-native-elements'
import { Radio } from "native-base"
import ProfileStepper from './ProfileStepper';

const theme = {
    Button: {
        type: "outline",
        titleStyle: {
            color: "#000D74",
        },
        buttonStyle: {
            borderColor: '#000D74',
            backgroundColor: "alpha(0,0,0,255)",
            flex: 1,
            width: "30vw",
            maxWidth: "300px"
        }
    },
    Radio: {
        flex: 1,
        border: "1em red solid"
    }
};

const GenderRadios = () => {
    const [value, setValue] = React.useState("female")
    const [status, setStatus] = React.useState(0)
    const radioHandler = (status) => {
        setStatus(status);
    };
    return (
        <Radio.Group
            name="genderRadioGroup"
            accessibilityLabel="your gender"
            value={value}
            onChange={(nextValue) => {
                setValue(nextValue)
            }}
            style={{
                justifyContent: "space-between"
            }}
        >
            <Radio value="female" my={5} onClick={(e) => radioHandler(0)} >
                Female
            </Radio>
            <Radio value="male" my={5} onClick={(e) => radioHandler(0)}>
                Male
            </Radio>
            <Radio value="custom" my={5} onClick={(e) => radioHandler(1)}>
                <Input placeholder="custom" />
            </Radio>

        </Radio.Group>
    )
}

export default function ProfileMagic(props) {
    const { navigation } = props;
    return (
        <ThemeProvider theme={theme}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: "3em" }}>

                <ProfileStepper step={props.step} />

                <View style={{ flex: 10 }}>
                    {props.children}
                </View>

                <View style={{ flex: 2 }}>
                    <Text style={{ fontWeight: 'bold' }}>Why do you need to share this information?</Text>
                    <Text style={{ color: 'green' }}>Our users generally feel more comfortable knowing more about their walking companions!</Text>
                </View>
                <View style={{ width: "100%", flex: 2, alignItems: 'center', justifyContent: "space-evenly", flexDirection: "row" }}>
                    <Button
                        title="Back"
                        disabled={props.back ? false : true}
                        onPress={props.back ? (() => navigation.navigate(props.back)) : null}
                    />
                    <Button
                        title="Next"
                        disabled={props.next ? false : true}
                        onPress={props.next ? (() => navigation.navigate(props.next)) : null}
                    />
                </View>
            </View>
        </ThemeProvider>
    );
}