# Dá Horas Filmes

Aplicativo desenvolvido utilizando React Native com Expo.

---

# [FINAL] 09_build-usando-expo-eas

## Roteiro para o build

### Etapa 1: criando e configurando um projeto Expo EAS

1. Entre no https://expo.dev/login usando seu login e senha
2. Crie um projeto Expo e adicionar o `name` e `slug` (coloque igual ao que está em seu `app.config.ts`)
3. Na janela popup, entre em "For na existing...", e copie apenas o comando `eas init --id hash-do-id-do-seu projeto`
4. No terminal, cole o comando copiado acima e execute com o NPX: `npx eas init --id hash-do-id-do-seu projeto`
5. Se for a primeira vez, o EAS vai pedir seu login e senha. Coloque esses dados e dê enter.

Vai dar alguns alertas/erros devido ao uso do `app.config.ts`, devido ao EAS não conseguir adicionar automaticamente as configurações necessárias neste arquivo.

No entanto, veja na mensagem de erro que ele dará o código necessário para que você adicione ao `app.config.ts`:

```js
eas: {
  projectId: "hash-do-id-do-seu projeto";
}
```

6. Simplesmente copie o código (semelhante ao exemplo acima) que ele mostra no terminal e cole dentro da chave `extra` de seu `app.config.ts`, logo após a chave `apiKey`.
7. Aproveite para adicionar também a chave `owner: 'seu-login-expo-eas'` no topo do `app.config.ts`, podendo ser logo depois da chave `slug`
8. Rode novamente o `npx eas init --id hash-do-id-do-seu projeto` e estando tudo OK, dessa vez não haverá erros.

### Etapa 2: verificando e corrigindo dependências

1. Execute `npx expo install --check` para verificar se há atualizações para fazer de pacotes/dependências usadas pelo Expo
2. Se no terminal surgir a pergunta "Fix dependencies", digite "Y" para que o expo tente resolver automaticamente.

Neste ponto, provavelmente ele vai reclamar do `react` e principalmente do `react-dom`, usado pelo `expo-router`. Devido a compatibilidade com a SDK 54 do Expo, não podemos (no momento) atualizar este pacote.

Então, adicione a chave `overrides` para `react-dom` em seu `package.json` logo após a chave `private`:

```json
"overrides": {
    "react-dom": "19.1.0"
}
```

Isso fará com que este pacote **não seja atualizado**, ou seja, continuará sendo usada a versão já indicada no `package.json`

3. Execute novamente o `npx expo install --check` e digite `Y` quando surgir a pergunta "Fix dependencies"

Se der algum erro, reveja os processos anteriores.

4. Execute `npx expo-doctor` para uma última verificação de dependências, versões e ferramentas estejam corretas e compatíveis com a versão do Expo usada no projeto.

Se surgir algum outro pacote para atualizar, tente fazer a atualização usando `npx expo install nome-pacote`

### Etapa 3: configurando o projeto para o build preview

1. Execute o comando `npx eas build:configure` e escolha a plataforma `Android`

Esse comando irá criar na raíz o arquivo `eas.json`. Nele, é feita configurações relacionadas ao tipo de `build` (development, preview e production), além de ajustes específicos para cada tipo de build.

2. Adicione ao build `preview`, logo após `distribution`, a chave:

```json
"android": {
    "buildType": "apk"
},
```

Desta forma trocamos o formato de compilação do aplicativo para a extensão `.apk`.

O padrão (extensão `.aab`) não permite a instalação do aplicativo fora da loja **Google Play Store**.

### Etapa 4: configurar chave de API para o EAS

_Obs: faça esta etapa **apenas** se o seu projeto usa alguma chave de API_

1. Execute `npx eas env:create`
2. Coloque `API_KEY` como **variable name**
3. Selecione `String` como **type**
4. Em **visibility**, escolha `Secret`
5. Em **variable value**:
   - Primeiro, entre no seu `.env.local` e copie a chave da API (tudo que vem após o sinal de igual)
   - Depois, volte ao terminal e cole a chave como valor de sua variável
6. Em **environment**, digite "A" para selecionar todos os builds

