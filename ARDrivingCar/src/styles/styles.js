import { StyleSheet } from 'react-native'
import colors from './colors'

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.grey,
  },
  outer: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    width: '95%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageBackground: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
  },
  textStyle: {
    fontFamily: 'Arial',
    fontWeight: "bold",
    fontSize: 12,
    color: colors.purple,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default styles;