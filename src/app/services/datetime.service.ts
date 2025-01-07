import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }

  /**
   * Format date in string
   * @param inputDate 
   * @returns 
   */
  formatDate(inputDate: Date): string {
    try {
      // Convertir la chaîne en objet Date
      const date = new Date(inputDate);

      // Vérifier si la date est valide
      if (isNaN(date.getTime())) {
        throw new Error("Date invalide.");
      }

      // Obtenir les mois en toutes lettres
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      const month = months[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();

      // Format de l'heure et des minutes avec 0 devant si nécessaire
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");

      return `${month} ${day}, ${year} ${hours}:${minutes}`;
    } catch (error) {
      return "Format de date invalide. Utilisez un format ISO (par ex. '2024-06-19T15:45').";
    }
  }

  /**
   * Format time in hh mm ss
   * @param seconds 
   * @returns 
   */
  formatSeconds(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const result: string[] = [];
    if (hours > 0) {
      result.push(`${hours}h`);
    }
    if (minutes > 0) {
      result.push(`${minutes}min`);
    }
    if (remainingSeconds > 0) {
      result.push(`${remainingSeconds}s`);
    }

    return result.join(" ");
  }
}
