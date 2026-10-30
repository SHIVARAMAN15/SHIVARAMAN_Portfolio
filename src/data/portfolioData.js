/**
 * Centralized, verified engineering projects dataset for Shivaraman T.
 * Every entry is backed by public GitHub repositories, commit logs, reports, or conference proceedings.
 */
export const verifiedProjects = [
  {
    id: "smart-aeroponics",
    title: "Smart Aeroponics System",
    category: "embedded",
    categoryLabel: "Embedded / IoT",
    featured: true,
    tagline: "Closed-Loop Environmental Monitoring & Automated Mist Dosing",
    problem:
      "Precision soil-less plant cultivation requires continuous regulation of root-zone nutrient concentration and humidity without over-saturating or drying roots.",
    contribution:
      "Designed and calibrated sensor interfacing circuitry for pH, TDS, and water level on an ESP32. Implemented closed-loop automated nutrient dosing logic, relay-driven ultrasonic mist delivery, and wireless telemetry alerts via Telegram Bot.",
    hardwareAndArch: [
      "ESP32 Wi-Fi / Bluetooth Microcontroller",
      "Analog pH Sensor & Analog TDS/EC Sensor",
      "DS18B20 1-Wire Digital Temperature Probe",
      "Ultrasonic Nebulizer Mist Generator",
      "Peristaltic Dosing Pumps & Relay Driver Circuit"
    ],
    techStack: ["ESP32", "Embedded C / C++", "ADC Interfacing", "1-Wire", "Closed-Loop Control", "Telegram Bot API", "IoT"],
    githubUrl: "https://github.com/SHIVARAMAN15/Smart-Aeroponics-System",
    demoUrl: null,
    status: "Functional Prototype (Project Exhibition)",
    results: "Automated nutrient misting intervals and maintained 4 target parameters (pH, TDS, temp, water level) with auto-shutdown on low reservoir level."
  },
  {
    id: "aquadox-aerator",
    title: "Automatic Aerator System (AquaDox)",
    category: "embedded",
    categoryLabel: "Embedded / IoT",
    featured: true,
    tagline: "Dissolved Oxygen Monitoring & Actuation for Aquaculture",
    problem:
      "Aquaculture ponds suffer severe aquatic mortality and excessive energy consumption if aerators run unmonitored or fail to respond when dissolved oxygen drops below critical levels.",
    contribution:
      "Designed threshold-based aeration actuation firmware, conditioned analog outputs from galvanic dissolved oxygen and water probes, interfaced ADC channels, and built relay actuation controls for power-efficient pond aeration.",
    hardwareAndArch: [
      "Microcontroller (Arduino / ATmega328P)",
      "Galvanic Dissolved Oxygen Sensor",
      "Analog Signal Conditioning Circuitry",
      "Water Temperature & pH Sensor Probes",
      "Optocoupled Relay Actuation Drivers"
    ],
    techStack: ["Embedded C", "Arduino", "Signal Conditioning", "ADC Interfacing", "Threshold Control", "Hardware Debugging"],
    githubUrl: "https://github.com/SHIVARAMAN15/Automatic-Aerator-System-AquaDox-",
    demoUrl: null,
    status: "Validated Prototype (VIT Bhopal Project Exhibition I)",
    results: "Continuous tracking of dissolved oxygen with automated aerator activation upon detecting hypoxic thresholds."
  },
  {
    id: "smart-patrol-bot",
    title: "Smart Patrol Bot — Autonomous Surveillance",
    category: "embedded",
    categoryLabel: "Embedded / Robotics",
    featured: true,
    tagline: "Indoor Autonomous Security & Motion-Triggered Surveillance",
    problem:
      "Indoor perimeter monitoring demands continuous patrolling without expensive stationary camera coverage across every blind spot.",
    contribution:
      "Integrated dual-controller architecture (ESP32-CAM + Arduino UNO). Implemented UART communication between boards, motor driver PWM speed/direction control, PIR motion interrupt triggers, and remote alert messaging via Telegram.",
    hardwareAndArch: [
      "ESP32-CAM (Wi-Fi Camera Module)",
      "Arduino UNO (Motor & Sensor Management)",
      "L298N Dual H-Bridge Motor Driver & DC Gear Motors",
      "Passive Infrared (PIR) Motion Sensors",
      "HC-05 Bluetooth & Onboard Wi-Fi"
    ],
    techStack: ["ESP32-CAM", "Arduino UNO", "UART Communication", "PWM Motor Control", "PIR Sensing", "Telegram Bot API"],
    githubUrl: "https://github.com/SHIVARAMAN15/Smart-Patrol-Bot-",
    demoUrl: null,
    status: "Completed Prototype (Project Exhibition II)",
    results: "Autonomous patrolling with real-time video feed and Telegram snapshot alerts on detected human motion."
  },
  {
    id: "truthguard-rag",
    title: "TruthGuard: Zero-Trust Adversarial RAG",
    category: "ai-ml",
    categoryLabel: "AI / ML & Multi-Agent",
    featured: true,
    tagline: "Adversarial Multi-Agent Verification for Contradictory Enterprise Corpora",
    problem:
      "Standard LLM RAG pipelines blend contradictory corporate amendments and superseded policies into convincing hallucinations instead of flagging policy conflicts.",
    contribution:
      "Architected a 3-agent zero-trust adversarial pipeline for Virtusa Jatayu Season 6: Retriever Agent (hybrid BM25/vector search), Synthesizer Agent (strict provenance drafting), and Adversary Critic Agent (evaluates temporal validity, contradictions, and citation authenticity).",
    hardwareAndArch: [
      "3-Agent Adversarial Pipeline (Retriever, Synthesizer, Critic)",
      "Hybrid Vector & Keyword Indexing Engine",
      "Provenance and Citation Validation Subsystem"
    ],
    techStack: ["Python", "FastAPI / Flask", "Multi-Agent Architecture", "LangChain / LLM APIs", "Adversarial Verification", "Vector Search"],
    githubUrl: "https://github.com/SHIVARAMAN15/TruthGuard",
    demoUrl: null,
    status: "Virtusa Jatayu Season 6 Hackathon Solution",
    results: "Eliminates blended hallucinations on conflicting documents by rejecting answers lacking unambiguous provenance."
  },
  {
    id: "meditrack-ai",
    title: "MediTrack AI — Clinical Attendance Assistant",
    category: "fullstack",
    categoryLabel: "Full-Stack & ML",
    featured: true,
    tagline: "Predictive Attendance Probability & Clinical Scheduling Dashboard",
    problem:
      "Clinical facilities lose substantial capacity and provider hours due to unpredicted patient appointment no-shows.",
    contribution:
      "Developed an end-to-end clinical scheduling platform featuring a Vite React frontend, Flask API backend, a trained machine learning model for attendance probability scoring, automated patient reminders with deduplication, and an on-premise deterministic NLP staff chatbot assistant.",
    hardwareAndArch: [
      "Vite + React 19 Frontend Dashboard",
      "Flask Application Factory & SQLite / Relational DB",
      "Integrated Scikit-Learn Inference Pipeline",
      "Deterministic NLP Rule Assistant"
    ],
    techStack: ["React 19", "Vite", "Python", "Flask", "Scikit-Learn", "REST APIs", "Pytest (32 passed)"],
    githubUrl: "https://github.com/SHIVARAMAN15/SHIVARAMAN15-meditrack-ai-appointment-assistant",
    demoUrl: null,
    status: "Full-Stack Software Architecture (32 Pytest test cases passed)",
    results: "Calculates live appointment attendance likelihood and automates clinic scheduling workflows."
  },
  {
    id: "voicecart",
    title: "VoiceCart — Voice Command Shopping Assistant",
    category: "fullstack",
    categoryLabel: "Full-Stack & Speech",
    featured: true,
    tagline: "Multilingual Speech Recognition & Intent Parsing E-Commerce",
    problem:
      "Navigating e-commerce product catalogs with multiple filters is cumbersome for motor-impaired users or non-English speakers.",
    contribution:
      "Engineered a voice-controlled e-commerce web application utilizing browser-native Web Speech API supporting 3 languages (English, Hindi, and Tamil). Constructed a regex NLP intent parsing engine mapping speech to catalog operations, and optimized browser localStorage state persistence.",
    hardwareAndArch: [
      "Web Speech API (SpeechRecognition & SpeechSynthesis)",
      "State persistence layer with LocalStorage",
      "Intent Parsing & Disambiguation Engine"
    ],
    techStack: ["React", "JavaScript", "Web Speech API", "NLP Intent Parsing", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/SHIVARAMAN15/SR_Shop_Voice_Assistant",
    demoUrl: "https://sr-shop-voice-assistant.vercel.app/",
    status: "Live Deployed Web Application",
    results: "92% intent execution accuracy during project testing across 3 languages; decreased unnecessary re-renders by 20%."
  },
  {
    id: "ecg-signal-analysis",
    title: "ECG Signal Processing & Heart Rate Analysis",
    category: "ai-ml",
    categoryLabel: "DSP / Biomedical",
    featured: true,
    tagline: "Butterworth Filtering, FFT Analysis & R-Peak Detection",
    problem:
      "Raw biomedical ECG recordings are degraded by baseline wander, powerline interference, and muscular high-frequency artifacts, hindering diagnostic feature extraction.",
    contribution:
      "Developed an automated biomedical signal processing pipeline in Python. Designed a 4th-order Butterworth bandpass filter to eliminate baseline wander and high-frequency noise, executed FFT frequency-domain evaluation, and automated QRS / R-peak detection on MIT-BIH Arrhythmia Database recordings.",
    hardwareAndArch: [
      "MIT-BIH Arrhythmia PhysioNet Record Database",
      "Digital Butterworth Bandpass Filter (4th-order)",
      "Pan-Tompkins / Peak Feature Extraction Algorithm"
    ],
    techStack: ["Python", "NumPy", "SciPy", "Pandas", "Matplotlib", "NeuroKit2", "WFDB", "DSP"],
    githubUrl: "https://github.com/SHIVARAMAN15/ECG-Signal-Processing-and-Heart-Rate-Analysis",
    demoUrl: null,
    status: "Completed Biomedical Signal Project",
    results: "Enhanced overall signal-to-noise ratio by 30% and achieved 98.5% benchmark accuracy in instantaneous heart-rate estimation."
  },
  {
    id: "mayacardio-ppg",
    title: "MayaCardio PPG Signal Analysis",
    category: "ai-ml",
    categoryLabel: "DSP / Biomedical",
    featured: false,
    tagline: "Packet Reconstruction, Frequency Analysis & Pulse Morphology",
    problem:
      "Photoplethysmography (PPG) wearable streams experience packet loss, telemetry dropouts, and motion artifacts that distort pulse wave morphological analysis.",
    contribution:
      "Reconstructed multi-channel PPG time-series recordings from raw telemetric packets, detected missing packet sequences (e.g. 1-second dropout gap), conducted FFT comparative spectral analysis, and designed an 8 Hz low-pass Butterworth filter to evaluate peak detection timing changes before and after filtering.",
    hardwareAndArch: [
      "Raw Telemetric PPG Sensor Stream Data",
      "Packet Reassembly & Sequence Validator",
      "8 Hz Low-Pass Butterworth Filter & Peak Timing Detector"
    ],
    techStack: ["Python", "NumPy", "SciPy", "Pandas", "Matplotlib", "Biomedical Telemetry"],
    githubUrl: "https://github.com/SHIVARAMAN15/mayacardio-ppg-signal-analysis",
    demoUrl: null,
    status: "Completed Signal Integrity & DSP Analysis",
    results: "Successfully isolated packet telemetry loss intervals and characterized pulse wave morphological shifts under filtering."
  },
  {
    id: "arduino-simulator-oshw",
    title: "Arduino Simulator — IIT Bombay FOSSEE OSHW",
    category: "hardware",
    categoryLabel: "Hardware / EDA",
    featured: false,
    tagline: "Visual Circuit Construction & In-Browser Arduino Logic Simulation",
    problem:
      "Learning hardware prototyping requires accessible simulation environments that bridge visual wiring with auto-generated embedded firmware.",
    contribution:
      "Developed a browser-based hardware experiment simulator as part of the IIT Bombay FOSSEE Open Source Hardware (OSHW) screening tasks. Supports visual component placement (Arduino Uno, LED, Push Button), automatic pin wiring, Arduino C++ code generation, and logic-level execution.",
    hardwareAndArch: [
      "Arduino UNO Logic Model",
      "Digital Pin Input/Output Simulator",
      "Real-time Firmware Code Generation Engine"
    ],
    techStack: ["JavaScript", "HTML5 Canvas", "Arduino C++ Generator", "Digital Logic Simulation"],
    githubUrl: "https://github.com/SHIVARAMAN15/Arduino-Simulator-OSHW-Screening-Tasks-1-3",
    demoUrl: null,
    status: "IIT Bombay FOSSEE OSHW Screening Project",
    results: "Verified logic-level simulation matching generated Arduino C++ code behavior under defined hardware constraints."
  },
  {
    id: "task-management",
    title: "Task Management Platform",
    category: "fullstack",
    categoryLabel: "Full-Stack",
    featured: false,
    tagline: "Role-Based Work Allocation & Database Persistence",
    problem:
      "Engineering teams need dependable task assignment and ticket tracking without heavyweight, high-latency enterprise tools.",
    contribution:
      "Constructed a role-based task management web application using Flask and SQLite. Designed a 4-table relational schema with indexed keys, structured user authentication, resolved session-crash routing edge cases, and implemented responsive task boards.",
    hardwareAndArch: [
      "4-Table Relational Schema with Indexed Keys",
      "Flask Session & Authentication Layer",
      "Responsive Frontend Interface"
    ],
    techStack: ["Python", "Flask", "SQLite3", "HTML5", "CSS3", "JavaScript", "Relational Database"],
    githubUrl: "https://github.com/SHIVARAMAN15/Task-Management-System",
    demoUrl: null,
    status: "Completed Software Application",
    results: "Sub-50ms query response times under high-load stress testing; achieved 99% uptime after resolving session routing crashes."
  },
  {
    id: "solar-panel-ml",
    title: "Solar Panel Health Check ML Model",
    category: "ai-ml",
    categoryLabel: "AI / ML",
    featured: false,
    tagline: "Predictive Degradation & Output Anomaly Detection",
    problem:
      "Photovoltaic arrays suffer insidious power generation loss from micro-cracks, dust accumulation, and inverter degradation that standard bulk meters miss.",
    contribution:
      "Engineered machine learning pipelines for solar panel performance analysis and anomaly detection as part of the AWS Hackathon Challenge 2025. Performed feature engineering on solar irradiance, ambient temperature, voltage, and power output metrics.",
    hardwareAndArch: [
      "Solar Array Sensor Telemetry Dataset",
      "Feature Normalization & Anomaly Detection Pipeline"
    ],
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "AWS", "Jupyter"],
    githubUrl: "https://github.com/SHIVARAMAN15/solar-panel-health-check-ml-model",
    demoUrl: null,
    status: "AWS Hackathon Challenge 2025 Submission",
    results: "Trained classification model for detecting panel output degradation patterns against baseline irradiance."
  },
  {
    id: "stock-lstm",
    title: "Stock Price Prediction with LSTM",
    category: "ai-ml",
    categoryLabel: "Deep Learning",
    featured: false,
    tagline: "Recurrent Deep Learning for Financial Time-Series",
    problem:
      "Financial time-series data exhibits complex temporal dependencies and non-linear patterns that standard linear regressions fail to model.",
    contribution:
      "Built a deep learning time-series regression pipeline using Long Short-Term Memory (LSTM) recurrent neural networks in TensorFlow/Keras. Handled data ingestion via Yahoo Finance API, applied MinMaxScaler normalization, and constructed sequential sliding windows for prediction.",
    hardwareAndArch: [
      "Multi-Layer LSTM Sequential Neural Network",
      "MinMaxScaler Sliding Window Preprocessor"
    ],
    techStack: ["Python", "TensorFlow / Keras", "LSTM", "NumPy", "Pandas", "Matplotlib", "yFinance"],
    githubUrl: "https://github.com/SHIVARAMAN15/Stock-Price-Prediction-LSTM",
    demoUrl: null,
    status: "Completed Deep Learning Model",
    results: "Trained multi-layer LSTM model evaluating prediction trends against historical stock time-series curves."
  }
];

