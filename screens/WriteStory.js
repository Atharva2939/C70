import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  ToastAndroid
} from "react-native";
import db from '../config'
export default class WriteStory extends React.Component{
    constructor(){
        super()
        this.state={
            title:"",
            author:"",
            story:"",
            transactionMessage:""
        }
    }


    submitStory=async()=>{
            var storyRef=db.ref("/book")
            storyRef.update({
                author:this.state.author,
                title:this.state.title,
                story:this.state.story
            })
    }
    message=()=>{
      transactionMessage="story submitted"
      ToastAndroid.show(transactionMessage,ToastAndroid.SHORT)
    }
    render(){
        return(
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View>
                <View style={styles.inputView}>
            <TextInput
              style={styles.inputBox}
              placeholder="Title of the story"
              onChangeText={text => {
                this.setState({
                 title: text
                });
              }}/>

            </View>
            <View style={styles.inputView}>
            <TextInput
              style={styles.inputBox}
              placeholder="Author of the story"
              onChangeText={text => {
                this.setState({
                  author: text
                });
              }}/>
              </View>
              <View style={styles.inputView}>
              <TextInput
                style={styles.inputBox}
                placeholder="story"
                multiline={true}
                onChangeText={text => {
                  this.setState({
                    story: text
                  });
                }}/>
                </View>
                <TouchableOpacity style={styles.submitButton}
                onPress={()=>{
                  this.submitStory()
                  this.message()}}>
                  SUBMIT</TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    displayText: {
      fontSize: 15,
      textDecorationLine: "underline"
    },
    scanButton: {
      backgroundColor: "#2196F3",
      padding: 10,
      margin: 10
    },
    buttonText: {
      fontSize: 15,
      textAlign: "center",
      marginTop: 10
    },
    inputView: {
      flexDirection: "row",
      margin: 20
    },
    inputBox: {
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    scanButton: {
      backgroundColor: "#66BB6A",
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    },
    submitButton: {
      backgroundColor: "#FBC02D",
      width: 100,
      height: 50
    },
  });