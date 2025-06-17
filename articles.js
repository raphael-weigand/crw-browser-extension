const articles = [
  {
    "article_title": "iPhone 6 Battery Throttling Scandal",
    "description": "Apple deliberately slowed down older iPhone models without user consent to manage battery performance issues",
    "date_of_incident": "2017-12-20",
    "company_name": "Apple Inc.",
    "product": ["iPhone 6", "iPhone 6 Plus", "iPhone 6s", "iPhone 6s Plus", "iPhone SE"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Incident"
  },
  {
    "article_title": "Samsung Galaxy Note 7 Exploding Batteries",
    "description": "Defective lithium-ion batteries caused devices to overheat and catch fire, leading to global recall",
    "date_of_incident": "2016-09-02",
    "company_name": "Samsung Electronics",
    "product": ["Galaxy Note 7"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Tesla Model S Door Handle Failures",
    "description": "Retractable door handles frequently malfunction in cold weather, potentially trapping occupants",
    "date_of_incident": "2019-03-15",
    "company_name": "Tesla Inc.",
    "product": ["Model S"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Microsoft Surface Pro Screen Flickering",
    "description": "Widespread screen flickering issues affecting Surface Pro 4 and Surface Book models with no permanent fix",
    "date_of_incident": "2018-11-08",
    "company_name": "Microsoft Corporation",
    "product": ["Surface Pro 4", "Surface Book"],
    "type": ["Repair"],
    "article_type": "Product line"
  },
  {
    "article_title": "Amazon Echo Always Listening Privacy Concerns",
    "description": "Devices continuously record conversations and send data to Amazon servers without clear user consent",
    "date_of_incident": "2019-04-11",
    "company_name": "Amazon.com Inc.",
    "product": ["Echo", "Echo Dot", "Echo Show", "Echo Plus"],
    "type": ["Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "Facebook Cambridge Analytica Data Breach",
    "description": "Personal data of 87 million users harvested without consent for political advertising purposes",
    "date_of_incident": "2018-03-17",
    "company_name": "Meta Platforms Inc.",
    "product": ["Facebook"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Volkswagen Dieselgate Emissions Scandal",
    "description": "Illegal software installed to cheat emissions tests while polluting environment beyond legal limits",
    "date_of_incident": "2015-09-18",
    "company_name": "Volkswagen AG",
    "product": ["TDI Diesel Engines", "Jetta", "Passat", "Beetle", "Audi A3"],
    "type": ["Sustainability", "Terms of Service"],
    "article_type": "Incident"
  },
  {
    "article_title": "Nike Air Jordan Sole Separation Issues",
    "description": "Premium sneakers develop sole separation within months of normal use, company refuses warranty claims",
    "date_of_incident": "2020-08-22",
    "company_name": "Nike Inc.",
    "product": ["Air Jordan 1", "Air Jordan 4", "Air Jordan 11"],
    "type": ["Repair", "Ownership"],
    "article_type": "Product line"
  },
  {
    "article_title": "Canon Printer Ink Cartridge DRM",
    "description": "Printers refuse to scan or copy when ink levels are low, forcing unnecessary cartridge purchases",
    "date_of_incident": "2021-06-30",
    "company_name": "Canon Inc.",
    "product": ["PIXMA Printers", "ink cartridges"],
    "type": ["Ownership", "Repair"],
    "article_type": "Product line"
  },
  {
    "article_title": "John Deere Tractor Repair Restrictions",
    "description": "Farmers cannot repair their own equipment due to software locks and proprietary diagnostic tools",
    "date_of_incident": "2021-02-14",
    "company_name": "Deere & Company",
    "product": ["Tractors", "Combines", "Agricultural Equipment"],
    "type": ["Repair", "Ownership"],
    "article_type": "Company"
  },
  {
    "article_title": "Google Nest Thermostat Remote Shutdown",
    "description": "Google remotely disabled devices without user consent during software updates, leaving homes without heating",
    "date_of_incident": "2020-01-13",
    "company_name": "Alphabet Inc.",
    "product": ["Nest Thermostat"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "Sony PlayStation 5 Stick Drift Issues",
    "description": "DualSense controllers develop analog stick drift within months, Sony initially denied warranty coverage",
    "date_of_incident": "2021-11-25",
    "company_name": "Sony Interactive Entertainment",
    "product": ["PlayStation 5", "DualSense Controller"],
    "type": ["Repair", "Ownership"],
    "article_type": "Product"
  },
  {
    "article_title": "Peloton Tread+ Safety Recall",
    "description": "Treadmill caused injuries and death due to design flaws, company initially resisted safety warnings",
    "date_of_incident": "2021-05-05",
    "company_name": "Peloton Interactive Inc.",
    "product": ["Tread+", "Treadmill"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "HP Printer Firmware Update Blocks Third-Party Ink",
    "description": "Automatic firmware updates prevent use of compatible ink cartridges, forcing purchase of expensive HP cartridges",
    "date_of_incident": "2022-04-18",
    "company_name": "HP Inc.",
    "product": ["OfficeJet Printers", "Envy Printers", "ink cartridges"],
    "type": ["Ownership", "Repair"],
    "article_type": "Product line"
  },
  {
    "article_title": "WhatsApp Terms of Service Privacy Changes",
    "description": "Forced acceptance of new privacy policy allowing data sharing with Facebook, threatening account deletion for refusal",
    "date_of_incident": "2021-01-08",
    "company_name": "Meta Platforms Inc.",
    "product": ["WhatsApp"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Louis Vuitton Handbag Repair Refusal",
    "description": "Luxury brand refuses to repair products outside warranty period, claiming proprietary materials and techniques",
    "date_of_incident": "2022-09-12",
    "company_name": "LVMH",
    "product": ["Handbags", "Leather Goods"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Subsidiary"
  },
  {
    "article_title": "Spotify Premium Family Plan Verification",
    "description": "Intrusive address verification system monitors user locations to enforce family plan restrictions",
    "date_of_incident": "2019-09-12",
    "company_name": "Spotify Technology S.A.",
    "product": ["Spotify Premium Family"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "McDonald's Ice Cream Machine Repair Monopoly",
    "description": "Exclusive repair contracts prevent franchisees from fixing broken ice cream machines independently",
    "date_of_incident": "2020-10-22",
    "company_name": "McDonald's Corporation",
    "product": ["Ice Cream Machines", "Taylor C602"],
    "type": ["Repair", "Ownership"],
    "article_type": "Company"
  },
  {
    "article_title": "Instagram Shadow Banning Small Businesses",
    "description": "Algorithm changes reduce visibility of small business posts without notification or explanation",
    "date_of_incident": "2021-07-14",
    "company_name": "Meta Platforms Inc.",
    "product": ["Instagram"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "BMW Heated Seats Subscription Model",
    "description": "Company charges monthly fees to activate heated seats that are already installed in vehicles",
    "date_of_incident": "2022-07-12",
    "company_name": "BMW AG",
    "product": ["BMW Cars", "ConnectedDrive"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Company"
  },
  {
    "article_title": "Dyson Vacuum Cleaner Battery Degradation",
    "description": "Cordless vacuum batteries lose significant capacity after 18 months, replacement costs nearly as much as new device",
    "date_of_incident": "2022-03-10",
    "company_name": "Dyson Ltd.",
    "product": ["V8", "V10", "V11", "V15"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "Nespresso Pod DRM System",
    "description": "Coffee machines use RFID chips to block compatible third-party capsules, forcing expensive branded pods",
    "date_of_incident": "2021-09-15",
    "company_name": "Nestlé S.A.",
    "product": ["Nespresso Machines", "Coffee Capsules"],
    "type": ["Ownership", "Repair"],
    "article_type": "Product line"
  },
  {
    "article_title": "Adobe Creative Suite Subscription Lock-in",
    "description": "Users cannot access their own work files without maintaining expensive monthly subscriptions",
    "date_of_incident": "2019-05-20",
    "company_name": "Adobe Inc.",
    "product": ["Photoshop", "Illustrator", "InDesign", "Creative Cloud"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "IKEA Furniture Planned Obsolescence",
    "description": "Billy bookcases and other furniture use progressively cheaper materials while maintaining same pricing",
    "date_of_incident": "2020-11-08",
    "company_name": "IKEA",
    "product": ["Billy Bookcase", "Hemnes Series", "Kallax"],
    "type": ["Sustainability", "Repair"],
    "article_type": "Product line"
  },
  {
    "article_title": "Ring Doorbell Police Data Sharing",
    "description": "Amazon shares user footage with law enforcement without warrants or user notification",
    "date_of_incident": "2021-01-27",
    "company_name": "Amazon.com Inc.",
    "product": ["Ring Doorbell", "Ring Security Cameras"],
    "type": ["Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "Starbucks App Payment System Issues",
    "description": "Mobile payment system frequently double-charges customers, refund process takes weeks",
    "date_of_incident": "2022-08-14",
    "company_name": "Starbucks Corporation",
    "product": ["Starbucks App", "Mobile Payment"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "KitchenAid Mixer Gear Stripping Defect",
    "description": "Stand mixer gears fail prematurely due to plastic components in high-stress applications",
    "date_of_incident": "2021-04-05",
    "company_name": "Whirlpool Corporation",
    "product": ["KitchenAid Stand Mixer", "Artisan Series"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Fitbit Skin Irritation Lawsuits",
    "description": "Fitness trackers cause severe skin reactions and burns due to nickel in charging contacts",
    "date_of_incident": "2020-06-18",
    "company_name": "Fitbit Inc.",
    "product": ["Fitbit Charge", "Fitbit Versa", "Fitbit Ionic"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "Zoom End-to-End Encryption Misrepresentation",
    "description": "Video conferencing service falsely advertised end-to-end encryption while maintaining server access to calls",
    "date_of_incident": "2020-03-31",
    "company_name": "Zoom Video Communications",
    "product": ["Zoom Meetings", "Zoom Phone"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Patagonia Jacket Zipper Failures",
    "description": "Premium outdoor jackets develop zipper failures within one season, company limits warranty replacements",
    "date_of_incident": "2021-12-03",
    "company_name": "Patagonia Inc.",
    "product": ["Down Sweater", "Torrentshell Jacket", "Nano Puff"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "Uber Surge Pricing Algorithm Manipulation",
    "description": "Ride-sharing app artificially inflates prices during high demand periods without transparent calculation",
    "date_of_incident": "2019-12-16",
    "company_name": "Uber Technologies Inc.",
    "product": ["Uber App", "Ride Sharing"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Nintendo Switch Joy-Con Drift Lawsuit",
    "description": "Controller analog sticks develop input drift defect, company initially denied widespread issue",
    "date_of_incident": "2019-07-19",
    "company_name": "Nintendo Co., Ltd.",
    "product": ["Nintendo Switch", "Joy-Con Controllers"],
    "type": ["Repair", "Ownership"],
    "article_type": "Product"
  },
  {
    "article_title": "Bose Headphones Planned Battery Failure",
    "description": "Premium wireless headphones have non-replaceable batteries designed to fail after warranty period",
    "date_of_incident": "2022-01-22",
    "company_name": "Bose Corporation",
    "product": ["QuietComfort 35", "700 Series", "SoundLink"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "TikTok Data Collection on Minors",
    "description": "Social media platform collects extensive personal data from users under 13 without parental consent",
    "date_of_incident": "2021-08-02",
    "company_name": "ByteDance Ltd.",
    "product": ["TikTok App"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Roomba Vacuum Mapping Privacy Concerns",
    "description": "Robot vacuums create detailed home floor plans and share data with third parties without clear consent",
    "date_of_incident": "2020-09-11",
    "company_name": "iRobot Corporation",
    "product": ["Roomba", "Braava"],
    "type": ["Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "Gillette Razor Subscription Price Increases",
    "description": "Automatic subscription service increases prices without adequate notice or easy cancellation options",
    "date_of_incident": "2022-05-07",
    "company_name": "Procter & Gamble",
    "product": ["Gillette Razors", "Subscription Service"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Service"
  },
  {
    "article_title": "Lenovo Laptop Keyboard Butterfly Mechanism",
    "description": "ThinkPad keyboards fail due to dust accumulation in butterfly switches, expensive repair required",
    "date_of_incident": "2021-10-14",
    "company_name": "Lenovo Group Ltd.",
    "product": ["ThinkPad X1", "ThinkPad T Series"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "Oculus VR Headset Facebook Account Requirement",
    "description": "Virtual reality device becomes unusable without Facebook account, blocking access to purchased games",
    "date_of_incident": "2020-08-18",
    "company_name": "Meta Platforms Inc.",
    "product": ["Oculus Quest", "Oculus Rift"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "Harley-Davidson Motorcycle Dealer Repair Monopoly",
    "description": "Proprietary diagnostic tools and parts availability restricted to authorized dealers only",
    "date_of_incident": "2021-06-09",
    "company_name": "Harley-Davidson Inc.",
    "product": ["Sportster", "Street", "Touring", "CVO"],
    "type": ["Repair", "Ownership"],
    "article_type": "Company"
  },
  {
    "article_title": "Keurig Coffee Pod Expiration DRM",
    "description": "Coffee makers refuse to brew pods past arbitrary expiration dates, even when coffee is still fresh",
    "date_of_incident": "2020-12-01",
    "company_name": "Keurig Dr Pepper Inc.",
    "product": ["Keurig Coffee Makers", "K-Cup Pods"],
    "type": ["Ownership", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "Wells Fargo ATM Fee Surprise Charges",
    "description": "Bank implements hidden ATM fees for account holders using non-network machines without clear notification",
    "date_of_incident": "2022-02-14",
    "company_name": "Wells Fargo & Company",
    "product": ["ATM Services", "Checking Accounts"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Ryanair Cabin Bag Size Enforcement Scam",
    "description": "Airline uses inconsistent bag size measurements to force expensive gate check-in fees",
    "date_of_incident": "2021-07-22",
    "company_name": "Ryanair Holdings plc",
    "product": ["Flight Services", "Cabin Baggage"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Pfizer EpiPen Price Manipulation",
    "description": "Life-saving medication price increased 600% without formula changes or significant improvements",
    "date_of_incident": "2020-08-30",
    "company_name": "Pfizer Inc.",
    "product": ["EpiPen", "Epinephrine Auto-Injector"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "EA Sports FIFA Ultimate Team Gambling Mechanics",
    "description": "Video game includes loot box mechanics targeting minors without gambling regulation compliance",
    "date_of_incident": "2021-11-10",
    "company_name": "Electronic Arts Inc.",
    "product": ["FIFA", "Ultimate Team", "Loot Boxes"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Comcast Internet Speed Throttling",
    "description": "ISP deliberately slows internet speeds during peak hours despite advertising unlimited high-speed service",
    "date_of_incident": "2020-04-18",
    "company_name": "Comcast Corporation",
    "product": ["Xfinity Internet", "Broadband Service"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Monsanto Roundup Cancer Cover-up",
    "description": "Chemical company hid studies linking herbicide to cancer while marketing as safe for home use",
    "date_of_incident": "2019-03-15",
    "company_name": "Bayer AG",
    "product": ["Roundup", "Glyphosate Herbicide"],
    "type": ["Sustainability", "Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "Ticketmaster Dynamic Pricing Manipulation",
    "description": "Concert ticket prices artificially inflated through algorithmic surge pricing during high demand",
    "date_of_incident": "2022-11-15",
    "company_name": "Live Nation Entertainment",
    "product": ["Ticketmaster", "Concert Tickets"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Moderna Vaccine Patent Restrictions",
    "description": "Pharmaceutical company blocks generic production of COVID vaccines despite public funding",
    "date_of_incident": "2021-05-12",
    "company_name": "Moderna Inc.",
    "product": ["COVID-19 Vaccine", "mRNA Technology"],
    "type": ["Ownership", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Airbnb Host Discrimination Algorithm",
    "description": "Platform's algorithm enables racial discrimination by allowing hosts to see guest photos before booking",
    "date_of_incident": "2020-09-07",
    "company_name": "Airbnb Inc.",
    "product": ["Airbnb Platform", "Booking System"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Disney+ Content Removal Without Notice",
    "description": "Streaming service removes purchased movies and shows from user libraries without refunds or notification",
    "date_of_incident": "2022-06-20",
    "company_name": "The Walt Disney Company",
    "product": ["Disney+", "Digital Movies"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "CyberTech Pro Router Backdoor Vulnerability",
    "description": "Home networking company secretly installs government backdoors in consumer routers without disclosure",
    "date_of_incident": "2021-01-30",
    "company_name": "CyberTech Solutions Ltd.",
    "product": ["ProRouter X1", "Home Network Devices"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Product line"
  },
  {
    "article_title": "FlexFit Gym Membership Cancellation Trap",
    "description": "Fitness chain requires in-person cancellation during business hours only, charges early termination fees",
    "date_of_incident": "2022-01-08",
    "company_name": "FlexFit Fitness Centers",
    "product": ["Gym Membership", "Fitness Services"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "AutoDrive Car Dealership Financing Fraud",
    "description": "Dealership manipulates credit scores and adds hidden fees to inflate car loan interest rates",
    "date_of_incident": "2021-09-22",
    "company_name": "AutoDrive Motor Group",
    "product": ["Car Financing", "Auto Loans"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "SmartHome Inc. Device Bricking Updates",
    "description": "IoT company pushes firmware updates that intentionally disable older devices to force upgrades",
    "date_of_incident": "2020-12-15",
    "company_name": "SmartHome Technologies Inc.",
    "product": ["Smart Thermostats", "Home Automation"],
    "type": ["Ownership", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "MegaPharm Insulin Price Cartel",
    "description": "Three major insulin manufacturers coordinate price increases despite minimal production costs",
    "date_of_incident": "2019-06-10",
    "company_name": "MegaPharm Industries",
    "product": ["Insulin", "Diabetes Medication"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "QuickLoan Payday Lending Exploitation",
    "description": "Financial services company targets low-income customers with predatory loans exceeding 400% APR",
    "date_of_incident": "2021-03-25",
    "company_name": "QuickLoan Financial Services",
    "product": ["Payday Loans", "Short-term Credit"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "EcoClean Washing Machine Water Waste",
    "description": "Appliances marketed as eco-friendly actually use 40% more water than conventional models",
    "date_of_incident": "2022-04-12",
    "company_name": "EcoClean Appliances Corp.",
    "product": ["EcoWash Pro", "Green Appliances"],
    "type": ["Sustainability", "Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "DataMine Analytics Personal Information Harvesting",
    "description": "Marketing company scrapes personal data from social media to create detailed consumer profiles for sale",
    "date_of_incident": "2020-11-03",
    "company_name": "DataMine Analytics LLC",
    "product": ["Consumer Profiles", "Data Brokerage"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "TurboTax Hidden Fee Structure",
    "description": "Tax software advertises free filing but charges mandatory fees for basic tax situations",
    "date_of_incident": "2022-03-01",
    "company_name": "Intuit Inc.",
    "product": ["TurboTax", "Tax Filing Software"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "PowerGrid Energy Smart Meter Privacy Invasion",
    "description": "Utility company uses smart meters to monitor detailed home energy patterns and sells data to third parties",
    "date_of_incident": "2021-08-18",
    "company_name": "PowerGrid Energy Solutions",
    "product": ["Smart Meters", "Energy Monitoring"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Service"
  },
  {
    "article_title": "Walmart Self-Checkout False Theft Accusations",
    "description": "Retail chain's AI system frequently flags innocent customers as shoplifters, leading to false arrests and harassment",
    "date_of_incident": "2022-09-14",
    "company_name": "Walmart Inc.",
    "product": ["Self-Checkout Systems", "AI Security"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Progressive Insurance Tracking Device Privacy Violation",
    "description": "Car insurance company's Snapshot device collects detailed location and driving data beyond stated safety purposes",
    "date_of_incident": "2021-04-08",
    "company_name": "Progressive Corporation",
    "product": ["Snapshot Device", "Car Insurance"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Nestlé Baby Formula Marketing Scandal",
    "description": "Company aggressively markets infant formula in developing countries while discouraging breastfeeding",
    "date_of_incident": "2020-01-20",
    "company_name": "Nestlé S.A.",
    "product": ["Baby Formula", "Infant Nutrition"],
    "type": ["Terms of Service", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "T-Mobile Customer Data Breach Cover-up",
    "description": "Telecommunications company delays disclosure of massive customer data breach for months",
    "date_of_incident": "2021-08-15",
    "company_name": "T-Mobile US Inc.",
    "product": ["Mobile Service", "Customer Data"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Home Depot Paint Color Matching Fraud",
    "description": "Retail chain deliberately mismatches paint colors to force customers to buy more expensive premium brands",
    "date_of_incident": "2022-05-30",
    "company_name": "The Home Depot Inc.",
    "product": ["Paint Matching Service", "House Paint"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Activision Blizzard Loot Box Addiction Targeting",
    "description": "Gaming company uses psychological manipulation techniques to maximize spending on random reward systems",
    "date_of_incident": "2021-12-07",
    "company_name": "Activision Blizzard Inc.",
    "product": ["Call of Duty", "Overwatch", "Loot Boxes"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "FedEx Package Delivery GPS Manipulation",
    "description": "Delivery company marks packages as delivered while trucks are still miles away from destination",
    "date_of_incident": "2020-11-22",
    "company_name": "FedEx Corporation",
    "product": ["Package Delivery", "Tracking System"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Johnson & Johnson Talcum Powder Asbestos Contamination",
    "description": "Personal care products contain cancer-causing asbestos while company claims products are safe",
    "date_of_incident": "2019-07-12",
    "company_name": "Johnson & Johnson",
    "product": ["Baby Powder", "Talcum Powder"],
    "type": ["Sustainability", "Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "Verizon Unlimited Data Throttling Deception",
    "description": "Mobile carrier severely limits speeds on unlimited plans after minimal data usage",
    "date_of_incident": "2021-06-18",
    "company_name": "Verizon Communications Inc.",
    "product": ["Unlimited Data Plans", "Mobile Service"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "McDonald's Ice Cream Machine Repair Conspiracy",
    "description": "Fast food chain maintains exclusive repair contracts that keep machines broken to avoid serving ice cream",
    "date_of_incident": "2020-08-05",
    "company_name": "McDonald's Corporation",
    "product": ["Ice Cream Machines", "Taylor Equipment"],
    "type": ["Repair", "Ownership"],
    "article_type": "Service"
  },
  {
    "article_title": "Expedia Hidden Hotel Booking Fees",
    "description": "Travel booking site adds mandatory resort fees and taxes only after payment information is entered",
    "date_of_incident": "2022-03-28",
    "company_name": "Expedia Group Inc.",
    "product": ["Hotel Booking", "Travel Services"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Robinhood Trading App Market Manipulation",
    "description": "Investment app restricts trading during market volatility to protect institutional investors over retail customers",
    "date_of_incident": "2021-01-28",
    "company_name": "Robinhood Markets Inc.",
    "product": ["Trading Platform", "Stock Trading"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Roku TV Privacy Data Collection Overreach",
    "description": "Smart TV manufacturer tracks viewing habits across all inputs and sells data without clear user consent",
    "date_of_incident": "2020-12-10",
    "company_name": "Roku Inc.",
    "product": ["Roku TV", "Smart TV Platform"],
    "type": ["Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "CVS Pharmacy Receipt Length Environmental Waste",
    "description": "Drugstore chain prints unnecessarily long receipts to waste paper and promote unwanted coupon offers",
    "date_of_incident": "2021-09-03",
    "company_name": "CVS Health Corporation",
    "product": ["ExtraCare Rewards", "Receipt System"],
    "type": ["Sustainability"],
    "article_type": "Service"
  },
  {
    "article_title": "AT&T Internet Speed Advertisement Fraud",
    "description": "Telecommunications company advertises fiber speeds while delivering copper wire connections to customers",
    "date_of_incident": "2022-01-12",
    "company_name": "AT&T Inc.",
    "product": ["Internet Service", "Fiber Plans"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "GameStop Trade-In Value Manipulation",
    "description": "Video game retailer drastically lowers trade-in values when new console generations are announced",
    "date_of_incident": "2020-10-15",
    "company_name": "GameStop Corp.",
    "product": ["Game Trade-Ins", "Console Sales"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Ring Doorbell Facial Recognition Database",
    "description": "Security device company builds facial recognition database from customer footage without explicit consent",
    "date_of_incident": "2021-03-05",
    "company_name": "Amazon.com Inc.",
    "product": ["Ring Doorbell", "Neighbors App"],
    "type": ["Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "Equifax Credit Score Manipulation",
    "description": "Credit reporting agency artificially lowers scores to drive sales of credit monitoring services",
    "date_of_incident": "2020-06-25",
    "company_name": "Equifax Inc.",
    "product": ["Credit Reports", "Credit Monitoring"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Delta Airlines Overbooking Algorithm Abuse",
    "description": "Airline intentionally overbooks flights beyond safe margins to maximize revenue while denying boarding",
    "date_of_incident": "2021-07-04",
    "company_name": "Delta Air Lines Inc.",
    "product": ["Flight Booking", "Airline Services"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Best Buy Geek Squad Repair Fraud",
    "description": "Electronics retailer's repair service deliberately damages devices to justify expensive component replacements",
    "date_of_incident": "2022-02-17",
    "company_name": "Best Buy Co. Inc.",
    "product": ["Geek Squad", "Device Repair"],
    "type": ["Repair", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "MegaCorp Insurance Claim Denial AI",
    "description": "Health insurance company uses AI to automatically deny valid claims hoping customers won't appeal",
    "date_of_incident": "2021-11-30",
    "company_name": "MegaCorp Health Insurance",
    "product": ["Health Insurance", "Claims Processing"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "TechFlow Software License Audit Scam",
    "description": "Enterprise software company conducts fake license audits to pressure customers into expensive upgrades",
    "date_of_incident": "2020-04-22",
    "company_name": "TechFlow Enterprise Solutions",
    "product": ["Business Software", "License Management"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Service"
  },
  {
    "article_title": "GreenEnergy Solar Panel Efficiency Lies",
    "description": "Renewable energy company exaggerates solar panel efficiency ratings by 35% in marketing materials",
    "date_of_incident": "2021-05-08",
    "company_name": "GreenEnergy Technologies Corp.",
    "product": ["Solar Panels", "Home Energy Systems"],
    "type": ["Sustainability", "Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "CloudSafe Data Storage Ransomware Collaboration",
    "description": "Cloud storage provider secretly partners with ransomware groups to encrypt customer data for profit",
    "date_of_incident": "2022-07-19",
    "company_name": "CloudSafe Storage Solutions",
    "product": ["Cloud Storage", "Data Backup"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Service"
  },
  {
    "article_title": "UrbanMove Rideshare Driver Classification Fraud",
    "description": "Transportation company misclassifies employees as contractors to avoid providing benefits and fair wages",
    "date_of_incident": "2021-02-28",
    "company_name": "UrbanMove Transportation Inc.",
    "product": ["Rideshare Service", "Driver Platform"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "FreshMart Grocery Dynamic Pricing Discrimination",
    "description": "Supermarket chain uses facial recognition to charge different prices based on customer demographics",
    "date_of_incident": "2022-08-11",
    "company_name": "FreshMart Supermarkets",
    "product": ["Grocery Shopping", "Dynamic Pricing"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "SecureBankPro Online Banking Forced Upgrades",
    "description": "Financial institution deliberately breaks mobile app compatibility to force customers onto fee-based premium service",
    "date_of_incident": "2021-10-06",
    "company_name": "SecureBankPro Financial",
    "product": ["Mobile Banking", "Online Banking"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Service"
  },
  {
    "article_title": "VitalHealth Prescription Drug Price Fixing",
    "description": "Pharmaceutical company coordinates with competitors to maintain artificially high prices for essential medications",
    "date_of_incident": "2020-03-18",
    "company_name": "VitalHealth Pharmaceuticals",
    "product": ["Prescription Drugs", "Generic Medications"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "MediaStream Content Algorithm Manipulation",
    "description": "Streaming service adjusts recommendation algorithms to promote lower-quality content and reduce server costs",
    "date_of_incident": "2022-04-05",
    "company_name": "MediaStream Entertainment",
    "product": ["Video Streaming", "Content Platform"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "PowerTools Pro Planned Obsolescence Timers",
    "description": "Tool manufacturer embeds software timers in cordless tools to reduce battery life after warranty expires",
    "date_of_incident": "2021-12-20",
    "company_name": "PowerTools Pro Industries",
    "product": ["Cordless Drills", "Power Tools"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "EduLearn Online Course Completion Fraud",
    "description": "Educational platform marks courses as incomplete to force students to pay for additional certification attempts",
    "date_of_incident": "2020-09-14",
    "company_name": "EduLearn Digital Academy",
    "product": ["Online Courses", "Certification Programs"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "AutoCare Extended Warranty Denial Tactics",
    "description": "Vehicle service company trains representatives to find technical reasons to deny valid warranty claims",
    "date_of_incident": "2021-08-23",
    "company_name": "AutoCare Extended Protection",
    "product": ["Extended Warranties", "Vehicle Protection"],
    "type": ["Terms of Service", "Repair"],
    "article_type": "Service"
  },
  {
    "article_title": "PetMeds Veterinary Prescription Markup",
    "description": "Pet medication company charges 400% markup on prescriptions while blocking generic alternatives",
    "date_of_incident": "2022-06-08",
    "company_name": "PetMeds Health Solutions",
    "product": ["Pet Medications", "Veterinary Prescriptions"],
    "type": ["Ownership"],
    "article_type": "Service"
  },
  {
    "article_title": "SportsBet Gambling Addiction Exploitation",
    "description": "Online betting platform uses psychological triggers to encourage problem gambling behavior in vulnerable users",
    "date_of_incident": "2021-01-15",
    "company_name": "SportsBet Gaming Corp.",
    "product": ["Online Betting", "Sports Gambling"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "CryptoMax Exchange Exit Scam",
    "description": "Cryptocurrency exchange suddenly freezes all withdrawals before shutting down and stealing customer funds",
    "date_of_incident": "2022-11-03",
    "company_name": "CryptoMax Digital Exchange",
    "product": ["Cryptocurrency Trading", "Digital Wallet"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "HomeSecure Camera Footage Selling Scandal",
    "description": "Security company secretly sells customer home surveillance footage to data brokers and advertising companies",
    "date_of_incident": "2020-12-28",
    "company_name": "HomeSecure Systems Ltd.",
    "product": ["Security Cameras", "Home Monitoring"],
    "type": ["Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "MealKit Subscription Cancellation Maze",
    "description": "Food delivery service makes subscription cancellation extremely difficult through complex phone-only system",
    "date_of_incident": "2021-04-12",
    "company_name": "MealKit Express",
    "product": ["Meal Delivery", "Subscription Service"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "GigWork Platform Worker Surveillance",
    "description": "Freelance work platform monitors worker keystrokes and webcams without disclosure in privacy policy",
    "date_of_incident": "2022-01-25",
    "company_name": "GigWork Connect Platform",
    "product": ["Freelance Platform", "Remote Work"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "LuxuryWatch Counterfeit Parts Replacement",
    "description": "High-end watch repair service secretly replaces authentic components with cheap replicas during servicing",
    "date_of_incident": "2021-07-16",
    "company_name": "LuxuryWatch Repair Masters",
    "product": ["Watch Repair", "Luxury Timepieces"],
    "type": ["Repair", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "CleanAir Purifier False HEPA Filter Claims",
    "description": "Air purifier manufacturer uses standard filters while claiming HEPA certification for premium pricing",
    "date_of_incident": "2020-05-19",
    "company_name": "CleanAir Technologies Inc.",
    "product": ["Air Purifiers", "HEPA Filters"],
    "type": ["Sustainability", "Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "Target RedCard Data Mining Overreach",
    "description": "Retail chain analyzes customer purchase patterns to predict personal circumstances and sells insights to insurance companies",
    "date_of_incident": "2022-10-18",
    "company_name": "Target Corporation",
    "product": ["RedCard", "Customer Analytics"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Marriott Hotel Loyalty Point Devaluation",
    "description": "Hotel chain reduces loyalty point values by 60% overnight while maintaining same point earning rates",
    "date_of_incident": "2021-02-12",
    "company_name": "Marriott International Inc.",
    "product": ["Bonvoy Rewards", "Hotel Loyalty Program"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Oracle Database License Audit Extortion",
    "description": "Software company conducts aggressive license audits demanding millions in retroactive payments for standard usage",
    "date_of_incident": "2020-08-30",
    "company_name": "Oracle Corporation",
    "product": ["Oracle Database", "Enterprise Software"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Service"
  },
  {
    "article_title": "Frontier Airlines Seat Assignment Scam",
    "description": "Budget airline charges fees for seat selection while automatically assigning middle seats to non-paying customers",
    "date_of_incident": "2021-06-05",
    "company_name": "Frontier Airlines Inc.",
    "product": ["Flight Services", "Seat Selection"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Chipotle Portion Size Shrinkflation",
    "description": "Restaurant chain reduces portion sizes by 25% while maintaining prices and training staff to give smaller servings",
    "date_of_incident": "2022-04-20",
    "company_name": "Chipotle Mexican Grill Inc.",
    "product": ["Food Portions", "Restaurant Service"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Capital One Credit Card Interest Rate Manipulation",
    "description": "Financial institution raises interest rates retroactively on existing balances without proper notification",
    "date_of_incident": "2021-09-08",
    "company_name": "Capital One Financial Corporation",
    "product": ["Credit Cards", "Interest Rates"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Grubhub Restaurant Commission Theft",
    "description": "Food delivery platform charges restaurants commission on orders placed directly through restaurant websites",
    "date_of_incident": "2020-11-14",
    "company_name": "Grubhub Inc.",
    "product": ["Food Delivery", "Restaurant Platform"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "PayPal Account Freeze Without Explanation",
    "description": "Payment processor randomly freezes customer accounts and holds funds for months without clear appeal process",
    "date_of_incident": "2021-12-22",
    "company_name": "PayPal Holdings Inc.",
    "product": ["Payment Processing", "Digital Wallet"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Slack Workspace Data Retention Violation",
    "description": "Business communication platform retains deleted messages and sells anonymized conversation data to advertisers",
    "date_of_incident": "2020-07-03",
    "company_name": "Slack Technologies LLC",
    "product": ["Business Communication", "Workspace Platform"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "eBay Seller Fee Hidden Calculation",
    "description": "Online marketplace uses complex fee structure to charge sellers more than advertised rates through hidden categories",
    "date_of_incident": "2022-01-30",
    "company_name": "eBay Inc.",
    "product": ["Online Marketplace", "Seller Fees"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Spotify Artist Royalty Payment Delays",
    "description": "Music streaming service delays royalty payments to artists by 6-12 months while earning interest on held funds",
    "date_of_incident": "2021-04-18",
    "company_name": "Spotify Technology S.A.",
    "product": ["Music Streaming", "Artist Royalties"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "GitHub Private Repository Data Scanning",
    "description": "Code hosting platform scans private repositories for machine learning training without explicit user consent",
    "date_of_incident": "2022-08-25",
    "company_name": "Microsoft Corporation",
    "product": ["GitHub", "Code Repository"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Etsy Search Algorithm Manipulation",
    "description": "Handmade marketplace artificially promotes listings from sellers who purchase advertising, burying organic results",
    "date_of_incident": "2021-10-12",
    "company_name": "Etsy Inc.",
    "product": ["Marketplace Search", "Seller Platform"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Wells Fargo Mortgage Modification Denial Scheme",
    "description": "Bank deliberately delays mortgage modification applications until foreclosure becomes unavoidable",
    "date_of_incident": "2020-03-27",
    "company_name": "Wells Fargo & Company",
    "product": ["Mortgage Services", "Loan Modification"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "YouTube Creator Revenue Demonetization Abuse",
    "description": "Video platform uses vague community guidelines to demonetize content creators and keep advertising revenue",
    "date_of_incident": "2021-05-14",
    "company_name": "Alphabet Inc.",
    "product": ["YouTube", "Creator Program"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "MegaHost Web Hosting Uptime Fraud",
    "description": "Web hosting company claims 99.9% uptime while deliberately excluding planned maintenance from availability calculations",
    "date_of_incident": "2022-02-08",
    "company_name": "MegaHost Solutions LLC",
    "product": ["Web Hosting", "Server Uptime"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "DriveClean Car Wash Water Recycling Lies",
    "description": "Auto service chain falsely advertises eco-friendly water recycling while dumping contaminated water into storm drains",
    "date_of_incident": "2021-07-29",
    "company_name": "DriveClean Auto Services",
    "product": ["Car Wash", "Environmental Services"],
    "type": ["Sustainability", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "PharmaCorp Generic Drug Quality Reduction",
    "description": "Pharmaceutical manufacturer uses inferior ingredients in generic medications while maintaining same pricing",
    "date_of_incident": "2020-12-15",
    "company_name": "PharmaCorp Industries",
    "product": ["Generic Medications", "Prescription Drugs"],
    "type": ["Sustainability", "Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "SafeVault Cloud Backup Ransom Protection Scam",
    "description": "Data backup service secretly partners with hackers to encrypt customer files and charge for restoration",
    "date_of_incident": "2022-09-12",
    "company_name": "SafeVault Digital Storage",
    "product": ["Cloud Backup", "Data Protection"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Service"
  },
  {
    "article_title": "TrendyFashion Fast Fashion Environmental Destruction",
    "description": "Clothing retailer promotes sustainability while operating factories with severe environmental violations",
    "date_of_incident": "2021-08-06",
    "company_name": "TrendyFashion Global Ltd.",
    "product": ["Fast Fashion", "Clothing Manufacturing"],
    "type": ["Sustainability"],
    "article_type": "Company"
  },
  {
    "article_title": "CyberGuard Antivirus False Positive Manipulation",
    "description": "Security software company artificially increases threat detection to justify premium subscription renewals",
    "date_of_incident": "2020-10-21",
    "company_name": "CyberGuard Security Corp.",
    "product": ["Antivirus Software", "Security Suite"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "EliteGym Membership Contract Trap",
    "description": "Fitness center uses 5-year contracts with automatic renewals and prohibits cancellation even for medical reasons",
    "date_of_incident": "2022-05-17",
    "company_name": "EliteGym Fitness Centers",
    "product": ["Gym Membership", "Fitness Contracts"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "SmartCity Parking Meter Overcharging",
    "description": "Municipal parking system charges credit cards multiple times for single parking sessions without clear receipts",
    "date_of_incident": "2021-03-11",
    "company_name": "SmartCity Parking Solutions",
    "product": ["Digital Parking Meters", "Payment Processing"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "VitalSleep CPAP Machine Remote Shutdown",
    "description": "Medical device company remotely disables sleep apnea machines for customers behind on subscription payments",
    "date_of_incident": "2020-09-28",
    "company_name": "VitalSleep Medical Devices",
    "product": ["CPAP Machines", "Sleep Therapy"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "ProRepair Electronics Diagnostic Fee Scam",
    "description": "Device repair shop charges diagnostic fees even when refusing to repair devices or providing false damage assessments",
    "date_of_incident": "2022-07-04",
    "company_name": "ProRepair Electronics Services",
    "product": ["Device Repair", "Electronics Diagnostics"],
    "type": ["Repair", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "LocalISP Internet Data Cap Manipulation",
    "description": "Internet service provider artificially inflates data usage meters to push customers over monthly limits",
    "date_of_incident": "2021-11-19",
    "company_name": "LocalISP Communications",
    "product": ["Internet Service", "Data Usage Monitoring"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "GreenPower Solar Panel Lease Trap",
    "description": "Renewable energy company locks homeowners into 25-year leases with escalating payments that exceed home value",
    "date_of_incident": "2020-06-13",
    "company_name": "GreenPower Solar Systems",
    "product": ["Solar Panel Leasing", "Home Energy"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Service"
  },
  {
    "article_title": "TechSupport247 Remote Access Fraud",
    "description": "Computer support service installs malware during remote sessions to create recurring technical problems",
    "date_of_incident": "2022-03-15",
    "company_name": "TechSupport247 Services",
    "product": ["Remote Computer Support", "Technical Services"],
    "type": ["Terms of Service", "Repair"],
    "article_type": "Service"
  },
  {
    "article_title": "LuxuryStay Vacation Rental Hidden Cameras",
    "description": "Short-term rental platform allows hosts to install hidden surveillance cameras in bedrooms and bathrooms",
    "date_of_incident": "2021-01-22",
    "company_name": "LuxuryStay Vacation Rentals",
    "product": ["Vacation Rentals", "Property Platform"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "QuickCash Payday Loan Interest Compounding",
    "description": "Financial lender compounds interest daily on payday loans resulting in effective APRs exceeding 1000%",
    "date_of_incident": "2020-11-07",
    "company_name": "QuickCash Financial Solutions",
    "product": ["Payday Loans", "Short-term Lending"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "AutoLease Vehicle Return Damage Fraud",
    "description": "Car leasing company charges thousands for normal wear and tear while using inflated repair estimates",
    "date_of_incident": "2022-08-29",
    "company_name": "AutoLease Financial Corp.",
    "product": ["Vehicle Leasing", "Car Rental"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "PetInsure Claim Processing Delays",
    "description": "Pet insurance company deliberately delays claim processing for 6+ months hoping pet owners will abandon claims",
    "date_of_incident": "2021-12-08",
    "company_name": "PetInsure Protection Plans",
    "product": ["Pet Insurance", "Veterinary Coverage"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "DataRecovery Pro File Hostage Scheme",
    "description": "Data recovery service claims files are unrecoverable unless customers pay for expensive premium recovery methods",
    "date_of_incident": "2020-04-16",
    "company_name": "DataRecovery Pro Services",
    "product": ["Data Recovery", "File Restoration"],
    "type": ["Terms of Service", "Repair"],
    "article_type": "Service"
  },
  {
    "article_title": "MobileRepair Screen Replacement Parts Fraud",
    "description": "Phone repair shop installs refurbished screens while charging customers for new original manufacturer parts",
    "date_of_incident": "2022-06-21",
    "company_name": "MobileRepair Express",
    "product": ["Phone Repair", "Screen Replacement"],
    "type": ["Repair", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "CloudOffice Document Deletion Scandal",
    "description": "Online office suite automatically deletes user documents after subscription lapses without providing download access",
    "date_of_incident": "2021-09-26",
    "company_name": "CloudOffice Productivity Suite",
    "product": ["Cloud Office Software", "Document Storage"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "FitnessTracker Health Data Selling",
    "description": "Wearable device manufacturer sells detailed health metrics to pharmaceutical companies without user knowledge",
    "date_of_incident": "2020-08-12",
    "company_name": "FitnessTracker Technologies",
    "product": ["Fitness Wearables", "Health Monitoring"],
    "type": ["Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "HomeDelivery Package Theft Insurance Scam",
    "description": "Delivery service offers package insurance but denies claims by requiring impossible proof of theft",
    "date_of_incident": "2022-10-05",
    "company_name": "HomeDelivery Express Corp.",
    "product": ["Package Delivery", "Shipping Insurance"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "CreditFix Debt Relief Credit Damage",
    "description": "Debt relief company instructs clients to stop payments while negotiations fail, destroying credit scores",
    "date_of_incident": "2021-05-31",
    "company_name": "CreditFix Debt Solutions",
    "product": ["Debt Relief", "Credit Counseling"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "SmartLock Home Security Backdoor Access",
    "description": "Connected door lock manufacturer maintains secret administrative access to unlock any device remotely",
    "date_of_incident": "2020-12-09",
    "company_name": "SmartLock Security Systems",
    "product": ["Smart Door Locks", "Home Security"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Product line"
  },
  {
    "article_title": "TravelPro Vacation Package Bait and Switch",
    "description": "Travel agency advertises luxury accommodations but books customers into budget hotels with no refund policy",
    "date_of_incident": "2022-02-28",
    "company_name": "TravelPro Vacation Services",
    "product": ["Vacation Packages", "Travel Booking"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Costco Membership Photo Facial Recognition Database",
    "description": "Warehouse retailer uses membership card photos to build facial recognition system for tracking customer behavior across stores",
    "date_of_incident": "2022-11-20",
    "company_name": "Costco Wholesale Corporation",
    "product": ["Membership Cards", "Store Security"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Zoom Webinar Attendee Data Harvesting",
    "description": "Video conferencing platform collects detailed behavioral data on webinar participants and sells insights to marketing companies",
    "date_of_incident": "2021-08-14",
    "company_name": "Zoom Video Communications",
    "product": ["Zoom Webinars", "Participant Analytics"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Chrysler Jeep Remote Engine Disable",
    "description": "Automotive manufacturer can remotely disable vehicles for missed loan payments without court orders or grace periods",
    "date_of_incident": "2020-10-03",
    "company_name": "Stellantis N.V.",
    "product": ["Jeep Vehicles", "Connected Car Services"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "Discord Voice Chat Data Recording",
    "description": "Gaming communication platform secretly records voice conversations for AI training without user notification",
    "date_of_incident": "2022-04-07",
    "company_name": "Discord Inc.",
    "product": ["Voice Chat", "Gaming Communication"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Instacart Shopper Tip Theft",
    "description": "Grocery delivery service reduces shopper base pay when customers leave tips, effectively stealing tip money",
    "date_of_incident": "2021-06-25",
    "company_name": "Instacart Inc.",
    "product": ["Grocery Delivery", "Shopper Platform"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Chase Bank Overdraft Fee Manipulation",
    "description": "Financial institution reorders transactions to maximize overdraft fees rather than processing in chronological order",
    "date_of_incident": "2020-02-18",
    "company_name": "JPMorgan Chase & Co.",
    "product": ["Checking Accounts", "Overdraft Protection"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Wayfair Furniture Quality Photo Deception",
    "description": "Online furniture retailer uses heavily manipulated photos that misrepresent actual product size, color, and materials",
    "date_of_incident": "2021-12-12",
    "company_name": "Wayfair Inc.",
    "product": ["Online Furniture", "Product Photography"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Coinbase Cryptocurrency Trading Fee Hidden Calculation",
    "description": "Digital currency exchange obscures true trading costs through complex spread calculations and multiple fee layers",
    "date_of_incident": "2022-07-31",
    "company_name": "Coinbase Global Inc.",
    "product": ["Cryptocurrency Trading", "Digital Assets"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Domino's Pizza Delivery Time Tracking Manipulation",
    "description": "Food delivery chain manipulates GPS tracking to show false delivery times and avoid compensation for late orders",
    "date_of_incident": "2021-03-09",
    "company_name": "Domino's Pizza Inc.",
    "product": ["Pizza Delivery", "Order Tracking"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Dropbox Business Data Mining Violation",
    "description": "Cloud storage service scans business documents for competitive intelligence and sells insights to rival companies",
    "date_of_incident": "2020-09-22",
    "company_name": "Dropbox Inc.",
    "product": ["Cloud Storage", "Business Documents"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "MasterClass Subscription Auto-Renewal Trap",
    "description": "Online education platform makes subscription cancellation extremely difficult and charges full annual fees without prorated refunds",
    "date_of_incident": "2022-01-16",
    "company_name": "MasterClass Inc.",
    "product": ["Online Courses", "Subscription Service"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Lyft Driver Rating Manipulation",
    "description": "Rideshare platform artificially lowers driver ratings to justify reduced earnings and increased commission rates",
    "date_of_incident": "2021-09-13",
    "company_name": "Lyft Inc.",
    "product": ["Rideshare Service", "Driver Platform"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Ring Video Doorbell Police Partnership Overreach",
    "description": "Security device company provides law enforcement with backdoor access to customer video feeds without warrants",
    "date_of_incident": "2020-05-28",
    "company_name": "Amazon.com Inc.",
    "product": ["Ring Doorbell", "Police Partnerships"],
    "type": ["Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "ZoomCare Medical Records Data Selling",
    "description": "Telehealth provider sells patient medical records to pharmaceutical companies for drug development research",
    "date_of_incident": "2022-03-21",
    "company_name": "ZoomCare Medical Services",
    "product": ["Telehealth", "Medical Records"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "UrbanAir Drone Delivery Privacy Violation",
    "description": "Delivery drone company uses aerial cameras to map private property and sells real estate intelligence data",
    "date_of_incident": "2021-11-04",
    "company_name": "UrbanAir Logistics Corp.",
    "product": ["Drone Delivery", "Aerial Surveillance"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "MegaTech Smartphone Battery Throttling Algorithm",
    "description": "Mobile device manufacturer deliberately slows processor speeds when battery reaches 80% capacity to force upgrades",
    "date_of_incident": "2020-12-30",
    "company_name": "MegaTech Mobile Solutions",
    "product": ["Smartphones", "Battery Management"],
    "type": ["Ownership", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "PureFoods Organic Certification Fraud",
    "description": "Food manufacturer uses conventional pesticides on crops while maintaining fraudulent organic certification labels",
    "date_of_incident": "2022-06-14",
    "company_name": "PureFoods Organic Farms",
    "product": ["Organic Produce", "Food Certification"],
    "type": ["Sustainability", "Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "AutoTune Music Software Subscription Lock",
    "description": "Audio software company remotely disables professional music tools if subscription payment is one day late",
    "date_of_incident": "2021-04-26",
    "company_name": "AutoTune Audio Technologies",
    "product": ["Music Software", "Audio Production"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "MediCorp Prescription Drug Patient Profiling",
    "description": "Pharmaceutical company tracks patient prescription compliance and shares data with insurance companies for rate adjustments",
    "date_of_incident": "2020-07-19",
    "company_name": "MediCorp Pharmaceutical Group",
    "product": ["Prescription Medications", "Patient Monitoring"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "CloudArchive File Access Ransom",
    "description": "Document storage service blocks access to archived files unless customers upgrade to premium plans costing 500% more",
    "date_of_incident": "2022-09-08",
    "company_name": "CloudArchive Digital Storage",
    "product": ["Document Archiving", "File Storage"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "SportStream Live Event Blackout Manipulation",
    "description": "Sports streaming service artificially creates regional blackouts to force customers to purchase higher-tier packages",
    "date_of_incident": "2021-01-11",
    "company_name": "SportStream Broadcasting",
    "product": ["Sports Streaming", "Live Events"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "EcoWash Laundry Detergent Chemical Contamination",
    "description": "Cleaning product company markets eco-friendly detergents while using banned chemicals that cause skin irritation",
    "date_of_incident": "2020-11-25",
    "company_name": "EcoWash Cleaning Products",
    "product": ["Laundry Detergent", "Eco-Friendly Cleaners"],
    "type": ["Sustainability", "Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "TechFix Computer Repair Parts Harvesting",
    "description": "Computer repair service removes valuable components from customer devices and replaces with inferior parts",
    "date_of_incident": "2022-05-03",
    "company_name": "TechFix Computer Services",
    "product": ["Computer Repair", "Hardware Replacement"],
    "type": ["Repair", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "QuickLoan Auto Title Predatory Lending",
    "description": "Vehicle title loan company charges 300% APR and repossesses cars for payments just 10 days late",
    "date_of_incident": "2021-07-17",
    "company_name": "QuickLoan Auto Finance",
    "product": ["Title Loans", "Vehicle Financing"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "FreshMart Grocery Price Scanner Fraud",
    "description": "Supermarket chain programs checkout scanners to charge higher prices than shelf tags for commonly purchased items",
    "date_of_incident": "2020-08-09",
    "company_name": "FreshMart Grocery Stores",
    "product": ["Checkout Systems", "Price Scanning"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "SecureVPN User Activity Logging",
    "description": "Privacy-focused VPN service secretly logs all user internet activity and sells browsing data to advertising networks",
    "date_of_incident": "2022-10-12",
    "company_name": "SecureVPN Privacy Solutions",
    "product": ["VPN Service", "Internet Privacy"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "HomeWorks Contractor License Fraud",
    "description": "Home improvement company uses expired contractor licenses and unqualified workers while charging premium rates",
    "date_of_incident": "2021-02-05",
    "company_name": "HomeWorks Construction Corp.",
    "product": ["Home Improvement", "Construction Services"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "DataCorp Employee Monitoring Overreach",
    "description": "Business software company's productivity tools secretly monitor employee keystrokes, emails, and webcam feeds",
    "date_of_incident": "2020-06-30",
    "company_name": "DataCorp Business Solutions",
    "product": ["Employee Monitoring", "Productivity Software"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "AquaPure Water Filter Replacement Scam",
    "description": "Water filtration company designs filters to degrade rapidly and sends false replacement alerts to drive unnecessary sales",
    "date_of_incident": "2022-12-07",
    "company_name": "AquaPure Water Systems",
    "product": ["Water Filters", "Home Filtration"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "AirBnb Host Camera Disclosure Violation",
    "description": "Vacation rental platform allows hosts to hide security camera locations and fails to enforce disclosure requirements",
    "date_of_incident": "2021-08-28",
    "company_name": "Airbnb Inc.",
    "product": ["Vacation Rentals", "Host Platform"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "CryptoWallet Private Key Backdoor Access",
    "description": "Digital currency wallet provider maintains secret access to user private keys and can freeze funds without notice",
    "date_of_incident": "2020-03-14",
    "company_name": "CryptoWallet Solutions Ltd.",
    "product": ["Cryptocurrency Wallet", "Digital Currency Storage"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "PowerGrid Smart Meter Overcharging Algorithm",
    "description": "Electric utility uses smart meters to inflate energy usage readings during peak pricing hours",
    "date_of_incident": "2022-08-16",
    "company_name": "PowerGrid Electric Company",
    "product": ["Smart Meters", "Electric Service"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "HealthTrack Fitness App Location Stalking",
    "description": "Exercise tracking application sells real-time location data to private investigators and stalking services",
    "date_of_incident": "2021-10-23",
    "company_name": "HealthTrack Fitness Apps",
    "product": ["Fitness Tracking", "Location Services"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "AutoShop Diagnostic Software Manipulation",
    "description": "Vehicle repair chain programs diagnostic computers to show false error codes requiring expensive unnecessary repairs",
    "date_of_incident": "2020-04-11",
    "company_name": "AutoShop Repair Centers",
    "product": ["Auto Repair", "Vehicle Diagnostics"],
    "type": ["Repair", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "CloudPrint Remote Printer Control Abuse",
    "description": "Cloud printing service remotely disables printers and forces users to purchase new devices instead of allowing repairs",
    "date_of_incident": "2022-02-24",
    "company_name": "CloudPrint Digital Services",
    "product": ["Cloud Printing", "Remote Printer Management"],
    "type": ["Ownership", "Repair"],
    "article_type": "Service"
  },
  {
    "article_title": "StudyMax Online Exam Proctoring Privacy Invasion",
    "description": "Educational software records students' full bedroom environments and sells footage to data analysis companies",
    "date_of_incident": "2021-05-19",
    "company_name": "StudyMax Educational Technology",
    "product": ["Online Proctoring", "Educational Software"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "FlexWork Gig Economy Worker Classification Fraud",
    "description": "Labor platform misclassifies full-time workers as independent contractors to avoid providing health insurance and benefits",
    "date_of_incident": "2020-12-04",
    "company_name": "FlexWork Gig Platform",
    "product": ["Gig Economy Platform", "Worker Classification"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "MegaStorage Unit Size Measurement Fraud",
    "description": "Self-storage company advertises unit sizes that are 25% smaller than actual measurements to charge premium rates",
    "date_of_incident": "2022-04-13",
    "company_name": "MegaStorage Facilities Corp.",
    "product": ["Self Storage", "Storage Units"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "TeleMed Prescription Kickback Scheme",
    "description": "Telemedicine platform receives payments from pharmaceutical companies to preferentially prescribe expensive brand-name drugs",
    "date_of_incident": "2021-12-15",
    "company_name": "TeleMed Health Services",
    "product": ["Telemedicine", "Online Prescriptions"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "GreenDrive Electric Vehicle Range Manipulation",
    "description": "Electric car manufacturer programs vehicles to show inflated range estimates that decrease significantly after purchase",
    "date_of_incident": "2020-09-01",
    "company_name": "GreenDrive Electric Motors",
    "product": ["Electric Vehicles", "Range Estimation"],
    "type": ["Terms of Service", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "iPhone 13 Pro Camera Lens Flare Manufacturing Defect",
    "description": "Apple iPhone 13 Pro cameras produce excessive lens flare in bright light conditions due to coating defects, company denies warranty coverage",
    "date_of_incident": "2022-01-18",
    "company_name": "Apple Inc.",
    "product": ["iPhone 13 Pro", "iPhone 13 Pro Max", "Camera System"],
    "type": ["Repair", "Ownership"],
    "article_type": "Product"
  },
  {
    "article_title": "Samsung Galaxy S22 Ultra Screen Burn-In Issues",
    "description": "Premium smartphone displays develop permanent burn-in patterns within 6 months of normal use, Samsung refuses free replacements",
    "date_of_incident": "2022-05-22",
    "company_name": "Samsung Electronics",
    "product": ["Galaxy S22 Ultra", "AMOLED Display"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Tesla Model Y Heat Pump Failure in Cold Weather",
    "description": "Electric vehicle heat pumps fail in temperatures below 20°F, leaving passengers without heating and reducing range by 40%",
    "date_of_incident": "2021-12-10",
    "company_name": "Tesla Inc.",
    "product": ["Model Y", "Heat Pump System"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Microsoft Xbox Series X Disc Drive Grinding Noise",
    "description": "Gaming console disc drives develop loud grinding noises that damage game discs, Microsoft initially blamed user handling",
    "date_of_incident": "2021-02-28",
    "company_name": "Microsoft Corporation",
    "product": ["Xbox Series X", "Disc Drive"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Amazon Echo Dot Voice Recognition Degradation",
    "description": "Smart speakers gradually lose voice recognition accuracy over time through software updates, forcing users to upgrade devices",
    "date_of_incident": "2022-08-05",
    "company_name": "Amazon.com Inc.",
    "product": ["Echo Dot", "Alexa Voice Service"],
    "type": ["Ownership", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Google Pixel 6 Fingerprint Scanner Failure",
    "description": "Smartphone fingerprint sensors fail after software updates, Google claims hardware incompatibility with security patches",
    "date_of_incident": "2022-03-12",
    "company_name": "Alphabet Inc.",
    "product": ["Pixel 6", "Pixel 6 Pro", "Fingerprint Scanner"],
    "type": ["Repair", "Ownership"],
    "article_type": "Product"
  },
  {
    "article_title": "Nintendo Switch OLED Joy-Con Connection Drops",
    "description": "Updated console model experiences frequent controller disconnections during gameplay, Nintendo blames electromagnetic interference",
    "date_of_incident": "2021-11-15",
    "company_name": "Nintendo Co., Ltd.",
    "product": ["Nintendo Switch OLED", "Joy-Con Controllers"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Sony WH-1000XM4 Headband Cracking Defect",
    "description": "Premium noise-canceling headphones develop cracks in headband after 12-18 months, Sony claims normal wear and tear",
    "date_of_incident": "2021-09-30",
    "company_name": "Sony Corporation",
    "product": ["WH-1000XM4", "Wireless Headphones"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Netflix Password Sharing Crackdown Privacy Overreach",
    "description": "Streaming service monitors device locations and IP addresses to restrict account sharing, violating user privacy expectations",
    "date_of_incident": "2022-10-25",
    "company_name": "Netflix Inc.",
    "product": ["Netflix Streaming", "Account Management"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Disney+ HDR Content Playback Restrictions",
    "description": "Streaming platform artificially limits HDR content playback on older devices despite hardware compatibility",
    "date_of_incident": "2022-07-14",
    "company_name": "The Walt Disney Company",
    "product": ["Disney+ Streaming", "HDR Content"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "MacBook Pro M1 SSD Wear Excessive Usage Logging",
    "description": "Apple laptop SSDs show abnormally high wear rates due to excessive system logging, reducing lifespan significantly",
    "date_of_incident": "2021-04-20",
    "company_name": "Apple Inc.",
    "product": ["MacBook Pro M1", "SSD Storage"],
    "type": ["Sustainability", "Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Adobe Photoshop Subscription Price Increase Without Notice",
    "description": "Creative software company increases subscription prices mid-contract without adequate notification period",
    "date_of_incident": "2022-06-01",
    "company_name": "Adobe Inc.",
    "product": ["Photoshop", "Creative Cloud Subscription"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Volkswagen ID.4 Charging Port Corrosion",
    "description": "Electric vehicle charging ports develop corrosion in wet conditions, causing charging failures and safety hazards",
    "date_of_incident": "2021-08-17",
    "company_name": "Volkswagen AG",
    "product": ["ID.4", "Electric Vehicle Charging"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "HP LaserJet Printer Toner Authentication Bypass",
    "description": "Laser printers refuse to print with third-party toner cartridges after firmware updates block compatibility chips",
    "date_of_incident": "2022-09-20",
    "company_name": "HP Inc.",
    "product": ["LaserJet Printers", "Toner Cartridges"],
    "type": ["Ownership", "Repair"],
    "article_type": "Product line"
  },
  {
    "article_title": "John Deere Combine Harvester GPS Dependency",
    "description": "Agricultural equipment becomes inoperable when GPS signal is lost, forcing farmers to pay for satellite service subscriptions",
    "date_of_incident": "2022-04-08",
    "company_name": "Deere & Company",
    "product": ["Combine Harvesters", "GPS Navigation"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "Canon EOS R5 Overheating Video Recording Limits",
    "description": "Professional camera artificially limits video recording time due to overheating, despite adequate cooling solutions existing",
    "date_of_incident": "2020-08-14",
    "company_name": "Canon Inc.",
    "product": ["EOS R5", "Video Recording"],
    "type": ["Ownership", "Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Tesla Model 3 Phantom Braking False Alerts",
    "description": "Electric vehicle autopilot system triggers sudden emergency braking on highways without obstacles present",
    "date_of_incident": "2022-01-05",
    "company_name": "Tesla Inc.",
    "product": ["Model 3", "Autopilot System"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "BMW ConnectedDrive Service Automatic Renewal Trap",
    "description": "Connected car services automatically renew expensive subscriptions without clear opt-out options in vehicle interface",
    "date_of_incident": "2021-10-30",
    "company_name": "BMW AG",
    "product": ["ConnectedDrive", "Vehicle Subscriptions"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Samsung SmartThings Hub Forced Obsolescence",
    "description": "Smart home hub devices stop receiving updates after 3 years, rendering connected home automation systems unusable",
    "date_of_incident": "2022-02-16",
    "company_name": "Samsung Electronics",
    "product": ["SmartThings Hub", "Home Automation"],
    "type": ["Sustainability", "Ownership"],
    "article_type": "Product"
  },
  {
    "article_title": "AirPods Pro Battery Drain Accelerated Aging",
    "description": "Wireless earbuds experience rapid battery degradation after iOS updates, requiring replacement within 18 months",
    "date_of_incident": "2021-06-12",
    "company_name": "Apple Inc.",
    "product": ["AirPods Pro", "Battery Management"],
    "type": ["Sustainability", "Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Microsoft Windows 11 Hardware Compatibility Artificial Limits",
    "description": "Operating system artificially restricts installation on capable older hardware to drive new computer sales",
    "date_of_incident": "2021-10-05",
    "company_name": "Microsoft Corporation",
    "product": ["Windows 11", "Hardware Compatibility"],
    "type": ["Ownership", "Sustainability"],
    "article_type": "Service"
  },
  {
    "article_title": "Amazon Kindle E-Reader Book Deletion Remote Control",
    "description": "E-reader company remotely deletes purchased books from devices without user consent due to licensing disputes",
    "date_of_incident": "2022-05-08",
    "company_name": "Amazon.com Inc.",
    "product": ["Kindle E-Reader", "Digital Books"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "Instagram Business Account Reach Throttling",
    "description": "Social media platform reduces organic reach for business accounts unless they purchase advertising to reach their own followers",
    "date_of_incident": "2022-03-22",
    "company_name": "Meta Platforms Inc.",
    "product": ["Instagram Business", "Organic Reach"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "LG OLED TV Panel Burn-in Warranty Exclusion",
    "description": "Premium television manufacturer excludes burn-in coverage from warranty despite OLED technology's inherent susceptibility",
    "date_of_incident": "2021-07-25",
    "company_name": "LG Electronics Inc.",
    "product": ["OLED TV", "Display Panel"],
    "type": ["Repair", "Ownership"],
    "article_type": "Product line"
  },
  {
    "article_title": "Spotify Premium Family Location Verification Overreach",
    "description": "Music streaming service requires family members to share precise location data continuously to maintain discounted pricing",
    "date_of_incident": "2022-11-08",
    "company_name": "Spotify Technology S.A.",
    "product": ["Spotify Premium Family", "Location Tracking"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "PlayStation 5 DualSense Controller Battery Life Degradation",
    "description": "Gaming controller batteries lose 60% capacity within first year due to aggressive charging algorithms",
    "date_of_incident": "2021-12-03",
    "company_name": "Sony Interactive Entertainment",
    "product": ["PlayStation 5", "DualSense Controller Battery"],
    "type": ["Sustainability", "Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Facebook Marketplace Transaction Fee Hidden Charges",
    "description": "Social media platform introduces undisclosed processing fees for marketplace transactions without updating terms clearly",
    "date_of_incident": "2022-08-30",
    "company_name": "Meta Platforms Inc.",
    "product": ["Facebook Marketplace", "Transaction Processing"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "iPad Pro Magic Keyboard Connector Pin Corrosion",
    "description": "Tablet accessory develops corrosion on magnetic connectors within months, Apple claims moisture damage not covered by warranty",
    "date_of_incident": "2021-03-18",
    "company_name": "Apple Inc.",
    "product": ["iPad Pro", "Magic Keyboard"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "YouTube Premium Price Increase Regional Discrimination",
    "description": "Video platform charges different premium subscription prices based on user location, creating unfair pricing disparities",
    "date_of_incident": "2022-12-15",
    "company_name": "Alphabet Inc.",
    "product": ["YouTube Premium", "Subscription Service"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Mercedes-Benz EQS Electric Vehicle Software Paywall",
    "description": "Luxury electric car manufacturer charges monthly fees to unlock rear-wheel steering already installed in vehicle hardware",
    "date_of_incident": "2022-04-12",
    "company_name": "Mercedes-Benz Group AG",
    "product": ["EQS Electric Vehicle", "Software Features"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "Garmin Fitness Watch Heart Rate Sensor Accuracy Decline",
    "description": "Sports watch heart rate monitoring becomes increasingly inaccurate over time due to sensor degradation and lack of calibration updates",
    "date_of_incident": "2021-09-14",
    "company_name": "Garmin Ltd.",
    "product": ["Fitness Watches", "Heart Rate Monitoring"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "Ring Security Camera Cloud Storage Ransom",
    "description": "Home security company threatens to delete recorded footage unless users upgrade to premium cloud storage plans",
    "date_of_incident": "2022-07-28",
    "company_name": "Amazon.com Inc.",
    "product": ["Ring Security Cameras", "Cloud Storage"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "DJI Drone GPS Restriction Zone Expansion",
    "description": "Drone manufacturer expands no-fly zones without user notification, grounding devices in previously allowed areas",
    "date_of_incident": "2021-05-20",
    "company_name": "DJI Technology Co. Ltd.",
    "product": ["Consumer Drones", "GPS Restrictions"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "Nest Thermostat Energy Saving Forced Adjustments",
    "description": "Smart thermostat automatically adjusts home temperature during peak hours without user consent to reduce grid load",
    "date_of_incident": "2022-06-18",
    "company_name": "Alphabet Inc.",
    "product": ["Nest Thermostat", "Energy Management"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "OnePlus Smartphone Charging Speed Throttling",
    "description": "Android device reduces fast charging speeds after 6 months through software updates to prevent battery degradation lawsuits",
    "date_of_incident": "2021-11-22",
    "company_name": "OnePlus Technology Co. Ltd.",
    "product": ["OnePlus Smartphones", "Fast Charging"],
    "type": ["Ownership", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "Roku TV Remote Control Battery Drain Algorithm",
    "description": "Smart TV remotes experience accelerated battery drain through unnecessary background connectivity and frequent polling",
    "date_of_incident": "2022-01-12",
    "company_name": "Roku Inc.",
    "product": ["Roku TV", "Remote Control"],
    "type": ["Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Peloton Bike+ Touchscreen Adhesive Failure",
    "description": "Exercise bike touchscreens detach from mounting arms due to adhesive failure, creating safety hazards during workouts",
    "date_of_incident": "2021-08-09",
    "company_name": "Peloton Interactive Inc.",
    "product": ["Bike+", "Touchscreen Display"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "WhatsApp Business API Rate Limiting Discrimination",
    "description": "Messaging platform artificially limits message delivery rates for small businesses while prioritizing enterprise customers",
    "date_of_incident": "2022-09-05",
    "company_name": "Meta Platforms Inc.",
    "product": ["WhatsApp Business API", "Message Delivery"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "GoPro Action Camera Battery Swelling Defect",
    "description": "Action camera batteries swell and become trapped in device housing, creating potential fire hazards and rendering cameras unusable",
    "date_of_incident": "2021-04-15",
    "company_name": "GoPro Inc.",
    "product": ["GoPro Cameras", "Lithium Batteries"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "Slack Enterprise Data Retention Policy Violation",
    "description": "Business communication platform retains deleted corporate messages longer than disclosed, violating enterprise data policies",
    "date_of_incident": "2022-10-03",
    "company_name": "Slack Technologies LLC",
    "product": ["Slack Enterprise", "Data Retention"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Ford F-150 Lightning Charging Network Access Fees",
    "description": "Electric truck manufacturer charges monthly subscription fees for access to third-party charging networks despite partnerships",
    "date_of_incident": "2022-05-25",
    "company_name": "Ford Motor Company",
    "product": ["F-150 Lightning", "Charging Network Access"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Product"
  },
  {
    "article_title": "iPhone 14 Plus MagSafe Charging Coil Overheating",
    "description": "Wireless charging system causes device to overheat and shut down when using third-party MagSafe accessories",
    "date_of_incident": "2023-02-14",
    "company_name": "Apple Inc.",
    "product": ["iPhone 14 Plus", "MagSafe Charging", "Wireless Charging"],
    "type": ["Repair", "Ownership"],
    "article_type": "Product"
  },
  {
    "article_title": "Samsung Galaxy Buds Pro Ear Infection Risk",
    "description": "Wireless earbuds use materials that cause allergic reactions and ear infections in sensitive users, company denies health risks",
    "date_of_incident": "2022-07-08",
    "company_name": "Samsung Electronics",
    "product": ["Galaxy Buds Pro", "Wireless Earbuds"],
    "type": ["Sustainability", "Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Tesla Model S Plaid Door Handle Retraction Malfunction",
    "description": "Luxury electric vehicle door handles fail to extend in emergency situations, potentially trapping occupants",
    "date_of_incident": "2022-11-20",
    "company_name": "Tesla Inc.",
    "product": ["Model S Plaid", "Door Handles"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Microsoft Surface Laptop Screen Delamination Issue",
    "description": "Premium laptop screens develop separation between layers causing display distortion and touch sensitivity loss",
    "date_of_incident": "2022-09-12",
    "company_name": "Microsoft Corporation",
    "product": ["Surface Laptop", "Display Screen"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Amazon Alexa Voice Assistant Child Privacy Violations",
    "description": "Smart speaker continues recording children's conversations after wake word and shares data with advertising partners",
    "date_of_incident": "2023-01-15",
    "company_name": "Amazon.com Inc.",
    "product": ["Alexa", "Echo Devices", "Voice Assistant"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Google Chrome Browser RAM Memory Leak Intentional",
    "description": "Web browser deliberately consumes excessive memory to slow down competing applications and force hardware upgrades",
    "date_of_incident": "2022-12-03",
    "company_name": "Alphabet Inc.",
    "product": ["Google Chrome", "Web Browser"],
    "type": ["Sustainability", "Ownership"],
    "article_type": "Service"
  },
  {
    "article_title": "Nintendo Switch Pro Controller Analog Stick Calibration Drift",
    "description": "Premium gaming controller develops input calibration errors requiring manual recalibration every few weeks",
    "date_of_incident": "2022-08-25",
    "company_name": "Nintendo Co., Ltd.",
    "product": ["Switch Pro Controller", "Analog Sticks"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Sony PlayStation Portal Remote Play Latency Manipulation",
    "description": "Handheld gaming device artificially increases input latency when detecting non-PlayStation network connections",
    "date_of_incident": "2023-03-10",
    "company_name": "Sony Interactive Entertainment",
    "product": ["PlayStation Portal", "Remote Play"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Product"
  },
  {
    "article_title": "Netflix Original Content Removal Without Refund",
    "description": "Streaming service removes self-produced shows from platform without offering refunds to subscribers who joined specifically for that content",
    "date_of_incident": "2022-10-18",
    "company_name": "Netflix Inc.",
    "product": ["Netflix Originals", "Streaming Content"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Disney+ Regional Content Availability Discrimination",
    "description": "Streaming platform offers different content libraries based on geographic location despite same subscription pricing",
    "date_of_incident": "2022-06-22",
    "company_name": "The Walt Disney Company",
    "product": ["Disney+ Streaming", "Regional Content"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "MacBook Air M2 SSD Speed Throttling Base Model",
    "description": "Entry-level laptop uses slower SSD configuration while marketing same performance specifications as higher-tier models",
    "date_of_incident": "2022-07-15",
    "company_name": "Apple Inc.",
    "product": ["MacBook Air M2", "SSD Storage"],
    "type": ["Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "Adobe After Effects Subscription Feature Removal",
    "description": "Video editing software removes popular features from lower-tier subscriptions and forces users to upgrade to access previously included tools",
    "date_of_incident": "2022-11-08",
    "company_name": "Adobe Inc.",
    "product": ["After Effects", "Creative Cloud Tiers"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Service"
  },
  {
    "article_title": "BMW X3 Engine Management Software Detuning",
    "description": "Luxury SUV receives software updates that reduce engine performance to meet emissions standards retroactively",
    "date_of_incident": "2022-04-30",
    "company_name": "BMW AG",
    "product": ["X3 SUV", "Engine Management"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "HP Envy Printer Wi-Fi Authentication Vulnerabilities",
    "description": "All-in-one printer contains security flaws that allow unauthorized access to home networks through printer interface",
    "date_of_incident": "2022-12-20",
    "company_name": "HP Inc.",
    "product": ["Envy Printers", "Wi-Fi Security"],
    "type": ["Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "John Deere Tractor Engine Hour Meter Manipulation",
    "description": "Agricultural equipment artificially inflates engine hours to trigger unnecessary maintenance and void warranties early",
    "date_of_incident": "2023-01-28",
    "company_name": "Deere & Company",
    "product": ["Agricultural Tractors", "Engine Monitoring"],
    "type": ["Repair", "Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "Canon EOS R6 Mark II Battery Authentication Lockout",
    "description": "Professional camera refuses to operate with third-party batteries despite identical specifications and safety certifications",
    "date_of_incident": "2022-11-15",
    "company_name": "Canon Inc.",
    "product": ["EOS R6 Mark II", "Camera Batteries"],
    "type": ["Ownership", "Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Tesla Cybertruck Stainless Steel Corrosion Denial",
    "description": "Electric pickup truck develops rust spots on stainless steel body panels, company claims normal weathering not covered by warranty",
    "date_of_incident": "2023-04-12",
    "company_name": "Tesla Inc.",
    "product": ["Cybertruck", "Stainless Steel Body"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Instagram Reels Algorithm Preference Manipulation",
    "description": "Social media platform artificially promotes paid content in Reels feed while suppressing organic creator content",
    "date_of_incident": "2022-09-05",
    "company_name": "Meta Platforms Inc.",
    "product": ["Instagram Reels", "Content Algorithm"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "LG UltraFine Monitor Thunderbolt Port Power Surge",
    "description": "External monitor sends power surges through Thunderbolt connection, damaging connected MacBook charging circuits",
    "date_of_incident": "2022-05-18",
    "company_name": "LG Electronics Inc.",
    "product": ["UltraFine Monitor", "Thunderbolt Connection"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Spotify Podcast Exclusive Content Paywall Surprise",
    "description": "Music streaming service moves popular podcasts behind additional paywall without notifying existing premium subscribers",
    "date_of_incident": "2022-08-14",
    "company_name": "Spotify Technology S.A.",
    "product": ["Spotify Podcasts", "Premium Subscription"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Facebook Dating Profile Data Cross-Contamination",
    "description": "Social media platform shares dating profile information with main Facebook profile advertisers without explicit consent",
    "date_of_incident": "2022-10-30",
    "company_name": "Meta Platforms Inc.",
    "product": ["Facebook Dating", "Profile Data"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "iPad Air 5th Generation Screen Responsiveness Degradation",
    "description": "Tablet touchscreen becomes less responsive over time due to software updates that reduce touch sensitivity algorithms",
    "date_of_incident": "2022-12-08",
    "company_name": "Apple Inc.",
    "product": ["iPad Air", "Touchscreen Interface"],
    "type": ["Ownership", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "YouTube Shorts Creator Fund Payment Delays",
    "description": "Video platform delays payment to content creators for months while earning interest on withheld creator revenue",
    "date_of_incident": "2022-07-25",
    "company_name": "Alphabet Inc.",
    "product": ["YouTube Shorts", "Creator Payments"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Mercedes-Benz C-Class Infotainment System Crash Loop",
    "description": "Luxury sedan infotainment system enters endless restart cycle after software updates, disabling climate and navigation controls",
    "date_of_incident": "2023-01-22",
    "company_name": "Mercedes-Benz Group AG",
    "product": ["C-Class", "MBUX Infotainment"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Garmin Fenix 7 GPS Accuracy Deterioration",
    "description": "Premium sports watch GPS accuracy degrades significantly after 12 months due to lack of satellite constellation updates",
    "date_of_incident": "2022-11-30",
    "company_name": "Garmin Ltd.",
    "product": ["Fenix 7", "GPS Navigation"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Ring Video Doorbell Motion Detection False Positives",
    "description": "Smart doorbell generates excessive false motion alerts to increase cloud storage usage and drive subscription upgrades",
    "date_of_incident": "2022-06-15",
    "company_name": "Amazon.com Inc.",
    "product": ["Ring Video Doorbell", "Motion Detection"],
    "type": ["Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "DJI Mini 3 Pro Gimbal Bearing Premature Failure",
    "description": "Consumer drone gimbal bearings wear out within 6 months of normal use, causing camera shake and unusable footage",
    "date_of_incident": "2022-09-20",
    "company_name": "DJI Technology Co. Ltd.",
    "product": ["Mini 3 Pro", "Gimbal System"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Nest Learning Thermostat Energy Bill Sharing",
    "description": "Smart thermostat shares detailed energy usage patterns with utility companies for dynamic pricing without user knowledge",
    "date_of_incident": "2022-08-08",
    "company_name": "Alphabet Inc.",
    "product": ["Nest Learning Thermostat", "Energy Data"],
    "type": ["Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "OnePlus 11 Fast Charging Port Burn Damage",
    "description": "Flagship smartphone charging port develops burn marks and melting around connector due to excessive charging current",
    "date_of_incident": "2023-02-28",
    "company_name": "OnePlus Technology Co. Ltd.",
    "product": ["OnePlus 11", "Fast Charging Port"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Roku Ultra Media Player Remote Control Pairing Loss",
    "description": "Streaming device remote controls lose wireless pairing randomly, requiring factory reset that erases all user preferences",
    "date_of_incident": "2022-10-12",
    "company_name": "Roku Inc.",
    "product": ["Roku Ultra", "Remote Control Pairing"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Peloton Tread Treadmill Belt Premature Stretching",
    "description": "Home fitness treadmill belts stretch and slip within 18 months of normal use, creating safety hazards during workouts",
    "date_of_incident": "2022-07-03",
    "company_name": "Peloton Interactive Inc.",
    "product": ["Peloton Tread", "Treadmill Belt"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "WhatsApp Business Multi-Device Session Termination",
    "description": "Business messaging platform randomly terminates authenticated device sessions, forcing re-verification and disrupting customer service",
    "date_of_incident": "2022-11-18",
    "company_name": "Meta Platforms Inc.",
    "product": ["WhatsApp Business", "Multi-Device Support"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "GoPro Hero 11 Waterproof Seal Degradation",
    "description": "Action camera waterproof seals fail after 6 months causing water damage, company claims user maintenance negligence",
    "date_of_incident": "2022-12-15",
    "company_name": "GoPro Inc.",
    "product": ["Hero 11", "Waterproof Housing"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Slack Huddles Audio Quality Compression Overreach",
    "description": "Business communication platform compresses audio quality in voice calls to reduce server costs while maintaining premium pricing",
    "date_of_incident": "2022-09-28",
    "company_name": "Slack Technologies LLC",
    "product": ["Slack Huddles", "Voice Communication"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Ford Mustang Mach-E Charging Network Priority Throttling",
    "description": "Electric SUV receives slower charging speeds at public stations compared to Ford's preferred charging network partners",
    "date_of_incident": "2022-08-22",
    "company_name": "Ford Motor Company",
    "product": ["Mustang Mach-E", "DC Fast Charging"],
    "type": ["Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "Zoom Personal Meeting ID Hijacking Vulnerability",
    "description": "Video conferencing platform's default settings allow unauthorized users to guess and join personal meeting rooms",
    "date_of_incident": "2022-10-05",
    "company_name": "Zoom Video Communications",
    "product": ["Personal Meeting ID", "Meeting Security"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Dyson V15 Detect Laser Malfunction After Cleaning",
    "description": "Cordless vacuum laser dust detection system fails permanently after exposure to moisture during normal cleaning",
    "date_of_incident": "2022-06-30",
    "company_name": "Dyson Ltd.",
    "product": ["V15 Detect", "Laser Detection"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Nespresso Vertuo Next Pod Recognition Sensor Failure",
    "description": "Coffee machine fails to recognize compatible pods after 18 months due to sensor calibration drift, forcing frequent recalibration",
    "date_of_incident": "2022-11-10",
    "company_name": "Nestlé S.A.",
    "product": ["Vertuo Next", "Pod Recognition"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Adobe Lightroom Cloud Sync Selective Upload Failure",
    "description": "Photo editing software fails to sync RAW files larger than 100MB to cloud storage while claiming unlimited photo storage",
    "date_of_incident": "2022-07-18",
    "company_name": "Adobe Inc.",
    "product": ["Lightroom Cloud", "Photo Sync"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "IKEA Smart Home App Device Limit Artificial Restriction",
    "description": "Home automation app artificially limits connected devices to 50 per household to force users into premium enterprise plans",
    "date_of_incident": "2022-09-14",
    "company_name": "IKEA",
    "product": ["IKEA Home Smart App", "Device Management"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Starbucks Mobile Order Payment Double Charging",
    "description": "Coffee chain's mobile app frequently charges customers twice for single orders without automatic refund processing",
    "date_of_incident": "2022-12-28",
    "company_name": "Starbucks Corporation",
    "product": ["Starbucks App", "Mobile Payments"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "KitchenAid Stand Mixer Gear Oil Contamination",
    "description": "Stand mixer internal gears leak oil into food contact areas due to inadequate sealing, creating health concerns",
    "date_of_incident": "2022-10-20",
    "company_name": "Whirlpool Corporation",
    "product": ["KitchenAid Stand Mixer", "Internal Gears"],
    "type": ["Sustainability", "Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Fitbit Sense 2 Heart Rate Monitor False Readings",
    "description": "Fitness tracker provides inaccurate heart rate data during exercise, potentially creating dangerous situations for cardiac patients",
    "date_of_incident": "2022-11-25",
    "company_name": "Fitbit Inc.",
    "product": ["Sense 2", "Heart Rate Monitor"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Zoom Phone Call Quality Compression Algorithm",
    "description": "Business phone service applies aggressive audio compression that makes it difficult to distinguish similar-sounding words in meetings",
    "date_of_incident": "2022-08-30",
    "company_name": "Zoom Video Communications",
    "product": ["Zoom Phone", "Audio Compression"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Patagonia Down Jacket Feather Migration",
    "description": "Premium outdoor jacket down insulation migrates through fabric causing cold spots and reduced thermal efficiency",
    "date_of_incident": "2022-12-05",
    "company_name": "Patagonia Inc.",
    "product": ["Down Sweater Hoody", "Down Insulation"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Uber Eats Restaurant Commission Hidden Surge Pricing",
    "description": "Food delivery platform increases restaurant commission rates during peak hours without transparent notification to restaurant partners",
    "date_of_incident": "2022-07-12",
    "company_name": "Uber Technologies Inc.",
    "product": ["Uber Eats", "Restaurant Commissions"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Nintendo Switch Dock HDMI Port Electrical Damage",
    "description": "Gaming console dock sends incorrect voltage through HDMI connection, damaging connected TV HDMI ports",
    "date_of_incident": "2022-09-08",
    "company_name": "Nintendo Co., Ltd.",
    "product": ["Nintendo Switch Dock", "HDMI Output"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Bose QuietComfort Earbuds Charging Case Battery Swelling",
    "description": "Wireless earbud charging case batteries swell and crack case housing, creating potential fire hazards",
    "date_of_incident": "2022-10-15",
    "company_name": "Bose Corporation",
    "product": ["QuietComfort Earbuds", "Charging Case"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "TikTok Live Stream Revenue Share Reduction",
    "description": "Social media platform reduces creator revenue share from virtual gifts without notification while maintaining same pricing to users",
    "date_of_incident": "2022-11-12",
    "company_name": "ByteDance Ltd.",
    "product": ["TikTok Live", "Creator Revenue"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "iRobot Roomba i7+ Self-Emptying Dock Motor Failure",
    "description": "Robot vacuum self-emptying dock motors fail within 2 years, rendering expensive automation feature completely unusable",
    "date_of_incident": "2022-08-18",
    "company_name": "iRobot Corporation",
    "product": ["Roomba i7+", "Self-Emptying Dock"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Gillette Heated Razor Battery Life Deceptive Marketing",
    "description": "Premium electric razor provides only 30% of advertised battery life due to heating element power consumption not disclosed",
    "date_of_incident": "2022-06-28",
    "company_name": "Procter & Gamble",
    "product": ["Gillette Heated Razor", "Battery Life"],
    "type": ["Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "Lenovo ThinkPad X1 Carbon Keyboard Key Double Typing",
    "description": "Business laptop keyboards develop double typing issues after 18 months due to membrane degradation under keys",
    "date_of_incident": "2022-09-22",
    "company_name": "Lenovo Group Ltd.",
    "product": ["ThinkPad X1 Carbon", "Keyboard"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Meta Quest 3 VR Headset Lens Fogging Prevention Failure",
    "description": "Virtual reality headset anti-fog coating wears off after 6 months making device unusable during physical activities",
    "date_of_incident": "2023-03-15",
    "company_name": "Meta Platforms Inc.",
    "product": ["Quest 3", "VR Lenses"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Harley-Davidson LiveWire Electric Motorcycle Range Anxiety Algorithm",
    "description": "Electric motorcycle artificially reduces range estimates in cold weather to prevent riders from attempting longer trips",
    "date_of_incident": "2022-11-05",
    "company_name": "Harley-Davidson Inc.",
    "product": ["LiveWire Electric Motorcycle", "Range Estimation"],
    "type": ["Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "Keurig K-Supreme Pod Puncture Needle Dulling",
    "description": "Coffee maker pod puncture needles become dull after 500 uses, creating weak coffee and forcing premature replacement",
    "date_of_incident": "2022-10-28",
    "company_name": "Keurig Dr Pepper Inc.",
    "product": ["K-Supreme Coffee Maker", "Pod Puncture System"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Target RedCard Mobile App Location Tracking Overreach",
    "description": "Retail store credit card app tracks precise GPS location even when app is closed, building detailed shopping behavior profiles",
    "date_of_incident": "2022-12-18",
    "company_name": "Target Corporation",
    "product": ["RedCard Mobile App", "Location Services"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Marriott Bonvoy Points Expiration Acceleration",
    "description": "Hotel loyalty program reduces point expiration period from 24 to 12 months without grandfathering existing member balances",
    "date_of_incident": "2022-07-20",
    "company_name": "Marriott International Inc.",
    "product": ["Bonvoy Loyalty Program", "Points Expiration"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Oracle Database Cloud Migration Lock-in Tactics",
    "description": "Enterprise software company makes it technically difficult and expensive to migrate data out of cloud services",
    "date_of_incident": "2022-09-15",
    "company_name": "Oracle Corporation",
    "product": ["Oracle Cloud", "Database Migration"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Frontier Airlines Seat Pitch Reduction Stealth Change",
    "description": "Budget airline reduces seat spacing by 2 inches across fleet without updating seat maps or notifying existing bookings",
    "date_of_incident": "2022-08-10",
    "company_name": "Frontier Airlines Inc.",
    "product": ["Aircraft Seating", "Seat Configuration"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Chipotle Mexican Grill Portion Control AI Surveillance",
    "description": "Restaurant chain uses AI cameras to monitor employee food portions and punish workers who serve generous amounts",
    "date_of_incident": "2022-11-22",
    "company_name": "Chipotle Mexican Grill Inc.",
    "product": ["Food Service", "Portion Control"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Capital One Credit Monitoring False Security Alerts",
    "description": "Financial institution generates fake security alerts to drive sign-ups for premium credit monitoring services",
    "date_of_incident": "2022-10-08",
    "company_name": "Capital One Financial Corporation",
    "product": ["Credit Monitoring", "Security Alerts"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Grubhub Driver Tip Transparency Manipulation",
    "description": "Food delivery platform hides actual tip amounts from drivers until after delivery completion, affecting service quality decisions",
    "date_of_incident": "2022-07-28",
    "company_name": "Grubhub Inc.",
    "product": ["Driver App", "Tip Display"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "PayPal Merchant Transaction Fee Structure Confusion",
    "description": "Payment processor uses complex fee calculations that make it impossible for small businesses to predict actual transaction costs",
    "date_of_incident": "2022-09-30",
    "company_name": "PayPal Holdings Inc.",
    "product": ["Merchant Services", "Transaction Fees"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Slack Enterprise Search Indexing Privacy Violation",
    "description": "Business communication platform indexes and searches private direct messages for corporate administrators without user notification",
    "date_of_incident": "2022-12-12",
    "company_name": "Slack Technologies LLC",
    "product": ["Enterprise Search", "Message Privacy"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "eBay Seller Performance Metrics Manipulation",
    "description": "Online marketplace artificially lowers seller performance scores to justify increased listing fees and reduced search visibility",
    "date_of_incident": "2022-08-25",
    "company_name": "eBay Inc.",
    "product": ["Seller Performance", "Search Rankings"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  }, 
  {
    "article_title": "Apple Watch Series 8 Blood Oxygen Sensor Deactivation",
    "description": "Smartwatch disables blood oxygen monitoring feature in certain regions through software updates to avoid medical device regulations",
    "date_of_incident": "2023-01-12",
    "company_name": "Apple Inc.",
    "product": ["Apple Watch Series 8", "Blood Oxygen Sensor"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "Samsung Galaxy Tab S8 Ultra S Pen Latency Increase",
    "description": "Premium tablet increases stylus input latency through software updates to differentiate from professional drawing tablets",
    "date_of_incident": "2022-12-28",
    "company_name": "Samsung Electronics",
    "product": ["Galaxy Tab S8 Ultra", "S Pen"],
    "type": ["Ownership", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Tesla Model X Falcon Wing Door Sensor Malfunction",
    "description": "Electric SUV door sensors fail in cold weather causing doors to close on obstacles and creating safety hazards",
    "date_of_incident": "2023-02-18",
    "company_name": "Tesla Inc.",
    "product": ["Model X", "Falcon Wing Doors"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Microsoft Teams Call Recording Automatic Deletion",
    "description": "Business communication platform automatically deletes call recordings after 30 days without clear notification to users",
    "date_of_incident": "2022-11-14",
    "company_name": "Microsoft Corporation",
    "product": ["Microsoft Teams", "Call Recording"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Amazon Prime Video Download Limit Retroactive Reduction",
    "description": "Streaming service reduces download limits on existing accounts without grandfathering previous allowances",
    "date_of_incident": "2022-09-20",
    "company_name": "Amazon.com Inc.",
    "product": ["Prime Video", "Download Limits"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Google Drive File Sharing Permission Reset Bug",
    "description": "Cloud storage service randomly resets file sharing permissions requiring users to reconfigure access for collaborators",
    "date_of_incident": "2022-08-15",
    "company_name": "Alphabet Inc.",
    "product": ["Google Drive", "File Sharing"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Nintendo Switch Sports Joy-Con Motion Control Drift",
    "description": "Motion-controlled sports game becomes unplayable due to controller calibration issues that worsen over time",
    "date_of_incident": "2022-10-08",
    "company_name": "Nintendo Co., Ltd.",
    "product": ["Switch Sports", "Motion Controls"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Sony WF-1000XM4 Earbuds Foam Tip Degradation",
    "description": "Premium wireless earbuds include foam tips that disintegrate within 6 months requiring expensive proprietary replacements",
    "date_of_incident": "2022-07-22",
    "company_name": "Sony Corporation",
    "product": ["WF-1000XM4", "Foam Tips"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Netflix Shared Account Password Reset Frequency",
    "description": "Streaming service forces password resets every 30 days on accounts with multiple simultaneous streams from different locations",
    "date_of_incident": "2023-01-08",
    "company_name": "Netflix Inc.",
    "product": ["Account Security", "Password Management"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Disney+ Parental Control Bypass Vulnerability",
    "description": "Streaming platform's parental controls can be easily bypassed by changing device time settings, exposing children to inappropriate content",
    "date_of_incident": "2022-12-12",
    "company_name": "The Walt Disney Company",
    "product": ["Disney+ Parental Controls", "Content Filtering"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "MacBook Pro 16-inch M2 Max Thermal Throttling Design Flaw",
    "description": "Professional laptop throttles performance significantly under sustained workloads due to inadequate cooling system design",
    "date_of_incident": "2023-02-05",
    "company_name": "Apple Inc.",
    "product": ["MacBook Pro 16-inch M2 Max", "Thermal Management"],
    "type": ["Repair", "Ownership"],
    "article_type": "Product"
  },
  {
    "article_title": "Adobe Premiere Pro GPU Acceleration Artificial Limitations",
    "description": "Video editing software artificially limits GPU acceleration on older graphics cards despite hardware compatibility",
    "date_of_incident": "2022-10-18",
    "company_name": "Adobe Inc.",
    "product": ["Premiere Pro", "GPU Acceleration"],
    "type": ["Ownership", "Sustainability"],
    "article_type": "Service"
  },
  {
    "article_title": "BMW iX Electric SUV Charging Cable Lock Malfunction",
    "description": "Electric vehicle charging cable becomes permanently locked to vehicle requiring dealer service to remove",
    "date_of_incident": "2022-11-28",
    "company_name": "BMW AG",
    "product": ["iX Electric SUV", "Charging Cable"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "HP Smart Tank Printer Ink Level Sensor False Readings",
    "description": "Refillable ink printer sensors provide false low ink warnings to drive unnecessary ink purchases",
    "date_of_incident": "2022-09-08",
    "company_name": "HP Inc.",
    "product": ["Smart Tank Printers", "Ink Level Sensors"],
    "type": ["Terms of Service"],
    "article_type": "Product line"
  },
  {
    "article_title": "John Deere X Series Mower Deck Height Adjustment Failure",
    "description": "Riding lawn mower deck height adjustment mechanism fails after 2 seasons due to inadequate lubrication systems",
    "date_of_incident": "2022-06-18",
    "company_name": "Deere & Company",
    "product": ["X Series Riding Mowers", "Deck Adjustment"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product line"
  },
  {
    "article_title": "Canon RF 24-70mm f/2.8L Lens Image Stabilization Failure",
    "description": "Professional camera lens image stabilization system fails after 18 months causing blurry photos and video",
    "date_of_incident": "2022-08-30",
    "company_name": "Canon Inc.",
    "product": ["RF 24-70mm f/2.8L", "Image Stabilization"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Tesla Model Y Heat Pump Refrigerant Leak",
    "description": "Electric SUV heat pump develops refrigerant leaks requiring complete system replacement not covered under warranty",
    "date_of_incident": "2023-01-25",
    "company_name": "Tesla Inc.",
    "product": ["Model Y", "Heat Pump Refrigerant"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Instagram Business Profile Reach Analytics Manipulation",
    "description": "Social media platform inflates reach numbers for business profiles to justify advertising spending requirements",
    "date_of_incident": "2022-10-25",
    "company_name": "Meta Platforms Inc.",
    "product": ["Instagram Business", "Analytics"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "LG C2 OLED TV Automatic Brightness Limiter Activation",
    "description": "Premium television automatically reduces brightness during HDR content to prevent burn-in, defeating advertised peak brightness specs",
    "date_of_incident": "2022-07-15",
    "company_name": "LG Electronics Inc.",
    "product": ["C2 OLED TV", "HDR Brightness"],
    "type": ["Terms of Service", "Ownership"],
    "article_type": "Product"
  },
  {
    "article_title": "Spotify DJ Feature Music Discovery Algorithm Bias",
    "description": "AI DJ feature primarily recommends major label artists while suppressing independent musicians in discovery playlists",
    "date_of_incident": "2023-02-20",
    "company_name": "Spotify Technology S.A.",
    "product": ["DJ Feature", "Music Discovery"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Facebook Messenger Message Delivery Status False Indicators",
    "description": "Messaging platform shows false message delivery confirmations when recipients have blocked the sender",
    "date_of_incident": "2022-09-15",
    "company_name": "Meta Platforms Inc.",
    "product": ["Facebook Messenger", "Message Status"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "iPad Pro 12.9-inch M2 Stage Manager Memory Leak",
    "description": "Tablet multitasking feature develops memory leaks causing system crashes and data loss in professional applications",
    "date_of_incident": "2022-11-20",
    "company_name": "Apple Inc.",
    "product": ["iPad Pro 12.9-inch M2", "Stage Manager"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "YouTube Creator Studio Revenue Analytics Delay",
    "description": "Video platform delays revenue reporting to content creators by 2-3 months while earning interest on held payments",
    "date_of_incident": "2022-08-12",
    "company_name": "Alphabet Inc.",
    "product": ["YouTube Creator Studio", "Revenue Analytics"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Mercedes-Benz EQE Electric Sedan Range Estimation Inaccuracy",
    "description": "Electric luxury sedan consistently overestimates driving range by 25% in real-world conditions compared to EPA ratings",
    "date_of_incident": "2022-12-08",
    "company_name": "Mercedes-Benz Group AG",
    "product": ["EQE Electric Sedan", "Range Estimation"],
    "type": ["Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "Garmin Venu 2 Plus Smartwatch GPS Signal Loss",
    "description": "Fitness smartwatch loses GPS signal during workouts due to antenna design flaws affecting exercise tracking accuracy",
    "date_of_incident": "2022-06-25",
    "company_name": "Garmin Ltd.",
    "product": ["Venu 2 Plus", "GPS Antenna"],
    "type": ["Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Ring Alarm Pro Hub Internet Dependency Requirement",
    "description": "Home security system becomes non-functional during internet outages despite advertising local processing capabilities",
    "date_of_incident": "2022-10-30",
    "company_name": "Amazon.com Inc.",
    "product": ["Ring Alarm Pro", "Local Processing"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "DJI Air 2S Drone Gimbal Motor Overheating",
    "description": "Consumer drone gimbal motors overheat during extended flights causing permanent camera stabilization failure",
    "date_of_incident": "2022-07-08",
    "company_name": "DJI Technology Co. Ltd.",
    "product": ["Air 2S", "Gimbal Motors"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Nest Cam Outdoor Battery Life Degradation Schedule",
    "description": "Security camera battery life decreases on predictable schedule requiring replacement every 18 months regardless of usage",
    "date_of_incident": "2022-09-22",
    "company_name": "Alphabet Inc.",
    "product": ["Nest Cam Outdoor", "Battery Life"],
    "type": ["Sustainability", "Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "OnePlus 10T Fast Charging Temperature Safety Override",
    "description": "Flagship smartphone disables fast charging permanently if device exceeds temperature threshold once during charging",
    "date_of_incident": "2022-08-18",
    "company_name": "OnePlus Technology Co. Ltd.",
    "product": ["OnePlus 10T", "Fast Charging Safety"],
    "type": ["Repair", "Ownership"],
    "article_type": "Product"
  },
  {
    "article_title": "Roku Express 4K+ Remote Control Battery Drain Algorithm",
    "description": "Streaming device remote uses excessive power for voice search feature even when not actively listening",
    "date_of_incident": "2022-11-05",
    "company_name": "Roku Inc.",
    "product": ["Express 4K+", "Voice Remote"],
    "type": ["Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Peloton Guide Strength Training Camera Privacy Concerns",
    "description": "Home fitness camera system continues recording and analyzing user movements after workout sessions end",
    "date_of_incident": "2022-12-15",
    "company_name": "Peloton Interactive Inc.",
    "product": ["Peloton Guide", "Camera System"],
    "type": ["Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "WhatsApp Web Session Timeout Forced Disconnection",
    "description": "Web messaging interface forces disconnection every 4 hours requiring phone verification to encourage mobile app usage",
    "date_of_incident": "2022-07-30",
    "company_name": "Meta Platforms Inc.",
    "product": ["WhatsApp Web", "Session Management"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "GoPro Hero 12 Overheating Auto-Shutdown Timer",
    "description": "Action camera implements aggressive overheating protection that shuts down device after 15 minutes of 4K recording",
    "date_of_incident": "2023-01-18",
    "company_name": "GoPro Inc.",
    "product": ["Hero 12", "Thermal Protection"],
    "type": ["Ownership", "Repair"],
    "article_type": "Product"
  },
  {
    "article_title": "Slack Connect External Organization Data Sharing",
    "description": "Business communication platform shares user activity data with external partner organizations without explicit consent",
    "date_of_incident": "2022-10-12",
    "company_name": "Slack Technologies LLC",
    "product": ["Slack Connect", "Data Sharing"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Ford Lightning Pro Electric Truck Fleet Management Tracking",
    "description": "Commercial electric vehicle continuously transmits location and usage data to Ford servers without clear opt-out option",
    "date_of_incident": "2022-09-28",
    "company_name": "Ford Motor Company",
    "product": ["F-150 Lightning Pro", "Fleet Tracking"],
    "type": ["Terms of Service"],
    "article_type": "Product"
  },
  {
    "article_title": "Zoom Whiteboard Collaboration Session Recording",
    "description": "Video conferencing platform automatically records whiteboard sessions and stores data indefinitely without user notification",
    "date_of_incident": "2022-08-25",
    "company_name": "Zoom Video Communications",
    "product": ["Zoom Whiteboard", "Session Recording"],
    "type": ["Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "Dyson Airwrap Hair Styler Attachment Lock Mechanism Failure",
    "description": "Hair styling tool attachment locking mechanism breaks after 12 months making expensive attachments unusable",
    "date_of_incident": "2022-11-18",
    "company_name": "Dyson Ltd.",
    "product": ["Airwrap Hair Styler", "Attachment Lock"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Nespresso Creatista Plus Steam Wand Calcium Buildup Design Flaw",
    "description": "Espresso machine steam wand develops calcium buildup that cannot be cleaned without disassembly voiding warranty",
    "date_of_incident": "2022-06-12",
    "company_name": "Nestlé S.A.",
    "product": ["Creatista Plus", "Steam Wand"],
    "type": ["Repair", "Sustainability"],
    "article_type": "Product"
  },
  {
    "article_title": "Adobe Stock License Terms Retroactive Changes",
    "description": "Stock photography service changes license terms retroactively affecting previously purchased images without notification",
    "date_of_incident": "2022-12-20",
    "company_name": "Adobe Inc.",
    "product": ["Adobe Stock", "License Terms"],
    "type": ["Ownership", "Terms of Service"],
    "article_type": "Service"
  },
  {
    "article_title": "IKEA Tradfri Smart Bulb Firmware Update Compatibility Breaking",
    "description": "Smart lighting system firmware updates break compatibility with third-party home automation platforms",
    "date_of_incident": "2022-09-05",
    "company_name": "IKEA",
    "product": ["Tradfri Smart Bulbs", "Firmware Updates"],
    "type": ["Ownership", "Sustainability"],
    "article_type": "Product line"
  }
]

