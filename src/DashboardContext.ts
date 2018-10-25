import { ConfigurationService } from './services/ConfigurationService';

export class DashboardContext {
  private static instance:DashboardContext|null = null;

  private constructor(
    public configurationService: ConfigurationService
  ){};

  static getInstance(): DashboardContext {
    if (this.instance === null) {
      const configurationService = new ConfigurationService();
      this.instance = new DashboardContext(configurationService);
    }

    return this.instance;
  }
}
