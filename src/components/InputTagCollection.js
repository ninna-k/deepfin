import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  selected: {
  	backgroundImage: 'linear-gradient(to right, #ff8080 0%, #e84f64 100%)',
  }
}));

const InputTagCollection = props => {
	const classes = useStyles();

	const tags = props.filters.passingTags;

	  return (
	  	<React.Fragment>
		    <div className={classes.root}>
		    	{Object.keys(tags).map((filterType) => {
		    		return(
		    			<React.Fragment>
			    			<Typography variant="subtitle1" color="textSecondary">
				            	{filterType}
				          	</Typography>

				          	{ Object.keys(tags[filterType]).map((filterName, index) => {
				          		return(
		      						<Button 
		      							key = {index}
		      							variant="contained"
		      							className={tags[filterType][filterName] ? classes.selected : ''}
		      							data-name={filterName}
		      							onClick={e => props.allFilterClickListener(e, filterType, filterName)}
	      							>
	      								{filterName}
      								</Button>
			          			)
				          	}) }
			          	</React.Fragment>
		    		)
		    	})}
		    </div>
	  	</React.Fragment>
	  );
}

export default InputTagCollection;
