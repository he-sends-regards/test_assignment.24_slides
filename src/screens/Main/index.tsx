import { SyntheticEvent, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ChildrenAmount from '../../components/ChildrenAmount';
import TimerValue from '../../components/TimerValue';
import CustomerTable from '../../components/CustomerTable';
import TabPanel from '../../components/TabPanel';
import { INITIAL_TIME_SEC } from '../../constants';
import './style.css';

const Main = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="main">
      <Tabs value={value} onChange={handleChange} orientation="vertical">
        <Tab label="Timer hook" />
        <Tab label="Amount of values" />
        <Tab label="Interface markup" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <TimerValue initialValue={INITIAL_TIME_SEC} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <ChildrenAmount />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <CustomerTable />
      </TabPanel>
    </div>
  );
};

export default Main;
