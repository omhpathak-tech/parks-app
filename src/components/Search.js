import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import './Search.css'


const filter = createFilterOptions();

export default function Search() {
  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      name: '',
      year: '',
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    name: '',
    year: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      name: dialogValue.name,
      year: parseInt(dialogValue.year, 10),
    });

    handleClose();
  };

  return (
    <React.Fragment>
        <div className="search">
      <Autocomplete 
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoact_id instant valact_idation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                name: newValue,
                year: '',
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              name: newValue.inputValue,
              year: '',
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              name: `Activity not available`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={activities}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Search Activity" />}
      />
      </div>
    </React.Fragment>
  );
}


// list of activities from the GET API call of NPS 
const activities = [
    {
        act_id: "09DF0950-D319-4557-A57E-04CD2F63FF42",
        name: "Arts and Culture"
      },
      {
        act_id: "13A57703-BB1A-41A2-94B8-53B692EB7238",
        name: "Astronomy"
      },
      {
        act_id: "5F723BAD-7359-48FC-98FA-631592256E35",
        name: "Auto and ATV"
      },
      {
        act_id: "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
        name: "Biking"
      },
      {
        act_id: "071BA73C-1D3C-46D4-A53C-00D5602F7F0E",
        name: "Boating"
      },
      {
        act_id: "A59947B7-3376-49B4-AD02-C0423E08C5F7",
        name: "Camping"
      },
      {
        act_id: "07CBCA6A-46B8-413F-8B6C-ABEDEBF9853E",
        name: "Canyoneering"
      },
      {
        act_id: "BA316D0F-92AE-4E00-8C80-DBD605DC58C3",
        name: "Caving"
      },
      {
        act_id: "B12FAAB9-713F-4B38-83E4-A273F5A43C77",
        name: "Climbing"
      },
      {
        act_id: "C11D3746-5063-4BD0-B245-7178D1AD866C",
        name: "Compass and GPS"
      },
      {
        act_id: "8C495067-8E94-4D78-BBD4-3379DACF6550",
        name: "Dog Sledding"
      },
      {
        act_id: "AE42B46C-E4B7-4889-A122-08FE180371AE",
        name: "Fishing"
      },
      {
        act_id: "D72206E4-6CD1-4441-A355-F8F1827466B1",
        name: "Flying"
      },
      {
        act_id: "1DFACD97-1B9C-4F5A-80F2-05593604799E",
        name: "Food"
      },
      {
        act_id: "3F3ABD16-2C52-4EAA-A1F6-4235DE5686F0",
        name: "Golfing"
      },
      {
        act_id: "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
        name: "Guided Tours"
      },
      {
        act_id: "42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A",
        name: "Hands-On"
      },
      {
        act_id: "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
        name: "Hiking"
      },
      {
        act_id: "0307955A-B65C-4CE4-A780-EB36BAAADF0B",
        name: "Horse Trekking"
      },
      {
        act_id: "8386EEAF-985F-4DE8-9037-CCF91975AC94",
        name: "Hunting and Gathering"
      },
      {
        act_id: "5FF5B286-E9C3-430E-B612-3380D8138600",
        name: "Ice Skating"
      },
      {
        act_id: "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
        name: "Junior Ranger Program"
      },
      {
        act_id: "B204DE60-5A24-43DD-8902-C81625A09A74",
        name: "Living History"
      },
      {
        act_id: "C8F98B28-3C10-41AE-AA99-092B3B398C43",
        name: "Museum Exhibits"
      },
      {
        act_id: "4D224BCA-C127-408B-AC75-A51563C42411",
        name: "Paddling"
      },
      {
        act_id: "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
        name: "Park Film"
      },
      {
        act_id: "7779241F-A70B-49BC-86F0-829AE332C708",
        name: "Playground"
      },
      {
        act_id: "42CF4021-8524-428E-866A-D33097A4A764",
        name: "SCUBA Diving"
      },
      {
        act_id: "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
        name: "Shopping"
      },
      {
        act_id: "F9B1D433-6B86-4804-AED7-B50A519A3B7C",
        name: "Skiing"
      },
      {
        act_id: "3EBF7EAC-68FC-4754-B6A4-0C38A1583D45",
        name: "Snorkeling"
      },
      {
        act_id: "C38B3C62-1BBF-4EA1-A1A2-35DE21B74C17",
        name: "Snow Play"
      },
      {
        act_id: "7C912B83-1B1B-4807-9B66-97C12211E48E",
        name: "Snowmobiling"
      },
      {
        act_id: "01D717BC-18BB-4FE4-95BA-6B13AD702038",
        name: "Snowshoeing"
      },
      {
        act_id: "AE3C95F5-E05B-4A28-81DD-1C5FD4BE88E2",
        name: "Surfing"
      },
      {
        act_id: "587BB2D3-EC35-41B2-B3F7-A39E2B088AEE",
        name: "Swimming"
      },
      {
        act_id: "94369BFD-F186-477E-8713-AE2A745154DA",
        name: "Team Sports"
      },
      {
        act_id: "4D06CEED-90C6-4B69-B264-32CC90B69BA6",
        name: "Tubing"
      },
      {
        act_id: "8A1C7B17-C2C6-4F7C-9539-EA1E19971D80",
        name: "Water Skiing"
      },
      {
        act_id: "0B685688-3405-4E2A-ABBA-E3069492EC50",
        name: "Wildlife Watching"
      },

]; 