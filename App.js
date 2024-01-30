import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Text,
  View,
  Button,
  
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//importacion del icono
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
//importacion de componenetes
import { ModalPop } from "./src/Componentes/ModalPop";
import  CustomButton  from "./src/Componentes/Button";
import ModalComponent from './src/Componentes/Modal';

//importaciones de las panatallas
import CupSave from './screens/cupSave';
import CupInfo from './screens/cupInfo';



const Stack = createStackNavigator();
const popUplist = [
  {
    id: 1,
    name: "Big Mac",
  },
  {
    id: 2,
    name: "Triple hamburguesa con queso",
  },
  {
    id: 3,
    name: "Mc Nuggets",
  },
];
const popUplist2 = [
  {
    id: 1,
    name: "Whopper con queso",
  },
  {
    id: 2,
    name: "Doble Texas",
  },
  {
    id: 3,
    name: "Chiken TENDERCRISP",
  },
];

export default function App() {
  // constante del boton Lógica de manejo de envío
  const handleSubmit = () => {
    
  };
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cuppo" component={InicioScreen} />
        <Stack.Screen name="Guardados" component={CupSave} />
        <Stack.Screen name="Informacion" component={CupInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

let popupRef1 = React.createRef();
  let popupRef2 = React.createRef();

  const onShowPopup = () => {
    popupRef1.current.show();
  };
  const onClosePopup = () => {
    popupRef1.current.close();
  };

  const onShowPopup2 = () => {
    popupRef2.current.show();
  };
  const onClosePopup2 = () => {
    popupRef2.current.close();
  };

function InicioScreen({ navigation }) {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
    setShowModal(!showModal); }

  return (
    <View style={styles.container}>
      <View style={styles.contTitle}>
        <Text style={styles.title}>Cuppo</Text>
      </View>
      <View style={styles.contBody}>

        {<View style={styles.contElement}>
        
          <Text style={styles.txtCont}>McDonald</Text>
            <TouchableWithoutFeedback onPress={toggleModal}> 
            <FontAwesome5 name="bookmark" style={styles.bookmarkIcon} />
            </TouchableWithoutFeedback> 
            <ModalComponent visible={showModal} onClose={toggleModal} />

          </View>}

          <View style={styles.contElement}>
        
          <Text style={styles.txtCont}>Papa Jhon's</Text>
            <TouchableWithoutFeedback onPress={toggleModal}> 
            <FontAwesome5 name="bookmark" style={styles.bookmarkIcon} />
            </TouchableWithoutFeedback> 
            <ModalComponent visible={showModal} onClose={toggleModal} />

          </View>

        {
        <View style={styles.contElement}>
          <Text style={styles.txtCont}>Burger King</Text>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={styles.safe}>
            <TouchableWithoutFeedback onPress={onShowPopup2}>
              <FontAwesome5 name="bookmark" style={styles.bookmarkIcon} />
            </TouchableWithoutFeedback>
            <ModalPop
              title="Decreto del rey"
              ref={popupRef2}
              onTouchOutside={onClosePopup2}
              data={popUplist2}
            />
          </SafeAreaView>
        </View> }
      </View>

      <View style={styles.contbtn}>
        <CustomButton txt="Ver guardados" onClick={() => navigation.navigate('Guardados')} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  //contenedor principal
  container: {
    flex: 1,
    marginTop: 40,
    marginBottom: 40,
    // backgroundColor: "#fff",
    justifyContent: "space-around",
  },
  //contenido "Header"
  contTitle: {
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  //contenido "Body"
  contBody: {
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  contElement: {
    padding: 10,
    backgroundColor: "#eaeaea",
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "between",
    marginBottom: 20,
  },
  bookmarkIcon: {
    fontSize: 40,
    padding: 4,
  },
  txtCont: {
    fontSize: 30,
    padding: 4,
  },
  //contenido "Footer"

  contbtn: {
    alignItems: "center",
  },
});
