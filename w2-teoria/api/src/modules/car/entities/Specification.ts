import {v4 as uuidv4} from "uuid"

class Specification {
  name:String;
  description:String;
  created_at: Date;
  id?:String;

  constructor() {
    if(!this.id){
      this.id = uuidv4();
    }
  }
}

export {Specification}