export const verifiedExperiences = [
  {
    id: "zettaone",
    role: "Hardware & PCB Research Intern",
    company: "Zettaone Technologies India Pvt. Ltd.",
    location: "Electronic City Phase 1, Bangalore, India",
    period: "Jun 12, 2026 – Jul 31, 2026",
    credentialType: "Official Completion Certificate (Ref: Sr Manager HR, Saroj G)",
    overview:
      "Hands-on research and engineering internship focused on schematic capture, high-speed PCB layout, signal/power integrity, and circuit analysis for commercial electronics.",
    highlights: [
      "Worked on PCB design and hardware engineering using Cadence Allegro and OrCAD Capture CIS, including component placement, schematic analysis, PCB layout, stackup analysis, decoupling, trace-width selection, and design-rule considerations.",
      "Performed Power Integrity (PI), Signal Integrity (SI), Thermal, and circuit analysis using Keysight ADS 2025 and LTspice; analyzed impedance, switching waveforms, DC/AC behavior, and S-parameters.",
      "Conducted battery protection circuit design & analysis, buck & boost converter LTspice simulations, and electronic circuit reverse engineering on an electric massager system.",
      "Generated full PCB manufacturing file packages (Gerber RS-274X, ODB++, NC Drill, Pick & Place, STEP 3D models).",
      "Executed hardware measurements, fault diagnosis, and verification using high-speed bench oscilloscopes and digital multimeters."
    ],
    tools: ["Cadence Allegro", "OrCAD Capture CIS", "Keysight ADS 2025", "LTspice", "Gerber RS-274X", "ODB++", "Oscilloscope", "Digital Multimeter"]
  },
  {
    id: "aqualis",
    role: "Engineering Intern",
    company: "Aqualis Inspection Services",
    location: "Dubai, United Arab Emirates",
    period: "May 2025 – Jun 2025",
    credentialType: "Completed Engineering Internship",
    overview:
      "Assisted in hardware inspection, test validation, and technical documentation for industrial monitoring and cathodic-protection-related hardware systems.",
    highlights: [
      "Assisted in the inspection and validation of 5+ hardware monitoring units, supporting sensor data acquisition, hardware testing, measurement, and system-level troubleshooting.",
      "Prepared wiring diagrams, technical inspection documentation, and validation reports for equipment integrity and safety compliance.",
      "Utilized bench oscilloscopes and digital multimeters for hardware fault analysis, signal continuity, and reliability testing."
    ],
    tools: ["Hardware Testing", "Wiring Diagrams", "Sensor Data Acquisition", "Oscilloscope", "Digital Multimeter", "Fault Analysis"]
  },
  {
    id: "mponline",
    role: "Software Engineering Intern",
    company: "MPOnline Limited",
    location: "India",
    period: "May 2026 – Jul 2026",
    credentialType: "Completed Software Engineering Internship (12-Week Program)",
    overview:
      "Profiled and optimized server-side Python routines and investigated production-level database bottlenecks to enhance service reliability.",
    highlights: [
      "Engineered and optimized server-side Python routines in staging environments, increasing component execution speed by 15%.",
      "Debugged production-level database issues through systematic root cause analysis, reducing runtime exception counts by 25% and improving system reliability.",
      "Authored technical architecture documentation and unit test cases over a 12-week program, expanding baseline code coverage to 85% to support long-term maintainability."
    ],
    tools: ["Python", "SQL", "Database Optimization", "Unit Testing", "Root Cause Analysis", "Architecture Documentation"]
  }
];

