import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { NotificationCard } from '../../components/NotificationCard'

export function Notification() {
  return (
    <View className="h-screen flex-1 bg-black px-4 pt-20">
      <View>
        <Text className="text-4xl font-bold text-white">Notificações</Text>
        <Text className="text-lg text-gray200">
          Suas notificações recentes aparecerão aqui
        </Text>
      </View>
      <ScrollView className="mt-8">
        <NotificationCard
          msg="🚀 Sua solicitação para participar do evento #SomosArduino foi aprovado! Nos vemos lá! ✅✨"
          readed={true}
        />
        <NotificationCard
          msg="⛅ Opaa! Já é amanhã! Pronto para o E.N.A.T IFCE Cedro? Estamos tão ansiosos quanto você! 🥰😍"
          readed={false}
        />
        <NotificationCard
          msg="🎙️ Seu sorriso é tão resplandecente, que deixou meu coração alegre! 🎵🎶 Vem aí!!! O maior evento geek da região centro-sul. Você não vai ficar de fora né? Na Anime Geek você contará com uma semana inteira voltada para a cultura pop japonesa! Acesse já a aba de eventos e faça a sua inscrição agora mesmo. Corre que as vagas são limitadas viu?😉👍🏽"
          readed={true}
        />
        <NotificationCard
          msg="⛅ Opaa! Já é amanhã! Pronto para o E.N.A.T IFCE Cedro? Estamos tão ansiosos quanto você! 🥰😍"
          readed={false}
        />
        <NotificationCard
          msg="🎙️ Seu sorriso é tão resplandecente, que deixou meu coração alegre! 🎵🎶 Vem aí!!! O maior evento geek da região centro-sul. Você não vai ficar de fora né? Na Anime Geek você contará com uma semana inteira voltada para a cultura pop japonesa! Acesse já a aba de eventos e faça a sua inscrição agora mesmo. Corre que as vagas são limitadas viu?😉👍🏽"
          readed={true}
        />
        <NotificationCard
          msg="🎙️ Seu sorriso é tão resplandecente, que deixou meu coração alegre! 🎵🎶 Vem aí!!! O maior evento geek da região centro-sul. Você não vai ficar de fora né? Na Anime Geek você contará com uma semana inteira voltada para a cultura pop japonesa! Acesse já a aba de eventos e faça a sua inscrição agora mesmo. Corre que as vagas são limitadas viu?😉👍🏽"
          readed={true}
        />
        <Text className="mt-2 text-center text-gray200">
          Sem mais notificações
        </Text>
      </ScrollView>
    </View>
  )
}
