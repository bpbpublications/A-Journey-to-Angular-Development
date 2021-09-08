import { AppConfigService } from './app-config.service';
export function initializeConfig(appConfigService: AppConfigService) {
  return () => {
    return appConfigService.loadConfig();
  };
}
