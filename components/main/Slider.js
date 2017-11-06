import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageSlider from 'react-native-image-slider';

class Slider extends Component {

     constructor(props) {
        super(props);
 
        this.state = {
            position: 1,
            interval: null
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 4000)});
    }
 
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
             <View style={styles.Slider}>
                <ImageSlider 
                        images={[ 
                                    require('../assets/images/slider/slider1.jpg'),
                                    require('../assets/images/slider/slider2.png'),
                                    require('../assets/images/slider/slider3.jpg'),

                                    
                                ]}

                        position={this.state.position}
                        onPositionChanged={position => this.setState({position})}/>
             </View>        
        );
    }
}
const styles = StyleSheet.create({
  Slider : {    
    paddingTop: 1
  }  
});
export default Slider;