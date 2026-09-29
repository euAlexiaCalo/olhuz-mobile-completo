import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, ActivityIndicator, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from "../styles/preferencesStyles";
import { usePreferencesViewModel } from "../viewModels/usePreferencesViewModel";
import { ThemeType, VoiceType } from "../types/preferencesModels";

export function PreferencesScreen() {
    const { preferences, isLoading, handleToggleChange } = usePreferencesViewModel();

    if (isLoading) {
        return (
            <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
                <ActivityIndicator size="large" color="#1D3D87" />
            </View>
        );
    }

    const velocidades = [0.5, 1.0, 1.5, 2.0];

    return (
        <View style={styles.container}>
            
            {/* Cabeçalho Azul (Fixo no topo) */}
            <View style={styles.headerContainer}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTitle}>Configurações</Text>
                    <Text style={styles.headerSubtitle}>Gerencie suas preferências de personalização do app</Text>
                </View>
                <View style={styles.iconPlaceholder} />
            </View>

            {/* Conteúdo das Configurações dentro do ScrollView */}
            <ScrollView 
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                
                {/* Leitura de Tela */}
                <View style={styles.rowSetting}>
                    <Text style={styles.sectionTitle}>Leitura de tela</Text>
                    <Switch
                        value={preferences.screenReader}
                        onValueChange={(value) => handleToggleChange("screenReader", value)}
                        trackColor={{ false: '#767577', true: '#1D3D87' }}
                        thumbColor={preferences.screenReader ? '#fff' : '#f4f3f4'}
                    />
                </View>

                {/* Velocidade da Fala */}
                <View style={styles.sectionBlock}>
                    <Text style={styles.sectionTitle}>Velocidade da fala</Text>
                    <View style={styles.botoesContainer}>
                        {velocidades.map((vel) => {
                            const isActive = preferences.speechRate === vel;
                            return (
                                <TouchableOpacity 
                                    key={vel} 
                                    style={[styles.buttonBadge, isActive && styles.buttonActive]} 
                                    onPress={() => handleToggleChange("speechRate", vel)}
                                >
                                    <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>
                                        {vel}x
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                {/* Tipo de Voz */}
                <View style={styles.sectionBlock}>
                    <Text style={styles.sectionTitle}>Tipo de Voz</Text>
                    <View style={styles.botoesContainer}>
                        {[
                            { label: 'Feminina', value: VoiceType.Feminina },
                            { label: 'Masculina', value: VoiceType.Masculina }
                        ].map((voz) => {
                            const isActive = preferences.voiceType === voz.value;
                            return (
                                <TouchableOpacity 
                                    key={voz.value} 
                                    style={[styles.buttonPill, isActive && styles.buttonActive]} 
                                    onPress={() => handleToggleChange("voiceType", voz.value)}
                                >
                                    <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>
                                        {voz.label}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                {/* Volume do som */}
                <View style={styles.sectionBlock}>
                    <Text style={styles.sectionTitle}>Volume do som</Text>
                 
                    <View style={styles.sliderContainer}>
                        <TouchableOpacity onPress={() => handleToggleChange("volumeLevel", Math.max(0, preferences.volumeLevel - 10))}>
                            <Text style={styles.sliderControl}>−</Text>
                        </TouchableOpacity>

                        <Slider
                            style={styles.sliderComponent}
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            value={preferences.volumeLevel}
                            onValueChange={(value: number) => handleToggleChange("volumeLevel", value)}
                            minimumTrackTintColor="#1D3D87"  
                            maximumTrackTintColor="#E5E5E5"  
                            thumbTintColor="#1D3D87"        
                        />

                        <TouchableOpacity onPress={() => handleToggleChange("volumeLevel", Math.min(100, preferences.volumeLevel + 10))}>
                            <Text style={styles.sliderControl}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Modo escuro */}
                <View style={styles.sectionBlock}>
                    <Text style={styles.sectionTitle}>Modo escuro</Text>
                    <View style={styles.botoesContainer}>
                        {[
                            { label: 'Modo claro', value: ThemeType.Light },
                            { label: 'Modo escuro', value: ThemeType.Dark }
                        ].map((modo) => {
                            const isActive = preferences.theme === modo.value;
                            return (
                                <TouchableOpacity 
                                    key={modo.value} 
                                    style={[styles.buttonPill, isActive && styles.buttonActive]} 
                                    onPress={() => handleToggleChange("theme", modo.value)}
                                >
                                    <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>
                                        {modo.label}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    <Text style={styles.mainTitlee}>Notificações e Sensores</Text>

                    {/* Vibração */}
                    <View style={styles.RowSetting}>
                        <Text style={styles.sectionTitleNoMargin}>Vibração</Text>
                        <Switch
                            value={preferences.vibrationEnabled}
                            onValueChange={(value) => handleToggleChange("vibrationEnabled", value)}
                            trackColor={{ false: '#E5E5E5', true: '#1D3D87' }}
                            thumbColor={'#fff'}
                        />
                    </View>

                    {/* Sons de Alerta */}
                    <View style={styles.RowSetting}>
                        <Text style={styles.sectionTitleNoMargin}>Sons de Alerta</Text>
                        <Switch
                            value={preferences.alertSoundEnabled}
                            onValueChange={(value) => handleToggleChange("alertSoundEnabled", value)}
                            trackColor={{ false: '#E5E5E5', true: '#1D3D87' }}
                            thumbColor={'#fff'}
                        />
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}