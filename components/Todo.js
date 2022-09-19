import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

function Todo({ item,todos,  setTodos}) {
    const [edit, setEdit] = useState(false)
    const [editText, setEditText] = useState(item.name)

    const handleEdit = () => {
        setEdit(true)
    }

    const handleEdited = ()=>{
        if(editText){
            item.name = editText;
            setEdit(false)
        }
    }

    const handleDlt = ()=>{
        setTodos(prev=>prev.filter(todo=>{
            return todo.id !== item.id
        }))
    }

    return (
        <View style={styles.container}>

             {!edit ?<Text style={styles.mainText}>{item.name}</Text>:
             <TextInput
             style={styles.input}
             value={editText}
             autoFocus
             onChangeText={(e) => setEditText(e)}
             />
             }

            <View style={styles.btnWrapper}>

                {!edit ?<TouchableOpacity onPress={handleEdit} style={styles.btn}>
                    <Text style={styles.btnText}>Edit</Text>
                </TouchableOpacity>:
                 <TouchableOpacity onPress={handleEdited} style={styles.btn}>
                    <Text style={styles.btnText}>Done</Text>
                </TouchableOpacity> }

                <TouchableOpacity onPress={handleDlt} style={styles.btn}>
                    <Text style={styles.btnText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        backgroundColor: '#f2f2f2',
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
    },
    mainText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    btnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        borderRadius: 5
    },
    btnText: {
        color: 'white'
    }
})

export default Todo