import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  // Exemple de données JSON
  jsonData = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    address: {
      street: '123 Main St',
      city: 'Springfield',
      country: 'USA'
    }
  };

  // Méthode pour créer et télécharger le fichier JSON
  downloadJson(json_data: any, filename: string) {
    // Convertir les données JSON en chaîne
    const jsonString = JSON.stringify(json_data, null, 2); // Beautify avec indentation de 2 espaces

    // Créer un objet Blob à partir de la chaîne JSON
    const blob = new Blob([jsonString], { type: 'application/json' });

    // Générer un URL pour le Blob
    const url = window.URL.createObjectURL(blob);

    // Créer un élément <a> pour télécharger le fichier
    const a = document.createElement('a');
    a.href = url;
    a.download = filename; // Nom du fichier téléchargé
    a.click();

    // Libérer la mémoire utilisée par l'objet URL
    window.URL.revokeObjectURL(url);
  }
}
