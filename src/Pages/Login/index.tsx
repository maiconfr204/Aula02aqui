import React, {useState} from 'react';
import { View, Text , TextInput , Image, TouchableOpacity} from 'react-native';
import { styles } from './style';


const Login = () => {
    const [meuTexto,setMeuTexto] = useState('Tere');
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
                <TouchableOpacity style={styles.button} onPress={()=>{}}>
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