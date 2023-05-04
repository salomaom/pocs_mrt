import { Component,  } from '@angular/core';

import {
  Image,
  CarouselLibConfig,
  ModalGalleryRef,
  ModalGalleryService,
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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

  constructor(private modalGalleryService: ModalGalleryService) {}

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
}
