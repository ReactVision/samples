import { StyleSheet } from 'react-native'
import colors from './colors'

const styles = StyleSheet.create({
  outerContainer : {
    flex : 1,
    flexDirection : 'column',
  },
  titleText : {
    color : colors.white,
    fontSize : 20,
    fontWeight : '400',
    textAlign : 'center',
    fontFamily : 'BebasNeue-Regular',
  },
  instructionText : {
    color : colors.white,
    fontSize : 18,
    textAlign : 'center',
    fontFamily : 'BebasNeue-Regular',
  },
  readyContainer : {
    position : 'absolute',
    height : 170,
    width : '100%',
    bottom : 0,
    left : 0,
    justifyContent : 'center',
    alignItems : 'center',
  },
  exitButton : {
    position: 'absolute',
    // Use padding vs "top"/"left" so that the entire zone is tappable
    paddingLeft : 15,
    paddingTop : 27,
  },
  exitImage : {
    height: 21,
    width: 21,
    resizeMode : 'stretch',
  },
  joystickContainer : {
    position : 'absolute',
    height: 130,
    width: 200,
    marginBottom: 10,
    marginLeft : 5,
    bottom : 10, 
    left : 10,
  },
  joystickTouchArea : {
    position : 'absolute',
    height: 130,
    width: 200,
    // Android needs a background color on views or it won't be touchable
    backgroundColor : colors.transparent,
  },
  resetButton : {
    position : 'absolute',
    width : 30,
    height : 30,
    right : 15,
    top : 24,
  },
  resetImage : {
    width : 30,
    height : 30,
    resizeMode : 'contain',
  },
  directionText : {
    position : 'absolute',
    top : 50,
    color: colors.white,
    textAlign:'center',
    fontSize : 20
  },
  drivingButtonsContainer : {
    position : 'absolute',
    flexDirection : 'row',
    bottom : 25,
    right : 10,
    width : 150,
    justifyContent: 'space-between',
    alignItems : 'center',
  },
  drivingButton : {
    height: 70,
    width: 70,
    marginTop: 10,
    marginBottom: 10,
    marginLeft : 5,
    marginRight : 5,
  },
  pedalImage : {
    position : 'absolute',
    height : 70,
    width : 70,
  },
  pedalTouchArea : {
    position : 'absolute',
    height : 70,
    width : 70,
    // Android needs a background color on views or it won't be touchable
    backgroundColor : colors.transparent,
  },
  buttonText: {
    color: colors.button,
    textAlign:'center',
    fontSize : 20
  },
  touchText : {
    position : 'absolute',
    top : 10,
    left : 0,
    color: colors.white,
    textAlign:'center',
    fontSize : 20
  },
  attributionOverlay : {
    position : 'absolute',
    width : '100%',
    height : '100%',
    backgroundColor : colors.black,
    justifyContent : 'center',
    alignItems : 'center',
  },
  attributionMovieLogoContainer : {
    position : 'absolute',
    top : 100,
    flexDirection : 'column',
  },
  attributionMovieLogo : {
    width : 300,
    height : 75,
    resizeMode : 'contain',
    marginBottom : 15,
  },
  attributionLoadingContainer : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
  },
  attributionViroLogo : {
    position : 'absolute',
    bottom : 30,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 60,
    resizeMode : 'contain',
  },
});

export default styles;