import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularete');
  nagendra = 'nagendra';



  ngOnInit() {
    


    


  
}



palindrome(str: string): boolean {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}



removeDuplicates(str: string): string {
  const seen = new Set();
  let result = '';

  for (const char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    } else {
      console.log(`Duplicate character skipped: ${char}`);
    }
  }

  return result;
}



}