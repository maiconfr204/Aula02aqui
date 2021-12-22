import React, {useState} from 'react';
import { View, Text , TextInput , Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParamList} from '../types';
import { styles } from './style';

type LoginPros = NativeStackNavigationProp<StackNavigatorParamList,'Login'>;
const Login = () => {
    const navigation = useNavigation<LoginPros>();
    const [meuTexto,setMeuTexto] = useState('');
    return(
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image style={styles.Image} source={
                            require("../../assets/facebook.png")
                            }>
                    </Image>
                    <Text style={styles.texto}>Facebook</Text>
                </View>

                <TextInput style={styles.textInput} 
                    onChangeText={(text)=>{setMeuTexto(text);console.log(meuTexto)}}
                    placeholder="Email"
                />

                <TextInput style={styles.textInput} 
                    onChangeText={(text)=>{setMeuTexto(text);console.log(meuTexto)}}
                    placeholder="Password"
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.viewButtonText}>Log in</Text>
                </TouchableOpacity>

                <View style={styles.link}>
                    <Text style={styles.linker}>Sign Up for Facebook</Text>
                </View>
            </View>
        </View>
    );

}

export default Login;