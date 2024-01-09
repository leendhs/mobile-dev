import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform, Button, StatusBar } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-ico-material-design';


const iconSize = 30;

const ContactScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date'); //om te veranderen tussen time mode and date mode
  const [show, setShow] = useState(false); //toon de box of niet
  const [text, setText] = useState('Choose date');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date; //als er geen geselecteerde datum is, is de default de current date 
    setShow(Platform.OS === 'ios');
    setDate(currentDate); // update de date naar de geselecteerde date 

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate()+ '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear(); //januari is 0 dus +1 
    let fTime = 'Hours:' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime)

  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode); //toon wat de user heeft aangeduid (time of date)
  }

return(
<View style={styles.screen}> 
    <View style={styles.bigContainer}>
        <Text style={styles.title}>Openinghours</Text>
        <View style={styles.container}>
            <Text>Monday: 9 am - 5pm</Text>
        </View>
        <View style={styles.container}>
            <Text>Tuesday: 9 am - 5pm</Text>
        </View>
        <View style={styles.container}>
            <Text>Wednesday: 9 am - 5pm</Text>
        </View>
        <View style={styles.container}>
            <Text>THursday: 9 am - 5pm</Text>
        </View>
        <View style={styles.container}>
            <Text>Friday: 9 am - 5pm</Text>
        </View>
        <View style={styles.container}>
            <Text>Saturday: 10 am - 5pm</Text>
        </View>
        <View style={styles.container}>
            <Text>Sunday: Closed</Text>
        </View>
    </View>


<View style={styles.calender}>
  <Text style={styles.text}>Book a consultation:</Text>

  <Text style={styles.text}>{text}</Text>
  
  <View style={styles.date}>
  <View style={{margin:20}}>
  <Button title='DatePicker' onPress={() => showMode('date')}></Button>
  </View>
  <View style={{margin:20}}>
  <Button title='TimePicker' onPress={() => showMode('time')}></Button>
  </View>
  </View>

  {show && ( //datetimepicker wordt enkel gerenderd als show true is
    <DateTimePicker
    testID='dateTimePicker'
    value={date}
    mode={mode}
    is24Hour={true}
    display='default'
    onChange={onChange}
    />)}


  <StatusBar style="auto"/>
</View>

<View style={styles.nav}>
      <Icon name="home-button" size={iconSize} color="#264731" onPress={() => navigation.navigate('Home')} />
      <Icon name="filter-results-button" size={iconSize} color="#264731" onPress={() => navigation.navigate('Furniture')} />
      <Icon name="favorite-heart-button" size={iconSize} color="#264731" onPress={() => navigation.navigate('Favorites')} />
      <Icon name="phone-call-button" size={iconSize} color="#264731" onPress={() => navigation.navigate('Contact')} />
    </View>
</View>
);

};


const styles = StyleSheet.create({
   screen: {
    flex: 1,
    justifyContent: 'space-evenly'
   } ,
  
  title: {
      fontSize: 24,
      color: "#264731",
      fontWeight: "bold",
      textTransform: "uppercase",
      marginBottom: 8,
      textAlign: "center"
    },
  
  bigContainer: {
    padding: 24,
    backgroundColor: "#F8F6F6",
  },
  
  container: {
    borderWidth: 1,
    borderColor: "#264731",
    borderRadius: 10,
    padding: 10,
    marginVertical: 4,
  },

  nav: {
    flexDirection: "row", 
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF",
  },

  text: {
    marginLeft: 30,
    fontWeight:'bold', 
    fontSize: 20, 
    color: "#264731",
  },

  date: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }, 

  nav: {
    flexDirection: 'row',
    backgroundColor: '#a2bdab',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 40,
    height: 50,
  }, 

  IconBehave: {
    flex: 1,
    padding: 14, 
  }
  
  });
  
  export default ContactScreen;
  
  
  
  