import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';

import { SelectionModel } from '@angular/cdk/collections';

import { MatAccordion } from '@angular/material/expansion';
import { MatTable } from '@angular/material/table';

import { ShortcutInput, AllowIn } from 'ng-keyboard-shortcuts';

import {
  Image,
  CarouselLibConfig,
  ModalGalleryRef,
  ModalGalleryService,
} from '@ks89/angular-modal-gallery';

import { SignalrService } from '../services/websocket/signalr.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild('operator', { static: true }) operator: ElementRef;
  @Input() filterPanelState: boolean = true;
  anomaliesPanelState: boolean = false;

  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
  ];
  @ViewChild(MatTable) table: MatTable<PeriodicElement>;
  dataSource: any[] = [];
  selection = new SelectionModel<PeriodicElement>(true, []);

  shortcuts: ShortcutInput[] = [];
  hotkeysOne = [
    {
      key: 'meta + 1',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.filterPanelState = !this.filterPanelState;
      },
    },
    {
      key: 'meta + 2',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.anomaliesPanelState = !this.anomaliesPanelState;
      },
    },
    {
      key: 'meta + i',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.changeInvertValue(80);
      },
    },
    {
      key: 'meta + r',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.resetImageFilter();
      },
    },
    {
      key: 'meta + a',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.toggleAllRows();
      },
    },
    {
      key: 'meta + down',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.accordion.openAll();
      },
    },
    {
      key: 'meta + up',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.accordion.closeAll();
      },
    },
  ];

  hotkeysTwo = [
    {
      key: 'meta + 3',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.filterPanelState = !this.filterPanelState;
      },
    },
    {
      key: 'meta + 4',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.anomaliesPanelState = !this.anomaliesPanelState;
      },
    },
    {
      key: 'meta + o',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.changeInvertValue(80);
      },
    },
    {
      key: 'meta + t',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.resetImageFilter();
      },
    },
    {
      key: 'meta + s',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.toggleAllRows();
      },
    },
    {
      key: 'meta + right',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.accordion.openAll();
      },
    },
    {
      key: 'meta + left',
      AllowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
      preventDefault: true,
      command: () => {
        this.accordion.closeAll();
      },
    },
  ];
  selectedHotkeys = this.hotkeysOne;

  brightnessValue: number = 100;
  contrastValue: number = 100;
  grayscaleValue: number = 0;
  hueValue: number = 0;
  invertValue: number = 0;
  opacityValue: number = 100;
  saturateValue: number = 100;
  sepiaValue: number = 0;
  imageStyle = {
    filter: `brightness(${this.brightnessValue / 100}) contrast(${
      this.contrastValue / 100
    }) grayscale(${this.grayscaleValue / 100}) hue-rotate(${
      this.hueValue
    }deg) invert(${this.invertValue / 100}) opacity(${
      this.opacityValue / 100
    }) saturate(${this.saturateValue / 100}) sepia(${this.sepiaValue / 100})`,
  };
  images: Image[] = [
    new Image(
      0,
      { img: '/assets/images/pic_1.jpg' },
      { img: '/assets/images/pic_1.jpg' }
    ),
    new Image(
      1,
      { img: '/assets/images/pic_2.jpg' },
      { img: '/assets/images/pic_2.jpg' }
    ),
    new Image(
      2,
      { img: '/assets/images/pic_3.jpg' },
      { img: '/assets/images/pic_3.jpg' }
    ),
    new Image(
      3,
      { img: '/assets/images/pic_4.jpg' },
      { img: '/assets/images/pic_4.jpg' }
    ),
    new Image(
      4,
      { img: '/assets/images/pic_5.jpg' },
      { img: '/assets/images/pic_5.jpg' }
    ),
    new Image(
      5,
      { img: '/assets/images/pic_6.jpg' },
      { img: '/assets/images/pic_6.jpg' }
    ),
    new Image(
      6,
      { img: '/assets/images/pic_7.jpg' },
      { img: '/assets/images/pic_7.jpg' }
    ),
    new Image(
      7,
      { img: '/assets/images/pic_8.jpg' },
      { img: '/assets/images/pic_8.jpg' }
    ),
  ];
  galleryConfig: CarouselLibConfig = {
    carouselPreviewsConfig: {
      visible: true,
      number: 6,
      width: 'auto',
    },
    carouselConfig: {
      keyboardEnable: true,
      maxHeight: '800px',
      maxWidth: '800px',
      modalGalleryEnable: true,
      objectFit: 'contain',
      showArrows: true,
    },
    slideConfig: {
      infinite: false,
      playConfig: { autoPlay: false, interval: 5000, pauseOnHover: true },
      sidePreviews: { show: true, size: { width: 'auto', height: 'auto' } },
    },
  };

  constructor(
    private modalGalleryService: ModalGalleryService,
    private ws: SignalrService
  ) {
    this.ws.connect((anomaly: string) => {
      this.dataSource.push({
        position: 1,
        name: anomaly,
        weight: 1.0079,
        symbol: 'H',
      });
      this.table.renderRows();
    });
  }

  ngAfterViewInit(): void {
    this.shortcuts.push(...this.selectedHotkeys);
  }

  openImageModalRowDescription(id: number, image: Image): void {
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[index],
    }) as ModalGalleryRef;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }

  changeBrightnessValue(value: number) {
    this.imageStyle = {
      filter: `brightness(${value / 100}) contrast(${
        this.contrastValue / 100
      }) grayscale(${this.grayscaleValue / 100}) hue-rotate(${
        this.hueValue
      }deg) invert(${this.invertValue / 100}) opacity(${
        this.opacityValue / 100
      }) saturate(${this.saturateValue / 100}) sepia(${this.sepiaValue / 100})`,
    };
  }
  changeContrastValue(value: number) {
    this.imageStyle = {
      filter: `brightness(${this.brightnessValue / 100}) contrast(${
        value / 100
      }) grayscale(${this.grayscaleValue / 100}) hue-rotate(${
        this.hueValue
      }deg) invert(${this.invertValue / 100}) opacity(${
        this.opacityValue / 100
      }) saturate(${this.saturateValue / 100}) sepia(${this.sepiaValue / 100})`,
    };
  }
  changeGrayscaleValue(value: number) {
    this.imageStyle = {
      filter: `brightness(${this.brightnessValue / 100}) contrast(${
        this.contrastValue / 100
      }) grayscale(${value / 100}) hue-rotate(${this.hueValue}deg) invert(${
        this.invertValue / 100
      }) opacity(${this.opacityValue / 100}) saturate(${
        this.saturateValue / 100
      }) sepia(${this.sepiaValue / 100})`,
    };
  }
  changeHueValue(value: number) {
    this.imageStyle = {
      filter: `brightness(${this.brightnessValue / 100}) contrast(${
        this.contrastValue / 100
      }) grayscale(${
        this.grayscaleValue / 100
      }) hue-rotate(${value}deg) invert(${this.invertValue / 100}) opacity(${
        this.opacityValue / 100
      }) saturate(${this.saturateValue / 100}) sepia(${this.sepiaValue / 100})`,
    };
  }
  changeInvertValue(value: number) {
    this.imageStyle = {
      filter: `brightness(${this.brightnessValue / 100}) contrast(${
        this.contrastValue / 100
      }) grayscale(${this.grayscaleValue / 100}) hue-rotate(${
        this.hueValue
      }deg) invert(${value / 100}) opacity(${
        this.opacityValue / 100
      }) saturate(${this.saturateValue / 100}) sepia(${this.sepiaValue / 100})`,
    };
  }
  changeOpacityValue(value: number) {
    this.imageStyle = {
      filter: `brightness(${this.brightnessValue / 100}) contrast(${
        this.contrastValue / 100
      }) grayscale(${this.grayscaleValue / 100}) hue-rotate(${
        this.hueValue
      }deg) invert(${this.invertValue / 100}) opacity(${
        value / 100
      }) saturate(${this.saturateValue / 100}) sepia(${this.sepiaValue / 100})`,
    };
  }
  changeSaturateValue(value: number) {
    this.imageStyle = {
      filter: `brightness(${this.brightnessValue / 100}) contrast(${
        this.contrastValue / 100
      }) grayscale(${this.grayscaleValue / 100}) hue-rotate(${
        this.hueValue
      }deg) invert(${this.invertValue / 100}) opacity(${
        this.opacityValue / 100
      }) saturate(${value / 100}) sepia(${this.sepiaValue / 100})`,
    };
  }
  changeSepiaValue(value: number) {
    this.imageStyle = {
      filter: `brightness(${this.brightnessValue / 100}) contrast(${
        this.contrastValue / 100
      }) grayscale(${this.grayscaleValue / 100}) hue-rotate(${
        this.hueValue
      }deg) invert(${this.invertValue / 100}) opacity(${
        this.opacityValue / 100
      }) saturate(${this.saturateValue / 100}) sepia(${value / 100})`,
    };
  }
  resetImageFilter() {
    this.imageStyle = {
      filter: `brightness(${100 / 100}) contrast(${100 / 100}) grayscale(${
        0 / 100
      }) hue-rotate(${0}deg) invert(${0 / 100}) opacity(${
        100 / 100
      }) saturate(${100 / 100}) sepia(${0 / 100})`,
    };
  }

  openImage(id: number, index: number, images: Image[] = this.images): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index],
    }) as ModalGalleryRef;
  }

  imageStyleToString(style: any): string {
    return JSON.stringify(style);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  filter() {
    console.log('FILTER', this.operator.nativeElement.value);
    this.ws.filter(this.operator.nativeElement.value);
  }

  swapHotkeys(): void {
    this.selectedHotkeys =
      this.selectedHotkeys[0].key === this.hotkeysOne[0].key
        ? this.hotkeysTwo
        : this.hotkeysOne;
    this.shortcuts = this.selectedHotkeys;
  }
}
