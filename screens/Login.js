import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import {Formik} from 'formik';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import {ScrollView} from 'react-native';

import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    StyleFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MessageBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
} from './../components/styles';

import {View} from 'react-native';

const {brand,darkLight,primary} =  Colors;

const Login = ({navigation}) => {
    const [hidePassword,setHidePassword] = useState(true);
    return(
       <ScrollView style={{width:'100%'}}>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                {/*<PageLogo resizeMode="cover" source={require('./../assets/splash.png')} />*/}
                <PageTitle>Talkling/Earthling</PageTitle>
                

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) =>{
                        console.log(values);
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values})=>
                    (<StyleFormArea>
                        <MyTextInput 
                            label="Email Address"
                            icon="mail"
                            placeholder="isa@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType ="email-address"
                        />
                        <MyTextInput 
                            label="Password"
                            icon="lock"
                            placeholder="********"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MessageBox>...</MessageBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        <Line />

                        <StyledButton google={true} onPress={handleSubmit}>
                            <Fontisto name="google" color={primary} size={25} />
                            <ButtonText google={true}>Sign in with Google</ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText> I don't have an account </ExtraText>
                            <TextLink onPress={() => navigation.navigate('Signup')}>
                                <TextLinkContent> Signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>

                    </StyleFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </ScrollView>
    );

};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={()=>setHidePassword(prev => !prev)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}  />
                </RightIcon>
            )}
        </View>
      
    )
}

export default Login; 