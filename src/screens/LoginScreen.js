import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Button } from '../screens/components/ButtonComponent';
import { Input } from '../screens/components/InputComponent';
import React from 'react'

const LoginScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={
                          require("../../assets/login.png")
                        }
                   />
               </View>
               <View style={styles.inputContainer}>
                  <Input
                      title="Username"
                      placeholder="Username"
                 />
             </View>
             <Button
                 text="Login"
             />
             <View style={styles.textContainer}>
                 <Text style={styles.text}>
                     Don't have an account?
                 </Text>
                 <TouchableOpacity>
                     <Text style={styles.registerText}>
                         Register
                     </Text>
                 </TouchableOpacity>
             </View>
         </View>
     </ScrollView>
  )
}

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1
    },
    mainContainer: {
        backgroundColor: '#E6E6FA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        marginTop: 32,
        marginBottom: 16
    },
    image: {
        width: 180,
        height: 180
    },
    inputContainer: {
        padding: 16,
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    text: {
        fontSize: 16
    },
    registerText: {
        color: '#1A5B0A',
        fontSize: 16
    }
});

export default LoginScreen