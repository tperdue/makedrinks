import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import './style.css'

const useCardStyles = makeStyles(theme => ({

    avatar: {
        backgroundColor: theme.palette.primary.light
    },
    media: {
        height: "40vh",
        width: "100%",

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center'
    },

    root: {
        marginBottom: "1rem",

    },

    body2: {
        display: "flex",

    }
}))

const useCardContentStyles = makeStyles(theme => ({
    root: {
        padding: "0"
    },
    inside: {
        marginRight: "1rem",
        marginLeft: "1rem"
    }
}))


const RecipeCard = (props) => {

    const { recipeInfo } = props;
    const cardCss = useCardStyles();
    const cardContentCss = useCardContentStyles();
    const createAvatar = (recipeInfo) => {
        return (
            <Avatar
                aria-label="recipe"
                className={cardCss.avatar}

            >{recipeInfo.name[0]}</Avatar>
        )
    }



    return (

        <div className={'flip-card'}>
            <div className="flip-card-inner">

                <div className={`flip-card-front`}>

                    <Card className={cardCss.root}>
                        <CardHeader

                            avatar={createAvatar(recipeInfo)}
                            title={recipeInfo.name}
                            subheader={recipeInfo.category}


                        >

                        </CardHeader>
                        <CardMedia
                            image={recipeInfo.thumbNail}
                            title={recipeInfo.name}
                            className={cardCss.media}
                        ></CardMedia>

                        <CardContent className={cardContentCss.root}>
                            <span className={cardContentCss.inside}>
                                Ingredients:
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    className={cardCss.body2}

                                >
                                    {recipeInfo.ingredients.join(',')}
                                </Typography>

                            </span>

                        </CardContent>
                    </Card>
                </div>











            </div>
        </div>


    )
}


const mapStateToProps = (state, ownProps) => {

    const { recipeInfo } = ownProps;

    return {
        recipeInfo
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
