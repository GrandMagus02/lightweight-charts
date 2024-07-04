# Lightweight Charts v.4.1.2 fork

## About

This forks implements the following features:
- [x] Multiple panes support
- [x] Mouse down/up event types
- [ ] Multiple price scales support

## Usage

```javascript
import { createChart } from 'lightweight-charts';

// ...

const options = {
  layout: {
    // allow to resize panes by dragging the separator between them
    resizePanes: true,  // type: boolean, default: false
    // the array of panes settings, where first element is main pane
    panes: [ // type: array, default: [{ stretchFactor: 2 }]
      { 
        // stretch factor means the ratio of the pane's height to the total height of all panes
        stretchFactor: 1,  // type: number
      },
      {
        stretchFactor: 2,
      }
    ]
  },
}

const chart = createChart(container, options);

const series0 = chart.addLineSeries();  // this will be rendered on the first pane
const series1 = chart.addLineSeries({  // this will be rendered on the second pane
  pane: 1,  // type: number, default: 0
});
```

## Customization

```css
.lwc-separator-handle {
  /* separator resize handle */
}
.lwc-separator-handle--active {
  /* separator resize handle when dragging */
}
```
