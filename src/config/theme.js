const Palette = {
  RipePlum: '#4E0250',
  FreshEggplant: '#87027b',
  Scooter: '#3CCBDA',
  Cerise: '#e6268c',
  Thunder: '#322828',
  White: '#ffffff',
  DustyGray: '#979797',
  SelectiveYellow: '#ffbb00',
  EcruWhite: '#F7F7EB',
  Alto: '#D8D8D8',
  ElectricLime: '#d0ff0d'
}

export const Colors = {
  Purple: Palette.RipePlum,
  LightPurple: Palette.FreshEggplant,
  Blue: Palette.Scooter,
  Pink: Palette.Cerise,
  Brown: Palette.Thunder,
  White: Palette.White,
  Gray: Palette.DustyGray,
  LightGray: Palette.Alto,
  Yellow: Palette.SelectiveYellow,
  Cream: Palette.EcruWhite,
  DarkBrown: Palette.Thunder,
  Green: Palette.ElectricLime
}

export const Theme = {
  default: {
    FontFamily: 'Poppins',
    PageBackgroundColor: Colors.Cream,
    PageColor: Colors.DarkBrown,
    PageActiveColorNegative: Colors.Blue,
    PageActiveColor: Colors.Pink,
    PrimaryColor: Colors.LightPurple,
    TitleFontSize: '4.6rem',
    TitleLineHeight: '4.8rem',
    TextFontSize: '1.6rem',
    TextLineHeight: '2.4rem',
    FontWeight: {
      light: 300,
      medium: 500
    }
  }
}
