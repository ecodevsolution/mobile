import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Right, Footer,Text, Button, Icon,Title, Left, FooterTab, Body } from 'native-base';
import Slider from './main/Slider';
class Anatomy extends Component {
    render() {
        return (            
            <Container>
                <Header>
                    <Left>
                        <Button>
                            <Icon name="menu"/>
                        </Button>
                    </Left>
                    <Title>MNC lIFE</Title>
                   <Right>
                        <Button>
                            <Icon name="person" />
                        </Button>
                    </Right>
                </Header>
            
                <Content>
                   <Slider />
                </Content>
            
               
            </Container>
            
        );
    }
}

export default Anatomy;