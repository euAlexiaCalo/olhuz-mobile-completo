import React from "react";
import { View, TextInput, Text, ScrollView, Image } from "react-native";
import { Mic } from "lucide-react-native";
import { styles } from "../styles/chatTabStyles"; 

const chatBotImg = require("../../../../assets/img/chat-bot.png");

export const ChatTab = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.chatMessage}>
          <View style={styles.chatMessageImage}>
            <Image source={chatBotImg} style={styles.chatMessageImage} />
          </View>
          <View style={styles.chatMessageContent}>
            <Text style={styles.chatMessageText}>
              Olá! Sou seu assistente de leitura. Você pode me perguntar sobre o
              conteúdo deste arquivo, pedir mais detalhes ou destacar partes
              específicas.
            </Text>
          </View>
        </View>
        <View style={styles.userMessage}>
          <View style={styles.userMessageContent}>
            <Text style={styles.userMessageText}>
              Quais são as cores predominantes na imagem?
            </Text>
          </View>
        </View>
        <View style={styles.chatMessage}>
          <View style={styles.chatMessageImage}>
            <Image source={chatBotImg} style={styles.chatMessageImage} />
          </View>
          <View style={styles.chatMessageContent}>
            <Text style={styles.chatMessageText}>
              As cores predominantes são laranja, amarelo. O laranja e o amarelo
              estão no céu e no reflexo do sol.
            </Text>
          </View>
        </View>
        <View style={styles.userMessage}>
          <Text style={styles.userMessageText}>Tem pessoas na imagem?</Text>
        </View>
        <View style={styles.chatMessage}>
          <View style={styles.chatMessageImage}>
            <Image source={chatBotImg} style={styles.chatMessageImage} />
          </View>
          <View style={styles.chatMessageContent}>
            <Text style={styles.chatMessageText}>Não, não há pessoas na imagem. Apenas pegadas na areia.</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Faça uma pergunta sobre este arquivo..."
          placeholderTextColor="#646265"
          style={styles.input}
        />
        <View style={styles.micIcon}>
          <Mic size={24} color="#FFF" strokeWidth={1.6} />
        </View>
      </View>
      <Text style={styles.infoText}>As respostas são baseadas na descrição gerada pelo app.</Text>
    </View>
  );
};