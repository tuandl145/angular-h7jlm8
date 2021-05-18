import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import {
  NodeModel,
  ConnectorModel,
  SymbolInfo,
  PaletteModel,
  SnapConstraints,
  SnapSettingsModel,
  ContextMenuSettingsModel,
  MarginModel,
  NodeConstraints
} from '@syncfusion/ej2-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';

/**
 * Sample for events
 */

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram: DiagramComponent;

  public getSymbolDefaults(symbol: NodeModel): void {
    symbol.width = 50;
    symbol.height = 50;
    symbol.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
    symbol.style.strokeColor = '#757575';
  }

  public snapSettings: SnapSettingsModel = {
    constraints: SnapConstraints.None
  };

  public symbolMargin: MarginModel = {
    left: 15,
    right: 15,
    top: 15,
    bottom: 15
  };

  public expandMode: ExpandMode = 'Multiple';

  public getSymbolInfo(symbol: NodeModel): SymbolInfo {
    return { fit: true };
  }


  public data: { [key: string]: Object }[] = [
    { text: 'Drag enter', id: 'dragEnter' },
    { text: 'Drag leave', id: 'dragLeave' },
    { text: 'Drag over', id: 'dragOver' },
    { text: 'Click', id: 'click', isChecked: true },
    { text: 'History change', id: 'historyChange', isChecked: true },
    { text: 'Double click', id: 'doubleClick' },
    { text: 'Text edit', id: 'textEdit', isChecked: true },
    { text: 'Scroll change', id: 'scrollChange' },
    { text: 'Selection change', id: 'selectionChange', isChecked: true },
    { text: 'Size change', id: 'sizeChange', isChecked: true },
    { text: 'Connection change', id: 'connectionChange', isChecked: true },
    { text: 'SourcePoint change', id: 'sourcePointChange' },
    { text: 'TargetPoint change', id: 'targetPointChange' },
    { text: 'Position change', id: 'positionChange', isChecked: true },
    { text: 'Rotate change', id: 'rotateChange', isChecked: true },
    { text: 'Collection change', id: 'collectionChange', isChecked: true },
    { text: 'Mouse enter', id: 'mouseEnter' },
    { text: 'Mouse leave', id: 'mouseLeave' },
    { text: 'Mouse over', id: 'mouseOver' },
    { text: 'Context menu open', id: 'contextMenuOpen' },
    {
      text: 'Context menu before item render',
      id: 'contextMenuBeforeItemRender'
    },
    { text: 'Context menu click', id: 'contextMenuClick' }
  ];

  //Initialize the basicshapes for the symbol palatte
  public basicShapes: NodeModel[] = [
    { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
    { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
    { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },
    { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' } },
    { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
    { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' } },
    { id: 'Cylinder', shape: { type: 'Basic', shape: 'Cylinder' } },
    { id: 'Plus', shape: { type: 'Basic', shape: 'Plus' } },
    { id: 'Heptagon', shape: { type: 'Basic', shape: 'Heptagon' } },
    { id: 'Octagon', shape: { type: 'Basic', shape: 'Octagon' } },
    { id: 'Trapezoid', shape: { type: 'Basic', shape: 'Trapezoid' } },
    { id: 'Decagon', shape: { type: 'Basic', shape: 'Decagon' } },
    { id: 'RightTriangle', shape: { type: 'Basic', shape: 'RightTriangle' } },
    { id: 'Diamond', shape: { type: 'Basic', shape: 'Diamond' } },
    { id: 'Star', shape: { type: 'Basic', shape: 'Star' } }
  ];

  //Initializes connector symbols for the symbol palette
  public connectorSymbols: ConnectorModel[] = [
    {
      id: 'Link1',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575' }
      },
      style: { strokeWidth: 1, strokeColor: '#757575' }
    },
    {
      id: 'link3',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 1, strokeColor: '#757575' },
      targetDecorator: { shape: 'None' }
    },
    {
      id: 'Link21',
      type: 'Straight',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575' }
      },
      style: { strokeWidth: 1, strokeColor: '#757575' }
    },
    {
      id: 'link23',
      type: 'Straight',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 1, strokeColor: '#757575' },
      targetDecorator: { shape: 'None' }
    },
    {
      id: 'link33',
      type: 'Bezier',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 1, strokeColor: '#757575' },
      targetDecorator: { shape: 'None' }
    }
  ];

  public palettes: PaletteModel[] = [
    {
      id: 'basic',
      expanded: true,
      symbols: this.basicShapes,
      iconCss: 'e-ddb-icons e-basic',
      title: 'Basic Shapes'
    },
    {
      id: 'connectors',
      expanded: true,
      symbols: this.connectorSymbols,
      iconCss: 'e-ddb-icons e-connector',
      title: 'Connectors'
    }
  ];
  public contextMenu: ContextMenuSettingsModel = {
    show: true,
    items: [
      {
        text: 'Thao tác',
        id: 'delete',
        target: '.e-diagramcontent',
        iconCss: 'e-copy',
      }
    ],
    showCustomMenuOnly: true
  };

}
