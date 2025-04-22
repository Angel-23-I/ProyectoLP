var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "1.5",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    COAMA: {
      name: "Amazonas"
    },
    COANT: {
      name: "Antioquia"
    },
    COARA: {
      name: "Arauca"
    },
    COATL: {
      name: "Atlántico"
    },
    COBOL: {
      name: "Bolívar"
    },
    COBOY: {
      name: "Boyacá"
    },
    COCAL: {
      name: "Caldas"
    },
    COCAQ: {
      name: "Caquetá"
    },
    COCAS: {
      name: "Casanare"
    },
    COCAU: {
      name: "Cauca"
    },
    COCES: {
      name: "Cesar"
    },
    COCHO: {
      name: "Chocó"
    },
    COCOR: {
      name: "Córdoba"
    },
    COCUN: {
      name: "Cundinamarca"
    },
    CODC: {
      name: "Distrito Capital de Bogotá"
    },
    COGUA: {
      name: "Guainía"
    },
    COGUV: {
      name: "Guaviare"
    },
    COHUI: {
      name: "Huila"
    },
    COLAG: {
      name: "La Guajira"
    },
    COMAG: {
      name: "Magdalena"
    },
    COMET: {
      name: "Meta"
    },
    CONAR: {
      name: "Nariño"
    },
    CONSA: {
      name: "Norte de Santander"
    },
    COPUT: {
      name: "Putumayo"
    },
    COQUI: {
      name: "Quindío"
    },
    CORIS: {
      name: "Risaralda"
    },
    COSAN: {
      name: "Santander"
    },
    COSAP: {
      name: "San Andrés y Providencia"
    },
    COSUC: {
      name: "Sucre"
    },
    COTOL: {
      name: "Tolima"
    },
    COVAC: {
      name: "Valle del Cauca"
    },
    COVAU: {
      name: "Vaupés"
    },
    COVID: {
      name: "Vichada"
    }
  },
  locations: {
    "0": {
      name: "Región Insular",
      lat: "12.649178",
      lng: "-80.062827"
    }
  },
  labels: {},
  legend: {
    entries: []
  },
  regions: {
    "0": {
      states: [
        "COLAG",
        "COANT",
        "COATL",
        "COBOL",
        "COCOR",
        "COMAG",
        "COCES",
        "COSUC"
      ],
      name: "Región Caribe",
      color: "#ff5733",
      hover_color: "#ff8566"
    },
    "1": {
      states: [
        "COANT",
        "CONSA",
        "COSAN",
        "COBOY",
        "COCUN",
        "CODC",
        "COQUI",
        "CORIS",
        "COTOL",
        "COCAL",
        "COHUI"
      ],
      name: "Región Andina",
      color: "#33cc33",
      hover_color: "#66ff66"
    },
    "2": {
      states: [
        "COVAU",
        "COGUA",
        "COGUV",
        "COPUT",
        "COAMA",
        "COCAQ"
      ],
      name: "Región Amazónica",
      color: "#ffcc00",
      hover_color: "#ffcc66"
    },
    "3": {
      states: [
        "COSAP"
      ],
      name: "Región Insular",
      color: "#0066cc",
      hover_color: "#3399ff"
    },
    "4": {
      states: [
        "COMET",
        "COARA",
        "COCAS",
        "COVID"
      ],
      name: "Región Orinoquia",
      color: "#9239e3",
      hover_color: "#c6a1e7"
    },
    "5": {
      states: [
        "COVAC",
        "COCOR",
        "COCHO",
        "COCAU",
        "CONAR"
      ],
      name: "Región Pacifica",
      color: "#3393ff",
      hover_color: "#77b4f8"
    }
  }
};