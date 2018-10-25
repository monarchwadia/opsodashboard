import { Configuration } from '../models/Configuration';
import { WidgetType } from '../models/WidgetType';

export class ConfigurationService {
  getConfiguration(): Configuration {
    return {
      widgets: [
        {
          id: 1,
          label: "Some Webview",
          widgetType: WidgetType.Webview,
          configuration: {
            src: "http://www.youtube.com/embed/eCfDxZxTBW4"
          }
        },
        {
          id: 2,
          label: "Some Other Webview",
          widgetType: WidgetType.Webview,
          configuration: {
            src: "http://www.youtube.com/embed/eCfDxZxTBX1"
          }
        }
      ]
    };
  }
}
