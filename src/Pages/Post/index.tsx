import React from 'react';
import {View , Text , StyleSheet , Image} from 'react-native';

export const Post = () =>{
    return(
        <View style={styles.componente}>
            <View style={styles.headerView}>
                <View style={styles.headerViewFoto}>
                
                </View>
                <View style={styles.headerViewTextos}>
                    <Text style={styles.headerViewTextosTitulo}>Unblast</Text>
                    <View style={styles.headerViewTextosHorario}>
                        <Text>2hrs</Text>
                        <Image 
                            style={styles.headerViewImageGlobo} 
                            source={require('../../assets/globo.png')} 
                            />
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.TextoPublicacao}>
                    Este é o design que vamos replicar hoje na aula: <Text style={styles.TextoPublicacaoLink}>https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup</Text>
                </Text>
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
        fontSize:16,
    },
    headerViewImageGlobo:{
        height:17,
        width:17,
        marginLeft:5,
    },
    headerViewTextosHorario:{
        flexDirection:'row',
        alignItems:'center',
    },
    TextoPublicacao:{
        marginTop:20,
        fontSize:15,
    },
    TextoPublicacaoLink:{
        color: '#4D6196',
    },
});