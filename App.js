import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Dashboard from './src/components/Dashboard';
import Header from './src/components/Header';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.container}>
          {/* Header */}
          <Header />
          <Dashboard />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
  },
});
