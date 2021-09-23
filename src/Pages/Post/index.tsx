import React from 'react';
import {View , Text , StyleSheet} from 'react-native';

export const Post = () =>{
    return(
        <View style={styles.componente}>
            <View style={styles.headerView}>
                <View style={styles.headerViewFoto}>
                
                </View>
                <View style={styles.headerViewTextos}>
                    <Text style={styles.headerViewTextosTitulo}>Unblast</Text>
                    <Text>2hrs</Text>
                    {/* <Image/> */}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    componente:{
        flex:1,
        padding:30,
    },
    headerView:{
        flexDirection:'row',
    },
    headerViewFoto:{
        backgroundColor:'#4369B0',
        height:60,
        width:60,
        borderRadius:50,
    },
    headerViewTextos:{
        paddingLeft:20,
        justifyContent:'space-around',
    },
    headerViewTextosTitulo:{
        fontWeight:'bold',
    },
});