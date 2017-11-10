import React, { Component } from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Right, Text, Button, Icon, Left, Body } from 'native-base';

class Contents extends Component {
    render() {
        return (          
           <View style={styles.HomeContent}>
                 <View style={styles.boxContent}>
                    <TouchableOpacity onPress={this._onPressButton}>
                         <View style={styles.boxImageLeft}> 
                             <Image style={styles.Images} 
                                     source={require('../assets/images/produk/produk1.png')}
                                 />
                         </View>
                     </TouchableOpacity>

                     <View style={{flex:0.1}}></View>
                     <TouchableOpacity onPress={this._onPressButton}>
                         <View style={styles.boxImageRight}>
                             <Image style={styles.Images} 
                                     source={require('../assets/images/produk/produk2.png')}
                                 />
                         </View>
                     </TouchableOpacity>
                 </View>
                <View style={styles.boxContent}>
                    <View style={styles.boxImageLeft}> 
                         <Image style={styles.Images} 
                                source={require('../assets/images/produk/produk3.png')}
                            />
                    </View>
                    <View style={{flex:0.1}}></View>
                    <View style={styles.boxImageRight}>
                        <Image style={styles.Images} 
                                source={require('../assets/images/produk/produk1.png')}
                            />
                    </View>
                </View>
            </View>
    
        );
    }
}
const styles = StyleSheet.create({
  HomeContent: {
        flexDirection: 'column',
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#FAFAFA'     
  },
  boxContent : {
      flex:2,flexDirection:"row",
      justifyContent:'space-between',
      padding:5
  },
   boxImageLeft :{   
   flex:2,
   padding:5
    
  },
  boxImageRight : {
      flex:2,
      padding:5
  },
  Images : {
      width: 140,
      height : 140
  }

});

export default Contents;