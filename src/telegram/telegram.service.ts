import { Inject, Injectable } from '@nestjs/common';
import { getTelegramConfig } from 'src/configs/telegram.config';
import { Telegraf } from 'telegraf';
import { TELEGRAM_MODULE_OPTIONS } from './telegram.constants';
import { ITelegramOptions } from './telegram.interface';

@Injectable()
export class TelegramService {
  bot: Telegraf;
  options: ITelegramOptions;

  constructor(@Inject(TELEGRAM_MODULE_OPTIONS) options: ITelegramOptions) {
    this.options = options;
    this.bot = new Telegraf(this.options.token);
  }

  async sendMessage(message: string, chatId: string = this.options.chatId) {
    await this.bot.telegram.sendMessage(chatId, message);
  }
}
