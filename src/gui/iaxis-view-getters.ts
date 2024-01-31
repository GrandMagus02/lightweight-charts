import { IDataSource } from '../model/idata-source';
import { IPaneView } from '../views/pane/ipane-view';

type IAxisViewsGetter = (
	source: IDataSource
) => readonly IPaneView[];

export type IPriceAxisViewsGetter = IAxisViewsGetter;
export type ITimeAxisViewsGetter = IAxisViewsGetter;
