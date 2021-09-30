import React, {useState} from 'react';
import { View, Text , TextInput } from 'react-native';
import { styles } from './style';

const Login = () => {
    const [meuTexto,setMeuTexto] = useState('Tere');
    return(
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput style={styles.textInput} 
                onChangeText={(text)=>{setMeuTexto(text);console.log(meuTexto)}}
            />
            <Text>{meuTexto}</Text>
        </View>
    );

}

export default Login;