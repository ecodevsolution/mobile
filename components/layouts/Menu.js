import React, { Component  } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { StyleSheet, Text, View , Image} from 'react-native';

 class Menu extends Component {   
  render() {
    return (     
         <Header style={styles.HeaderMenu}>
              <Left>
                  <Button transparent onPress={()=>this.props.openDrawer()} >
                      <Icon name='menu' />
                  </Button>
              </Left>
             <Title style={styles.headLogo}>
                  <Text style={styles.logoText}>
                      <Image 
                            style={styles.logoHeader}
                            source = {require('../assets/images/splash.png')}
                        />
                       &nbsp;MNC LIFE 
                  </Text>
              </Title>
             <Right>
                <Button transparent>
                  <Icon name='bulb' />
                </Button>
            </Right>
         </Header>          
    );
  }
}

const styles = StyleSheet.create({
  HeaderMenu: {
    backgroundColor: '#2ecc71',
  },
  logoHeader: {
    width: 35,
    height: 35,
    flex: 1,
        
  },
  logoText : {    
    color : '#FFF', 
    fontWeight:'bold',
    fontSize: 18,
    textAlign: 'center'   
  },
  headLogo :{
    marginTop : 12
  }
});

export default Menu;