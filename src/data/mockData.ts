import type { ServiceItem, NerdExpert, CityHub, Testimonial } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'remote-support',
    category: 'remote',
    title: 'Instant Remote Rescue',
    shortDesc: 'Immediate screen-share assistance. We diagnose and squash software bugs, viruses, and email crashes within minutes.',
    fullDesc: 'No waiting around for a technician to battle highway traffic. Through our secure, one-click end-to-end encrypted screen portal, our senior nerds hop onto your workstation to fix corrupted drivers, email syncing failures, rogue malware, or software conflicts while you relax with a cup of rooibos.',
    tag: '⚡ 15-Min Response',
    iconName: 'Laptop',
    responseTime: '< 15 mins remote',
    startingPrice: 'From R380',
    features: [
      'Virus, malware & spyware eradication',
      'MacOS & Windows recovery & performance tune-ups',
      'Outlook / Google Workspace email recovery',
      'Printer spooler and Wi-Fi driver fixes',
      'Secure 256-bit encrypted session with client approval'
    ]
  },
  {
    id: 'onsite-support',
    category: 'onsite',
    title: 'On-Site Hardware & Desk Squad',
    shortDesc: 'A friendly, tool-equipped craftsperson at your home office or business door anywhere in major SA metros.',
    fullDesc: 'When cables are chewed, power supplies smoke, or a multi-monitor workstation refuses to boot, our vetted field technicians arrive on your doorstep. We bring spare SSDs, thermal paste, crimpers, and deep hardware expertise to get you back up and running with clean cable management.',
    tag: '🚗 45-Min Metros',
    iconName: 'Wrench',
    responseTime: '< 45 mins dispatch',
    startingPrice: 'From R890 / hr',
    features: [
      'Desktop & laptop hardware repairs and SSD upgrades',
      'Immaculate workstation cable organization',
      'Dual/Triple monitor ergonomic mounting & calibration',
      'Office printer, scanner & VoIP phone setup',
      'Hardware diagnostics & component swap-outs'
    ]
  },
  {
    id: 'network-power',
    category: 'network',
    title: 'Mesh Wi-Fi & Loadshedding Power Resilience',
    shortDesc: 'Never drop a Zoom call again. Unshakable whole-premises Wi-Fi coverage plus smart mini-UPS & inverter network backup.',
    fullDesc: 'South African internet has unique hurdles: thick brick walls, garden flats, and grid instability. We design seamless Wi-Fi 6/7 mesh systems with zero dead zones and integrate intelligent mini-UPS battery backups for your fibre ONT and routers so your connection sails right through Stage 6 loadshedding.',
    tag: '🔋 100% Loadshedding Proof',
    iconName: 'Wifi',
    responseTime: 'Same-day survey',
    startingPrice: 'From R1,250',
    features: [
      'Whole-house & office seamless Mesh Wi-Fi (Ubiquiti / TP-Link Deco)',
      'Mini-UPS & LiFePO4 battery setup for Fibre ONT & router',
      'Dual-WAN failover (Fibre + 5G backup auto-switching)',
      'Vumatel, Openserve, Frogfoot & MetroFibre optimization',
      'Hardwired Cat6/Cat7 stealth ethernet runs'
    ]
  },
  {
    id: 'cyber-cloud',
    category: 'cloud',
    title: 'Cyber Defense & Cloud Ecosystems',
    shortDesc: 'Keep your business data safe from ransomware, phishing, and hard drive disasters with modern cloud redundancy.',
    fullDesc: 'Enterprise-grade protection tailored for South African SMEs and high-stakes home entrepreneurs. We set up automated 3-2-1 encrypted cloud backups, zero-trust password vaults, multi-factor authentication, and streamlined cloud collaboration that complies with POPIA regulations.',
    tag: '🛡️ POPIA & 3-2-1 Compliant',
    iconName: 'ShieldCheck',
    responseTime: 'Instant consultation',
    startingPrice: 'From R1,800',
    features: [
      'Automated cloud backup (AWS, OneDrive, Backblaze)',
      'Zero-Trust Multi-Factor Authentication (MFA) rollout',
      'Ransomware defense & incident disaster recovery',
      'Domain, DNS & professional email migration',
      'POPIA data privacy compliance audit'
    ]
  }
];

