export default class Participant {
  constructor( name, phone) {
    this.name = name;
    this.phone = phone;
  }
  static fromString(str) {
    const array = str.split(/\t+|\s+/, 2);
    if(array[0] && array[1]) {
      // if (!(/^[1][3-9][0-9]{9}$/.test(array[1]))) {
      //   throw new Error(`'${array[0]}'Nomor Hp salah : Input 11 angka lebih`);
      // }
      return new Participant(array[0], array[1]);
    }
    throw new Error(`'${str}' Error : Nama dan Telfon dibutuhkan`);
  }
  static participantToString(participant) {
    return `${participant.name}\t${participant.phone}`;
  }
  toString() {
    return `${this.name}\t${this.phone}`;
  }
}