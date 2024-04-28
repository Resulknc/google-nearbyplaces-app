export interface PlacesNearbySearchResponse {
    html_attributions?: any;
    next_page_token?: any;
    results: Place[];
    status: string;
}
  export interface Place {
    name: string;
    vicinity: string;
    types: string[];
    geometry: Geometry;
    rating: number;
    icon: string;
    reference: string;
    place_id: string;
    scope: string;
    business_status?: string;
    icon_background_color: string;
    icon_mask_base_uri: string;
    user_ratings_total: number;
  }
  export  interface Geometry {
    location: Location;
    viewport: Viewport;
  }
  export interface Viewport {
    northeast: Location;
    southwest: Location;
  }
  export interface Location {
    lat: number;
    lng: number;
  }