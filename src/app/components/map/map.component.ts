import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NearbesearchService } from '../../shared/services/nearbesearch.service';
import { Place } from '../../shared/models/api-response-model';
import { MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{

  placesResponse: Place[]=[] ;
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 41.15564188730667,
    lng: 27.81383533503797
  };
  zoom = 18;
  markers: google.maps.LatLngLiteral[]= [];
  constructor(private googleApi:NearbesearchService,
    private route:ActivatedRoute){}



  ngOnInit():void{
    const longitude = this.route.snapshot.queryParams['longitude'];
    const latitude = this.route.snapshot.queryParams['latitude'];
    const radius = this.route.snapshot.queryParams['radius'];       

    this.googleApi.getNearbyPlaces(longitude, latitude, radius)
    .subscribe(
      (response)=>{
        this.placesResponse=response;
        this.setMarkers(this.placesResponse);
        console.table(this.placesResponse);
      },(error)=>{
        console.log(error);
      }
    ); 
  }


  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  setMarkers(places: Place[]){
    for (let index = 0; index < places.length; index++) {
      const element = places[index];
      let mark:google.maps.LatLngLiteral={lat:element.geometry.location.lat,
                                          lng:element.geometry.location.lng};
      
      this.markers.push(mark);
    }
    console.log(this.markers);
  }

}
