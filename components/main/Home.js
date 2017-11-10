import React, { Component } from 'react';
import {View} from 'react-native';
import Menu from '../layouts/Menu';
import Sidebar from '../layouts/Sidebar';
import {Drawer} from 'native-base';
import Slider from './Slider';
import Contents from '../views/Contents';
import { Container, Header, Content, Card, CardItem, Thumbnail, Right, Footer,Text, Button, Icon,Title, Left, FooterTab, Body } from 'native-base';
import NavigationContainer from '../views/NavigationContainer';

class Home extends Component {

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    render() {
        return (            
            <Container>
               
                <Drawer
                        ref={(ref) => { this.drawer = ref; }}
                        content={<Sidebar/>}
                        onClose={() => this.closeDrawer()} >

                        <Menu
                            openDrawer={this.openDrawer.bind(this)}
                        />                                 
                     
                    <Slider /> 
                    <Contents />              
                </Drawer>               
            </Container>
            
        );
    }
}

export default Home;