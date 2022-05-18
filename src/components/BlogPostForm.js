import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';


const BlogPostForm = ({ onSubmit, initialValues }) => {

    initialValues

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.container}>
            <Text style={styles.label} >Enter Title:</Text>
            <TextInput style={styles.inputStyle} value={title} onChangeText={ (text) => setTitle(text) } />
            <Text style={styles.label} >Enter Content:</Text>
            <TextInput style={styles.inputStyle} value={content} onChangeText={ (text) => setContent(text) } />
            <Button title='Save Blog Post' onPress={() => onSubmit(title, content)} />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues:{
        title:'',
        content:'',
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignContent:'center',
    },
    inputStyle: {
        width:200,
        height:35,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5,
        margin:5,
    },
    label: {
        fontSize:20,
        marginBottom:5,
        marginLeft:5,
    }
});

export default BlogPostForm;