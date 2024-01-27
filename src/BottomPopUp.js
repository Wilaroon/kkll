import {
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import React from "react";

const deviceHeight = Dimensions.get("window").height;

export class BottomPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  show = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };
  renderOutsideTouchable(onTouch) {
    const view = <View style={{ flex: 1, width: "100%",}} />;

    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: "100%" }}
      >
        {view}
      </TouchableWithoutFeedback>
    );
  }
  renderTitle = () =>{
      const {title} = this.props
      return(

        <View style ={{alignItems:"center"}}>
              <Text //texto dentro del pop
                 style={{
                  color: "#182E44",
                  fontSize: 25,
                  fontWeight: "500",
                  margin: 15,
                  marginBottom:30,
                }}
              >
                {title}
              </Text>
            </View>
      )
  }
  renderContent = ( ) => {
    const {data} = this.props
    
    return (
        <View>
          <FlatList 
            style = {{marginBottom: 20}}
                      showsVercticalScrollIndicator={false}
                      data = {data}
                      renderItem = {this.renderItem}
                      extraData={data}
                      keyExtractoe={(item, index) => index.toSting()}
                      ItemSeparatorComponent={this.renderSeparator}
                      contentContainerStyle={{
                          paddingBottom: 40
                      }} 
           />
        </View>
    )
  }
  
 
  renderItem = ({item}) => {
    return(
      <View style={{
        height:50,
        flex: 1,
        alignItems:"flex-start",
        justifyContent:"center",
        marginLeft: 20,

      }}>
          <Text style={{fontSize:18, fontWeight: "normal", color:"#182E44",}}> {item.name} </Text>
      </View>
    )

  }
  renderSeparator = () => {
   return(
    <View style={{
      opacity: 0.1,
      backgroundColor: "#182E44",
      height:1,
    }}>
    </View>
    
   )
  }
  

  render() {
    let { show } = this.state;
    const { onTouchOutside, title } = this.props;

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={show}
        onRequestClose={this.close}
      >
        <View
         style={{
          flex: 1,
          backgroundColor: "#000000AA",
          justifyContent: "flex-end",
          //alignItems: "center", // Añadido para centrar horizontalmente
        }}
        >
          {this.renderOutsideTouchable(onTouchOutside)}
          
          
          <View // este es el diseño del pop
            style={{
              backgroundColor: "#FFFFFF",
              width: "100%",
             // height: "20%",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              paddingHorizontal: 10,
            
              maxHeight: deviceHeight * 0.4,
            }}
            
          >
            
            {this.renderTitle()}
            {this.renderContent()}

           
          </View>
          
        </View>
      </Modal>
    );
  }
}