export const NERD_EXPERTS: NerdExpert[] = [
  {
    id: 'nerd-sipho',
    name: 'Sipho Dlamini',
    role: 'Lead Network & Cloud Architect',
    location: 'Johannesburg (Sandton)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    specialties: ['Mesh Wi-Fi', 'MikroTik / Ubiquiti', 'Loadshedding UPS Failover', 'AWS Cloud'],
    solvedTickets: 2410,
    rating: 4.99,
    status: 'Online'
  },
  {
    id: 'nerd-chloe',
    name: 'Chloe van der Merwe',
    role: 'Hardware & OS Recovery Specialist',
    location: 'Cape Town (Gardens / Atlantic Seaboard)',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80',
    specialties: ['Apple Silicon / MacOS', 'PC Hardware Diagnostics', 'Data Recovery', 'Ergonomics'],
    solvedTickets: 1890,
    rating: 4.98,
    status: 'Online'
  },
  {
    id: 'nerd-tariq',
    name: 'Tariq Pillay',
    role: 'Cybersecurity & POPIA Compliance Lead',
    location: 'Durban (Umhlanga)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    specialties: ['Zero-Trust Security', 'Ransomware Shield', 'Google Workspace', 'NAS Storage'],
    solvedTickets: 3105,
    rating: 5.0,
    status: 'Available in 10m'
  },
  {
    id: 'nerd-lerato',
    name: 'Lerato Ndlovu',
    role: 'SME Systems & Remote Dispatcher',
    location: 'Pretoria (Centurion)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    specialties: ['Office 365', 'VoIP PBX', 'Speed Remote Triage', 'SME Infrastructure'],
    solvedTickets: 2150,
    rating: 4.97,
    status: 'Online'
  }
];

export const SA_HUBS: CityHub[] = [
  {
    name: 'Cape Town Metro',
    province: 'Western Cape',
    areas: ['City Bowl & Gardens', 'Atlantic Seaboard', 'Southern Suburbs', 'Woodstock & Salt River', 'Blouberg & Table View', 'Stellenbosch & Somerset West'],
    avgOnSiteTime: '34 mins',
    activeNerds: 7,
    status: 'High Availability'
  },
  {
    name: 'Greater Johannesburg',
    province: 'Gauteng',
    areas: ['Sandton & Morningside', 'Rosebank & Parkhurst', 'Midrand & Waterfall', 'Bryanston & Fourways', 'Bedfordview', 'Randburg'],
    avgOnSiteTime: '38 mins',
    activeNerds: 9,
    status: 'High Availability'
  },
  {
    name: 'Pretoria & Centurion',
    province: 'Gauteng',
    areas: ['Centurion', 'Menlyn & Brooklyn', 'Silver Lakes & Pretoria East', 'Hatfield', 'Faerie Glen'],
    avgOnSiteTime: '42 mins',
    activeNerds: 5,
    status: 'Normal'
  },
  {
    name: 'Durban & North Coast',
    province: 'KwaZulu-Natal',
    areas: ['Umhlanga Ridge', 'Durban North', 'Ballito & Salt Rock', 'Morningside', 'Westville', 'Berea'],
    avgOnSiteTime: '39 mins',
    activeNerds: 4,
    status: 'High Availability'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Anika Pretorius',
    role: 'Creative Director',
    company: 'Studio Kokerboom',
    location: 'Cape Town (Woodstock)',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    tag: 'Fibre & Wi-Fi Dead Zones',
    problemSolved: 'Dead zones across double-storey heritage house',
    quote: 'Our old Victorian house in Woodstock has walls thicker than a safe. Wi-Fi refused to reach the studio. Nerd Dial dispatched Chloe within 40 minutes. She installed an invisible Deco mesh, wired up an inverter backup, and tested every corner. Now we get 500Mbps even during loadshedding. The relief was immediate!'
  },
  {
    name: 'Dr. Bongani Khumalo',
    role: 'Principal Partner',
    company: 'Apex Medical Practice',
    location: 'Johannesburg (Sandton)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    tag: 'Emergency Server Recovery',
    problemSolved: 'Patient database frozen right before clinic opening',
    quote: 'At 07:15 AM our on-premise reception server threw a blue screen right when patient check-ins began. I hit the Nerd Dial hotline in total panic. Sipho jumped into our remote portal in 8 minutes, repaired the RAID volume, and had us operational before the waiting room filled. Truly felt like having a genius best friend on call.'
  },
  {
    name: 'Gareth van Zyl',
    role: 'Head of Growth',
    company: 'FinTrack Africa',
    location: 'Durban (Umhlanga)',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    tag: 'Company Migration & Security',
    problemSolved: 'Zero-downtime Google Workspace & MFA rollout',
    quote: 'Most IT service providers treat you like an annoyance or drown you in acronyms. The Nerd Dial team is joyful, razor-sharp, and genuinely fun to work with. They migrated 35 laptops to Google Workspace and configured YubiKeys with zero downtime. 10/10 service.'
  }
];