Agora a chave de API fica também armazenada nos servidor do Expo EAS, dentro do seu projeto na seção **Environment Variables**.

### Etapa 5: configurar o expo-updates para atualizações OTA (Over The Air)

1. Execute `npx eas update:configure`

Vai surgir um erro/alerta também relacionado a necessidade de adicionar uma configuração manualmente ao `app.config.ts`. Veja que no terminal aparecerá um código semelhante ao abaixo:

```js
updates: {
    url: "https://u.expo.dev/hash-do-id-do-seu-projeto-expo",
},
runtimeVersion: {
    policy: "appVersion",
},
```

2. Copie o seu código a partir do terminal e o adicione no final do seu `app.config.ts`, logo após a chave `extra`.
3. Execute novamente o `npx eas update:configure`

Veja que é adicionado ao `eas.json` uma propriedade chamada `channel` dentro de cada build. É através dela que o EAS realiza as atualizações em um app já instalado no aparelho do usuário, **sem necessidade de fazer um novo build completo do aplicativo**.

Além disso, é automaticamente instalada a lib `expo-updates`.

#### Pontos de atenção

- Ao usar o Expo Updates, é necessário fechar e abrir o aplicativo umas 2x para que atualização ocorra
- As atualizações ficam salvas no cache do aplicativo dentro do sistema operacional
- Lembre-se que nem todo tipo de atualização é possível através do Expo Update
- Grandes modificações estruturais e de funcionalidades (como a adição de novas libs e APIs nativas), exigem um novo build e instalação
- Teste bastante o aplicativo após o update
- Caso note algum bug ou ausência de algum recurso, faça então um novo build completo

### Etapa 6: executar o build usando os servidores do EAS

1. Antes de iniciar o build, adicione ao `app.config.ts` (dentro de `android`) a chave:

```js
package: "com.seudominio_ou_seunome.nome_do_seu_app";
```

2. Execute `npx eas build --platform android --profile preview`
3. Na primeira vez em que o build é feito, o EAS pergunta se você deseja criar uma **Android Keystore**. Digite "Y".

A keystore é um arquivo que contém uma chave de assinatura digital usada para assinar seu aplicativo. Essa assinatura é obrigatória para que o app possa ser instalado em dispositivos Android fora do modo de desenvolvimento, e mais ainda se pretende publicar na Play Store.

Desse ponto em diante, o trabalho passa a ser dos servidores do Expo EAS, aparecendo algumas mensagens como:

- **Build Queued**: seu build entrou na fila de builds e está aguardando sua vez para começar
- **Waiting in Free tier queue (starting soon)**: seu build está na fila de espera dos usuários do plano gratuito do Expo.
- **Build in progress**: o Expo EAS já começou a compilar seu app nos servidores

_Obs.: pode ser que, em algum momento, em vez de **build in progress**, apareça **Wait XX minutes...**. Isso indica que no plano gratuito, há um congestionamento na fila de build e por isso o seu build entrou numa fila de espera. Após o tempo estimado, automaticamente seu build começará (build in progress). **Portanto, basta aguardar**._

### Etapa 7 (final): baixar o APK e instalar em smartphone Android

Ao final do processo:

**Deu ruim?**

Verifique os logs do build diretamente no site Expo EAS.

Analise as mensagens de erro, resolva os conflitos e execute o build novamente.

**Deu bom?**

Vai aparecer um grande QR Code, bastando tirar uma foto dele usando o app de câmera (e não o Expo Go). Também aparece um link direto para a página de download do APK.

Ao entrar no link (ou via QR Code), basta clicar no botão **Install** para realizar o download do APK e em seguida instalar normalmente no aparelho.

_Obs.: mensagens de verificação ou de permissão podem aparecer no momento da instalação, bastando aceitar todas elas._

Além do aparelho, é possível também instalar e usar no emulador.

Veja que no terminal também apareceu a mensagem "Install and run Android build on na emulator?".

Basta abrir **primeiro** o emulador Android e, voltando ao terminal, digitar "Y" para que o app seja baixado e instalado automaticamente no emulador.

---

## 08_gerenciamento-de-favoritos

