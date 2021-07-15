import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '16px',
    borderLeft: '3px solid #f26571',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  detailsRight: {
  	display: 'flex',
  	alignItems: 'center',
  	marginLeft: 'auto',
  	padding: '16px',
  	whiteSpace: 'nowrap',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const InvoiceCard = props => {
	const classes = useStyles();
  	const theme = useTheme();

  	const data = props.data;

  	return (
  		<React.Fragment>
  			{data.map((item) => {
  				return(
  					<Card className={classes.root} key={item.id}>
				      <div className={classes.details}>
				        <CardContent className={classes.content}>
				        	<Typography variant="subtitle1" color="textSecondary">
				            	{item.id}
				          	</Typography>
				          <Typography component="h5" variant="h5">
				            {item.title}
				          </Typography>
				          <Typography variant="subtitle1" color="textSecondary">
				            {item.description}
				          </Typography>
				        </CardContent>
				      </div>
				      <div className={classes.detailsRight}>
				      	<Typography component="h5" variant="h5" >
				      		{item.amount}
			      		</Typography>
				      </div>
				    </Card>
				)
  			})}
  		</React.Fragment>
	  );
}

export default InvoiceCard;