export const verifiedPublication = {
  title: "Smart Helmet Systems: IoT Enhanced Safety and Integrated Display for Two Wheelers",
  authors: ["Abhishek Shrivastava", "T. Shivaraman", "V. Agathiyan"],
  venue: "6th International Conference on Recent Advancements in Mechanical Engineering (ICRAME 2025), NIT Silchar",
  publicationBook: "Recent Advancements in Design and Automation, Lecture Notes in Mechanical Engineering",
  publisher: "Springer",
  firstOnline: "01 June 2026",
  pages: "pp 1–9",
  doi: "10.1007/978-981-95-3975-8_1",
  doiUrl: "https://doi.org/10.1007/978-981-95-3975-8_1",
  description:
    "Peer-reviewed conference paper presenting an IoT-enabled smart helmet architecture integrating environmental/safety sensing, heads-up telemetry display, and wireless communication for enhanced two-wheeler rider safety."
};

export const verifiedAchievements = [
  {
    title: "Global Rank 1347 — TCS CodeVita Season 13",
    category: "Competitive Programming",
    issuer: "Tata Consultancy Services (TCS)",
    description: "Ranked 1347 globally among tens of thousands of engineering candidates across international rounds in TCS CodeVita Season 13."
  },
  {
    title: "Top 100 — Zealestra x AWS Machine Learning Challenge",
    category: "Hackathon / ML Competition",
    issuer: "Amazon Web Services (AWS) & Zealestra",
    description: "Placed among the Top 100 finalists in the national-level AWS Machine Learning Challenge, engineering predictive ML pipelines."
  },
  {
    title: "Finalist / Selected Participant — Bharatiya Antariksh Hackathon 2024",
    category: "Space Tech Hackathon",
    issuer: "ISRO / Government of India",
    description: "Selected as a finalist participant in the prestigious national Bharatiya Antariksh Hackathon organized by the Indian Space Research Organisation (ISRO)."
  }
];

