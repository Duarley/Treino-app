# Treino 3 Meses (Web + Android APK)

Este app implementa um plano de 3 meses (12 semanas) com:
- Timer de intervalo correto por exercicio
- Modo coach com explicacao e simulacao durante o treino
- Lembretes e notificacoes (web e Android)
- Configuracoes salvas localmente

## Como rodar no web

1. `cd /root/treino-app`
2. `npm install`
3. `npm run dev`

Abra o endereco mostrado no terminal.

## Como gerar APK Android (direto)

Requisitos:
- Node 18+
- Java 17
- Android SDK + Platform Tools

Passos:
1. `cd /root/treino-app`
2. `npm install`
3. `npm run cap:add` (so na primeira vez)
4. `npm run cap:sync`
5. `npm run apk:debug`

O APK vai aparecer em:
`android/app/build/outputs/apk/debug/app-debug.apk`

Para release:
1. `cd android`
2. `./gradlew assembleRelease`

## Notificacoes

- Android: o app pede permissao e agenda notificacoes locais.
- Web: exige HTTPS ou localhost, e a pagina precisa ficar aberta.

## Estrutura do plano

- Semana 1 e 2 seguem o seu esquema com aumento de dificuldade.
- O ciclo de 2 semanas se repete ao longo de 12 semanas (3 meses).

## Ajustes rapidos

- Exercicios e intervalos: `www/app.js`
- Layout: `www/styles.css`
