import * as R from 'ramda';

export const getEnvDBPort = R.compose(Number, R.path<string>(['env', 'PGPORT']));
export const getEnvDBPassword = R.path<string>(['env', 'PGPASSWORD']);
export const getEnvDBUser = R.path<string>(['env', 'PGUSER']);
export const getEnvDBHost = R.path<string>(['env', 'PGHOST']);
export const getEnvDBName = R.path<string>(['env', 'PGDATABASE']);

export const getEnvLogLevel = R.pathOr<any>('error', ['env', 'LOG_LEVEL']);

export const getEnvTelegramBotToken = R.path<string>((['env', 'TELEGRAM_BOT_TOKEN']));