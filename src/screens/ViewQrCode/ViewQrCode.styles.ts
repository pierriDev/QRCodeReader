import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataTitle: {
    fontSize: 24,
    color: '#1E2f97',
  },
  noDataSubTitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 24,
  },
  dataContainer: {
    paddingVertical: 24,
    width: '100%',
    paddingHorizontal: 12,
  },
  dataBox: {
    padding: 24,
    borderBottomWidth: 1,
    borderColor: 'black',
    marginTop: 12,
  },
  dataTitle: {
    fontSize: 16,
    color: '#1E2f97',
    textAlign: 'center',
  },
});

export default styles;
