import { WidgetType } from './WidgetType';

export type WidgetConfiguration = {
  id: number;
  label: string;
  widgetType: WidgetType;
  configuration: any;
}
