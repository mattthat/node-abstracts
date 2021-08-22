import complete from 'es6-complete';
import AbstractBaseEnum from '../src/AbstractBaseEnum';

export default class ColorEnum extends AbstractBaseEnum {}

ColorEnum.RED = new ColorEnum('RED');
ColorEnum.BLUE = new ColorEnum('BLUE');
ColorEnum.GREEN = new ColorEnum('GREEN');

complete(ColorEnum);
