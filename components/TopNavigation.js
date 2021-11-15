import React, {useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { NewsContext } from '../API/Context';

const TopNavigation = ({index,setIndex}) => {

    const {fetchNews, darkTheme, setDarkTheme} = useContext(NewsContext);
    return (
        <View style={{...styles.container, backgroundColor: darkTheme ? '#282C35' : '#fff'}}>
            {index === 0 ?(
                <TouchableOpacity style={styles.left}
                    onPress={()=>setDarkTheme(!darkTheme)}
                >
                    <Text style={{...styles.text, color:darkTheme ? 'lightgrey' : 'black'}}>
                        <MaterialCommunityIcons
                            name="theme-light-dark"
                            size={24}
                            color="#007fff"
                        />
                    </Text>
                </TouchableOpacity>
            ):(
                <TouchableOpacity style={styles.left}
                    onPress={() =>setIndex(index === 0 ?1 : 0)}
                >
                    <MaterialCommunityIcons name="arrow-left-thick" size={15} color="#007fff" />
                    <Text style={{...styles.text, color:darkTheme ? 'lightgrey' : 'black'}}>Discover</Text>
                </TouchableOpacity>
            )}

            <Text style={{...styles.center,color: darkTheme ? 'white' : 'black' }}>
                {index? "All News" : "Discover"}
            </Text>
                {index? (
                    <TouchableOpacity style={styles.right}
                        onPress={()=>fetchNews('general')}
                    >
                        <Text style={styles.text}>
                            <AntDesign name="reload1" size={24} color="#007fff" />
                        </Text>
                    </TouchableOpacity>
                ):(
                    <TouchableOpacity 
                        style={styles.left}
                        onPress={()=> setIndex(index === 0 ? 1 : 0)}    
                    >
                        <Text style={{...styles.text, color:darkTheme ? 'lightgrey' : 'black'}}>All News
                        </Text>
                        <SimpleLineIcons name="arrow-right" color="#007fff" size={15}></SimpleLineIcons>
                    </TouchableOpacity>
                )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center', 
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
    },
    left:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
        alignItems: 'center', 
    },
    text:{
        fontSize: 16,
    },
    right:{
        width: 80,
        alignItems: 'flex-end'
    },
    center:{
        paddingBottom: 2,
        borderBottomWidth: 5,
        borderBottomColor: '#007fff',
        borderRadius: 10,
        fontSize: 20,
        fontWeight: '700',
        // color: 'white'
    }
});
export default TopNavigation
