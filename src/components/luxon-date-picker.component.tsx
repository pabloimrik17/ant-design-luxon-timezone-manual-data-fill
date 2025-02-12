import { DatePicker } from 'antd';
import { DateTime } from 'luxon';
import luxonGenerateConfig from 'rc-picker/lib/generate/luxon';

const MyDatePicker = DatePicker.generatePicker<DateTime>({
    ...luxonGenerateConfig,
    getNow: () => DateTime.now(),
});

export default MyDatePicker;
