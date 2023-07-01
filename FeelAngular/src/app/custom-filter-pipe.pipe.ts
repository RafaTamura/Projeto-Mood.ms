import { Pipe, PipeTransform } from "@angular/core";
import { Musica } from "./Musica";


@Pipe({
  name: "filter",
})
export class CustomFilterPipe implements PipeTransform {
  transform(musicas: Musica[], term: string, excludes: any[] = []): Musica[] {
    const toCompare = term.toLowerCase();

    function checkInside(obj: any, term: string) {
      if (typeof obj === "string" && obj.toLowerCase().includes(toCompare)) {
        return true;
      }

      for (let property in obj) {
        if (
          obj[property] === null ||
          obj[property] === undefined ||
          excludes.includes(property)
        ) {
          continue;
        }

        if (typeof obj[property] === "object") {
          if (checkInside(obj[property], term)) {
            return true;
          }
        } else if (obj[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }

      return false;
    }

    return musicas.filter((musica) => checkInside(musica, term));
  }
}
