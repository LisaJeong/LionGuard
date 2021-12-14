import * as React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import { withStyles } from "@mui/styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import AppBar from '@mui/material/AppBar';
import Chip from '@mui/material/Chip';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 12,
  fontWeight:'normal',
  padding: '6px 14px',
  alignItems: 'center',
  border: '1px solid',
  borderRadius:25,
  lineHeight: 1.5,
  backgroundColor: '#000d74',
  borderColor: '#000d74',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
});

const CustomColorCheckbox = withStyles({
  root: {
    color: "#000d74",
    "&$checked": {
      color: "#000d74"
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

export default function SchduleCommute() {
  const [checked, setChecked] = React.useState([0]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const Timeslots = {
    0: "18:00",
    1: "19:00",
    2: "19:30",
    3: "20:00",
    4: "21:00",
    5: "08:00",
    6: "09:00",
    7: "10:00"
  }
  const Waitings = {
    0: "4 waiting",
    1: "1 waiting",
    2: "3 waiting",
    3: "3 waiting",
    4: "2 waiting",
    5: "3 waiting",
    6: "1 waiting",
    7: "4 waiting"
  }

  return (
    <SafeAreaView>
        <AppBar style={{backgroundColor:'#000d74'}} position='static'>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
            variant="fullWidth" TabIndicatorProps={{
              style: {
                backgroundColor: "white"
              }
          }}>
            <Tab label={<span style={{ color: 'white', fontSize:16, fontWeight:'medium'}}>10/28</span>} />
            <Tab label={<span style={{ color: 'white', fontSize:16, fontWeight:'medium'}}>10/29</span>} />
            <Tab label={<span style={{ color: 'white', fontSize:16, fontWeight:'medium'}}>10/30</span>} />      
          </Tabs>
        </AppBar>
        
      <View>
        <Pressable style={styles.btn_1}>
              <Text style={styles.txt_1}>Meeting Gates: 116 St Broadway</Text>
        </Pressable>
        <Pressable style={styles.btn}>
              <Text style={styles.txt}>CHECK YOUR PREFERENCE TIME</Text>
        </Pressable>
        <Pressable style={styles.btn_1}>
              <Text style={styles.txt_1}>CHOOSE YOUR TIMESLOT</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <List sx={{width: '40%'}}>
            {[0, 1, 2, 3, 4, 5,6].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <BootstrapButton variant="contained" disableRipple>
                      {Waitings[value]}
                    </BootstrapButton>
                  }
                  disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                    <ListItemIcon>
                      <CustomColorCheckbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }} />

                    </ListItemIcon>
                    <ListItemText id={labelId} primary={Timeslots[value]} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <FormGroup sx={{alignItems:'center'}}>
            <FormControlLabel control={<CustomColorCheckbox defaultChecked />} label="Save as Your Prefer Commute Time" />
          </FormGroup>
        
          <Pressable style={styles.btn_3}>
            <Text style={styles.txt_1}>JOIN</Text>
          </Pressable>
      </View>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  title: {
    color: '#000d74',
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 8,
    marginVertical: 20,
    marginHorizontal: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#afafaf'
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 2,
    backgroundColor: '#000d74',
    marginTop: 10,
    width :'30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: '#000d74',
    borderWidth:2
  },

  btn_1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 2,
    backgroundColor: 'white',
    marginTop: 10,
    width :'30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: '#000d74',
    borderWidth:2
  },
  
  btn_3: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 2,
    backgroundColor: 'white',
    marginTop: 10,
    
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: '#000d74',
    borderWidth:2
  },
  txt: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'medium',
    letterSpacing: 0.25,
    color: '#ffffff',
  },
  txt_1: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'medium',
    letterSpacing: 0.25,
    color: '#000d74',
  }
});
