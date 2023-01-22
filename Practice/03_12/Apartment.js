class Apartment {
  constructor(
    // Defines parameters:
    whose_house,
    how_many_room,
    color,
    isHall,
    hall,
    how_many_bathroom,
    isKitchen,
    isMicrowave,
    how_many_cupboards,
    typeOfCubboards,
    is_washing_machine,
    NumOfbeds,
    Tables,
    lamps,
    fan,
    door,
    view
  ) {
    // Define properties:
    this.whose_house = whose_house;
    this.how_many_room = how_many_room;
    this.color = color;
    this.isHall = isHall;
    this.hall = hall;
    this.how_many_bathroom = how_many_bathroom;
    this.isKitchen = isKitchen;
    this.isMicrowave = isMicrowave;
    this.how_many_cupboards = how_many_cupboards;
    this.typeOfCubboards = typeOfCubboards;
    this.is_washing_machine = is_washing_machine;
    this.what_is_in_the_room = {
      roomobj1: NumOfbeds,
      roomobj2: Tables,
      roomobj3: lamps,
      roomobj4: fan,
    };
    this.door = door;
    this.view = view;
  }
  // Add methods like normal fucntions:
  openDoor(doorStatus) {
    this.door = doorStatus;
  }
  room2(NumOfbedsinRoom2, TablesinRoom2, lampsinRoom2, faninRoom2) {
    this.what_is_in_the_room.roomobj1 = NumOfbedsinRoom2;
    this.what_is_in_the_room.roomobj2 = TablesinRoom2;
    this.what_is_in_the_room.roomobj3 = lampsinRoom2;
    this.what_is_in_the_room.roomobj4 = faninRoom2;
  }
}

export default Apartment;
