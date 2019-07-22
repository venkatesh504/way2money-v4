import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import {FormsModule} from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {MatCardModule} from '@angular/material/card';
import { Ng5SliderModule } from 'ng5-slider';
import { TermsUseComponent } from './terms-use/terms-use.component';
import {CommonComponentsModule} from './../common-components/common-components.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 40,
};
@NgModule({
  declarations: [HomePageComponent, TermsUseComponent, PrivacyPolicyComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatExpansionModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    SwiperModule,
    MatCardModule,
    MatSelectModule,
    Ng5SliderModule,
    MatIconModule,
    CommonComponentsModule

  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
      {
        provide: SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG,


      }
    ]

})
export class HomePageModule {}
