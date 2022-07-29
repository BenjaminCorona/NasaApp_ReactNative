import React, { useState } from 'react';
import {
Button,
Dialog,
CheckBox,
ListItem,
Avatar,
} from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';


const Dialogs =() => {
const [visible1, setVisible1] = useState(false);

const toggleDialog1 = () => {
  setVisible1(!visible1);
};


return (
  <View>
    <View style={styles.buttonContainer}>
      <Button
        title="Open Simple Dialog"
        onPress={toggleDialog1}
        buttonStyle={styles.button}
      />
    </View>
    <Dialog
      isVisible={visible1}
      onBackdropPress={toggleDialog1}
    >
      <Dialog.Title title="Dialog Title"/>
      <Text>Dialog body text. Add relevant information here.</Text>
    
    </Dialog>
  </View>
);
};

const styles = StyleSheet.create({
button: {
  borderRadius: 6,
  width: 220,
  margin: 20,
},
buttonContainer: {
  margin: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
});

export default Dialogs;