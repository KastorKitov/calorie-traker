import { Text, View, StyleSheet } from 'react-native';
import { Droplet } from 'lucide-react-native';

export default function WaterTraker() {
    return (
        <View style={styles.containerBox}>
            <View style={styles.containerHeader}>
                <Droplet size={20} color="#3ABFF8" />
                <Text style={styles.containerHeaderText}>Quick Add Water</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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