export interface Turnus {
    name: string;
    startDate: Date;
    endDate: Date;
    displayDate: string; 
  }
  
  export const turnus1: Turnus = {
    name: "turnus1",
    startDate: new Date(2025, 7, 18), // August 18, 2025
    endDate: new Date(2025, 7, 21),   // August 21, 2025
    displayDate: "18. 8. - 21. 8. 2025",
  };
  
  export const turnus2: Turnus = {
    name: "turnus2",
    startDate: new Date(2025, 7, 25), // August 25, 2025
    endDate: new Date(2025, 7, 28),   // August 28, 2025
    displayDate: "25. 8. - 28. 8. 2025",
  };

  export const REGISTRATION_START_DATE = new Date(2025, 6, 17, 15, 0, 0); // July 17, 2025, 15:00:00
  export const REGISTRATION_START_DATE_TEXT: string = "17. 7.";
  export const REGISTRATION_START_TIME_TEXT: string = "v 15:00";

  export const PRE_REGISTRATION_END = new Date(2025, 6, 17, 14, 0, 0); // July 17, 2025, 14:00:00
  