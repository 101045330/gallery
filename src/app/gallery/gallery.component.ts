import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {

  images = [
    { src: 'https://picsum.photos/150/150?random=1', alt: 'Image 1' },
    { src: 'https://picsum.photos/150/150?random=2', alt: 'Image 2' },
    { src: 'https://picsum.photos/150/150?random=3', alt: 'Image 3' },
    { src: 'https://picsum.photos/150/150?random=4', alt: 'Image 4' },
    { src: 'https://picsum.photos/150/150?random=5', alt: 'Image 5' },
    { src: 'https://picsum.photos/150/150?random=6', alt: 'Image 6' },
    { src: 'https://picsum.photos/150/150?random=7', alt: 'Image 7' },
    { src: 'https://picsum.photos/150/150?random=8', alt: 'Image 8' },
    { src: 'https://picsum.photos/150/150?random=9', alt: 'Image 9' },
    { src: 'https://picsum.photos/150/150?random=10', alt: 'Image 10' },
];



  currentImageIndex = 0;

  get currentImage() {
    return this.images[this.currentImageIndex];
  }
  //method to go to the previous image is not the first image
  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
  //method to go to the last image if not the last image
  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
  //set current image by supplying an identifier
  setImage(index: number) {
    this.currentImageIndex = index;   
  }


}//class
