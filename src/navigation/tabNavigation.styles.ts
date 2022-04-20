import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBarOptionsLabelStyle: {
    color: '#1E2f97',
  },
  tabBarOptionsStyle: {
    paddingTop: 10,
    borderTopWidth: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6.27,
    position: 'absolute',
    backgroundColor: 'white',
    borderTopColor: 'grey',
  },
  tabBarLabelStyle: {
    color: '#1E2f97',
  },
  tabBarOptionsTabStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  userInactivityContainer: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: '#1E2f97',
  },
});

export default styles;
