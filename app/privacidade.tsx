import { Stack } from "expo-router";
import { Text, StyleSheet, ScrollView, View } from "react-native";

export default function Privacidade() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Política de Privacidade",
        }}
      />
      <View style={estilos.container}>
        <ScrollView>
          <Text style={estilos.paragrafo}>
            A sua privacidade é de extrema importância para nós. Esta política
            de privacidade explica como coletamos, usamos, divulgamos e
            protegemos as suas informações ao utilizar o aplicativo "Dá Hora
            Filmes!". Ao continuar a usar o app, você concorda com os termos
            desta política.
          </Text>

          <Text style={estilos.subtitulo}>Coleta e Uso de Informações</Text>
          <Text style={estilos.paragrafo}>
            Nós não coletamos dados pessoais identificáveis, como nome, e-mail
            ou número de telefone. O aplicativo "Dá Hora Filmes!" é projetado
            para funcionar sem a necessidade de criação de conta ou login. Todas
            as ações, como buscas de filmes e a marcação de favoritos, são
            processadas localmente no seu dispositivo.
          </Text>
          <Text style={estilos.paragrafo}>
            As informações de busca de filmes são utilizadas apenas para
            aprimorar a sua experiência de uso no momento da pesquisa e não são
            armazenadas em nossos servidores. Os filmes favoritados são salvos
            localmente no seu dispositivo, utilizando o sistema de armazenamento
            interno, e não são compartilhados com terceiros.
          </Text>

          <Text style={estilos.subtitulo}>Dados Anônimos</Text>
          <Text style={estilos.paragrafo}>
            Podemos coletar e usar dados anônimos e agregados para fins de
            análise interna, como para entender quais recursos são mais
            populares ou como os usuários interagem com o aplicativo. Esses
            dados não contêm nenhuma informação pessoal que possa identificá-lo.
          </Text>
          <Text style={estilos.paragrafo}>
            Por exemplo, podemos analisar o número de vezes que a tela de busca
            é acessada, mas nunca o que foi buscado.
          </Text>

          <Text style={estilos.subtitulo}>Links para Outros Sites</Text>
          <Text style={estilos.paragrafo}>
            O aplicativo pode conter links para outros sites que não são
            operados por nós. Se você clicar em um link de terceiros, será
            direcionado para o site desse terceiro. Recomendamos fortemente que
            você revise a política de privacidade de cada site que você visita.
            Nós não temos controle e não assumimos nenhuma responsabilidade pelo
            conteúdo, políticas de privacidade ou práticas de quaisquer sites ou
            serviços de terceiros.
          </Text>

          <Text style={estilos.subtitulo}>Segurança</Text>
          <Text style={estilos.paragrafo}>
            Tomamos medidas de segurança razoáveis para proteger suas
            informações. No entanto, nenhum método de transmissão pela internet
            ou de armazenamento eletrônico é 100% seguro. Embora nos esforcemos
            para proteger suas informações, não podemos garantir a sua segurança
            absoluta.
          </Text>

          <Text style={estilos.subtitulo}>Consentimento</Text>
          <Text style={estilos.paragrafo}>
            Ao usar o aplicativo, você consente com a coleta e uso de
            informações conforme descrito nesta política.
          </Text>

          <Text style={estilos.subtitulo}>
            Alterações na Política de Privacidade
          </Text>
          <Text style={estilos.paragrafo}>
            Reservamo-nos o direito de modificar esta política de privacidade a
            qualquer momento. Quaisquer alterações serão postadas nesta página.
            Ao continuar a usar o aplicativo após as alterações serem
            publicadas, você aceita a nova política.
          </Text>
        </ScrollView>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
    color: "#555",
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
    marginBottom: 10,
  },
});
