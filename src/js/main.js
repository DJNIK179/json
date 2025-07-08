import '../scss/main.scss';

// components

import { useTheme } from './components/theme';
import { useBurger } from './components/burger.js';
import {
  useInsightSLider,
  useTestimonialsSlider,
} from './components/home/slider.js';

useTheme();
useBurger();
useInsightSLider();
useTestimonialsSlider();