export const verifiedCertifications = [
  {
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud Computing",
    description: "Validated foundational knowledge of AWS cloud architecture, security, compute (EC2), storage (S3), and networking."
  },
  {
    name: "Applied Machine Learning in Python",
    issuer: "University of Michigan (Coursera)",
    category: "AI & Machine Learning",
    description: "Rigorous coursework covering scikit-learn, supervised & unsupervised learning, model evaluation, and feature engineering."
  },
  {
    name: "Programming in Modern C++",
    issuer: "NPTEL, IIT Kanpur",
    category: "Software / Systems Programming",
    description: "Comprehensive training in modern C++ (C++11/14/17), object-oriented design, templates, STL, and memory management."
  },
  {
    name: "Arduino Programming & Embedded Systems",
    issuer: "GUVI - HCL",
    category: "Embedded Hardware",
    description: "Practical embedded firmware development, microcontroller peripherals, GPIO, ADC, and sensor actuation."
  },
  {
    name: "MATLAB Signal Processing & MATLAB Fundamentals",
    issuer: "MathWorks / Course Provider",
    category: "Digital Signal Processing",
    description: "Time-frequency analysis, digital filtering, spectral estimation, and matrix computation in MATLAB/Simulink."
  },
  {
    name: "Embedded Systems (Raspberry Pi & Arduino)",
    issuer: "Course Provider",
    category: "Embedded & IoT",
    description: "Embedded Linux on Raspberry Pi, single-board computer integration, sensor networking, and Python/C interfacing."
  }
];
