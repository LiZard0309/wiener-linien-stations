import {Pressable, StyleSheet, TextInput, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {useState} from "react";
import {router, useLocalSearchParams} from "expo-router";


interface AddItemModalProps {}

const AddItemModal: React.FC<AddItemModalProps> = () => {
    const { handleAddNewStation } = useLocalSearchParams(); // Get the passed function, Router-Function
    const [newName, setNewName] = useState("");
    const [newGemeinde, setNewGemeinde] = useState("");
    const [newLatitude, setNewLatitude] = useState("");
    const [newLongitude, setNewLongitude] = useState("");

    const addStationData = () => {


         if(handleAddNewStation) {   // @ts-ignore
             handleAddNewStation(newName, newGemeinde, newLatitude, newLongitude);// Call the function to add new station
         }

            setNewName('');
            setNewGemeinde('');
            setNewLongitude('');
            setNewLatitude('');

            router.back();

    };


    return (
        <View style={styles.container}>
            <ThemedText> Enter new data: </ThemedText>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={newName}
                onChangeText={setNewName}
            />
            <TextInput
                style={styles.input}
                placeholder="Gemeinde"
                value={newGemeinde}
                onChangeText={setNewGemeinde}

            />
            <TextInput
                style={styles.input}
                placeholder="Latitude"
                value={newLatitude}
                onChangeText={setNewLatitude}

            />
            <TextInput
                style={styles.input}
                placeholder="Longitude"
                value={newLongitude}
                onChangeText={setNewLongitude}

            />

            <Pressable onPress={addStationData} style={styles.button}>
                <ThemedText>Add</ThemedText>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        borderRadius: 16,
        backgroundColor: 'lightsteelblue',
        padding: 16
    }
});

export default AddItemModal;