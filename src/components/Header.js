import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Scale, Settings } from 'lucide-react-native';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>CalorieTraker</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => alert('Weight pressed')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
                            <Scale size={16} color="black" />
                            <Text style={styles.buttonText}>Weight</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => alert('Goals pressed')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
                            <Settings size={16} color="black" />
                            <Text style={styles.buttonText}>Goals</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 12,
        paddingTop: 12,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#aaaaaa',
        backgroundColor: '#ffffff',
    },
    headerTextContainer: {
        flex: 1,
    },
    headerText: {
        fontSize: 26,
        fontWeight: '600',
        textAlign: 'center',
    },
        buttonsContainer: {
        flex: 1.1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonContainer: {
        borderWidth: 0.5,
        borderColor: '#aaaaaa',
        borderRadius: 12,
        paddingVertical: 5,
        width: 95,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
    },
});