export const QUICK_DIAL_ISSUES = [
  { id: 'wifi', title: 'Wi-Fi keeps dropping / Slow speeds', icon: 'Wifi', estTime: '15m remote or 40m onsite', estPrice: 'R380' },
  { id: 'power', title: 'Loadshedding knocked out Router/UPS', icon: 'BatteryCharging', estTime: 'Same-day on-site', estPrice: 'R750' },
  { id: 'crash', title: 'Mac or Windows won\'t boot / Blue Screen', icon: 'AlertTriangle', estTime: 'Instant triage', estPrice: 'R450' },
  { id: 'virus', title: 'Malware popups / Suspected Phishing', icon: 'ShieldAlert', estTime: '10m remote isolation', estPrice: 'R480' },
  { id: 'printer', title: 'Rogue printer refuses to connect', icon: 'Printer', estTime: '15m remote fix', estPrice: 'R350' },
  { id: 'business', title: 'Need full office IT or cloud setup', icon: 'Building2', estTime: 'Free scoping call', estPrice: 'Custom quote' }
];

export const TERMINAL_COMMANDS_DATA = [
  {
    cmd: 'ping vumatel.co.za',
    label: 'Ping Fibre ISP',
    output: [
      'Sending 64 bytes to vumatel.co.za (196.25.1.1)...',
      'Reply from 196.25.1.1: bytes=64 time=4.2ms TTL=58',
      'Reply from 196.25.1.1: bytes=64 time=4.1ms TTL=58',
      'Reply from 196.25.1.1: bytes=64 time=4.3ms TTL=58',
      '✅ Fibre latency optimal (4.2ms avg). Jitter: 0.2ms. Your line is screaming fast!'
    ]
  },
  {
    cmd: 'check-loadshedding-mesh',
    label: 'Inspect Backup Power',
    output: [
      'Querying router mini-UPS telemetry [12V DC Rail]...',
      'Battery Chemistry: LiFePO4 (Grade A cells detected)',
      'Current State: Fully Charged (100% capacity)',
      'Estimated Runtime during Grid Outage: 6 hours 45 minutes.',
      '⚡ Result: Your Wi-Fi will stay powered through Stage 6 with zero interruptions.'
    ]
  },
  {
    cmd: 'quarantine-malware',
    label: 'Scan & Purge Threats',
    output: [
      'Scanning memory pointers and system daemons...',
      'Identified suspicious background script: Trojan.Cryptominer.AgentX',
      'Isolating process PID 8412... KILLED.',
      'Registry keys purged and browser hijackers cleared.',
      '🛡️ Clean bill of health! Host system secured with zero data loss.'
    ]
  },
  {
    cmd: 'kill-zombie-printer',
    label: 'Untangle Printer Nightmare',
    output: [
      'Scanning local subnet for HP/Canon/Epson ghost devices...',
      'Found 3 stuck spooler jobs queued since last Tuesday.',
      'Purging Windows Spooler service cache...',
      'Restarting Print Spooler daemon... Success.',
      '🖨️ Test page printing now. You may now apologize to your printer.'
    ]
  },
  {
    cmd: 'status',
    label: 'Nerd Fleet Telemetry',
    output: [
      '-- NERD DIAL SOUTHERN AFRICA FLEET TELEMETRY --',
      'Johannesburg Operations: 9 Nerds Active | Avg dispatch: 38m',
      'Cape Town Operations: 7 Nerds Active | Avg dispatch: 34m',
      'Durban / Umhlanga: 4 Nerds Active | Avg dispatch: 39m',
      'Pretoria Operations: 5 Nerds Active | Avg dispatch: 42m',
      'Remote Hotline Queue: 0 waiting | Avg pickup time: 28 seconds',
      'Ready to assist! Call 0800-NERD-DIAL or click Dial.'
    ]
  }
];