- Instalação da lib `AsyncStorage`
- Criação da tela de favoritos (básica)
- Criação do service `storage-favoritos.ts` com as funções de manipulação do Storage (armazenamento físico no aparelho)
- Carregamento dos dados com auxílio de useEffect
- Exibição em FlatList
- Uso de funções intermediárias em favoritos.tsx para acionar as funções do storage para salvar, apagar e apagarTudo.
- Uso de Alert com botões Sim e Não para apagar todos os favoritos

---

## 07_detalhes-do-filme

- Criação de rota dinâmica: `app/detalhes/[id].tsx`
- Adiciona os dados do filme como string para o parâmetro da rota de detalhes
- Em Detalhes, captura o filme como string e converte para objeto
- Exibe os dados do filme nos componentes
- Formata a data e ajusta lógica para exibir "Não disponível" quando não tiver data e sinopse

---

## 06_finalizacao-do-resultados-e-componentes-adicionais

- Definindo alias/apelido para os caminhos (tsconfig.json)
- Adição de states para resultados da busca por filmes e controle do loading
- Uso do componente nativo `<FlatList>` para listas de dados dinâmicos
- Ajuste do FlatList para renderização de componente `<CardFilme>` com dados de cada filme
- Ajuste do FlatList para renderização de componente `<ItemVazio>` caso não tenha resultados na busca de filme
- Ajuste do layout do FlatLista para modo de 2 colunas (grid)
- Adição de imagem do filme e imagem alternativa em CardFilme
- Adição de créditos ao TMDB na tela Sobre

---

## 05_uso-da-api-com-config-env

- Cadastro no TheMovieDB para obter a API Key
- Conversão do app.json para app.config.ts
- Adição da propriedade extra.apiKey no app.config.ts e import do dotenv
- Instalação do Axios (lib muito usada para comunicação com APIs)
- Configuração do service/api.ts com parâmetros para acessar a API via Axios
- Utilização do useEffect com o Axios para fazer consulta de filmes na API

---

## 04_telas-basicas-de-busca-e-resultados

- Criação da versão básicas da telas `Busca` e `Resultados`
- Uso do componente `TextInput` para entrada de dados na tela
- Uso de state para gerenciar o filme digitado no campo de entrada
- Validação básica usando `Alert` e `Vibration`
- Navegação via programação com `useRouter` + passagem de parâmetros
- Acesso aos parâmetros de rota com `useLocalSearchParams`

---

## 03_navegacao-expo-router-e-telas-privacidade-sobre

- Instalação da lib `expo-router` e suas dependências
- Ajustes e atualização para o Expo SDK 54
- Configuração da `Stack` (pilha de navegação das telas) no arquivo `_layout.tsx`
- Troca da `StatusBar` para a versão React Native
- Migração do conteúdo/estrutura do `App.tsx` para o `_layout.tsx` e para as páginas correspondentes (index, privacidade e sobre)
- Configuração das rotas usando componente `Link` do expo-router
- Uso do componente `ScrollView` para telas com barra de rolagem

---

## 02_mais-estilos-logo-font-icones-pressable

- Aplicação da imagem do logo usando o componente <Image>
- Adição e configuração de fonte personalizada usando o `expo-font` e `useFonts`
- Estilização do App.tsx usando recursos do `StyleSheet`
- Substituição do `Button` por `Pressable` para criação de botões customizados
- Uso de ícones através do `@expo-vector-icons`
- Aplicação do `ActivityIndicator` para criação de um componente `Loading`

---

## 01_estrutura-e-estilizacao-basica

- Remoção das imagens originais na pasta assets
- Adição de imagens específicas para o aplicativo
- Configuração dos detalhes do aplicativo em `app.json`
- Instalação da dependência (lib) `react-native-safe-area-context`

Use o comando: `npx expo install react-native-safe-area-context`

_Utilizamos o `expo install` para garantir a instalação de dependências (ou libs) que sejam compatíveis com a versão de SDK do Expo usada em seu projeto._

- Refatoramos a estrutura e estilização do `App.tsx` usando os componentes: `SafeAreaProvider`, `SafeAreaView`, `StatusBar` (do expo), `View`, `Text` e `Button`

- Uso do flex para determinar o tamanho das views.
