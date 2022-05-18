import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {

    const {state, deleteBlogPost} = useContext(Context)
    return (
        <View>
            <FlatList 
            data={state}
            keyExtractor={ (post) => post.title}
            renderItem= { ({ item }) => {
                return <View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id })}>
                        <Text style={styles.title} >{item.title} - {item.id}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <Feather style={styles.icon} name='trash' />
                    </TouchableOpacity>
                </View>
            } }
            />

        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
      };
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderBottomColor:'grey'
    },
    title: {
        fontSize:18,
    },
    icon: {
        fontSize:24,
    }
});

export default IndexScreen;