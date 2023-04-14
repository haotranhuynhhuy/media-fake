type Ratio =
  | 'logo'
  | '1x1'
  | '112x63'
  | '97x98'
  | '40x40'
  | '120x120'
  | '117x66'
  | '740x417'
  | '644x362';

type FontWeightStyle =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type TextStyle =
  | 'uppercase'
  | 'capitalize'
  | 'underline'
  | 'italic'
  | 'center'
  | 'justify'
  | 'normal'
  | 'right'
  | 'left'
  | 'nowrap';

type ColorStyle =
  | 'white'
  | 'black'
  | 'blueNavy'
  | 'dimGray'
  | 'jet'
  | 'jetSub'
  | 'silver'
  | 'cg-red'
  | 'gainsboro';

type LetterSpacing = 's00015' | 's005';

type GeneralTextStyle =
  | ColorStyle
  | FontWeightStyle
  | TextStyle
  | LetterSpacing;
