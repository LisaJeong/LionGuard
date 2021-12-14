import React from 'react';
import { Icon, Button } from 'react-native-elements'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

export default function ChatPage(props) {
    const { } = props;
    return (

        <SafeAreaView flex='1'>
            <View style={styles.card}>
                <View style={styles.card_header_container}>
                    <Text style={styles.card_caption}>Your Columbia Team:</Text>

                </View>
                <View style={styles.card_header_container} marginTop={8}>
                    <FlatList
                        horizontal={true}
                        data={[
                            { key: 'Temo', like: true, },
                            { key: 'Lisa', like: true, },
                            { key: 'Xinyang', like: true, },
                            { key: 'Andreas', like: true, },
                        ]}
                        renderItem={({ item }) => <Button
                            type='clear'
                            icon={<View alignItems='center'>
                                <Icon
                                    name="user"
                                    type='font-awesome'
                                    size={80}
                                    color='#B9D9EB'
                                    marginHorizontal={16}
                                />
                                <Text style={styles.name_text}>{item.key}</Text>
                            </View>}
                        />
                        }
                    />
                </View>
            </View>
            <View flex='1' style={styles.card}>
                <FlatList
                    flex='1'
                    horizontal={false}
                    data={[
                        { key: 'Temo', message: 'Hi!', },
                        { key: 'Lisa', message: 'Hi, I\'m at the meeting location', },
                        { key: 'Xinyang', message: 'Hello everyone!', },
                        { key: 'Andreas', message: 'Be there in a min!', },
                    ]}
                    renderItem={({ item }) => <View flexDirection='column' style={styles.card_item}>
                        <Text>{item.key}</Text>
                        <View  style={styles.card} flex='1'><Text>{item.message}</Text></View>
                    </View>
                    }
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    card: {
        alignSelf: 'stretch',
        alignItems: 'stretch',
        padding: 8,
        marginHorizontal: 8,
        marginTop: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#afafaf'
    },
    card_item: {
        marginBottom: 16,
    },
    card_header_container: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card_caption: {
        fontSize: 10,
        fontWeight: '400',
        letterSpacing: 0.25,
        color: '#000D74',
    },
    name_text: {
        color: '#000D74',
    },
});
