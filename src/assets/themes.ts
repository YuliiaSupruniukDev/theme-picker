export interface Theme {
  [field: string]: Array<{ name: string; value: string }>;
}

export const themes: Theme = {
  blue: [
    { name: 'background', value: 'hsl(222, 26%, 31%)' },
    { name: 'outputBackground', value: 'hsl(224, 36%, 15%)' },
    { name: 'keyboardBackground', value: 'hsl(223, 31%, 20%)' },
    { name: 'outputColor', value: 'white' },
    { name: 'mainKeyColor', value: 'hsl(223, 31%, 20%)' },
    { name: 'mainKeyBackground', value: 'rgba(255, 255, 255, 0.838)' },
    { name: 'actionKeyBackground', value: 'hsl(225, 21%, 49%)' },
    { name: 'equalKeyBackground', value: 'hsl(6, 63%, 50%)' },
    { name: 'actionKeyColor', value: 'white' },
    { name: 'equalKeyColor', value: 'white' },
    { name: 'textColor', value: 'hsl(221, 14%, 31%)' },
  ],
  light: [
    { name: 'background', value: 'hsl(0, 0%, 90%)' },
    { name: 'outputBackground', value: 'hsl(0, 0%, 93%)' },
    { name: 'outputColor', value: 'hsl(60, 10%, 19%)' },
    { name: 'keyboardBackground', value: 'hsl(0, 5%, 81%)' },
    { name: 'mainKeyColor', value: 'hsl(223, 31%, 20%)' },
    { name: 'mainKeyBackground', value: 'rgba(255, 255, 255, 0.838)' },
    { name: 'actionKeyBackground', value: 'hsl(185, 42%, 37%)' },
    { name: 'equalKeyBackground', value: 'hsl(25, 98%, 40%)' },
    { name: 'actionKeyColor', value: 'hsl(0, 0%, 90%)' },
    { name: 'equalKeyColor', value: 'hsl(0, 0%, 90%)' },
    { name: 'textColor', value: 'hsl(60, 10%, 19%)' },
  ],
  purple: [
    { name: 'background', value: 'hsl(268, 75%, 9%)' },
    { name: 'outputBackground', value: 'hsl(268, 71%, 12%)' },
    { name: 'outputColor', value: 'hsl(52, 100%, 62%)' },
    { name: 'keyboardBackground', value: 'hsl(268, 71%, 12%)' },
    { name: 'mainKeyColor', value: 'hsl(52, 100%, 62%)' },
    { name: 'mainKeyBackground', value: 'hsl(268, 47%, 21%)' },
    { name: 'actionKeyBackground', value: 'hsl(281, 89%, 26%)' },
    { name: 'equalKeyBackground', value: 'hsl(176, 100%, 44%)' },
    { name: 'actionKeyColor', value: 'white' },
    { name: 'equalKeyColor', value: 'hsl(268, 47%, 21%)' },
    { name: 'textColor', value: 'hsl(52, 100%, 62%)' },
  ],
};
