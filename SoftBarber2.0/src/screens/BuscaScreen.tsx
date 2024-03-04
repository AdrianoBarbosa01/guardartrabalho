import { View, Text, TextInput, StyleSheet, Image, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import filter from "lodash.filter";

const API_ENDPOINT = 'https://randomuser.me/api/?results=30';

export function BuscaScreen() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [fullData, setFullData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setIsLoading(true);
        fetchData(API_ENDPOINT);
    }, []);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);

            console.log(json.results);
            setFullData(json.results)
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error);
        }
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
        const formattedQuery = query.toLowerCase();
        const filteredData = filter(fullData, (user) => {
            return contains(user, formattedQuery);
        });
        setData(filteredData)
    };

    const contains = ({ name, email }, query) => {
        const { first, last } = name;

        if (first.includes(query) || last.includes(query) || email.includes(query)) {
            return true;
        }
        return false;
    };

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <ActivityIndicator size={'large'} color="#5500cd" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text>Error em pesquisar verifique tudo</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
            <TextInput placeholder='Buscar Barbearias'
                clearButtonMode="always"
                autoCapitalize="none"
                autoCorrect={false}
                value={searchQuery}
                onChangeText={(query) => handleSearch(query)}
                style={styles.buscarbox} />

            <FlatList
                data={data}
                keyExtractor={(item) => item.login.username}
                renderItem={({ item }) => (
                    <View>
                        <Image source={{ uri: item.picture.thumbnail }} />
                        <View>
                            <Text>{item.name.first} {item.name.last}</Text>
                            <Text>{item.email}</Text>
                        </View>
                    </View>
                )}
            />

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    buscarbox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8
    }
})