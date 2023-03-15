import {Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import colors from '../../constants/colors';


const Start = ({ navigation: nav }) => {
    return (
        <View style={{flex: 1}}>
            <ImageBackground
                source={require('../../../assets/Splash.png')}
                style={styles.imageBackground}
            >
                <SafeAreaView style={styles.safeAreaView}>

                    <View style={styles.logoView}>
                        <Image
                            source={require('../../../assets/Logo.png')}
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain',
                                marginTop: 64,
                            }}
                        />
                        <Text style={{
                            color: colors.white,
                            fontFamily: 'Inconsolata_700Bold',
                            fontSize: 16,
                        }}>
                            100k+ Premium Recipes
                        </Text>
                    </View>

                    <View style={styles.titleView}>
                        <Text style={{
                            color: colors.white,
                            fontFamily: 'Inconsolata_700Bold',
                            fontSize: 40,
                            textAlign: 'center',
                        }}>
                            Get{'\n'}Cooking
                        </Text>
                        <Text style={{
                            color: colors.white,
                            fontFamily: 'Inconsolata_400Regular',
                            fontSize: 14,
                            marginTop: 8,
                        }}>
                            Simple way to find tasty recipes.
                        </Text>

                        <Button
                            text={'Start Cooking'}
                            styles={styles.button}
                            onPress={
                                () => nav.navigate('Home')
                            }
                        />
                    </View>


                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default Start;