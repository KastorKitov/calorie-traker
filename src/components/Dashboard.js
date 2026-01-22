import {StyleSheet, Text, View, ScrollView } from 'react-native';
import {Flame, Droplet, TrendingUp, Coffee, Sun, Moon, Apple, Activity } from 'lucide-react-native';
import WaterTraker from './WaterTraker';
import Header from './Header';

export default function Dashboard() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Header/>
            {/* Navigation */}
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Daily Calories */}
                <View style={styles.containerBox}>
                    <View style={styles.containerHeader}>
                        <Flame size={20} color="#FF6B35" />
                        <Text style={styles.containerHeaderText}>Daily Calories</Text>
                    </View>
                </View>
                {/* Protein */}
                <View style={styles.containerBox}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.containerHeaderText}>Protein</Text>
                    </View>
                </View>
                {/* Carbs */}
                <View style={styles.containerBox}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.containerHeaderText}>Carbs</Text>
                    </View>
                </View>
                {/* Fats */}
                <View style={styles.containerBox}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.containerHeaderText}>Fats</Text>
                    </View>
                </View>
                {/* Water Intake */}
                <View style={styles.containerBox}>
                    <View style={styles.containerHeader}>
                        <Droplet size={20} color="#3ABFF8" />
                        <Text style={styles.containerHeaderText}>Water Intake</Text>
                    </View>
                </View>
                {/* Current Weight */}
                <View style={styles.containerBox}>
                    <View style={styles.containerHeader}>
                        <TrendingUp size={20} color="#b31e9f" />
                        <Text style={styles.containerHeaderText}>Current Weight</Text>
                    </View>
                </View>
                {/* Quick Add Water */}
                <WaterTraker />
                {/* Meals */}
                <View style={{ width: '90%' }}>
                    <View style={{ alignSelf: 'flex-start' }}>
                        <Text style={styles.containerHeaderText}>Meals</Text>
                    </View>
                </View>
                {/* Breakfast */}
                <View style={styles.containerBox}>
                    <View style={styles.containerHeader}>
                        <Coffee size={20} />
                        <Text style={styles.containerHeaderText}>Breakfast</Text>
                    </View>
                </View>
                {/* Lunch */}
                <View style={styles.containerBox}>
                    <View style={styles.containerHeader}>
                        <Sun size={20} />
                        <Text style={styles.containerHeaderText}>Lunch</Text>
                    </View>
                </View>
                {/* Dinner */}
                <View style={styles.containerBox}>
                    <View style={styles.containerHeader}>
                        <Moon size={20} />
                        <Text style={styles.containerHeaderText}>Dinner</Text>
                    </View>
                </View>
                {/* Snacks */}
                <View style={styles.containerBox}>
                    <View style={styles.containerHeader}>
                        <Apple size={20} />
                        <Text style={styles.containerHeaderText}>Snacks</Text>
                    </View>
                </View>
                {/* Exercise */}
                <View style={styles.containerBox}>
                    <View style={styles.containerHeader}>
                        <Activity size={20} color="#34A853" />
                        <Text style={styles.containerHeaderText}>Exercise</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfc',
        alignItems: 'center',
    },
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
    containerBox: {
        width: '90%',
        height: 150,
        backgroundColor: '#ffffff',
        marginVertical: 14,
        borderColor: '#cacaca',
        borderWidth: 1,
        borderRadius: 14
    },
    containerHeader: {
        borderBottomColor: '#aaaaaa',
        paddingTop: 20,
        paddingBottom: 50,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    containerHeaderText: {
        fontSize: 18,
        fontWeight: '500',
    },
});
