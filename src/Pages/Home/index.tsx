import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const OneLinkHeader = (props:any)=>{
    return(
        <View>
            <Text style={styleOneLinkHeader.link}>{props.nome}</Text>
        </View>
    );
};
const styleOneLinkHeader = StyleSheet.create({
    link:{
        color:"#4A4A4C",
    }
});

const LinksHeader = ()=>{
    return(// Aqui dentro eu coloco meu JSX
        <View style={styleLinksHeader.container}>
            {/* <Text style={{color:"#4A4A4C"}}>Home</Text>
            <Text style={styleLinksHeader.link}>Post</Text>
            <Text>Videos</Text>
            <Text>Photos</Text>
            <Text>Community</Text> */}
            <OneLinkHeader nome="Home"/>
            <OneLinkHeader nome="Post"/>
            <OneLinkHeader nome="Videos"/>
            <OneLinkHeader nome="Photos"/>
            <OneLinkHeader nome="Community"/>
        </View>
    );
};

const styleLinksHeader = StyleSheet.create({
    container:{
        //backgroundColor:"lightblue",
        color:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:35,
        paddingVertical:10,
        borderBottomColor:"#F0F0F0",
        borderBottomWidth:0.5,
    },
});

const Home = () => {
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Image source={
                    require("../../assets/arrow-left.png")
                    }>
                </Image>
                <View style={styles.inputTextView}>
                    <Image source={
                        require("../../assets/ei_search.png")
                        }>
                    </Image>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search"
                        placeholderTextColor="#F5FFFF"
                        >
                        

                    </TextInput>
                </View>
                <Image source={
                    require("../../assets/share.png")
                    }>
                </Image>
            </View>
            <LinksHeader></LinksHeader>


        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header:{
        minHeight:70,
        backgroundColor:"#4369B0",
        paddingVertical:30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:30,
        paddingTop:50,
    },
    inputTextView:{
        flex:1,
        borderRadius:28,
        backgroundColor:"#2C4877",
        marginHorizontal: 10,
        height:40,
        alignItems:"center",
        flexDirection:"row",
    },
    textInput:{
        flex:1,
        paddingRight:10,
        color:"#F5FFFF",
    },
});

export default Home;