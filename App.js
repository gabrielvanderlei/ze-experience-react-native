console.disableYellowBox = true;
import React, {Component} from 'react';
import { Vibration} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

const LOCATION_TASK_NAME = 'background-location-task';
const Stack = createStackNavigator();
let self;

import Home from './src/screens/Home';
import QrCode from './src/screens/QrCode';
import ChatBot from './src/screens/ChatBot';
import ZeClub from './src/screens/ZeClub';

export default class App extends Component  {

  constructor(props){
    super(props)
    this.state = {
      expoPushToken: '',
      notification: {},
      navigation: props.navigation,
      locations: [
        {
          name: 'Bar do urso',
          latitude: -8.288645,
          longitude: -35.028713
        },
        {
          name: 'Shopping Boa Vista',
          latitude: -8.059323,
          longitude: -34.887795
        },
        {
          name: 'Ilha de Santorini',
          latitude: -8.096825,
          longitude: -34.914110
        }
      ]
    };

    self = this;

  }
  
  arePointsNear(checkPoint, centerPoint, km) {
    console.log('checkPoint:',checkPoint)
    console.log('centerPoint:',centerPoint)
    let ky = 40000 / 360;
    let kx = Math.cos(Math.PI * centerPoint.latitude / 180.0) * ky;
    let dx = Math.abs(centerPoint.longitude - checkPoint.longitude) * kx;
    let dy = Math.abs(centerPoint.latitude - checkPoint.latitude) * ky;
    console.log('DIST: ', Math.sqrt(dx * dx + dy * dy))
    return Math.sqrt(dx * dx + dy * dy) <= km;
  }

  requestlocationPermission = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status === 'granted') {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
      });
    }
  };
  

  registerTaskAsync = async () => {
    if (TaskManager.isTaskDefined(LOCATION_TASK_NAME)) {
      console.log('TaskManager ok')
    }

    await BackgroundFetch.registerTaskAsync(LOCATION_TASK_NAME, {minimumInterval:180});
    console.log('task registered');
  };

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  componentDidMount() {

    this.requestlocationPermission()

    TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
      try {
        const { locations } = data;
        const receivedNewData = locations;
        // alert(receivedNewData)
        console.log('locations:', receivedNewData)
        
        this.state.locations.forEach( e => {
            if(self.arePointsNear(locations[0].coords,e, 0.200)){
              self.sendPushNotification(e);
              global.estabelecimento = e.name;
              if(global.estabelecimento === 'Bar do urso'){
                global.conectado = 1;
              }
              else{
                global.conectado = 2;
              }
            }
          } 
        )

        return receivedNewData ? BackgroundFetch.Result.NewData : BackgroundFetch.Result.NoData;
      } catch (error) {
        return BackgroundFetch.Result.Failed;
      }
    });

    this.registerForPushNotificationsAsync();
    this.registerTaskAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = notification => {
    Vibration.vibrate();
    // console.log(notification);
    this.setState({ notification: notification });
  };

   // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
   sendPushNotification = async (bar) => {
    //  console.log(latitude,longitude)
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: 'Estabelecimento parceiro próximo',
      body: `Quer dar uma passada no ${bar.name}?`,
      data: { data: 'goes here' },
      _displayInForeground: true,
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };


  render() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ChatBot" component={ChatBot}/>
            <Stack.Screen name="ZeClub" component={ZeClub} />
            <Stack.Screen name="QrCode" component={QrCode}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}