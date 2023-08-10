// import { PersonConfig } from "./Interfaces";




interface TestPersonConfig {
    // skal udfyldes
    id: number;
    location: string;
    team?: string;
    name: string;
}




const people: TestPersonConfig[] = [



    { id: 0, name: "John", team: "News", location: "5.a" },
    { id: 1, name: "Alex", team: "Compliance", location: "11" },
    { id: 2, name: "testname3", team: "BtB", location: "53" },
    { id: 3, name: "nametest4", team: "PMO", location: "44" },
    { id: 4, name: "Casper", team: "Podcast", location: "22" }






];







export default people;