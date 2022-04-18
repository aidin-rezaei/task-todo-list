import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
function App() {
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 0,
      top: 1,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    <div className="App">
      <Card sx={{ minWidth: 275, borderRadius: 'unset' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, color: 'red', Width: '50px', position: 'relative' }} gutterBottom>
            <ArrowUpwardIcon sx={{ fontSize: 14 }}></ArrowUpwardIcon>
            Critical
            <StyledBadge badgeContent={'new'} sx={{ position: 'absolute', right: 5, top: 6 }} color="success">
            </StyledBadge>
          </Typography>
          <Typography variant="h6" component="div">
            task title very important
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores nemo error beatae explicabo veritatis?
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" sx={{ borderRadius: '50px' }} size="small">Learn More</Button>
        </CardActions>
        <div className="hrdsf"></div>
        <div className='marg5'>
          <div>
            <Typography sx={{ fontSize: 14, Width: '50px', position: 'relative' }} color="text.secondary">
              Due date
            </Typography>
            <Typography sx={{ fontSize: 16, Width: '50px', position: 'relative' }} component="div">
              23.11.2021
            </Typography>

          </div>
          <Stack direction="row" sx={{ marginTop: '10px', marginLeft: '140px' }} spacing={-1}>
            <Avatar sx={{ fontSize: 14, bgcolor: deepOrange[500], width: 30, height: 30, border: 'solid 3px #fff' }}>N</Avatar>
            <Avatar sx={{ fontSize: 14, bgcolor: deepPurple[500], width: 30, height: 30, border: 'solid 3px #fff' }}>OP</Avatar>
            <Avatar sx={{ fontSize: 14, bgcolor: deepOrange[500], width: 30, height: 30, border: 'solid 3px #fff' }}>Ar</Avatar>
            <Avatar sx={{ fontSize: 14, bgcolor: deepPurple[500], width: 30, height: 30, border: 'solid 3px #fff' }}>S</Avatar>
          </Stack>
          <IconButton aria-label="delete" sx={{ marginLeft: '-5px' }}>
            <EditIcon />
          </IconButton>
        </div>
      </Card>
      <Card sx={{ minWidth: 275, borderRadius: 'unset' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, color: 'red', Width: '50px', position: 'relative' }} gutterBottom>
            <ArrowUpwardIcon sx={{ fontSize: 14 }}></ArrowUpwardIcon>
            Critical
            <StyledBadge badgeContent={'new'} sx={{ position: 'absolute', right: 5, top: 6 }} color="success">
            </StyledBadge>
          </Typography>
          <Typography variant="h6" component="div">
            task title very important
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores nemo error beatae explicabo veritatis?
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" sx={{ borderRadius: '50px' }} size="small">Learn More</Button>
        </CardActions>
        <div className="hrdsf"></div>
        <div className='marg5'>
          <div>
            <Typography sx={{ fontSize: 14, Width: '50px', position: 'relative' }} color="text.secondary">
              Due date
            </Typography>
            <Typography sx={{ fontSize: 16, Width: '50px', position: 'relative' }} component="div">
              23.11.2021
            </Typography>

          </div>
          <Stack direction="row" sx={{ marginTop: '10px', marginLeft: '140px' }} spacing={-1}>
            <Avatar sx={{ fontSize: 14, bgcolor: deepOrange[500], width: 30, height: 30, border: 'solid 3px #fff' }}>N</Avatar>
            <Avatar sx={{ fontSize: 14, bgcolor: deepPurple[500], width: 30, height: 30, border: 'solid 3px #fff' }}>OP</Avatar>
            <Avatar sx={{ fontSize: 14, bgcolor: deepOrange[500], width: 30, height: 30, border: 'solid 3px #fff' }}>Ar</Avatar>
            <Avatar sx={{ fontSize: 14, bgcolor: deepPurple[500], width: 30, height: 30, border: 'solid 3px #fff' }}>S</Avatar>
          </Stack>
          <IconButton aria-label="delete" sx={{ marginLeft: '-5px' }}>
            <EditIcon />
          </IconButton>
        </div>
      </Card>
      <Card sx={{ minWidth: 275, borderRadius: 'unset' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, color: 'red', Width: '50px', position: 'relative' }} gutterBottom>
            <ArrowUpwardIcon sx={{ fontSize: 14 }}></ArrowUpwardIcon>
            Critical
            <StyledBadge badgeContent={'new'} sx={{ position: 'absolute', right: 5, top: 6 }} color="success">
            </StyledBadge>
          </Typography>
          <Typography variant="h6" component="div">
            task title very important
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores nemo error beatae explicabo veritatis?
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" sx={{ borderRadius: '50px' }} size="small">Learn More</Button>
        </CardActions>
        <div className="hrdsf"></div>
        <div className='marg5'>
          <div>
            <Typography sx={{ fontSize: 14, Width: '50px', position: 'relative' }} color="text.secondary">
              Due date
            </Typography>
            <Typography sx={{ fontSize: 16, Width: '50px', position: 'relative' }} component="div">
              23.11.2021
            </Typography>

          </div>
          <Stack direction="row" sx={{ marginTop: '10px', marginLeft: '140px' }} spacing={-1}>
            <Avatar sx={{ fontSize: 14, bgcolor: deepOrange[500], width: 30, height: 30, border: 'solid 3px #fff' }}>N</Avatar>
            <Avatar sx={{ fontSize: 14, bgcolor: deepPurple[500], width: 30, height: 30, border: 'solid 3px #fff' }}>OP</Avatar>
            <Avatar sx={{ fontSize: 14, bgcolor: deepOrange[500], width: 30, height: 30, border: 'solid 3px #fff' }}>Ar</Avatar>
            <Avatar sx={{ fontSize: 14, bgcolor: deepPurple[500], width: 30, height: 30, border: 'solid 3px #fff' }}>S</Avatar>
          </Stack>
          <IconButton aria-label="delete" sx={{ marginLeft: '-5px' }}>
            <EditIcon />
          </IconButton>
        </div>
      </Card>
    </div>
  );
}

export default App;
