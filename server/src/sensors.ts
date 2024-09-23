export interface Sensor {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const sensors: Sensor[] = [
  {
    id: 1,
    name: 'ecobee Smart Sensor 2 Pack - Comfort, Security, Energy Savings - Smart Home - Compatible with ecobee Smart Thermostats for Home ',
    price: 96,
    description:
      'Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.',
    image: 'http://localhost:8080/sensor-1.jpg',
    longDescription: `
    Knows when a room is occupied and communicates the temperature to your ecobee smart thermostat from up to a range of 60 ft, through walls and floors. This prompts your thermostat to make temperature adjustments ensuring comfort.
    Place SmartSensor in your bedroom and say goodbye to those moments that are either too hot or too cold throughout the night.
    Understands your household comings and goings, saving energy and saving you money by not heating or cooling an empty home.
    You’ll be able to see the temperature difference and occupancy in particular parts of your home and adjust right from the ecobee app for maximum comfort.
    Installation is quick and easy. Place your SmartSensor, magnetically and wirelessly, at least 5ft above the floor on its satin-steel stand or on any wall using the self-adhesive wall mounting brackets
    It can detect unexpected motion. When Smart Security is armed, you get real-time alerts on the ecobee app, so you know what’s happening at home when you’re not there. *Requires ecobee Smart Security subscription.
`,
  },
  {
    id: 2,
    name: 'VBESTLIFE 2.1inch AIO Computer Temp Monitor, CPU Cooler LCD Display Screen Upgrade Kit, PC Sensor Panel CPU Temp Monitor for Water Cooling Systems, for AIDA64 (Black)',
    price: 76.27,
    description:
      'Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.',
    image: 'http://localhost:8080/sensor-2.jpg',
    longDescription: `
    REAL TIME DISPLAY: AIO computer temp monitor displays the computer's temperature and usage of CPU, GPU, , and HDD data. Personalize your wallpaper with your favorite image.
    480x480 RESOLUTION: The Round AIO PC temp monitor features a 480x480 resolution and ultra bright backlight. The water cooled screen supports real time temperature control and stepless dimming, making it easy to install inside or outside a desktop case. Support 360 degree rotation, save electricity and environmental defend, the screen automatically closes after power failure.
    MULTIPLE DATA MONITORING: Monitor CPU usage, model, temperature, voltage, frequency, fan, monitor graphics card usage, power consumption, model, fan frequency, temperature, pump fan, memory, hard drive, network, weather, date, volume.
    EASY INSTALLATION: The 2.1in CPU temp monitor is compatible with any liquid CPU cooler, easy to install, and with the help of the for AIDA64 software, you can create a fully immersive ecosystem for your setup with no impact on computer performance.
    MULTIPLE THEMES: PC temperature display supports a variety of themes, supports score themes, dynamic theme editor, other themes, etc., only some themes are provided.
`,
  },
  {
    id: 3,
    name: 'Hilitand 3-Fans Speed Computer Fan Controller, CPU Temperature Sensor PC Chassis Fan Controller Front Panel with Date Time Temperature Display Drive Bay ',
    price: 20.5,
    description:
      ' Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.',
    image: 'http://localhost:8080/sensor-3.jpg',
    longDescription: `
    Equipped with 3 way computer fan control, which can monitor and control the temperature of computer and other equipment.
    Intelligently test the computer temperature, the controller can automatically increase or decrease fan speed when CPU is too hot.
    When the computer is standby or the detection point is within the standard range, the fan speed is automatically reduced to reduce fan noise.
    The fan speed can be reduced or increased by manual setting to adjust the computer temperature.
    Manually set the alarm temperature, the range is from 40 to 90 degrees. When temperature exceeds this range or the fan is stuck, an alarm will sound automatically, which can effectively avoid computer hardware damage due to overheating.
`,
  },
  {
    id: 4,
    name: ` Bike Speedometer Wheel Magnet - Universal Computer Speed Sensor Spoke Magnet - for Mountain Bikes, Road Bicycles, and MTBs Visit the KIEVODE Store`,
    price: 6.99,
    description: `
    PRODUCT SPECIFICATION
    Name: Universal Wheel Magnet
    Application Range: Fits most bike models
    Size: 15*12*11mm(0.59*0.47*0.43in)
    Weight: 3g/PC
    Color: Black
    Material: Magnet and Plastic
    PACKAGE INCLUDES: 1 PC Universal Wheel Magnet.
    `,
    image: 'http://localhost:8080/sensor-4.jpg',
    longDescription: `
    SUPERIOR MAGNETIC STRENGTH: The Universal Wheel Magnet is engineered with a powerful magnet that provides exceptional magnetic strength. It securely attaches to wheels, ensuring a reliable and stable connection.
    EASY INSTALLATION: Installing the Universal Wheel Magnet is a breeze. With its universal design, it fits most bike models and can be easily attached to the spokes without the need for any tools.
    RELIABLE SPEED AND DISTANCE TRACKING: By attaching the Universal Wheel Magnet to wheels, you gain accurate speed and distance tracking capabilities. This is particularly useful for fitness enthusiasts, cyclists, and those who want to keep precise records of their workouts or outdoor activities.
    WIDE COMPATIBILITY: The Universal Wheel Magnet works seamlessly with all types of cycling computers and GPS devices, offering broad compatibility with popular brands and models. Enhance your cycling experience by pairing it with your favorite tracking device and enjoy a wealth of data at your fingertips.
    RUGGED & WEATHERPROOF: Built to withstand various weather conditions, the Universal Wheel Magnet is made from high-quality materials that are resistant to rust and corrosion. Whether cycling in rain, shine, or mud, this magnet will continue to provide consistent and reliable performance.
`,
  },
  {
    id: 5,
    name: 'MAYFLASH W010 Wireless Sensor Dolphinbar for PC USB Wii Remote Adapter Used on PC Windows ',
    price: 29.53,
    description:
      ' Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.',
    image: 'http://localhost:8080/sensor-6.jpg',
    longDescription: `
    Wireless sensor dolphin bar can connect your Wii remote plus controller to your PC by Bluetooth
    Supports cursor anti-shake function, works as a normal keyboard and mouse
    Allows you to play more quickly and precisely with your game controller, light gun or racing wheel
    Works as a PC remote controller, you can return or skip to the beginning
    Supports GC controller by using may flash GC controller adapter for Wii/Wii U
    `,
  },
  {
    id: 6,
    name: '8.8 Inch PC Temperature Display With Case PC Sensor Panel Display Computer Temp Monitor IPS USB Mini Screen AIDA64 PC CPU RAM Data Monito Temperature Monitor for PC ARGB Computer Case Secondary Screen ',
    price: 47.19,
    description:
      'Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.',
    image: 'http://localhost:8080/sensor-5.jpg',
    longDescription: `
    1.【High Resolution & Accurate Information】Resolution: 1920 × 480, It is the best choice for computer subscreen and industrial computer. Response time: 30s (Tr+Td); Refresh frequency: 60Hz; IPS full view,can be used as on-board display, chassis display, etc. Contrast: 800:1 (Typ.) (TM), package includes: 1 * 8.8-inch display, 1 * hdmi cable, 1 * power cable, 1 * user manual.(This product can be used with AID64. If you want a free version, you can contact the seller to request it)
    2.【8.8” PC Sensor Panel Display】The picture is clear and You can put it near to your gaming monitor by the stand(the package does not include a stand) it also can be placed inside the case or outside the case. Not only can display CPU, GPU, RAM usage and temperature, but also network speed, date, time, volume, weather forecast.
    3.【Multi-function】 Customizable screen layout. Horizontal and vertical screen switching. Visual theme editor: drag the mouse freely, and DIY designs exclusive theme. There are many built-in themes to choose from. You can change the background picture or switch themes with one click. Support wide range brightness adjustment of 300cd-600cd to protect your eyes.
    4.【Support various devices】Support WIN XP/WIN7/WIN8/WIN 10/MACOS system and Raspberry Pi 3B/3B+/4B , etc. Before connecting, you need to configure the specific method of display resolution. Please contact customer service personnel.
    5.【Quality customer service】We respect and attach importance to the satisfaction of each customer with products and services. We hope to provide you with high-quality products to obtain a lasting experience. If you have any problems, please contact us for solution (Our products support customized touch screens. If you need, you can contact the seller directly).
`,
  },
  {
    id: 7,
    name: '5 Inch Computer Temp Monitor, IPS Display USB Mini Secondary Screen, AIDA64 PC Sensor Panel, CPU GPU Data Temperature Monitor for PC Computer Case ',
    price: 70.95,
    description: `Specification:
    Item Type: Computer Temp Monitor
    Product Material: Iron, LCD, Electronic Components
    Product Size: Approx.122 x 78mm / 4.8 x 3.1in
    Screen Size: 5in
    Resolution: 800x480
    Thickness: Approx.7-8mm / 0.28-0.31in
    Viewing Angle: IPS Full View
    Interface: Micro Usb
    System: for , for Linux, for Windows

    Package List:
      1 x Display
      1 x Bracket
      1 x Usb Data Cable
      3 x Test Components
`,
    image: 'http://localhost:8080/sensor-7.jpg',
    longDescription: `
    5 Inch IPS Screen: 800x480 resolution, clear picture, can be placed inside or outside the case. Display not only CPU, GPU, usage and temperature, but also internet speed, date, time, volume, weather forecast.
    Multifunction: Customizable screen layout, support horizontal and vertical screen switching, 360 degree rotation; energy saving and environmental , automatic screen shutdown, comfortable eye , stepless screen brightness adjustment.
    Visual Theme Editor: Drag the mouse at will to realize your creativity. Built in a variety of themes to choose from, you can change the background image or switch the theme with one click. At the same time, the visual theme editor can easily realize your creativity, DIY design your own theme.
    Multi System Support: Support for , for Linux, for Windows, ideal for your host use, real time all round understanding of your host status.
    Easy To Use: Host extended display, mainly for host temperature monitoring, no need to use AIDA64 software, no additional power supply, no High Definition Multimedia Interface cable, just a USB cable to connect the mini sub screen to the computer, and then start our custom software to use, faster and more convenient. Equipped with display stand.
`,
  },
  {
    id: 8,
    name: 'HLK-LD2410B Radar Sensor Module LD2410 Smart Human Presence Sensing Radar Module 24GHz Human Presence State Sensing Module Intelligent Sensor with Bluetooth ',
    price: 9.99,
    description: ` EC Buying, Your One-Stop Shop for Electronics! We have a wide range of product lines, covering various electronic components such as module, development board, resistors, capacitors, diodes, transistors, integrated circuits, etc., meeting the needs of different industries and fields. `,
    image: 'http://localhost:8080/sensor-8.jpg',
    longDescription: `

    LD2410B is a high sensitivity 24GHz human presence state sensing module developed by Hailingke Electronics
    The module uses FMCW FM continuous wave to realize high sensitivity human presence state sensing, can identify the human body in motion and static state, and can calculate the distance of the target
    It has good environmental adaptability, and the sensing effect is not affected by the ambient environment such as temperature, brightness, humidity and light fluctuation
    This product is mainly used in indoor scenes to detect whether there is a moving or twitching human body in the area, and output the detection results in real time. The longest induction distance is up to 5 meters, and the range resolution is 0.75m.
    It supports GPIO and UART output, plug and play, and can be flexibly applied to different intelligent scenarios and terminal products
`,
  },
  {
    id: 9,
    name: 'Temperature/Humidity Sensor by SensorPush for iPhone/Android. Water Resistant, Made in USA ',
    price: 69.2,
    description: ` Small Business This product is from a small business brand. Support small. Learn more This product is from a small business brand. Support small`,
    image: 'http://localhost:8080/sensor-9.jpg',
    longDescription: `

    Accurate: Premium hygrometer/thermometer with accuracy of ±2%RH, ±0.2°C / 0.36°F. Professional-grade components, assembled in America into devices you can trust. For even more demanding applications, the device is easily calibratable to a trusted reference, or try the SensorPush HTP.xw for even greater out-of-the-box accuracy. Whichever SensorPush you choose, you'll enjoy reliable, quality monitoring of environmental conditions including air temperature, relative humidity, dewpoint and VPD
    Durable: Water-resistant splash-proof and weatherproof design protects sensor from rain and dust. The HT.w is at home just about anywhere: in a refrigerator, freezer, greenhouse, humidor, wine cellar, instrument case like guitar or violin, a piano, outside as a mini weather station, around the house monitoring a humidifier or thermostat in baby nursery, in the attic, basement, crawlspace, reptile tank, terrarium, plants in a grow tent, drying and curing, a chicken coop or egg incubator and more
    Flexible: Use just the sensor and your phone via Bluetooth or add a SensorPush G1 WiFi Gateway (sold separately) for data and alerts via the Internet. With the SensorPush Gateway and Cloud, get updates anywhere and push notifications when conditions exceed min/max alarm settings, or ask Alexa for updates. It's the perfect combo for a vacation home, garage, server room, data center, ensuring a dog or other pets are safe in an RV (cellular hotspot required) or anywhere remote monitoring is useful
    Powerful: Line of sight Bluetooth range of 325 feet keeps you up to date, even on the other side of your home. Obstructions such as walls or doors will reduce this, often considerably, but every day in real world conditions, customers happily monitor difficult situations like walk-in coolers, safes, inside a wall or even on a roof. The small size, convenient mounting slot, and long battery life (typically over 2 years) simplify placing one or multiple sensors wherever they are needed most
    Easy one-time setup with our beautifully designed, free app (iOS or Android). Quickly view a digital summary of current conditions for your entire system of connected SensorPush devices. Drill deeper with integrated data logging and graphing with 45 days of storage on the sensor and unlimited in-app storage for unlimited devices using our custom built high performance database. Export any data recording to CSV for analysis or archival with Excel, Google Sheets, etc, and calibrate with ease.

      `,
  },
  {
    id: 10,
    name: 'DC 12V 1A Automatic PC CPU Fan Temperature Control Speed Controller Case Fan Speed Governor with Sensor for 2 3 4 Wire Fan ',
    price: 11.56,
    description: `This DC12V governor can be controlled according to the ambient temperature of the fan speed, no manual control, automatic stepless speed, the higher the ambient temperature, the faster the fan speed control, the ambient temperature is below the set the start temperature, the governor can control the fan stops running, in order to save power and eliminate unwanted noise generated by the fan. Variety of 2, 3, 4-wire 12V fans are applicable. `,
    image: 'http://localhost:8080/sensor-10.jpg',
    longDescription: `
    This DC12V governor can be controlled according to the ambient temperature of the fan speed, no manual control, automatic stepless speed, the higher the ambient temperature, the faster the fan speed control, saving energy and reducing noise.
    Whether it is a 2-wire, 3-wire or 4-wire fan (only connect power cable), whether PWM or brushless fans, as long as the fan voltage is within 12V, current less than 1A, the governor apply! Also can drive a of fans (total current must<1A). [3-wire/4-wire fans only need to connect the fan's power cord to the controller]
    The temperature sensor is connected with a cable in the form of mounting holes to facilitate detection of the temperature specified temperature point. Temperature probe is sealed with epoxy resin, waterproof and moisture-proof, the temperature probe maximum use temperature of 110 degrees. Sensor probe length: 300mm/11.5inch.
    Dual working mode optional, fixed starting temperature or adjustable starting temperature. Fixed mode temperature and temperature of 30°C(86°F), the governor control fan start, 30 to 50 degrees fan speed linear increase, 50°C(122°F ) above the fan at full speed. Adjustable mode start-up temperature range: 15 to 50 degrees, full speed range of 35 to 70 degrees (start and full-speed temperature difference of 20 degrees).
    Board size: 1.77x1.0x1.18inch/ 45x25x30mm (LXWXH), M3 mounting hole. ( Note that It is best to read the main picture instructions before use)
`,
  },
  {
    id: 11,
    name: 'Fans Speed Computer Fan Controller CPU Temperature Sensor PC Cooling Fan Controller Front Panel Date Time Temperature Display Drive Bay ',
    price: 46.31,
    description: `
    Item model number  :  Zeronecd2ofn8ehk
    Date First Available  :  February 12, 2019
    Manufacturer  :  Zerone
    ASIN  :  B07NP41Z9V
    Best Sellers Rank: #3,054 in Computer Case Fans
    `,
    image: 'http://localhost:8080/sensor-11.jpg',
    longDescription: `

    AUTO /MANUAL manual mode automatic mode switch
    Big LCD screen to display the temperature, fan speed, alarm temperature, hard disk state, to constantly know the the working condition
    Smart adjust the computer temperature though controlling the wind speed of 5 groups of fans
    Can manually set up the alarm temperature range from 40 to 90 degree
    When the fan breaks down and can not cool the computer, it will alert immediately

      `,
  },
];

export default sensors;
