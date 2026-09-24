import React from "react";
import { Text, View, FlatList, ScrollView, ActivityIndicator } from "react-native";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BottomTabParamList } from "../../../../navigation/BottomTabNavigator";
import { AppStackParamList } from "../../../../navigation/AppNavigator";

import { styles } from "../styles/readingsHistoryStyles";
import { CalendarDays } from "lucide-react-native";
import { ReadingItem } from "../../../../shared/components/ReadingItem";
import { truncateText } from "../../../../shared/utils/text";

import { useReadingsViewModel } from "../viewModels/useReadingsHistoryViewModel";

type Props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, "Readings">,
  NativeStackScreenProps<AppStackParamList>
>;


export function ReadingsHistoryScreen({ navigation }: Props) {
  const { readings, isLoading, titleMaxLength } = useReadingsViewModel();

  if (isLoading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#111330" />
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={readings}
          keyExtractor={(item) => item.id}
          scrollEnabled={false} // Desativa o scroll interno
          ListHeaderComponent={
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <View>
                  <Text style={styles.title}>Leituras</Text>
                  <Text style={styles.subtitle}>dos últimos 7 dias</Text>
                </View>
                <CalendarDays
                  size={36}
                  color="#111330"
                  strokeWidth={1.4}
                />
              </View>
              <Text style={styles.description}>
                Acompanhe os arquivos que você visualizou recentemente
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <ReadingItem
              onPress={() => navigation.navigate("ReadingDetails", { item })}
              type={item.type}
              title={truncateText(item.title, titleMaxLength)}
              uploadDate={item.uploadDate}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </ScrollView>
  );
}