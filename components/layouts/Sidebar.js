import React, { Component } from 'react';
import {  
  Image,
  StyleSheet,
  View
} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text , Badge, Icon, Separator} from 'native-base';


const datas = [
	{
		name: "Home",
		route: "index",
		icon: "home",
		bg: "#C5F442",
	},
	
    {
		name: "My Account",
		route: "index",
		icon: "person",
		bg: "#C5F442",
	},
    {
		name: "History",
		route: "index",
		icon: "paper",
		bg: "#C5F442",
	},
    {
		name: "Help",
		route: "index",
		icon: "information-circle",
		bg: "#C5F442",
	},
    {
		name: "Logout",
		route: "index",
		icon: "log-out",
		bg: "#C5F442",
	},
	
	
];

const drawerImage = require('../assets/images/user.png');

class Sidebar extends Component {
    render() {
        return (   
             <Container>                    
                <Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
                        <View style={styles.ProfileContent}>
                            <Image square style={styles.imageProfile} source={drawerImage} />
                        </View>
                        <List
                            dataArray={datas}
                            renderRow={data =>
                            <ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
                                <Left>
                                    <Icon active name={data.icon} style={{ color: "#7f8c8d", fontSize: 26, width: 30 }} />
                                    <Text style={styles.text}>
                                        {data.name}
                                    </Text>
                                </Left>
                                    {data.types &&
                                <Right style={{ flex: 1 }}>
                                    <Badge
                                        style={{
                                            borderRadius: 3,
                                            height: 25,
                                            width: 72,
                                            backgroundColor: data.bg,
                                        }}
                                    >
                                        <Text style={styles.badgeText}>{`${data.types} Types`}</Text>
                                    </Badge>
                                </Right>}
                            </ListItem>}
                        />                                                               
                </Content> 
             </Container>            
        );
  }
}
const styles = StyleSheet.create({
  ProfileContent: {
    backgroundColor: '#F5f5f5',
    height: 125,    
    alignSelf: 'stretch',
  },
  imageProfile : {
      height: 70,
      width: 70,
      marginLeft:15,
      marginTop: 15,
      marginBottom: 25
  },
  SideMenu : {
      backgroundColor: '#FAFAFA'      
  },
  text: {    
    fontSize: 16 ,
    color: '#34495e'
  },
});

export default Sidebar;