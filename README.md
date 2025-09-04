# Dá Horas Filmes

Aplicativo desenvolvido utilizando React Native com Expo.

## 01_estrutura-e-estilizacao-basica

- Remoção das imagens originais na pasta assets
- Adição de imagens específicas para o aplicativo
- Configuração dos detalhes do aplicativo em `app.json`
- Instalação da dependência (lib) `react-native-safe-area-context`

Use o comando: `npx expo install react-native-safe-area-context`

_Utilizamos o `expo install` para garantir a instalação de dependências (ou libs) que sejam compatíveis com a versão de SDK do Expo usada em seu projeto._

- Refatoramos a estrutura e estilização do `App.tsx` usando os componentes: `SafeAreaProvider`, `SafeAreaView`, `StatusBar` (do expo), `View`, `Text` e `Button`

- Uso do flex para determinar o tamanho das views.
