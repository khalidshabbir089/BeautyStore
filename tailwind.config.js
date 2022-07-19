module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
   fontFamily:{
   gotham: ['Gotham Pro', 'sans-serif']
   },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1590px'
    },
    colors:{
      white:'#FFFFFF',

      orange:{
        100:'#FEEDD3',
        200:'#FE7865',
        300:'#E6604D',
        400:'#F55C46'
      },
      blue:{
        100:'#F5F8FC',
        200:'#EFEDFE',
        300:'#5BD5E6',
      },
      green:{
        100:'#FFFBF8',
        200:'#E8FBF7',
        300:'#5BE680',

      },
       gray:{
        100:'#ECECEE',
        200:'#DFDAFE',
        300:'#838388',

      },
     pink :{
        100:'#FEDAE8'
        

      },
      black:{
        100:'#2C2E3F',
        200:'#141517',
        300:'#2C2E3F',
        400:'#1D2539'
      },
      yellow:{
        100:'#FEC365'
      }
        
      
    },
    extend: {
   fontSize:{
     '8xl': '6rem'
   },
   spacing:{
     '155':'32rem',
   }

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
