import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/about/slider.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();