import React from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { ArrowLeft, Calendar, Image as ImageIcon, X } from "lucide-react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { ChatTab } from "./ChatTab";
import { DescriptionTab } from "./DescriptionTab";
import { useReadingDetailsViewModel } from "../viewModels/useReadingDetailsViewModel";
import { BASE_URL } from "../../../../core/api/endpoints";
import { styles } from "../styles/readingsDetailsStyles"; 
import { getFileUrl } from "../../../../shared/utils/fileUtils";

const Tab = createMaterialTopTabNavigator();
const DEFAULT_IMAGE = require("../../../assets/img/por-do-sol-na-praia.jpg");

export function ReadingDetailsScreen() {
  const {
    item,
    isImageModalVisible,
    setIsImageModalVisible,
    isDeleteModalVisible,
    setIsDeleteModalVisible: setDeleteModalVisible,
    handleGoBack,
    handleDeleteSuccess,
  } = useReadingDetailsViewModel();

  const resolvedUri = getFileUrl(item.fileUri);
  const imageSource = resolvedUri ? { uri: resolvedUri } : DEFAULT_IMAGE;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <ArrowLeft size={36} color={"#0E0E0E"} strokeWidth={1.6} />
      </TouchableOpacity>
      
      <Text style={styles.title}>Leitura</Text>
      
      <View style={styles.readingDetailsHeader}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsImageModalVisible(true)}
          style={styles.imageContainer}
        >
          <Image source={imageSource} style={styles.image} />
        </TouchableOpacity>
        
        <View style={styles.readingDetailsInfo}>
          <Text style={styles.readingDetailsTitle}>
            {item.title || "Título da leitura"}
          </Text>
          <View style={styles.readingDetailsInfoRow}>
            <Calendar size={20} color={"#56595C"} strokeWidth={1.4} />
            <Text style={styles.readingDetailsInfoText}>
              {item.uploadDate || "Data da leitura"}
            </Text>
          </View>
          <View style={styles.fileTypeRow}>
            <ImageIcon size={20} color={"#56595C"} strokeWidth={1.4} />
            <Text style={styles.fileTypeText}>{item.type || "Documento"}</Text>
          </View>
        </View>
      </View>

      {/* MODAL PARA EXIBIR A FOTO POR INTEIRO */}
      <Modal
        visible={isImageModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsImageModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <TouchableOpacity
            style={styles.closeModalButton}
            onPress={() => setIsImageModalVisible(false)}
          >
            <X size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <Image
            source={imageSource}
            style={styles.fullScreenImage}
            resizeMode="contain"
          />
        </View>
      </Modal>

      <Tab.Navigator
        id="reading-details-tabs"
        screenOptions={{
          tabBarActiveTintColor: "#0C59D6",
          tabBarInactiveTintColor: "#A0A0A0",
          tabBarIndicatorStyle: {
            backgroundColor: "#0C59D6",
            borderRadius: 10,
            height: 3,
          },
          tabBarStyle: {
            backgroundColor: "#F5F5F5",
            borderRadius: 10,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            marginVertical: 12,
          },
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: "600",
            textTransform: "none",
          },
        }}
      >
        <Tab.Screen name="Descrição">
          {() => (
            <DescriptionTab
              fileName={item.fileName}
              fileSize={item.fileSize}
              uploadDate={item.uploadDate}
              descriptionText={item.descriptionText}
              isDeleteModalVisible={isDeleteModalVisible}
              setDeleteModalVisible={setDeleteModalVisible}
              onDeleteSuccess={handleDeleteSuccess}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Conversa" component={ChatTab} />
      </Tab.Navigator>
    </View>
  );
}