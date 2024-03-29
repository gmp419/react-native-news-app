import React, { useContext } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native'
import { NewsContext } from '../API/Context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SingleNews = ({item, index}) => {

    const {darkTheme, setDarkTheme} = useContext(NewsContext);
    return (
        <View
            style={{
                height: windowHeight,
                width: windowWidth,
                transform: [{scaleY: -1}],
                paddingTop: 130,
            }}
        >
            <Image 
                source={{uri: item.urlToImage}}
                style={{height: '45%', resizeMode: 'cover', width: windowWidth}}
            />
            <View
                style={{...styles.description, backgroundColor:darkTheme ? "#282C35" : "white"}}
            >    
                <Text style={{...styles.title, color: darkTheme ? "white" : "black"}}>{item.title}</Text>
                <Text style={{...styles.content, color:darkTheme ? "white" : "black"}}>
                    {item.description}
                </Text>
                <Text style={{color: darkTheme ? "white" : "black"}}>Short by ..  
                    <Text>
                          {item.author??"unknown"}
                    </Text>
                </Text>
                <ImageBackground
                    blurRadius={30}style={styles.footer}
                    source={{uri: item.urlToImage}}
                >
                    <TouchableOpacity onPress={()=>Linking.openURL(item.url)}>
                        <Text style={{color: 'white', fontSize: 15}}>
                            '{item?.content?.slice(0,45)}...'
                        </Text>
                        <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                            Read More
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
        color:'white',
    },
    content:{
        fontSize: 18,
        paddingBottom: 10
    },
    description:{
        padding: 15,
        flex: 1,
    },
    footer:{
        height: 80,
        width:windowWidth,
        position: 'absolute',
        bottom:0,
        backgroundColor: '#d7be69',
        justifyContent: 'center',
        paddingHorizontal: 20,
    }
})
export default SingleNews
