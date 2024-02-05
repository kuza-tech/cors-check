import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  async makeSearch() {
    console.log('inside make search');
    let data = JSON.stringify({
      "context": {
        "domain": "retail:1.1.0",
        "location": {
          "country": {
            "code": "IND"
          },
          "city": {
            "code": "std:080"
          }
        },
        "action": "search",
        "version": "1.1.0",
        "bap_id": "kuza-agrinet-bap.com",
        "bap_uri": "https://bap-network.kuza.one",
        "transaction_id": "beb65a81-6967-4c12-baa4-f1c03896a2b9",
        "message_id": "619aad85-472a-4814-a7b7-3863064aa84d",
        "timestamp": "2024-02-02T18:02:93+05:30"
      },
      "message": {
        "intent": {
          "item": {
            "descriptor": {
              "name": "sencor"
            }
          }
        }
      }
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://bap-client.kuza.one/search/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
    }
    catch (error) {
      console.log(error);
    }
  }
}
