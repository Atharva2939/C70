import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Alert
} from "react-native";

export default class ReadStory extends React.Component{
  constructor(props){
    super(props)
    this.state=({
      allStory:[],
      lastVisibleStory:null,
      search:""
    })
  }
  componentDidMount=async()=>{
    const transaction=await db.collection("book").doc("story").limit(10).get()
    transaction.docs.map((doc)=>{
      this.setState({
        allStory:[...this.state.allStory,doc.data()],
        lastVisibleStory:doc
      })
    })

    
  }
  retriveStories=async()=>{
    var enterText=text.split("")
    var text=text.toUpperCase();
    if(enterText===this.state.story){
      const transaction=await db.collection("book").where("story","==",text).startAfter(this.state.lastVisibleStory).limit(10).get()
      transaction.docs.map((doc)=>{
        this.setState({
          allStory:[...this.state.allStory,doc.data()],
          lastVisibleStory:doc
        })
      })
    }
  }
  searchStory=async(text)=>{
    var enterText=text.split("")
    var text=text.toUpperCase();
    if(enterText===this.state.story){
      const transaction=await db.collection("book").where("story","==",text).get()
      transaction.docs.map((doc)=>{
        this.setState({
          allStory:[...this.state.allStory,doc.data()],
          lastVisibleStory:doc
        })
      })
    }
  }

render(){
    
return(
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.searchBar}>
            <TextInput style={styles.bar} placeholder="enter story name"
            onChangeText={(text)=>{
              this.setState({
                search:text
              })
            }}/>
            <TouchableOpacity style={styles.searchButton} onPress={()=>{
              this.searchStory(this.state.search)
            }}>
              <Text>Search</Text>
            </TouchableOpacity>
            </View>
        <FlatList 
        data={this.state.allStory}
        renderItem={({item})=>(
          <View style={{borderBottomWidth:2}} >
            <Text>{"title:"+item.title}</Text>
        <Text>{"author:"+item.author}</Text>
          </View>
        )}
        keyExtractor={(item,index)=>{
          index.toString()
        }}
        onEndReached={this.fetchMoreTransactions}
        onEndReachedThreshold={0.7}/>    
</View>
)}
}
const styles=StyleSheet.create({
  searchBar:{
    flexDirection:"row",
    height:40,
    width:"auto",
    borderWidth:0.5,
    alignItems:"center",
    backgroundColor:"grey",
    marginTop:20
  },
  bar:{
    borderWidth:2,
    height:30,
    width:300,
    paddingLeft:10
  },
  searchButton:{
    borderWidth:1,
    height:30,
    width:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"green",
    marginTop:20
  }
})
