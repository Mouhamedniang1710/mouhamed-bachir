export class CreateDepenseDto {
  titre: string;
  montant: number;
  date: string; // ✅ remplacer Date par string
  categorie?: string;
}


