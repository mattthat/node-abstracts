import Translator from 'some-translation-solution';

export class WeekdaysEnum extends AbstractBaseEnum {
    translate(language) {
        return new Translator(language,
            this.toString()).toString();
    }
}
WeekdaysEnum.MONDAY = new WeekdaysEnum('MONDAY');
WeekdaysEnum.TUESDAY = new WeekdaysEnum('TUESDAY');
WeekdaysEnum.WEDNESDAY = new WeekdaysEnum('WEDNESDAY');
WeekdaysEnum.THURSDAY = new WeekdaysEnum('THURSDAY');
WeekdaysEnum.FRIDAY = new WeekdaysEnum('FRIDAY');
WeekdaysEnum.SATURDAY = new WeekdaysEnum('SATURDAY');
WeekdaysEnum.SUNDAY = new WeekdaysEnum('SUNDAY');