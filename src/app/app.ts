import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected isDark = localStorage.getItem('theme') === 'dark';

  ngOnInit(): void {
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  protected readonly conversionCategories = [
    {
      icon: 'calculate',
      label: 'Basic Math',
      desc: 'Addition, subtraction, multiplication, division, and more',
    },
    {
      icon: 'straighten',
      label: 'Length',
      desc: 'Meters, feet, inches, kilometers, miles, and more',
    },
    {
      icon: 'square_foot',
      label: 'Area',
      desc: 'Square meters, acres, hectares, square feet, and more',
    },
    { icon: 'monitor_weight', label: 'Mass', desc: 'Kilograms, pounds, ounces, tons, and more' },
    { icon: 'water_drop', label: 'Volume', desc: 'Liters, gallons, cups, milliliters, and more' },
    { icon: 'thermostat', label: 'Temperature', desc: 'Celsius, Fahrenheit, Kelvin' },
    { icon: 'local_gas_station', label: 'Fuel', desc: 'MPG, L/100km, km/L, and more' },
    { icon: 'speed', label: 'Speed', desc: 'km/h, mph, knots, m/s, and more' },
    { icon: 'rotate_right', label: 'Angle', desc: 'Degrees, radians, gradians' },
    { icon: 'compress', label: 'Pressure', desc: 'Pascal, bar, PSI, atm, and more' },
    { icon: 'bolt', label: 'Energy', desc: 'Joules, calories, kWh, BTU, and more' },
    { icon: 'flash_on', label: 'Power', desc: 'Watts, horsepower, BTU/h, and more' },
    { icon: 'storage', label: 'Data', desc: 'Bytes, KB, MB, GB, TB, and more' },
    { icon: 'schedule', label: 'Time', desc: 'Seconds, minutes, hours, days, and more' },
    { icon: 'wifi_tethering', label: 'Frequency', desc: 'Hertz, kHz, MHz, GHz, and more' },
    { icon: 'tag', label: 'Number Base', desc: 'Binary, octal, decimal, hexadecimal' },
  ];

  protected readonly features = [
    {
      icon: 'mic',
      title: 'Voice-Powered',
      desc: 'Speak your calculations naturally — just say "what is 15 percent of 200" or "convert 5 feet to meters"',
    },
    {
      icon: 'offline_bolt',
      title: 'Works Offline',
      desc: 'No internet required. All voice recognition and calculations happen entirely on your device.',
    },
    {
      icon: 'translate',
      title: 'Multiple Languages',
      desc: 'Fully localized with support for multiple languages and regional formats.',
    },
    {
      icon: 'dark_mode',
      title: 'Light & Dark Mode',
      desc: 'Beautiful Material 3 design that adapts to your system theme preference.',
    },
    {
      icon: 'content_copy',
      title: 'Copy Results',
      desc: 'Easily copy any calculation result to your clipboard with a single tap.',
    },
    {
      icon: 'history',
      title: 'Calculation History',
      desc: 'Access your past calculations anytime to review or reuse previous results.',
    },
  ];
}
