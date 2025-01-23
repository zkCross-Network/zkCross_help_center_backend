import TelegramBot from "node-telegram-bot-api";
import envConfigs from "../config/env.config";

const bot = new TelegramBot(envConfigs.telegramToken);

function sendMessageToChannel(message: string) {
  bot
    .sendMessage(envConfigs.telegramChannelId, message)
    .catch((error: Error) => console.error("Error sending message:", error));
}

export default sendMessageToChannel;
