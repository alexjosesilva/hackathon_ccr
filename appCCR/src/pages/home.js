import * as React from 'react';
import { Button, View, Text,StyleSheet, Image, TouchableHighlight, TextInput,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from './menu';


function WelcomeScreen({ navigation }) {
  return (
   <TouchableHighlight onPress={() => navigation.navigate('Login')}>
			<View >
			  <Image
						source={require('../assets/img/welcome.png')}
						style={styles.imagemWellcome}
				/>
			</View >
	</TouchableHighlight>
  );
}

function LoginScreen({ navigation }) {
  
  return (
	
		 //<TouchableHighlight onPress={() => navigation.navigate('Cad')}>
			<View >
				<Image
						source={require('../assets/img/T_login.png')}
						style={styles.imagemLogin}
							
				/>
				<TextInput
					  placeholder="Login"
					  style={ styles.inputLogin }
					  
					/>
				  <TextInput
				   placeholder="Senha"
					style={ styles.inputLogin }
					secureTextEntry
				  />
				
				<View style={styles.btnLoginEntrar}>
					<Button title="Entrar"  
					  onPress={() => navigation.navigate('Home')}  
					  color="#FF3D00" 
				 />			  
			  </View>
			  
			   <View style={styles.btnLoginCad}>
					<Button title="Cadastrar"  
					  onPress={() => navigation.navigate('Cad')}  
					  color="#5882FA" 
				 />
			  </View>
			  
			    
			</View>
				
		//</TouchableHighlight>
  );
}

function HomeScreen({ navigation }) {
  return (
				
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			  <Text>Home Screen</Text>
			</View>
	
  );
}


function CadScreen({ navigation }) {
  return (
   <TouchableHighlight onPress={() => navigation.navigate('CadRedSocial')}>
			<View >
			  <Image
						source={require('../assets/img/home02.png')}
						style={styles.imagem}
							
				/>
			</View>
		</TouchableHighlight>
  );
}

function CadRedSocialScreen({ navigation }) {
  return (
   <TouchableHighlight onPress={() => navigation.navigate('Home')}>
			<View >
			  <Image
						source={require('../assets/img/home03.png')}
						style={styles.imagem}
							
				/>
			</View>
		</TouchableHighlight>
  );
}




const Stack = createStackNavigator();

function home() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
		<Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />    
		<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
		<Stack.Screen name="Cad" component={CadScreen} options={{ headerShown: false }} />
		<Stack.Screen name="Home" component={Menu} options={{ headerShown: false }} />
		<Stack.Screen name="CadRedSocial" component={CadRedSocialScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
    container:{
        flex:1,
		alignItems:'center'
    },
    imagemLogin:{

		width:420,
		height:340
    },
	imagemWellcome:{
		width:420,
		height:680
    },
	imagem:{
		width:420,
		height:680
	},
	inputLogin:{
		alignItems: 'center',
		width: 300, 
		height: 40, 
		borderColor: 'gray', 
		borderWidth: 1 ,
		padding: 10,
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 50,
		borderRadius: 25
	},
	btnLoginEntrar:{
		alignItems: 'center',
		width: 400 ,
		marginTop: 10
		
	},
	btnLoginCad:{
		alignItems: 'center',
		width: 400,
		marginTop: 10
		
	}
})


export default home;