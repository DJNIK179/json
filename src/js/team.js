import '/scss/team.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/team/slider.js';
import { useCreatorsSlider } from './components/team/creators..js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
useCreatorsSlider();